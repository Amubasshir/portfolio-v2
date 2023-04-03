// import { motion, useScroll } from 'framer-motion';
// import Link from 'next/link';
// import { useRef } from 'react';
// import LiIcon from './LiIcon';

// const Details = ({ type, time, place, info, btn }) => {
//   const ref = useRef(null);
//   return (
//     <li
//       ref={ref}
//       className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
//     >
//       <LiIcon reference={ref} />

//       <motion.div
//         initial={{ y: 50 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 0.5, type: 'spring' }}
//       >
//         <h3 className="font-bold text-3xl text-black mb-2">{type}</h3>
//         <span className="font-medium text-gray-800 text-xl tracking-wider">
//           {time} || {place}
//         </span>
//         <p className="font-medium w-full mt-2 text-gray-900 leading-7">
//           {info}
//         </p>
//         <Link
//           href={'href'}
//           target={'_blank'}
//           className="flex items-center w-auto text-gray-50 gap-2 mt-4 px-6 py-2 justify-center bg-black rounded-lg text-lg font-serif tracking-wider hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 duration-300"
//         >
//           {btn}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             data-supported-dps="16x16"
//             fill="currentColor"
//             class="mercado-match"
//             width="18"
//             height="18"
//             focusable="false"
//           >
//             <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
//           </svg>
//         </Link>
//       </motion.div>
//     </li>
//   );
// };

// const Bootcamp = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'center start'],
//   });
//   return (
//     <div className="bootCamp-container my-32">
//       <h2 className="font-bold text-6xl mb-32 w-full text-center">
//         Bootcamps/Courses
//       </h2>
//       <div ref={ref} className="w-[75%] mx-auto relative  ">
//         <motion.div
//           style={{ scaleY: scrollYProgress }}
//           className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
//         />

//         <ul className="w-full flex flex-col gap-2 items-start justify-between ml-4 ">
//           <Details
//             type="The Frontend Career Path"
//             time="Jun2022 - Nov2022"
//             place="Scrimba"
//             info="The Frontend Career Path by Scrimba is a self-paced online course that helps individuals learn and master front-end web development skills, including HTML, CSS, JavaScript, and React. It includes interactive coding exercises and real-world projects, and offers a supportive community of fellow learners and mentors. It is a comprehensive and practical course for anyone interested in pursuing a career in front-end web development.

//             "
//             btn="Credential"
//             href="https://scrimba.com/dashboard#overview"
//           />
//           <Details
//             type="JavaScript Algorithms And Data Structures"
//             time="Sep2022 - Nov2022"
//             place="FreeCodeCamp"
//             info="JavaScript Algorithms and Data Structures is a comprehensive online course offered by freeCodeCamp that teaches fundamental concepts in JavaScript programming, algorithms, and data structures. The course includes interactive coding challenges and projects to help learners apply their knowledge and build real-world applications. It is a valuable resource for anyone looking to strengthen their JavaScript skills and gain practical experience in programming fundamentals.

// "
//             btn="Credential"
//           />
//           <Details
//             type="The Complete Web Development Course By Jhankar Mahbub"
//             time="June2021 - Feb2022"
//             place="Programming Hero"
//             info="The Complete Web Development Course By Jhankar Mahbub is an online course that focuses on teaching the MERN (MongoDB, Express, React, and Node.js) stack for full-stack web development. The course includes modules on HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and other related technologies. Upon completing the course, students will have built three complete projects using the MERN stack. It is a comprehensive course for anyone looking to learn MERN stack web development.
// "
//             btn="Credential"
//           />
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Bootcamp;

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info, btns }) => {
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
        <h3 className="font-bold text-3xl text-black mb-2">{type}</h3>
        <span className="font-medium text-gray-800 text-xl tracking-wider">
          {time} || {place}
        </span>
        <p className="font-medium w-full mt-2 mb-4 text-gray-900 leading-7">
          {info}
        </p>

        {btns.map((btn) => (
          <a
            key={btn.href}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open(btn.href, '_blank');
            }}
            className="flex items-center text-gray-50 px-6 py-2 bg-black rounded-lg text-lg font-serif tracking-wider hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 duration-300"
            style={{ maxWidth: 'fit-content' }}
          >
            <div className="flex items-center">
              <span>{btn.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match ml-2"
                width="18"
                height="18"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
            </div>
          </a>
        ))}
      </motion.div>
    </li>
  );
};

const Bootcamp = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  const details = [
    {
      type: 'The Frontend Career Path',
      time: 'Jun2022 - Nov2022',
      place: 'Scrimba',
      info: 'The Frontend Career Path by Scrimba is a self-paced online course that helps individuals learn and master front-end web development skills, including HTML, CSS, JavaScript, and React. It includes interactive coding exercises and real-world projects, and offers a supportive community of fellow learners and mentors. It is a comprehensive and practical course for anyone interested in pursuing a career in front-end web development.',
      btns: [
        {
          label: 'Credential',
          href: 'https://scrimba.com/certificate/uE6er9Tx/gfrontend',
        },
      ],
    },
    {
      type: 'JavaScript Algorithms And Data Structures',
      time: 'Sep2022 - Nov2022',
      place: 'FreeCodeCamp',
      info: 'JavaScript Algorithms and Data Structures is a comprehensive online course offered by freeCodeCamp that teaches fundamental concepts in JavaScript programming, algorithms, and data structures. The course includes interactive coding challenges and projects to help learners apply their knowledge and build real-world applications. It is a valuable resource for anyone looking to strengthen their JavaScript skills and gain practical experience in programming fundamentals.',
      btns: [
        {
          label: 'Credential',
          href: 'https://www.freecodecamp.org/certification/mubasshir7/javascript-algorithms-and-data-structures',
        },
      ],
    },
    {
      type: 'The Complete Web Development Course By Jhankar Mahbub',
      time: 'June2021 - Feb2022',
      place: 'Programming Hero',
      info: 'The Complete Web Development Course By Jhankar Mahbub is an online course that focuses on teaching the MERN (MongoDB, Express, React, and Node.js) stack for full-stack web development. The course includes modules on HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and other related technologies. Upon completing the course, students will have built three complete projects using the MERN stack. It is a comprehensive course for anyone looking to learn MERN stack web development.',
      btns: [
        {
          label: 'Credential',
          href: 'https://web.programming-hero.com/congrats/complete/61bdfafcf5118b71ade5a5f5',
        },
      ],
    },
  ];

  return (
    <div className="bootCamp-container my-32">
      <h2 className="font-bold text-8xl text-center  mb-32 w-full">
        Bootcamps/Courses
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative  " />
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
      />

      <ul className="flex flex-col gap-12" style={{ position: 'relative' }}>
        {details.map((detail) => (
          <Details
            key={detail.type}
            type={detail.type}
            time={detail.time}
            place={detail.place}
            info={detail.info}
            btns={detail.btns}
          />
        ))}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        />
      </ul>
    </div>
  );
};
export default Bootcamp;
