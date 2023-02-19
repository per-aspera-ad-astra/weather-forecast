const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '3d84e1d6bf8822a2416d445ff8b50f9e';

const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getDataFromCityName = async (city, units = 'metric') => {
	const URL = `${API_URL}q=${city}&appid=${API_KEY}&units=${units}`;

	const data = await fetch(URL)
		.then(res => res.json())
		.then(data => data)
		.catch(err => `Could not fetch ${err}`);

	return transformData(data);
}

const getDataFromLocation = async (lat, lon, units = 'metric') => {
	const URL = `${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;

	const data = await fetch(URL)
		.then(res => res.json())
		.then(data => data)
		.catch(err => `Could not fetch ${err}`);

	return transformData(data);
}

function transformData(data) {
	const {
		weather,
		main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
		wind: {speed},
		sys: {country, sunrise, sunset},
		timezone,
		dt,
		name,
	} = data;

	const { description, icon } = weather[0];

	return {
		description,
		iconURL: makeIconUrl(icon),
		temp,
		feels_like,
		temp_min,
		temp_max,
		pressure,
		humidity,
		speed,
		country,
		sunrise,
		sunset,
		dt,
		timezone,
		name,
	}
}

export { getDataFromCityName, getDataFromLocation };
