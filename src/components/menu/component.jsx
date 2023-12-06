import { Dish } from "../dish/component";

import styles from "./styles.module.css";

export const Menu = ({menu, className = ''}) => {
	return (
		menu && 
		<div className={className}>
			<h3 className={styles.menuHeader}>Меню</h3>
			<ul className={styles.menuList}>
				{
					menu.map((dish) => <li key={dish.id}><Dish dish={dish}/></li>)
				}
			</ul>
		</div>
	);
};