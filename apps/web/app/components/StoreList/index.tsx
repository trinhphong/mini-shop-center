"use client";

import styles from "./styles.module.css";
import { Store } from "../../types";
import { useStores } from "../../hooks/useStores";
import { Card } from "ui";

export default function StoreList(): JSX.Element {
  const { data: stores } = useStores();

  return (
    <div className={styles.grid}>
      {stores?.map((store: Store) => (
        <Card
          className={styles.card}
          key={store.id}
          title={store.name}
          href="/"
        >
          ---
        </Card>
      ))}
    </div>
  );
}
