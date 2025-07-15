import { motion } from "framer-motion";

const SwiperCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="bg-white p-6 shadow-lg rounded-xl text-center flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default SwiperCard;
