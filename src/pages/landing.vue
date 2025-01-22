<script setup lang="ts">
	import { ref, onMounted } from 'vue';

	import NavBar from '../components/navbar.vue';
	import Main from '../components/main.vue';
	import Advantage from '../components/advantage.vue';
	import Platform from '../components/platform.vue';
	import Coins from '../components/coins.vue';
	import RoadMap from '../components/roadMap.vue';
	import Contact from '../components/contact.vue';

	const Loaded = ref(false);
	// Make sure all are loaded // else: Spinner
	onMounted(() =>
	{
		Promise.allSettled
		([
			NavBar,
			Main,
			Advantage,
			Platform,
			Coins,
			RoadMap,
			Contact
		]).then(() => 
		{
			Loaded.value = true;
		});
	});
</script>

<template>
	<div v-if="Loaded" class="outer-body">
		<NavBar/>
		<main>
			<Main/>
			<Advantage/>
			<Platform/>
			<Coins/>
			<RoadMap/>
			<Contact/>
		</main>
	</div>
	<div v-else class="flex justify-center items-center min-h-screen bg-gray-100">
		<h2 class="text-2xl font-extrabold text-blue-500 animate-bounce">
			LOADING...
		</h2>
	</div>
</template>