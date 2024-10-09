<script setup>
// import NavBar from './components/Nav.vue'; PrimeBlock Nav (Bad)
import NavBar2 from './components/Nav-2.vue';
import MAIN from './components/Main.vue';
import Advantage from './components/Adv.vue';
import Platform from './components/Platform.vue';
import Ecosystem from './components/Eco.vue';
import Coins from './components/Coins.vue';
import Contact from './components/Contact.vue';

</script>

<template>
	<NavBar2/>
	<main>
		<!-- <MAIN/> --> <!--Good to go 768px-->
		<!-- <Advantage/> --> <!-- NEED TO REWRITE THIS FROM SCRATCH-->
		<!-- <Platform/> --> <!--Good to go 768px-->
		<!-- <Ecosystem/> SHOULD PROBABLY REMOVE THIS-->
		<Coins/> <!--Good to go 768px MAKE COINS BIGGER-->
		<!-- <Contact/>-->  <!-- Good to go 768px-->
	</main>
</template>