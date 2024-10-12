<template>
    <section class="roadmap container mx-auto" id="roadmap">
        <div class="roadmap-controls">
            <button @click="scrollLeft" class="scroll-button">←</button>
            <button @click="scrollRight" class="scroll-button">→</button>
        </div>
        <div class="roadmap-scroll-container" ref="roadmapContainer" @scroll="handleScroll">
            <div class="roadmap-item" v-for="(item, index) in roadmap" :key="index">
                <div class="roadmap-circle"></div>
                <div class="roadmap-content">
                    <div class="period">{{ item.period }}</div>
                    <div class="date-range">{{ item.dateRange }}</div>
                    <div class="description">{{ item.description }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const roadmap = ref([
    {
        period: 'Q1 2023',
        dateRange: 'Jan 2023 - Mar 2023',
        description: 'Starting IPI Mainnet. Requirement analysis, research and development, designing the architecture of the blockchain network and protocols.'
    },
    {
        period: 'Q2 2023',
        dateRange: 'Apr 2023 - Sep 2023',
        description: 'Development of multi-chain wallet and native scanner. Creating a smart contract engine. Private offering.'
    },
    {
        period: 'Q3 2024',
        dateRange: 'Oct 2023 - Sep 2024',
        description: 'Developing smart contract engine, developer tools, documentation, and basic building blocks.'
    },
    {
        period: 'Q4 2024',
        dateRange: 'Oct 2024 - Dec 2024',
        description: 'Building a community of developers, creating decentralized applications with us. Transitioning existing protocols.'
    },
    {
        period: 'Q4 2024',
        dateRange: 'Oct 2024 - Dec 2024',
        description: 'Building a community of developers, creating decentralized applications with us. Transitioning existing protocols.'
    },
    {
        period: 'Q1 2025',
        dateRange: 'Jan 2025 - till later',
        description: 'Start of public mining. Completion of decentralized applications.'
    }
]);

const roadmapContainer = ref<HTMLElement | null>(null);

// Function to handle scroll and update the line's color
const handleScroll = () => {
    const container = roadmapContainer.value;
    if (!container) return;

    // Get the scroll position and the total scrollable width
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    // Calculate the scroll percentage (0 to 1)
    const scrollPercentage = scrollLeft / scrollWidth;

    // Set the CSS variable based on scroll percentage
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
    padding: 2rem 0;
    overflow-x: hidden;
}

/* Controls for scrolling */
.roadmap-controls {
    display: flex;
    justify-content: center; /* Center the buttons */
    margin-bottom: 1rem; /* Spacing below buttons */
}

.scroll-button {
    background-color: #63b3ed;
    color: white;
    border: none;
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
}

/* Timeline line (pseudo-element) */
.roadmap-scroll-container::before {
    content: '';
    position: absolute;
    top: 50px; /* Position the line correctly */
    left: 0;
    width: calc(100% + 23%); /* Ensure the line spans the full width of the container */
    height: 2px;
    /* Dynamic background gradient controlled by scroll */
    background: linear-gradient(to right, #4a5568 0%, #63b3ed calc(var(--scroll-percentage, 0%) * 100%), #4a5568 100%);
    z-index: 0; /* Keep it behind the circles */
    transition: background 0.3s ease-in-out;
}

/* Each roadmap item */
.roadmap-item {
    flex-shrink: 0;
    width: 300px; /* Adjust width as necessary */
    position: relative;
    padding-top: 2rem;
    z-index: 1; /* Ensure items stay above the line */
}

/* The circle on the timeline */
.roadmap-circle {
    position: absolute;
    top: 10px; /* Adjust to align the circle over the line */
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-color: #2b6cb0;
    border-radius: 50%;
    z-index: 2; /* Ensure the circle is above the line */
    border: 3px solid #4a5568; /* Match the circle's border to the line */
}

/* Each content box */
.roadmap-content {
    background-color: #1b263b;
    padding: 1.5rem;
    border-radius: 8px;
    color: #ffffff;
    text-align: left;
    border: 1px solid #2d3748;
    margin-top: 20px; /* Add spacing between the circle and content */
}

.period {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #63b3ed;
    text-align: center;
    position: absolute;
    top: -2rem; /* Move the Q1/Q2 text above the timeline */
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap; /* Ensure the period text stays on one line */
}

.date-range {
    font-size: 0.875rem;
    color: #cbd5e0;
    margin-bottom: 1rem;
}

.description {
    font-size: 1rem;
    line-height: 1.4;
}

/* Responsiveness for mobile */
@media (max-width: 768px) {
    .roadmap-item {
        width: 250px;
    }

    .roadmap-content {
        padding: 1rem;
    }

    .period {
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

    .period {
        font-size: 1rem;
    }

    .description {
        font-size: 0.75rem;
    }
}
</style>
