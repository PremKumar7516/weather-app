// server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(response.status === 404 || data.cod === 404){
            return res.status(404).json({error: "City not found"});
        }
        if(response.status === 401 || data.cod === 401){
            return res.status(401).json({error: "Invalid API key"});
        }

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Server error"});
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
