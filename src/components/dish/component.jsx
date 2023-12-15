import { useState } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";

const DISH_LIMIT = {
	MIN: 0,
	MAX: 5,
	STEP: 1
}

export const Dish = ({dish}) => {
	const [dishAmount, setDishAmount] = useState(0);

	return (
		dish && 
		<div className={styles.dishWrapper}>
			<div className={styles.dishDetails}>
				<p>
					<span className={styles.dishName}>{dish.name} </span>
					<cite>({dish.price} $)</cite>
				</p>
				<i>{dish.ingredients.join(", ")}</i>
			</div>
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
				minValue={DISH_LIMIT.MIN}
				maxValue={DISH_LIMIT.MAX}
			/>
		</div>
	);
};