<script>
    import "../app.css";
	import Index from "./index.svelte";
</script>
<div class="container mx-auto my-6">
  <slot></slot>
</div>

<svelte:component this={Index} />