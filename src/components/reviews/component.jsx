import { Review } from "../review/component";

import styles from "./styles.module.css";

export const Reviews = ({reviews}) => {
	return (
		reviews && 
		<>
			<h3 className={styles.reviewsHeader}>Отзывы</h3>
			<ul className={styles.reviewsList}>
				{
					reviews.map((review) => <li key={review.id}><Review review={review}/></li>)
				}
			</ul>
		</>
	);
};