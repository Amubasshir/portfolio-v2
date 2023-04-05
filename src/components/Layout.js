const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light 2xl:p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8  dark:bg-[#18191A]
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
