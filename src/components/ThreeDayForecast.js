import React from 'react'

const ThreeDayForecast = ({forecast, setSelectHourlyDay}) => {
    const today = new Date();
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
    const setDay1 = () =>{
        setSelectHourlyDay(0)
        console.log("card1")
    }
    const setDay2 = () =>{
        setSelectHourlyDay(1)
        console.log("card2")
    }
    const setDay3 = () =>{
        setSelectHourlyDay(2)
        console.log("card3")
    }
    return (
        <div className="psuedoWeatherCard">
            <h3 className="floatLeft">3 Day Forecast</h3>
            <div className="days">
            {forecast.forecast.forecastday.map(day=>(
                <div className="daycard" key={Math.random()*Math.random()} onClick={(i++ ? (i===2 ? setDay2 : setDay3) : setDay1)}>
                    <div className="daycardHeader">
                        <p>{weekday[n++]} {day.date.substr(8, 5)}</p>
                    </div>
                    <div className="daycardImage">
                        <img src={day.day.condition.icon} alt="" />
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
