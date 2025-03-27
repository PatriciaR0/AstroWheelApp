<script>
  import Sidebar from "./Menu.svelte";

  let { children } = $props();
</script>

<main>
  <Sidebar/>

  {@render children()}
</main>

<style>
  main {
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    z-index: -1;
  }
</style>
