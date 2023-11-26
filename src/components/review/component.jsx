export const Review = ({review}) => {
	return (
		review && 
		<li>&quot;{review.text}&quot; - {review.user} ({review.rating}) </li>
	);
};