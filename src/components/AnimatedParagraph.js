import { motion } from 'framer-motion';

const singleWord = {
  initial: {
    opacity: 0,
    scale: 0.2,
  },
  animated: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const AnimatedParagraph = ({ text, className = '' }) => {
  return (
    <p
      className={`my-4 text-lg  font-medium leading-7 tracking-wider ${className}`}
    >
      {text.split(' ').map((word, index) => {
        return (
          <motion.span
            key={index}
            className="inline-block"
            variants={singleWord}
            initial="initial"
            animate="animated"
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </p>
  );
};

export default AnimatedParagraph;
