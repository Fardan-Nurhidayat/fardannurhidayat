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
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]'>
            Hello, I am Fardan Nurhidayat, a final year student at Politeknik
            Politeknik Negeri Cilacap. I have 6 months of internship experience
            as a Full Stack Developer at CV Astoetik Indonesia. Currently I am
            currently looking for a job as a Front End Developer or Full Stack
            Developer. I have ability in building websites with the latest
            technologies such as React, Vue, Tailwind CSS, and Laravel.
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
