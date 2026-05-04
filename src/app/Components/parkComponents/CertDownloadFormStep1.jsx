"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const NAME_REGEX = /^[a-zA-Z\s]{2,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[\d\s\-]{7,15}$/;

function validateFields({ name, email, phone }) {
  const errs = {};
  if (!NAME_REGEX.test(name.trim())) {
    errs.name = "Please enter a valid name (letters & spaces only)";
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    errs.email = "Please enter a valid email address";
  }
  const digitsOnly = phone.replace(/\D/g, "");
  if (!PHONE_REGEX.test(phone.trim()) || digitsOnly.length < 7 || digitsOnly.length > 15) {
    errs.phone = "Please enter a valid phone number";
  }
  return errs;
}

function normalizePhone(raw) {
  const stripped = raw.replace(/[\s\-]/g, "");
  if (/^\d{10}$/.test(stripped)) return `+91${stripped}`;
  if (/^\+/.test(stripped)) return stripped;
  return `+91${stripped}`;
}

function FormField({ error, children }) {
  return (
    <div className="flex flex-col w-full">
      {children}
      {error ? <span className="text-sm text-red-400 mt-1">{error}</span> : null}
    </div>
  );
}

const inputClass =
  "border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full";

const CertDownloadFormStep1 = ({ onClose, onOtpSent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleBlur = (field) => {
    const fieldErrors = validateFields({ name, email, phone });
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    } else {
      setErrors((prev) => { const c = { ...prev }; delete c[field]; return c; });
    }
  };

  const clearError = (field) => {
    setErrors((prev) => { const c = { ...prev }; delete c[field]; return c; });
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
      const formattedPhone = normalizePhone(phone.trim());

      const response = await fetch("/api/cert-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formattedPhone }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(data.error || "Failed to send OTP. Please try again.");
        return;
      }

      onOtpSent({ name, email, phone: formattedPhone, organization, txId: data.txId });
    } catch (err) {
      console.error("OTP send error:", err);
      setServerError("Failed to send OTP. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#092241] flex flex-col gap-[24px] w-full sm:w-[560px] px-6 sm:px-10 py-6 relative">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="fpt-600 text-[22px] sm:text-[32px] text-white leading-[105%] pb-1">
            Download Certifications
          </h2>
          <div className="bg-[#F7E327] h-[8px] w-full" />
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-white/80 hover:text-white transition-colors ml-4 mt-1 flex-shrink-0"
        >
          <X size={32} strokeWidth={2} />
        </button>
      </div>

      <p className="fsans-400 text-[14px] text-white/60 leading-[150%]">
        Enter your details to receive an OTP on your phone and download the certification documents.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[20px]">
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

        <div className="flex flex-col sm:flex-row gap-[20px]">
          <FormField error={errors.name}>
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => { setName(e.target.value); clearError("name"); }}
              onBlur={() => handleBlur("name")}
              className={inputClass}
              disabled={isSending}
            />
          </FormField>

          <FormField error={errors.email}>
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
              onBlur={() => handleBlur("email")}
              className={inputClass}
              disabled={isSending}
            />
          </FormField>
        </div>

        <div className="flex flex-col sm:flex-row gap-[20px]">
          <FormField error={errors.phone}>
            <input
              type="tel"
              placeholder="Phone * (e.g. +91 98765 43210)"
              value={phone}
              onChange={(e) => {
                const val = e.target.value.replace(/[^\d+\s\-]/g, "");
                if (val.replace(/\D/g, "").length > 15) return;
                setPhone(val);
                clearError("phone");
              }}
              onBlur={() => handleBlur("phone")}
              onKeyDown={(e) => {
                const allowed = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab", "+", "-", " "];
                if (!/^\d$/.test(e.key) && !allowed.includes(e.key)) e.preventDefault();
              }}
              className={`${inputClass} appearance-none`}
              disabled={isSending}
            />
          </FormField>

          <FormField error={null}>
            <input
              type="text"
              placeholder="Organization (optional)"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className={inputClass}
              disabled={isSending}
            />
          </FormField>
        </div>

        {serverError ? (
          <p className="text-red-400 text-sm fsans-400">{serverError}</p>
        ) : null}

        <div>
          <button
            type="submit"
            disabled={isSending}
            className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group opacity-90 hover:opacity-100 disabled:opacity-50 transition-all duration-300"
          >
            <p className="whitespace-nowrap">
              {isSending ? "Sending OTP..." : "Get OTP"}
            </p>
            <AnimatePresence mode="wait">
              {isSending ? (
                <motion.div key="spin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </motion.div>
              ) : (
                <motion.div key="arrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <img src="/rightUpArrow.svg" alt="" className="h-5 w-5 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
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
