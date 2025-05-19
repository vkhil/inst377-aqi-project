import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { supabase } from './supabaseClient.js';
import 'dotenv/config';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/airquality', async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ error: 'lat & lon required' });

  try {
    const r = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OWM_KEY}`
    );
    const data = await r.json();

    await supabase
      .from('air_quality')
      .insert([{ latitude: lat, longitude: lon, aqi: data.list?.[0]?.main.aqi, raw: data }]);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
});

app.get('/api/history', async (_req, res) => {
  const { data, error } = await supabase
    .from('air_quality')
    .select()
    .order('timestamp', { ascending: false })
    .limit(10);
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));
