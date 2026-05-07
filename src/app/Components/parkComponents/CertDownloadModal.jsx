"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CertDownloadFormStep1 from "./CertDownloadFormStep1";
import CertDownloadFormStep2 from "./CertDownloadFormStep2";

const CertDownloadModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("details");
  const [userDetails, setUserDetails] = useState(null);
  // Track if modal has ever been opened so we know when it's a fresh open vs reopen
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Never reset step/userDetails on close — state persists across open/close cycles.
  // Only reset on page refresh (component unmount resets useState naturally).

  const handleOtpSent = (details) => {
    setUserDetails(details);
    setStep("otp");
  };

  const handleBack = () => {
    setStep("details");
  };

  // Called by X button — closes modal but keeps step/userDetails intact
  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-fit max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl"
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
