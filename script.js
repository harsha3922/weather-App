  const apiKey = "b904e30a53951f9ce381e4d9b933f486";

    async function getWeather() {
      const city = document.getElementById("cityInput").value.trim();
      if (!city) {
        alert("Please enter a city name.");
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();

        const weatherHtml = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
          <p><strong>${data.main.temp}°C</strong></p>
          <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherHtml;
      } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
      }
    }