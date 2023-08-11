import AdamLogo from '../atoms/icons/AdamLogo';

function Header() {
  return (
    <header className="main-header">
      {/* <!-- Header Top --> */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between py-3">
          <div className="grow">
            <div className="flex space-x-0 md:space-x-14">
              {/* <!-- Email --> */}
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-envelope text-new-500"></i>
                <a
                  href="mailto:boudjemaa.adam@gmail.com"
                  className="text-interface-200 text-base"
                >
                  boudjemaa.adam@gmail.com
                </a>
              </div>
              {/* <!-- Phone --> */}
              <div className="space-x-2 hidden md:flex items-center">
                <i className="fa-solid fa-phone text-new-500"></i>
                <a
                  href="tel:+971585129533"
                  className="text-interface-200 text-base"
                >
                  +971 58 512 9533
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            {/*
           facebook sticker
           <a
             href="http://"
             className="group transition-all text-interface-200 hover:text-new-500"
             target="_blank"
             rel="noopener noreferrer"
           >
             <i className="fa-brands fa-facebook-f"></i>
           </a> */}
            <a
              href="https://twitter.com/AdamBoudj"
              className="group transition-all text-interface-200 hover:text-new-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            {/*
           youtube sticker
           <a
             href="http://"
             className="group transition-all text-interface-200 hover:text-new-500"
             target="_blank"
             rel="noopener noreferrer"
           >
             <i className="fa-brands fa-youtube"></i>
           </a> */}
            <a
              href="https://www.linkedin.com/in/adamboudjemaa"
              className="group transition-all text-interface-200 hover:text-new-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Header Menu --> */}
      <div className="main-menu sticky-header">
        <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <nav className="nav nav-dev pt-3 pb-3">
            <div className="nav__data">
              <a href="index-dev.html" className="nav__logo">
                {/* <img src="assets/images/logo/logo-dev-m.svg" alt="" /> */}

                <AdamLogo />
              </a>
              {/* <div className="nav__toggle" id="nav-toggle">
                <i className="fa-solid fa-bars nav__toggle-menu"></i>
                <i className="fa-solid fa-xmark nav__toggle-close"></i>
              </div> */}
            </div>

            <div className="hidden xl:block">
              <a
                href="contact-us.html"
                className="bg-new-500 text-interface-100 px-6 py-4 font-medium rounded-lg inline-flex justify-center items-center group transition-all hover:bg-new-600"
              >
                <span>Let's Talk</span>
                <svg
                  className=" stroke-interface-100 transform translate transition-transform group-hover:translate-x-2"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
