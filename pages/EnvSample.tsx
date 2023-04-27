import { NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
  // サーバーサイドで描画するときは'test1'と表示され、クライアントサイドで再描画する時はundefinedと表示される
  console.log("TEST:", process.env.TEST);
  // 'test2'と表示される
  console.log("NEXT_PUBLIC_TEST:", process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <Head>
        <title>Create New App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* サーバーサイド描画時は'test1'と表示され、クライアントサイドで再描画する時は何も表示されない */}
        <p>{process.env.TEST}</p>
        {/* 'test2'と表示される */}
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  // test1と表示される
  console.log("TEST:", process.env.TEST);
  // test2と表示される
  console.log("NEXT_PUBLIC_TEST:", process.env.NEXT_PUBLIC_TEST);
  return {
    props: {},
  }
}

export default EnvSample
