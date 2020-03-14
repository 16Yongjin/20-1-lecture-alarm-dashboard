<script>
  export let alarmCount;
</script>

<div class="card alarm-count">
  <div class="card-title">등록된 알람수</div>
  <div class="card-content">{alarmCount}</div>
</div>

<style>
  .alarm-count {
    grid-area: alarm-count;
  }
</style>