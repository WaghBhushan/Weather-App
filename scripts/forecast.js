const key = "A0ewCAo5mnyMYjQyV02P0dQwHPaZuyJG";

const getCity =async (city)=>{
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    if(data.length == 0){
    throw new Error("This City Does Not-Exit");
    }
    return data[0];

}


const getWeather =async (id)=>{
    const getUrl =  "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;
    const response = await fetch(getUrl + query);
    const data = await response.json();
    console.log(data);
    return data[0];

}






