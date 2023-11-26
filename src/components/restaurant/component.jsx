export const Restaurant = ({name, onClick}) => {
	return (
		name && 
		<button onClick={onClick}>{name}</button>
	);
};