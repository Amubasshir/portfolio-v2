import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-gray-500  dark:text-light dark:border-gray-500">
      <div className="footer-wrapper py-8 flex items-center justify-between px-20">
        <div className="footer-left">
          <p className="text-base font-medium tracking-wide">
            &copy;{new Date().getFullYear()}{' '}
            <span>Mubasshir Ahmed. All right reserved.</span>{' '}
          </p>
        </div>
        <div className="footer-right">
          <div className="flex items-center justify-center">
            <motion.a
              href="https://www.linkedin.com/in/mubasshirahmed7/"
              target="_blank"
              whileTap={{ scale: 0.5 }}
              whileHover={{ y: -3 }}
              className="w-6 mx-2"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://github.com/Amubasshir"
              target="_blank"
              whileTap={{ scale: 0.5 }}
              whileHover={{ y: -3 }}
              className="w-6 mx-2"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href="https://twitter.com/lastmubasshir"
              target="_blank"
              whileTap={{ scale: 0.5 }}
              whileHover={{ y: -3 }}
              className="w-6 ml-2"
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
