"use client";

import { useEffect, useRef, useState } from "react";

const OtpInput = ({ value, onChange, onSubmit, disabled = false, length = 6 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    const otpArray = value.split("").slice(0, length);
    while (otpArray.length < length) {
      otpArray.push("");
    }
    setOtp(otpArray);
  }, [value, length]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/[^\d]/g, "");
    if (val.length > 1) {
      // Handle paste
      const pastedOtp = val.slice(0, length).split("");
      const newOtp = [...otp];
      pastedOtp.forEach((digit, i) => {
        if (index + i < length) {
          newOtp[index + i] = digit;
        }
      });
      setOtp(newOtp);
      onChange(newOtp.join(""));

      // Auto-submit if full
      if (newOtp.every(d => d !== "")) {
        setTimeout(() => onSubmit?.(newOtp.join("")), 100);
      }

      // Focus last filled input
      const lastFilledIndex = Math.min(index + pastedOtp.length - 1, length - 1);
      inputRefs.current[lastFilledIndex]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Auto-submit if full
    if (newOtp.every(d => d !== "")) {
      setTimeout(() => onSubmit?.(newOtp.join("")), 100);
    }

    // Move to next input
    if (val && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          disabled={disabled}
          className="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-bold border-2 border-[#146BD7] bg-[#263548] text-white rounded-lg focus:outline-none focus:border-[#F7E327] transition-colors disabled:opacity-50"
        />
      ))}
    </div>
  );
};

export default OtpInput;
