import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icons';
import Logo from './Logo';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-20 py-8 dark:bg-[#18191A] dark:text-light font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4 nav-link" />
        <CustomLink
          href="/projects"
          title="Projects"
          className="mx-4 nav-link"
        />
        <CustomLink href="/about" title="About" className="mx-4 nav-link" />
        <CustomLink href="/contact" title="Contact" className="ml-4 nav-link" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com/lastmubasshir"
          target="_blank"
          whileTap={{ scale: 0.5 }}
          whileHover={{ y: -3 }}
          className="w-8 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mubasshirahmed7/"
          target="_blank"
          whileTap={{ scale: 0.5 }}
          whileHover={{ y: -3 }}
          className="w-8 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/Amubasshir"
          target="_blank"
          whileTap={{ scale: 0.5 }}
          whileHover={{ y: -3 }}
          className="w-8 ml-3"
        >
          <GithubIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`ml-3 rounded-full flex items-center justify-center  p-1 ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
        >
          {mode === 'dark' ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-3 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
