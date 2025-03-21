<script>
    export let image;
    export let showModal;
    export let info1;
    export let info2;
    export let isMultiPage;
</script>

<div
    class="card"
    onclick={() => {
        showModal = true;
        info1 = image.info1;
        info2 = image.info2;
        isMultiPage = image.info2 !== undefined
    }}
>
    <img src={image.src} alt={image.alt} class="npc_pic" />

    <div>{image.alt}</div>
</div>

<style>
    .card {
        padding: 20px;
    }
    .npc_pic {
        height: 200px;
        width: 200px;
        object-fit: cover;
    }
    .npc_pic:hover {
        transform: scale(1.05); 
        box-shadow: 0 0 5px 10px rgba(94, 92, 91, 0.5);
    }
</style>
