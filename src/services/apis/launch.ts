import { useQuery, UseQueryOptions } from 'react-query';
import { endpoints, endpointKeys } from 'constants/endpoints';
import { apiClient } from '../apiClient';
import { AxiosError } from 'axios';
import { LaunchResponseType } from 'types/Launch';

const useGetLaunchInfo = (
  options?: UseQueryOptions<LaunchResponseType, AxiosError, LaunchResponseType>
) => {
  const getRandomGif = () => {
    const url = endpoints.launch;
    return apiClient.get<any, LaunchResponseType>(url);
  };

  return useQuery<LaunchResponseType, AxiosError>(
    [endpointKeys.launch],
    getRandomGif,
    options
  );
};

export { useGetLaunchInfo };
