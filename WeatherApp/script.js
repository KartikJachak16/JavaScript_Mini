const apiKey = "172a45f52d49a45f2cbf88051e094309";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchcity = document.querySelector(".search_bar input");
const searchbutton = document.querySelector(".search_bar button");
const weathericon = document.querySelector(".weather_icon");

async function getWeather(city) 
{
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404)
    {
        document.querySelector(".Invaild_name").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
        document.querySelector('.windspeed').innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main === "Clear") {
            weathericon.src = "images/clear.png";
        } else if (data.weather[0].main === "Clouds") {
            weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Drizzle") {
            weathericon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Rain") {
            weathericon.src = "images/rain.png";
        } else if (data.weather[0].main === "Mist") {
            weathericon.src = "images/mist.png";
        } else if (data.weather[0].main === "Snow") {
            weathericon.src = "images/snow.png";
        }        

        document.querySelector(".Invaild_name").style.display = "none";    
        document.querySelector(".weather").style.display = "block";
    }
    
}

searchbutton.addEventListener('click', ()=>{
    getWeather(searchcity.value);
})