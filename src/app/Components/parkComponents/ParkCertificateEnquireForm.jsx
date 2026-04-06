"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, X } from "lucide-react";
import toast from "react-hot-toast";
import SuccessToast from "../Toasts/SuccessToast";
import FailToast from "../Toasts/FailToast";

const NAME_REGEX = /^[a-zA-Z\s]{2,}$/;
const ORGANIZATION_REGEX = /^[\w\s.\-&]{2,}$/;
const PHONE_REGEX = /^(?:\+91\s?|0\s?)?(?:\d{10}|\d{5}\s\d{5})$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ParkCertificateEnquireForm = ({ closeEnquire, source = "" }) => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const now = new Date();
  const formDate = `${now.getDate()}-${now.getMonth() + 1}-${String(
    now.getFullYear(),
  ).slice(-2)}`;

  const validate = () => {
    const nextErrors = {};

    if (!NAME_REGEX.test(name)) {
      nextErrors.name = "Please enter a valid name (only letters & spaces)";
    }

    if (!ORGANIZATION_REGEX.test(organization)) {
      nextErrors.organization = "Please enter a valid organization";
    }

    if (!PHONE_REGEX.test(contactNumber.trim())) {
      nextErrors.contactNumber =
        "Please enter a valid phone number (e.g. +91 XXXXX XXXXX or 10 digits)";
    }

    if (!EMAIL_REGEX.test(emailAddress)) {
      nextErrors.emailAddress = "Please enter a valid email address";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (honeypot) return;
    if (!validate()) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/park-certificate-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: formDate,
          name,
          organization,
          contact_number: contactNumber,
          email: emailAddress,
          source,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Failed to submit enquiry");
      }

      toast.custom((t) => (
        <SuccessToast message="Your enquiry has been sent." />
      ));
      setIsSubmitted(true);
    } catch (error) {
      toast.custom((t) => (
        <FailToast
          message={error?.message || "Something went wrong while submitting."}
        />
      ));
      console.error("Park certificate enquiry error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className={`bg-[#092241] flex flex-col ${
        isSubmitted ? "gap-3" : "gap-[30px] min-1366:gap-[60px]"
      } w-fit max-w-fit px-10 py-5 z-[10000000] relative mt-0 overflow-hidden`}
      id="park-certificate-form"
    >
      <div className="flex justify-between items-center">
        <div>
          <motion.h1
            // initial={{ x: -100, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ once: true, amount: 0 }}
            className="fpt-600 xl:text-[42px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-1 2xl:text-[42px]"
          >
            Enquire Now
          </motion.h1>
          <motion.div
            // initial={{ x: -150, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ once: true, amount: 0 }}
            className="bg-[#F7E327] h-[10px] w-full"
          />
        </div>

        <button
          onClick={closeEnquire}
          disabled={isSending}
          aria-label="Close popup"
          className="text-white/90 hover:text-white transition-colors"
        >
          <X size={40} color="#ffffff" strokeWidth={2.2} />
        </button>
      </div>

      {isSubmitted ? (
        <div className="w-full flex flex-col items-center justify-center text-center gap-4 py-6">
          <CircleCheck color="#ffffff" size={64} />
          <p className="text-white fsans-500 text-[36px] leading-[115%]">
            Thanks for submitting the form! <br /> We&apos;ll get back to you
            soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-[20px] sm:gap-[30px] min-1440::gap-[50px] relative overflow-hidden"
        >
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
            autoComplete="off"
            className="absolute left-[-9000px]"
          />
          <input type="hidden" name="source" value={source} readOnly />
          <input type="hidden" name="date" value={formDate} readOnly />

          <div className="flex sm:flex-row flex-col gap-[24px]">
            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onFocus={() => clearError("name")}
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />
              {errors.name ? (
                <span className="text-sm text-red-400">{errors.name}</span>
              ) : null}
            </div>

            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={emailAddress}
                onChange={(event) => setEmailAddress(event.target.value)}
                onFocus={() => clearError("emailAddress")}
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />
              {errors.emailAddress ? (
                <span className="text-sm text-red-400">
                  {errors.emailAddress}
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-[24px]">
            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="contact_number"
                type="tel"
                placeholder="Phone"
                value={contactNumber}
                onChange={(event) => {
                  let val = event.target.value;
                  val = val
                    .replace(/  +/g, " ")
                    .trimStart()
                    .replace(/[^\d+ ]/g, "");

                  const digitsOnly = val.replace(/\D/g, "");
                  if (digitsOnly.length > 12) return;

                  setContactNumber(val);
                }}
                onFocus={() => clearError("contactNumber")}
                onKeyDown={(event) => {
                  const allowedKeys = [
                    "Backspace",
                    "ArrowLeft",
                    "ArrowRight",
                    "Delete",
                    "Tab",
                    " ",
                    "+",
                  ];
                  if (
                    event.key === " " &&
                    (!contactNumber || contactNumber.endsWith(" "))
                  ) {
                    event.preventDefault();
                    return;
                  }
                  if (
                    !/^[\d\s+]$/.test(event.key) &&
                    !allowedKeys.includes(event.key)
                  ) {
                    event.preventDefault();
                  }
                }}
                className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />
              {errors.contactNumber ? (
                <span className="text-sm text-red-400">
                  {errors.contactNumber}
                </span>
              ) : null}
            </div>

            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="organization"
                type="text"
                placeholder="Organization"
                value={organization}
                onChange={(event) => setOrganization(event.target.value)}
                onFocus={() => clearError("organization")}
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />
              {errors.organization ? (
                <span className="text-sm text-red-400">
                  {errors.organization}
                </span>
              ) : null}
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              disabled={isSending}
              className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group opacity-90 hover:opacity-100 disabled:opacity-50 transition-all duration-300"
            >
              <p className="whitespace-nowrap">
                {isSending ? "Sending..." : "Submit"}
              </p>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isSending ? (
                    <motion.div
                      key="spinner"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arrow"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        className="group-hover:rotate-0 rotate-45 duration-500 transition-transform h-6 w-6"
                        src="/rightUpArrow.svg"
                        alt="Arrow"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ParkCertificateEnquireForm;
