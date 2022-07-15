import { LatLngExpression } from 'leaflet';
import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';
import styled from 'styled-components';
import { MapItems } from 'types/Map';
import { Icon } from 'leaflet';
import RocketIcon from 'assets/images/rocket.png';

type Props = {
  mapData: MapItems;
};

export default function Map({ mapData = [] }: Props) {
  const centralPosition: LatLngExpression = [0, 0];
  const mapOptions = {
    zoom: 1,
    scrollWheelZoom: false,
  };
  const { zoom, scrollWheelZoom } = mapOptions;

  const LeafIcon = Icon.extend({
    options: {},
  });

  //@ts-ignore
  const MarkerIcon = new LeafIcon({
    iconUrl: RocketIcon,
    iconSize: [30, 30],
  });

  return (
    <MapWrapper data-testid="map">
      <MapContainer
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        center={centralPosition}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapData.map((data, i) => (
          <Marker key={i} position={data.position} icon={MarkerIcon}>
            <Popup>{data.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  .leaflet-container {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    border-radius: 14px;
    box-shadow: 0 1px 6px #c5c5c5;
    margin-top: 30px;
  }
`;
