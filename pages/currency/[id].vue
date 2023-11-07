<template>
	<div>
		<h2>{{ coin.name }} Detail page</h2>
		<table border="1 px solid">
			<thead>
				<th>Symbol</th>
				<th>Rank</th>
				<th>Price</th>
				<th>Market Caü - US $</th>
			</thead>
			<tr>
				<td>{{ coin.symbol }}</td>
				<td>{{ coin.rank }}</td>
				<td>{{ coin.price_usd }}</td>
				<td>{{ coin.market_cap_usd }}</td>
			</tr>
		</table>
	</div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { data } = await useFetch("/api/ticker/?id=" + id);
const coin = data.value[0];
</script>
