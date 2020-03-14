<div class="card alarm-logs">
  <div class="card-title">빈자리 확인기 로그</div>
  <iframe id="alarm-log" src="https://api.lecture.hufs.app/admin/alarmLogViewer" title="빈자리 확인기 로그"></iframe>
</div>

<style>
  .alarm-logs {
    grid-area: alarm-logs;
  }
  
  #alarm-log {
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100% - 2rem);
    border: none;
  }
</style>