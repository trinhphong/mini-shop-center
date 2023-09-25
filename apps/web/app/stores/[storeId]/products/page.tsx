'use client'

import { useParams } from 'next/navigation'
import { useStore } from '../../../hooks/useStores';
import ProductList from '../../../components/ProductList';

export default function ProductPage(): JSX.Element {
  const params = useParams();
  const { storeId } = params;
  const { data: store } = useStore(storeId as string);

  return (
    <div>
      <h1>{ store?.name }</h1>

      <ProductList storeId={storeId as string} />
    </div>
  );
}
