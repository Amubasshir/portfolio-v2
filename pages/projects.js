import AnimatedText from 'componemt/src/components/AnimatedText';
import { GithubIcon } from 'componemt/src/components/Icons';
import Layout from 'componemt/src/components/Layout';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import projectm2 from '../public/images/proects/movie-p-1.png';
import projectm1 from '../public/images/proects/movie-p-2.png';
import project6 from '../public/images/proects/mubsic-2.png';
import project4 from '../public/images/proects/mubsic.png';
import project7 from '../public/images/proects/nft-land-collage.png';
import project1 from '../public/images/proects/nft.png';
import project8 from '../public/images/proects/pr.png';
import project2 from '../public/images/proects/prr.png';
const FeatureProject = ({
  type,
  title,
  summary,
  img,
  altImg,
  link,
  github,
  sub1,
  sub2,
  sub3,
  sub4,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <article className="w-full  flex items-center justify-between rounded-3xl border border-gray-600 bg-light shadow-md p-12 dark:bg-[#2D333B] lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl sx:p-4 ">
      <motion.div
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        transition={{ duration: 0.9 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full  "
        >
          <Image
            src={isHovering ? altImg : img}
            alt={title}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </Link>
      </motion.div>
      <div className="w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  ">
        <span className="text-primary font-medium text-xl xs:text-sm">
          {type}
        </span>
        <h2 className="my-2 w-full dark:text-light  text-left text-4xl font-bold xs:text-2xl ">
          {title}
        </h2>
        <div className="flex xs:hidden gap-2 ">
          <p className=" flex items-center bg-[#c1c2bb43] text-gray-800 px-3 py-1  rounded-lg shadow-sm shadow-gray-300 tracking-widest text-xs dark:shadow-sm dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
            {sub1}
          </p>
          <p className=" flex  items-center bg-[#c1c2bb43] text-gray-800 px-3 py-1  rounded-lg shadow-sm shadow-gray-300 tracking-widest text-xs dark:shadow-sm dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
            {sub2}
          </p>
          <p className=" flex items-center bg-[#c1c2bb43] text-gray-800 px-3 py-1  rounded-lg shadow-sm shadow-gray-300 tracking-widest text-xs dark:shadow-sm dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
            {sub3}
          </p>
          <p className=" flex items-center bg-[#c1c2bb43] text-gray-800 px-3 py-1  rounded-lg shadow-sm shadow-gray-300 tracking-widest text-xs dark:shadow-sm dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
            {sub4}
          </p>
        </div>

        <p className="my-2 dark:text-light xs:text-base font-medium xs:font-light  text-black xs:mb-4">
          {summary}
        </p>
        <div className="flex items-center gap-4 dark:text-light  ">
          <motion.a
            href={github}
            target="_blank"
            className="w-12 md:w-10 "
            whileTap={{
              scale: 0.6,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -10, 0],
              transition: { duration: 0.9, ease: 'easeInOut' },
            }}
          >
            <GithubIcon />
          </motion.a>
          <Link href={link} target="_blank">
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
                  className="textcircle block w-16 xs:w-10 animate-spin animate-spin-slow"
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
                      Click To See Live Site
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
                className="eye absolute w-8 h-8 xs:w-6 xs:h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:(stroke-white)"
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
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, altImg, link, summary, github }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-gray-600 border-solid  bg-light p-6  relative dark:bg-[#2D333B] xs:p-4 ">
      <div className="">
        <motion.div
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <Link
            href={link}
            target="_blank"
            className="w=full dark:text-light  cursor-pointer overflow-hidden rounded-lg  "
          >
            <Image
              src={isHovering ? altImg : img}
              alt={title}
              className="w-full h-auto rounded-xl"
              priority
            />
          </Link>
        </motion.div>
        <div className="w-full flex flex-col items-start justify-between mt-6">
          <span className="text-primary font-medium text-xl lg:text-lg md:text-base xs:text-sm ">
            {type}
          </span>
          <h2 className="my-2 dark:text-light  w-full text-left text-3xl font-bold lg:text-2xl  ">
            {title}
          </h2>
          <p className="my-2 dark:text-light xs:text-base font-medium xs:font-light text-black xs:mb-4">
            {summary}
          </p>
          <div className=" w-full dark:text-light  flex items-center justify-between ">
            <Link href={github} target="_blank" className="w-12 md:w-10 xs:w-6">
              <GithubIcon />
            </Link>

            <Link href={link} target="_blank">
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
                    className="textcircle block w-16 xs:w-10 animate-spin animate-spin-slow"
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
                        Click To See Live Site
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
                  className="eye absolute w-8 h-8 xs:w-6 xs:h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:(stroke-white)"
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
          </div>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mubasshir | Projects</title>
        <meta
          name="description"
          content="It's about the Mubasshir Ahmed projects page"
        />
      </Head>
      <main class="projects-container  w-full flex flex-col items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText
            text="Where Imagination Meets Knowledge!"
            className="mb-20 dark:!text-[#DB2649] xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-2xl md:!mb-8"
          />

          <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="feature-project col-span-12 ">
              <FeatureProject
                title="A Movie Info Website"
                img={projectm1}
                altImg={projectm2}
                sub1="React"
                sub2="API"
                sub3="Responsive"
                sub4="SASS"
                summary="Cineverse is a modern, user-friendly website that provides information about movies, including details such as plot summaries, cast and crew information, ratings, and reviews. The website provides a seamless experience on any device. It features a clean, minimalist design with a predominantly dark color scheme, giving it a professional and trustworthy look. The website is easy to navigate, and users can quickly access the information they need to manage."
                link="https://cine-verse.netlify.app/"
                github="https://github.com/Amubasshir/Cineverse"
                type="Feature Project"
              />
            </div>
            <div className="feature-project col-span-6 md:col-span-12 ">
              <Project
                title="A Music Application"
                img={project4}
                altImg={project6}
                link="https://mubsic.netlify.app/"
                github="https://github.com/Amubasshir/mubsic"
                type="Landing Page"
                summary="This is a landing page of Mubsic website that provide the details information about the application. The website provides a seamless experience on any device. It features a clean, minimalist design with a predominantly dark color scheme, giving it a professional and trustworthy look. The website is easy to navigate, and customers can quickly access the information they need to manage their finances effectively."
              />
            </div>
            <div className="feature-project col-span-6 md:col-span-12 ">
              <Project
                title="A NFT MarketPlace"
                img={project1}
                altImg={project7}
                summary="This is a landing page of NFT-land website that provides the details in formation of this nft marketplace. The website provides a seamless experience on any device. It features a clean, minimalist design with a predominantly dark color scheme, giving it a professional and trustworthy look. The website is easy to navigate, and customers can quickly access the information they need to manage their finances effectively. "
                link="https://nft-lands.netlify.app/"
                github="https://github.com/Amubasshir/NFT-land"
                type="Landing Page"
              />
            </div>
            <div className="feature-project col-span-12 ">
              <FeatureProject
                title="A Repository Application"
                img={project2}
                altImg={project8}
                sub1="MERN"
                sub2="Tailwind"
                sub3="Firebase"
                sub4="JWT"
                summary="A repository application that provide easy add remove edit to any kind of repo with secure option.Pro repo is a powerful repo management app built using the MERN stack.With this modern app users can create, update, and delete their own repo. The app is highly secure, featuring JWT authentication and frontend route protection."
                link="https://pro-repo.vercel.app/"
                github="https://github.com/Amubasshir/pro-repo"
                type="Feature Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
