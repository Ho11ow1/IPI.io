<script setup>
// import NavBar from './components/Nav.vue'; PrimeBlock Nav (Bad)
import NavBar2 from './components/Nav-2.vue';
import MAIN from './components/Main.vue';
import Advantage from './components/Adv.vue';
import Platform from './components/Platform.vue';
import Ecosystem from './components/Eco.vue';
import Coins from './components/Coins.vue';
import RoadMap from './components/RoadMap.vue';
import Contact from './components/Contact.vue';

</script>

<template>
	<NavBar2/>
	<main>
		<MAIN/> <!--Good to go 768px + 1240px-->
		<!--<Advantage/>--> <!--Works until 1024px // TODO: 768px -> should be good (RM img, Scales text) -->
		<Platform/> <!--Good to go 768px-->
		<!-- <Ecosystem/> SHOULD PROBABLY REMOVE THIS-->
		<Coins/> <!--Good to go 768px + 1240px-->
		<RoadMap/>
		<Contact/>  <!-- Good to go 768p + 1240px-->
	</main>
</template>