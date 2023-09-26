import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../interfaces";
import { Card } from "ui";

export default function ProductList({ storeId }: { storeId: string }): JSX.Element {
  const { isLoading, isFetching, data: products } = useProducts(storeId);

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (!products) {
    return <div>Not found Product</div>
  }

  return (
    <div>
      {products?.map((product: Product) => (
        <Card className="Card" key={product.id} title={product.name}>
          <button>Like</button>
        </Card>
      ))}
    </div>
  );
}
