<script lang="js">

let current1 = "";
let current2 = "";
let current3 = "";

let desired1 = "NDEPENDENT";
let desired2 = "ROTOCOL";
let desired3 = "NFRASTRUCTURE";

let interval = 200; // milliseconds

let index1 = 0;
let index2 = 0;
let index3 = 0;

let currentWordIndex = 0; // Track which word is being updated

const intervalId = setInterval(() => 
{
    switch (currentWordIndex) 
    {
    case 0:
        current1 += desired1[index1];

        document.querySelector(".I-1").textContent = current1;

        index1 = (index1 + 1) % desired1.length;

        if (current1 === desired1) 
        {
        currentWordIndex = 1; // Move to the next word
        }

        break;
    case 1:
        current2 += desired2[index2];

        document.querySelector(".P-1").textContent = current2;

        index2 = (index2 + 1) % desired2.length;

        if (current2 === desired2) 
        {
        currentWordIndex = 2; // Move to the next word
        }

        break;
    case 2:
        current3 += desired3[index3];

        document.querySelector(".I-2").textContent = current3;

        index3 = (index3 + 1) % desired3.length;

        if (current3 === desired3) 
        {
        clearInterval(intervalId); // Stop the interval when all words are complete
        console.log("All words generated successfully!");
        }

        break;
    }
}, interval);


</script>

<template>

    <section 
        class="container mx-auto px-8 mb-72 pt-36 flex justify-between items-center hidden-el" 
        id="main"
        v-motion-slide-visible-once-bottom
    >
        <div class="left flex flex-col">
            <div class="Generate">
                <h2 class="my-4 text-red-600 text-6xl">
                    I<span class="I-1 text-neutral-200 uppercase mx-2">{{ current1 }}</span>
                </h2>
                <h2 class="my-4 text-red-600 text-6xl">
                    P<span class="P-1 text-neutral-200 uppercase mx-2">{{ current2 }}</span>
                </h2>
                <h2 class="my-4 text-red-600 text-6xl">
                    I<span class="I-2 text-neutral-200 uppercase mx-2">{{ current3 }}</span>
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