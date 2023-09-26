import ProductList from "../../components/ProductList";
import { useParams } from 'react-router-dom';
import { useStore } from "../../hooks/useStores";

function ProductsPage(): JSX.Element {
  const params = useParams()
  const { storeId } = params;
  const { isLoading, isFetching, data: store } = useStore(storeId || '');

  if (!storeId) {
    return <div>Not found</div>
  }

  if (isFetching || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App-container">
      <h1>{store?.name} products</h1>
      <ProductList storeId={storeId} />
    </div>
  );
}

export default ProductsPage;
