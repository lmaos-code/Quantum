
<div id="sidebar">
	<a href="/">
		<div id="Logo">
			<img src="assets/quantum_text.svg" alt="Quantum">	
		</div>
	</a>

	<div id="upper">
		<ul class="iconlist">
			<li><div><img src="assets/search.svg" alt=""></div>Search</li>
		</ul>
	</div>

	<div id="lower"> 
		<ul class="iconlist">
			<li><div><img src="assets/home.svg" alt=""></div>Home</li>
			<li><div><img src="assets/profile.svg" alt=""></div>Profile</li>
			<li><div><img src="assets/settings.svg" alt=""></div>Settings</li>
		</ul>
	</div>


</div>


<style lang=scss>
	#sidebar{
		height: 100%;
		width: 25vw;
		background-color: #ffffff;
		padding: 0px 1em;

		display: flex;
		flex-direction: column;

		#upper{
			width:80%;
			margin: 0 auto;
		}

	}
	ul{
		padding: 0px;
		width: 100%;
	}
	li{
		list-style: none;
	}
	#Logo{
		display: flex;
		align-items: center;
		justify-content: center;
		img{
			
		height: 10vh;
		width: 100%;
		}
	}
</style>