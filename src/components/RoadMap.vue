<template>
    <section class="roadmap" id="roadmap">
        <div class="roadmap-scroll-container ml-auto" ref="roadmapContainer" @scroll="handleScroll">
            <div class="roadmap-item" v-for="(item, index) in roadmap" :key="index">
                <div class="item-circle"></div>
                <div class="item-content">
                    <div class="quarter">{{ item.quarter }}</div>
                    <div class="date-range"><h2 class="text-center text-neutral-100">{{ item.dateRange }}</h2></div>
                    <div class="description"><p class="text-center text-gray-400">{{ item.description }}</p></div>
                </div>
            </div>
        </div>
        <div class="roadmap-controls mx-auto">
            <button @click="scrollLeft" class="scroll-button">←</button>
            <button @click="scrollRight" class="scroll-button">→</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
        quarter: 'Q2 2023',
        dateRange: 'Apr 2023 - Sep 2023',
        description: 'Development of multi-chain wallet and native scanner.Creating a smart contract engine.Private offering.'
    },
    {
        quarter: 'Q3 2024',
        dateRange: 'Oct 2023 - Sep 2024',
        description: 'Developing smart contract engine, developer tools, documentation, and basic building blocks'
    },
    {
        quarter: 'Q4 2024',
        dateRange: 'Oct 2024 - Dec 2024',
        description: 'Building a community of developers creating decentralized applications with us. Transitioning existing protocols.'
    },
    {
        quarter: 'Q1 2025 - till later',
        dateRange: 'Jan 2025 - till later',
        description: 'Start of public mining. Creating more of decentralized applications.'
    }
]);

const roadmapContainer = ref<HTMLElement | null>(null);

// Function to handle scroll and update the line's color
const handleScroll = () => {
    const container = roadmapContainer.value;
    if (!container) return;

    // Get the scroll position and the total width
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    // Calculate the scroll percentage (0 to 1)
    const scrollPercentage = scrollLeft / scrollWidth;

    // Set the CSS based on scroll percentage
    container.style.setProperty('--scroll-percentage', scrollPercentage.toString());
};

// Function to scroll left
const scrollLeft = () => {
    if (roadmapContainer.value) {
        const scrollAmount = roadmapContainer.value.children[0].clientWidth + 16; // Width of item + gap
        roadmapContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
};

// Function to scroll right
const scrollRight = () => {
    if (roadmapContainer.value) {
        const scrollAmount = roadmapContainer.value.children[0].clientWidth + 16; // Width of item + gap
        roadmapContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};

onMounted(() => {
    if (roadmapContainer.value) {
        handleScroll(); // Initial call to set the line color when the page loads
    }
});
</script>

<style scoped>
.roadmap {
    background-color: #0d1b2a;
    padding: 2rem 1rem;
    overflow-x: hidden;;
}

/* Controls for scrolling */
.roadmap-controls {
    display: flex;
    justify-content: center; /* Center the buttons */
    margin-bottom: 1rem; /* Spacing below buttons */
}

.scroll-button {
    background-color: transparent;
    color: white;
    border:2px solid #fff;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.scroll-button:hover {
    background-color: #4a5568;
}

/* Scroll container for horizontal scrolling */
.roadmap-scroll-container {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 10px;
    scrollbar-width: none;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    position: relative;
    padding-top: 2rem;
    max-width:1640px
}

.roadmap-scroll-container::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 0;
    width: calc(100% + 38%); /* Ensure the line spans the full width of the container */
    height: 3px;
    /*controlled by scroll */
    background: linear-gradient(to right, #4a5568 0%, rgb(220, 38, 38) calc(var(--scroll-percentage, 0%) * 100%), #4a5568 100%);
    z-index: 0;
    transition: background 0.3s ease-in-out;
}

/* Each roadmap item */
.roadmap-item {
    flex-shrink: 0;
    max-width:320px;
    position: relative;
    padding-top: 2rem;
    z-index: 1; /* Ensure items stay above the line */
}

/* The circles go brr */
.item-circle {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-color:rgb(220, 38, 38);
    border-radius: 50%;
    z-index: 2; /* Ensure the circle is above the line */
    border: 2px solid #fff;
}

.item-content {
    padding: 1.5rem;
    border-radius: 8px;
    color: #ffffff;
    margin-top: 20px;
}

/*QX - year*/
.quarter {
    font-size: .95rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
    position: absolute;
    top: -2rem; /* Move the text above the line */
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap; /* Ensure the text stays inline */
}

/* The date */
.date-range {
    font-size: 1.1rem;
    font-weight:600;
    color: #cbd5e0;
    margin-bottom: 1rem;
}

.description {
    font-size: .9rem;
    font-weight:400;
    line-height: 1.4;
}

@media (max-width: 768px) {
    .roadmap-item {
        width: 250px;
    }

    .item-content {
        padding: 1rem;
    }

    .quarter {
        font-size: 1.1rem;
    }

    .description {
        font-size: 0.875rem;
    }
}

@media (max-width: 560px) {
    .roadmap-item {
        width: 200px;
    }

    .quarter {
        font-size: 1rem;
    }

    .description {
        font-size: 0.75rem;
    }
}
</style>
