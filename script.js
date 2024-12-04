const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';

document.getElementById('getWeather').onclick = function () {
    const city = document.getElementById('cityInput').value;

    if (city === '') {
        alert('Введите название города');
        return;
    }

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric&lang=ru';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const cityName = data.name;
            const country = data.sys.country;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            document.getElementById('city').innerHTML = cityName + ', ' + country;
            document.getElementById('weather').innerHTML =
                'Температура: ' + temp + '°C<br>Описание: ' + description + '<br>Закат: ' + sunset;
            document.getElementById('icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        })
        .catch(function (error) {
            alert('Ошибка: Город не найден или произошла другая ошибка');
        });
};
