<script setup>



</script>

<template>

<section 
    class="Platform mx-auto container mb-72 pt-36 hidden-el" 
    id="platform"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">

    <h3 class="text-center mx-auto mb-12 font-medium text-5xl white">
        PLATFORM
    </h3>
    <div class="buttons mx-auto flex flex-nowrap justify-center items-center mb-24 max-w-screen-md ">
        <button @click="showTab(2)" class="border-solid border-2 border-[hsl(212.5,55.7%,6.1%)] rounded-xl py-3 px-5 font-semibold  hover:border-red-500 hover:text-red-500 active:border-red-500 active:text-red-500" data-toggle="tab" id="btab1" :class="{'active': activeTab === 2, 'inactive': activeTab !== 2}">
                FOR CRYPTO USERS
        </button>
        <div class="seperator flex justify-center items-center">
            <span></span>
        </div>
        <button @click="showTab(1)" class="border-solid border-2 border-[hsl(212.5,55.7%,6.1%)] rounded-xl py-3 px-5 font-semibold  hover:border-red-500 hover:text-red-500 active:border-red-500 active:text-red-500" data-toggle="tab" id="btab2" :class="{'active': activeTab === 1, 'inactive': activeTab !== 1}">
                FOR PROGRAMMERS
        </button>
    </div>
    <div class="content flex justify-between items-center" v-if="activeTab === 1"  id="tab1" 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
        <div class="left">
            <h4 class="mb-4 font-semibold text-2xl">
                Open platform for non-tech users
            </h4>
            <h5 class="mb-3 font-medium" style="color: #97afd5;">
                Check out our unique blockchain solutions
            </h5>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i>
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">
                    IPI auto-buy solution. Wallet App automatically top-up IPI to cover fees in DeFi etc swapping most popular cryptos and tokens.
                </p>
            </div>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i>
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">
                    If someone wants to (un)wrap coins(or tokens) has to paste his received address and system will answer him where to send coins and tokens or wraps
                </p>
            </div>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i>
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">
                    Users can choose in which crypto they want to pay and receive payments. Can send and receive payments to mail/phone number/Social Media after verification
                </p>
            </div>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i>
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">
                    Use popular social media to transfer and invite friends & family. If someone doesn’t have a wallet in IPI ecosystem will receive a notification throught SMS/Mail/Social Media PM. Users can name, choose and change to which wallet printed QR code belongs.
                </p>
            </div>
        </div>
        <div class="right">
            <div class="animation"></div> <!--Simple styling animation for red / grey rotation-->
            <img class="" src="/Platform-img.png" style="width: 600px; height: 380px;">
        </div>
    </div>
    <div class="content flex justify-between items-center" v-if="activeTab === 2"  id="tab2" 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
        <div class="left">
            <h4 class="mb-4 font-semibold text-2xl">
                Open platform for non-tech users
            </h4>
            <h5 class="mb-3 font-medium" style="color: #97afd5;">
                Check out our unique blockchain solutions
            </h5>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i> 
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">Solidity tools for migrating Smart Contracts and Dapps from Ethereum and create new one with Remix</p>
            </div>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i> 
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">Simple variables to integrate IPI wrapping system and build amazing dApps and NFT's systems</p>
            </div>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i> 
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">Powerful "Liqudity Attack" tools on CEX's and DEX's Markets</p>
            </div>
            <div class="row flex flex-row items-center mb-8">
                <i class="icon ri-lightbulb-line white"></i>
                <p class="max-w-screen-sm" style="color: #7fa3cdff;">Open source technology with fastest and no fees transactions</p>
            </div>
        </div>
        <div class="right">
            <div class="animation"></div> <!--Simple styling animation for red / grey rotation-->
            <img class="" src="/Platform-img.png" style="width: 600px; height: 380px;">
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

<style scoped>

.icon{
    background-image: linear-gradient(-45deg, #f42f54 0%, #1b2d59 80%, #1b2d59 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.75rem;
    margin-right:1.5rem;
}

.max-w-screen-sm{
    max-width:540px;
}

.seperator{
    flex-grow: 1;
}

.seperator > span {
    width: 100%;
    background-color: hsl(212.5, 55.7%, 36.1%);
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
    border-color: hsl(212.5, 55.7%, 36.1%);
    color: rgb(212, 212, 212);
}

@media (max-width:1024px)
{
	section{
		max-width:920px;
		padding-bottom:8rem;
	}
    .content{
        gap:2rem;
    }
    .row{
        margin-bottom:1.75rem;
    }
    .row > p{
        max-width:260px;
    }
}

@media (max-width:940px)
{
    .content{
        flex-wrap:wrap-reverse;
    }
    .right{
        margin-left:auto;
        margin-right:auto;
        margin-bottom:3rem;
        justify-content:center;
    }
    .left{
        margin-left:2rem;
    }
    .row > p{
        max-width:85%;
    }
    .buttons{
        max-width:80%;
    }
}

</style>