const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");


const updateUI = (data)=>{
    const cityDetails = data.cityDetails;
    const weather = data.weather;
    console.log(weather);

    const html = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class= "my-3">${weather.WeatherText}</div>
    <div class = "display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>`
    details.innerHTML= html;

    const iconNumber = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute("src",iconNumber);




    let timeSrc = weather.IsDayTime;
    let DNimage ="";

    if(timeSrc){
        DNimage = "img/day.svg";
    }else{
        DNimage = "img/night.svg";
    }
    time.setAttribute("src",DNimage);

}

const updateCity = async(city)=>{
const cityDetails = await getCity(city);
const weather = await getWeather(cityDetails.Key);
return {cityDetails,weather};

}

cityForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err.message));
    localStorage.setItem("location",city);
})

if(localStorage.getItem("location")){
    updateCity(localStorage.getItem("location"))
    .then(data => updateUI(data))
    .catch(err => console.log(err.message));

}










// getCity("delhi")
// .then(data=>console.log(data))
// .catch(err=>console.log(err.message));


// getWeather("202396")
// .then(data=>console.log(data))
// .catch(err=>console.log(err.message));

