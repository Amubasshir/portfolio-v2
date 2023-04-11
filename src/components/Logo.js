import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <MotionLink
        href="/"
        className="w-16 xs:w-8  bg-dark  text-white flex items-center border border-solid border-transparent justify-center rounded-full text-4xl font-serif dark:border-light "
      >
        <motion.h5
          whileHover={{
            color: ['#FFFFFF', '#F59748', '#000000'],
          }}
          transition={{ duration: 1, repeat: 1 }}
        >
          M
        </motion.h5>
      </MotionLink>
    </div>
  );
};

export default Logo;
