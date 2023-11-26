import { RestaurantCard } from '../../components/restaurant-card/component';
import { Navigation } from "../../components/navigation/component";

export const RestaurantsPage = ({restaurants}) => {
	const restaurantNames = restaurants.map((restaurant) => ({
		id: restaurant.id,
		name: restaurant.name
	}));

	return (
		<>
			<Navigation restaurantNames={restaurantNames} />
			<div>
				{
					restaurants.map((restaurant) => (
						<RestaurantCard restaurant={restaurant} key={restaurant.id}/>)
					)
				}
			</div>
		</>
	);
};