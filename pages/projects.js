import AnimatedText from 'componemt/src/components/AnimatedText';
import { GithubIcon } from 'componemt/src/components/Icons';
import Layout from 'componemt/src/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import project1 from '../public/images/proects/images (1).jpg';

const FeatureProject = ({ type, title, summary, img, link, github }) => {
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

        <p className="my-2 dark:text-light font-medium text-black">{summary}</p>
        <div className="flex items-center dark:text-light  ">
          <Link href={github} target="_blank" className="w-12 md:w-10 ">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold md:px-4 md:py-2 md:text-sm "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
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

          <div className=" w-full dark:text-light  flex items-center justify-between ">
            <Link
              href={link}
              target="_blank"
              className=" text-lg font-semibold md:text-base"
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
            className="mb-20 dark:text-[#DB2649] xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-2xl md:!mb-8"
          />

          <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
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
            <div className="feature-project col-span-6 md:col-span-12 ">
              <Project
                title="A Repository Application"
                img={project1}
                link="https://nft-lands.netlify.app/"
                github="https://github.com/Amubasshir/NFT-land"
                type="Project"
              />
            </div>
            <div className="feature-project col-span-6 md:col-span-12 ">
              <Project
                title="A Repository Application"
                img={project1}
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
