"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const CAREER_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_COMPANY_ID;
const CAREER_AUTOREPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_AUTOREPLY_ID;

export default function FormSec() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const fileInput2Ref = useRef(null);

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_phone: "",
    user_email: "",
    user_education: "",
    user_department: "",
  });

  const [errors, setErrors] = useState({});

  // Validate one error at a time
  const validateForm = () => {
    const errs = {};
    if (!/^[a-zA-Z\s]{2,}$/.test(formData.first_name)) {
      errs.first_name = "Please enter a valid first name.";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.last_name)) {
      errs.last_name = "Please enter a valid last name.";
    } else if (!/^\d{7,15}$/.test(formData.user_phone)) {
      errs.user_phone = "Please enter a valid phone number.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errs.user_email = "Please enter a valid email address.";
    } else if (formData.user_education.trim().length < 2) {
      errs.user_education = "Please enter your education.";
    } else if (!formData.user_department) {
      errs.user_department = "Please select a department.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!validTypes.includes(selectedFile.type)) {
      toast.error("Only PDF, DOC, and DOCX files are allowed.");
      e.target.value = null;
      return;
    }
    if (selectedFile.size > maxSize) {
      toast.error("File size should not exceed 2MB.");
      e.target.value = null;
      return;
    }

    setFile(selectedFile);
  };

  const handleFile2Change = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!validTypes.includes(selectedFile.type)) {
      toast.error("Only PDF, DOC, and DOCX files are allowed.");
      e.target.value = null;
      return;
    }
    if (selectedFile.size > maxSize) {
      toast.error("File size should not exceed 2MB.");
      e.target.value = null;
      return;
    }

    setFile2(selectedFile);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({}); // clear previous errors on any change
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handle2Click = () => {
    fileInput2Ref.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!formRef.current) return;
    try {
      // 1️⃣ Send to company
      await emailjs.sendForm(
        SERVICE_ID,
        CAREER_COMPANY_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // 2️⃣ Auto‑reply to applicant
      await emailjs.send(
        SERVICE_ID,
        CAREER_AUTOREPLY_ID,
        {
          to_name: `${formData.first_name} ${formData.last_name}`,
          to_email: formData.user_email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // reset form
      setFormData({
        first_name: "",
        last_name: "",
        user_phone: "",
        user_email: "",
        user_education: "",
        user_department: "",
      });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = null;
      setFile2(null);
      if (fileInput2Ref.current) fileInput2Ref.current.value = null;
      setErrors({});
      setIsSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Error sending form. Please try again.");
    }
  };

  return (
    <div id="join-us" className="relative md:mb-[85px]">
      <Toaster position="top-center" />
      <img
        src="/Career/formbg.png"
        alt="Blue bg"
        className="absolute w-full top-0 left-0 z-0"
      />
      <div className="flex relative z-0 xl:pt-[50px] md:mr-[max(5%,calc((100vw-1250px)/2))]">
        <div className="bg-[#141D28] lg:py-0 py-[5%] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[5%] md:pr-[60px] overflow-hidden">
          {!isSubmitted && (
            <>
              <div className="lg:pb-[50px] pb-[20px] max-w-fit">
                <h1
                  // initial={{ x: "-100%", opacity: 0 }}
                  // whileInView={{ x: 0, opacity: 1 }}
                  // transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
                  // viewport={{ once: true, amount: 0.1 }}
                  className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[28px] text-white leading-[150%] md:leading-[105%] 2xl:text-[70px]"
                >
                  Join Us
                </h1>
                <div
                  // initial={{ x: "-100%", opacity: 0 }}
                  // whileInView={{ x: 0, opacity: 1 }}
                  // transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
                  // viewport={{ once: true, amount: 0 }}
                  className="bg-[#F7E327] h-[5px] md:h-[10px] w-full"
                />
              </div>
            </>
          )}

          {!isSubmitted && (
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
              className="flex flex-col gap-[24px] sm:gap-[40px] relative z-0"
            >
              {/* First & Last Name */}
              <div className="flex sm:flex-row flex-col gap-[24px]">
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.first_name && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.first_name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.last_name && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.last_name}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex sm:flex-row flex-col gap-[24px]">
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="user_phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.user_phone}
                    onChange={handleInputChange}
                    className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                    onKeyDown={(e) => {
                      const allowedKeys = [
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Delete",
                        "Tab",
                      ];
                      if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.user_phone && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_phone}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.user_email && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_email}
                    </span>
                  )}
                </div>
              </div>

              {/* Education & Department */}
              <div className="flex sm:flex-row flex-col gap-[24px]">
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="user_education"
                    type="text"
                    placeholder="Education"
                    value={formData.user_education}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.user_education && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_education}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full  sm:w-[295px]">
                  <select
                    name="user_department"
                    value={formData.user_department}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-[#959CA9] border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[12px]  sm:w-full overflow-hidden appearance-none"
                  >
                    <option className="text-[#959CA9]" value="">
                      Select Department
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Operations">Operations</option>
                    <option value="HR">Human Resources</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                  {errors.user_department && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_department}
                    </span>
                  )}
                </div>
              </div>

              {/* Attach CV & Submit */}
              <div className="w-full flex justify-between items-center flex-wrap gap-4">
                <div>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="flex items-center gap-2 text-white text-lg border-b border-white hover:opacity-80"
                  >
                    + Attach CV
                  </button>
                  <input
                    type="file"
                    name="attachment"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  {file && (
                    <p className="text-white text-sm mt-1">{file.name}</p>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handle2Click}
                    className="flex items-center gap-2 text-white text-lg border-b border-white hover:opacity-80"
                  >
                    + Attach Cover Letter
                  </button>
                  <input
                    type="file"
                    name="cover_letter"
                    id="cover_letter"
                    ref={fileInput2Ref}
                    onChange={handleFile2Change}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  {file2 && (
                    <p className="text-white text-sm mt-1">{file2.name}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#E30613] w-fit gap-[10px] px-[21px] max-h-[52px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
                >
                  Submit <img src="/rightUpArrow.svg" alt="Arrow" />
                </button>
              </div>
            </motion.form>
          )}

          {isSubmitted && (
            <div className="h-full w-full flex">
              <h1 className="md:text-[40px] text-[24px] text-white">
                Thank you for submitting this form. Your form has been
                successfully submitted.
              </h1>
            </div>
          )}
        </div>

        <div className="2xl:h-[600px] flex-1 hidden md:block overflow-hidden relative">
          <img
            className="object-cover min-h-full min-w-full"
            src="/Career/careerformimg.png"
            alt="career visual"
          />
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute top-0 left-0 bg-[url(/Career/formbg.png)] w-full h-[calc(100%+10px)] z-[0] bg-no-repeat bg-cover"
          />
        </div>
      </div>
    </div>
  );
}
