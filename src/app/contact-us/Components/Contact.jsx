// import ContInfo from "./ContInfo";
// import ContactForm from "./ContactForm";

// const Contact = () => {
//   return (
//     <div>
//       <div className="flex xl:pt-0 pt-[50px] md:flex-row flex-col justify-between xl:w-[1250px] mx-auto xl:px-0 px-[5%]">
//         <div className="xl:pt-[100px] pb-[50px] md:flex-1 py-0 md:px-0">
//           <ContInfo />
//         </div>
//         <ContactForm />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import ContInfo from "./ContInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="md:flex hidden xl:pt-0 pt-[50px] md:flex-row flex-col justify-between fix12 xl:px-0 px-[5%]">
        <div className="xl:pt-[100px] pb-[50px] md:flex-1 py-0 md:px-0">
          <ContInfo />
        </div>
        <ContactForm />
      </div>
      <div className="md:hidden flex xl:pt-0 pt-[50px] md:flex-row flex-col justify-between ">
        <div className="xl:w-[1250px] mx-auto xl:px-0 px-[5%]">
          <ContInfo />
        </div>
        <div className="w-full mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
