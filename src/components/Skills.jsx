import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "../src/assets/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "../src/assets/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "../src/assets/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "../src/assets/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "../src/assets/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "../src/assets/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "../src/assets/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "../src/assets/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skills = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2'>Essential Tools I use</h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className=''>
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;