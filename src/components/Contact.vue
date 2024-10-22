<script setup>
import { ref } from 'vue';

import { RiTelegramFill } from "@remixicon/vue";
import { RiMailLine } from "@remixicon/vue";

import Textarea from 'primevue/textarea';

const value2 = ref('');

import Button from 'primevue/button'; 

const loading = ref(false);

const load = () => 
{
    loading.value = true;
    setTimeout(() => 
	{
        loading.value = false;
    }, 2000);
};

const show = ref(true);

</script>

<template>
	<Transition :duration="600" name="flow">
	<section class="container mx-auto px-8 mb-56 flex justify-center items-center hidden-el" id="contact" v-if="show">
		<div class="Contact-details mr-14">
			<div class="contact-section">
				<div class="rotating-circles">
					<div class="circle circle-outer"></div>
					<div class="circle circle-inner"></div>
				</div>
				<div class="contact-info flex flex-col py-24 px-24">
					<a href="mailto:hello@ipi.io" class="flex items-center gap-2">
						<RiMailLine style="width:30px; height:30px;"> </RiMailLine>
						<p class="">
							hello@ipi.io
						</p>
					</a>
					<a href="https://t.me/@ipicoin" class="flex items-center gap-2">
						<RiTelegramFill style="width:30px; height:30px;"> </RiTelegramFill>
						<p class="">
							@ipicoin
						</p>
					</a>
				</div>
			</div>
		</div>
		<div class="Form max-w-screen-sm">
			<h2 class="mb-8 text-gray-200 text-2xl font-medium">
				CONTACT US
			</h2>
			<p class="mb-12 text-gray-400 text-base font-medium">
				We are always open and we welcome and questions you have for our team. 
				If you wish to get in touch, please fill out the form below. Someone from our 
				team will get back to you shortly.
			</p>
			<form class="">
				<div class="top mb-10 flex gap-8">
					<div class="Names">
						<h4 class="text-gray-400 mb-3 ml-2 font-bold text-xs tracking-widest">
							YOUR NAME
						</h4>
						<input type="text" placeholder="Input your name" class="border-solid border border-neutral-600  bg-transparent font-medium rounded-lg px-5 py-2">
					</div>
					<div class="Emails">
						<h4 class="text-gray-400 mb-3 ml-2 font-bold text-xs tracking-widest">
							YOUR E-MAIL
						</h4>
						<input type="email" placeholder="Input your E-mail" class="border-solid border border-neutral-600  bg-transparent font-medium rounded-lg px-5 py-2">
					</div>
				</div>
				<div class="msg">
					<div class="Bot">
						<h4 class="text-gray-400 mb-2 ml-2 font-bold text-xs tracking-widest">
							YOUR MESSAGE
						</h4>
						<!-- <textarea type="text" placeholder="Your message goes here" class="border-solid border border-neutral-600  bg-transparent font-medium rounded-lg px-5 py-2 h-28 w-full"></textarea> -->
						<FloatLabel variant="in">
							<Textarea id="over_label" placeholder="In Label"v-model="value2" rows="5" cols="38" autoResize />
							<!--<label for="in_label">In Label</label>--> <!--Doesn't work-->
						</FloatLabel>
					</div>
				</div>
				<div class="btn mt-8 flex flex-row-reverse">
					<!-- <button type="submit" class="border-solid border-2 border-red-600 bg-red-600 text-gray-100 text-base font-medium rounded-3xl px-10 py-3">
						SEND
					</button> -->
					<Button severity="danger" type="button" label="Submit" icon="pi pi-search" :loading="loading" @click="load" rounded />
				</div>
			</form>
		</div>
	</section>
	</Transition>
</template>

<style scoped>

.flow-enter-from, .flow-leave-to{
    opacity:0;
    filter:blur(5px);
    transform:translateY(100%);
}

.flow-enter-active, .flow-leave-active{
    opacity:0.5;
    filter:blur(2px);
    transform:translateY(50%);
}

.p-textarea{
	background-color:transparent;
}

/* button:hover{
	background-color:aliceblue;
	border-color:aliceblue;
	color:#dc2626;
} */

.p-button{
	padding:1rem 1.5rem;
}

.max-w-screen-sm{
	max-width:560px;
}

.contact-section {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}

.rotating-circles {
	position: absolute;
	width: 350px;
	height: 350px;
	/* background-image:url(/dot-c-azalea.png);
	background-position-x:19%;
	background-position-y:12%;
	background-repeat:no-repeat; */
}

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
	border-top-color: white; /* Top section white */
	border-right-color: rgba(255, 255, 255, 0.2); /* Right section light white */
	border-bottom-color: rgba(255, 255, 255, 0.2); /* Bottom section light white */
	border-left-color: white; /* Left section white */
	animation: rotate 20s infinite linear;
}

.circle-inner {
	width: 70%;
	height: 70%;
	border: 2px solid transparent;
	border-top-color: white; /* Top section white */
	border-right-color: rgba(255, 255, 255, 0.2); /* Right section light white */
	border-bottom-color: rgba(255, 255, 255, 0.2); /* Bottom section light white */
	border-left-color: white; /* Left section white */
	animation: rotate-reverse 15s infinite linear;
}

@keyframes rotate {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}

@keyframes rotate-reverse {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(-360deg);
	}
}

.contact-info {
	position: relative;
	text-align: center;
	z-index: 1;
}

.contact-info p {
	margin: 10px 0;
	font-size: 18px;
}

.contact-info img {
	vertical-align: middle;
	margin-right: 8px;
}

.Names > input,
.Emails > input{
	max-width:260px;
}

@media (max-width:1024px)
{
	section{
		max-width:1024px;
		padding-bottom:8rem;
		gap:3rem;
	}
	.Contact-details{
		margin-right:20px;
	}
	.Form{
		max-width:480px;
	}
	input{
		padding-right:0;
	}
	.Names > input,
	.Emails > input{
		max-width:210px;
	}
}

@media (max-width:940px)
{
	section{
		flex-wrap:wrap-reverse
	}
	.Form{
		max-width:100%;
		width:100%;
	}
	.top{
		justify-content:space-between;
	}
}

</style>