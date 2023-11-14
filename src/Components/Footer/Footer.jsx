import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12131e] pt-8 sm:pt-12 w-screen">
      <div className="container">
        <div className="sm:flex items-center justify-between gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i className="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <p className="text-gray-300 leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi quod est accusantium facere veniam similique sequi ea
              praesentium, cumque magnam?
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <div className="flex gap-4">
                <SocialLink href="#github" icon="ri-github-line" />
                <SocialLink href="#youtube" icon="ri-youtube-line" />
                <SocialLink href="#facebook" icon="ri-facebook-line" />
                <SocialLink href="#instagram" icon="ri-instagram-line" />
              </div>
            </div>
          </div>
        </div>

        <ul className="flex items-center justify-center gap-2 lg:gap-20 mt-8">
          <FooterLink href="#about" text="About" />
          <FooterLink href="#services" text="Services" />
          <FooterLink href="#portfolio" text="Portfolio" />
          <FooterLink href="#contact" text="Contact" />
        </ul>
      </div>

      <div className="bg-[#1b1e29] py-4 mt-8">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  A
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">Afaq</h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            <div className="text-gray-400 text-[14px]">
              Copyright {year} developed by Afaq - All right reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }) => (
  <li>
    <a className="text-gray-400 font-[600]" href={href}>
      {text}
    </a>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <span className="w-7 h-7 bg-[#2b2d33] p-1 rounded-full cursor-pointer text-center">
    <a href={href} className="text-gray-300 font-[500] text-[18px]">
      <i className={icon}></i>
    </a>
  </span>
);

export default Footer;
