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
          <p className=" flex items-center bg-[#c1c2bb43] text-gray-800 px-4 py-2 shadow-sm shadow-gray-300 rounded-lg tracking-widest text-xs  dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
            {sub1}
          </p>
          <p className=" flex items-center bg-[#c1c2bb43] text-gray-800 px-4 py-2  rounded-lg shadow-sm shadow-gray-300 tracking-widest text-xs dark:shadow-sm dark:shadow-gray-600  dark:bg-[#1b2332bc] border-solid border-sky-900 dark:border-gray-600 border dark:text-white/80">
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
            <Link
              href={link}
              target="_blank"
              className=" flex items-center text-white px-4 py-2 bg-black rounded-lg text-base font-serif tracking-wider hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        dark:bg-white dark:text-black  duration-300 md:px-4 md:py-2 md:text-sm"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-10 md:w-8">
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
