import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="w-full px-20 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" target="_blank">
          t
        </Link>
        <Link href="/" target="_blank">
          l
        </Link>
        <Link href="/" target="_blank">
          g
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
