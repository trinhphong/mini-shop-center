import { useQuery } from '@tanstack/react-query'

const fetchStores = async () => {
  const response = await fetch('https://651131a0829fa0248e3fa047.mockapi.io/api/v1/stores')
  return response.json()
}

const useStores = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: () => fetchStores(),
  })
}

export { useStores, fetchStores }
