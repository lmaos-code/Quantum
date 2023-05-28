<script>
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import '../style.scss';
</script>

<div id="app">
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	#app {
		height: calc(100vh - 3vh);
		width: calc(
			100vw - 1.5vh
		); // this is needed for visual balance. The sidebar has a 1vh padding on the left,
		//so this will compensate for that.
		padding: 1.5vh 1.5vh 1.5vh 0px;
		display: flex;
		flex-direction: row;
	}
	main {
		width: calc(100% - 30px);
		height: calc(100% - 30px);
		border-radius: 25px;
		border: 15px solid;
	}
</style>
