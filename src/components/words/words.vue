<script setup lang="js">
import { ref } from 'vue';

const texts = [
    'ndependant rotocol nfrastructure',
    'nternational ayment nstrument',
    'nternet eer-to-Peer nvestment',
    'nnovative ayment nfrastructure',
    'nstant ayment ntegration',
    'ntelligent ayment nterface',
    'nternet ayment nitiative',
    'nnovative ayment nstrument',
    'nternational ayment nfrastructure',
    'ntelligent ayment nterface'
];

const currentWord1 = ref('');
const currentWord2 = ref('');
const currentWord3 = ref('');
const currentDescription = ref('');

const word1 = ref('');
const word2 = ref('');
const word3 = ref('');
const fullDescription = ref('');
let word1Index = 0;
let word2Index = 0;
let word3Index = 0;
let descriptionIndex = 0;

const wordsArray = [];
let wordArrayIndex = 0;
let activeWordIndex = 0;

// Split texts into words and populate wordsArray
for (let i = 0; i < texts.length; i++) 
{
    const words = texts[i].split(" ");
    wordsArray.push([...words]);
}

word1.value = wordsArray[wordArrayIndex][0];
word2.value = wordsArray[wordArrayIndex][1];
word3.value = wordsArray[wordArrayIndex][2];
fullDescription.value = 'E COMBINE THE BEST PROTOCOLS TO BUILD THE FASTEST, '+ 'SAFEST AND SIMPLEST NON-CUSTODIAL BLOCKCHAIN FOR STORING, '+
                        'TRADING, DAPPS, DEFI, NFT AND MORE POWERED BY IPI UTILITY COIN. '+ 'MOST POPULAR COINS WRAPPED.';

let descriptionTypingDelay = 30;
let descriptionTypingCounter = 0;

let descriptionIntervalId = setInterval(() => {
    if (descriptionTypingCounter < 200) 
    {
        currentDescription.value += fullDescription.value[descriptionIndex];
        descriptionIndex = (descriptionIndex + 1) % fullDescription.value.length;
        descriptionTypingCounter++;
    } 
    else 
    {
        clearInterval(descriptionIntervalId);
    }
}, descriptionTypingDelay);

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

let typingInterval = 175;

async function typeWriter() 
{
    while (true) 
    {
        switch (activeWordIndex) 
        {
            case 0:
                currentWord1.value += word1.value[word1Index];
                word1Index++;

                if (word1Index >= word1.value.length) 
                {
                    activeWordIndex = 1;
                    word1Index = 0;
                }
                break;

            case 1:
                currentWord2.value += word2.value[word2Index];
                word2Index++;

                if (word2Index >= word2.value.length) 
                {
                    activeWordIndex = 2;
                    word2Index = 0;
                }
                break;

            case 2:
                currentWord3.value += word3.value[word3Index];
                word3Index++;

                if (word3Index >= word3.value.length) 
                {
                    await sleep(1500);
                    currentWord1.value = '';
                    currentWord2.value = '';
                    currentWord3.value = '';
                    word3Index = 0; // Reset index in case of OutOfSync error
                    activeWordIndex = 0;

                    // Update words for the next set
                    wordArrayIndex = (wordArrayIndex + 1) % wordsArray.length;
                    word1.value = wordsArray[wordArrayIndex][0];
                    word2.value = wordsArray[wordArrayIndex][1];
                    word3.value = wordsArray[wordArrayIndex][2];
                }
                break;
        }

        await sleep(typingInterval);
    }
}

typeWriter();
</script>

<template>
    <div class="Generate">
        <h2 class="my-4 text-red-600 text-6xl">
            I<span class="II-1 text-neutral-200 uppercase mx-1">{{ currentWord1 }}</span>
        </h2>
        <h2 class="my-4 text-red-600 text-6xl">
            P<span class="PP-1 text-neutral-200 uppercase mx-1">{{ currentWord2 }}</span>
        </h2>
        <h2 class="my-4 text-red-600 text-6xl">
            I<span class="II-2 text-neutral-200 uppercase mx-1">{{ currentWord3 }}</span>
        </h2>
    </div>
    <h3 class="mt-8 text-1xl max-w-5xl text-[#7fa3cdff]">
        W<span class="">{{ currentDescription }}</span>
    </h3>
</template>
