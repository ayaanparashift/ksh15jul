"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, X } from "lucide-react";
import OtpInput from "./OtpInput";

const CERT_DOWNLOAD_URL = "/certifications/ksh-certifications.rar";
const COOLDOWN_SECONDS = 30;

function maskPhone(phone = "") {
  const digits = phone.replace(/\D/g, "");
  if (digits.length <= 4) return phone;
  return phone.replace(/\d(?=\d{4})/g, "*");
}

function triggerDownload(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const CertDownloadFormStep2 = ({ userDetails, onClose, onBack }) => {
  const { name, email, phone, organization, txId } = userDetails ?? {};

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [step, setStep] = useState("otp");
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

  const handleResend = () => {
    if (cooldown > 0) return;
    onBack();
  };

  const handleOtpSubmit = async (enteredOtp) => {
    if (!enteredOtp || enteredOtp.length !== 6) {
      setOtpError("Please enter a 6-digit OTP");
      return;
    }

    await verifyOtp(enteredOtp);
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
        setOtpError(data.error || "OTP verification failed. Please try again.");
        return;
      }

      triggerDownload(CERT_DOWNLOAD_URL);
      setStep("success");
    } catch (err) {
      console.error("OTP verify error:", err);
      setOtpError("Failed to verify OTP. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      setOtpError("Please enter a 6-digit OTP");
      return;
    }

    await verifyOtp(otp);
  };

  if (step === "success") {
    return (
      <div className="bg-[#092241] flex flex-col gap-[24px] w-full sm:w-[480px] px-6 sm:px-10 py-8">
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Close" className="text-white/80 hover:text-white transition-colors">
            <X size={32} strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col items-center text-center gap-5 py-2">
          <CircleCheck size={64} color="#F7E327" strokeWidth={1.5} />
          <div>
            <h2 className="fpt-600 text-[22px] sm:text-[28px] text-white leading-[120%]">
              Download Started!
            </h2>
            <div className="bg-[#F7E327] h-[6px] w-full mt-1" />
          </div>
          <p className="fsans-400 text-[15px] text-white/70 leading-[160%] max-w-[340px]">
            Your download has started. A copy has also been sent to{" "}
            <span className="text-white fsans-600">{email}</span>.
          </p>

          <a
            href={CERT_DOWNLOAD_URL}
            download
            className="fsans-600 text-[14px] text-[#F7E327] underline underline-offset-2 hover:text-white transition-colors"
          >
            If download didn&apos;t start, click here
          </a>

          <div className="flex gap-3 flex-wrap justify-center mt-2">
            <button
              onClick={() => triggerDownload(CERT_DOWNLOAD_URL)}
              className="bg-[#E30613] flex items-center gap-[10px] text-base fsans-600 text-white px-[21px] py-[12px] rounded-3xl group opacity-90 hover:opacity-100 transition-all duration-300"
            >
              Re-download
              <img src="/rightUpArrow.svg" alt="" className="h-5 w-5 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </button>
            <button
              onClick={onClose}
              className="border border-white/30 flex items-center gap-[10px] text-base fsans-600 text-white px-[21px] py-[12px] rounded-3xl hover:border-white/60 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#092241] flex flex-col gap-[24px] w-full sm:w-[480px] px-6 sm:px-10 py-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="fpt-600 text-[22px] sm:text-[28px] text-white leading-[105%] pb-1">
            Verify OTP
          </h2>
          <div className="bg-[#F7E327] h-[8px] w-full" />
        </div>
        <button onClick={onClose} aria-label="Close" className="text-white/80 hover:text-white transition-colors ml-4 mt-1 flex-shrink-0">
          <X size={32} strokeWidth={2} />
        </button>
      </div>

      <p className="fsans-400 text-[15px] text-white/70 leading-[150%]">
        OTP is shared on{" "}
        <span className="text-white fsans-600">{maskPhone(phone)}</span>
      </p>

      <form onSubmit={handleVerify} noValidate className="flex flex-col gap-[20px]">
        <div className="flex flex-col items-center gap-[16px]">
          <OtpInput
            value={otp}
            onChange={(val) => {
              setOtp(val);
              if (otpError) setOtpError("");
            }}
            onSubmit={handleOtpSubmit}
            disabled={isVerifying}
            length={6}
          />
          {otpError ? (
            <span className="text-sm text-red-400">{otpError}</span>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleResend}
            disabled={cooldown > 0}
            className="fsans-600 text-[14px] text-white/60 hover:text-white disabled:text-white/30 disabled:cursor-not-allowed transition-colors"
          >
            Resend OTP
          </button>
          {cooldown > 0 ? (
            <span className="fsans-400 text-[13px] text-white/40">in {cooldown}s</span>
          ) : null}
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="submit"
            disabled={isVerifying}
            className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group opacity-90 hover:opacity-100 disabled:opacity-50 transition-all duration-300"
          >
            <p className="whitespace-nowrap">
              {isVerifying ? "Verifying..." : "Verify OTP"}
            </p>
            <AnimatePresence mode="wait">
              {isVerifying ? (
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

          <button
            type="button"
            onClick={onBack}
            className="fsans-600 text-[14px] text-white/50 hover:text-white transition-colors"
          >
            &larr; Edit details
          </button>
        </div>
      </form>
    </div>
  );
};

export default CertDownloadFormStep2;
