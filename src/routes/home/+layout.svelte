<script>
  import Sidebar from "./Menu.svelte";

  let { children } = $props();
</script>

<main>
  <Sidebar/>

  {@render children()}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: url("/background.png") no-repeat center center fixed;
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  main {
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    z-index: -1;
  }
  .home-container {
    margin-left: 300px;
    display: flex;
  }

  .content {
    flex: 4;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: right;
    align-items: right;
    font-size: 24px;
  }
</style>
