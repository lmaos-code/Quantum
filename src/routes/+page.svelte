<script>
</script>

<div id="wrapper">
	<div id="greeting">
		<h1>Good Day.</h1>
		<h2>Welcome to Quantum</h2>
		<p>Here is your News Rundown</p>
	</div>
	<div id="content">lower</div>
</div>

<style lang="scss">
	#wrapper {
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;

		& > * {
			padding: 2em;
		}

		#greeting {
			background-color: #000000;
			color: white;
		}
		#content {
			flex-grow: 1;
			background-color: #eff1f5;
		}
	}
	h1 {
		color: white;
	}
</style>
