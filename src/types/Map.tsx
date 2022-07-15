import { LatLngExpression } from 'leaflet';
import { ReactElement } from 'react';

type MapItems = Array<{
  position: LatLngExpression;
  popup: ReactElement;
  agency: string;
  enabled: boolean;
  wasSuccessful: boolean;
}>;

export type { MapItems };
