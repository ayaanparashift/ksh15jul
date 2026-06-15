"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CertDownloadFormStep1 from "./CertDownloadFormStep1";
import CertDownloadFormStep2 from "./CertDownloadFormStep2";

const CertDownloadModal = ({ isOpen, onClose, source = "" }) => {
  const [step, setStep] = useState("details");
  const [userDetails, setUserDetails] = useState(null);
  // Accumulate all tokens issued across modal open/close cycles so any
  // OTP sent within the last 5 minutes still works on re-open.
  const allTokensRef = useRef("");

  const handleOtpSent = (details) => {
    const newToken = details.otpToken || "";
    allTokensRef.current = allTokensRef.current
      ? `${allTokensRef.current},${newToken}`
      : newToken;
    setUserDetails({ ...details, source, otpToken: allTokensRef.current });
    setStep("otp");
  };

  const handleBack = () => {
    setStep("details");
  };

  const handleClose = () => {
    setStep("details");
    // Keep userDetails (and allTokensRef) so re-opening pre-fills fields
    // and old tokens remain valid — only wipe on success (handled in Step2 via onClose after success)
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 !z-[100000000000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.div
            className="fixed inset-0 !z-[100000000000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-fit max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatePresence mode="wait">
                {step === "details" ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                  >
                    <CertDownloadFormStep1
                      onClose={handleClose}
                      onOtpSent={handleOtpSent}
                      savedDetails={userDetails}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                  >
                    <CertDownloadFormStep2
                      userDetails={userDetails}
                      onClose={handleClose}
                      onBack={handleBack}
                      onTokenUpdate={(t) => { allTokensRef.current = t; }}
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
