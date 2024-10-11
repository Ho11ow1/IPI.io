<script setup>



</script>

<template>

<section class="container mx-auto px-8 mb-72 pt-36 flex justify-between items-center" id="main">
        <div class="left flex flex-col">
            <div class="Generate">
                <h2 class="my-4 text-red-600 text-6xl">
                    I
                </h2>
                <h2 class="my-4 text-red-600 text-6xl">
                    P
                </h2>
                <h2 class="my-4 text-red-600 text-6xl">
                    I
                </h2>
            </div>
            <h3 class="text-gray-400 mt-8 text-1xl max-w-5xl main-description">
                WE COMBINE THE BEST PROTOCOLS TO BUILD THE FASTEST, SAFEST AND SIMPLEST NON-CUSTODIAL BLOCKCHAIN FOR STORING, TRADING, DAPPS, 
                DEFI, NFT AND MORE POWERED BY IPI UTILITY COIN. MOST POPULAR COINS WRAPPED.
            </h3>
            <div class="flex justify-center gap-8 mt-8">
                <button class="border-solid border-2 border-red-600 bg-red-600 text-gray-100 text-base font-medium rounded-3xl max-w-34 px-4 py-3 hover:bg-neutral-100 hover:border-neutral-100 hover:text-red-600">
                    <a href="https://ipi.io/whitepaper.pdf" class="hover:text-red-600">
                        READ OUR WHITEPAPER
                    </a>
                </button>
                <button class="border-solid border-2 border-red-600 text-gray-100 text-base font-medium rounded-3xl max-w-34 px-4 py-3 hover:bg-red-600">
                    <a href="https://t.me/ipicoin" class="hover:text-gray-100">
                        JOIN OUR TELEGRAM GROUP
                    </a>
                </button>
            </div>
        </div>

        <div class=" ml-auto right">
            <img src="https://placehold.co/490x520"
        </div>

    </section>

</template>

<style scoped>

@media (max-width:1600px)
{
    .main-description{
        max-width:540px;
    }
}

@media (max-width:1024px)
{
    img{
        max-width:360px;
    }
}

@media (max-width:940px)
{
    section{
        flex-wrap:wrap;
        margin-top:2rem;
    }
    .right{
        margin-top:1.5rem;
        margin-left:auto;
        margin-right:auto;
    }
    .main-description{
        max-width:94%;
    }
    img{
        max-width:100%;
    }
}

.container{
    max-width:1680px;
}

</style>