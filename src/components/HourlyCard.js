import React from 'react'

const HourlyCard = ({weather, forecast}) => {
    let i=0;
    return (
        <div className="psuedoWeatherCard">
            <h3 className="floatLeft">Hourly Forecast</h3>
            <div className="hourly">
                {forecast.forecast.forecastday[0].hour.map(hour=>(
                <div className="hourlybar" key={Math.random()*Math.random()}>
                    <div className={`bar ${parseInt(weather.current.last_updated.substr(11, 2))===i++ ? 'currenthour': ''}`} style={{height: `${Math.floor(hour.temp_c * Math.floor(150 / forecast.forecast.forecastday[0].day.maxtemp_c))}px`}}></div>
                    <p style={{bottom: `${Math.floor(hour.temp_c * Math.floor(150 / forecast.forecast.forecastday[0].day.maxtemp_c))}px`}}>{hour.temp_c}°c</p>
                </div>
                ))}
            </div>
            <div className="hourlytime">
                <p>02:00</p>
                <p>06:00</p>
                <p>10:00</p>
                <p>14:00</p>
                <p>18:00</p>
                <p>22:00</p>
            </div>
        </div>
    )
}

export default HourlyCard
