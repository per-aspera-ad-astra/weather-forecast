import { useEffect, useState } from 'react';
import { getDataFromCityName } from '../weatherService';

import Header from './Header';
import MainInfo from './MainInfo';
import SecondaryInfo from './SecondaryInfo';

import hotBg from '../assets/img/hot-weather.jpg';
import normalBg from '../assets/img/normal-weather.jpg';
import coldBg from '../assets/img/cold-weather.jpg';
import frozenBg from '../assets/img/frozen-weather.jpg';

function App() {
  const [city, setCity] = useState('kharkiv');
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(normalBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getDataFromCityName(city, units);
      setWeather(data);

      setDynamicBg(Math.round(data.temp), units);
    }

    fetchWeatherData();
    
  }, [city, units]);

  const handleUnitsClick = e => {
    const button = e.target;
    const isCelsius = button.innerText === 'Change units to metric';
    
    setUnits(isCelsius ? 'metric' : 'imperial');
    button.innerText = isCelsius ? 'Change units to imperial' : 'Change units to metric';
  }

  const submitCityName = e => {
    if (e.key === 'Enter') {
      setCity(e.target.value);
      e.target.blur();
    }
  }

  function setDynamicBg(temp, units) {
    if (units === 'metric') {
      setBgByUnits(30, 15, 0);
    }

    if (units === 'imperial') {
      setBgByUnits(86, 59, 32);
    }

    function setBgByUnits(hot, normal, cold) {
      if (temp >= hot) setBg(hotBg);
      if (temp < hot && temp > normal) setBg(normalBg);
      if (temp <= normal && temp > cold) setBg(coldBg);
      if (temp <= cold) setBg(frozenBg);
    }
  }
 
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})`}}>
      <div className="container">
        <Header 
          submitCityName={submitCityName}
          handleUnitsClick={handleUnitsClick} 
        />
        {
          weather && (
            <>
              <MainInfo 
                city={weather.name}
                country={weather.country}
                icon={weather.iconURL}
                description={weather.description}
                sunrise={weather.sunrise}
                sunset={weather.sunset}
                timezone={weather.timezone}
                dt={weather.dt}
                temp={weather.temp}
                units={units}
              /> 
              <SecondaryInfo
                weather={weather}
                units={units}
              />
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
