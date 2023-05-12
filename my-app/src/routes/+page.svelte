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
</script>

<!--  -->
<html lang="en">
	<title>The html & Tailwind for my webpage</title>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-[800px] bg-gradient-to-tl from-lime-200 via-emerald-400 to-green-600 text-left content-center align-middle"
	>
		<h1
			class="font-inter text-[58px] lg:text-[80px] md:text-[68px] sm:text-[60px] text-slate-100 align-self-center ml-7"
		>
			Build Your <span class="box-decoration-slice bg-gradient-to-r from-gray-700 to-green-700"
				>Resume, Free</span
			> and Unrestricted.
		</h1>
		<div class=" pl-32 invisible lg:visible">
			<TitleImage />
		</div>
	</div>

	<div class="flex max-sm:hidden justify-center -mt-40 align-middle">
		<TitleCard>
			<div class="flex justify-between align-middle p-auto">
				<ProfileIconA />
				<ProfileIconC />
				<ProfileIconB />
			</div>
		</TitleCard>
	</div>

	<div class="mx-20">
		<!-- special middle intersection card -->
		<!-- <div class="col-span-1" /> -->
		<div class="h-[75vh] flex flex-col justify-center items-center text-center">
			<h1
				class=" text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-emerald-300"
			>
				"Create a Professional Resume for Free with Our Easy-to-Use Builder"
			</h1>
			<p
				class="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-gray-500 indent-8"
			>
				Welcome to our free resume site! Create a standout resume with our easy-to-use builder that
				showcases your strengths and catches the eye of potential employers. Download as many
				resumes as you need for free! Get started today.
				<br />
				<br />
				- we can't wait to see what you create!
			</p>
			<!-- </div> -->
		</div>
	</div>
	<!-- from-emerald-800 to-gray-950 cool gradient -->

	<div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 content-evenly gap-5 mb-10 mx-10">
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
</html>
