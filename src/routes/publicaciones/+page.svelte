<script>
  import Gallery from '../../components/Gallery.svelte';
  import WaitAnimation from '../../components/WaitAnimation.svelte';
  import { urls, memo } from '../../stores/store.js';
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";

  const name = "works";

  let ready = false;
  onMount(async () => {
    if ($memo[name] === undefined) {
      $memo[name] = {};
      const data = (await csv($urls[name])).sort((a, b) => a['Nombre'].localeCompare(b['Nombre']));
      $memo[name].data = data;
    }
    ready = true;
  });
</script>

{#if ready}
  <Gallery mainData={$memo[name].data} title={"Publicaciones"}/>
{:else}
  <WaitAnimation />
{/if}