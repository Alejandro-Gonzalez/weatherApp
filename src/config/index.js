import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export const API_URL = process.env.WEATHER_API;
export const API_KEY = process.env.WEATHER_KEY;
