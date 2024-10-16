<template>
	<section class="container mx-auto hiden-el" id="advantages">
	<table class="main-table mx-auto py-3 px-3">
		<tr class="coins-list">
			<!-- Loop through coins to create the headers -->
			<th v-for="(coin, index) in coins" :key="coin.id">
				<div class="flex items-center flex-col text-center mb-2">
					<img :src="coin.IMG" :alt="coin.TITLE" class="coin-image mb-4" />
					<div class="coin-text">
						<p class="cell-text">
							{{ coin.TITLE }}
						</p>
					</div>
					<div class="score">
						<span></span>
					</div>
				</div>
			</th>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-2">
				<h2 class="text-xl font-bold">
					Consensus / Decentralization Level
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_1" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img :src="text.IMG" :alt="text.name" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-2">
				<h2 class="text-xl font-bold">
					Max Supply
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_2" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img :src="text.IMG" :alt="text.name" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class=" text-center py-2">
				<h2 class="text-xl font-bold">
				Instamine              
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_3" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img :src="text.IMG" :alt="text.name" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-2">
				<h2 class="text-xl font-bold">
					Halving / Period
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_4" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img :src="text.IMG" :alt="text.name" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-2">
				<h2 class="text-xl font-bold">
					Networking Speed / Gas Price
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_5" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img :src="text.IMG" :alt="text.name" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}
					</p>
				</div>
			</td>
		</tr>
		<tr>
			<td :colspan="coins.length" class="text-center py-2">
				<h2 class="text-xl font-bold">
					Native Wallet & Scanner
				</h2>
			</td>
		</tr>
		<tr> <!-- Create a new row-->
			<td v-for="(text, index) in data_6" :key="text.id"> <!-- go with the row because no flex-->
				<div class="flex items-center flex-col text-center">
					<img :src="text.IMG" :alt="text.name" class="coin-image mb-4" />
					<p class="cell-text">
						{{ text.name }}
					</p>
				</div>
			</td>
		</tr>
	</table>
	</section>
</template>

<style scoped>

.py-2{
	padding-top:.75rem;
}

.main-table {
  table-layout: fixed;  /* Ensures columns respect the set width */
}

.coins-list{
	background-color:transparent;
}

.coins-list > th {
	width: 120px;
	max-width: 120px;
	word-wrap: break-word;
	white-space: normal;
	overflow: hidden;  /* Prevents overflow of long content */
	text-align: center;
	margin-bottom:2rem;
}

.coin-image {
	height: 36px;
	width: 36px;
  	margin: 0 auto;  /* Center the image */
}

h2{
	margin-bottom:.75rem;
	padding:0;
}

th{
	position:relative;
	max-width: 120px;
	overflow: hidden;
}

.score{
	position:absolute;
    content: '';
    left:0;
    bottom:0;
    width:50%;
	transform:translatex(50%);
    border-bottom:4px solid aqua;
}

th::after{
	display:inline-block;
	position:absolute;
    content: '';
    left:0;
    bottom:0;
    width:50%;
	transform:translatex(50%);
    border-bottom:4px solid red;
}

td, th{
	text-align:center;
}

tr{
	background-color:#202B47;
	padding-bottom:.75rem !important;
}

tr *{
	vertical-align:top;
}

td{
	max-width:120px;
}

p{
	font-size:.75em;
}

div{
	vertical-align: top;
	margin-left:.5rem;
	margin-right:.5rem;
}

