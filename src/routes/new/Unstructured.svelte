<script lang="ts">
	import { PUBLIC_HF_API_KEY } from '$env/static/public';

	import { make_event } from '../../lib/events';

	import Textbox from '../../lib/Textbox.svelte';
	import Button from '../../lib/Button.svelte';

	const dispatch = make_event<string>();

	export let value = '';

	async function make_request() {}
</script>

<Textbox min_height={200} bind:value />

<Button label="Reformat" on:click={make_request} />
