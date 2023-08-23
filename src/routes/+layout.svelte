<script>
  import LeftBar from '../components/LeftBar.svelte';
</script>

<div class="general">
  <LeftBar/>
  <slot></slot>
</div>

<style>
  .general {
    max-width: 1080px;
    display: grid;
    margin: 10px 0px;
    grid-template-columns: 250px 1fr;
    grid-auto-flow: column;
    grid-gap: 20px;
  }
  
  :global(:root) {
    --colbg: #ffffff;
    --colblack: #313030;
    --colmain: #f47b6b;
    --col2: #ebd834;
    --colmenu: #000000;
    --headfont: Helvetica, Arial, sans-serif;
    --contentfont: Helvetica, Arial, sans-serif;
    --ttime: 0.5s;
  }

  :global(body) {
    box-sizing: content-box;
    padding: 0px;
    margin: 0px;
    background: var(--colbg);
    font-family: var(--contentfont);
    font-weight: 400;
  }

  :global(.block) {
    margin: auto;
  }

  :global(.block-content) {
    font-family: var(--contentfont);
    padding: 5px 0px;
    font-size: 16px;
    font-weight: 300;
    width: 90%;
  }

  :global(.block-title) {
    font-family: var(--headfont);
    font-size: 28px;
    font-weight: 400;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :global(.no-select)  {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media screen and (max-device-width: 450px) {
    .general {
      grid-auto-flow: row;
      grid-template-columns: auto;
    }

    :global(.block-title) {
      font-size: 16px;
      font-weight: 600;
    }

    :global(.block-content) {
      font-size: 13px;
      width: 100%;
    }
  }
</style>