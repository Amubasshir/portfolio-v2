import AnimatedText from './AnimatedText';

const data = [
  { id: 1, title: 'Javascript' },
  { id: 2, title: 'Typescript' },
  { id: 3, title: 'React' },
  { id: 4, title: 'Next.JS' },
  { id: 5, title: 'Redux' },
  { id: 6, title: 'Tailwind' },
  { id: 7, title: 'SCSS' },
  { id: 8, title: 'Node.js' },
  { id: 9, title: 'Express' },
  { id: 10, title: 'MongoDB' },
  { id: 11, title: 'Firebase' },
  { id: 12, title: 'Framer Motion' },
];

const Skills = () => {
  return (
    <div className="skills mt-40 xs:mt-14" id="skills">
      <AnimatedText
        text="My Skills"
        className="!mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-pink-600 to-red-600 dark:duration-300"
      />
      <div className="skills-wrapper grid grid-cols-2 md:flex md:flex-col gap-6 w-full ">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => {
              return (
                <li key={skill.id} className="skill-item overflow-visible">
                  <div className="flex gap-10 items-baseline">
                    <span className="skill-number dark:text-white/50 text-6xl xl:text-6xl md:text-5xl sm:text-2xl w-20">
                      {String(skill.id).padStart(2, 0).padEnd(3, '.')}
                    </span>
                    <span className="skill-name text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl xs:font-medium tracking-wider leading-6 ">
                      {skill.title}
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => {
              return (
                <li key={skill.id} className="skill-item overflow-hidden">
                  <div className="flex gap-10 items-baseline w-full">
                    <span className="skill-number dark:text-white/50 text-6xl xl:text-6xl md:text-5xl sm:text-2xl w-20">
                      {String(skill.id).padStart(2, 0).padEnd(3, '.')}
                    </span>
                    <span className="skill-name text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl xs:font-medium tracking-wider leading-6  ">
                      {skill.title}
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
