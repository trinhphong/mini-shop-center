import { useQuery } from '@tanstack/react-query'

const fetchStores = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stores`)
  return response.json()
}

const useStores = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: () => fetchStores(),
  })
}

export { useStores, fetchStores }
