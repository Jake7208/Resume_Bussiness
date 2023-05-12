<div class="bg-white rounded-3xl overflow-hidden h-96 w-full shadow-lg shadow-gray-900/100">
	<div class="card">
		<!-- <div class="flex justify-center"> -->
		<slot name="icon" />
		<!-- </div> -->
		<div class="text-gray-500 text-sm font-mono p-4" style="font-size: 1em; line-height: 1.5">
			<p
				class="text-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-gray-300 indent-8"
			>
				<slot />
			</p>
		</div>
	</div>
</div>
