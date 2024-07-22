# Weather Journal App

## Description

The Weather Journal App is a simple web application that allows users to input their zip code and a brief description of their feelings. The application fetches the current weather data for the provided zip code from the OpenWeatherMap API, and displays the temperature along with the user's input and the date.

## Features

- Fetches weather data from the OpenWeatherMap API based on the user's zip code.
- Allows users to input their feelings.
- Displays the current temperature, date, and user's feelings.

## Project Structure

The project is structured as follows:

- `website/index.html`: The main HTML file containing the structure of the web page.
- `website/style.css`: The CSS file for styling the web page.
- `website/app.js`: The JavaScript file for handling client-side logic.
- `server.js`: The server-side JavaScript file using Express.js.
- `package.json`: The file that contains metadata about the project and its dependencies.
- `README.md`: The file you are currently reading.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-journal-app.git
cd weather-journal-app

Usage
Start the server:
node server.js