<script>
  export let slideData;
  let slideIndex = 0;
  function downSlide() { slideIndex = slideIndex - 1 < 0 ? slideData.length - 1 : slideIndex - 1 }
  function upSlide() { slideIndex = slideIndex + 1 >= slideData.length ? 0 : slideIndex + 1 }
</script>

<div class="slide-container">
  {#if slideData.length > 1}
    <div class="slide-controls">
      <span class="slide-btn no-select" on:keypress={()=>{}} on:click={downSlide}>←</span>
      <span class="slide-btn no-select" on:keypress={()=>{}} on:click={upSlide}>→</span>
    </div>
  {/if}
  {#if slideData[slideIndex]['Url']}
    <a class="slide-link" href={slideData[slideIndex]['Url']} target={slideData[slideIndex]['Url'].includes("http") ? "_blank" : "_self"}>
      <img src={slideData[slideIndex]['Imagen']} alt="" class="slide-img">
      <p class="slide-desc">{slideData[slideIndex]['Descripción']}</p>
    </a>
  {:else}
    <img src={slideData[slideIndex]['Imagen']} alt="" class="slide-img">
    <p class="slide-desc">{slideData[slideIndex]['Descripción']}</p>
  {/if}
</div>

<style>
  .slide-container {
    width: 98%;
  }

  .slide-img {
    width: 100%;
  }

  .slide-desc {
    font-size: 15px;
    margin: 0px;
  }

  .slide-controls {
    display: flex;
    justify-content: right;
    gap: 10px;
    padding: 8px 0px;
  }

  .slide-btn {
    cursor: pointer;
    color: grey;
  }

  .slide-btn:hover {
    color: var(--colblack);
  }

  .slide-link {
    color: var(--colblack);
  }

  @media screen and (max-device-width: 450px) {
    .slide-desc {
      font-size: 11px;
    }
  }
</style>