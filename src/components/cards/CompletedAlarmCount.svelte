<script>
  export let completedAlarmCount;
</script>

<style>
  .completed-alarm-count {
    grid-area: completed-alarm-count;
  }
</style>

<div class="card completed-alarm-count">
  <div class="card-title">완료된 알람수</div>
  <div class="card-content">{completedAlarmCount}</div>
</div>
