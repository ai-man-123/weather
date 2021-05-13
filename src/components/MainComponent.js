import React, {useState} from 'react'
import Details from './Details';
import HourlyCard from './HourlyCard';
import InfoCard1 from './InfoCard1';
import InfoCard2 from './InfoCard2';
import ThreeDayForecast from './ThreeDayForecast';
import WeatherCard from "./WeatherCard";

const MainComponent = ({weather, forecast}) => {
    const [selectHourlyDay, setSelectHourlyDay] = useState(0)
    return (
        <div className="main">
            <div className="weatherCard">
                <WeatherCard weather={weather}/>
                <InfoCard1 weather={weather}/>
                <InfoCard2 weather={weather} forecast={forecast}/>
                <ThreeDayForecast forecast={forecast} setSelectHourlyDay={setSelectHourlyDay}/>
                <HourlyCard weather={weather} forecast={forecast} selectHourlyDay={selectHourlyDay}/>
                <Details weather={weather} forecast={forecast}/>
            </div>
        </div>
    )
}

export default MainComponent
