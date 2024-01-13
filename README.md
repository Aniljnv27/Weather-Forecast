# Weather Forecast Dashboard

This Weather Forecast Dashboard is a ReactJS application that allows users to view current weather details and a 5-day forecast for a selected city. It uses the OpenWeatherMap API for fetching weather data.

## Features

1. **City Selection:**
   - Choose a city from the provided dropdown menu.
   - The selected city will be used to fetch weather data from the OpenWeatherMap API.

2. **Current Weather:**
   - Display current weather details for the selected city, including:
     - Current temperature
     - Minimum and maximum temperature
     - Humidity
     - Wind speed and direction
     - Weather description
     - Weather icon reflecting the current conditions.

3. **5-Day Forecast:**
   - View a 5-day forecast for the selected city, displaying:
     - Date
     - Average temperature
     - Weather description
     - Weather icon.

4. **Unit Conversion:**
   - Toggle between Celsius and Fahrenheit for temperature display.

## Technical Stack

- **Frontend:** ReactJS
- **State Management:** Context API
- **Data Source:** [OpenWeatherMap API](https://openweathermap.org/api)
- **Data Storage:** `cities` data loaded from `in.json`

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Aniljnv27/Weather-Forecast.git


2. Navigate to the project directory:

   cd weather-forecast-dashboard

3. Install dependencies:

   npm install

4. Configure API Key:

   Obtain an API key from OpenWeatherMap and replace the placeholder in ChooseStateComponents.js with your key.

5. Start the development server:

   npm start
   Open http://localhost:3000 in your browser to view the application.

## Code Structure
1.src/Components/ChooseStateComponents.js:
2.Handles city selection and fetching weather data.
3.Utilizes the Context API for state management.

## API Configuration
The API key is stored in the ChooseStateComponents.js file.
Ensure you have a valid API key from OpenWeatherMap

## Live Demo