<script lang="ts">
	export let sections: string[];
	export let current_section: string = sections[0];
</script>

<ul class="section-selector">
	{#each sections as section}
		<li class:selected={current_section === section}>
			<button on:click={() => (current_section = section)}>{section}</button>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		list-style: none;
		padding: 0;
		gap: 1px;
		padding: 5px;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.selected {
		opacity: 1;
	}

	ul li {
		opacity: 0.5;
	}

	button {
		border: none;
		padding: 0;
		margin: 0;
		padding: 5px 8px 1px 8px;
		background-color: #000;
		color: #fff;
		font-weight: bold;
		font-size: 0.9rem;
		text-transform: uppercase;
	}
</style>
