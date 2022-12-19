const searchbtn = document.querySelector(".btn")
const img1 = document.querySelector("#img1")
const title = document.querySelector(".card-title")
const temp = document.querySelector("#temp")
const KEY = "6bc236fa8bd5e7e03f83fd8cea3eac74"
const humidity = document.querySelector("#humidity")
const wind = document.querySelector("#wind")
const country = document.querySelector("#country")
const weather = document.querySelector("#weather")
const err = document.querySelector("#error")

let xhr = new XMLHttpRequest();

function searchWeather(e) {
    const searchValue = document.querySelector("#searchbar").value
    console.log(searchValue);
    e.preventDefault();
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${KEY}&units=metric`);
    xhr.responseType = "json";
    xhr.send()
    e.target.reset()
}

xhr.onload = function() {
    if(xhr.status === 200){
        const res = xhr.response;
        console.log(res);
        console.log("City", res.name);
        title.innerHTML = res.name;
        temp.innerHTML = res.main.temp
        humidity.innerHTML = res.main.humidity
        wind.innerHTML = res.wind.speed
        country.innerHTML = res.sys.country
        weather.innerHTML = res.weather[0].description
        err.style.display = "none"
        const icon = res.weather[0].icon
        img1.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        console.log(res);
    } else {
        console.error("Response not 200");
        err.innerHTML = "The location you have entered is invalid. Please Try Again"
    }
}