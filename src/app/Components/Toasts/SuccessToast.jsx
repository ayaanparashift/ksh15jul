"use client";
import React from "react";
import { Check } from "lucide-react";

const SuccessToast = ({ message }) => {
  return (
    <div className="bg-[#092241] text-white px-6 py-4 rounded-none shadow-2xl flex items-center justify-between min-w-[320px] max-w-md animate-in fade-in slide-in-from-top-4 duration-300">
      <span className="fsans-600 text-base">{message}</span>
      <div className="ml-4 flex-shrink-0 bg-white rounded-full p-1 flex items-center justify-center w-8 h-8">
        <Check size={20} color="#092241" strokeWidth={3} />
      </div>
    </div>
  );
};

export default SuccessToast;
