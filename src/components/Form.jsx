export default function Form({ addIngredient }) {
	function handleSubmit(event) {
		event.preventDefault();
		addIngredient(new FormData(event.target));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="tomato" name="ingredient" />
			<button type="submit">Submit</button>
		</form>
	);
}
