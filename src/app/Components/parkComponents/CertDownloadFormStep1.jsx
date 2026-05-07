"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const NAME_REGEX = /^[a-zA-Z\s]{2,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
// Accepts optional leading +, then 6–15 digits
const PHONE_REGEX = /^\+?[0-9]{6,15}$/;

function validateFields({ name, email, phone }) {
  const errs = {};
  if (!NAME_REGEX.test(name.trim())) {
    errs.name = "Please enter a valid name (letters & spaces only)";
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    errs.email = "Please enter a valid email address";
  }
  if (!PHONE_REGEX.test(phone.trim())) {
    errs.phone = "Enter a valid phone number (e.g. +919876543210)";
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
  const [organization, setOrganization] = useState(
    savedDetails?.organization || "",
  );
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateField = (field, values) => {
    const fieldErrors = validateFields(values);
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    } else {
      setErrors((prev) => {
        const c = { ...prev };
        delete c[field];
        return c;
      });
    }
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const c = { ...prev };
      delete c[field];
      return c;
    });
  };

  const handlePhoneChange = (e) => {
    // Allow + only at start, digits only otherwise, no spaces or dashes
    const raw = e.target.value;
    const cleaned = raw.startsWith("+")
      ? "+" + raw.slice(1).replace(/\D/g, "")
      : raw.replace(/\D/g, "");
    if (cleaned.replace(/\D/g, "").length > 15) return;
    setPhone(cleaned);
    // Real-time error: only show once they've typed enough to be clearly wrong
    if (cleaned.length > 3) {
      if (!PHONE_REGEX.test(cleaned)) {
        setErrors((prev) => ({
          ...prev,
          phone: "Enter a valid phone number (e.g. +919876543210)",
        }));
      } else {
        setErrors((prev) => {
          const c = { ...prev };
          delete c.phone;
          return c;
        });
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

    setIsSending(true);
    setServerError("");

    try {
      const response = await fetch("/api/cert-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.trim(),
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(data.error || "Failed to send OTP. Please try again.");
        return;
      }

      onOtpSent({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: organization.trim(),
        txId: data.txId,
      });
    } catch {
      setServerError("Failed to send OTP. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#092241] flex flex-col gap-6 w-full px-6 sm:px-8 py-7">
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
        We&apos;ll send a 4-digit OTP to your phone to verify your identity.
      </p>

      {/* Honeypot */}
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

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField error={errors.name}>
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
              onBlur={() => validateField("name", { name, email, phone })}
              className={`${inputBase} ${errors.name ? errorInputClass : ""}`}
              disabled={isSending}
            />
          </FormField>

          <FormField error={errors.email}>
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              onBlur={() => validateField("email", { name, email, phone })}
              className={`${inputBase} ${errors.email ? errorInputClass : ""}`}
              disabled={isSending}
            />
          </FormField>
        </div>

        {/* Phone — plain text, supports paste, any country format */}
        <FormField error={errors.phone}>
          <input
            type="tel"
            placeholder="Phone Number * (e.g. +919876543210)"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={() => validateField("phone", { name, email, phone })}
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
