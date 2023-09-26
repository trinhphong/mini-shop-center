import ProductList from "../../components/ProductList";
import { useParams } from 'react-router-dom';

function ProductsPage(): JSX.Element {
  const params = useParams()
  const { storeId } = params

  if (!storeId) {
    return <div>Not found</div>
  }

  return (
    <div>
      <h1>Products Page</h1>
      <ProductList storeId={storeId} />
    </div>
  );
}

export default ProductsPage;
