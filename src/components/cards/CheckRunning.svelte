<script>
  import moment from "moment";

  const hours = moment().utcOffset("+0900").hours();
  const running = 10 <= hours && hours <= 16;
</script>

<style>
  .checker-running {
    grid-area: checker-running;
  }

  .on {
    color: #19ce60;
  }

  .off {
    color: red;
  }
</style>

<div class="card checker-running">
  <div class="card-title">빈자리 확인기</div>
  <div class="card-content">
    <div class={running ? 'on' : 'off'}>{running ? 'ON' : 'OFF'}</div>
  </div>
</div>
