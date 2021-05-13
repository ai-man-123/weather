import React from 'react'

const WeatherCard = ({weather}) => {
    const img = `/weather/assets/weathericons/${weather.current.is_day}/${weather.current.condition.icon.substr(weather.current.condition.icon.length - 7,weather.current.condition.icon.length)}`
    return (
        <div className="psuedoWeatherCard">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <div className="current">
                <div className="icon">
                    <img src={img} alt="" />
                </div>
                <h1>{weather.current.temp_c}°c</h1>
            </div>
            <h3>{weather.current.condition.text}</h3>
            <p style={{fontSize: "0.75rem"}}>Updated as of {weather.current.last_updated.substr(11, 5)}</p>
        </div>
    )
}

export default WeatherCard
