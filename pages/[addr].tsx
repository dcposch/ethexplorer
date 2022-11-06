import { GetServerSidePropsContext } from "next";
import styles from "../styles/Home.module.css";

export default function AddrPage({ addr }: { addr: string }) {
  return (
    <div className={styles.container}>
      <h1>{addr}</h1>
      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem lipsum.</p>
    </div>
  );
}

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { addr } = ctx.query;
  return { props: { addr } };
}
