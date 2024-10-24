<script setup lang="js">
// import NavBar from './components/Nav.vue'; //PrimeBlock Nav (Bad)
import NavBar2 from './components/Nav-2.vue';
import Advantage from './components/Adv.vue';
import Platform from './components/Platform.vue';
import Ecosystem from './components/Eco.vue';
import Coins from './components/Coins.vue';
import RoadMap from './components/RoadMap.vue';
import Contact from './components/Contact.vue';
import Words from './components/words/words.vue'
</script>

<template>
	<NavBar2/>
	<main>
		<!-- <MAIN/> Finished -->
		<!-- <Advantage/> Works until 1024px // TODO: 768px -> should be good (RM img, Scales text) -->
		<!-- <Platform/> Finished -->
		<!-- <Coins/> Finished -->
		<!-- <RoadMap/> Finished -->
		<!-- <Contact/> Finished -->
		<Words/>
	</main>
</template>