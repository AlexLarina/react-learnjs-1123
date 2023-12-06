export const Counter = ({value, decrement, increment, minValue, maxValue}) => {
	return (
		<>
			<button 
				onClick={decrement}
				disabled={value <= minValue}
			>-</button>&nbsp;
			<span>{value}</span>&nbsp;
			<button 
				onClick={increment}
				disabled={value >= maxValue}
			>+</button>
		</>
	);
};