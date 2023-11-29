import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";

export const RestaurantCard = ({restaurant}) => {
	return (
		restaurant &&
		<>
			<h2>{restaurant.name}</h2>
			<Menu menu={restaurant.menu}/>
			<Reviews reviews={restaurant.reviews}/>
			<ReviewForm />
		</>
	);
};