<script lang="ts">
	export let symbol: string = 'AAPL';
	export let companyName: string = 'Apple Inc.';
	export let currentPrice: number = 133.15;
	export let priceChange: number = 0.51;
	export let percentChange: number = 0.39;
	export let preMarket: number = 130.35;
	export let previousClose: number = 127.35;
	export let openPrice: number = 130.37;

	const tabs = ['Interactive Chart', 'Market Data', 'Historical', 'Performance', 'News'];
	let activeTab = 'Interactive Chart';
</script>

<div class="bg-black text-white p-6 rounded-t-2xl">
	<!-- Navigation Tabs -->
	<div class="flex items-center gap-6 mb-8 border-b border-gray-800">
		<button class="p-2 hover:bg-gray-800 rounded-lg transition">←</button>
		{#each tabs as tab (tab)}
			<button
				class="py-3 px-1 border-b-2 transition {activeTab === tab
					? 'border-white text-white'
					: 'border-transparent text-gray-400 hover:text-white'}"
				on:click={() => (activeTab = tab)}
			>
				{tab}
			</button>
		{/each}
		<div class="ml-auto flex gap-3">
			<button class="px-4 py-2 text-gray-400 hover:text-white transition">Add to watchlist</button>
			<button class="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
				>Save data</button
			>
		</div>
	</div>

	<!-- Company Header -->
	<div class="flex items-center gap-3 mb-6">
		<div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">🍎</div>
		<h1 class="text-4xl font-bold">{companyName}</h1>
	</div>

	<!-- Price Info -->
	<div class="flex gap-8">
		<!-- Current Price Card -->
		<div class="bg-white text-black rounded-2xl p-6 flex-shrink-0" style="width: 320px;">
			<div class="text-sm text-gray-500 mb-2">{symbol}</div>
			<div class="text-4xl font-bold mb-3">${currentPrice.toFixed(2)}</div>
			<div class="flex items-center gap-2">
				<span class="text-green-600">↗</span>
				<span class="text-green-600 font-medium">
					+{priceChange.toFixed(2)} (+{percentChange.toFixed(2)}%)
				</span>
			</div>
		</div>

		<!-- Market Data -->
		<div class="flex-1 bg-white text-black rounded-2xl p-6">
			<div class="flex gap-8">
				<div class="flex-1">
					<div class="text-sm text-gray-500 mb-1 flex items-center gap-2">
						Pre-market <span class="text-xs">🕐</span>
					</div>
					<div class="text-2xl font-bold">${preMarket.toFixed(2)}</div>
					<div class="text-sm text-red-600 mt-1">-0.98 (-0.75%)</div>
				</div>
				<div class="flex-1">
					<div class="text-sm text-gray-500 mb-1">Previous Close</div>
					<div class="text-2xl font-bold">${previousClose.toFixed(2)}</div>
					<div class="text-sm text-gray-500 mt-1">June 16, 4:00pm</div>
				</div>
				<div class="flex-1">
					<div class="text-sm text-gray-500 mb-1">Open</div>
					<div class="text-2xl font-bold">${openPrice.toFixed(2)}</div>
					<div class="text-sm text-gray-500 mt-1">June 17, 9:30pm</div>
				</div>
			</div>
		</div>
	</div>
</div>
