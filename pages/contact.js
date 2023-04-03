import AnimatedText from 'componemt/src/components/AnimatedText';
import Layout from 'componemt/src/components/Layout';
import Head from 'next/head';

const contact = () => {
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
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex odio
            temporibus perspiciatis corrupti nemo earum aliquid dolores saepe
            ipsa cumque minima et, nesciunt laudantium beatae. Obcaecati
            aspernatur saepe nisi voluptate corrupti deserunt, quaerat
            perferendis, sit consequatur adipisci voluptatum ipsam unde minima
            suscipit accusamus consectetur, assumenda dicta ipsum earum dolor
            accusantium at ab tenetur praesentium? Sunt consequatur autem, ullam
            delectus asperiores enim rerum non sed error aut placeat aliquid,
            doloremque assumenda obcaecati veniam neque reprehenderit unde odio
            nostrum cum? Repellendus voluptatibus harum, mollitia sint cumque
            porro ipsa omnis eveniet illum ipsum magni vel temporibus itaque
            obcaecati! Deserunt aliquam sapiente aperiam voluptas quidem
            eligendi numquam nisi, consequuntur provident culpa. Dignissimos
            minus cupiditate, placeat dolorum veritatis ipsa velit nesciunt,
            assumenda consequatur labore, illo vitae voluptatum! Cum repellat
            similique suscipit molestiae officia. Voluptatum ipsam aspernatur
            maiores. Rem sit, in necessitatibus laboriosam eius labore
            distinctio. Voluptas perferendis facere sit aliquid aspernatur totam
            illum quam delectus voluptatibus eligendi optio, explicabo similique
            tempore cum est hic dolores veniam accusantium fuga tenetur nesciunt
            voluptate, repellendus molestias! Similique ullam eaque numquam
            aliquid, quam nisi libero eius expedita facilis, consectetur
            praesentium odio consequatur cupiditate. Eligendi, autem qui
            similique temporibus nam minus nulla! Dolor iusto alias adipisci
            quaerat minima culpa.
          </h1>
        </Layout>
      </main>
    </>
  );
};

export default contact;
