export const Dish = ({dish}) => {
	return (
		dish && 
		<li>{dish.name} ({dish.price}$): {dish.ingredients.join(", ")} </li>
	);
};