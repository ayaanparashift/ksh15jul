// "use client";
import { motion } from "framer-motion";
const CapAbout = () => {
  return (
    <div>
      <div className="fix12 pt-[72px] pb-[84px]">
        <h1
          // initial={{ width: 0 }}
          // whileInView={{ width: "100%" }}
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          className="fpt-500 whitespace-nowrap overflow-hidden text-[24px] md:text-[40px] text-[#040404] leading-[110%] md:leading-[48px] border-b-[1px] border-b-[#D7D7D7] pb-4"
        >
          Sustainable Growth
        </h1>
        <p
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          className="text-[#434343] text-base fsans-400 pt-[35px]"
        >
          We combine deep market knowledge with hands-on expertise to deliver
          complete success for your industrial real estate needs. From finding
          the right land to managing every aspect of your property, we don't
          just meet industry standards — we set them.
        </p>
      </div>
    </div>
  );
};

export default CapAbout;
