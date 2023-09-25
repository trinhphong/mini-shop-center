import styles from "./page.module.css";
import StoreList from "../components/StoreList";

export default function StorePage(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Stores</h1>
      <br/>

      <StoreList />
    </main>
  );
}
