<script lang="ts">
	import { text_area_resize } from './actions';

	export let value = '';
	export let min_height: number | undefined = undefined;
	export let margin = true;
</script>

<textarea bind:value use:text_area_resize={{ value, min_height }} class:unmargined={!margin}
></textarea>

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
		font-family: 'Berkeley Mono', monospace;
		line-height: 1.5;
		font-size: 16px;
		font-weight: 100;
		padding: 0.75rem 1rem;
		outline: none;
		margin-top: 0;
		margin: 10px;
	}

	.unmargined {
		margin-top: 0;
	}
</style>
