import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";

import styles from "./styles.module.css";

export const RestaurantCard = ({restaurant}) => {
	return (
		restaurant &&
		<div className={styles.restaurantWrapper}>
			<h2 className={styles.restaurantName}>{restaurant.name}</h2>
			<Menu menu={restaurant.menu} className={styles.restaurantMenu}/>
			<Reviews reviews={restaurant.reviews}/>
			<ReviewForm />
		</div>
	);
};