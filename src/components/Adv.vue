<template>
	<section class="container mx-auto hiden-el">
	<table class="main-table mx-auto py-3 px-3">
		<tr class="coins-list">
			<!-- Loop through coins to create the headers -->
			<th v-for="(coin, index) in coins" :key="coin.id">
				<div class="flex items-center flex-col text-center">
					<img src="../assets/vue.svg" alt="" class="coin-image mb-4" />
					<p class="cell-text">
						{{ coin.TITLE }}
					</p>
				</div>
			</th>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-4">
				<h2 class="text-xl font-bold">
					Consensus / Decentralization Level
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_1" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img src="../assets/vue.svg" alt="" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}>
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-4">
				<h2 class="text-xl font-bold">
					Max Supply
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_2" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img src="../assets/vue.svg" alt="" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}>
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-4">
				<h2 class="text-xl font-bold">
					Instamine
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_3" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img src="../assets/vue.svg" alt="" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}>
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-4">
				<h2 class="text-xl font-bold">
					Halving / Period
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_4" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img src="../assets/vue.svg" alt="" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}>
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-4">
				<h2 class="text-xl font-bold">
					Networking Speed / Gas Price
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_5" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img src="../assets/vue.svg" alt="" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}>
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-4">
				<h2 class="text-xl font-bold">
					Native Wallet & Scanner
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_6" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img src="../assets/vue.svg" alt="" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}>
					</p>
				</div>
			</td>
		</tr>
	</table>
	</section>
</template>

<style scoped>

.coins-list{
	background-color:transparent;
}

tr{
	background-color:#202B47;
	padding-bottom:.75rem !important;
}

tr *{
	vertical-align:top;
}

p{
	font-size:.75em;
}

div{
	vertical-align: top;
	margin-left:.5rem;
	margin-right:.5rem;
}

@media (max-width:1010px)
{
	section{
		margin-right:0;
	}
	img{
		transform:scale(0.5);
	}
}


</style>

