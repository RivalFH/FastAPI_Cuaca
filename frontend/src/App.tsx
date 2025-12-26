import { useState } from 'react';
import axios from 'axios';

// Definisi struktur data dari API (TypeScript Interface)
interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
}

function App() {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await axios.get(`http://localhost:8000/weather/${city}`);
      setWeather(response.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Terjadi kesalahan koneksi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Aplikasi Cuaca</h1>
        
        <form onSubmit={fetchWeather} style={styles.searchBox}>
          <input
            type="text"
            placeholder="Ketik nama kota..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? '...' : 'Cari'}
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}

        {weather && (
          <div style={styles.result}>
            <h2 style={styles.cityName}>{weather.location.name}</h2>
            <p style={styles.region}>{weather.location.region}, {weather.location.country}</p>
            
            <img 
              src={weather.current.condition.icon} 
              alt="weather icon" 
              style={styles.icon} 
            />
            
            <h1 style={styles.temp}>{weather.current.temp_c}°C</h1>
            <p style={styles.desc}>{weather.current.condition.text}</p>

            <div style={styles.details}>
              <div>
                <strong>Kelembapan</strong><br />
                {weather.current.humidity}%
              </div>
              <div>
                <strong>Angin</strong><br />
                {weather.current.wind_kph} km/h
              </div>
            <div style={styles.attribution}>
                <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noreferrer">
                Data Dari<img 
                src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" 
                alt="Weather data by WeatherAPI.com"   
                style={{ width: '100px', marginTop: '15px' }}
                />
                </a>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Styling sederhana menggunakan Object Literal
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    minHeight: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif'
  },
  card: {
    backgroundColor: '#fff', padding: '2rem', borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center'
  },
  title: { marginBottom: '1.5rem', color: '#333' },
  searchBox: { display: 'flex', gap: '10px', marginBottom: '1rem' },
  input: { flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' },
  button: { padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' },
  result: { marginTop: '20px', animation: 'fadeIn 0.5s ease-in' },
  cityName: { margin: '0', color: '#222' },
  region: { margin: '0', color: '#777', fontSize: '0.9rem' },
  icon: { width: '80px', height: '80px' },
  temp: { fontSize: '3rem', margin: '10px 0', color: '#007bff' },
  desc: { fontSize: '1.2rem', color: '#555', textTransform: 'capitalize' },
  details: { display: 'flex', justifyContent: 'space-around', marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' },
  error: { color: 'red', marginTop: '10px' }
};

export default App;