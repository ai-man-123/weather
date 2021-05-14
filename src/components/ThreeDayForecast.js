import React from 'react'

const ThreeDayForecast = ({weather, forecast, selectHourlyDay, setSelectHourlyDay}) => {
    const today = new Date();
    let k=0;
    if(forecast.forecast.forecastday[selectHourlyDay].day.condition.icon.substr(weather.current.condition.icon.length - 7,weather.current.condition.icon.length).length===7){
        k=7
    }
    if(forecast.forecast.forecastday[selectHourlyDay].day.condition.icon.substr(weather.current.condition.icon.length - 9,weather.current.condition.icon.length).length===7){
        k=9
    }
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var n = today.getDay();
    let i=0
    let j=0
    const setDay1 = () =>{
        setSelectHourlyDay(0)
    }
    const setDay2 = () =>{
        setSelectHourlyDay(1)
    }
    const setDay3 = () =>{
        setSelectHourlyDay(2)
    }
    return (
        <div className="psuedoWeatherCard">
            <h3 className="floatLeft">3 Day Forecast</h3>
            <div className="days">
            {forecast.forecast.forecastday.map(day=>(
                <div className={`daycard ${(selectHourlyDay===0 && i===0) ? 'daycardactive' :''} ${(selectHourlyDay===1 && i===1) ? 'daycardactive' :''} ${(selectHourlyDay===2 && i===2) ? 'daycardactive' :''}`} key={Math.random()*Math.random()} onClick={(i++ ? (i===2 ? setDay2 : setDay3) : setDay1)}>
                    <div className="daycardHeader">
                        <p>{weekday[(n<=6?n++:j++)]} {day.date.substr(8, 5)}</p>
                    </div>
                    <div className="daycardImage">
                        <img src={`/weather/assets/weathericons/${weather.current.is_day}/${day.day.condition.icon.substr(weather.current.condition.icon.length - k,weather.current.condition.icon.length)}`} alt="" />
                    </div>
                    <div className="daycardHiLow">
                        <p>{day.day.maxtemp_c}° <span>{day.day.mintemp_c}°</span></p>
                    </div>
                    <div className="daycardDesc">
                        <p>{day.day.condition.text}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ThreeDayForecast
