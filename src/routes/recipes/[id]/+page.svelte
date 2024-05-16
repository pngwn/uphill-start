<script lang="ts">
	export let data: { recipe: any };
	$: recipe = data.recipe;

	$: instructions = recipe.instructions
		.replace(/\d+\./g, '========')
		.split('========')
		.filter(Boolean);

	$: ingredients = JSON.parse(recipe.ingredients)
		.split('\n')
		.map((ingredient: string) => ingredient.replace(/^- /, ''));
</script>

<section class="recipe">
	<h1>{recipe.name}</h1>
	<p>SERVES: {recipe.servings}</p>

	<p>{recipe.description}</p>

	<h3>Ingredients</h3>
	<ul>
		{#each ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>

	<h3>Instructions</h3>

	<ol>
		{#each instructions as instruction}
			<li>{instruction}</li>
		{/each}
	</ol>

	<details>
		<summary>Notes</summary>
		<p>{recipe.notes}</p>
	</details>

	<details>
		<summary>Nutrition</summary>
		<pre>{JSON.stringify(JSON.parse(recipe.nutrition), null, 2)}</pre>
	</details>
</section>

<style>
	.recipe {
		margin: 20px;
	}

	h1 {
		width: 100%;
		text-align: left;
	}

	section {
		width: 90%;
		margin: auto;
		font-size: 16px;
	}

	h3 {
		font-size: 1.2rem;
		text-transform: uppercase;
	}
</style>
