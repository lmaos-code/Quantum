<script lang="ts">
	export let symbol: string = 'AAPL';

	const timeRanges = ['1d', '5d', '2w', '1m', '6m', '1y', '5y', 'max'];
	let activeRange = '1m';

	// Mock chart data
	const chartData = {
		open: 13101.48,
		high: 13504.4,
		low: 13101.3,
		close: 13112.5,
		change: 7.53
	};
</script>

<div class="bg-white rounded-2xl p-6">
	<div class="flex items-center justify-between mb-6">
		<div class="flex items-center gap-4">
			<span class="text-gray-500">📊 Tools</span>
		</div>
		<div class="flex gap-2">
			{#each timeRanges as range (range)}
				<button
					class="px-3 py-1 rounded transition {activeRange === range
						? 'bg-purple-100 text-purple-700'
						: 'text-gray-500 hover:bg-gray-100'}"
					on:click={() => (activeRange = range)}
				>
					{range}
				</button>
			{/each}
		</div>
		<div class="flex gap-2 text-gray-400">
			<button class="p-2 hover:bg-gray-100 rounded">📷</button>
			<button class="p-2 hover:bg-gray-100 rounded">⚙️</button>
			<button class="p-2 hover:bg-gray-100 rounded">⟳</button>
		</div>
	</div>

	<!-- Chart Area (Mock visualization) -->
	<div class="relative h-96 bg-gray-50 rounded-lg mb-4 overflow-hidden">
		<!-- Grid lines -->
		<div class="absolute inset-0 flex flex-col justify-between p-4">
			{#each Array(6) as _gridLine, gridIndex (gridIndex)}
				<div class="border-t border-gray-200"></div>
			{/each}
		</div>

		<!-- Mock candlestick chart representation -->
		<div class="absolute inset-0 flex items-end justify-around p-8">
			{#each Array(30) as _candlestick, candleIndex (candleIndex)}
				<div class="flex flex-col items-center justify-end" style="width: 2%;">
					<!-- Candlestick body -->
					<div
						class="w-full rounded transition hover:opacity-80"
						style="height: {Math.random() * 80 + 20}%; background: {Math.random() > 0.5
							? '#8b5cf6'
							: '#6366f1'};"
					></div>
					<!-- Volume bar -->
					<div class="w-full bg-gray-300 mt-1" style="height: {Math.random() * 20 + 5}px;"></div>
				</div>
			{/each}
		</div>

		<!-- Current price indicator -->
		<div
			class="absolute right-4 top-1/3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
		>
			140.91
		</div>
	</div>

	<!-- Chart Data Summary -->
	<div class="bg-gray-50 rounded-lg p-4 grid grid-cols-5 gap-4 text-sm">
		<div>
			<div class="text-gray-500 mb-1">Open</div>
			<div class="font-medium">{chartData.open.toFixed(2)}</div>
		</div>
		<div>
			<div class="text-gray-500 mb-1">High</div>
			<div class="font-medium">{chartData.high.toFixed(2)}</div>
		</div>
		<div>
			<div class="text-gray-500 mb-1">Low</div>
			<div class="font-medium">{chartData.low.toFixed(2)}</div>
		</div>
		<div>
			<div class="text-gray-500 mb-1">Close</div>
			<div class="font-medium">{chartData.close.toFixed(2)}</div>
		</div>
		<div>
			<div class="text-gray-500 mb-1">% Change</div>
			<div class="font-medium text-green-600">{chartData.change}%</div>
		</div>
	</div>

	<!-- Volume Chart -->
	<div class="mt-4 h-16 bg-gray-50 rounded-lg flex items-end justify-around px-4 py-2">
		{#each Array(50) as _bar, volumeIndex (volumeIndex)}
			<div
				class="bg-purple-300 rounded-t"
				style="width: 1.5%; height: {Math.random() * 100}%;"
			></div>
		{/each}
	</div>

	<!-- Timeline -->
	<div class="flex justify-between text-xs text-gray-500 mt-2 px-4">
		<span>Jul 19</span>
		<span>Aug 2</span>
		<span>Aug 16</span>
		<span>Aug 30</span>
		<span>Sep 13</span>
		<span>Sep 27</span>
		<span>Oct 11</span>
	</div>
</div>
