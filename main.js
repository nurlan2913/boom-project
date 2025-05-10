const images = document.querySelectorAll('.modal-trigger');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');


const burger = document.getElementById("burger");
const nav = document.getElementById("nav");



images.forEach((img, i) => {
    img.onclick = () =>
        modals[i].style.display = 'block';
        document.body.style.overflow = 'hidden';
});


closes.forEach(btn => {
    btn.onclick = () => 
        btn.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
        
});


window.onclick = e => {
    modals.forEach(modal => {
        if (e.target == modal) 
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
    });
};





burger.onclick = () => {
    nav.classList.toggle("show")
};













    const weatherBtn = document.getElementById('weather-btn');
    const searchDiv = document.getElementById('weather-search');
    const getWeatherBtn = document.getElementById('get-weather');
    const resultDiv = document.getElementById('weather-result');

    // Показать блок с поиском
    weatherBtn.onclick = () => {
      searchDiv.style.display = 'block';
    };

    // Получить погоду
    getWeatherBtn.onclick = () => {
      const city = document.getElementById('city-input').value.trim();
      if (!city) {
        resultDiv.innerText = 'Please enter a city.';
        return;
      }

      const apiKey = '1ac6d9b178f8cb545a759ef59762825e'; // <-- Вставь свой ключ сюда
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (data.cod !== "200") {
            resultDiv.innerText = "City not found.";
            return;
          }

          resultDiv.innerHTML = '<h3>3-Day Forecast for ${data.city.name}</h3> ';

          // Отображаем погоду на 3 дня (каждые 8 записей = 1 день)
          for (let i = 0; i < 24; i += 8) {
            const day = data.list[i];
            const date = new Date(day.dt_txt).toDateString();
            const temp = day.main.temp;
            const desc = day.weather[0].description;

            resultDiv.innerHTML += 
                `<div class="weather-day">
                    <h4>${date}</h4>
                    <p>Temperature: ${temp}°C</p>
                    <p>Description: ${desc}</p>
                </div>`;
            
          }
        })
        .catch(err => {
          resultDiv.innerText = 'Error loading weather data.';
        });
    };