<script>
    import "../app.css";
	  import Documentation from "./documentation.svelte";
</script>
<div class="container mx-auto my-6">
  <slot></slot>
</div>

<svelte:component this={Documentation} />