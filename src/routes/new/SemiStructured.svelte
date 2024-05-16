<script lang="ts">
	import { make_event } from '../../lib/events';
	import Textbox from '../../lib/Textbox.svelte';
	import Button from '../../lib/Button.svelte';

	export let value = '';

	const dispatch = make_event<{
		title: string;
		description: string;
		ingredients: string;
		instructions: string;
		servings: string;
		notes: string;
	}>();

	function split() {}
</script>

<Textbox min_height={200} bind:value />
<Button label="Split" on:click={split} />
