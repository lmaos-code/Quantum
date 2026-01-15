<script lang="ts">
	export let stocks = [
		{ symbol: 'AAPL', name: 'Apple Inc.', price: 133.15, change: 0.39, trending: 'up' },
		{ symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2789.45, change: 1.23, trending: 'up' },
		{ symbol: 'MSFT', name: 'Microsoft Corp.', price: 289.67, change: -0.45, trending: 'down' },
		{ symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3234.87, change: 2.1, trending: 'up' },
		{ symbol: 'TSLA', name: 'Tesla Inc.', price: 678.9, change: -1.2, trending: 'down' },
		{ symbol: 'META', name: 'Meta Platforms', price: 334.56, change: 0.87, trending: 'up' },
		{ symbol: 'NVDA', name: 'NVIDIA Corp.', price: 456.78, change: 3.45, trending: 'up' },
		{ symbol: 'NFLX', name: 'Netflix Inc.', price: 567.89, change: -0.34, trending: 'down' }
	];
</script>

<div class="bg-white rounded-2xl p-6">
	<h2 class="text-2xl font-bold mb-6">Watchlist</h2>

	<div class="space-y-3">
		{#each stocks as stock (stock.symbol)}
			<a
				href="/?symbol={stock.symbol}"
				data-sveltekit-preload-data="hover"
				class="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition border border-gray-200"
			>
				<div class="flex items-center gap-4">
					<div
						class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center font-bold text-purple-700"
					>
						{stock.symbol.charAt(0)}
					</div>
					<div>
						<div class="font-medium">{stock.symbol}</div>
						<div class="text-sm text-gray-500">{stock.name}</div>
					</div>
				</div>

				<div class="text-right">
					<div class="font-medium">${stock.price.toFixed(2)}</div>
					<div class="text-sm {stock.change >= 0 ? 'text-green-600' : 'text-red-600'}">
						{stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
