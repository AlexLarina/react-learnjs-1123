import { RestaurantCard } from '../../components/restaurant-card/component';
import { Navigation } from "../../components/navigation/component";
import { useState } from 'react';

export const RestaurantsPage = ({restaurants}) => {
	const restaurantNames = restaurants.map((restaurant) => ({
		id: restaurant.id,
		name: restaurant.name
	}));

	const [chosenRestaurant, setChosenRestaurant] = useState();
	
	const restaurant = restaurants.find((restaurant) => restaurant.name === chosenRestaurant);
	console.log(restaurant)

	return (
		<>
			<Navigation restaurantNames={restaurantNames} onRestaurantClick={(name) => setChosenRestaurant(name)}/>
			{
				chosenRestaurant && 
				<div>
					<RestaurantCard restaurant={restaurant} key={restaurant.id} />
					{/* {
						restaurants.map((restaurant) => (
							<RestaurantCard restaurant={restaurant} key={restaurant.id}/>)
						)
					} */}
				</div>
			}
		</>
	);
};