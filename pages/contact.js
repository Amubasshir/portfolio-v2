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
    // Send form data
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
        <Layout className="pt-10">
          <AnimatedText text="Connect To Make A Difference" className="mb-14" />
          <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 pt-4 w-full ">
              <p className="text-2 font-semibold mb-2 tracking-widest uppercase text-[#F39946]">
                Get In Touch
              </p>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* left */}
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg border border-gray-400 shadow-gray-400 rounded-xl p-4">
                  <div className="lg:p-4 h-full ">
                    <div className="h-1/2">
                      <Image
                        className="rounded-xl w-full h-[100%] hover:scale-105  ease-in duration-300"
                        src={ContactImg}
                        alt="/"
                      />
                    </div>
                    <div>
                      <h2 className="pt-2 text-black dark:text-light text-lg font-medium">
                        Mubsshir Ahmed
                      </h2>
                      <p className="text-gray-700 dark:text-[#9f9f9fd4] tracking-wider">
                        React Developer
                      </p>
                      <p className="py-4 text-base dark:text-light font-medium text-black/75 leading-5">
                        Are you looking for someone to collaborate on a project
                        or job with? If so, I am available and open to new
                        opportunities. Please feel free to reach out or just to
                        say hi! <br /> <br /> If you prefer not to use contact
                        forms, you can send me a direct email. I will do my best
                        to respond within 24 hours. Looking forward to hearing
                        from you at <br />{' '}
                        <span className="text-lg underline underline-offset-4  cursor-pointer dark:text-light dark:underline duration-300">
                          lastmubasshir@gmail.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* right */}

                <div className="col-span-3 w-full h-auto border border-gray-400 shadow-lg shadow-gray-400 rounded-xl lg:p-4">
                  <div className="p-4">
                    {formSubmitted ? (
                      <div className="success-message  flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-semibold dark:text-light  mt-20 mb-2">
                          Thank you for your message!
                        </h2>
                        <p className="text-xl dark:text-light leading-5">
                          We will get back to you as soon as possible.
                        </p>
                      </div>
                    ) : (
                      <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        method="POST"
                        action="https://getform.io/f/d6f5897e-4bcd-44d0-a258-c28eb1bcf598"
                      >
                        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                          <div className="flex flex-col">
                            <label className="text-sm dark:text-light py-2">
                              NAME
                            </label>
                            <input
                              className="border-2 dark:text-light rounded-lg p-3 flex bg-transparent border-gray-400"
                              type="text"
                              name="name"
                            />
                          </div>
                          <div className="flex flex-col">
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

// import { useState } from 'react';

// const Contact = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Send form data
//     try {
//       await fetch('https://getform.io/f/d6f5897e-4bcd-44d0-a258-c28eb1bcf598', {
//         method: 'POST',
//         body: new FormData(event.target),
//       });
//       setFormSubmitted(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="contact-container">
//       {formSubmitted ? (
//         <div className="success-message">
//           <h2>Thank you for your message!</h2>
//           <p>We will get back to you as soon as possible.</p>
//         </div>
//       ) : (
//         <form
//           className="contact-form"
//           onSubmit={handleSubmit}
//           method="POST"
//           action="https://getform.io/f/d6f5897e-4bcd-44d0-a258-c28eb1bcf598"
//         >
//           <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//             <div className="flex flex-col">
//               <label className="text-sm py-2">NAME</label>
//               <input
//                 className="border-2 rounded-lg p-3 flex bg-transparent border-gray-400"
//                 type="text"
//                 name="name"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="uppercase text-sm py-2">Phone Number</label>
//               <input
//                 className="border-2 rounded-lg p-3 flex bg-transparent border-gray-400"
//                 type="text"
//                 name="phone"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col py-2">
//             <label className="uppercase text-sm py-2">EMAIL</label>
//             <input
//               className="border-2 rounded-lg p-3 flex bg-transparent border-gray-400"
//               type="email"
//               name="email"
//             />
//           </div>
//           <div className="flex flex-col py-2">
//             <label className="uppercase text-sm py-2">Subject</label>
//             <input
//               className="border-2 rounded-lg p-3 flex bg-transparent border-gray-400"
//               type="text"
//               name="subject"
//             />
//           </div>
//           <div className="flex flex-col py-2">
//             <label className="uppercase text-sm py-2">Message</label>
//             <textarea
//               className="border-2 rounded-lg p-3 bg-transparent border-gray-400"
//               rows="10"
//               name="message"
//             ></textarea>
//           </div>
//           <button className="w-full text-gray-50 mt-4 px-6 py-2 bg-black rounded-lg text-lg font-serif tracking-wider hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 duration-300">
//             Send Message
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;
