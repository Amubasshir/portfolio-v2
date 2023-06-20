import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} text-light dark:text-dark my-2 `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="w-full px-28 py-2 dark:bg-[#23272F] dark:text-light font-medium flex items-center justify-between  lg:px-14 md:px-10 sm:px-6"
    >
      <button
        className="hamburger-btn flex-col hidden xs:flex justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 first-letter:
          ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}
          `}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5
          ${isOpen ? 'opacity-0' : 'opacity-100'}
          `}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm
          ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}
          `}
        ></span>
      </button>

      <Link href="/">
        <img
          src="https://i.ibb.co/gSpSyt4/m-p-logo-black.png"
          alt="logo"
          width="90"
          className="black-logo xs:w-8 xl:w-14 2xl:w-16"
        />
        <img
          src="https://i.ibb.co/bHShrbd/m-p-logo-white.png"
          alt="logo"
          width="90"
          className="hidden dark:block xs:w-8 xl:w-14 2xl:w-16"
        />
      </Link>

      <div className="navbar-right flex xs:hidden">
        <nav className=" flex items-center">
          <div className="font-serif">
            <CustomLink
              href="/"
              title="Home"
              className="sm:mr-2 mr-4 sm:text-base text-lg nav-link"
            />
            <CustomLink
              href="/projects"
              title="Projects"
              className="sm:mr-2 mx-4 sm:text-base text-lg nav-link"
            />
            <CustomLink
              href="/about"
              title="About"
              className="sm:mr-2 mx-4 sm:text-base text-lg nav-link"
            />
            <CustomLink
              href="/contact"
              title="Contact"
              className="sm:ml-2 ml-4 sm:text-base text-lg nav-link"
            />
          </div>

          <div>
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-10 rounded-full flex items-center justify-center  p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className="fill-dark xs:w-8 !important" />
              ) : (
                <MoonIcon className="fill-dark xs:w-8 !important" />
              )}
            </button>
          </div>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="mobile-navbar min-w-[70vw] z-40 flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/70 dark:bg-light/60 rounded-lg backdrop-blur-md py-32"
        >
          <nav className=" flex  items-center  flex-col justify-center">
            <div className=" flex items-center flex-col justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=" text-lg"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className="text-lg"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className="text-lg"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/contact"
                title="Contact"
                className="text-lg"
                toggle={handleClick}
              />
            </div>

            <div className="flex items-center justify-center text-light dark:text-dark">
              <Link href="https://github.com/Amubasshir" target="_blank">
                <div
                  className="project-live-button"
                  style={{ position: 'relative', width: 'max-content' }}
                >
                  <div
                    className="project-live-button"
                    style={{ position: 'relative', width: 'max-content' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="textcircle block w-16 xs:w-14 animate-spin animate-spin-slow"
                      viewBox="0 0 500 500"
                    >
                      <defs>
                        <path
                          id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                        />
                      </defs>
                      <text className="">
                        <textPath
                          xlinkHref="#textcircle"
                          aria-label="Click To See Live Site"
                          textLength="900"
                          className="text-6xl font-serif"
                          style={{
                            fill: 'currentColor',
                            transition: 'fill 0.2s',
                          }}
                        >
                          Click Here Click Here
                        </textPath>
                      </text>
                    </svg>
                    <svg
                      className="eye absolute w-8 h-8 xs:w-6 xs:h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      aria-hidden="true"
                      viewBox="0 0 70 70"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="eye__outer stroke-black fill-none w-[1px]"
                        d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"
                      />
                      <path
                        className="eye__lashes-up animate-hide stroke-black fill-none w-[1px]"
                        d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192"
                      />
                      <path
                        className="eye__lashes-down hidden animate-show stroke-black fill-none w-[1px]"
                        d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z"
                      />
                      <circle
                        className="eye__iris animate-hide"
                        cx="35"
                        cy="35.31"
                        r="5.221"
                      />
                      <circle
                        className="eye__inner animate-hide stroke-black fill-none w-[1px]"
                        cx="35"
                        cy="35.31"
                        r="10.041"
                      />
                    </svg>
                  </div>

                  <svg
                    className="eye absolute w-8 h-8 xs:w-8 xs:h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:(stroke-white)"
                    aria-hidden="true"
                    viewBox="0 0 70 70"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="eye__outer stroke-current fill-none w-[1px]"
                      d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"
                      stroke="currentColor"
                    />
                    <path
                      className="eye__lashes-up animate-hide stroke-current fill-none w-[1px]"
                      d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192"
                      stroke="currentColor"
                    />
                    <path
                      className="eye__lashes-down hidden animate-show stroke-current fill-none w-[1px]"
                      d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z"
                      stroke="currentColor"
                    />
                    <circle
                      className="eye__iris animate-hide stroke-current"
                      cx="35"
                      cy="35.31"
                      r="5.221"
                      stroke="currentColor"
                    />
                    <circle
                      className="eye__inner animate-hide stroke-current fill-none w-[1px]"
                      cx="35"
                      cy="35.31"
                      r="10.041"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
              </Link>
              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className={`ml-10 rounded-full flex items-center justify-center  p-1 ${
                  mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
                }`}
              >
                {mode === 'dark' ? (
                  <SunIcon className="fill-dark xs:w-8 !important" />
                ) : (
                  <MoonIcon className="fill-dark xs:w-8 !important" />
                )}
              </button>
            </div>
          </nav>
        </motion.div>
      ) : null}

      <style jsx>{`
        .black-logo {
          display: ${mode === 'dark' ? 'none' : 'block'};
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
