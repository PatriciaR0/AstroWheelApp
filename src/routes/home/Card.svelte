<script>
    export let image;
</script>
<div class="card">
    <div class="card"><img src={image.src} alt={image.alt} class="npc_pic" /></div>
    <div class="card_title">{image.alt}</div>
</div>


<style>
    .card {

    }
    .card_title {

    }
    .npc_pic {
        height: 200px;
        width: 200px;
        object-fit: cover;
    }
    .npc_pic:hover {
    transform: scale(1.0); /* minimális nagyítás */
    border-image: 0 0 10px rgba(255, 255, 255, 0.5); 
  }
    
</style>
