"use client";

import { useEffect, useRef, useState } from "react";

const OtpInput = ({
  value,
  onChange,
  onSubmit,
  disabled = false,
  length = 4,
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    const otpArray = value.split("").slice(0, length);
    while (otpArray.length < length) otpArray.push("");
    setOtp(otpArray);
  }, [value, length]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const commit = (newOtp) => {
    setOtp(newOtp);
    onChange(newOtp.join(""));
    if (newOtp.every((d) => d !== "")) {
      setTimeout(() => onSubmit?.(newOtp.join("")), 100);
    }
  };

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) {
      const newOtp = [...otp];
      newOtp[index] = "";
      commit(newOtp);
      return;
    }
    // Single digit typed
    const newOtp = [...otp];
    newOtp[index] = val[0];
    commit(newOtp);
    if (index < length - 1) inputRefs.current[index + 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);
    if (!pasted) return;
    const newOtp = new Array(length).fill("");
    pasted.split("").forEach((d, i) => {
      newOtp[i] = d;
    });
    commit(newOtp);
    const focusIndex = Math.min(pasted.length, length - 1);
    inputRefs.current[focusIndex]?.focus();
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
    <div className="flex justify-start gap-2 sm:gap-3">
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
          onPaste={handlePaste}
          disabled={disabled}
          className="w-14 h-14 sm:w-14 sm:h-14 text-center text-lg sm:text-xl font-bold border-2 border-[#146BD7] bg-[#263548] text-white rounded-lg focus:outline-none focus:border-[#F7E327] transition-colors disabled:opacity-50"
        />
      ))}
    </div>
  );
};

export default OtpInput;
