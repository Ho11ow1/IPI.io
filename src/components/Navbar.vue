<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from "vue";
    import { RiMenuFill } from "@remixicon/vue";

    const isMenuOpen = ref(false);
    const isSticky = ref(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const toggleSticky = () => {
        isSticky.value = window.scrollY > 0;
    };

    const scrollToSection = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) 
        {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    onMounted(() => {
        window.addEventListener("scroll", toggleSticky);
        toggleSticky();
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", toggleSticky);
    });
</script>

<template>
    <header 
        class="w-full bg-[#151C31] sticky top-0 left-0 z-[1000] transition-colors duration-300"
        :class="[isSticky ? 'bg-[hsl(222.86,53.85%,8.75%)]' : '']"
        id="header" 
        v-motion-slide-visible-once-bottom
    >
        <nav class="container mx-auto py-4 flex justify-between text-base">
            <div class="pl-2">
                <a href="/" class="flex items-center justify-center">
                    <img src="/ipi.svg" alt="Vue Logo" class="max-w-[52px]"/>
                    <h2 class="ml-3 text-3xl font-semibold">
                        IPI
                    </h2>
                </a>
            </div>
            <div class="flex items-center md:hidden">
                <RiMenuFill 
                    class="text-3xl text-neutral-300 cursor-pointer absolute right-4" 
                    @click="toggleMenu" 
                />
            </div>
            <div 
                :class="[
                    isMenuOpen ? 'block' : 'hidden',
                    'md:flex'
                ]"
            >
                <ul class="flex flex-col md:flex-row gap-4 md:gap-10 items-center text-base
                        absolute md:static top-full left-0 right-0 
                        w-screen md:w-auto
                        bg-[#0E1321] md:bg-transparent
                        p-4 md:p-0
                        z-[1000]">
                    <li>
                        <a href="#app">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#advantages">
                            Advantages
                        </a>
                    </li>
                    <li>
                        <a href="#platform">
                            Platform
                        </a>
                    </li>
                    <li>
                        <a href="#coins">
                            Coins
                        </a>
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('roadmap')" href="#roadmap">
                            Roadmap
                        </a>
                    </li>
                    <li>
                        <a href="https://scan.ipi.io">
                            Scan
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="https://wallet.ipi.io">
                            <button class="border-2 border-red-600 px-6 py-2 rounded-3xl text-base font-medium hover:bg-red-600 hover:text-white">
                                WALLET
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
