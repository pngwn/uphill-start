<script lang="ts">
	import TabNav from '../../lib/TabNav.svelte';
	import Unstructured from './Unstructured.svelte';
	import SemiStructured from './SemiStructured.svelte';
	import Parts from './Parts.svelte';
	import Ingredients from './Ingredients.svelte';
	import IngredientSearch from './IngredientSearch.svelte';

	const sections = ['Unstructured', 'Semi-structured', 'Parts', 'Ingredients', 'Ingredient Search'];

	let current_section: (typeof sections)[number] = sections[0];

	let semi_structured = '';
	let parts = {
		title: '',
		description: '',
		servings: '',
		ingredients: '',
		instructions: '',
		notes: ''
	};
	let ingredients: Record<string, any>[] = [];

	async function handle_done(e: CustomEvent) {
		const data = {
			name: parts.title,
			instructions: parts.instructions,
			ingredients: parts.ingredients,
			servings: parts.servings,
			notes: parts.notes,
			nutrition: e.detail,
			description: parts.description
		};

		const r = fetch('/api/sql/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>New Recipe</h1>

	<TabNav {sections} bind:current_section />

	<div>
		<div class="tab-container">
			{#if current_section === 'Unstructured'}
				<Unstructured
					on:data={(e) => ((current_section = 'Semi-structured'), (semi_structured = e.detail))}
				/>
			{:else if current_section === 'Semi-structured'}
				<SemiStructured
					value={semi_structured}
					on:data={(e) => ((current_section = 'Parts'), (parts = e.detail))}
				/>
			{:else if current_section === 'Parts'}
				<Parts
					title={parts.title}
					description={parts.description}
					servings={parts.servings}
					ingredients={parts.ingredients}
					instructions={parts.instructions}
					notes={parts.notes}
					on:data={({ detail }) => (
						(current_section = 'Ingredients'), (ingredients = [...ingredients, detail])
					)}
				/>
			{:else if current_section === 'Ingredients'}
				<Ingredients {ingredients} on:done={() => (current_section = 'Ingredient Search')} />
			{:else if current_section === 'Ingredient Search'}
				<IngredientSearch {ingredients} on:data={handle_done} />
			{/if}
		</div>
	</div>
</section>

<style>
	h1 {
		width: 100%;
		text-align: left;
	}

	section {
		width: 90%;
		margin: auto;
	}

	.tab-container {
		border: 1px solid #000;
	}
</style>
