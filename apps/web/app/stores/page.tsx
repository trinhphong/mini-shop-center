"use client";

import styles from "./page.module.css";
import { Store } from "../types";
import { fetchStores } from "../hooks/useStores";
import { useQuery } from "@tanstack/react-query";

export default function StorePage(): JSX.Element {
  const { data } = useQuery<Store[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => fetchStores()
  });

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1>Stores</h1>
      </div>
    </main>
  );
}
