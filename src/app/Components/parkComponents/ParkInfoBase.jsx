"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ParkCertificateEnquireForm from "./ParkCertificateEnquireForm";
import CertDownloadModal from "./CertDownloadModal";

const ParkInfoBase = ({
  stats,
  imageSrc,
  note,
  rootClassName = "flex pt-10 lg:pb-20 pb-10 w-full justify-between items-center",
  valueColClassName = "border-r w-1/2 md:w-[60%] border-[#B0B0B0] h-[60px] xl:h-[100px] flex items-center",
}) => {
  const [showEnquire, setShowEnquire] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const pathname = usePathname();
  const sourceUrl = `https://www.kshinfra.com${pathname || ""}`;

  const openEnquire = () => setShowEnquire(true);
  const closeEnquire = () => setShowEnquire(false);

  const openCertModal = () => setShowCertModal(true);
  const closeCertModal = () => setShowCertModal(false);

  const certSource = pathname.includes("ksh-hosur-i")
    ? "ksh-hosur-i"
    : pathname.includes("ksh-chakan-iv")
    ? "ksh-chakan-iv"
    : pathname.includes("ksh-chakan-iii")
    ? "ksh-chakan-iii"
    : "";

  useEffect(() => {
    const anyOpen = showEnquire || showCertModal;
    document.body.style.overflow = anyOpen ? "hidden" : "auto";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [showEnquire, showCertModal]);

  return (
    <>
      <div className={rootClassName} id="park-highlight">
        <div className="flex md:flex-row flex-col fix12 justify-between items-center 2xl:gap-[160px] lg:gap-[80px] gap-10">
          <div className="md:w-1/2 w-full relative">
            <img src={imageSrc} alt="Park Info" className="w-full" />
          </div>

          <motion.div className="md:w-1/2 w-full space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between md:gap-0 gap-[20px] items-center pb-4"
              >
                <div className={valueColClassName}>
                  <h2
                    dangerouslySetInnerHTML={{ __html: stat.value }}
                    className="leading-[111%] text-[24px] md:text-[32px] fpt-600 xl:text-[44px] text-[#E72430]"
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                  className="xl:text-[25px] md:text-[20px] leading-[111%] text-[18px] fsans-600 text-[#253B57] text-right whitespace-pre-line"
                />
              </div>
            ))}
            {note ? (
              <div>
                <p className="fsans-600 text-[#00000050] text-[16px]">{note}</p>
              </div>
            ) : null}
            {(pathname.includes("ksh-hosur-i") || pathname.includes("ksh-chakan-iv") || pathname.includes("ksh-chakan-iii")) ? (
              <div className="pt-4">
                <button
                  onClick={openCertModal}
                  className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group opacity-90 hover:opacity-100 transition-all duration-300"
                >
                  <p className="whitespace-nowrap">Download Certifications</p>
                  <img
                    src="/rightUpArrow.svg"
                    alt=""
                    className="h-5 w-5 rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                </button>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showEnquire ? (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[1000]"
              onClick={closeEnquire}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.div
              className="fixed inset-0 z-[1001001] flex items-center justify-center lg:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={closeEnquire}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <motion.div
                onClick={(event) => event.stopPropagation()}
                className="lg:w-fit w-[90%] mx-auto max-h-[90vh] bg-[#092241] overflow-y-auto px-10 py-5 shadow-lg"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <ParkCertificateEnquireForm
                  closeEnquire={closeEnquire}
                  source={sourceUrl}
                />
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      {/* Certification Download Modal */}
      <CertDownloadModal isOpen={showCertModal} onClose={closeCertModal} source={certSource} />
    </>
  );
};

export default ParkInfoBase;
