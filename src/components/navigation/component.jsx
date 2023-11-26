import { Restaurant } from "../restaurant/component";

export const Navigation = ({restaurantNames}) => {
	return (
		<nav>
			{restaurantNames.map(({id, name}) => <Restaurant name={name} key={`nav-${id}`}/>)}
		</nav>
	);
};