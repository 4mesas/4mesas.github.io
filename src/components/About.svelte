<script>
  import FullBlock from './FullBlock.svelte';
  import WaitAnimation from './WaitAnimation.svelte';
  import { urls, memo } from '../stores/store.js';
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";

  const name = "main";

  let ready = false;
  onMount(async () => {
    if ($memo[name] === undefined) {
      $memo[name] = {};
      $memo[name].data = await csv($urls[name]);
      $memo[name].gallery = await csv($urls[name+"_gallery"]);
    }
    ready = true;
  })
</script>

<!-- <WaitAnimation /> -->

{#if ready}
  <FullBlock mainData={$memo[name].data} slideData={$memo[name].gallery}/>
{:else}
  <WaitAnimation />
{/if}