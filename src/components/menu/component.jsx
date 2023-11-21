import { Dish } from "../dish/component";

export const Menu = ({menu}) => {
	return (
		menu && 
		<>
			<h3>Меню</h3>
			<ul>
				{menu.map((dish) => <Dish dish={dish} key={dish.id}/>)}
			</ul>
		</>
	);
};