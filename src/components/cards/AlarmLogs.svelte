<script>
  import { serverUrl } from "../../store";
  console.log($serverUrl);
</script>

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

<div class="card alarm-logs">
  <div class="card-title">빈자리 확인기 로그</div>
  <iframe
    id="alarm-log"
    src={`${$serverUrl}/v1/admin/alarmLogViewer`}
    title="빈자리 확인기 로그" />
</div>
