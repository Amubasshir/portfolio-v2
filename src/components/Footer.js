import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, TwitterIcon, UpworkIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-gray-500 dark:bg-[#23272F]  dark:text-light dark:border-gray-500 ">
      <div className="footer-wrapper py-8 xs:py-4 md:flex-col md:py-6 md:gap-4 flex items-center justify-between px-20">
        <div className="footer-left flex items-center justify-center">
          <p className="text-base font-serif md:text-sm font-medium tracking-wide">
            &copy;{new Date().getFullYear()} <span>Mubasshir Ahmed.</span>
            <span className="xs:hidden">All right reserved.</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="flex items-center justify-center">
            <motion.a
              href="https://www.upwork.com/freelancers/~0150a88664353f6900"
              target="_blank"
              whileTap={{ scale: 0.5 }}
              whileHover={{ y: -3 }}
              className="w-6 mx-2 md:w-4"
            >
              <UpworkIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Amubasshir"
              target="_blank"
              whileTap={{ scale: 0.5 }}
              whileHover={{ y: -3 }}
              className="w-6 mx-2 md:w-4"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mubasshirahmed7/"
              target="_blank"
              whileTap={{ scale: 0.5 }}
              whileHover={{ y: -3 }}
              className="w-6 mx-2 md:w-4"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/lastmubasshir"
              target="_blank"
              whileTap={{ scale: 0.5 }}
              whileHover={{ y: -3 }}
              className="w-6 ml-2 md:w-4"
            >
              <TwitterIcon />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
