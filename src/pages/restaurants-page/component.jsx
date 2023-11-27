import { RestaurantCard } from '../../components/restaurant-card/component';
import { Navigation } from "../../components/navigation/component";
import { useState } from 'react';

export const RestaurantsPage = ({restaurants}) => {
	const restaurantNames = restaurants.map((restaurant) => ({
		id: restaurant.id,
		name: restaurant.name
	}));

	const [chosenRestaurantId, setChosenRestaurantId] = useState();
	const restaurant = restaurants.find((restaurant) => restaurant.id === chosenRestaurantId);

	return (
		<>
			<Navigation 
				restaurantNames={restaurantNames} 
				onRestaurantClick={(name) => setChosenRestaurantId(name)}
			/>
			{
				restaurant && 
				<div>
					<RestaurantCard restaurant={restaurant} key={restaurant.id} />
				</div>
			}
		</>
	);
};