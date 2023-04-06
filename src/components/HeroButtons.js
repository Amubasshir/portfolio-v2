import { motion } from 'framer-motion';
import Link from 'next/link';
import { LinkArrow } from './Icons';

const buttonContainer = {
  animate: {
    transition: {
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeInOut' },
      }}
      className="hero-buttons flex items-center mt-4 self-start"
    >
      <Link
        href="https://github.com/"
        target={'_blank'}
        className="flex items-center text-gray-50 px-6 py-2 bg-dark rounded-lg text-lg font-serif tracking-wider hover:bg-[#f0f1ea] hover:text-black border-solid border-transparent dark:border-double hover:border-dark border-2
        hover:dark:bg-dark hover:dark:text-white hover:dark:border-white
        dark:bg-light dark:text-black duration-300 md:p-2 md:px-4 md:text-base "
        download={true}
      >
        Resume
        <LinkArrow className="w-6 ml-1 " />
      </Link>
      <Link
        href="mailto:mubasshir1107@gmail.com"
        target={'_blank'}
        className="flex items-center  px-6 py-2 ml-3 rounded-lg text-lg font-serif tracking-wider hover:bg-dark hover:text-white border-solid border-black border-2 dark:text-light dark:border-white hover:dark:bg-light hover:dark:text-black dark:bg-dark inner-border hover:dark:inner-border-black  duration-300 md:p-2 md:px-4 md:text-base "
      >
        Contact
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
