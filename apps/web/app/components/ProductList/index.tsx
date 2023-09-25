"use client";

import styles from "./styles.module.css";
import { Store } from "../../types";
import { Card } from "ui";
import { useProducts } from "../../hooks/useProducts";

export default function ProductList({ storeId }): JSX.Element {
  const { data: products } = useProducts(storeId);

  return (
    <div className={styles.grid}>
      {products?.map((store: Store) => (
        <Card
          className={styles.card}
          key={store.id}
          title={store.name}
          href='/'
        >
          ---
        </Card>
      ))}
    </div>
  );
}
