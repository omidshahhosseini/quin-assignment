import { useQuery, UseQueryOptions } from 'react-query';
import { endpoints, endpointKeys } from 'constants/endpoints';
import { apiClient } from '../apiClient';
import { AxiosError } from 'axios';

const useGetRandomGif = (options?: UseQueryOptions<any, AxiosError, any>) => {
  const getRandomGif = () => apiClient.get(endpoints.launch);
  return useQuery<any, AxiosError>(
    [endpointKeys.launch],
    getRandomGif,
    options
  );
};

export { useGetRandomGif };
