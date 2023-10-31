<script>
  import Slide from './Slide.svelte';
  export let mainData;
  export let slideData;
</script>
<div class="full-block block">
  <header class="block-header">
    <h1 class="block-title">{mainData[0]['Título']}</h1>
  </header>
  {#if slideData}
    <Slide {slideData}/>
  {/if}
  <p class="block-content">{@html mainData[0]['Texto']}</p>
</div>