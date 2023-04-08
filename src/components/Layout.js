const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full p-32 inline-block z-0 bg-light xl:p-24 lg:p-16 md:p-12 sm:p-8  dark:bg-[#23272F]
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
