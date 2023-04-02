import AnimatedText from 'componemt/src/components/AnimatedText';
import Layout from 'componemt/src/components/Layout';
import Head from 'next/head';

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
          <AnimatedText text="Passion Ignites Purpose! " />
          <div className="about-wrapper grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-2 mt-4 text-lg font-bold text-gray-700">
                ABOUT ME
              </h2>
              <p>
                Hi, I'm Mubasshir, a React developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With one year of experience in the field. I am always looking
                for new and innovative ways to bring my clients' visions to
                life.
              </p>
              <p>
                I believe that design is about more than just making things look
                pretty.It's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
