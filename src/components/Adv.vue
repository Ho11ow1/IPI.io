<template>
	<section 
		class="container mx-auto hidden-el my-96" 
		id="advantages"
		v-motion-slide-visible-once-bottom
	>
		<h3 class="text-center mx-auto mb-12 font-medium text-5xl white">
			OUR ADVANTAGES
		</h3>
		<div class="buttons flex flex-nowrap justify-center items-center mb-24 gap-24 max-w-screen-md " style="margin:6rem auto;">
			<button 
				@click="showTab(2)" 
				class="py-3 px-5 font-semibold hover:text-red-500 active:text-red-500" 
				data-toggle="tab" 
				id="btab1" 
				:class="{'active': activeTab === 2, 'inactive': activeTab !== 2}"
			>
				INVESTORS COMPARISON
			</button>
			<button 
				@click="showTab(1)" 
				class="py-3 px-5 font-semibold hover:text-red-500 active:text-red-500" 
				data-toggle="tab" 
				id="btab2" 
				:class="{'active': activeTab === 1, 'inactive': activeTab !== 1}"
			>
				DEVELOPERS COMPARISON
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
						TPS** Range
					</h2>
				</td>
			</tr>
			<tr> <!-- Create a new row-->
				<td v-for="(text, index) in data_2_2" :key="text.id"> <!-- go with the row because no flex-->
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
						Smart Contracts/Speed           
					</h2>
				</td>
			</tr>
			<tr> <!-- Create a new row-->
				<td v-for="(text, index) in data_3_2" :key="text.id"> <!-- go with the row because no flex-->
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
						Smart Contract Language
					</h2>
				</td>
			</tr>
			<tr> <!-- Create a new row-->
				<td v-for="(text, index) in data_4_2" :key="text.id"> <!-- go with the row because no flex-->
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
						No-Code Smart Contracts with AI
					</h2>
				</td>
			</tr>
			<tr> <!-- Create a new row-->
				<td v-for="(text, index) in data_5_2" :key="text.id"> <!-- go with the row because no flex-->
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
						Approx. Finality Time
					</h2>
				</td>
			</tr>
			<tr> <!-- Create a new row-->
				<td v-for="(text, index) in data_6_2" :key="text.id"> <!-- go with the row because no flex-->
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
	<table class="second-table overflow-x-auto mx-auto py-3 px-3" v-if="activeTab === 2"  id="tab2"> <!-- Crypto Users -->
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
	<div class="links gap-6 mx-auto my-8 text-center flex flex-col max-w-lg">
		<p class="text-gray-500">
			* - according to 
			<a href="https://www.mevwatch.info/">
				https://www.mevwatch.info/
			</a>
		</p>
		<p class="text-gray-500">
			** --  First IPI is mined from staking 1 BTC to avoid SEC investigation
		</p>
	</div>
	</section>
</template>

<style scoped>

.links > p{
	font-size:.95rem;
}

.hidden{
    display:none;
}

.active {
    color: rgb(239, 68, 68);
}

/* Styles for the inactive tab */
.inactive {
    color: var(--blue);
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
	margin-bottom:.35rem;
}

.coins-list > th > div > img{
	height:45px;
	width:45px;
	margin-bottom:1rem;
} 
.coins-list > th > div > .coin-text{
	margin-bottom:.6rem;
}

.headers{
	margin-bottom:1rem;
}

::after, .score{
	margin-bottom:.35rem;
}

.score {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 50%;
    transform: translatex(38%);
    border-bottom: 4px solid #7fa3cdff;
    vertical-align: top;
    margin-left: .5rem;
    margin-right: .5rem;
}

.score::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 4px;
    background-color: #f94551ff;
}

table > tbody > tr > td > div{
	margin-left:.5rem;
	margin-right:.5rem;
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
	.container{
		max-width:900px;
	}
}

@media (max-width:1010px)
{
	.coin-image{
		width:28px;
		height:28px;
	}
	.cell-text{
		display:none;
	}
	h2{
		margin:0;
	}
	table{
		width:100%;
	}
}

/* Scores for Tab 1 (Developers Comparison) */
#tab1 .coins-list th:nth-child(1) .score::after { width: 100%; }
#tab1 .coins-list th:nth-child(2) .score::after { width: 0%; }
#tab1 .coins-list th:nth-child(3) .score::after { width: 10%; }
#tab1 .coins-list th:nth-child(4) .score::after { width: 20%; }
#tab1 .coins-list th:nth-child(5) .score::after { width: 5%; }
#tab1 .coins-list th:nth-child(6) .score::after { width: 35%; }
#tab1 .coins-list th:nth-child(7) .score::after { width: 5%; }
#tab1 .coins-list th:nth-child(8) .score::after { width: 5%; }
#tab1 .coins-list th:nth-child(9) .score::after { width: 15%; }
#tab1 .coins-list th:nth-child(10) .score::after { width: 50%; }

/* Scores for Tab 2 (Investors Comparison) */
#tab2 .coins-list th:nth-child(1) .score::after { width: 100%; }
#tab2 .coins-list th:nth-child(2) .score::after { width: 60%; }
#tab2 .coins-list th:nth-child(3) .score::after { width: 10%; }
#tab2 .coins-list th:nth-child(4) .score::after { width: 10%; }
#tab2 .coins-list th:nth-child(5) .score::after { width: 0%; }
#tab2 .coins-list th:nth-child(6) .score::after { width: 20%; }
#tab2 .coins-list th:nth-child(7) .score::after { width: 20%; }
#tab2 .coins-list th:nth-child(8) .score::after { width: 15%; }
#tab2 .coins-list th:nth-child(9) .score::after { width: 25%; }
#tab2 .coins-list th:nth-child(10) .score::after { width: 30%; }

