export const Review = ({reviewText}) => {
	return (
		reviewText && 
		<li>{reviewText}</li>
	);
};