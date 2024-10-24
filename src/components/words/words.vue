<script lang="js">
import { ref } from 'vue';

const texts = [
    'NDEPENDENT ROTOCOL NFRASTRUCTURE',
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

const ccurrent1 = ref('');
const ccurrent2 = ref('');
const ccurrent3 = ref('');

const des1 = ref('');
const des2 = ref('');
const des3 = ref('');

let interval = 200; // milliseconds

let letterIndex = 0;
let counter = 9;

const Arr = [];

export default 
{
    setup() 
    {
        for (let i = 0; i < texts.length; i++) 
        {
            const words = texts[i].split(" "); // Split into words
            Arr.push([...words]); // Create a new array and push it to Arr
        }

        for (let i = 0; i < 10; i++)
        {
            des1.value = Arr[letterIndex][0];
            ccurrent1.value = des1.value;
            des2.value = Arr[letterIndex][1];
            ccurrent2.value = des2.value;
            des3.value = Arr[letterIndex][2];
            ccurrent3.value = des3.value;

            letterIndex++;

            if (counter == 10)
            {
                counter = 0;
                letterIndex = 0;
            }
        }

        return {
            ccurrent1,
            ccurrent2,
            ccurrent3,
        };
    },
};
</script>

<template>
<div style="margin-top:20rem;">
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
</template>