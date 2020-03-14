<div class="card status">
  <div class="card-title">서버 상태</div>
  <iframe id="log-view" src="https://api.lecture.hufs.app/status" title="서버 로그"></iframe>
</div>

<style>
  .status {
    grid-area: server-status;
  }

  #log-view {
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100% - 2rem);
    border: none;
  }
  

</style>