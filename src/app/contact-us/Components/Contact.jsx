import ContInfo from "./ContInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex xl:pt-0 pt-[50px] md:flex-row flex-col justify-between xl:w-[1250px] mx-auto xl:px-0 px-[5%]">
        <div className="xl:py-[100px] pb-[50px] md:flex-1 md:pb-0 py-0 md:px-0 px-[5%]">
          <ContInfo />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
