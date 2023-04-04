import AnimatedSubText from 'componemt/src/components/AnimatedSubText';
import Head from 'next/head';
import profilePic from '../public/images/profile/p-m-h.png';
import AnimatedImage from '/src/components/AnimatedImage';
import AnimatedParagraph from '/src/components/AnimatedParagraph';
import AnimatedText from '/src/components/AnimatedText';
import HeroButtons from '/src/components/HeroButtons';
import Layout from '/src/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mubasshir</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-black dark:text-light w-full min-h-screen">
        <Layout className="pt-0">
          <div className="hero-section flex items-center justify-between w-full">
            <div className="hero-text w-1/2 flex flex-col items-center self-center">
              <AnimatedSubText text="I'm Mubasshir," />
              <AnimatedText
                text="Let's Turn Vision Into Reality With The Magic Of React..."
                className="!text-6xl !text-left !leading-[64px]"
              />
              <AnimatedParagraph
                text="As a react developer, my passion is to transform ideas into
                dynamic and efficient web applications. Explore my latest
                projects, showcasing my expertise in web development."
                className=""
              />
              <div className="hero-buttons flex items-center mt-2  self-start">
                <HeroButtons className="hero-buttons flex items-center mt-4 self-start" />
              </div>
            </div>

            <div className="hero-image w-1/2">
              <AnimatedImage
                src={profilePic}
                alt="React developer: Mubasshir Ahmed"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
