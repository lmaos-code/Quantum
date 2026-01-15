<script lang="ts">
	const menuItems = [
		{ icon: '🔍', label: 'Search', path: '/search' },
		{ icon: '📧', label: 'Inbox', path: '/inbox' },
		{ icon: '🔔', label: 'Notifications', path: '/notifications' }
	];

	const generalItems = [
		{ icon: '📈', label: 'Market', path: '/', active: true },
		{ icon: '📊', label: 'Dashboard', path: '/dashboard' },
		{ icon: '📉', label: 'Analytics', path: '/analytics' },
		{ icon: '📰', label: 'News', path: '/news' },
		{ icon: '📋', label: 'Reporting', path: '/reporting' },
		{ icon: '💼', label: 'Wallet', path: '/wallet' },
		{ icon: '⋯', label: 'More', path: '/more' }
	];

	const bottomItems = [
		{ icon: '❓', label: 'Help', path: '/help' },
		{ icon: '⚙️', label: 'Settings', path: '/settings' }
	];
</script>

<aside class="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 flex flex-col">
	<!-- Header -->
	<div class="p-6 border-b border-gray-200">
		<div class="flex items-center gap-3 mb-4">
			<div
				class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold"
			>
				W
			</div>
			<span class="text-xl font-bold">Widelab</span>
		</div>
		<button
			class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition"
		>
			Request
		</button>
	</div>

	<!-- Menu Items -->
	<div class="flex-1 overflow-y-auto">
		<nav class="p-4">
			{#each menuItems as item (item.path)}
				<a
					href={item.path}
					data-sveltekit-preload-data="hover"
					class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition mb-1"
				>
					<span class="text-lg">{item.icon}</span>
					<span>{item.label}</span>
				</a>
			{/each}

			<div class="mt-6 mb-2 px-4 text-xs text-gray-500 font-medium uppercase">General</div>

			{#each generalItems as item (item.path)}
				<a
					href={item.path}
					data-sveltekit-preload-data="hover"
					class="flex items-center gap-3 px-4 py-3 rounded-lg transition mb-1 {item.active
						? 'bg-purple-100 text-purple-700'
						: 'text-gray-600 hover:bg-gray-100'}"
				>
					<span class="text-lg">{item.icon}</span>
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>
	</div>

	<!-- Bottom Section -->
	<div class="border-t border-gray-200 p-4">
		{#each bottomItems as item (item.path)}
			<a
				href={item.path}
				data-sveltekit-preload-data="hover"
				class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition mb-1"
			>
				<span class="text-lg">{item.icon}</span>
				<span>{item.label}</span>
			</a>
		{/each}

		<!-- User Profile -->
		<div
			class="mt-4 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
		>
			<div class="w-10 h-10 bg-gray-300 rounded-full"></div>
			<div class="flex-1">
				<div class="font-medium text-gray-900">Maciej Kalaska</div>
				<div class="text-sm text-gray-500">maciej@widelab.co</div>
			</div>
		</div>
	</div>
</aside>
