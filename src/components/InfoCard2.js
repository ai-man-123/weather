import React from 'react'

const InfoCard2 = ({weather, forecast}) => {
    return (
        <div className="info">
        <p>Dew Point: <span>{forecast.forecast.forecastday[0].hour[parseInt(weather.current.last_updated.substr(11, 2))].dewpoint_c}°c</span></p>
            <p>Humidity: <span>{weather.current.humidity}%</span></p>
            <p>UV Index: <span>{weather.current.uv}</span></p>
        </div>
    )
}

export default InfoCard2
