import AnimatedText from 'componemt/src/components/AnimatedText';
import Layout from 'componemt/src/components/Layout';
import Head from 'next/head';
import { useState } from 'react';

import Image from 'next/image';
import ContactImg from '../public/images/profile/email.svg';

const contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('https://getform.io/f/d6f5897e-4bcd-44d0-a258-c28eb1bcf598', {
        method: 'POST',
        body: new FormData(event.target),
      });
      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Mubasshir | Contact Page</title>
        <meta
          name="description"
          content="This is the contact page of Mubasshir Ahmed who is a React developer"
        />
      </Head>
      <main>
        <Layout className="pt-10 dark:bg-#23272F]">
          <AnimatedText
            text="Connect To Make A Difference"
            className="mb-14 dark:!text-[#DB2649] xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-2xl md:!mb-8 xs:mb-0 "
          />
          <div id="contact" className="w-full h-auto xs:-mt-10">
            <div className=" m-auto px-2 py-16 w-full ">
              <p className="text-2 font-semibold mb-2 tracking-widest uppercase dark:text-white">
                Get In Touch
              </p>

              <div className="grid grid-cols-12 lg:flex lg:flex-col gap-8">
                {/* left */}
                <div className="col-span-4 md:col-span-4 w-full h-full shadow-lg border border-gray-400 shadow-gray-400 rounded-xl p-4">
                  <div className="lg:p-4  ">
                    <div className="h-1/2">
                      <Image
                        className="rounded-xl w-full h-[100%] hover:scale-105  ease-in duration-300"
                        src={ContactImg}
                        alt="/"
                        priority
                      />
                    </div>
                    <div>
                      <h2 className="pt-2 text-black dark:text-light text-lg font-medium">
                        Mubsshir Ahmed
                      </h2>
                      <p className="text-gray-700 dark:text-[#9f9f9fd4] tracking-wider">
                        React Developer
                      </p>
                      <p className="py-4 md:py-2 text-base md:text-xs dark:text-light font-medium text-black/75 leading-5">
                        Are you looking for someone to collaborate on a project
                        or job with? If so, I am available and open to new
                        opportunities. Please feel free to reach out or just to
                        say hi! <br /> <br /> If you prefer not to use contact
                        forms, you can send me a direct email. I will do my best
                        to respond within 24 hours. Looking forward to hearing
                        from you at <br />{' '}
                        <span className="text-lg md:text-base underline underline-offset-4  cursor-pointer dark:text-light dark:underline duration-300">
                          lastmubasshir@gmail.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* right */}

                <div className="col-span-8 md:col-span-4 w-full h-auto  border border-gray-400 shadow-lg shadow-gray-400 rounded-xl lg:p-4">
                  <div className="p-4 ">
                    {formSubmitted ? (
                      <div className="success-message  flex flex-col items-center justify-center md:-mt-8 md:mb-10">
                        <h2 className="text-4xl font-semibold md:text-3xl md:font-normal  dark:text-light  mt-20 mb-2">
                          Thank you for your message!
                        </h2>
                        <p className="text-lg md:text-base dark:text-light leading-5">
                          I will get back to you as soon as possible.
                        </p>
                      </div>
                    ) : (
                      <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        method="POST"
                        action="https://getform.io/f/d6f5897e-4bcd-44d0-a258-c28eb1bcf598"
                      >
                        <div className="flex flex-col gap-4 w-full py-2">
                          <div className="flex items-center justify-between gap-4 lg:flex-col">
                            <div className="flex flex-col w-full ">
                              <label className="text-sm dark:text-light py-2">
                                NAME
                              </label>
                              <input
                                className="border-2 dark:text-light rounded-lg p-3 flex bg-transparent border-gray-400"
                                type="text"
                                name="name"
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <label className="uppercase dark:text-light text-sm py-2">
                                Phone Number
                              </label>
                              <input
                                className="border-2 dark:text-light rounded-lg p-3 flex bg-transparent border-gray-400"
                                type="number"
                                name="phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col py-2">
                          <label className="uppercase dark:text-light text-sm py-2">
                            EMAIL
                          </label>
                          <input
                            className="border-2 dark:text-light rounded-lg p-3 flex bg-transparent border-gray-400"
                            type="email"
                            name="email"
                          />
                        </div>
                        <div className="flex flex-col py-2">
                          <label className="uppercase dark:text-light text-sm py-2">
                            Subject
                          </label>
                          <input
                            className="border-2 dark:text-light rounded-lg p-3 flex bg-transparent border-gray-400"
                            type="text"
                            name="subject"
                          />
                        </div>
                        <div className="flex flex-col py-2">
                          <label className="uppercase dark:text-light text-sm py-2">
                            Message
                          </label>
                          <textarea
                            className="border-2 dark:text-light rounded-lg p-3 bg-transparent border-gray-400"
                            rows="10"
                            name="message"
                          ></textarea>
                        </div>
                        <button
                          className="w-full text-gray-50 mt-4 px-6 py-2 bg-black rounded-lg text-lg font-serif tracking-wider hover:bg-light hover:text-black border-solid border-transparent hover:border-dark border-2 hover:dark:bg-dark hover:dark:text-white hover:dark:border-light
        dark:bg-white dark:text-black duration-300"
                        >
                          Send Message
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
