<script lang="ts">
	import { PUBLIC_MEILISEARCH_API_KEY } from '$env/static/public';
	import { make_event } from '../../lib/events';
	import Button from '../../lib/Button.svelte';
	import Dropdown from '$lib/Dropdown.svelte';

	export let ingredients: Record<string, any>[] = [];
	const dispatch = make_event<any>();

	async function search_ingredient(d: string, i: number) {
		const response = await fetch(
			`https://ms-18647221e257-3070.lon.meilisearch.io/indexes/nutrition/search`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${PUBLIC_MEILISEARCH_API_KEY}`
				},
				body: JSON.stringify({
					q: d
				})
			}
		);

		const data = await response.json();

		searched_ingredients[i].searches = data.hits.slice(0, 10);
	}

	$: searched_ingredients = ingredients.map((ingredient) => ({
		ingredient: ingredient,
		searches: [],
		selected: null as any
	}));

	$: {
		ingredients.forEach((ingredient, i) => {
			if (ingredient.name) {
				search_ingredient(ingredient.name, i);
			}
		});
	}

	let values: any[] = [];

	function handle_save() {
		const new_ingredients = searched_ingredients.map((ingredient, i) => ({
			name: ingredient.ingredient.name,
			quantity: ingredient.ingredient.quantity,
			unit: ingredient.ingredient.unit,
			nutrition: values[i]?.id || ingredient.searches[0] || null
		}));

		dispatch('data', new_ingredients);
	}
</script>

{#each searched_ingredients as ingredient, i}
	<Dropdown items={ingredient.searches} bind:value={values[i]} />
{/each}

<Button label="Save" on:click={handle_save} />

<style>
</style>
