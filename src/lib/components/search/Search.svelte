<script lang="ts">
	export let showFloat: Boolean;
</script>

<div id="omnibox" class:float={showFloat}>
	<div id="search">
		<input type="text" placeholder="Search" />
		<!--<div id="search-icon">
			<img src="assets/search.svg" alt="" />
		</div>-->
	</div>
</div>

<style>
	#omnibox {
		height: 100vh;
		width: 100vw;
		display: none;
	}
	.float {
		position: fixed;
		top: 0;
		display: flex !important;
	}
</style>
