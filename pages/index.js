import Head from 'next/head';
import profilePic from '../public/images/profile/devv.png';
import AnimatedImage from '/src/components/AnimatedImage';
import AnimatedParagraph from '/src/components/AnimatedParagraph';
import AnimatedSubText from '/src/components/AnimatedSubText';
import AnimatedText from '/src/components/AnimatedText';
import HeroButtons from '/src/components/HeroButtons';
import Layout from '/src/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mubasshir</title>
        <meta name="description" content="Mubasshir Ahmed - React developer" />
      </Head>
      <main className="xs:flex-col  flex flex-row  items-center dark:bg-[#23272F] text-black dark:text-light w-full min-h-screen">
        <Layout className="pt-14 md:pt-16 sm:pt-8 xs:pt-0 dark:bg-[#23272F] ">
          <div className="hero-section flex  items-center justify-between w-full lg:flex-col md:flex-col-reverse ">
            <div className="hero-text w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedSubText
                text="I'm Mubasshir,"
                className="!text-4xl !font-serif dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-pink-600 to-red-600 dark:duration-300
xl:!text-2xl lg:!hidden md:!hidden sm:!hidden
                "
              />
              <AnimatedText
                text="Let's Turn Vision Into Reality With The Magic Of React..."
                className="!text-5xl  !text-left dark:text-white/80
xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl
                "
              />
              <AnimatedParagraph
                text="As a react developer, my passion is to transform ideas into dynamic and efficient web applications with a strong attention to detail. Explore my latest projects, which showcase my proficiency in web-development."
                className="md:!text-base sm:!text-xs !leading-6 !font-serif"
              />
              <div className="hero-buttons flex items-center mt-2  self-start lg:self-center">
                <HeroButtons className="hero-buttons flex items-center mt-4 self-start" />
              </div>
            </div>

            <div className="hero-image w-1/2 md:w-full">
              <AnimatedImage
                src={profilePic}
                alt="React developer: Mubasshir Ahmed"
                className="w-full h-auto
                lg:!hidden md:!inline-block md:!w-full
                "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
