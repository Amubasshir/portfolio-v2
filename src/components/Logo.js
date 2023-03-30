import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <Link
        href="/"
        className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-4xl font-serif "
      >
        M
      </Link>
    </div>
  );
};

export default Logo;
