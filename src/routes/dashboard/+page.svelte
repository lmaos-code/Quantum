<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import StockList from '$lib/components/StockList.svelte';
</script>

<div class="flex min-h-screen bg-gray-100">
	<Sidebar />

	<main class="flex-1 ml-72 p-8">
		<div class="max-w-7xl mx-auto">
			<h1 class="text-4xl font-bold mb-8">Dashboard</h1>

			<div class="grid grid-cols-3 gap-6">
				<div class="col-span-2">
					<Portfolio />
				</div>
				<div class="col-span-1">
					<StockList />
				</div>
			</div>
		</div>
	</main>
</div>
