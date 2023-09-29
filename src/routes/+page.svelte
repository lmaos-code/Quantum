<script>
	import Search from '$lib/components/search/Search.svelte';
</script>

<h1>Welcome to Quantum</h1>

Find your next stock to invest in!
<div class="centered">
	<Search />
</div>

<section>
	Your Watchlist:
	<ul>
		<li><a href="/watchlist/1">Watchlist 1</a></li>
		<li><a href="/watchlist/2">Watchlist 2</a></li>
		<li><a href="/watchlist/3">Watchlist 3</a></li>
	</ul>
</section>

<section>
	<h3>Todays News Stories:</h3>

	<ul>
		<li><a href="/watchlist/1">News Story</a></li>
		<li><a href="/watchlist/2">News Story</a></li>
		<li><a href="/watchlist/3">News Story</a></li>
	</ul>
</section>

<style>
	.centered {
		display: flex;
		justify-content: center;
	}
</style>
