import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "assets/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "assets/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "assets/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "assets/images/PHP.svg",
    label: "PHP",
    desc: "Server-side",
  },
  {
    imgSrc: "assets/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "assets/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "assets/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "assets/images/typescript.svg",
    label: "TypeScript",
    desc: "JavaScript Superset",
  },
  {
    imgSrc: "assets/images/laravel.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
  {
    imgSrc: "assets/images/Livewire.svg",
    label: "LiveWire",
    desc: "PHP Framework",
  },
  {
    imgSrc: "assets/images/filament.png",
    label: "Filament",
    desc: "PHP Framework",
  },
  {
    imgSrc: "assets/images/Bootstrap.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
  {
    imgSrc: "assets/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "assets/images/MySQL.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "assets/images/PostgresSQL.svg",
    label: "PostgresSQL",
    desc: "Database",
  },
];

const Skills = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2 reveal-up'>Essential Tools I use</h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] '>
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes='reveal-up '
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
