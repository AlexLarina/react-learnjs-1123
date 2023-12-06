import { useReducer } from 'react';
import { Counter } from "../counter/component";
import styles from "./styles.module.css";

const RATING_LIMIT = {
	MIN: 1,
	MAX: 5,
	STEP: 0.5
}

const DEFAULT_FORM_VALUE = {
	name: '',
	text: '',
	rating: 5,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "setName":
			return {...state, name: action.payload};
		case "setText":
			return {...state, text: action.payload};
		case "setRating":
				return {...state, rating: action.payload};
		default: 
			return state;
	}
};

export const ReviewForm = () => {
	const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

	return (
		<>
			<h3 className={styles.reviewFormHeader}>Ваш отзыв</h3>
			<div className={styles.reviewFormWrapper}>
				<div className={styles.nameWrapper}>
					<label htmlFor="name">Name:</label>
					<input 
						id="name" 
						type="text"
						placeholder="Как Вас зовут?"
						value={formValue.name}
						onChange={(event) => 
							dispatch({ type: "setName", payload: event.target.value})
						}
					/>
				</div>

				<div className={styles.ratingWrapper}>
					<Counter
						className={styles.ratingCounter}
						value={formValue.rating}
						increment={
							() => formValue.rating >= RATING_LIMIT.MAX 
							? dispatch({ type: "setRating", payload: RATING_LIMIT.MAX})
							: dispatch({ type: "setRating", payload: formValue.rating + RATING_LIMIT.STEP})
						}
						decrement={
							() => formValue.rating <= RATING_LIMIT.MIN 
							? dispatch({ type: "setRating", payload: RATING_LIMIT.MIN})
							: dispatch({ type: "setRating", payload: formValue.rating - RATING_LIMIT.STEP})			}
						minValue={RATING_LIMIT.MIN}
						maxValue={RATING_LIMIT.MAX}
					/>
				</div>		

				<div className={styles.textWrapper}>
					<label htmlFor="text">Review text:</label>
					<input 
						id="text" 
						type="text"
						placeholder="Поделитесь впечатлениями"
						value={formValue.text}
						onChange={(event) => 
							dispatch({ type: "setText", payload: event.target.value})
						}
					/>
				</div>

			</div>
		</>
	);
};