import { Link } from "react-router-dom";
import { useStores } from "../../hooks/useStores";
import { Store } from "../../interfaces";

export default function StoreList(): JSX.Element {
  const { data: stores } = useStores();

  return (
    <div>
      {stores?.map((store: Store) => (
        <li key={store.id}>
          <Link to={`stores/${store.id}/products`}>{ store.name }</Link>
        </li>
      ))}
    </div>
  );
}