</style>

<script lang="ts">
export default {
	name: 'Table',
	data() 
	{
	return {
		activeTab: 2, // Default tab
		coins: [
		{ id: 1, IMG: 'ipi.svg', TITLE: 'IPI' },
		{ id: 2, IMG: 'btc.svg', TITLE: 'Bitcoin (BTC)' },
		{ id: 3, IMG: 'eth.svg', TITLE: 'Ethereum (ETH)' },
		{ id: 4, IMG: 'bnb.svg', TITLE: 'Binance Smart Chain (BNB)' },
		{ id: 5, IMG: 'xrp.svg', TITLE: 'Ripple (XRP)' },
		{ id: 6, IMG: 'ada.svg', TITLE: 'Cardano (ADA)' },
		{ id: 7, IMG: 'sol.svg', TITLE: 'Solana (SOL)' },
		{ id: 8, IMG: 'trx.svg', TITLE: 'Tron (TRX)' },
		{ id: 9, IMG: 'dot.svg', TITLE: 'Polkadot (DOT)' },
		{ id: 10, IMG: 'algo.svg', TITLE: 'Algorand (ALGO)' },
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
		data_2_2: [
		{ id: 1, IMG: 'plus2.svg', name: '96k-123k'},
		{ id: 2, IMG: 'minus.svg', name: '4-7'},
		{ id: 3, IMG: 'minus.svg', name: '15-45'},
		{ id: 4, IMG: 'minus.svg', name: '100-200 (on-chain)'},
		{ id: 5, IMG: 'mid.svg', name: '1500'},
		{ id: 6, IMG: 'minus.svg', name: '200-250'},
		{ id: 7, IMG: 'plus2.svg', name: '50k-65k'},
		{ id: 8, IMG: 'mid.svg', name: '700-2000'},
		{ id: 9, IMG: 'mid.svg', name: '1k-2k'},
		{ id: 10, IMG: 'plus2.svg', name: '1k-46k'},
		],
		data_3_2: [
		{ id: 1, IMG: 'plus2.svg', name: 'Yes, fastest'},
		{ id: 2, IMG: 'minus.svg', name: 'No'},
		{ id: 3, IMG: 'plus.svg', name: 'Yes'},
		{ id: 4, IMG: 'plus.svg', name: 'Yes, fast'},
		{ id: 5, IMG: 'minus.svg', name: 'No'},
		{ id: 6, IMG: 'plus.svg', name: 'Yes'},
		{ id: 7, IMG: 'plus.svg', name: 'Yes, fast'},
		{ id: 8, IMG: 'plus.svg', name: 'Yes'},
		{ id: 9, IMG: 'plus.svg', name: 'Yes'},
		{ id: 10, IMG: 'plus.svg', name: 'Yes, fast'},
		],
		data_4_2: [
		{ id: 1, IMG: 'plus2.svg', name: 'AssemblyScript (TypeScript Dialect), Rust, Go, Python, C, C++'},
		{ id: 2, IMG: 'minus.svg', name: 'N/A'},
		{ id: 3, IMG: 'mid.svg', name: 'Solidity'},
		{ id: 4, IMG: 'mid.svg', name: 'Solidity'},
		{ id: 5, IMG: 'minus.svg', name: 'N/A'},
		{ id: 6, IMG: 'minus.svg', name: 'Plutus'},
		{ id: 7, IMG: 'mid.svg', name: 'Rust'},
		{ id: 8, IMG: 'mid.svg', name: 'Solidity'},
		{ id: 9, IMG: 'minus.svg', name: 'Ink! (Rust-based)'},
		{ id: 10, IMG: 'minus.svg', name: 'TEAL'},
		],
		data_5_2: [
		{ id: 1, IMG: 'plus2.svg', name: 'Yes'},
		{ id: 2, IMG: 'minus.svg', name: 'No'},
		{ id: 3, IMG: 'minus.svg', name: 'No'},
		{ id: 4, IMG: 'minus.svg', name: 'No'},
		{ id: 5, IMG: 'minus.svg', name: 'No'},
		{ id: 6, IMG: 'minus.svg', name: 'No'},
		{ id: 7, IMG: 'minus.svg', name: 'No'},
		{ id: 8, IMG: 'minus.svg', name: 'No'},
		{ id: 9, IMG: 'minus.svg', name: 'No'},
		{ id: 10, IMG: 'minus.svg', name: 'No'},
		],
		data_6_2: [
		{ id: 1, IMG: 'plus2.svg', name: '2.5-4.5 seconds'},
		{ id: 2, IMG: 'minus.svg', name: '60 minutes (6 confirmations)'},
		{ id: 3, IMG: 'minus.svg', name: '~6 minutes (12-32 slots for finality)'},
		{ id: 4, IMG: 'plus2.svg', name: '~5 seconds'},
		{ id: 5, IMG: 'plus2.svg', name: '~3-5 seconds'},
		{ id: 6, IMG: 'minus.svg', name: '~20 minutes'},
		{ id: 7, IMG: 'plus2.svg', name: '~0.4 seconds'},
		{ id: 8, IMG: 'minus.svg', name: 'Every 6 hours (27 Super Representatives rotate)'},
		{ id: 9, IMG: 'plus.svg', name: '~2 minutes'},
		{ id: 10, IMG: 'plus2.svg', name: '2.5-4.5 seconds'},
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