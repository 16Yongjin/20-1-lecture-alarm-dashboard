<script>
  export let courseCount;
</script>

<div class="card course-count">
  <div class="card-title">학과수</div>
  <div class="card-content">{courseCount}</div>
</div>

<style>
  .course-count {
    grid-area: course-count;
  }
</style>