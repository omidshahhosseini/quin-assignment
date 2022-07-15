import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

export function Map({ mapData = [] }) {
  const position = [28.246017, 102.026556];

  console.log(mapData);

  return (
    <MapWrapper>
      <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapData.map((data, i) => (
          <Marker key={i} position={data.position}>
            <Popup>{data.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  .leaflet-container {
    width: 800px;
    height: 400px;
  }
`;
