const http = require("http");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const API_KEY = "a95d567ec3fff09bc1951ed7be9d8eca";

async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await axios.get(url);

  return {
    city: response.data.name,
    temperature: response.data.main.temp + " °C",
    description: response.data.weather[0].description
  };
}

const server = http.createServer(async (req, res) => {

  // Serve HTML file
  if (req.url === "/" && req.method === "GET") {
    const filePath = path.join(__dirname, "index.html");
    const html = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  }

  // Weather API route
  if (req.url.startsWith("/weather")) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const city = url.searchParams.get("location");

    if (!city) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "City is required" }));
      return;
    }

    try {
      const data = await fetchWeatherData(city);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "City not found" }));
    }
    return;
  }

  // Fallback
  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
