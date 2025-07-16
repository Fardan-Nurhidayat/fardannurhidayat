import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "assets/images/fincoach.jpg",
    title: "Fincoach",
    tags: ["React", "Front End Development"],
    projectLink: "https://fincoach.vercel.app",
  },
  {
    imgSrc: "assets/images/project-sipmb.jpg",
    title: "Sistem Informasi Penerimaan Mahasiswa Baru",
    tags: ["Laravel", "Full Stack Development"],
    projectLink: "https://ti-3a-1.abm.my.id",
  },
  {
    imgSrc: "assets/images/project-arpus.png",
    title: "Website Dinas Arpus Cilacap",
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
    title: "Blogs App with Vue",
    tags: ["Vue", "SPA"],
    projectLink: "https://blogs-app-with-vue.netlify.app/",
  },
  {
    imgSrc: "assets/images/project-astoetik.png",
    title: "Sistem Informasi Inventori & Aplikasi Penjualan",
    tags: ["Laravel", "Filament", "Full Stack Development"],
    projectLink: "https://www.astoetik.co.id/",
  },
  {
    imgSrc: "assets/images/react-notes-app.jpg",
    title: "React Notes App",
    tags: ["React", "Local Storage", "Dicoding Submission"],
    projectLink: "https://react-notes-website.netlify.app/",
  },
  {
    imgSrc: "assets/images/ipad-animated.png",
    title: "Animated iPad",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    projectLink: "https://fardan-nurhidayat.github.io/ipad-animated/",
  },
  {
    imgSrc: "assets/images/mco.png",
    title: "MCO (Management & Controlling Organization)",
    tags: ["UI/UX Design", "Figma"],
    projectLink:
      "https://www.figma.com/design/UDvM13Ls8nwLoRYQic9aC9/DIP?t=RA3FH2E6hLe3F4p9-1",
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
