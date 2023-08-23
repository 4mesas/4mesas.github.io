<nav class="main-menu-social-container">
  <ul class="main-menu-social">
    <li><a target="_blank" href="https://www.instagram.com/4mesas" >ig</a></li>
    <li><a target="_blank" href="https://twitter.com/4mesas">tw</a></li>
    <li><a target="_blank" href="https://www.facebook.com/4mesas">fb</a></li>
  </ul>
</nav>

<style>
  .main-menu-social {
    list-style-type: none;
    display: flex;
    margin: 14px 0px;
    padding: 0px;
    justify-content: left;
    align-items: center;
    gap: 5px;
  }

  .main-menu-social li a {
    font-size: 15px;
    display: block;
    color: var(--colmenu);
  }

  .main-menu-social li a:hover {
    background: var(--colmenu);
    color: var(--colbg);
    cursor: pointer;
  }

  @media screen and (max-device-width: 450px) {
    .main-menu-social {
      flex-direction: column;
      margin: 0px 0px;
      padding: 0px;
    }

    .main-menu-social li a {
      font-size: 15px;
    }
  }
</style>