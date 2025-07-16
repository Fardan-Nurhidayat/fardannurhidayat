const aboutItems = [
  {
    label: "Project Done",
    number: 5,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section
      id='about'
      className='section'>
      <div className='container'>
        <div className=''>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]'>
            Hello, I am Fardan Nurhidayat, A final year Diploma (D3) in
            Informatics Engineering student with experience as a Web Developer
            Intern at CV Astoetik Indonesia and an alumnus of the 2025 Coding
            Camp Powered by DBS Foundation. Proficient in frontend (TypeScript,
            React Js, Tailwind CSS) and backend (Laravel, Livewire, Node Js)
            development, as well as experienced in using MySQL and PostgreSQL.
          </p>
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {aboutItems.map(({ label, number }, key) => (
              <div
                key={key}
                className=''>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>
                    {number}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>
                    +
                  </span>
                </div>
                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}
            {/* <img
              src='../src/assets/images/logo.svg'
              alt='Logo'
              width={30}
              height={30}
              className='ml-auto md:w-[40px] md:h-[40px]'
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
