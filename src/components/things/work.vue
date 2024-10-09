<template>
    <Pie :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './killingmyself.js'

ChartJS.register(ArcElement, Tooltip);

export default {
    name: 'App',
    components: {
    Pie
    },
    data() {
    return chartConfig
    }
}
</script>
