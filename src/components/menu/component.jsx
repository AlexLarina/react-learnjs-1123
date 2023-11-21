import { Dish } from "../dish/component";

export const Menu = ({menu}) => {
	return (
		menu && 
		<>
			<h3>Меню</h3>
			<ul>
				{menu.map(({id, name}) => <Dish dish={name} key={id}/>)}
			</ul>
		</>
	);
};