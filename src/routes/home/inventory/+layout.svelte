<script>
    import { onMount } from "svelte";
    let items = [];

    onMount(async () => {
        const response = await fetch("http://localhost:3000/api/Inventory", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });
        items = await response.json();
    });
</script>

<div class="home-container">
    <div class="content">
        <h1>MY INVENTORY</h1>
    </div>
</div>

{#if items.length}
    {#each items as item}
        <div style="border: 1px solid black; padding: 10px; margin: 5px;">
            Inventory ID: {item.inventoryId}, Score: {item.totalScore}
        </div>
    {/each}
{:else}
    <p>Loading inventory...</p>
{/if}

<style>
    .home-container {
        margin-left: 300px;
        display: flex;
    }

    .content {
        flex: 1;
        padding: 4px;
        background: url("/background2.jpg") no-repeat center center fixed;
        justify-content: right;
        text-shadow:
            -1.5px 0 black,
            0 1.5px black,
            1.5px 0 black,
            0 -1.5px black;
        color: white;
        align-items: right;
        font-size: 24px;
    }
</style>
