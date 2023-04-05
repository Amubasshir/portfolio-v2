import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-0 bg-orange-500"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </>
  );
};

export default TransitionEffect;
