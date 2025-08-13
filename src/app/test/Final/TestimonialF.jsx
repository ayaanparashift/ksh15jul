import TestimonialSliderMobile from "./TestimonialSliderMobile";
import TestimonialSlider from "./TestimonialsSlider";
const testimonials = [
  {
    id: 1,
    image: "/homepage/tes/Gedia.png",
    logo: "/testimonial/gedialogo.png",
    company: "GEDIA",
    content:
      "Our experience with KSH INFRA has been outstanding in every aspect. From the very beginning, their team showed a deep understanding of our requirements. Since our customer is one of the most reputed automotive OEMs a number of special requirements need to be executed in the factory floor for our production equipment. KSH willingly accepted to make all such changes and delivered a facility that reflects the highest standards of construction quality. The entire project was executed with remarkable timeliness, and the transaction process was smooth, transparent, and highly professional. KSH INFRA has truly performed beyond our expectations — not just as a developer, but as a trusted partner who enabled us to set up a world-class manufacturing facility with complete peace of mind. We deeply value this association and look forward to future collaborations.",
    name: "Mr. Amitabh Mathur",
    designation:
      "Managing Director & CEO, GEDIA India Automotive Components Pvt. Ltd.",
  },
  {
    id: 2,
    image: "/homepage/tes/CTC-Global.png",
    logo: "/testimonial/cttf.png",
    company: "CTC Global",
    content:
      "Working with KSH INFRA on their latest project, KSH INFRA Chakan Park 3 at Varale, has been an excellent experience. We are amazed at the speed and proficiency with which all the works were carried out and it was ensured that we got our building according to our plan, apart from the timely possession all other infrastructure works were also completed in time so as not to have any disturbance to our operations and there has been no delay in our project timelines, KSH INFRA has also been very flexible to making adjustments to our changing project plans and scope! In a nut shell I will say that KSH INFRA is extremely customer centric  and understands and fulfils the needs of the clients. The quality of work has been good and KSH INFRA was very open to making any changes that we needed in order to suit our production & machine requirements. The entire Park layout is good and attention to details such as broad roads, parking, security etc is good. We look forward to continuing our partnership with them in future endeavours.",
    name: "Mr. Shyam Datye",
    designation: "India Head, CTC Global",
  },
  {
    id: 3,
    image: "/homepage/tes/klingspor.png",
    logo: "/testimonial/kltf.png",
    company: "Klingspor",
    content:
      "Our experience at KSH Talegaon Park I has been truly exceptional. We chose this facility after it successfully met our rigorous standards for infrastructure quality, as well as our comprehensive safety and security requirements. What set this collaboration apart was the outstanding support and responsiveness of the KSH INFRA team—extending well beyond our initial move-in period. Their commitment to service and professionalism has been evident throughout our journey. We deeply value the partnership we have forged through this project.",
    name: "Mr. Yogesh Barve",
    designation: "Managing Director, Klingspor",
  },
  {
    id: 4,
    image: "/homepage/tes/Unisource.png",
    logo: "/testimonial/untf.png",
    company: "Unisource",
    content:
      "We were in search of a well-located and high-quality industrial infrastructure space for our business in Talegaon, and KSH INFRA emerged as the perfect partner. Even though KSH Talegaon I Park was their first project, we were impressed by the exceptional quality of construction and their professional, solution-oriented approach. The team's positive attitude and commitment to delivery made it a great experience collaborating with them. We are pleased to see KSH INFRA rapidly expanding its footprint across India, and we extend our best wishes for continued success and growth.",
    name: "Mr. Inder Aurora",
    designation: "Director, Unisource",
  },
  {
    id: 5,
    image: "/homepage/tes/kawasaki.png",
    logo: "/testimonial/kwtf.png",
    company: "Kawasaki",
    content:
      "TEAM KSH has provided us a world-class facility in Chakan Industrial area for our manufacturing operations. Team KSH was extremely supportive and professional in developing the facility for us. We were able to commence operations within two months from moving-in which was very beneficial for us.",
    name: "Naoki Matsumoto",
    designation: "Chairman, India (Kawasaki)",
  },
  {
    id: 6,
    image: "/homepage/tes/Jabil.png",
    logo: "/testimonial/jbtf.png",
    company: "Jabil",
    content:
      "KSH has been very instrumental during our facility setup and with their expertise in construction and understanding of our manufacturing needs, their collaborative approach allowed them to capture critical requirements to deliver our factory on time.",
    name: "Todd Renner",
    designation: "Global Business Unit Manager, Jabil",
  },
  {
    id: 7,
    image: "/homepage/tes/Callisons.png",
    logo: "/testimonial/cltf.png",
    company: "Callisons",
    content:
      "KSH Industrial Park at Chakan is a world class industrial facility. We feel privileged to be established here as ease of doing business, safety and security of the plant & workers, infrastructure and service provided by KSH is unparalleled. Rohit Hegde and his team have provided us tremendous support in establishing the business.",
    name: "Raj Ghogale",
    designation: "Managing Director, Callisons",
  },
];
const TestimonialF = () => {
  return (
    <>
      <TestimonialSlider testimonials={testimonials} />
      <TestimonialSliderMobile testimonials={testimonials} />
    </>
  );
};

export default TestimonialF;
