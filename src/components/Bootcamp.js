import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl">{type}</h3>
        <span className="font-medium text-black/75">
          {time}|{place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Bootcamp = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0, 0],
  });
  return (
    <div className="bootCamp-container my-32">
      <h2 className="font-bold text-6xl mb-32 w-full text-center">
        Bootcamps/Courses
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative  ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type="Web development"
            time="June2021-Feb2022"
            place="programming hero"
            info="this course help me to bla and alwaus
            this course help me to bla and alwaus lorem20
            lorem In the useScroll hook, I set the offset prop to [0, 0] instead of ['start end', 'center start']. This should fix the issue where the scroll progress was stopping short of the bottom of the page.

"
          />
          <Details
            type="Web development"
            time="June2021-Feb2022"
            place="programming hero"
            info="this course help me to bla and alwaus lorem20
            lorem In the useScroll hook, I set the offset prop to [0, 0] instead of ['start end', 'center start']. This should fix the issue where the scroll progress was stopping short of the bottom of the page.


            "
          />
          <Details
            type="Web development"
            time="June2021-Feb2022"
            place="programming hero"
            info="this course help me to bla and alwaus
             this course help me to bla and alwaus lorem20
            lorem In the useScroll hook, I set the offset prop to [0, 0] instead of ['start end', 'center start']. This should fix the issue where the scroll progress was stopping short of the bottom of the page.
"
          />
        </ul>
      </div>
    </div>
  );
};

export default Bootcamp;
