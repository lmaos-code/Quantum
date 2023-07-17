<script lang="ts">
	export let showFloat: Boolean;
</script>

<div id="omnibox" class:float={showFloat}>
	<div id="search">
		<input type="text" placeholder="Search" />
		<div id="search-icon">
			<img src="assets/search.svg" alt="" />
		</div>
	</div>
</div>

<style lang="scss">
	#omnibox {
		height: 100vh;
		width: 100vw;
		display: none;
		#search {
			margin: 30% 0 auto;
			width: 30vw;
			display: flex;
			background-color: white;
			padding: 1em;
			border-radius: 15px;
			box-shadow: #00000055 0px 0px 8px -4px;
			input {
				border: none;
				padding: 0.5em;
				width: 100%;
			}
		}
	}
	.float {
		position: absolute;
		display: flex !important;
		justify-content: center;
		z-index: 10;
	}
</style>
