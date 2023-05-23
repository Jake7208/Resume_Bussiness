<script>
	function handleClick(e) {
		e.preventDefault();
		const target = e.target.getAttribute('href');
		document.querySelector(target).scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<!-- <a href="#EnterName" on:click|preventDefault={handleClick}>Go to Example</a> -->

<div class="flex flex-col h-screen text-5xl font-bold justify-center items-center">
	<h1 class="mb-5">Let's build the resume you deserve</h1>
	<button
		class="flex flex-wrap text-lg bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded-3xl"
		><a href="#EnterName" on:click|preventDefault={handleClick}>Get Started</a></button
	>
</div>

<section id="EnterName" class="h-screen snap-start">
	<p>Enter Your Name</p>
</section>
