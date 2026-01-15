<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';

	const newsItems = [
		{
			id: 1,
			title: 'Apple Announces Record Q4 Earnings',
			source: 'CNBC',
			time: '2 hours ago',
			category: 'Earnings',
			image: '📱',
			sentiment: 'positive'
		},
		{
			id: 2,
			title: 'Tech Stocks Rally on Federal Reserve Comments',
			source: 'Bloomberg',
			time: '4 hours ago',
			category: 'Markets',
			image: '📊',
			sentiment: 'positive'
		},
		{
			id: 3,
			title: 'Tesla Cuts Prices in China Amid Competition',
			source: 'Reuters',
			time: '6 hours ago',
			category: 'Company News',
			image: '🚗',
			sentiment: 'neutral'
		},
		{
			id: 4,
			title: 'Microsoft Expands AI Capabilities Across Product Line',
			source: 'TechCrunch',
			time: '8 hours ago',
			category: 'Technology',
			image: '🤖',
			sentiment: 'positive'
		},
		{
			id: 5,
			title: 'Amazon Reports Strong Holiday Shopping Season',
			source: 'Wall Street Journal',
			time: '10 hours ago',
			category: 'Retail',
			image: '📦',
			sentiment: 'positive'
		},
		{
			id: 6,
			title: 'NVIDIA Launches New AI Chip for Data Centers',
			source: 'The Verge',
			time: '12 hours ago',
			category: 'Technology',
			image: '💻',
			sentiment: 'positive'
		}
	];

	const categories = ['All', 'Earnings', 'Markets', 'Technology', 'Company News', 'Retail'];
	let activeCategory = 'All';
</script>

<div class="flex min-h-screen bg-gray-100">
	<Sidebar />

	<main class="flex-1 ml-72 p-8">
		<div class="max-w-5xl mx-auto">
			<div class="flex items-center justify-between mb-8">
				<h1 class="text-4xl font-bold">Market News</h1>

				<div class="flex gap-2">
					{#each categories as category (category)}
						<button
							class="px-4 py-2 rounded-lg transition {activeCategory === category
								? 'bg-purple-600 text-white'
								: 'bg-white text-gray-700 hover:bg-gray-100'}"
							on:click={() => (activeCategory = category)}
						>
							{category}
						</button>
					{/each}
				</div>
			</div>

			<div class="space-y-4">
				{#each newsItems as item (item.id)}
					<article class="bg-white rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
						<div class="flex gap-6">
							<div
								class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-4xl flex-shrink-0"
							>
								{item.image}
							</div>

							<div class="flex-1">
								<div class="flex items-center gap-3 mb-2">
									<span
										class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
									>
										{item.category}
									</span>
									<span class="text-sm text-gray-500">{item.source}</span>
									<span class="text-sm text-gray-400">•</span>
									<span class="text-sm text-gray-500">{item.time}</span>
									{#if item.sentiment === 'positive'}
										<span class="ml-auto text-green-600">↗</span>
									{:else if item.sentiment === 'negative'}
										<span class="ml-auto text-red-600">↘</span>
									{:else}
										<span class="ml-auto text-gray-600">→</span>
									{/if}
								</div>

								<h3 class="text-xl font-bold mb-2">{item.title}</h3>

								<p class="text-gray-600 text-sm">
									Stay informed with the latest market developments and company announcements that
									could impact your investment decisions.
								</p>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</main>
</div>
