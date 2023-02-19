const Header = ({submitCityName, handleUnitsClick}) => {
	return (
		<div className="header section">
			<input
				className="header__input"
				onKeyDown={submitCityName} 
				type="text"
				name="city"
				placeholder='Enter City ...'
			/>
			<button
				className="header__units-btn"
				onClick={handleUnitsClick}
			>Change units to imperial</button>
		</div>
	)
}

export default Header;
