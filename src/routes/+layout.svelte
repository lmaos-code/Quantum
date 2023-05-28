<script>
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Search from '$lib/components/search/Search.svelte';
	import { omniboxVisible } from '$lib/stores';
	import '../style.scss';

	let showFloat = false;

	omniboxVisible.subscribe((value) => (showFloat = value));
</script>

<div id="app">
	<Sidebar />
	<Search bind:showFloat />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	#app {
		height: calc(100vh - 3vh);
		width: calc(
			100vw - 1.5vh
		); // this is needed for visual balance. The sidebar has a 1.5vh padding on the left,
		//so this will compensate for that.
		padding: 1.5vh 1.5vh 1.5vh 0px;
		display: flex;
		flex-direction: row;
	}
	main {
		width: 100%;
		height: 100%;
		clip-path: inset(0% 0% 0% 0% round 15px);
		& > * {
			display: flex;
		}
	}
</style>
