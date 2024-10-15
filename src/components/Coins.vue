<script setup>
    import HELPME from './things/work.vue'
</script>

<template>
    <section class="coins container mx-auto mb-72 pt-36 hidden-el" id="coins">
        <div class="Section-title">
            <h2 class="text-center mx-auto mb-8 font-medium text-5xl text-neutral-300">
                COINS
            </h2>
            <p class="text-center mx-auto mb-24 font-medium text-medium text-neutral-300">
                Breakdown of our Coin Recipients.
            </p>
        </div>
        <div class="container flex mx-auto flex-row items-center justify-between Mobile">
            <div class="Mid flex">
                <div class="grid grid-cols-2 items-center gap-4 max-w-xl second">
                    <div class="distribution-item text-left">
                        <h2 class="distribution-title text-xl mb-4">
                            Public Coin Sale 6.5M
                        </h2>
                        <p class="distribution-des max-w-64">
                            65% (To ensure maximal decentralization)
                        </p>
                    </div>
                    <div class="distribution-item text-left grid-column">
                        <h2 class="distribution-title text-xl mb-4">
                            Team Incentive 1.5M
                        </h2>
                        <p class="distribution-des max-w-64">
                            15% (Reward for building software)
                        </p>
                    </div>
                    <div class="distribution-item text-left grid-column">
                        <h2 class="distribution-title text-xl mb-4">
                            Marketing 1M
                        </h2>
                        <p class="distribution-des max-w-64">
                            10% (Advertising and promotional <br/>activities)
                        </p>
                    </div>
                    <div class="distribution-item text-left grid-column">
                        <h2 class="distribution-title text-xl mb-4">
                            Reserve Fund
                        </h2>
                        <p class="distribution-des max-w-64">
                            7% (To be burned after 36 <br/>months)
                        </p>
                    </div>
                    <div class="flex flex-row">
                        <div class="distribution-item text-left grid-column">
                        <h2 class="distribution-title text-xl mb-4">
                            Bug bounty
                        </h2>
                        <p class="distribution-des max-w-64">
                            3% (6 months lockup)
                        </p>
                    </div>
                </div>
            </div>
            <!-- Interactive Pie Chart Section -->
            <div class="flex flex-col items-center mr-12 chart">
                <HELPME/>
            </div>
        </div>

            <div class="flex items-center">
                <div class="info-section grid grid-cols-2 gap-6 max-w-screen-sm stats">
                    <div class="info-box flex items-center px-3 py-3">
                        <div class="info-line purple"></div>
                        <div class="info-content flex flex-col">
                            <p class="info-title text-neutral-300">START TIME</p>
                            <p class="info-value font-semibold">July, 2023</p>
                        </div>
                    </div>
                    <div class="info-box flex items-center px-3 py-3">
                        <div class="info-line orange"></div>
                        <div class="info-content flex flex-col">
                            <p class="info-title text-neutral-300">COIN SYMBOL</p>
                            <p class="info-value font-semibold">IPI</p>
                        </div>
                    </div>
                    <div class="info-box flex items-center px-3 py-3">
                        <div class="info-line red"></div>
                        <div class="info-content flex flex-col">
                            <p class="info-title text-neutral-300">MINING START</p>
                            <p class="info-value font-semibold">1 January, 2025</p>
                        </div>
                    </div>
                    <div class="info-box flex items-center px-3 py-3">
                        <div class="info-line blue"></div>
                        <div class="info-content flex flex-col">
                            <p class="info-title text-neutral-300">COINS OFFERED</p>
                            <p class="info-value font-semibold">6.5M</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>

.info-title{
    font-size:1.1rem;
    font-weight:600;
    letter-spacing:.1rem;
    margin-bottom:.6rem;
}

.max-w-xl{
    max-width:600px;
}

.max-w-64{
    max-width:22rem;;
}

.grid-column{
    grid-column: 1/2;
}

.info-line {
    width: 4px;
    height: 100%;
    margin-right: 10px;
    border-radius: 2px;
}

.info-box{
    width:240px;
}

.purple {
    background-color: #8e44ad;
}

.orange {
    background-color: #f39c12;
}

.red {
    background-color: #e74c3c;
}

.blue {
    background-color: #3498db;
}

.distribution-item{
    position:relative;
    padding:.75rem 1.5rem;
    padding-right:2.25rem;
}

.distribution-des{
    width:100%;
}

.distribution-item:before, .distribution-item:after {
    position: absolute;
    content: '';
    top: 0;
    height: 100%;
    width: 45px;
    border: 2px solid #97afd5;
}

.distribution-item::before{
    left:0;
    border-radius:6px 0 0 6px;
    border-right:none;
}

.distribution-item:after {
    right:0;
    border-radius:0 6px 6px 0;
    border-left:none;
}

/*-----------------------------------CHARTS HOVER EFFECT-----------------------------------------*/
/* .distribution-item::before, .distribution-item:after{
    border-color:#f42f54;
} */

canvas{
    max-width:480px;
    max-height:480px;
}

@media (max-width:1280px)
{
    .Mobile{
        display:grid;
        grid-template-rows:repeat(2, 1fr);
    }
    .info-section{
        margin-left:auto;
        margin-right:auto;
    }
}

@media (max-width:940px)
{
    .Mobile{
        display:grid;
        grid-template-rows:repeat(3, 1fr);
    }
    .second{
        display:flex;
        flex-wrap:wrap;
        max-width:380px;
    }
    .chart{
        max-width:300px;
    }
    .info-section{
        grid-template-columns:repeat(2, 1fr);
        max-width:100%;
        column-gap:12rem;
    }
}

</style>