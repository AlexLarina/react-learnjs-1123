export const Dish = ({dish}) => {
	return (
		dish && 
		<>{dish.name} ({dish.price}$): {dish.ingredients.join(", ")}</>
	);
};