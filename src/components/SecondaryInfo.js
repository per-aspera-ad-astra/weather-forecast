import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';

const SecondaryInfo = ({weather, units}) => {
	const tempUnit = units === 'metric' ? '°C' : '°F';
	const windUnit = units ==='metric' ? 'm/s' : 'm/h';

	const cards = [
		{
			id: 1,
			icon: <FaArrowDown />,
			title: 'min',
			data: Math.round(weather.temp_min),
			unit: tempUnit,
		},
		{
			id: 2,
			icon: <FaArrowUp />,
			title: 'max',
			data: Math.round(weather.temp_max),
			unit: tempUnit,
		},
		{
			id: 3,
			icon: <BiHappy />,
			title: 'feels like',
			data: Math.round(weather.feels_like),
			unit: tempUnit,
		},
		{
			id: 4,
			icon: <MdCompress />,
			title: 'pressure',
			data: weather.pressure,
			unit: 'hPa',
		},
		{
			id: 5,
			icon: <MdOutlineWaterDrop />,
			title: 'humidity',
			data: weather.humidity,
			unit: '%',
		},
		{
			id: 6,
			icon: <FaWind />,
			title: 'wind speed',
			data: Math.round(weather.speed),
			unit: windUnit,
		},
	];

	return (
		<div className="secondary-info">
			{
				cards.map(({id, icon, title, data, unit}) => (
					<div className="secondary-info__card section" key={id}>
						<div className="secondary-info__name">
							<div className="secondary-info__icon">{icon}</div>
							<div className="secondary-info__text">{title}</div>
						</div>
						<div className="secondary-info__value">{data} {unit}</div>
					</div>
				))
			}
		</div>
	)
}

export default SecondaryInfo;
