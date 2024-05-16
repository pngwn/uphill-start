<script lang="ts">
	import { text_area_resize } from './actions';

	// export let value: Record<string, any>[] = [];
	export let min_height: number | undefined = undefined;
	export let margin = true;

	export let items: any[] = [];

	let show = false;
	export let value: any = {};

	function handle_click(i: number) {
		value = items[i];
	}
</script>

<div class="wrap">
	<textarea
		use:text_area_resize={{ min_height }}
		class:unmargined={!margin}
		on:click={() => (show = true)}>{value?.name || items[0]?.name || ''}</textarea
	>
	<div class="dropdown" class:show={show && items.length > 0}>
		{#if show && items.length > 0}
			{#each items as item, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="item" on:click={() => (handle_click(i), (show = false))}>
					{item.name}
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	textarea:focus {
		box-shadow:
			inset 0 0 0 4px yellow,
			inset 0 0 0 6px #333;
	}

	/* Set your custom monospace font */

	textarea {
		width: calc(100% - 20px);
		resize: none;
		border-radius: 0;
		border: 2px solid #000;
		font-family: monospace;
		line-height: 1.5;
		font-size: 16px;
		font-weight: 100;
		padding: 0.75rem 1rem;
		outline: none;
		margin-top: 0;
		margin: 10px;
		cursor: pointer;
	}

	.unmargined {
		margin-top: 0;
	}

	.wrap {
		position: relative;
	}

	.dropdown {
		position: absolute;
		top: 100%;

		left: 16px;
		transform: translateY(-21px);
		background-color: #fff;
		border: 2px solid #000;

		/* width: 100%; */
		right: 16px;
		background-color: #fff;
		opacity: 0;
	}

	.show {
		z-index: 9;
		opacity: 1;
	}

	.item {
		position: relative;
		font-family: monospace;
		line-height: 1.5;
		font-size: 16px;
		font-weight: 100;
		padding: 0.75rem 1rem;
		outline: none;
		margin-top: 0;
		/* margin: 10px; */

		background: #fff;
		cursor: pointer;
	}

	.item:hover {
		background: #000;
		color: #fff;
	}
</style>
