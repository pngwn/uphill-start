<script lang="ts">
	import { make_event } from '../../lib/events';
	import Textbox from '../../lib/Textbox.svelte';
	import Button from '../../lib/Button.svelte';

	export let ingredients: Record<string, any>[] = [];
	const dispatch = make_event<{ done?: void }>();
</script>

{#each ingredients as ingredient}
	<div class="contain">
		<Textbox bind:value={ingredient.name} />
		<Textbox bind:value={ingredient.quantity} />
		<Textbox bind:value={ingredient.unit} />
	</div>
{/each}

<Button label="Confirm" on:click={() => dispatch('done')} />

<style>
	.contain {
		display: grid;
		grid-template-columns: 1fr 150px 150px;
	}
</style>
