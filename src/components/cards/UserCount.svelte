<script>
  export let userCount;
</script>

<style>
  .user-count {
    grid-area: user-count;
  }
</style>

<div class="card user-count">
  <div class="card-title">유저수</div>
  <div class="card-content">{userCount}</div>
</div>
