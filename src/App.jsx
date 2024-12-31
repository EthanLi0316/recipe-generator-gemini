import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import GeminiRecipe from "./components/GeminiRecipe";
import IngredientsList from "./components/IngredientsList";
import { getRecipeFromGemini } from "./utils/gemini-api";
import Footer from "./components/Footer";

function App() {
	// let [recipeShown, setRecipeShown] = React.useState(false);
	let [ingredients, setIngredients] = React.useState([]);
	let [recipeFormated, setRecipeFormated] = React.useState("");

	function addIngredient(formData) {
		const newIngredient = formData.get("ingredient");
		if (newIngredient !== "")
			setIngredients([...ingredients, newIngredient]);
	}

	const ingredientList = ingredients.map((ingredient, index) => (
		<li key={`${ingredient}-${index}`}>{ingredient}</li>
	));

	async function showRecipe() {
		try {
			const recipeMD = await getRecipeFromGemini(ingredients);

			setRecipeFormated(
				<ReactMarkdown
					children={recipeMD}
					remarkPlugins={[remarkGfm]}
				/>
			);
			// setRecipeFormated(recipeMD);
		} catch (error) {
			console.error("error: ", error);
		}
	}

	return (
		<>
			<Header name="chef gemini" />
			<main>
				<Form addIngredient={addIngredient} />
				<IngredientsList
					ingredients={ingredients}
					ingredientList={ingredientList}
					showRecipe={showRecipe}
				/>
				<GeminiRecipe recipeFormated={recipeFormated} />
			</main>
			<Footer creatorName="Created by Ethan Li" />
		</>
	);
}

export default App;
