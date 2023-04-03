import AnimatedText from 'componemt/src/components/AnimatedText';
import { GithubIcon } from 'componemt/src/components/Icons';
import Layout from 'componemt/src/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const featuredProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2 className="">{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank">
            Visit Project
          </Link>
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
      <main class="projects-container w-full flex flex-col items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText
            text="Where Imagination Meets Knowledge!"
            className="!mb-14"
          />

          <div className="grid grid-col-12 gap-24">
            <div className="feature-project col-span-12 ">
              <featuredProject />
            </div>
            <div className="feature-project col-span-6 ">project-1</div>
            <div className="feature-project col-span-6 "> project-2</div>
            <div className="feature-project col-span-12 ">project-3</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
