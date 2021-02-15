import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>arunpariyar | dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hi!</h1>
        <h2> I am Arun Pariyar a Junior web developer.</h2>
        <p> Take a peek at what i have been working on below</p>
      </main>
      <footer className={styles.footer}>
        <p>This is my footer</p>
      </footer>
    </div>
  );
}
