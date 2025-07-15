"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const TrustedPartners = ({ paddingB }) => {
  return (
    <div
      className='merqueMain h-auto xl-1280:pt-20 pt-16  bg-[url("/tpfiles/marqueBg.webp")] flex-col bg-cover bg-center flex justify-end'
      style={{ paddingBottom: paddingB }}
    >
      <div className="max-w-[1250px] w-[90%] mx-auto  pb-9 ">
        <h3
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
          // viewport={{ once: true, amount: 0.3 }}
          className="text-left w-full text-xl font-semibold  spotlightheaddd fsans-600 text-[#092241] pb-1 "
        >
          Our Trusted Partners
        </h3>
      </div>
      <div className="relative overflow-hidden max-w-[1250px] w-[90%] bg-white gap-[26px] hidden lg:flex flex-col merqueSlider border mx-auto h-auto md:h-[415px] md:px-[65px] md:py-[40px]">
        <div className="merqueSlide flex items-center justify-between h-fit md:h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-4 md:space-x-12 h-fit">
              <img className="" src="/marqicons/row2/r22.png" alt="JCB" />
              <img className="" src="/marqicons/row4/r41.png" alt="JCB" />
              <img className="" src="/marqicons/row1/r11.png" alt="JCB" />
              <img className="" src="/marqicons/row4/r43.png" alt="JCB" />
              <img className="" src="/marqicons/row1/r12.png" alt="JCB" />
              <img className="" src="/marqicons/row1/r15.png" alt="JCB" />
              <img className="" src="/marqicons/row1/r16.png" alt="JCB" />
              <img className="" src="/marqicons/row2/r23.png" alt="JCB" />
              <img className="" src="/marqicons/row2/r24.png" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-fit md:h-[90px]">
          <Marquee direction="right" speed={120}>
            <div className="flex space-x-4 md:space-x-12 h-fit">
              <img className="" src="/marqicons/row1/r13.png" alt="JCB" />
              <img className="" src="/marqicons/row4/r44.png" alt="JCB" />
              <img className="" src="/marqicons/row2/r25.png" alt="JCB" />
              <img className="" src="/marqicons/row2/r26.png" alt="JCB" />
              <img className="" src="/marqicons/row2/r27.png" alt="JCB" />
              <img className="" src="/marqicons/row1/r17.png" alt="JCB" />
              <img className="" src="/marqicons/row3/r33.png" alt="JCB" />
              <img className="" src="/marqicons/row3/r37.png" alt="JCB" />
              <img className="" src="/marqicons/row3/r36.png" alt="JCB" />
              <img className="" src="/marqicons/row2/r21.png" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-fit md:h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-4 md:space-x-12 h-fit">
              <img className="" src="/marqicons/row4/r46.png" alt="JCB" />
              <img className="" src="/marqicons/row4/r47.png" alt="JCB" />
              <img className="" src="/marqicons/row4/r48.png" alt="JCB" />
              <img className="" src="/marqicons/row3/r31.png" alt="JCB" />
              <img className="" src="/marqicons/row3/r34.png" alt="JCB" />
              <img className="" src="/marqicons/row3/r35.png" alt="JCB" />
            </div>
          </Marquee>
        </div>

        {/* <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "100%" }}
          transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute h-full w-full top-0 left-0 z-50 bg-[#D2D4D8]"
        /> */}
      </div>
      {/*  */}
      <div className="relative overflow-hidden max-w-[1250px] w-[90%] bg-white gap-[26px] flex lg:hidden flex-col merqueSlider border mx-auto h-auto md:h-[415px] md:px-[65px] md:py-[40px]">
        {/* Row 1 */}
        <div className="merqueSlide flex items-center justify-between h-fit md:h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-4 md:space-x-12 h-fit">
              <img className="" src="/marqicons/rowm1/rm1.png" alt="JCB" />
              <img className="" src="/marqicons/rowm1/rm2.png" alt="JCB" />
              <img className="" src="/marqicons/rowm1/rm3.png" alt="JCB" />
              <img className="" src="/marqicons/rowm1/rm4.png" alt="JCB" />
              <img className="" src="/marqicons/rowm1/rm5.png" alt="JCB" />
              <img className="" src="/marqicons/rowm1/rm6.png" alt="JCB" />
              <img className="" src="/marqicons/rowm1/rm7.png" alt="JCB" />
              <img className="" src="/marqicons/rowm2/rm1.png" alt="JCB" />
              <img className="" src="/marqicons/rowm2/rm2.png" alt="JCB" />
              <img className="" src="/marqicons/rowm2/rm3.png" alt="JCB" />
              <img className="" src="/marqicons/rowm4/rm6.png" alt="JCB" />
              <img className="" src="/marqicons/rowm4/rm7.png" alt="JCB" />
            </div>
          </Marquee>
        </div>

        {/* Row 2 */}
        <div className="merqueSlide flex items-center justify-between h-fit md:h-[90px]">
          <Marquee direction="right" speed={120}>
            <div className="flex space-x-4 md:space-x-12 h-fit">
              <img className="" src="/marqicons/rowm2/rm4.png" alt="JCB" />
              <img className="" src="/marqicons/rowm2/rm6.png" alt="JCB" />
              <img className="" src="/marqicons/rowm2/rm7.png" alt="JCB" />
              <img className="" src="/marqicons/rowm3/rm1.png" alt="JCB" />
              <img className="" src="/marqicons/rowm2/rm5.png" alt="JCB" />
              <img className="" src="/marqicons/rowm3/rm2.png" alt="JCB" />
              <img className="" src="/marqicons/rowm3/rm3.png" alt="JCB" />
            </div>
          </Marquee>
        </div>

        {/* Row 3 */}
        <div className="merqueSlide flex items-center justify-between h-fit md:h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-4 md:space-x-12 h-fit">
              <img className="" src="/marqicons/rowm3/rm4.png" alt="JCB" />
              <img className="" src="/marqicons/rowm3/rm5.png" alt="JCB" />
              <img className="" src="/marqicons/rowm3/rm6.png" alt="JCB" />
              <img className="" src="/marqicons/rowm4/rm1.png" alt="JCB" />
              <img className="" src="/marqicons/rowm4/rm4.png" alt="JCB" />
              <img className="" src="/marqicons/rowm4/rm5.png" alt="JCB" />
              <img className="" src="/marqicons/rowm4/rm2.png" alt="JCB" />
              <img className="" src="/marqicons/rowm4/rm3.png" alt="JCB" />
              <img className="" src="/marqicons/rowm3/rm7.png" alt="JCB" />
            </div>
          </Marquee>
        </div>

        {/* Row 4 */}
      </div>
    </div>
  );
};
export default TrustedPartners;
