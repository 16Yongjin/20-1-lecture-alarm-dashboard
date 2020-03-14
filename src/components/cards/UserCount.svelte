<script>
  export let userCount;
</script>

<div class="card user-count">
  <div class="card-title">유저수</div>
  <div class="card-content">{userCount}</div>
</div>

<style>
  .user-count {
    grid-area: user-count;
  }
</style>