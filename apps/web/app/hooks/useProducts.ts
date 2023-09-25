import { useQuery } from '@tanstack/react-query'

const STALE_TIME = 1 * 60 * 1000; // 1 min

const fetchProducts = async (storeId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stores/${storeId}/products`)
  return response.json()
}

const useProducts = (storeId: string) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(storeId),
    staleTime: STALE_TIME
  })
}

export { useProducts, fetchProducts }
