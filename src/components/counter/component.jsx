import styles from "./styles.module.css";

export const Counter = ({value, decrement, increment, minValue, maxValue, className = ''}) => {
	return (
		<div className={`${styles.counterWrapper} ${className}`}>
			<button 
				className={styles.counterButton}
				onClick={decrement}
				disabled={value <= minValue}
			>-</button>
			<span>{value}</span>
			<button 
				className={styles.counterButton}
				onClick={increment}
				disabled={value >= maxValue}
			>+</button>
		</div>
	);
};