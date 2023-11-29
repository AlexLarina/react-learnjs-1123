export const Counter = ({value, decrement, increment, borderValue}) => {
	return (
		<>
			<button 
				onClick={decrement}
				disabled={value <= borderValue.MIN}
			>-</button>&nbsp;
			<span>{value}</span>&nbsp;
			<button 
				onClick={increment}
				disabled={value >= borderValue.MAX}
			>+</button>
		</>
	);
};