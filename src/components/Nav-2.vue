<script setup lang="ts">
import { RiHeartFill } from "@remixicon/vue";
</script>

<template>

    <header class="header w-full" id="header">
        <nav class="nav container mt-3 mx-auto py-6 flex justify-between text-base font-semibold">
            <div class="Nav-logo">
                <a href="/" class="flex items-center justify-center">
                    <img src="../assets/vue.svg">
                    <h2 class="ml-3 text-neutral-300 font-medium text-3xl">
                        IPI
                    </h2>
                </a>
            </div>
            <div class="nav--menu">
                <ul class="nav--list flex flex-row gap-10 items-center text-neutral-300 ">
                    <li class="nav--item">
                        <a href="#app">
                            Home
                        </a>
                    </li>
                    <li class="nav--item">
                        <a href="#advantages">
                            Advantages
                        </a>
                    </li>
                    <li class="nav--item">
                        <a href="#platform">
                            Platform
                        </a>
                    </li>
                    <!-- <li class="nav--item">
                        <a href="#eco">
                            Ecosystem
                        </a>
                    </li> -->
                    <li class="nav--item">
                        <a href="#coins">
                            Coins
                        </a>
                    </li>
                    <li class="nav--item">
                        <a href="https://scan.ipi.io">
                            Scan
                        </a>
                    </li>
                    <li class="nav--item">
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li class="nav--item">
                        <a href="https://wallet.ipi.io">
                            <button class="border-solid border-2 border-red-600 px-6 py-2 rounded-3xl text-base font-semibold">
                                WALLET
                            </button>
                        </a>
                    </li>
                </ul>
                <!-- <RiHeartFill class="ri Hamburger"/> -->
                <!--Add hamburger here on width and stuff-->
            </div>
        </nav>
    </header>

</template>

<style scoped>

.header{
    background-color:#0f1932;
    position:sticky;
    top:0;
    left:0;
    z-index:1000;
}

@media (max-width:1023px)
{
    header{
        padding-top:.75rem;
    }
    .nav--list{
        gap:1rem;
    }
}

</style>