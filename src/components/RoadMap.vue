<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Button from 'primevue/button';

    const roadmapContainer = ref<HTMLElement | null>(null);
    const isDragging = ref(false);
    const startX = ref(0);
    const scrollLeft = ref(0);

    const roadmap = ref([
        {
            quarter: 'Q4 2022',
            dateRange: 'Oct 2022 - Dec 2022',
            description: 'Collecting requirements, creating a business model, software documentationand creating a team of top developers.'
        },
        {
            quarter: 'Q1 2023',
            dateRange: 'Jan 2023 - Mar 2023',
            description: 'Starting IPI Mainnet, Requirement analysis, research and development, designing the architecture of the blockchain network and protocols.',
        },
        {
            quarter: '2023/2024',
            dateRange: 'Apr 2023 - Sep 2024',
            description: 'Development of multi-chain wallet and native scanner.Creating a smart contract engine.Private offering.'
        },
        {
            quarter: '2024/2025',
            dateRange: 'Oct 2024 - Sep 2025',
            description: 'Developing smart contract engine, developer tools, documentation, and basic building blocks'
        },
        {
            quarter: 'Q4 2025',
            dateRange: 'Sep 2025 - Dec 2025',
            description: 'Building a community of developers creating decentralized applications with us. Transitioning existing protocols.'
        },
        {
            quarter: '2025 - till later',
            dateRange: 'late 2025 - till later',
            description: 'Start of public mining. Creating more of decentralized applications.'
        }
    ]);

    const handleScroll = () => {
        const container = roadmapContainer.value;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth - container.clientWidth;

        const scrollPercentage = scrollLeft / scrollWidth;

        container.style.setProperty('--scroll-percentage', scrollPercentage.toString());
    };

    const scrollLeftHandler = () => {
        if (roadmapContainer.value) 
        {
            const scrollAmount = roadmapContainer.value.children[0].clientWidth + 16;
            roadmapContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRightHandler = () => {
        if (roadmapContainer.value) 
        {
            const scrollAmount = roadmapContainer.value.children[0].clientWidth + 16;
            roadmapContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const startDragging = (e: MouseEvent) => {
        if (!roadmapContainer.value)
        {
            return;
        }    
        isDragging.value = true;
        roadmapContainer.value.classList.add('grabbing');
        startX.value = e.pageX - roadmapContainer.value.offsetLeft;
        scrollLeft.value = roadmapContainer.value.scrollLeft;
    };

    const stopDragging = () => {
        if (!roadmapContainer.value)
        {
            return;
        }    
        isDragging.value = false;
        roadmapContainer.value.classList.remove('grabbing');
    };

    const move = (e: MouseEvent) => {
        if (!isDragging.value || !roadmapContainer.value)
        {
            return;
        }    
        e.preventDefault();
        const x = e.pageX - roadmapContainer.value.offsetLeft;
        const walk = (x - startX.value);
        roadmapContainer.value.scrollLeft = scrollLeft.value - walk;
    };

    onMounted(() => {
        if (roadmapContainer) 
        {
            handleScroll();
        }
    });
</script>


<template>
    <section 
        class="hidden-el mb-80 px-4 overflow-hidden relative"
        id="roadmap" 
        v-motion-slide-visible-once-bottom
    >
        <div class="Section-title">
            <h2 class="text-center mx-auto mb-8 font-medium text-5xl text-white">
                ROADMAP
            </h2>
            <p class="text-center mx-auto mb-24 font-medium text-base text-[#7fa3cd]">
                IPI is developing a global network platform for the crypto ecosystem.
            </p>
        </div>
        <div 
            ref="roadmapContainer"
            class="ml-auto flex gap-4 overflow-x-auto pb-2 relative pt-8 max-w-[1640px] scroll-snap-x scroll-smooth cursor-grab select-none no-scrollbar"
            @scroll="handleScroll"
            @mousedown="startDragging"
            @mousemove="move"
            @mouseup="stopDragging"
        >
            <!-- Roadmap Scroll Line -->
            <div 
                class="absolute top-[50px] left-0 w-[calc(100vw+25%)] h-[3px] z-0"
                :style="
                { 
                    background: `linear-gradient(to right, hsl(218, 16.85%, 34.9%) 0%, hsl(0, 72.22%, 50.59%) calc(var(--scroll-percentage, 0%) * 100%), #4a5568 100%)` 
                }"
            ></div>

            <div 
                v-for="(item, index) in roadmap" 
                :key="index" 
                class="flex-shrink-0 max-w-[320px] relative pt-8 z-[1] scroll-snap-start"
            >
                <!-- Roadmap Circles -->
                <div class="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[20px] h-[20px] bg-red-500 rounded-full z-[2] border-2 border-white"></div>
                
                <div class="p-6 rounded-lg text-white mt-5">
                    <div class="font-bold text-sm mb-2 text-center absolute top-[-2rem] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        {{ item.quarter }}
                    </div>
                    <div>
                        <h2 class="text-center text-lg font-semibold text-gray-300">
                            {{ item.dateRange }}
                        </h2>
                    </div>
                    <div>
                        <p class="text-center text-[#7fa3cd] text-base leading-relaxed">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto flex justify-center gap-6 mb-4">
            <Button 
                @click="scrollLeftHandler" 
                severity="secondary" 
                outlined 
                rounded 
                icon="pi pi-chevron-left" 
                class="px-2 py-2"
            />
            <Button 
                @click="scrollRightHandler" 
                severity="secondary" 
                outlined 
                rounded 
                icon="pi pi-chevron-right" 
                class="px-2 py-2"
            />
        </div>
    </section>
</template>

<style scoped>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox fallback */
    }
</style>