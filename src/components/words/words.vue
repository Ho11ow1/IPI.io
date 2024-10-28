<script setup lang="js">
import { ref } from 'vue';

const texts = [
    'NDEPENDENT ROTOCOL NFRASTRUCTURE-',
    'nternational ayment nstrument-',
    'nternet eer-to-Peer nvestment-',
    'nnovative ayment nfrastructure-',
    'nstant ayment ntegration-',
    'ntelligent ayment nterface-',
    'nternet ayment nitiative-',
    'nnovative ayment nstrument-',
    'nternational ayment nfrastructure-',
    'ntelligent ayment nterface-'
];

const ccurrent1 = ref('');
const ccurrent2 = ref('');
const ccurrent3 = ref('');
const curdesc = ref('');

const des1 = ref('');
let index1 = 0;
const des2 = ref('');
let index2 = 0;
const des3 = ref('');
let index3 = 0;
const desdesc = ref ('');
let index4 = 0;

let interval = 300; // milliseconds

let letterIndex = 0;

const Arr = [];

let currentWordIndex = 0; // Track which word is being updated

for (let i = 0; i < texts.length; i++) 
{
    const words = texts[i].split(" "); // Split into words
    Arr.push([...words]); // Create a new array and push it to Arr
}

des1.value = Arr[letterIndex][0];
des2.value = Arr[letterIndex][1];
des3.value = Arr[letterIndex][2];
desdesc.value = 'E COMBINE THE BEST PROTOCOLS TO BUILD THE FASTEST, SAFEST AND SIMPLEST NON-CUSTODIAL BLOCKCHAIN FOR STORING, TRADING, DAPPS, DEFI, NFT AND MORE POWERED BY IPI UTILITY COIN. MOST POPULAR COINS WRAPPED.'; // Set the initial value for the fourth word

let delay = 30;
let i = 0;

let IntervalId = setInterval(()=>{
    if (i < 200)
    {
        curdesc.value += desdesc.value[index4];
        index4 = (index4 + 1) % desdesc.value.length;
        i++;
    }
    else
    {
        clearInterval(IntervalId);
    }
}, delay)

const IntervalID = setInterval(() => 
    {
        switch (currentWordIndex)
        {   
            case 0:
                ccurrent1.value += des1.value[index1];
                index1 = (index1 + 1) % des1.value.length;

                if (ccurrent1.value === des1.value)
                {
                    currentWordIndex = 1;

                    letterIndex = (letterIndex + 1) % Arr.length;
                    // Update the displayed words for the next set
                    des1.value = Arr[letterIndex][0];
                    des2.value = Arr[letterIndex-1][1];
                    des3.value = Arr[letterIndex-1][2];
                }
            break;

            case 1:
                ccurrent2.value += des2.value[index2];
                index2 = (index2 + 1) % des2.value.length;
                if (ccurrent2.value === des2.value)
                {
                    currentWordIndex = 2;
                }
            break;

            case 2:
                ccurrent3.value += des3.value[index3];
                index3 = (index3 + 1) % des3.value.length;
                if (ccurrent3.value === des3.value)
                {
                    ccurrent1.value = "";
                    ccurrent2.value = "";
                    ccurrent3.value = "";
                    currentWordIndex = 0;
                    console.log("All words generated successfully!");
                }
            break;
        }

    }, interval)
</script>

<template>
    <div class="Generate">
        <h2 class="my-4 text-red-600 text-6xl">
            I<span class="II-1 text-neutral-200 uppercase mx-2">{{ ccurrent1 }}</span>
        </h2>
        <h2 class="my-4 text-red-600 text-6xl">
            P<span class="PP-1 text-neutral-200 uppercase mx-2">{{ ccurrent2 }}</span>
        </h2>
        <h2 class="my-4 text-red-600 text-6xl">
            I<span class="II-2 text-neutral-200 uppercase mx-2">{{ ccurrent3 }}</span>
        </h2>
    </div>
    <h3 class="text-gray-400 mt-8 text-1xl max-w-5xl main-description">
        W<span class="">{{ curdesc }}</span>
    </h3>
</template>