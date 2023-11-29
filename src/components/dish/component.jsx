import { useState } from "react";
import { Counter } from "../counter/component";

const DISH_LIMIT = {
	MIN: 0,
	MAX: 5,
	STEP: 1
}

export const Dish = ({dish}) => {
	const [dishAmount, setDishAmount] = useState(0);

	return (
		dish && 
		<>
			{dish.name} ({dish.price}$): {dish.ingredients.join(", ")}&nbsp;
			<Counter 
				value={dishAmount}
				increment={
					() => dishAmount >= DISH_LIMIT.MAX 
					? setDishAmount(DISH_LIMIT.MAX) 
					: setDishAmount(dishAmount + DISH_LIMIT.STEP)
				}
				decrement={
					() => dishAmount <= DISH_LIMIT.MIN 
					? setDishAmount(DISH_LIMIT.MIN) 
					: setDishAmount(dishAmount - DISH_LIMIT.STEP)
				}
				borderValue={DISH_LIMIT}
			/>
		</>
	);
};