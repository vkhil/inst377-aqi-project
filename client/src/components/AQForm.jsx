import { useState } from 'react';

export default function AQForm({ onFetch }) {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onFetch(lat, lon);
      }}
      style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}
    >
      <input value={lat} onChange={e => setLat(e.target.value)} placeholder="Latitude" required />
      <input value={lon} onChange={e => setLon(e.target.value)} placeholder="Longitude" required />
      <button type="submit">Get AQI</button>
    </form>
  );
}
