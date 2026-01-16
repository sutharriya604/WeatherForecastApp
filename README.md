# 🌍 Weather Forecast App

A clean, responsive weather forecast app built with React and Vite. Search any city to see a 5-day forecast with nice icons and details. ☀️🌧️❄️

## 🚀 Features
- Live city search powered by a simple API 🔎 ([`Search`](src/Components/Search.jsx))
- Day-by-day forecast with quick details ([`Day`](src/Components/Day.jsx))
- Main UI and state handling in [`Home`](src/pages/Home.jsx) 🏠
- Responsive, attractive styling in [`src/App.css`](src/App.css) 🎨

## 🧭 Quick Start
Prerequisites: Node.js (16+)

1. Install
```sh
npm install
```
2. Run dev server
```sh
npm run dev
```
Open http://localhost:5173

3. Build for production
```sh 
npm run build
```

Scripts are defined in package.json.

🔧 Project Structure (key files)
```
WeatherForecastApp/
├─── public/
│   └─── vite.svg
├─── src/
│   ├─── assets/
│   │   ├─── back.jpg
│   │   └─── react.svg
│   ├─── Components/
│   │   ├─── Day.jsx
│   │   └─── Search.jsx
│   ├─── pages/
│   │   └─── Home.jsx
│   ├─── App.css
│   ├─── App.jsx
│   ├─── index.css
│   └─── main.jsx
├─── eslint.config.js
├─── index.html
├─── package-lock.json
├─── package.json
├─── README.md
└─── vite.config.js
```
🤝 Contributing
Pull requests welcome. Keep changes small and focused. Add tests for new logic where applicable.

📄 License
MIT — feel free to use and adapt! ✨