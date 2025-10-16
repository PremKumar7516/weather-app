# 🌤️ Weather App

A simple weather forecasting web application built with **HTML, CSS, and JavaScript**, powered by the **OpenWeatherMap API**.  
The API key is secured in a **Node.js backend** using a `.env` file.

---

## 🚀 Features

- Search for any city worldwide 🌍  
- Displays:
  - Temperature 🌡️
  - Humidity 💧
  - Wind speed 🌬️
  - Weather condition icons ☁️🌞🌧️  
- Error handling for invalid city names or server issues  
- Fully responsive and clean UI  

---

## 🖼️ Screenshots

![App Screenshot](./images/demo.png)

---

## 📂 Project Structure

weather-app/
├── images/ ← Weather icons and screenshots
├── node_modules
├── .env ← API key (not committed)
├── .gitignore
├── index.html ← Frontend HTML
├── package-lock.json
├── package.json
├── README.md
├── server.js ← Node.js backend
└── style.css ← CSS styling

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/PremKumar7516/weather-app.git
cd weather-app
```

### 2. Install dependencies
```bash
npm install express node-fetch dotenv cors
```

### 3. Create a .env file
```bash
WEATHER_API_KEY=your_actual_openweathermap_api_key_here
```

### 4. Start the backend
```bash
node server.js
```
Backend runs at: http://localhost:3000


### 5. Open the frontend
- Open index.html in your browser
- Enter a city name and click search
- The frontend calls your backend to fetch weather data

---

🧑‍💻 Author

Prem Kumar (PremKumar7516)
💻 Computer Science Student | 🌦️ Frontend Learner