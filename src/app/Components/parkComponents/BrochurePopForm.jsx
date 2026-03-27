"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const NAME_REGEX = /^[A-Za-z ]{2,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BrochurePopForm = ({ onClose, apiEndpoint }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldError, setFieldError] = useState({ field: "", text: "" });
  const [honeypot, setHoneypot] = useState("");

  const validateField = (field, value) => {
    if (!value) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }
    if (field === "name" && !NAME_REGEX.test(value)) {
      return "Name must be at least 2 letters and contain only letters/spaces.";
    }
    if (field === "email" && !EMAIL_REGEX.test(value)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleFocus = (field) => {
    if (fieldError.field === field) {
      setFieldError({ field: "", text: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    let err = validateField("name", name);
    if (err) {
      setFieldError({ field: "name", text: err });
      return;
    }
    err = validateField("email", email);
    if (err) {
      setFieldError({ field: "email", text: err });
      return;
    }

    setSending(true);
    setErrorMessage("");
    setFieldError({ field: "", text: "" });

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data?.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Brochure submission error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <form
        onSubmit={handleSubmit}
        className="lg:w-[620px] max-w-full min-h-[318px] w-full bg-[#092241] p-6 md:p-12 flex flex-col gap-0 sm:gap-8 relative overflow-hidden"
        noValidate
      >
        <input
          type="text"
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          className="absolute left-[-9000px]"
        />
        <header className="flex justify-between items-center">
          <h3 className="text-white text-[24px] md:text-[44px] font-bold">
            Download Brochure
          </h3>
          <button type="button" onClick={onClose}>
            <img
              className="h-10 w-10"
              src="/Sustainability/icons/broclose.svg"
              alt="Close"
            />
          </button>
        </header>

        {!submitted ? (
          <>
            <div className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleFocus("name")}
                  placeholder="Name"
                  className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
                    fieldError.field === "name"
                      ? "border-red-400"
                      : "border-[#146BD7]"
                  }`}
                />
                {fieldError.field === "name" && (
                  <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFocus("email")}
                  placeholder="Email"
                  className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
                    fieldError.field === "email"
                      ? "border-red-400"
                      : "border-[#146BD7]"
                  }`}
                />
                {fieldError.field === "email" && (
                  <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="self-start bg-[#E30613] text-white mt-6 py-3 px-6 rounded-full flex items-center gap-2 disabled:opacity-50"
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  <span>Proceed to Download</span>
                  <img
                    className="h-6 w-6"
                    src="/Sustainability/susdownarr.svg"
                    alt="down arrow"
                  />
                </>
              )}
            </button>
          </>
        ) : (
          <div className="mt-4 sm:mt-4 text-white fsans-600 text-[20px] sm:text-[30px] py-3 rounded-lg">
            Thank You For Submitting This Form. Please Check your inbox for the
            brochure link!
          </div>
        )}

        {errorMessage && (
          <div className="mt-0 sm:mt-4 bg-white bg-opacity-20 text-red-300 text-[20px] sm:text-[30px] py-3 rounded-lg text-center">
            {errorMessage}
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default BrochurePopForm;
