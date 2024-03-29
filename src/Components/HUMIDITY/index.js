import React from 'react';
import  {UseWeatherAppContext} from '../../Context/Context';

const HumidityComponents = ()=>{
    
    let {state:{current, city}} = UseWeatherAppContext();
    console.log('myData', current, city);

    return (
        <>
        {
            current ? <div className='humidityWrap'>
            <div className='humidityData'>
                <div className='title'>HUMIDITY </div>
                <div className='value'>{current.humidity} %</div>
            </div>
            <div className='humidityData'>
                <div className='title'>WIND </div>
                <div className='value'>{Math.round(current.wind_speed)} km/h</div>
            </div>
            <div className='humidityData'>
              <div className='title'>MIN TEMP </div>
              <div className='value'>{Math.round(current.temp.min)} °C</div>
            </div>
            <div className='humidityData'>
              <div className='title'>MAX TEMP </div>
              <div className='value'>{Math.round(current.temp.max)} °C</div>
            </div>
        </div>: ''
        }
            
        </>
    )
}

export default HumidityComponents;