
# Weather App

## Overview
A lightweight weather application that provides real-time weather data and forecasts. This project is designed to be easily integrated into other applications.

## Features
- Real-time weather information
- Location-based forecasts
- Temperature in Celsius/Fahrenheit
- Humidity and wind speed data
- Responsive design

## Installation

```bash
git clone https://github.com/krishnaSah96/My-Weather-App.git
cd My-Weather-App
npm install
```

## Usage

### Basic Example
```javascript
import WeatherApp from './weather-app';

const app = new WeatherApp();
app.getWeather('London');
```

### Configuration
Set your API key in `.env`:
```
WEATHER_API_KEY=your_api_key_here
```

## Integration into Your Project

1. Copy the `/src` directory to your project
2. Install dependencies: `npm install`
3. Import and initialize the weather module
4. Call methods with location parameters

## API Reference
- `getWeather(location)` - Fetch current weather
- `getForecast(location, days)` - Get forecast data
- `searchLocations(query)` - Search for locations

## Technologies
- JavaScript/Node.js
- REST API integration
- [Your framework]

## Contributing
Pull requests are welcome. For major changes, open an issue first.

## License
MIT
