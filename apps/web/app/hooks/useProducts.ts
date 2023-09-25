import { useQuery } from '@tanstack/react-query'

const fetchProducts = async (storeId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stores/${storeId}/products`)
  return response.json()
}

const useProducts = (storeId: string) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(storeId),
  })
}

export { useProducts, fetchProducts }
