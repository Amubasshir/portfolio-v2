import AnimatedText from 'componemt/src/components/AnimatedText';
import Bootcamp from 'componemt/src/components/Bootcamp';
import Certification from 'componemt/src/components/Certification';
import Layout from 'componemt/src/components/Layout';
import Skills from 'componemt/src/components/Skills';
import Head from 'next/head';
import Image from 'next/image';
import aboutPic from '../public/images/profile/about.png';

const about = () => {
  return (
    <>
      <Head>
        <title>Mubasshir | About</title>
        <meta
          name="description"
          content="It's about the Mubasshir Ahmed about page"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-10 dark:bg-[#23272F]">
          <AnimatedText
            text="Passion Ignites Purpose!"
            className="!mb-14 dark:!text-[#DB2649] lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl md:!mb-8 "
          />

          <div className="about-wrapper dark:bg-[#2d333b] dark:p-5 dark:rounded-xl grid w-full  grid-cols-8 md:flex md:items-center md:justify-center  gap-16 md:gap-8 ">
            <div className="col-span-4 md:w-full  md:flex md:flex-col items-start justify-start">
              <h2 className="mb-2 mt-1 text-lg md:text-base sm:text-sm font-bold text-gray-800 dark:text-[#9f9f9fd4] tracking-wider">
                ABOUT ME
              </h2>
              <p className="font-medium font-serif text-base text-gray-900 dark:text-light leading-6 sm:text-sm">
                Hi, I'm Mubasshir, a React developer driven by a passion for
                crafting elegant, functional, and user-centric digital
                experiences. With a year of experience under my belt, I am
                constantly seeking new and innovative ways to bring my clients'
                visions to life. Let's work together to create something truly
                beautiful and impactful.
              </p>
              <p className="my-4 font-serif font-medium text-base text-gray-900 dark:text-light leading-6">
                I strongly believe that development goes beyond just writing
                code; it's about solving real-world problems by creating
                intuitive and enjoyable experiences for users. As a developer,
                my primary objective is to understand the users' needs and
                create solutions that exceed their expectations. I strive to
                develop applications that are not just visually appealing but
                also user-friendly, accessible, and functional. By blending
                creativity with practicality, I aim to deliver products that
                leave a lasting impact on the users and the business alike.
              </p>
              <p className="font-medium font-serif text-base text-gray-900 dark:text-light leading-6  md:mb-6">
                Whether I am developing a website or any other digital product,
                I bring a strong commitment to delivering excellent design and
                user-centered thinking to every project I undertake. I am
                excited about the prospect of applying my skills and passion to
                your next project and helping you achieve your goals.
              </p>
            </div>
            <div className="about-image  row-span-full col-span-4 pt-32 lg:pt-16 h-max border-2 border-solid border-gray-400 bg-transparent p-8 md:hidden ">
              <Image
                src={aboutPic}
                alt="mubasshir"
                className="w-full h-full flex items-center justify-center"
                priority
              />
            </div>
          </div>

          <Skills />
          <Bootcamp />
          <Certification />
        </Layout>
      </main>
    </>
  );
};

export default about;
