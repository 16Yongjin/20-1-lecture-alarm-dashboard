<script>
  import { serverUrl } from "../../store";
</script>

<style>
  .logs {
    grid-area: logs;
  }

  #log-view {
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100% - 2rem);
    border: none;
  }
</style>

<div class="card logs">
  <div class="card-title">서버 로그</div>
  <iframe
    id="log-view"
    src={`${$serverUrl}/v1/admin/logViewer`}
    title="서버 로그" />
</div>
