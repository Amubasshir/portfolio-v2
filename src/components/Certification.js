import { motion } from 'framer-motion';
import Image from 'next/image';
import certificate3 from '../../public/images/certificate/freecodecamp.png';
import certificate1 from '../../public/images/certificate/meta.png';
import certificate4 from '../../public/images/certificate/p-hero.png';
import certificate2 from '../../public/images/certificate/scrimba.png';
import AnimatedText from './AnimatedText';

const Certification = () => {
  const openImageInNewWindow = (url) => {
    const newWindow = window.open('width=500, height=500');
    newWindow.document.write(
      `<html><head><title>Certificate</title></head><body><img src="${url}" /></body></html>`
    );
  };

  return (
    <div className="certifications mt-44 xs:mt-14">
      <AnimatedText
        text="Certifications"
        className="!mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-pink-600 to-red-600 dark:duration-300"
      />
      <div class="grid grid-cols-4 lg:grid-cols-2 xs:grid-cols-1 gap-4 ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          class="flex justify-center items-center p-2 w-full h-auto shadow-md border border-gray-400 shadow-gray-500 rounded-xl"
          onClick={() => openImageInNewWindow(certificate1.src)}
        >
          <Image
            src={certificate1}
            alt="certificate of react from meta"
            class="w-full h-auto  object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          class="flex justify-center items-center p-2 w-full h-auto shadow-md border border-gray-400 shadow-gray-500 rounded-xl"
          onClick={() => openImageInNewWindow(certificate2.src)}
        >
          <Image
            src={certificate2}
            alt="certificate from scrimba"
            class="w-full h-auto hover:rounded-xl duration-300 "
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          class="flex justify-center items-center p-2 w-full h-auto shadow-md border border-gray-400 shadow-gray-500 rounded-xl"
          onClick={() => openImageInNewWindow(certificate3.src)}
        >
          <Image
            src={certificate4}
            alt="certificate from freecodecamp"
            class="w-full h-auto  object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          class="flex justify-center items-center p-2 w-full h-auto shadow-md border border-gray-400 shadow-gray-500 rounded-xl"
          onClick={() => openImageInNewWindow(certificate4.src)}
        >
          <Image
            src={certificate3}
            alt="certificate from programming hero"
            class="w-full h-auto  object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;
