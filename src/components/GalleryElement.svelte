<script>
  export let data;
</script>

<div class="gallery-div">
  {#if data['Url']}
    <a class="gallery-link" href={data['Url']} target="_blank">
      <img class="gallery-img" alt={data['Nombre']} src={data['Imagen']}/>
      <h1 class="gallery-name">{data['Nombre']}</h1>
      <p class="gallery-description">{data['Descripción']}</p>
    </a>
  {:else}
  <img class="gallery-img no-select" alt={data['Nombre']} src={data['Imagen']}/>
    <h1 class="gallery-name">{data['Nombre']}</h1>
    <p class="gallery-description">{data['Descripción']}</p>
  {/if}
</div>

<style>
  .gallery-div {
    max-width: 150px;
  }

  .gallery-img {
    width: 100%;
  }

  .gallery-link {
    color: var(--colblack);
    text-decoration: none;
  }

  .gallery-link:hover {
    color: var(--colmain);
    text-decoration: none;
  }

  .gallery-name {
    font-family: var(--headfont);
    font-size: 14px;
    text-align: center;
    color: var(--colblack);
  }

  .gallery-description {
    font-size: 12px;
  }
</style>