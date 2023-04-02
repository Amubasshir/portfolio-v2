import AnimatedText from 'componemt/src/components/AnimatedText';
import Layout from 'componemt/src/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import aboutPic from '../public/images/profile/p-m-a.png';

const about = () => {
  return (
    <>
      <Head>
        <title>Mubasshir | About Page</title>
        <meta
          name="description"
          content="It's about the Mubasshir Ahmed about page"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText text="Passion Ignites Purpose!" className="!mb-14" />
          <div className="about-wrapper grid w-full grid-cols-8  gap-16 ">
            <div className="col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-2 mt-1 text-lg font-bold text-gray-700">
                ABOUT ME
              </h2>
              <p className="font-medium text-base text-gray-900">
                Hi, I'm Mubasshir, and I am a React developer driven by a
                passion for crafting elegant, functional, and user-centric
                digital experiences. With a year of experience under my belt, I
                am constantly seeking new and innovative ways to bring my
                clients' visions to life. Let's work together to create
                something truly beautiful and impactful.
              </p>
              <p className="my-4 font-medium text-base text-gray-900">
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
              <p className="font-medium text-base text-gray-900">
                Whether I am developing a website or any other digital product,
                I bring a strong commitment to delivering excellent design and
                user-centered thinking to every project I undertake. I am
                excited about the prospect of applying my skills and passion to
                your next project and helping you achieve your goals.
              </p>
            </div>
            <div className="about-image mt-20 row-span-full col-span-4 h-max border-2 border-solid border-gray-400 bg-transparent p-8 ">
              <Image
                src={aboutPic}
                alt="mubasshir"
                className="w-full h-full flex items-center"
              />
            </div>
          </div>
          <div className="skills relative text-4xl w-full mt-6 rounded-2xl h-60 bg-[#f1bb88c2] text-center overflow-hidden pt-4">
            <div className="skills-header font-semibold pt-2 text-5xl  ">
              Skills
            </div>
            <div className="skills-text skills-text-left  absolute whitespace-nowrap left-0 top-24 ">
              Express&nbsp;&nbsp;&nbsp; MongoDB&nbsp;&nbsp;&nbsp;
              React&nbsp;&nbsp;&nbsp; Javascript&nbsp;&nbsp;&nbsp;
              HTML&nbsp;&nbsp;&nbsp; CSS&nbsp;&nbsp;&nbsp;
              Redux&nbsp;&nbsp;&nbsp; Framer-Motion&nbsp;&nbsp;&nbsp;
              Tailwind&nbsp;&nbsp;&nbsp; SCSS&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skills-text skills-text-right absolute whitespace-nowrap right-0 top-44">
              Express&nbsp;&nbsp;&nbsp; MongoDB&nbsp;&nbsp;&nbsp;
              React&nbsp;&nbsp;&nbsp; Javascript&nbsp;&nbsp;&nbsp;
              HTML&nbsp;&nbsp;&nbsp; CSS&nbsp;&nbsp;&nbsp;
              Redux&nbsp;&nbsp;&nbsp; Framer-Motion&nbsp;&nbsp;&nbsp;
              Tailwind&nbsp;&nbsp;&nbsp; SCSS&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
