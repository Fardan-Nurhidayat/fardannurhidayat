import { ButtonPrimary } from "./Button";
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Certificates",
    href: "#certificates",
  },
  // {
  //   label: "Reviews",
  //   href: "#reviews",
  // },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Fardan-Nurhidayat",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fardan-nurhidayat/",
  },
  // {
  //   label: "Twitter X",
  //   href: "https://x.com/codewithsadee_",
  // },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fardan_nurhidayat/",
  },
  // {
  //   label: "CodePen",
  //   href: "https://codepen.io/codewithsadee",
  // },
];
const Footer = () => {
  return (
    <footer className='section'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='mb-10'>
            <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href='mailto:fardannuhridayat12@gmail.com'
              label='Start Project'
              icon='chevron_right'
              classes='reveal-up'
            />
          </div>

          <div className='grig grid-cols=2 gap-4 lg:pl-20 '>
            <div>
              <p className='mb-2 reveal-up'>Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='mb-2 reveal-up'>Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target='_blank'
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center pt-10 mb-8'>
          <p className='text-zinc-500 text-sm'>
            &copy; 2024{" "}
            <span className='text-zinc-200 reveal-up'>Fardan Nurhidayat</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
