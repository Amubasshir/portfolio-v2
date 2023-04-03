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
        className="flex items-center text-gray-50 px-6 py-2 bg-black rounded-lg text-lg font-serif tracking-wider hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 duration-300 "
        download={true}
      >
        Resume
        <LinkArrow className="w-6 ml-1" />
      </Link>
      <Link
        href="mailto:mubasshir1107@gmail.com"
        target={'_blank'}
        className="flex items-center  px-6 py-2 ml-3 rounded-lg text-lg font-serif tracking-wider hover:bg-black hover:text-white border-solid border-dark border-2 duration-300 "
      >
        Contact
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
