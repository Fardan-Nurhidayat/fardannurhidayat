import { ButtonPrimary, ButtonOutline } from "./Button";
const Hero = () => {
  return (
    <section
      id='home'
      className='pt-28 lg:pt-36'>
      <div className='container sm:text-center md:text-center lg:text-left lg:grid lg:grid-cols-2 items-center  lg:gap-10'>
        <div className=''>
          <div className=' flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg'>
              <img
                src='../src/assets/images/profile-fardan.png'
                alt=''
                width={40}
                height={40}
                className='img-cover'
              />
            </figure>
            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping'></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className='headline-1 max-w-[15ch] sm-max-w-[20ch] lg:max-w-[15ch] mt-4 mb-8 lg:mb-10'>
            Builidng scalable Modern Website for the Future
          </h2>
          <div className='flex items-center gap-3 sm:justify-center md:justify-center lg:justify-start'>
            <ButtonPrimary
              label='Download CV'
              icon='download'
              href='../public/CV-Fardan-Nurhidayat.pdf'
            />
            <ButtonOutline
              label='Scroll down'
              href='#about'
              icon='arrow_downward'
            />
          </div>
        </div>
        <div className='lg:block'>
          <figure className='w-full max-w-[480px] mx-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
            <img
              src='../src/assets/images/profile-fardan.png'
              alt='Fardan Nurhidayat'
              className='min-w-full min-h-full object-cover'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
