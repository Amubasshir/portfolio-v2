import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-4xl font-serif "
      >
        <motion.h5
          whileHover={{
            color: ['#FFFFFF', '#FFFF00', '#000000'],
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
