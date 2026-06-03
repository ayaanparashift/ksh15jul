"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const NAME_REGEX = /^[a-zA-Z\s]{2,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function normalizeIndianPhone(raw) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `+91${digits.slice(1)}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  if (digits.length === 13 && digits.startsWith("091")) return `+91${digits.slice(3)}`;
  return null;
}

function validateFields({ name, email, phone }) {
  const errs = {};
  if (!NAME_REGEX.test(name.trim())) {
    errs.name = "Please enter a valid name (letters & spaces only)";
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    errs.email = "Please enter a valid email address";
  }
  if (!normalizeIndianPhone(phone)) {
    errs.phone = "Enter a valid 10-digit Indian mobile number";
  }
  return errs;
}

const inputBase =
  "w-full bg-[#263548] text-white border-b border-[#146BD7] py-2 px-4 outline-none fsans-400 text-[15px] placeholder-white/30 transition-colors duration-200";

const errorInputClass = "border-red-500";

function FormField({ error, children }) {
  return (
    <div className="flex flex-col w-full gap-1">
      {children}
      {error ? (
        <span className="text-xs text-red-400 fsans-400 pl-1">{error}</span>
      ) : null}
    </div>
  );
}

const CertDownloadFormStep1 = ({ onClose, onOtpSent, savedDetails }) => {
  const [name, setName] = useState(savedDetails?.name || "");
  const [email, setEmail] = useState(savedDetails?.email || "");
  const [phone, setPhone] = useState(savedDetails?.phone || "");
  const [organization, setOrganization] = useState(savedDetails?.organization || "");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [serverError, setServerError] = useState("");

  const clearError = (field) => {
    setErrors((prev) => {
      const c = { ...prev };
      delete c[field];
      return c;
    });
  };

  const validateField = (field) => {
    const fieldErrors = validateFields({ name, email, phone });
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    } else {
      clearError(field);
    }
  };

  const handlePhoneChange = (e) => {
    // Allow: digits, spaces, +, hyphens — anything a phone number could look like while typing
    const raw = e.target.value.replace(/[^\d\s+\-()]/g, "");
    // Don't let digit count exceed 13 (worst case: +91 + 10 digits + some spaces/hyphens tolerated)
    if (raw.replace(/\D/g, "").length > 13) return;
    setPhone(raw);
    const digitCount = raw.replace(/\D/g, "").length;
    if (digitCount >= 10) {
      if (!normalizeIndianPhone(raw)) {
        setErrors((prev) => ({ ...prev, phone: "Enter a valid 10-digit Indian mobile number" }));
      } else {
        clearError("phone");
      }
    } else {
      clearError("phone");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    const fieldErrors = validateFields({ name, email, phone });
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    // If a valid unexpired token already exists (user closed & reopened), skip re-sending
    if (savedDetails?.otpToken) {
      const firstToken = savedDetails.otpToken.split(",")[0];
      try {
        const payload = atob(firstToken.split(".")[0].replace(/-/g, "+").replace(/_/g, "/"));
        const [, , expiresAt] = payload.split("|");
        if (Number(expiresAt) > Date.now()) {
          onOtpSent({
            name: name.trim(),
            email: email.trim(),
            phone: normalizeIndianPhone(phone),
            organization: organization.trim(),
            otpToken: savedDetails.otpToken,
          });
          return;
        }
      } catch {}
    }

    setIsSending(true);
    setServerError("");

    try {
      const res = await fetch("/api/cert-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: normalizeIndianPhone(phone),
          organization: organization.trim(),
          website: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setServerError(data.error || "Failed to send OTP. Please try again.");
        return;
      }

      onOtpSent({
        name: name.trim(),
        email: email.trim(),
        phone: normalizeIndianPhone(phone),
        organization: organization.trim(),
        otpToken: data.token,
      });
    } catch {
      setServerError("Failed to send OTP. Please check your connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#092241] flex flex-col gap-3 lg:gap-6 w-full p-5 lg:p-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="fpt-600 text-[26px] sm:text-[30px] text-white leading-[105%] pb-[6px]">
            Download Certifications
          </h2>
          <div className="bg-[#F7E327] h-[6px] w-full" />
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-[#E30613] hover:text-red-400 transition-colors ml-4 mt-1 flex-shrink-0"
        >
          <X size={28} strokeWidth={2} />
        </button>
      </div>

      <p className="fsans-400 text-[13px] text-white/50 leading-[160%] -mt-2">
        We&apos;ll send a 4-digit OTP to your email to verify your identity.
      </p>

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        className="absolute left-[-9000px] opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-3 lg:gap-6"
      >
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
          <FormField error={errors.name}>
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => { setName(e.target.value); clearError("name"); }}
              onBlur={() => validateField("name")}
              className={`${inputBase} ${errors.name ? errorInputClass : ""}`}
              disabled={isSending}
            />
          </FormField>

          <FormField error={errors.email}>
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
              onBlur={() => validateField("email")}
              className={`${inputBase} ${errors.email ? errorInputClass : ""}`}
              disabled={isSending}
              autoComplete="email"
            />
          </FormField>
        </div>

        {/* Phone */}
        <FormField error={errors.phone}>
          <input
            type="tel"
            placeholder="Mobile Number * (e.g. 98765 43210)"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={() => validateField("phone")}
            className={`${inputBase} ${errors.phone ? errorInputClass : ""}`}
            disabled={isSending}
            autoComplete="tel"
          />
        </FormField>

        {/* Organization */}
        <input
          type="text"
          placeholder="Organization (optional)"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className={inputBase}
          disabled={isSending}
        />

        {serverError ? (
          <p className="text-red-400 text-sm fsans-400 -mt-1">{serverError}</p>
        ) : null}

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSending}
            className="bg-[#E30613] h-12 flex items-center text-[15px] fsans-600 text-white px-6 gap-3 rounded-3xl opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <span className="whitespace-nowrap">
              {isSending ? "Sending OTP…" : "Send OTP"}
            </span>
            <AnimatePresence mode="wait">
              {isSending ? (
                <motion.div
                  key="spin"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </motion.div>
              ) : (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img
                    src="/rightUpArrow.svg"
                    alt=""
                    className="h-4 w-4 rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CertDownloadFormStep1;
