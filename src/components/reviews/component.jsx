import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
	return (
		reviews && 
		<>
			<h3>Отзывы</h3>
			<ul>
				{
					reviews.map((review) => <Review review={review} key={review.id}/>)
				}
			</ul>
		</>
	);
};