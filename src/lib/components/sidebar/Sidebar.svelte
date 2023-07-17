<script lang="ts">
	import { omniboxVisible } from '$lib/stores';
</script>

<div id="sidebar">
	<a href="/">
		<div id="Logo">
			<img src="assets/quantum_text.svg" alt="Quantum" />
		</div>
	</a>

	<div id="upper">
		<ul class="iconlist">
			<a href="/">
				<li>
					<div><img src="assets/home.svg" alt="" /></div>
					Home
				</li>
			</a>
			<li
				on:click={() => {
					omniboxVisible.update((n) => (n = !n));
				}}
				on:keydown={(e) => {
					if (e.key.toLocaleLowerCase() === 's') {
						omniboxVisible.update((n) => (n = !n));
					}
				}}
			>
				<div><img src="assets/search.svg" alt="" /></div>
				Search
			</li>
		</ul>
	</div>

	<div id="lower">
		<ul class="iconlist">
			<li>
				<div><img src="assets/profile.svg" alt="" /></div>
				Profile
			</li>
			<li>
				<div><img src="assets/settings.svg" alt="" /></div>
				Settings
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	#sidebar {
		height: 100%;
		width: 25vw;
		background-color: #ffffff;
		padding: 0px 1.5vh;
		display: flex;
		flex-direction: column;
		a:visited {
			color: initial;
		}

		.iconlist {
			margin: 0 auto;
			li {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				margin: 1vh 0px;
				font-size: 1.5em;
				cursor: pointer;
				div {
					height: 2.5em;
					width: 5vh;
					margin-right: 1vh;
					img {
						height: 100%;
						width: 100%;
					}
				}
			}
		}
	}
	ul {
		padding: 0px;
		width: 100%;
	}
	#lower {
		margin-top: auto;
	}
	li {
		list-style: none;
	}
	#Logo {
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			height: 10vh;
			width: 100%;
		}
	}
</style>
