<script setup>



</script>

<template>

<section class="Platform mx-auto container mb-96 pt-32" id="platform">
    <h3 class="text-center mx-auto mb-12 font-medium text-5xl text-neutral-300">
        PLATFORM
    </h3>
    <div class="mx-auto flex flex-nowrap justify-center items-center mb-24 max-w-screen-md">
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
    <div class="content flex justify-between items-center" v-if="activeTab === 2"  id="tab1">
        <div class="left">
            <h4 class="mb-4 font-semibold text-2xl">
                Open platform for non-tech users
            </h4>
            <h5 class="mb-3 font-medium text-blue-300">
                Check out our unique blockchain solutions
            </h5>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">IPI auto-buy solution. Wallet App automatically top-up IPI to cover fees in DeFi etc swapping most popular cryptos and tokens.</p>
            </div>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">If someone wants to (un)wrap coins(or tokens) has to paste his received address and system will answer him where to send coins and tokens or wraps</p>
            </div>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">Users can choose in which crypto they want to pay and receive payments. Can send and receive payments to mail/phone number/Social Media after verification</p>
            </div>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">Use popular social media to transfer and invite friends & family. If someone doesn’t have a wallet in IPI ecosystem will receive a notification throught SMS/Mail/Social Media PM. Users can name, choose and change to which wallet printed QR code belongs.</p>
            </div>
        </div>
        <div class="right">
            <div class="animation"></div> <!--Simple styling animation for red / grey rotation-->
            <img class="" src="https://placehold.co/600x380">
        </div>
    </div>
    <div class="content flex justify-between items-center" v-if="activeTab === 1"  id="tab2">
        <div class="left">
            <h4 class="mb-4 font-semibold text-2xl">
                Open platform for non-tech users
            </h4>
            <h5 class="mb-3 font-medium text-blue-300">
                Check out our unique blockchain solutions
            </h5>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">Solidity tools for migrating Smart Contracts and Dapps from Ethereum and create new one with Remix</p>
            </div>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">Simple variables to integrate IPI wrapping system and build amazing dApps and NFT's systems</p>
            </div>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">Powerful "Liqudity Attack" tools on CEX's and DEX's Markets</p>
            </div>
            <div class="row flex flex-row mb-12">
                <img class="pr-6" src="https://placehold.co/44x44"> <p class="max-w-screen-sm text-blue-300">Open source technology with fastest and no fees transactions</p>
            </div>
        </div>
        <div class="right">
            <div class="animation"></div> <!--Simple styling animation for red / grey rotation-->
            <img class="" src="https://placehold.co/600x380">
        </div>
    </div>
</section>

</template>

<script>
export default 
{
    data() 
    {
        return {
            activeTab: 1, // Default tab
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

<style scoped>

.max-w-screen-sm{
    max-width:540px;
}

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

</style>