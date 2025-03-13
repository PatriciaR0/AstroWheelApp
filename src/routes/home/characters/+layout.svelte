<script>
    let message = "";
    let character_info = {};

    async function add() {
        const response = await fetch("http://localhost:3000/api/Inventory", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });

        character_info = await response.json();
    }

    // Képek adatai
    const images = [
        { src: "/npc Sagittarius.png", alt: "Sagittarius" },
        { src: "/npc Capricorn.png", alt: "Capricorn" },
        { src: "/npc Aquarius.png", alt: "Aquarius" },
        { src: "/npc Pisces.png", alt: "Pisces" },
        { src: "/npc Aries.png", alt: "Aries" },
        { src: "/npc Taurus.png", alt: "Taurus" },
        { src: "/npc Gemini.png", alt: "Gemini" },
        { src: "/npc Cancer.png", alt: "Cancer" },
        { src: "/npc Leo.png", alt: "Leo" },
        { src: "/npc Virgo.png", alt: "Virgo" },
        { src: "/npc Libra.png", alt: "Libra" },
        { src: "/npc Scorpio.png", alt: "Scorpio" },
    ];
</script>

{character_info.level}
{character_info.last_visited_island}

<button onclick={add}>Get character info</button>

<div class="home-container">
    <div class="content">
        <h1>CHARACTERS</h1>
    </div>
</div>


<!-- Felső sor -->
<div class="grid grid-cols-6 gap-4 mb-4">
    {#each images.slice(0, 6) as image}
        <img src={image.src} alt={image.alt} class="npc_pic" />
    {/each}
</div>

<!-- Alsó sor -->
<div class="grid grid-cols-6 gap-4">
    {#each images.slice(6) as image}
        <img src={image.src} alt={image.alt} class="npc_pic" />
    {/each}
</div>

<style>
    .home-container {
        margin-left: 300px;
        display: flex;
        align-items: center;
    }

    .content {
        flex: 1;
        padding: 4px;
        background: url("/background3.jpg") no-repeat center center fixed;
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

    .npc_pic {
    height: 200px;
    width: 200px;
    object-fit: cover;
    padding: 5px;
    padding-top: 50px;
    padding-bottom:  50px;
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