@media (max-width:1024px)
{	
	tr *{
	vertical-align:middle;
	}
	div{
		vertical-align:middle;
	}
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
		{ id: 1, IMG: 'vite.svg', TITLE: 'IPI' },
		{ id: 2, IMG: 'vite.svg', TITLE: 'Bitcoin (BTC)' },
		{ id: 3, IMG: 'vite.svg', TITLE: 'Ethereum (ETH)' },
		{ id: 4, IMG: 'vite.svg', TITLE: 'Binance Smart Chain (BNB)' },
		{ id: 5, IMG: 'vite.svg', TITLE: 'Ripple (XRP)' },
		{ id: 6, IMG: 'vite.svg', TITLE: 'Cardano (ADA)' },
		{ id: 7, IMG: 'vite.svg', TITLE: 'Solana (SOL)' },
		{ id: 8, IMG: 'vite.svg', TITLE: 'Tron (TRX)' },
		{ id: 9, IMG: 'vite.svg', TITLE: 'Polkadot (DOT)' },
		{ id: 10, IMG: 'vite.svg', TITLE: 'Algorand (ALGO)' },
		],
		data_1: [
		{ id: 1, IMG: 'plus2.svg', name: 'Proof of Network / Very High' },
		{ id: 2, IMG: 'plus2.svg', name: 'Proof of Work / Very High' },
		{ id: 3, IMG: 'plus.svg', name: 'Proof of Stake / High with censorship*' },
		{ id: 4, IMG: 'minus.svg', name: 'Proof of Authority / Moderate' },
		{ id: 5, IMG: 'minus.svg', name: 'XRP Ledger Consensus Protocol (XRP LCP) / Low' },
		{ id: 6, IMG: 'plus.svg', name: 'Ouroboros Praos (Proof of Stake) / High' },
		{ id: 7, IMG: 'minus.svg', name: 'Proof of History (PoH) & Tower BFT (Finality) / Moderate' },
		{ id: 8, IMG: 'minus.svg', name: 'Delegated Proof-of-Stake (DPoS) / Moderate' },
		{ id: 9, IMG: 'plus.svg', name: 'BABE (Block Proposal) & GRANDPA (Finality) / High' },
		{ id: 10, IMG: 'plus2.svg', name: 'Pure Proof of Stake / Very High' },
		],
		data_2: [
		{ id: 1, IMG: 'plus2.svg', name: '100M' },
		{ id: 2, IMG: 'plus2.svg', name: '21M' },
		{ id: 3, IMG: 'minus.svg', name: '∞' },
		{ id: 4, IMG: 'plus.svg', name: '200M' },
		{ id: 5, IMG: 'minus.svg', name: '100B' },
		{ id: 6, IMG: 'minus.svg', name: '45B' },
		{ id: 7, IMG: 'minus.svg', name: '∞' },
		{ id: 8, IMG: 'minus.svg', name: '∞' },
		{ id: 9, IMG: 'minus.svg', name: '∞' },
		{ id: 10, IMG: 'minus.svg', name: '10B' },
		],
		data_3: [
		{ id: 1, IMG: 'plus2.svg', name: '0**' },
		{ id: 2, IMG: 'plus2.svg', name: '0' },
		{ id: 3, IMG: 'mid.svg', name: '72M' },
		{ id: 4, IMG: 'minus.svg', name: '200M' },
		{ id: 5, IMG: 'minus.svg', name: '100B' },
		{ id: 6, IMG: 'minus.svg', name: '45B' },
		{ id: 7, IMG: 'mid.svg', name: '500K' },
		{ id: 8, IMG: 'minus.svg', name: '100B' },
		{ id: 9, IMG: 'minus.svg', name: 'Yes' },
		{ id: 10, IMG: 'minus.svg', name: '2.5B' },
		],
		data_4: [
		{ id: 1, IMG: 'plus2.svg', name: 'Yes/~4Y' },
		{ id: 2, IMG: 'plus2.svg', name: 'Yes/~4Y' },
		{ id: 3, IMG: 'minus.svg', name: 'NO' },
		{ id: 4, IMG: 'minus.svg', name: 'NO' },
		{ id: 5, IMG: 'minus.svg', name: 'NO' },
		{ id: 6, IMG: 'minus.svg', name: 'NO' },
		{ id: 7, IMG: 'minus.svg', name: 'NO' },
		{ id: 8, IMG: 'minus.svg', name: 'NO' },
		{ id: 9, IMG: 'minus.svg', name: 'NO' },
		{ id: 10, IMG: 'minus.svg', name: 'NO' },
		],
		data_5: [
		{ id: 1, IMG: 'plus2.svg', name: 'Very fast/Very cheap' },
		{ id: 2, IMG: 'minus.svg', name: 'Very Slow/Regular' },
		{ id: 3, IMG: 'minus.svg', name: 'Fast/Expensive' },
		{ id: 4, IMG: 'plus2.svg', name: 'Fast/Cheap' },
		{ id: 5, IMG: 'plus2.svg', name: 'Fast/Cheap' },
		{ id: 6, IMG: 'plus2.svg', name: 'Fast/Cheap' },
		{ id: 7, IMG: 'plus2.svg', name: 'Fast/Cheap' },
		{ id: 8, IMG: 'plus2.svg', name: 'Fast/Cheap' },
		{ id: 9, IMG: 'plus2.svg', name: 'Fast/Cheap' },
		{ id: 10, IMG: 'plus2.svg', name: 'Fast/Cheap' },
		],
		data_6: [
		{ id: 1, IMG: 'plus2.svg', name: 'Yes' },
		{ id: 2, IMG: 'mid.svg', name: 'Wallet only' },
		{ id: 3, IMG: 'plus2.svg', name: 'Yes' },
		{ id: 4, IMG: 'mid.svg', name: 'Scanner only' },
		{ id: 5, IMG: 'mid.svg', name: 'Scanner only' },
		{ id: 6, IMG: 'plus2.svg', name: 'YES' },
		{ id: 7, IMG: 'plus2.svg', name: 'YES' },
		{ id: 8, IMG: 'plus2.svg', name: 'YES' },
		{ id: 9, IMG: 'plus2.svg', name: 'YES' },
		{ id: 10, IMG: 'plus2.svg', name: 'YES' },
		],
	};
	},
};
</script>
