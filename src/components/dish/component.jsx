import { useState } from "react";

const dishLimit = {
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
				onClick={() => dishAmount <= dishLimit.MIN ? setDishAmount(dishLimit.MIN) : setDishAmount(dishAmount - 1)}
			>-</button>&nbsp;
			<span>Amount: {dishAmount}</span>&nbsp;
			<button 
				onClick={() => dishAmount >= dishLimit.MAX ? setDishAmount(dishLimit.MAX) : setDishAmount(dishAmount + 1)}
			>+</button>
		</>
	);
};