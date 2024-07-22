const apiKey='a5c92833c1da70161cac205441be6c6b&units=imperial'
async function getWeatherData(zipCode) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`);
    const weatherData = await response.json();
    return weatherData;
  }
 async function postData (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  }
  
  document.getElementById('generate').addEventListener('click', async () => {
    const zipCode = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;
    const weatherData = await getWeatherData(zipCode);
    const data = {
      temperature: weatherData.main.temp,
      date: new Date(),
      userResponse: userResponse
    };
    await postData('/add', data);
    const projectData = await fetch('/all');
    const allData = await projectData.json();
    document.getElementById('temp').innerHTML = Math.round(allData.temperature) + ' degrees';
    document.getElementById('content').innerHTML = allData.userResponse;
    document.getElementById('date').innerHTML = allData.date;
  });