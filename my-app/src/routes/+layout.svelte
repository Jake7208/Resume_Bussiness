<script>
    import "../app.css";
</script>
<div class="container mx-auto my-6">
  <slot />
</div>
<body class="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" >
  <nav class="fixed bottom-3 left-10 text-white uppercase m-0 list-sytle-none">
    <ul class="flex justify-center">
      <li><a class="border-b-2 hover:border-b-4 border-emerald-400 mx-1"href="/">Home</a> </li>
      <li><a class="border-b-2 hover:border-b-4 border-emerald-400 mx-1"href="/">Portfolio</a></li>
      <li><a class="border-b-2 hover:border-b-4 border-emerald-400 mx-1"href="/">Github</a> </li>
      <li><a class="border-b-2 hover:border-b-4 border-emerald-400 mx-1"href="/">Linkedin</a></li>				
    </ul>
  </nav>
</body>