<script lang="ts">
export default {
	name: 'Table',
	data() {
	return {
		coins: [
		{ id: 1, IMG: '../assets/vue.svg', TITLE: 'IPI' },
		{ id: 2, IMG: '../assets/vue.svg', TITLE: 'Bitcoin (BTC)' },
		{ id: 3, IMG: '../assets/vue.svg', TITLE: 'Ethereum (ETH)' },
		{ id: 4, IMG: '../assets/vue.svg', TITLE: 'Binance Smart Chain (BNB)' },
		{ id: 5, IMG: '../assets/vue.svg', TITLE: 'Ripple (XRP)' },
		{ id: 6, IMG: '../assets/vue.svg', TITLE: 'Cardano (ADA)' },
		{ id: 7, IMG: '../assets/vue.svg', TITLE: 'Solana (SOL)' },
		{ id: 8, IMG: '../assets/vue.svg', TITLE: 'Tron (TRX)' },
		{ id: 9, IMG: '../assets/vue.svg', TITLE: 'Polkadot (DOT)' },
		{ id: 10, IMG: '../assets/vue.svg', TITLE: 'Algorand (ALGO)' },
		],
		data_1: [
		{ id: 1, IMG: './/assets/vue.svg', name: 'Proof of Network / Very High' },
		{ id: 2, IMG: './/assets/vue.svg', name: 'Proof of Work / Very High' },
		{ id: 3, IMG: './/assets/vue.svg', name: 'Proof of Stake / High with censorship*' },
		{ id: 4, IMG: './/assets/vue.svg', name: 'Proof of Authority / Moderate' },
		{ id: 5, IMG: './/assets/vue.svg', name: 'XRP Ledger Consensus Protocol (XRP LCP) / Low' },
		{ id: 6, IMG: './/assets/vue.svg', name: 'Ouroboros Praos (Proof of Stake) / High' },
		{ id: 7, IMG: './/assets/vue.svg', name: 'Proof of History (PoH) & Tower BFT (Finality) / Moderate' },
		{ id: 8, IMG: './/assets/vue.svg', name: 'Delegated Proof-of-Stake (DPoS) / Moderate' },
		{ id: 9, IMG: './/assets/vue.svg', name: 'BABE (Block Proposal) & GRANDPA (Finality) / High' },
		{ id: 10, IMG: './/assets/vue.svg', name: 'Pure Proof of Stake / Very High' },
		],
		data_2: [
		{ id: 1, IMG: './/assets/vue.svg', name: '100M' },
		{ id: 2, IMG: './/assets/vue.svg', name: '21M' },
		{ id: 3, IMG: './/assets/vue.svg', name: '∞' },
		{ id: 4, IMG: './/assets/vue.svg', name: '200M' },
		{ id: 5, IMG: './/assets/vue.svg', name: '100B' },
		{ id: 6, IMG: './/assets/vue.svg', name: '45B' },
		{ id: 7, IMG: './/assets/vue.svg', name: '∞' },
		{ id: 8, IMG: './/assets/vue.svg', name: '∞' },
		{ id: 9, IMG: './/assets/vue.svg', name: '∞' },
		{ id: 10, IMG: './/assets/vue.svg', name: '10B' },
		],
		data_3: [
		{ id: 1, IMG: './/assets/vue.svg', name: '0**' },
		{ id: 2, IMG: './/assets/vue.svg', name: '0' },
		{ id: 3, IMG: './/assets/vue.svg', name: '72M' },
		{ id: 4, IMG: './/assets/vue.svg', name: '200M' },
		{ id: 5, IMG: './/assets/vue.svg', name: '100B' },
		{ id: 6, IMG: './/assets/vue.svg', name: '45B' },
		{ id: 7, IMG: './/assets/vue.svg', name: '500K' },
		{ id: 8, IMG: './/assets/vue.svg', name: '100B' },
		{ id: 9, IMG: './/assets/vue.svg', name: 'Yes' },
		{ id: 10, IMG: './/assets/vue.svg', name: '2.5B' },
		],
		data_4: [
		{ id: 1, IMG: './/assets/vue.svg', name: 'Yes/~4Y' },
		{ id: 2, IMG: './/assets/vue.svg', name: 'Yes/~4Y' },
		{ id: 3, IMG: './/assets/vue.svg', name: 'NO' },
		{ id: 4, IMG: './/assets/vue.svg', name: 'NO' },
		{ id: 5, IMG: './/assets/vue.svg', name: 'NO' },
		{ id: 6, IMG: './/assets/vue.svg', name: 'NO' },
		{ id: 7, IMG: './/assets/vue.svg', name: 'NO' },
		{ id: 8, IMG: './/assets/vue.svg', name: 'NO' },
		{ id: 9, IMG: './/assets/vue.svg', name: 'NO' },
		{ id: 10, IMG: './/assets/vue.svg', name: 'NO' },
		],
		data_5: [
		{ id: 1, IMG: './/assets/vue.svg', name: 'Very fast/Very cheap' },
		{ id: 2, IMG: './/assets/vue.svg', name: 'Very Slow/Regular' },
		{ id: 3, IMG: './/assets/vue.svg', name: 'Fast/Expensive' },
		{ id: 4, IMG: './/assets/vue.svg', name: 'Fast/Cheap' },
		{ id: 5, IMG: './/assets/vue.svg', name: 'Fast/Cheap' },
		{ id: 6, IMG: './/assets/vue.svg', name: 'Fast/Cheap' },
		{ id: 7, IMG: './/assets/vue.svg', name: 'Fast/Cheap' },
		{ id: 8, IMG: './/assets/vue.svg', name: 'Fast/Cheap' },
		{ id: 9, IMG: './/assets/vue.svg', name: 'Fast/Cheap' },
		{ id: 10, IMG: './/assets/vue.svg', name: 'Fast/Cheap' },
		],
		data_6: [
		{ id: 1, IMG: './/assets/vue.svg', name: 'Yes' },
		{ id: 2, IMG: './/assets/vue.svg', name: 'Wallet only' },
		{ id: 3, IMG: './/assets/vue.svg', name: 'Yes' },
		{ id: 4, IMG: './/assets/vue.svg', name: 'Scanner only' },
		{ id: 5, IMG: './/assets/vue.svg', name: 'Scanner only' },
		{ id: 6, IMG: './/assets/vue.svg', name: 'YES' },
		{ id: 7, IMG: './/assets/vue.svg', name: 'YES' },
		{ id: 8, IMG: './/assets/vue.svg', name: 'YES' },
		{ id: 9, IMG: './/assets/vue.svg', name: 'YES' },
		{ id: 10, IMG: './/assets/vue.svg', name: 'YES' },
		],
	};
	},
};
</script>
