<script lang="ts">
	export let details = {
		dayRange: { min: 128.46, max: 130.89 },
		weekRange52: { min: 86.29, max: 145.09 },
		volume: 91815026,
		avgVolume: 88231361,
		marketCap: '2.17T',
		beta: 1.21,
		peRatio: 29.25,
		eps: 4.45,
		forwardDividend: 0.88,
		exDividendDate: '2021/05/07'
	};

	let buyingPrice = 144.85;
	let sellingPrice = 144.93;
</script>

<div class="bg-white rounded-2xl p-6">
	<h2 class="text-2xl font-bold mb-6">Details</h2>

	<div class="space-y-4 mb-8">
		<div class="flex justify-between items-center">
			<span class="text-gray-600">Day's Range</span>
			<span class="font-medium">{details.dayRange.min} - {details.dayRange.max}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">52 Week Range</span>
			<span class="font-medium">{details.weekRange52.min} - {details.weekRange52.max}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">Volume</span>
			<span class="font-medium">{details.volume.toLocaleString()}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">Avg. Volume</span>
			<span class="font-medium">{details.avgVolume.toLocaleString()}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">Market Cap</span>
			<span class="font-medium">{details.marketCap}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">Beta (5Y Monthly)</span>
			<span class="font-medium">{details.beta}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">PE Ratio (TTM)</span>
			<span class="font-medium">{details.peRatio}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">EPS (TTM)</span>
			<span class="font-medium">{details.eps}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">Forward Dividend</span>
			<span class="font-medium">{details.forwardDividend}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-gray-600">Ex-Dividend Date</span>
			<span class="font-medium">{details.exDividendDate}</span>
		</div>
	</div>

	<div class="border-t pt-6">
		<div class="flex justify-between mb-4">
			<div class="text-center flex-1">
				<div class="text-gray-600 mb-2">Buying</div>
				<div class="text-2xl font-bold">{buyingPrice.toFixed(2)}</div>
			</div>
			<div class="text-center flex-1">
				<div class="text-gray-600 mb-2">Selling</div>
				<div class="text-2xl font-bold">{sellingPrice.toFixed(2)}</div>
			</div>
		</div>

		<div class="flex gap-3">
			<button
				class="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition"
			>
				Buy
			</button>
			<button
				class="flex-1 bg-purple-100 text-purple-700 py-3 px-6 rounded-lg font-medium hover:bg-purple-200 transition"
			>
				Sell
			</button>
		</div>
	</div>
</div>
