import os
import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("WEATHER_API_KEY")
BASE_URL = "http://api.weatherapi.com/v1/current.json"

@app.get("/weather/{city}")
async def get_weather(city: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{BASE_URL}?key={API_KEY}&q={city}&lang=id")
        
        if response.status_code != 200:
            raise HTTPException(status_code=404, detail="Kota tidak ditemukan")
            
        return response.json()
