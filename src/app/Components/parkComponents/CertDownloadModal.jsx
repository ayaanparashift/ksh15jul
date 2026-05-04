"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CertDownloadFormStep1 from "./CertDownloadFormStep1";
import CertDownloadFormStep2 from "./CertDownloadFormStep2";

const CertDownloadModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("details"); // "details" | "otp"
  const [userDetails, setUserDetails] = useState(null);

  // ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Reset step when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Small delay so exit animation plays before reset
      const t = setTimeout(() => {
        setStep("details");
        setUserDetails(null);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleOtpSent = (details) => {
    setUserDetails(details);
    setStep("otp");
  };

  const handleBack = () => {
    setStep("details");
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          {/* Overlay */}
          {/* <motion.div
            className="fixed inset-0 bg-black/70 z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          /> */}

          {/* Modal container */}
          <motion.div
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[600px] max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatePresence mode="wait">
                {step === "details" ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CertDownloadFormStep1
                      onClose={onClose}
                      onOtpSent={handleOtpSent}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CertDownloadFormStep2
                      userDetails={userDetails}
                      onClose={onClose}
                      onBack={handleBack}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default CertDownloadModal;
