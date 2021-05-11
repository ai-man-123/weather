import React from 'react'

const InfoCard1 = ({weather}) => {
    return (
        <div className="info">
            <p>Feels like: <span>{weather.current.feelslike_c}°c</span></p>
            <p>Wind: <span>{weather.current.wind_kph} km/h</span></p>
            <p>Visibility: <span>{weather.current.vis_km}km</span></p>
        </div>
    )
}

export default InfoCard1
