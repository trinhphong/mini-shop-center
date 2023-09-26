import { useQuery } from '@tanstack/react-query'
import { Store } from '../interfaces';
import { environment } from '../environment';

const STALE_TIME = 5 * 60 * 1000; // 5 mins

const fetchStores = async (): Promise<Store[]> => {
  const response = await fetch(`${environment.baseUrl}/stores`);
  const data = await response.json() as Store[];
  return data;
}

const fetchStore = async (storeId: string): Promise<Store> => {
  const response = await fetch(`${environment.baseUrl}/stores/${storeId}`);
  const data = await response.json() as Store;
  return data;
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
