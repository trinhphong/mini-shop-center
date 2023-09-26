import { useQuery } from '@tanstack/react-query'
import { Product } from '../interfaces';
import { environment } from '../environment';

const STALE_TIME = 1 * 60 * 1000; // 1 min

const fetchProducts = async (storeId: string): Promise<Product[]> => {
  const response = await fetch(`${environment.baseUrl}/stores/${storeId}/products`)
  const data = await response.json() as Product[];
  return data;
}

const useProducts = (storeId: string) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(storeId),
    staleTime: STALE_TIME
  })
}

export { useProducts, fetchProducts }
