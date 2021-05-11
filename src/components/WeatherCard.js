import React from 'react'

const WeatherCard = ({weather}) => {
    return (
        <div className="psuedoWeatherCard">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <div className="current">
                <div className="icon">
                    <img src={weather.current.condition.icon} alt="" />
                </div>
                <h1>{weather.current.temp_c}°c</h1>
            </div>
            <h3>{weather.current.condition.text}</h3>
            <p style={{fontSize: "0.75rem"}}>Updated as of {weather.current.last_updated.substr(11, 5)}</p>
        </div>
    )
}

export default WeatherCard
