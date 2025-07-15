"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const SustainSocial = () => {
  return (
    <div className="bg-[#EEF0F3] overflow-hidden">
      {/* <div className="md:ml-[calc((100vw-1250px)/2)] py-16 xl-1280:ml-[50px] xl-1024:ml-[45px] xl-768:ml-[40px] w-[90%] mx-auto"> */}
      <div className="fix12 md:pt-8 lg:pt-16 pt-14 flex flex-col gap-[40px]">
        <h1
          // initial={{ width: 0 }}
          // whileInView={{ width: "100%" }}
          // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ once: true, amount: 0.3 }}
          className="text-[#092241] fpt-500 md:text-[44px] sm:text-[32px] text-[24px] border-b-[#D7D7D7] border-b-[1px] md:pb-3 overflow-hidden whitespace-nowrap"
        >
          Social Commitment
        </h1>
        <p className="fsans-600 text-[16px] text-[#434343] leading-[26px]">
          We are consciously aware of the effects that large projects can have
          on the community. Our goal is to ensure that these effects are
          beneficial for the people living around us. KSH INFRA Parks designed
          to have a positive influence, and all projects adhere to the best
          practices for social responsibility.
        </p>
      </div>
      <div className="ml-[max(5%,calc((100vw-1250px)/2))] md:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] md:pb-8 lg:pb-16 pb-14 md:w-full">
        {/* Swiper Div */}
        <div className="md:pt-14 pt-5">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1.3}
            spaceBetween={150}
            navigation={{ nextEl: ".rightBtn", prevEl: ".leftBtn" }}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop="true"
            breakpoints={{
              320: {
                slidesPerView: 1,
                // spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                // spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.3,
                // spaceBetween: 30,
              },
              1280: {
                slidesPerView: 1.3,
              },
              1366: {
                slidesPerView: 1.3,
              },
              1440: {
                slidesPerView: 1.4,
              },
              1536: {
                slidesPerView: 1.4,
                spaceBetween: 80,
              },
              1600: {
                slidesPerView: 1.4,
                spaceBetween: 80,
              },
              1900: {
                slidesPerView: 1.8,
              },
            }}
          >
            <SwiperSlide>
              <div className=" xl-1280:w-[1000px] xl-1024:w-[800px] md:w-[1071px] md:h-[450px] xl-768:h-[400px]  md:flex h-[500px] bg-white">
                <div className="imgCon xl-768:w-[300px] md:w-[495px] bg-red-400 hidden md:flex">
                  <img
                    src="/Sustainability/simgs/sc1.png"
                    className="w-full"
                    alt="Social Impact"
                  />
                </div>
                <div className=" contentCon bg-white xl-768:w-[400px] md:w-[576px] xl-1024:py-10 xl-768:pt-9 md:py-24 py-12 px-9 md:px-11 flex flex-col justify-center gap-5">
                  <h1 className="text-[#092241] lg:text-[22px] text-xl fsans-700">
                    POSITIVE COMMUNITY ENGAGEMENT
                  </h1>
                  <div className="text-[#717171] text-[14px] fsans-600 lg:text-base ">
                    <ul className="flex flex-col gap-[18px]">
                      <li className="relative pl-4 before:absolute before:left-[-20px] before:top-1/2 before:w-[5px] before:h-[5px] before:bg-[#E30613] before:rounded-full before:-translate-y-1/2">
                        Advanced waste management systems to minimize
                        environmental impact and maintain cleanliness in
                        surrounding areas
                      </li>
                      <li className="relative pl-4 before:absolute before:left-[-20px] before:top-1/2 before:w-[5px] before:h-[5px] before:bg-[#E30613] before:rounded-full before:-translate-y-1/2">
                        Rainwater harvesting and water recycling to promote
                        sustainable water use and support local water
                        conservation efforts.
                      </li>
                      <li className="relative pl-4 before:absolute before:left-[-20px] before:top-1/2 before:w-[5px] before:h-[5px] before:bg-[#E30613] before:rounded-full before:-translate-y-1/2">
                        Stormwater drainage systems to prevent flooding,
                        ensuring safer conditions for both our parks and
                        neighboring communities.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" xl-1280:w-[1000px] xl-1024:w-[800px] md:w-[1071px] md:h-[450px] xl-768:h-[400px]  md:flex h-[500px] bg-white">
                <div className="imgCon xl-768:w-[300px] lg:w-[495px] bg-red-400  hidden md:flex">
                  <img
                    src="/Sustainability/simgs/sc2.png"
                    className="w-full"
                    alt="Social Impact"
                  />
                </div>
                <div className=" contentCon bg-white xl-768:w-[400px] md:w-[576px] xl-1024:py-10 xl-768:pt-9 md:py-24 py-12 px-9 md:px-11">
                  <h1 className="text-[#092241] lg:text-[22px] text-xl fsans-700">
                    EMPLOYEE WELL-BEING
                  </h1>
                  <div className="md:pt-[38px]  pt-6 xl-768:pt-5 text-[#717171] text-[14px]  fsans-600  ">
                    <ul className="flex flex-col gap-[18px]">
                      <li className="relative pl-4 before:absolute before:left-[-20px] before:top-1/2 before:w-[5px] before:h-[5px] before:bg-[#E30613] before:rounded-full before:-translate-y-1/2">
                        Improved accessibility and personnel amenities to create
                        a better, more comfortable experience for employees and
                        visitors.
                      </li>
                      <li className="relative pl-4 before:absolute before:left-[-20px] before:top-1/2 before:w-[5px] before:h-[5px] before:bg-[#E30613] before:rounded-full before:-translate-y-1/2">
                        Sustainable infrastructure designed to enhance workplace
                        safety, efficiency, and overall employee satisfaction.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" xl-1280:w-[1000px] xl-1024:w-[800px] md:w-[1071px] md:h-[450px] xl-768:h-[400px]  md:flex h-[500px] bg-white">
                <div className="imgCon xl-768:w-[300px] w-[495px] bg-red-400  hidden md:flex">
                  <img
                    src="/Sustainability/simgs/sc3.png"
                    className="w-full"
                    alt="Social Impact"
                  />
                </div>
                <div className=" contentCon bg-white xl-768:w-[400px] md:w-[576px] xl-1024:py-10 xl-768:pt-9 md:py-24 py-12 px-9 md:px-11">
                  <h1 className="text-[#092241] lg:text-[22px] text-xl fsans-700">
                    TOWARD A CARBON NEUTRAL FUTURE
                  </h1>
                  <div className="md:pt-[38px]  pt-6 xl-768:pt-5 text-[#717171] text-[14px]  fsans-600 ">
                    <ul className="flex flex-col gap-[18px]">
                      <li className="relative pl-4 before:absolute before:left-[-20px] before:top-1/2 before:w-[5px] before:h-[5px] before:bg-[#E30613] before:rounded-full before:-translate-y-1/2">
                        Solar energy option available at all our industrial and
                        logistics parks to reduce reliance on the national power
                        grid.
                      </li>
                      <li className="relative pl-4 before:absolute before:left-[-20px] before:top-1/2 before:w-[5px] before:h-[5px] before:bg-[#E30613] before:rounded-full before:-translate-y-1/2">
                        Sustainable development practices integrated into all
                        our future projects, ensuring long-term environmental
                        responsibility.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Swiper Buttons */}
        <div className="pt-12 flex items-center gap-4">
          <div className="cursor-pointer leftBtn w-10 h-10 border-2 border-[#D7D7D7] rounded-full flex items-center justify-center">
            <img src="/Sustainability/socialLeft.svg" alt="Left Arrow" />
          </div>
          <div className="cursor-pointer rightBtn w-10 h-10 border-2 border-[#D7D7D7] rounded-full flex items-center justify-center">
            <img src="/Sustainability/socialRigthArrow.svg" alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainSocial;
