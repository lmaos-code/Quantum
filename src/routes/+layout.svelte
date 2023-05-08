<script>
	import Sidebar from '$lib/sidebar/+page.svelte';
</script>
<nav>
	<a href="/">Quantum</a>

</nav>

<main>
	<div class="sidebar">
		<Sidebar ></Sidebar>
	</div>
	<slot/>
</main>


<style lang="scss">
	nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		margin: 0.5em;
		border-radius: 5px;
		background-color: #152a43;
		color: #fff;
		height: 3em;
		
		a{
			color: #fff;
			text-decoration: none;
			font-size: 1.5rem;
			font-weight: 700;
		}
	}
	main{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem;
		margin: 0.5em;
		border-radius: 5px;
		background-color: #152a43;
		color: #fff;
		height: calc(100vh - 3em - 6rem);	
	}
	.sidebar{
		width: 20%;
		padding:1em
	}

</style>