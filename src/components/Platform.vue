<script setup>
    
</script>

<template>

<section 
    class="Platform container mx-auto mb-80 hidden-el overflow-hidden px-4" 
    id="platform"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">

    <h3 class="text-center mx-auto mb-12 font-medium text-5xl text-white">
        PLATFORM
    </h3>
    <div class="mx-auto flex flex-wrap justify-center items-center mb-24 w-full lg:w-3/5">
        <button @click="showTab(2)" 
            class="border-2 rounded-xl py-3 px-5 font-semibold transition-colors duration-200 hover:border-red-500 hover:text-red-500" 
            data-toggle="tab" 
            id="btab1" 
            :class="{'border-red-500 text-red-500': activeTab === 2, 'border-[#1b2d59] text-gray-300': activeTab !== 2}">
                FOR CRYPTO USERS
        </button>
        <div class="mx-2 flex-grow">
            <span class="block w-full h-px bg-[#1b2d59]"></span>
        </div>
        <button @click="showTab(1)" 
            class="border-2 rounded-xl py-3 px-5 font-semibold transition-colors duration-200 hover:border-red-500 hover:text-red-500" 
            data-toggle="tab" 
            id="btab2" 
            :class="{'border-red-500 text-red-500': activeTab === 1, 'border-[#1b2d59] text-gray-300': activeTab !== 1}">
                FOR PROGRAMMERS
        </button>
    </div>

    <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-4" 
        v-if="activeTab === 1" 
        id="tab1" 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
        <div class="w-full lg:w-1/2 px-4 lg:px-8">
            <h4 class="mb-4 font-semibold text-2xl">
                Open platform for non-tech users
            </h4>
            <h5 class="mb-3 font-medium text-[#97afd5]">
                Check out our unique blockchain solutions
            </h5>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    IPI auto-buy solution. Wallet App automatically top-up IPI to cover fees in DeFi etc swapping most popular cryptos and tokens.
                </p>
            </div>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    If someone wants to (un)wrap coins(or tokens) has to paste his received address and system will answer him where to send coins and tokens or wraps
                </p>
            </div>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    Users can choose in which crypto they want to pay and receive payments. Can send and receive payments to mail/phone number/Social Media after verification
                </p>
            </div>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    Use popular social media to transfer and invite friends & family. If someone doesn’t have a wallet in IPI ecosystem will receive a notification throught SMS/Mail/Social Media PM. Users can name, choose and change to which wallet printed QR code belongs.
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/2 flex justify-center">
            <div class="animation"></div>
            <img class="w-full max-w-[600px] h-auto" src="/Platform-img.png" alt="Platform">
        </div>
    </div>

    <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-4" 
        v-if="activeTab === 2" 
        id="tab2" 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
        <div class="w-full lg:w-1/2 px-4 lg:px-8">
            <h4 class="mb-4 font-semibold text-2xl">
                Open platform for non-tech users
            </h4>
            <h5 class="mb-3 font-medium text-[#97afd5]">
                Check out our unique blockchain solutions
            </h5>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    Solidity tools for migrating Smart Contracts and Dapps from Ethereum and create new one with Remix
                </p>
            </div>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    Simple variables to integrate IPI wrapping system and build amazing dApps and NFT's systems
                </p>
            </div>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    Powerful "Liqudity Attack" tools on CEX's and DEX's Markets
                </p>
            </div>
            <div class="flex flex-row items-center mb-8 gap-6">
                <i class="ri-lightbulb-line text-4xl bg-gradient-to-br from-red-500 to-[#1b2d59] bg-clip-text text-transparent"></i>
                <p class="text-[#7fa3cd] max-w-lg">
                    Open source technology with fastest and no fees transactions
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/2 flex justify-center">
            <div class="animation"></div>
            <img class="w-full max-w-[600px] h-auto" src="/Platform-img.png" alt="Platform">
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
            activeTab: 2, // Default tab
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