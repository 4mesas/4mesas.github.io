<script>
  import Social from './Social.svelte';
</script>

<div class="left-bar no-select">
  <header class="header">
    <div class="header-logo-container">
      <img class="main-logo" alt="logotipo 4 mesas" src="assets/logo.png"/>
    </div>
    <hgroup class="header-title-container">
      <h1>Somos un colectivo colombiano que escribe, dibuja, edita y divulga cómics</h1>
    </hgroup>
  </header>
  <nav class="main-menu">
    <ul class="navigation-menu">
      <li><a href="./" id="about-btn">Acerca</a></li>
      <li><a href="./novedad" id="showcase-btn">Lo último</a></li>
      <li><a href="./perfiles" id="profiles-btn">Perfiles</a></li>
      <li><a href="./publicaciones" id="works-btn">Publicaciones</a></li>
    </ul>
  </nav>
  <Social/>
</div>

<style>
  .left-bar {
    display: flex;
    flex-direction: column;
    background: var(--colbg);
    padding: 0px 30px;
    height: 500px;
  }

  .header-logo-container {
    margin: 14px 0px;
    width: 100%;
  }

  .main-logo {
    width: 50%;
    user-drag: none;
    -webkit-user-drag: none;
  }

  .header-title-container h1 {
    margin: 14px 0px;
    font-size: 14px;
    font-weight: 600;
  }

  .navigation-menu {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0px;
    margin: 14px 0px;
    justify-content: space-evenly;
    gap: 5px;
  }

  .navigation-menu li a {
    font-size: 14px;
    text-decoration: none;
    color: var(--colmenu);
  }

  .navigation-menu li :hover {
    background: var(--colmain);
    color: var(--colblack);
    cursor: pointer;
  }

  @media screen and (max-device-width: 450px) {
    .left-bar {
      flex-direction: row;
      justify-content: space-between;
      margin: 3px 20px;
      padding: 8px 0px 20px;
      height: 70px;
      border-bottom: solid 1px;
    }

    .header-logo-container {
      margin: 0px 0px;
      max-width: 100px;
      height: 100%;
    }

    .main-logo {
      width:auto;
      height: 100%;
    }

    .header-title-container {
      display: none;
    }

    .navigation-menu {
      flex-direction: column;
      margin: 0px 0px;
      gap: 0px;
    }

    .navigation-menu li a {
      font-size: 12px;
    }
  }

</style>