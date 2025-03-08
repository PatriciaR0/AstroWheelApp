<script>
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import Sidebar from "./Menu.svelte";

  let userData = {
    id: "123456",
    username: "PlayerOne",
    lastIsland: "Orion Island",
    points: 250,
    firstLogin: "2025-03-08 10:30:00",
    inventory: ["Sword", "Shield", "Potion"],
  };

  /**
     * @type {boolean}
     */
  let isHomePage;

  onMount(() => {
    console.log("Home oldal betöltve");
    isHomePage = page.url.pathname === "/";
  });

  let { children } = $props();
</script>

<Sidebar bind:userData />

{#if isHomePage}
  <div class="home-container">
    <div class="content">
      <h1>Welcome, {userData.username}!</h1>
      <p>Your last visited island: {userData.lastIsland}</p>
      <p>Points: {userData.points}</p>
    </div>
  </div>
{:else}
  {@render children()}
{/if}

<style>
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
