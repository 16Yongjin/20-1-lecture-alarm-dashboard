<script>
  import ServerSelect from "./ServerSelect.svelte";
</script>

<style>
  .header {
    position: fixed;
    height: 72px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
    background: white;
    top: 0;
    left: 0;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo img {
    width: 48px;
  }

  .spacer {
    flex-grow: 1;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-offset {
    margin-bottom: 72px;
  }

  @media (max-width: 618px) {
    .logo img {
      width: 40px;
    }

    .title {
      font-size: 0.8rem;
    }
  }
</style>

<header class="header">
  <span class="logo mh-2">
    <img src="logo.png" alt="로고" />
  </span>

  <span class="title">
    <h2>수강신청 빈자리 알람 대시보드</h2>
  </span>

  <span class="spacer" />

  <ServerSelect />
</header>

<div class="header-offset" />
