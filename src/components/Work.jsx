import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "assets/images/project-arpus.png",
    title: "Wordpress Development",
    tags: ["Wordpress", "Web Design"],
    projectLink: "https://arpus.cilacapkab.go.id/arpus/",
  },
  {
    imgSrc: "assets/images/project-clone-apple.png",
    title: "Clone Apple Website",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://portfolio-web-clone-1.netlify.app/",
  },
  {
    imgSrc: "assets/images/project-vue-blog.png",
    title: "Blog Website with Vue",
    tags: ["Vue", "SPA"],
    projectLink: "https://blogs-app-with-vue.netlify.app/",
  },
  {
    imgSrc: "assets/images/project-astoetik.png",
    title: "SIIAP",
    tags: ["Laravel", "Filament", "Full Stack Development"],
    projectLink: "https://www.astoetik.co.id/",
  },
];
const Work = () => {
  return (
    <section
      id='work'
      className='section mx-auto'>
      <div className='container'>
        <h2 className='headline-2 mb-5 reveal-up'>My Porffolio Highligts</h2>
        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]'>
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes='reveal-up'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
