import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ lat, lon }) {
  if (!lat || !lon) return null;
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={11}
      style={{ height: '300px', marginTop: '1rem' }}
      scrollWheelZoom
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]}>
        <Popup>Queried location</Popup>
      </Marker>
    </MapContainer>
  );
}
