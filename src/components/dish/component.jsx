import { useState } from "react";

const DISH_LIMIT = {
	MIN: 0,
	MAX: 5
}

export const Dish = ({dish}) => {
	const [dishAmount, setDishAmount] = useState(0);

	return (
		dish && 
		<>
			{dish.name} ({dish.price}$): {dish.ingredients.join(", ")}&nbsp;
			<button 
				onClick={
					() => dishAmount <= DISH_LIMIT.MIN ? setDishAmount(DISH_LIMIT.MIN) : setDishAmount(dishAmount - 1)
				}
				disabled={dishAmount <= DISH_LIMIT.MIN}
			>-</button>&nbsp;
			<span>Amount: {dishAmount}</span>&nbsp;
			<button 
				onClick={
					() => dishAmount >= DISH_LIMIT.MAX ? setDishAmount(DISH_LIMIT.MAX) : setDishAmount(dishAmount + 1)
				}
				disabled={dishAmount >= DISH_LIMIT.MAX}
			>+</button>
		</>
	);
};