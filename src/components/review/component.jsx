import styles from "./styles.module.css";
import star from './star.png';

export const Review = ({review}) => {
	return (
		review && 
		<div className={styles.reviewWrapper}>
			<p>&quot;{review.text}&quot;</p>
			<p className={styles.userDetails}>
				<i>{review.user}</i>
				<span className={styles.userRating}>
					{
						[...new Array(review.rating)].map(
							(item, index) => 
								<img key={`${review.user}-star-${index}`} src={star} alt="Rating star" /> 
							)
						}
				</span>
			</p>
		</div>
	);
};