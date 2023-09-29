<script lang="ts">
	import Search from '$lib/assets/search.svg';
	import SearchEngine from '$lib/helpers/searchEngine';
	import SearchResult from '$lib/components/search/SearchResult.svelte';
	import type { Stock } from '$lib/models/stock';

	let searchEngine = new SearchEngine();
	let searchResults: Stock[] = [];
	let searchTerm: string = '';

	$: searchEngine.bufferedStockSearch(searchTerm).then((res) => {
		searchResults = res;
	});
</script>

<div id="searchContainer">
	<div id="search">
		<input type="text" placeholder="Search" bind:value={searchTerm} />
		<img src={Search} alt="search icon" />
	</div>
	{#if searchResults.length > 0}
		<div id="searchResults">
			{#each searchResults as result}
				<svelte:component this={SearchResult} {...{ stock: result }} />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	#searchContainer {
		display: flex;
		flex-direction: column;
		align-items: center;

		input {
			background-color: unset;
			border: none;
			color: white;
		}
	}
	#search {
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 500px;
		padding: 10px;
		border-radius: 5px;
		background-color: #353535;
		margin: 10px 0 0;
		img {
			width: 20px;
			height: 20px;
			margin-left: 20px;
		}
	}
	#searchResults {
		width: 100%;
		max-width: 500px;
		padding: 10px;
		border-radius: 5px;
		background-color: #353535;
		cursor: pointer;
		margin: 1px 0;
	}
</style>
