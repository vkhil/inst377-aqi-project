import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function AQDisplay({ data }) {
  if (!data) return null;

  const comps = data.list[0].components;

  const chartData = {
    labels: ['PM2.5', 'PM10', 'CO', 'NO2', 'O3'],
    datasets: [
      {
        label: 'μg/m³',
        data: [comps.pm2_5, comps.pm10, comps.co, comps.no2, comps.o3]
      }
    ]
  };

  return (
    <>
      <h2>AQI: {data.list[0].main.aqi}</h2>
      <Bar data={chartData} />
    </>
  );
}
