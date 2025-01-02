<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue';
	import { RiTelegramFill } from "@remixicon/vue";
	import { RiMailLine } from "@remixicon/vue";

	import Textarea from 'primevue/textarea';
	const textarea = ref('');
	const nameInput = ref('');
	const emailInput = ref('');

	import Button from 'primevue/button'; 
	const loading = ref(false);

	const load = () => {
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
			// Clear all input fields
			textarea.value = '';
			nameInput.value = '';
			emailInput.value = '';
			
			// Clear native input fields
			const inputs = document.querySelectorAll('input');
			inputs.forEach(input => {
				input.value = '';
			});
		}, 2000);
	};

	// let Visible = ref(true);

	// let Observer: IntersectionObserver | null = null;

	// onMounted(() => 
	// {
	// 	Observer = new IntersectionObserver((entries) => 
	// 	{
	// 		entries.forEach(entry => 
	// 		{
	// 			Visible.value = entry.isIntersecting;
	// 		});
	// 	});

	// 	const target = document.getElementById('contact');
	// 	if (target) 
	// 	{
	// 		Observer.observe(target);
	// 	}
	// });

	// onUnmounted(() => 
	// {
	// 	if (Observer)
	// 	{
	// 		Observer.disconnect();
	// 	}
	// })

</script>

<template>
	<section 
		class="container mx-auto px-4 md:px-8 mb-56 mt-96 flex flex-wrap-reverse md:flex-nowrap justify-center items-center gap-4 md:gap-64 hidden-el animate" 
		id="contact" 
		v-motion-slide-visible-once-bottom
	>
		<div class="Contact-details relative w-full md:w-auto">
			<div class="relative flex justify-center items-center">
				<!-- Rotating circles with minimal custom CSS needed -->
				<div class="absolute w-[350px] h-[350px]">
					<div class="circle circle-outer"></div>
					<div class="circle circle-inner"></div>
				</div>
				<div class="relative z-10 py-24 px-24 flex flex-col space-y-4">
					<a href="mailto:hello@ipi.io" class="flex items-center gap-2 text-lg">
						<RiMailLine class="w-[30px] h-[30px]" />
						<p>hello@ipi.io</p>
					</a>
					<a href="https://t.me/@ipicoin" class="flex items-center gap-2 text-lg">
						<RiTelegramFill class="w-[30px] h-[30px]" />
						<p>@ipicoin</p>
					</a>
				</div>
			</div>
		</div>

		<div class="w-full max-w-[560px] px-4 md:px-0">
			<div class="mb-12">
				<h2 class="mb-8 text-2xl font-semibold text-white">
					CONTACT US
				</h2>
				<p class="text-base font-medium text-blue-300">
					We are always open and we welcome and questions you have for our team. 
					If you wish to get in touch, please fill out the form below. Someone from our 
					team will get back to you shortly.
				</p>
			</div>

			<form class="w-full">
				<div class="flex flex-col md:flex-row gap-4 md:gap-8 mb-10">
					<div class="w-full md:w-1/2">
						<h4 class="mb-3 font-bold text-xs tracking-widest text-blue-400">
							YOUR NAME
						</h4>
						<input 
							type="text" 
							v-model="nameInput"
							placeholder="Input your name" 
							class="w-full border border-neutral-600 bg-transparent font-medium rounded-lg px-5 py-2 text-white focus:border-blue-400 focus:outline-none"
						>
					</div>
					<div class="w-full md:w-1/2">
						<h4 class="mb-3 font-bold text-xs tracking-widest text-blue-400">
							YOUR E-MAIL
						</h4>
						<input 
							type="email" 
							v-model="emailInput"
							placeholder="Input your E-mail" 
							class="w-full border border-neutral-600 bg-transparent font-medium rounded-lg px-5 py-2 text-white focus:border-blue-400 focus:outline-none"
						>
					</div>
				</div>

				<div class="w-full">
					<h4 class="mb-2 font-bold text-xs tracking-widest text-blue-400">
						YOUR MESSAGE
					</h4>
					<Textarea 
						id="over_label" 
						placeholder="Your message goes here" 
						v-model="textarea" 
						rows="5" 
						class="w-full bg-transparent border border-neutral-600 rounded-lg focus:border-blue-400 focus:outline-none text-white"
						autoResize 
					/>
				</div>

				<div class="flex justify-end mt-8">
					<Button 
						type="button" 
						label="Submit" 
						icon="pi pi-send" 
						:loading="loading" 
						@click="load" 
						rounded 
						class="px-6 py-4 bg-red-400/20 hover:bg-blue-400 border-red-400/20 hover:border-blue-400 text-white transition-colors duration-300"
					/>
				</div>
			</form>
		</div>
	</section>
</template>

<style scoped>
	/* PrimeVue Textarea Override */
	Textarea:focus{
		border-color:rgb(96, 165, 250) !important;
	}
	/* PrimeVue Button Override */
	Button {
		background-color: #f87171 !important;
		border-color: #f87171 !important;
		transition: all 0.3s ease !important;
	}

	Button:hover {
		background-color: rgb(96, 165, 250) !important;
		border-color: rgb(96, 165, 250) !important;
	}

	Button:active,
	Button.p-button-loading {
		background-color: rgb(96, 165, 250) !important;
		border-color: rgb(96, 165, 250) !important;
	}
	/* Minimal required CSS for rotating circles animation */
	.circle {
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.circle-outer {
		width: 100%;
		height: 100%;
		border: 2px solid transparent;
		border-top-color: white;
		border-right-color: rgba(255, 255, 255, 0.2);
		border-bottom-color: rgba(255, 255, 255, 0.2);
		border-left-color: white;
		animation: rotate 20s infinite linear;
	}

	.circle-inner {
		width: 70%;
		height: 70%;
		border: 2px solid transparent;
		border-top-color: white;
		border-right-color: rgba(255, 255, 255, 0.2);
		border-bottom-color: rgba(255, 255, 255, 0.2);
		border-left-color: white;
		animation: rotate-reverse 15s infinite linear;
	}

	@keyframes rotate {
		0% { transform: translate(-50%, -50%) rotate(0deg); }
		100% { transform: translate(-50%, -50%) rotate(360deg); }
	}

	@keyframes rotate-reverse {
		0% { transform: translate(-50%, -50%) rotate(0deg); }
		100% { transform: translate(-50%, -50%) rotate(-360deg); }
	}
</style>