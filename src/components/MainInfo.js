const MainInfo = ({city, country, icon, description, sunrise, sunset, timezone, dt, temp, units}) => {
	function formatTime(timestamp, timezone) {
		const date = new Date((timestamp + timezone)* 1000);
		const hours = date.getUTCHours();
		const minutes = date.getUTCMinutes();
	
		return `${formatValue(hours)}:${formatValue(minutes)}`;
	}
	
	function getDate(dt, timezone) {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		const months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
		const date = new Date((parseInt(dt, 10) + parseInt(timezone, 10)) * 1000);
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();
		const weekDay = date.getDay();
		const hours = date.getUTCHours();
		const minutes = date.getUTCMinutes();
	
		return `${days[weekDay]}, ${day} ${months[month]} ${year} ${formatValue(hours)}:${formatValue(minutes)}`;
	}

	function formatValue(value) {
		return value < 10 ? `0${value}` : value;
	}

	return (
		<div className="main-info section">
			<div className="main-info__forecast-time">{getDate(dt, timezone)}</div>
			<div className="main-info__item">
				<h3 className="main-info__city">{city}, {country}</h3>
				<div className="main-info__icon">
					<img src={icon} alt="weather icon" />
				</div>
				<div className="main-info__descr">{description}</div>
			</div>
			<div className="main-info__item main-info__item_day-data">
				<div className="main-info__day-data">Sunrise: {formatTime(sunrise, timezone)}</div>
				<div className="main-info__day-data">Sunset: {formatTime(sunset, timezone)}</div>
			</div>
			<div className="main-info__item">
				<div className="main-info__temperature">
					{Math.round(temp)} °{units === 'metric' ? 'C' : 'F'}
				</div>
			</div>
		</div>
	)
}

export default MainInfo;
