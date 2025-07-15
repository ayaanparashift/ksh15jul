export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
};
