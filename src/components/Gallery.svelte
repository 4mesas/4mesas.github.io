<script>
  import GalleryElement from './GalleryElement.svelte';
  export let mainData;
  export let title;
</script>

<div>
  <header class="gallery-header">
    <h1 class="block-title">{title}</h1>
  </header>
  <div class="gallery-container">
    {#each mainData as data, i (i) }
      <GalleryElement {data}/>
    {/each}
  </div>
</div>

<style>
  .gallery-container {
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: left;
  }
</style>