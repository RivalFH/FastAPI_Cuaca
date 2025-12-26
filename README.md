# 🌦️ WeatherAPI + FastAPI and React

Aplikasi pemantau cuaca modern yang dibangun dengan FastAPI sebagai penyedia data (backend) dan React + Vite sebagai antarmuka pengguna (frontend). Proyek ini memungkinkan pengguna mencari prakiraan cuaca secara real-time berdasarkan lokasi.



# 🚀 Fitur Utama :
- Real-time Weather: Data cuaca terkini menggunakan OpenWeatherMap API atau provider serupa.
- Fast & Lightweight: Backend performa tinggi dengan FastAPI dan frontend super cepat dengan Vite.
- Responsive Design: Tampilan yang optimal di perangkat mobile maupun desktop.
- Clean Architecture: Pemisahan yang jelas antara logika bisnis (Python) dan UI (TypeScript/JavaScript).


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## 🛠️ Instalasi & Persiapan

1.  Prasyarat
- Python 3.9+
- Node.js 16+
- API Key dari OpenWeatherMap

1. Setup Backend (FastAPI): 
    Masuk ke direktori backend
        
        cd backend

2. Virtual Environment
    Perintah untuk instalasi venv:

        python -m venv venv
        source venv/bin/activate

3. Install dependensi
    Untuk menambahkan Library Python pada venv
    
        pip install -r requirements.txt

4. Buat file .env
    Tambahkan API Key Anda

        WEATHER_API_KEY=your_api_key_here
    
5. Jalankan server:
    Ujicoba pada cmd

        uvicorn main:app --reload
    
2. Setup Frontend
Pastikan Gunakan: 
- React
- Vite 

1.  Masuk ke direktori frontend 
    Ketik perintah ini pada cmd:
    
        cd frontend
2. Install dependensi:
    
    Bash
   
        npm install
   
4. Mode pengembangan
    Ketikkan Perintah untuk menghidupkan server lokal:
        
        npm run dev
    
## License

Proyek ini dilisensikan di bawah Lisensi [MIT](https://choosealicense.com/licenses/mit/)

