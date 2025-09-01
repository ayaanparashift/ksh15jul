"use client";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function AttachCoverLetter({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

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
    onFileSelect(selectedFile);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 text-white text-lg border-b border-white hover:opacity-80"
      >
        + Attach Cover Letter
      </button>
      <input
        type="file"
        name="cover_letter"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.doc,.docx"
      />
      {file && <p className="text-white text-sm mt-1">{file.name}</p>}
    </div>
  );
}
