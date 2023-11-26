import { Restaurant } from "../restaurant/component";

export const Navigation = ({restaurantNames, onRestaurantClick}) => {
	return (
		<nav>
			{
				restaurantNames.map(({id, name}) => (
					<Restaurant name={name} key={`nav-${id}`} onClick={() => onRestaurantClick(name)}/>
				))
			}
		</nav>
	);
};