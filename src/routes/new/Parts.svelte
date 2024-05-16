<script lang="ts">
	import { make_event } from '../../lib/events';
	import Textbox from '../../lib/Textbox.svelte';
	import Button from '../../lib/Button.svelte';

	export let title = '';

	export let servings = '';
	export let ingredients = '';
	export let description = '';
	export let instructions = '';
	export let notes = '';

	const dispatch = make_event<Record<string, any>>();

	async function make_request() {}
</script>

<h2>Title</h2>
<Textbox bind:value={title} margin={false} />

<h2>description</h2>
<Textbox min_height={200} bind:value={description} margin={false} />

<h2>Servings</h2>
<Textbox bind:value={servings} margin={false} />

<h2>Ingredients</h2>
<Textbox min_height={200} bind:value={ingredients} margin={false} />

<h2>Method</h2>
<Textbox min_height={200} bind:value={instructions} margin={false} />

<h2>Notes</h2>
<Textbox min_height={200} bind:value={notes} margin={false} />

<Button label="Analyse ingredients" on:click={() => make_request()} />

<style>
	h2 {
		margin: 10px 10px 5px 10px;
		padding-bottom: 0;
		font-weight: bold;
		text-transform: uppercase;
	}
</style>
