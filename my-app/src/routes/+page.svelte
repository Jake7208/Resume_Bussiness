<script>
	import Card from '../components/IconCard.svelte';
	import TitleCard from '../components/TitleCard.svelte';
	import TitleImage from '../components/upperImage.svelte';
	import CardIcon1 from '../components/IconA.svelte';
	import CardIcon2 from '../components/IconB.svelte';
	import CardIcon3 from '../components/IconIC.svelte';
	import CardIcon4 from '../components/IconICD.svelte';
	import ProfileIconA from '../components/IconICE.svelte';
	import ProfileIconB from '../components/IconICF.svelte';
	import ProfileIconC from '../components/IconICG.svelte';
	import ContributersCard from '../components/Contributers.svelte';
	import Ratius from '../components/ratius.svelte';
</script>

<!--  -->
<html lang="en" class="overflow-x-hidden">
	<title>The html & Tailwind for my webpage</title>
	<div class="bg-gradient-to-tl from-lime-200 via-emerald-400 to-green-600">
		<div class="flex justify-center lg:justify-end flex-col lg:flex-row md:flex-row pt-4">
			<!-- Google login  button un linked  -->
			<button
				type="button"
				class="text-white w-[200px] bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 dark:hover:bg-gradient-to-r from-cyan-500 to-gray-800 dark:hover:shadow-lg shadow-cyan-500/50 mr-2 mb-2"
			>
				<svg
					class="w-4 h-4 mr-2 -ml-1"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="google"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 488 512"
					><path
						fill="currentColor"
						d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
					/></svg
				>
				Sign in with Google
			</button>
			<!-- git hub login button  un linked -->
			<button
				type="button"
				class="text-white w-[200px] bg-[#632A90] hover:bg-[#632A90]/90 focus:ring-4 focus:outline-none focus:ring-[#632A90]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-gradient-to-r from-[#632A90] to-blue-500 ease-in delay-150 mr-2 mb-2"
			>
				<svg
					class="w-4 h-4 mr-2 -ml-1"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="github"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					><path
						fill="currentColor"
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					/></svg
				>
				Sign in with Github
			</button>
			<button
				type="button"
				class="text-white w-[200px] bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-gradient-to-r from-gray-800 to-blue-500 ease-in delay-150 mr-2 mb-2"
			>
				<svg
					class="w-4 h-4 mr-2 -ml-1 dark:text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/></svg
				>
				Continue as Guest
			</button>
		</div>
		<div
			class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-[900px] text-left content-center align-middle"
		>
			<h1
				class="font-inter text-[30px] lg:text-[80px] md:text-[68px] sm:text-[60px] text-slate-100 align-middle ml-7"
			>
				Build Your <span
					class="box-decoration-slice bg-gradient-to-tl from-lime-900 via-emerald-800 to-green-700"
					data-text="Resume, Free">Resume, Free</span
				> and Unrestricted.
			</h1>
			<div class=" invisible lg:visible">
				<TitleImage />
			</div>
		</div>
	</div>
	<div class="flex max-sm:hidden justify-center -mt-40 align-middle">
		<TitleCard>
			<div class="flex justify-between align-middle p-auto mx-20">
				<ProfileIconA />
				<ProfileIconC />
				<ProfileIconB />
			</div>
		</TitleCard>
	</div>

	<!-- special middle intersection card -->
	<!-- <div class="col-span-1" /> -->
	<div class="h-[800px] flex flex-around justify-center items-center text-center bg-gray-900">
		<div class="mx-20">
			<h1
				class=" text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-loose text-emerald-500"
			>
				"Create a Professional Resume for Free with Our Easy-to-Use Builder"
			</h1>
			<p
				class="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-white indent-8"
			>
				Welcome to our free resume site! Create a standout resume with our easy-to-use builder that
				showcases your strengths and catches the eye of potential employers. Download as many
				resumes as you need for free! Get started today.
				<br />
				<br />
				- we can't wait to see what you create!
			</p>
		</div>
		<!-- </div> -->
	</div>
	<!-- from-emerald-800 to-gray-950 cool gradient -->
	<!-- grid stuff ! grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  -->
	<div
		class="h-[auto] lg:h-[800px] grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 content-center overflow-hidden"
	>
		<!-- card 1 -->
		<Card>
			<CardIcon1 />
			Effortlessly create standout resumes that highlight your strengths and experience.
		</Card>
		<!-- card 2 -->

		<Card>
			<CardIcon2 />
			"Explore our range of customizable templates and tailor your resume to your unique skills and experiences
			today!"
		</Card>

		<!-- card 3 -->
		<Card>
			<CardIcon3 />
			"Create and save multiple resumes with ease"
		</Card>
		<!-- card 4 -->
		<Card>
			<CardIcon4 />
			"Maximize Your Opportunities with an Optimized Resume"
		</Card>
	</div>
	<!-- contributers -->
	<div class="flex justify-center items-center h-[90vh] mx-10 shadow-m">
		<ContributersCard>
			<Ratius />
		</ContributersCard>
	</div>
</html>
