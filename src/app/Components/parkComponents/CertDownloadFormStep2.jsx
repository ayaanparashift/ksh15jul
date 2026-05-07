"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, X } from "lucide-react";
import OtpInput from "./OtpInput";

const COOLDOWN_SECONDS = 30;

function maskPhone(phone = "") {
  const digits = phone.replace(/\D/g, "");
  if (digits.length <= 4) return phone;
  return phone.replace(/\d(?=\d{4})/g, "*");
}

const CertDownloadFormStep2 = ({ userDetails, onClose, onBack }) => {
  const { name, email, phone, organization } = userDetails ?? {};
  const [txId, setTxId] = useState(userDetails?.txId ?? "");

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendMsg, setResendMsg] = useState("");
  const [step, setStep] = useState("otp"); // "otp" | "success"
  const [cooldown, setCooldown] = useState(COOLDOWN_SECONDS);
  const timerRef = useRef(null);

  useEffect(() => {
    startCooldown();
    return () => clearInterval(timerRef.current);
  }, []);

  function startCooldown() {
    setCooldown(COOLDOWN_SECONDS);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  const handleResend = async () => {
    if (cooldown > 0 || isResending) return;
    setIsResending(true);
    setResendMsg("");
    setOtpError("");

    try {
      const response = await fetch("/api/cert-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, name, email }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setResendMsg("Failed to resend OTP. Please try again.");
        return;
      }

      setTxId(data.txId);
      setOtp("");
      setResendMsg("New code sent!");
      startCooldown();
      setTimeout(() => setResendMsg(""), 3000);
    } catch {
      setResendMsg("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  const verifyOtp = async (enteredOtp) => {
    setIsVerifying(true);
    setOtpError("");

    try {
      const response = await fetch("/api/cert-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          txId,
          phone,
          otp: enteredOtp,
          name,
          email,
          organization,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        const msg = data.error || "OTP verification failed.";
        if (msg.toLowerCase().includes("expir")) {
          setOtpError("Code expired. Please resend.");
        } else if (
          msg.toLowerCase().includes("invalid") ||
          msg.toLowerCase().includes("wrong")
        ) {
          setOtpError("Invalid code. Please try again.");
        } else {
          setOtpError(msg);
        }
        return;
      }

      setStep("success");
    } catch {
      setOtpError("Failed to verify OTP. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleOtpSubmit = async (enteredOtp) => {
    if (!enteredOtp || enteredOtp.length !== 4) {
      setOtpError("Please enter the 4-digit code");
      return;
    }
    await verifyOtp(enteredOtp);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 4) {
      setOtpError("Please enter the 4-digit code");
      return;
    }
    await verifyOtp(otp);
  };

  if (step === "success") {
    return (
      <div className="bg-[#092241] flex flex-col gap-4 w-full p-5">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-[#E30613] hover:text-red-400 transition-colors"
          >
            <X size={28} strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col items-center text-center gap-5 pb-4">
          <CircleCheck size={60} color="#F7E327" strokeWidth={1.5} />

          <div>
            <h2 className="fpt-600 text-[26px] sm:text-[28px] text-white leading-[120%] pb-[6px]">
              Thank You!
            </h2>
            <div className="bg-[#F7E327] h-[6px] w-full" />
          </div>

          <p className="fsans-400 text-[14px] text-white/60 leading-[170%] max-w-[320px]">
            Your certification documents have been sent to{" "}
            <span className="text-white fsans-600">{email}</span>. Please check
            your inbox.
          </p>

          <button
            onClick={onClose}
            className="border border-white/20 h-11 flex items-center text-[14px] fsans-600 text-white px-5 rounded-3xl hover:border-white/50 transition-all duration-300 mt-1"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#092241] flex flex-col w-full p-10 gap-5">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="fpt-600 text-[26px] sm:text-[28px] text-white leading-[105%] pb-[6px]">
            Verify OTP
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

      <p className="fsans-400 text-[14px] text-white/60 leading-[160%]">
        Code sent to{" "}
        <span className="text-white fsans-600">{maskPhone(phone)}</span>
      </p>

      <form onSubmit={handleVerify} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <OtpInput
            value={otp}
            onChange={(val) => {
              setOtp(val);
              if (otpError) setOtpError("");
            }}
            onSubmit={handleOtpSubmit}
            disabled={isVerifying}
            length={4}
          />
          <AnimatePresence mode="wait">
            {otpError ? (
              <motion.span
                key="err"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-red-400 fsans-400"
              >
                {otpError}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Resend row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="fsans-400 text-[13px] text-white/40">
            Didn&apos;t get it?
          </span>
          <button
            type="button"
            onClick={handleResend}
            disabled={cooldown > 0 || isResending}
            className="fsans-600 text-[13px] text-[#146BD7] hover:text-white disabled:text-white/25 disabled:cursor-not-allowed transition-colors"
          >
            {isResending ? "Resending…" : "Resend OTP"}
          </button>
          {cooldown > 0 ? (
            <span className="fsans-400 text-[12px] text-white/30">
              in {cooldown}s
            </span>
          ) : null}
          {resendMsg ? (
            <span className="fsans-400 text-[12px] text-green-400">
              {resendMsg}
            </span>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <button
            type="submit"
            disabled={isVerifying}
            className="bg-[#E30613] h-10 flex items-center text-[14px] fsans-600 text-white px-3 gap-2 rounded-3xl opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <span className="whitespace-nowrap text-[14px]">
              {isVerifying ? "Verifying…" : "Verify"}
            </span>
            <AnimatePresence mode="wait">
              {isVerifying ? (
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
                    className="h-4 w-4 rotate-45"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 fsans-600 text-[13px] text-white/40 hover:text-white transition-colors"
          >
            <img
              src="/rightUpArrow.svg"
              alt=""
              className="h-3 w-3 rotate-[225deg]"
            />
            Edit details
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default CertDownloadFormStep2;
