<template>
	<section class="container mx-auto hidden-el my-96" id="advantages">
		<h3 class="text-center mx-auto mb-12 font-medium text-5xl text-neutral-300">
			ADVANTAGES
		</h3>
		<div class="buttons mx-auto flex flex-nowrap justify-center items-center mb-24 max-w-screen-md ">
			<button @click="showTab(2)" class="border-solid border-2 border-red-500 rounded-xl py-3 px-5 font-semibold  hover:border-red-500 hover:text-red-500 active:border-red-500 active:text-red-500" data-toggle="tab" id="btab1" :class="{'active': activeTab === 2, 'inactive': activeTab !== 2}">
					FOR CRYPTO USERS
			</button>
			<div class="seperator flex justify-center items-center">
				<span></span>
			</div>
			<button @click="showTab(1)" class="border-solid border-2 border-neutral-600 rounded-xl py-3 px-5 font-semibold  hover:border-red-500 hover:text-red-500 active:border-red-500 active:text-red-500" data-toggle="tab" id="btab2" :class="{'active': activeTab === 1, 'inactive': activeTab !== 1}">
					FOR PROGRAMMERS
			</button>
		</div>
	<table class="main-table overflow-x-auto mx-auto py-3 px-3" v-if="activeTab === 1"  id="tab1"> <!-- Code go brrrr -->
		<tbody>
			<tr class="coins-list">
			<!-- Loop through coins to create the headers -->
			<th v-for="(coin, index) in coins" :key="coin.id">
				<div class="flex items-center flex-col text-center mb-2 headers">
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
		</tbody>
	</table>
	<table class="second-table py-3 px-3" v-if="activeTab === 2"  id="tab2"> <!-- Crypto Users -->
		<tbody>
			<tr class="coins-list">
			<!-- Loop through coins to create the headers -->
			<th v-for="(coin, index) in coins" :key="coin.id">
				<div class="flex items-center flex-col text-center mb-2 headers">
					<img :src="coin.IMG" :alt="coin.TITLE" class="coin-image mb-4" />
					<div class="coin-text">
						<p class="cell-text">
							{{ coin.TITLE }} asda
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
		</tbody>
	</table>
	</section>
</template>

<style scoped>

.seperator{
    flex-grow: 1;
}

.seperator > span {
    width: 100%;
    background-color: rgb(82, 82, 82);
    height: 1px;
}

.hidden{
    display:none;
}

.active {
    border-color: rgb(239, 68, 68);
    color: rgb(239, 68, 68);
}

/* Styles for the inactive tab */
.inactive {
    border-color: rgb(82, 82, 82);
    color: rgb(212, 212, 212);
}

.py-2{
	padding-top:.75rem;
}

.main-table, .second-table {
	table-layout: fixed;  /* Ensures columns respect the set width */
}

.coins-list{
	background-color:transparent;
}

th, td {
	width:auto;
	max-width: 110px;
	word-wrap: break-word;
	white-space: normal;
	overflow: hidden;  /* Prevents overflow of long content */
	text-align: center;
	margin-bottom:2rem;
	position:relative;
}

h2{
	margin-bottom:.75rem;
	padding:0;
}

.coin-image {
	height: 36px;
	width: 36px;
  	margin: 0 auto;  /* Center the image */
}

.headers{
	margin-bottom:1rem;
}
::after, .score{
	margin-bottom:.35rem;
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
	table{
		max-width:760px;
	}
	p{
		font-size:.6rem;
	}
	h2{
		font-size:.95rem;
	}
}

@media (max-width:1010px)
{
	img{
		display:none;
	}
}


</style>

<script lang="ts">
export default {
	name: 'Table',
	data() 
	{
	return {
		activeTab: 1, // Default tab
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
	methods: 
	{
		showTab(tabNumber) 
		{
			this.activeTab = tabNumber; // Update active tab
		},
	},
};
</script>