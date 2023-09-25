import { useQuery } from '@tanstack/react-query'

const STALE_TIME = 60 * 60 * 1000; // 1hr

const fetchStores = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stores`)
  return response.json()
}

const fetchStore = async (storeId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stores/${storeId}`)
  return response.json()
}

const useStores = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: () => fetchStores(),
    staleTime: STALE_TIME
  })
}

const useStore = (storeId: string) => {
  return useQuery({
    queryKey: ['store'],
    queryFn: () => fetchStore(storeId),
    staleTime: STALE_TIME
  })
}

export { useStores, useStore, fetchStores }
