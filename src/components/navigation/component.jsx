import { Restaurant } from "../restaurant/component";

import styles from "./styles.module.css";

export const Navigation = ({restaurantNames, onRestaurantClick}) => {
	return (
		<nav className={styles.restaurantNavigation}>
			{
				restaurantNames.map(({id, name}) => (
					<Restaurant 
						name={name} 
						key={`nav-${id}`} 
						onClick={() => onRestaurantClick(id)}
					/>
				))
			}
		</nav>
	);
};