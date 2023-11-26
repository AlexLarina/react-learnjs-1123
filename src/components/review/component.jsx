export const Review = ({review}) => {
	return (
		review && 
		<>&quot;{review.text}&quot; - {review.user} ({review.rating}) </>
	);
};