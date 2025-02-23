const aboutItems = [
  {
    label: "Project Done",
    number: 3,
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
            Halo, saya Fardan Nurhidayat, mahasiswa tingkat akhir di Politeknik
            Negeri Cilacap. Saya memiliki pengalaman magang selama 6 bulan
            sebagai Web Developer di CV. Astoetik Indonesia. Saat ini saya
            sedang mencari pekerjaan sebagai Web Developer. Saya memiliki
            kemampuan dalam membangun website dengan teknologi terbaru seperti
            React, Vue, Tailwind CSS, dan Laravel.
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
