import { useEffect, useState } from 'react';

export default function History() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('/api/history')
      .then(r => r.json())
      .then(setRows);
  }, []);

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Query History (latest 10)</h1>
      <table border="1" cellPadding="4">
        <thead>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>AQI</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.latitude}</td>
              <td>{r.longitude}</td>
              <td>{r.aqi}</td>
              <td>{new Date(r.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
