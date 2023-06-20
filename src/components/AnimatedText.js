import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 0,
  },
  animated: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const wordVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const wordsContainerVariants = {
  animated: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0"
      variants={quote}
      initial="initial"
      animate="animated"
    >
      <motion.h1
        className={`inline-block w-full  text-black font-bold
        dark:text-light
        text-8xl ${className}`}
      >
        <motion.span
          variants={wordsContainerVariants}
          initial="initial"
          animate="animated"
        >
          {text.split(' ').map((word, index) => {
            return (
              <motion.span
                key={index}
                className="inline-block"
                variants={wordVariants}
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
