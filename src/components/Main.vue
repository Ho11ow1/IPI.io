<script setup lang="js">
    import WORDS from './words/words.vue'
    
</script>

<template>
    <section 
        class="container mx-auto px-8 mb-60 pt-36 flex flex-wrap justify-between items-center hidden-el max-w-[1680px] lg:flex-nowrap"
        id="main"
        v-motion-slide-visible-once-bottom
    >
        <div class="left flex flex-col w-full max-w-[1024px]">
            <WORDS/>
            <div class="flex justify-center gap-8 mt-8">
                <button class="border-2 border-[#f42f54] bg-[#f42f54] text-white text-sm font-medium rounded-3xl px-6 py-3 hover:bg-neutral-100 hover:border-neutral-100 hover:text-[#f42f54]">
                    <a href="https://ipi.io/whitepaper.pdf">
                        READ OUR WHITEPAPER
                    </a>
                </button>
                <button class="border-2 border-[#f42f54] text-white text-sm font-medium rounded-3xl px-6 py-3 hover:bg-[#f42f54]">
                    <a href="https://t.me/ipicoin">
                        JOIN TELEGRAM GROUP
                    </a>
                </button>
            </div>
        </div>

        <div class="right mt-6 mx-auto lg:ml-auto lg:mt-0">
            <img src="https://placehold.co/490x520" class="w-full max-w-[490px] lg:max-w-[360px] xl:max-w-[490px]" />
        </div>
    </section>
</template>