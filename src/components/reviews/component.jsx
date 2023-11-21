import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
	return (
		reviews && 
		<>
			<h3>Отзывы</h3>
			<ul>
				{
					reviews.map(({id, text}) => <Review reviewText={text} key={id}/>)
				}
			</ul>
		</>
	);
};