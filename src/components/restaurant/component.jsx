import styles from "./styles.module.css";

export const Restaurant = ({name, onClick}) => {
	return (
		name && 
		<button className={styles.restaurantButton} onClick={onClick}>{name}</button>
	);
};