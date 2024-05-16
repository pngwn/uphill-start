<script lang="ts">
	export let data: { recipes: any[] };

	$: recipes = data?.recipes;
</script>

<section>
	<h1>Recipes</h1>

	{#if recipes && recipes.length === 0}
		<p>No recipes found.</p>
	{:else}
		{#each recipes as recipe}
			<div>
				<h2><a href="/recipes/{recipe.id}">{recipe.name}</a></h2>
				<p>{recipe.description}</p>
			</div>
		{/each}
	{/if}
</section>

<style>
	h1 {
		width: 100%;
		text-align: left;
	}

	h2 {
		font-size: 1.5rem;
	}

	section {
		width: 90%;
		margin: auto;
		font-size: 16px;
	}
</style>
