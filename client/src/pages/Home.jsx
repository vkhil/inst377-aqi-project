import { useState } from 'react';
import AQForm from '../components/AQForm';
import AQDisplay from '../components/AQDisplay';
import Map from '../components/Map';

export default function Home() {
  const [aq, setAq] = useState(null);
  const [coords, setCoords] = useState({});

  const fetchAq = async (lat, lon) => {
    const res = await fetch(`/api/airquality?lat=${lat}&lon=${lon}`);
    const json = await res.json();
    setCoords({ lat, lon });
    setAq(json);
  };

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Real-Time Air Quality</h1>
      <AQForm onFetch={fetchAq} />
      <AQDisplay data={aq} />
      <Map lat={coords.lat} lon={coords.lon} />
    </main>
  );
}
