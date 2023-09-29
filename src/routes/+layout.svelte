<script>
	import '../style.scss';
	import Topbar from '$lib/components/topbar/Topbar.svelte';
</script>

<div id="app">
	<Topbar />
	<slot />
</div>

<style lang="scss">
	#app {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #393939;
	}
</style>
