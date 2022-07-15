import { AxiosResponse } from 'axios';

type UrlType = string;
type DateType = `${number}-${number}-${number}T${number}:${number}:${number}Z`;

type LaunchServiceProviderType = {
  id: number;
  url: UrlType;
  name: string;
  type: string;
};

type RocketType = {
  id: number;
  configuration: {
    id: number;
    url: UrlType;
    name: string;
    family: string;
    full_name: string;
    variant: string;
  };
};

type MissionType = {
  id: number;
  name: string;
  description: string;
  launch_designator: string | null;
  type: string;
  orbit: {
    id: number;
    name: string;
    abbrev: string;
  };
};

type PadType = {
  id: number;
  url: UrlType;
  agency_id: number;
  name: string;
  info_url: UrlType | null;
  wiki_url: UrlType;
  map_url: UrlType;
  latitude: string;
  longitude: string;
  location: {
    id: number;
    url: UrlType;
    name: string;
    country_code: string;
    map_image: UrlType;
    total_launch_count: number;
    total_landing_count: number;
  };
  map_image: UrlType;
  total_launch_count: number;
};

type StatusType = {
  id: 3;
  name: string;
  abbrev: 'Success' | 'Failed';
  description: string;
};

type LaunchType = {
  count: number;
  next: UrlType;
  previous: null;
  results: Array<{
    id: string;
    url: UrlType;
    slug: string;
    name: string;
    status: StatusType;
    last_updated: DateType;
    net: DateType;
    window_end: DateType;
    window_start: DateType;
    probability: null;
    holdreason: '';
    failreason: '';
    hashtag: null;
    launch_service_provider: LaunchServiceProviderType;
    rocket: RocketType;
    mission: MissionType;
    pad: PadType;
    webcast_live: boolean;
    image: UrlType;
    infographic: null;
    program: [];
  }>;
};

export type LaunchResponseType = AxiosResponse<LaunchType>;
