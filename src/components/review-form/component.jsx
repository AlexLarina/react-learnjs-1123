import { useState } from 'react';
import { Counter } from "../counter/component";

const RATING_LIMIT = {
	MIN: 1,
	MAX: 5,
	STEP: 0.5
}

export const ReviewForm = () => {
	const [formValue, setFormValue] = useState({
		name: '',
		text: '',
		rating: 5,
	});

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
						setFormValue({...formValue, name: event.target.value}) 
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
						setFormValue({...formValue, text: event.target.value}) 
					}
				/>
			</div>

			<div>
				<Counter 
					value={formValue.rating}
					increment={
						() => formValue.rating >= RATING_LIMIT.MAX 
						? setFormValue({...formValue, rating: RATING_LIMIT.MAX}) 
						: setFormValue({...formValue, rating: formValue.rating + RATING_LIMIT.STEP}) 
					}
					decrement={
						() => formValue.rating <= RATING_LIMIT.MIN 
						? setFormValue({...formValue, rating: RATING_LIMIT.MIN}) 
						: setFormValue({...formValue, rating: formValue.rating - RATING_LIMIT.STEP}) 
					}
					borderValue={RATING_LIMIT}
				/>
			</div>		

		</>
	);
};