import { useEffect, useState } from 'react';
import './main.css';
import axios from "axios";
import MainComponent from './components/MainComponent';
import { DynamicBG } from './components/DynamicBG';
import findme from './res/icons/findme.png'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [input, setInput] = useState('')
  useEffect(()=>{
      // if(navigator.geolocation){
      //   console.log(navigator.geolocation.getCurrentPosition())
      //   navigator.geolocation.getCurrentPosition(position =>{
      //     const locHandled = `${position.coords.latitude},${position.coords.longitude}`;
      //     getWeather(locHandled);
      //   })
      // }
      // else{
      //   alert("Location Denied. Default location set to New Delhi.");
      //   const locUnhandled = "New Delhi"
      //   getWeather(locUnhandled)
      // }
      if (navigator.geolocation) {
        var timeoutInSeconds=1;
        var geotimeout=setTimeout(function() {
            const locUnhandled = "New Delhi"
            getWeather(locUnhandled)
        },timeoutInSeconds*1000+500); //plus 500 ms to allow the API to timeout normally
        navigator.geolocation.getCurrentPosition(function (position) {
            clearTimeout(geotimeout);
            const locHandled = `${position.coords.latitude},${position.coords.longitude}`;
            getWeather(locHandled);
        }, function () {
            clearTimeout(geotimeout);
            const locUnhandled = "New Delhi"
            getWeather(locUnhandled)
        },{
            enableHighAccuracy:true,
            timeout: timeoutInSeconds*1000
        });
    } else {
        const locUnhandled = "New Delhi"
        getWeather(locUnhandled)
    }
  }, [])
  const getWeather = async (location) =>{
    try{
      // const responseWeather =  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=859e72cd0f55c604f19409e351256432`);
      // const responseForecast =  await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=859e72cd0f55c604f19409e351256432`);
      // const responseWeather =  await axios.get(`https://api.weatherapi.com/v1/current.json?key=493eecc7444e4bae8bb140053210905&q=${location}&aqi=yes`);
      // const responseForecast =  await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=493eecc7444e4bae8bb140053210905&q=${location}&days=7&aqi=no&alerts=no`);
      const responseWeather =  await axios.get(`https://api.weatherapi.com/v1/current.json?key=${env.API_KEY}&q=${location}&aqi=yes`);
      const responseForecast =  await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${env.API_KEY}&q=${location}&days=7&aqi=no&alerts=no`);
      setWeather(responseWeather.data)
      setForecast(responseForecast.data)
      console.log(responseWeather.data);
      console.log(responseForecast.data);
    }
    catch(error){
      alert("Please enter a valid 'city', 'pin' or 'lat, long'")
    }
  }
  const weatherInput = (e) =>{
    setInput(e.target.value)
  }
  const searchWeather = (e) =>{
    e.preventDefault()
    getWeather(input)
    setInput("")
  }
  return (
    <div className="App">
      {weather && forecast && (
        <div>
          <DynamicBG weather={weather} forecast={forecast}/>
          <div className="searchbox">
            <form>
              <input type="text" placeholder="Search your city" onChange={weatherInput} value={input}/>
              <button onClick={searchWeather}><img src={findme} alt="" /></button>
            </form>
          </div>
          <MainComponent weather={weather} forecast={forecast}/>
        </div>
      )}
    </div>
  );
}

export default App;
