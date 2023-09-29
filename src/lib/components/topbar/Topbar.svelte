<script>
	import QuantumLogo from '$lib/assets/quantum.svg';
</script>

<div id="topbar">
	<a href="/">
		<div id="logoText"><img src={QuantumLogo} alt="logo" id="logo" /> Quantum</div>
	</a>
	<div>Mini Search</div>
</div>

<style lang="scss">
	#topbar {
		width: 100%;
		height: 3em;
		background-color: #2c2c2c;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		#logoText {
			display: flex;
			align-items: center;
			color: white;
			font-size: 1.5em;
			font-weight: 600;
			height: 2em;
			#logo {
				height: 1em;
				margin: 0 0.5em;
			}
		}
	}
</style>
