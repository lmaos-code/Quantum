<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';

	const metrics = [
		{ label: 'Total Return', value: '+$23,456.78', change: '+18.5%', icon: '📈' },
		{ label: 'Best Performer', value: 'NVDA', change: '+45.2%', icon: '🏆' },
		{ label: 'Worst Performer', value: 'TSLA', change: '-8.3%', icon: '📉' },
		{ label: 'Total Trades', value: '234', change: '+12 this week', icon: '💼' }
	];

	const sectors = [
		{ name: 'Technology', allocation: 45, value: 56469.3, color: 'bg-purple-600' },
		{ name: 'Healthcare', allocation: 20, value: 25097.46, color: 'bg-blue-600' },
		{ name: 'Finance', allocation: 15, value: 18823.1, color: 'bg-green-600' },
		{ name: 'Consumer', allocation: 12, value: 15058.48, color: 'bg-orange-600' },
		{ name: 'Other', allocation: 8, value: 10039.0, color: 'bg-gray-600' }
	];
</script>

<div class="flex min-h-screen bg-gray-100">
	<Sidebar />

	<main class="flex-1 ml-72 p-8">
		<div class="max-w-7xl mx-auto">
			<h1 class="text-4xl font-bold mb-8">Analytics</h1>

			<!-- Key Metrics -->
			<div class="grid grid-cols-4 gap-6 mb-8">
				{#each metrics as metric (metric.label)}
					<div class="bg-white rounded-2xl p-6">
						<div class="flex items-center justify-between mb-3">
							<span class="text-3xl">{metric.icon}</span>
							<span class="text-sm text-green-600">{metric.change}</span>
						</div>
						<div class="text-gray-600 text-sm mb-1">{metric.label}</div>
						<div class="text-2xl font-bold">{metric.value}</div>
					</div>
				{/each}
			</div>

			<div class="grid grid-cols-2 gap-6">
				<!-- Sector Allocation -->
				<div class="bg-white rounded-2xl p-6">
					<h2 class="text-2xl font-bold mb-6">Sector Allocation</h2>

					<div class="space-y-4">
						{#each sectors as sector (sector.name)}
							<div>
								<div class="flex justify-between text-sm mb-2">
									<span class="font-medium">{sector.name}</span>
									<span class="text-gray-600">{sector.allocation}%</span>
								</div>
								<div class="w-full bg-gray-200 rounded-full h-3">
									<div
										class="{sector.color} h-3 rounded-full transition-all"
										style="width: {sector.allocation}%"
									></div>
								</div>
								<div class="text-right text-sm text-gray-500 mt-1">
									${sector.value.toLocaleString()}
								</div>
							</div>
						{/each}
					</div>

					<!-- Pie Chart Visualization -->
					<div class="mt-8 flex justify-center">
						<div class="relative w-48 h-48">
							<svg viewBox="0 0 100 100" class="transform -rotate-90">
								{#each sectors as sector, sectorIndex (sector.name)}
									{@const offset = sectors
										.slice(0, sectorIndex)
										.reduce((sum, s) => sum + s.allocation, 0)}
									<circle
										cx="50"
										cy="50"
										r="40"
										fill="none"
										stroke="currentColor"
										class={sector.color.replace('bg-', 'text-')}
										stroke-width="20"
										stroke-dasharray="{sector.allocation * 2.51} {100 * 2.51}"
										stroke-dashoffset={-offset * 2.51}
									/>
								{/each}
							</svg>
						</div>
					</div>
				</div>

				<!-- Performance Over Time -->
				<div class="bg-white rounded-2xl p-6">
					<h2 class="text-2xl font-bold mb-6">Monthly Performance</h2>

					<div class="h-96 flex items-end justify-around gap-2">
						{#each Array(12) as _month, monthIndex (monthIndex)}
							{@const value = Math.random() * 100 - 20}
							<div class="flex flex-col items-center flex-1">
								<div
									class="w-full rounded-t transition-all {value >= 0
										? 'bg-green-500'
										: 'bg-red-500'}"
									style="height: {Math.abs(value)}%"
								></div>
								{#if value < 0}
									<div
										class="w-full bg-red-500 rounded-b transition-all"
										style="height: {Math.abs(value)}%"
									></div>
								{/if}
							</div>
						{/each}
					</div>

					<div class="flex justify-between text-sm text-gray-500 mt-4">
						{#each ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as month (month)}
							<span>{month}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
