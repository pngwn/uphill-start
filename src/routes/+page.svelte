<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Recipes</h1>

	<h2>
		<a href="/new" target="_blank" rel="noopener noreferrer">Add</a>
	</h2>
	<h2>
		<a href="/recipes" target="_blank" rel="noopener noreferrer">View</a>
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 50px;
	}

	h2 {
		text-align: center;
		margin-top: 10px;
	}

	h2 a {
		color: cadetblue;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		line-height: 1rem;
	}

	h1 {
		width: 100%;
	}
</style>
