import { useStores } from "../../hooks/useStores";
import { Store } from "../../interfaces";

export default function StoreList(): JSX.Element {
  const { data: stores } = useStores();

  return (
    <div>
      {stores?.map((store: Store) => (
        <li key={store.id}>{ store.name }</li>
      ))}
    </div>
  );
}
