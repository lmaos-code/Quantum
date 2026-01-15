<script lang="ts">
	let portfolioValue = 125487.32;
	let dailyChange = 2341.45;
	let dailyChangePercent = 1.9;

	let holdings = [
		{
			symbol: 'AAPL',
			name: 'Apple Inc.',
			shares: 250,
			avgPrice: 128.45,
			currentPrice: 133.15,
			value: 33287.5
		},
		{
			symbol: 'GOOGL',
			name: 'Alphabet Inc.',
			shares: 15,
			avgPrice: 2650.0,
			currentPrice: 2789.45,
			value: 41841.75
		},
		{
			symbol: 'MSFT',
			name: 'Microsoft Corp.',
			shares: 100,
			avgPrice: 275.3,
			currentPrice: 289.67,
			value: 28967.0
		},
		{
			symbol: 'TSLA',
			name: 'Tesla Inc.',
			shares: 30,
			avgPrice: 650.0,
			currentPrice: 678.9,
			value: 20367.0
		}
	];
</script>

<div class="space-y-6">
	<!-- Portfolio Summary -->
	<div class="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl p-8">
		<div class="mb-2 text-purple-200">Total Portfolio Value</div>
		<div class="text-5xl font-bold mb-4">
			${portfolioValue.toLocaleString('en-US', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			})}
		</div>
		<div class="flex items-center gap-2">
			<span class="text-2xl">↗</span>
			<span class="text-xl font-medium">
				+${dailyChange.toLocaleString('en-US', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				})} (+{dailyChangePercent}%)
			</span>
			<span class="text-purple-200 ml-2">Today</span>
		</div>
	</div>

	<!-- Holdings -->
	<div class="bg-white rounded-2xl p-6">
		<h2 class="text-2xl font-bold mb-6">Your Holdings</h2>

		<div class="space-y-4">
			{#each holdings as holding (holding.symbol)}
				{@const gain = (holding.currentPrice - holding.avgPrice) * holding.shares}
				{@const gainPercent = ((holding.currentPrice - holding.avgPrice) / holding.avgPrice) * 100}

				<div class="border border-gray-200 rounded-lg p-4">
					<div class="flex items-center justify-between mb-3">
						<div class="flex items-center gap-3">
							<div
								class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center font-bold text-purple-700 text-lg"
							>
								{holding.symbol.charAt(0)}
							</div>
							<div>
								<div class="font-bold text-lg">{holding.symbol}</div>
								<div class="text-sm text-gray-500">{holding.name}</div>
							</div>
						</div>
						<div class="text-right">
							<div class="font-bold text-lg">${holding.value.toLocaleString()}</div>
							<div class="text-sm {gain >= 0 ? 'text-green-600' : 'text-red-600'}">
								{gain >= 0 ? '+' : ''}${gain.toFixed(2)} ({gainPercent >= 0
									? '+'
									: ''}{gainPercent.toFixed(2)}%)
							</div>
						</div>
					</div>

					<div class="grid grid-cols-3 gap-4 pt-3 border-t border-gray-100 text-sm">
						<div>
							<div class="text-gray-500">Shares</div>
							<div class="font-medium">{holding.shares}</div>
						</div>
						<div>
							<div class="text-gray-500">Avg. Price</div>
							<div class="font-medium">${holding.avgPrice.toFixed(2)}</div>
						</div>
						<div>
							<div class="text-gray-500">Current Price</div>
							<div class="font-medium">${holding.currentPrice.toFixed(2)}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Performance Chart -->
	<div class="bg-white rounded-2xl p-6">
		<h2 class="text-2xl font-bold mb-6">Performance</h2>

		<div
			class="h-64 bg-gradient-to-t from-purple-50 to-transparent rounded-lg flex items-end justify-around p-4"
		>
			{#each Array(12) as _, index (index)}
				<div class="bg-purple-600 rounded-t w-8" style="height: {Math.random() * 80 + 20}%;"></div>
			{/each}
		</div>

		<div class="flex justify-between text-sm text-gray-500 mt-4">
			<span>Jan</span>
			<span>Feb</span>
			<span>Mar</span>
			<span>Apr</span>
			<span>May</span>
			<span>Jun</span>
			<span>Jul</span>
			<span>Aug</span>
			<span>Sep</span>
			<span>Oct</span>
			<span>Nov</span>
			<span>Dec</span>
		</div>
	</div>
</div>
