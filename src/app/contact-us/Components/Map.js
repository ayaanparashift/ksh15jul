"use client";
import { motion } from "framer-motion";
const Map = () => {
  return (
    <div className="bg-[#092241] py-[50px] md:py-[100px]">
      <div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
        // viewport={{ amount: 0.3, once: true }}
        className="fix12"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.205631003117!2d73.8374441!3d18.5196075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe0b6d31993%3A0x879bf458e5fbe5b0!2sKSH%20INFRA!5e0!3m2!1sen!2sin!4v1744784616609!5m2!1sen!2sin"
          height="450"
          width="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <button className="border-[#D7D7D7] border text-sm md:text-base fsans-600 text-white flex items-center px-[30px] py-[10px] gap-3 mt-5 group hover:bg-white hover:text-black transition-colors duration-[500ms]">
            View on Map
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:stroke-black transition-colors duration-[500ms]"
                d="M12.3251 8.24676L12.3093 3.18522C12.3059 2.08552 11.4152 1.19488 10.3155 1.19145L5.25399 1.1757M1.69651 11.8042L8.44599 5.05477"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
