import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethereum Explorer</title>
        <meta
          name="description"
          content="Explore ethereum at lightning speed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <Image src="/logo.png" alt="" width={48} height={48} />
          <br />
          Ethereum Explorer
        </h1>

        <form method="post">
          <label>Enter an Ethereum address or ENS name.</label>
          <div>
            <input type="text" name="addr"></input>
            <button type="submit">Go</button>
          </div>
        </form>
      </main>

      <footer>
        <a href="//github.com/dcposch/ethexplorer">View on github</a>.
      </footer>
    </div>
  );
}
