import AnimatedText from './AnimatedText';

const data = [
  { id: 1, title: 'HTML' },
  { id: 2, title: 'CSS' },
  { id: 3, title: 'Sass' },
  { id: 4, title: 'Tailwind' },
  { id: 5, title: 'React' },
  { id: 6, title: 'Next.JS' },
  { id: 7, title: 'Redux Toolkit' },
  { id: 8, title: 'Node.js' },
  { id: 9, title: 'Express' },
  { id: 10, title: 'MongoDB' },
  { id: 11, title: 'Framer Motion' },
  { id: 12, title: 'Firebase' },
];

const Skills = () => {
  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <AnimatedText
        text="Skills"
        className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-pink-600 to-red-600 dark:duration-300"
      />
      <div className="skills-wrapper grid grid-cols-2 gap-10 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => {
              return (
                <li key={skill.id} className="skill-item overflow-visible">
                  <div className="flex gap-10 items-baseline">
                    <span className="skill-number dark:text-white/50">
                      {String(skill.id).padStart(2, 0).padEnd(3, '.')}
                    </span>
                    <span className="skill-name">{skill.title}</span>
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
                  <div className="flex gap-10 items-baseline">
                    <span className="skill-number dark:text-white/50">
                      {String(skill.id).padStart(2, 0).padEnd(3, '.')}
                    </span>
                    <span className="skill-name">{skill.title}</span>
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
