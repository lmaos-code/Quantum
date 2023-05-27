<script>
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
</script>

<div id="app">
	<Sidebar/>
	<main>
		<slot/>
	</main>
</div>


<style lang="scss">
	#app{
		height: calc(100vh - 4em);
		width: calc(100vw - 4em);
		padding: 2em 2em 2em 0em;
		display: flex;
		flex-direction: row;
	}
	main{
		width: calc(100% - 30px);
		height: calc(100% - 30px);
		border-radius: 25px;
		border: 15px solid;
	}
</style>