import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1>Home</h1>
      </div>
    </main>
  );
}
