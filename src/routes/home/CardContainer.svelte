<script>
  import Card from "./Card.svelte";
  import Modal from "./Modal.svelte";

  let { images } = $props();

  let showModal = $state(false);
  let showFirstImage = $state(true);
  let info1 = $state("");
  let info2 = $state("");

  function toggleImage() {
    showFirstImage = !showFirstImage;
  }
</script>

<Modal bind:showModal bind:toggleImage bind:showFirstImage>
  {#if showFirstImage}
    <img src={info1} alt={""} class="img-pop-up" />
  {:else}
    <img src={info2} alt={""} class="img-pop-up" />
  {/if}
</Modal>

<div class="card-container">
  {#each images as image, i}
    <Card bind:image={images[i]} bind:showModal bind:info1 bind:info2 />
  {/each}
</div>

<style>
  .img-pop-up {
    width: 1100px;
    height: 619px;
  }
  .card-container {
    padding: 25px 0;
    margin-left: 350px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
