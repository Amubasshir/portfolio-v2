import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '../../public/images/profile/p-m-h.png';

const image = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedImage = ({ className = '' }) => {
  return (
    <motion.div
      className={`inline-block w-full ${className}`}
      variants={image}
      initial="initial"
      animate="animated"
    >
      <Image src={profilePic} alt="Profile picture" />
    </motion.div>
  );
};

export default AnimatedImage;
