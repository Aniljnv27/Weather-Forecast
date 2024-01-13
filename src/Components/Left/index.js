import React, { useState } from 'react';
import dayjs from 'dayjs';
import { UseWeatherAppContext } from '../../Context/Context';

const LeftComponents = () => {
  const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const { state: { city, current } } = UseWeatherAppContext();
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  if (!current) return <div>Loading...</div>;

  const weekdayIndex = dayjs.unix(current.dt).day();
  const temperatureUnit = isCelsius ? '°C' : '°F';
  const temperatureMax = isCelsius ? Math.round(current.temp.max) : Math.round((current.temp.max * 9/5) + 32);

  return (
    <>
      <div className='leftWrap'>
        <div className='dateWrap'>
          <h2>{WEEKDAYS[weekdayIndex]}</h2>
          <span className="dateDay">
            {dayjs.unix(current.dt).format("DD MMM YYYY")}
          </span>
          <span className="locationName">{city.city} - {city.admin_name} - {city.country}</span>
        </div>
        <div className="weatherContainer">
          <img
            className="weatherIcon" alt="myit"
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          />
          <h1 className="weatherTemp">{temperatureMax}{temperatureUnit}</h1>
          <h3 className="weatherDesc">{current.weather[0].main} <span><button className='toggleButton' onClick={toggleTemperatureUnit}>Convert Unit</button></span></h3>
        </div>
      </div>
    </>
  );
};

export default LeftComponents;
