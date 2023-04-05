import Link from 'next/link';
import { useRouter } from 'next/router';
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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-28 py-2 dark:bg-[#18191A] dark:text-light font-medium flex items-center justify-between">
      <div>
        <img
          src="https://i.ibb.co/gSpSyt4/m-p-logo-black.png"
          alt="logo"
          width="90"
          className="black-logo"
        />
        <img
          src="https://i.ibb.co/bHShrbd/m-p-logo-white.png"
          alt="logo"
          width="90"
          className="hidden dark:block"
        />
      </div>

      <nav className="left flex items-center">
        <div>
          <CustomLink
            href="/"
            title="Home"
            className="mr-4  text-lg nav-link"
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4 text-lg nav-link"
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4 text-lg nav-link"
          />
          <CustomLink
            href="/contact"
            title="Contact"
            className="ml-4 text-lg nav-link"
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
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </div>
      </nav>

      <style jsx>{`
        .black-logo {
          display: ${mode === 'dark' ? 'none' : 'block'};
        }
      `}</style>
    </header>
  );
};

export default Navbar;
