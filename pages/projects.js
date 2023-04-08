import AnimatedText from 'componemt/src/components/AnimatedText';
import { GithubIcon } from 'componemt/src/components/Icons';
import Layout from 'componemt/src/components/Layout';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import project3 from '../public/images/proects/mbank.png';
import project1 from '../public/images/proects/nft-land-collage.png';
import project2 from '../public/images/proects/prr.png';
const FeatureProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  sub1,
  sub2,
  sub3,
  sub4,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-gray-600 bg-light shadow-md p-12 dark:bg-[#2D333B] lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl sx:p-4 ">
      <Link
        href={link}
        target="_blank"
        className="w=1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full  "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  ">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full dark:text-light  text-left text-4xl font-bold xs:text-sm ">
          {title}
        </h2>
        <div className="flex gap-2 ">
          <p className=" flex items-center bg-[#c1c2bb43] text-gray-800 px-3 py-1 shadow-sm shadow-gray-300 rounded-lg tracking-widest text-[10px] dark:text-[10px]  dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
            {sub1}
          </p>
          <p className=" flex items-center bg-[#c1c2bb43] text-gray-800 px-3 py-1  rounded-lg shadow-sm shadow-gray-300 tracking-widest text-xs dark:shadow-sm dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
            {sub2}
          </p>
        </div>

        <p className="my-2 dark:text-light font-medium text-black">{summary}</p>
        <div className="flex items-center dark:text-light  ">
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
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
          >
            <GithubIcon />
          </motion.a>
          <Link
            href={link}
            target="_blank"
            className="ml-4 flex items-center text-white px-6 py-2 bg-black rounded-lg text-lg font-serif tracking-wider hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        dark:bg-white dark:text-black  duration-300 md:px-4 md:py-2 md:text-sm "
          >
            Live Site
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, summary, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-gray-600 border-solid  bg-light p-6  relative dark:bg-[#2D333B] xs:p-4 ">
      <div className="">
        <Link
          href={link}
          target="_blank"
          className="w=full dark:text-light  cursor-pointer overflow-hidden rounded-lg  "
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-6">
          <span className="text-primary font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <h2 className="my-2 dark:text-light  w-full text-left text-3xl font-bold lg:text-2xl  ">
            {title}
          </h2>
          <p className="my-2 dark:text-light font-medium text-black">
            {summary}
          </p>
          <div className=" w-full dark:text-light  flex items-center justify-between ">
            {/* <Link
              href={link}
              target="_blank"
              className=" flex items-center text-white px-4 py-2 bg-black rounded-lg text-base font-serif tracking-wider hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        dark:bg-white dark:text-black  duration-300 md:px-4 md:py-2 md:text-sm"
            >
              Visit
            </Link> */}
            <Link href="/" target="_blank">
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
                    className="textcircle block w-20 animate-spin animate-spin-slow"
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
                    className="eye absolute w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
                  className="eye absolute w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:(stroke-white)"
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
            <Link href={github} target="_blank" className="w-12 md:w-10">
              <GithubIcon />
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
        <title>Mubasshir | Projects Page</title>
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
                title="A Repository Application"
                img={project1}
                sub1="MERN"
                sub2="Tailwind"
                summary="A repository application that provide easy add remove edit to any kind of repo with secure option.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there."
                link="https://nft-lands.netlify.app/"
                github="https://github.com/Amubasshir/NFT-land"
                type="Feature Project"
              />
            </div>
            <div className="feature-project col-span-6 md:col-span-12 ">
              <Project
                title="A Repository Application"
                img={project2}
                link="https://nft-lands.netlify.app/"
                github="https://github.com/Amubasshir/NFT-land"
                type="Project"
                summary="A repository application that provide easy add remove edit to any kind of repo with secure option.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there."
              />
            </div>
            <div className="feature-project col-span-6 md:col-span-12 ">
              <Project
                title="A Repository Application"
                img={project3}
                summary="A repository application that provide easy add remove edit to any kind of repo with secure option.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there."
                link="https://nft-lands.netlify.app/"
                github="https://github.com/Amubasshir/NFT-land"
                type="Project"
              />
            </div>
            <div className="feature-project col-span-12 ">
              <FeatureProject
                title="A Repository Application"
                img={project1}
                summary="A repository application that provide easy add remove edit to any kind of repo with secure option.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there.Enjoy the newest collection of most valuable NFTs.Please make sure that you are buying and selling most trending NFTs out there."
                link="https://nft-lands.netlify.app/"
                github="https://github.com/Amubasshir/NFT-land"
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
