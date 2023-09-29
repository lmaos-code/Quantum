<script lang="ts">
	import { Stock } from '$lib/models/stock';
	export let stock = new Stock();
</script>

<div>
	<a href="/stock/{stock.symbol}">
		<p>
			{stock.name} (<span class="symbol">{stock.symbol}</span>)
			<span>{stock.currentPrice}{stock.currency} ({stock.changeToday})</span>
		</p>
		<!-- truncate the tex here a bit -->
	</a>
</div>

<style lang="scss">
	.symbol {
		color: #999;
	}
</style>
