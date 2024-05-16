<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: void }>();

	export let label: string = 'Submit';
</script>

<button on:click={() => dispatch('click')}>{label}</button>

<style>
	button {
		border: none;
		padding: 0;
		margin: 0;
		padding: 10px 16px 7px 16px;
		background-color: #000;
		color: #fff;
		font-weight: bold;
		font-size: 1.2rem;
		text-transform: uppercase;
		margin: 0 10px 10px 10px;
		cursor: pointer;
	}

	button:hover {
		color: yellow;
	}

	button:active {
		padding: 12px 16px 5px 16px;
	}
</style>
