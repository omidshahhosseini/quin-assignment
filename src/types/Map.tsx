import { LatLngExpression } from 'leaflet';
import { ReactElement } from 'react';

type MapItems = Array<{
  position: LatLngExpression;
  popup: ReactElement;
  agency: string;
  enabled: boolean;
}>;

export type { MapItems };
