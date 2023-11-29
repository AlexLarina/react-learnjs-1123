import { useReducer } from 'react';
import { Counter } from "../counter/component";

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
			<h3>Ваш отзыв</h3>
			<div>
				<label htmlFor="name">Name:</label>
				<input 
					id="name" 
					type="text" 
					value={formValue.name}
					onChange={(event) => 
						dispatch({ type: "setName", payload: event.target.value})
					}
				/>
			</div>

			<div>
				<label htmlFor="text">Review text:</label>
				<input 
					id="text" 
					type="text" 
					value={formValue.text}
					onChange={(event) => 
						dispatch({ type: "setText", payload: event.target.value})
					}
				/>
			</div>

			<div>
				<Counter 
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

		</>
	);
};