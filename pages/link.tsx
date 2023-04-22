import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Button.module.css"

const LinkTestPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    // 遷移開始時に実行される関数を定義する
    const handleRouteChangeStart = (url: string, { shallow }: { shallow: boolean }) => {
      console.log(`${url}へ遷移します`, `shallowは${shallow}です`);
    };

    // 'routeChangeStart' イベントが発生したときに、上で定義した関数を実行するリスナーを設定する
    router.events.on("routeChangeStart", handleRouteChangeStart);

    // コンポーネントがアンマウントされるとき、または依存関係が変更されたときに実行される関数を返す
    // この関数では、リスナーを削除してメモリリークを防ぐ。
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router, router.events]); // 依存関係配列に router と router.events を含める。これらが変更された場合、useEffect 内の処理が再実行される。

  const goToTop = () => {
    router.push('/')
  }

  const goToPost = () => {
    router.push({
      pathname: '/posts/1',
      query: {keyword: 'hello'},
    })
  }

  return (
    <div>
      <Head>
        <title>This is Link Test Page</title>
      </Head>
      <main>
        <h1>これはLinkやRouterのテストページです</h1>
        <div className={styles.buttonContainer}>
          <Link
            href={{
              pathname: "/ssg",
              query: { keyword: "hello" },
            }}
          >
            <button>Go To SSG with Query</button>
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/ssr">Jump To SSR Page</Link>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={goToTop}>Jump To TOP By Router</button>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={goToPost}>
            Jump To Post 1 By Router with object contains query
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => router.reload()}>This is reload button</button>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => router.back()}>This is back button</button>
        </div>
      </main>
    </div>
  );
};

export default LinkTestPage
