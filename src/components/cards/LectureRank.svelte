<script>
  export let lectureRank;
</script>

<style>
  .lecture-rank {
    grid-area: lecture-rank;
  }

  .card-content {
    height: 100%;
    font-size: 1rem;
    overflow-y: scroll;
    max-height: 300px;
    text-align: unset;
  }

  @media (max-width: 800px) {
    .card-content {
      max-height: 150px;
    }
  }
</style>

<div class="card lecture-rank">
  <div class="card-title">많이 등록된 강의</div>
  <div class="card-content">
    {#each lectureRank as countAndLectures, index}
      <li>
        <b>
          {index + 1}위 ({countAndLectures[0]}개씩 / {countAndLectures[1].length}개)
        </b>
      </li>
      {#each countAndLectures[1] as lectureName}
        <ul>{lectureName}</ul>
      {/each}
    {/each}
  </div>
</div>
