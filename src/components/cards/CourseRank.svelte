<script>
  import { onMount } from "svelte";
  import chart from "chart.js";
  import { courseIdToName } from "../../data/courses.js";
  import { rgbaFromString, delay } from "../../utils/helpers.js";

  export let courseRank;
  let courseRankChart;

  $: courseRank &&
    courseRankChart &&
    ((courseRankChart.data.datasets[0].data = courseRank.map((i) => i[1])),
    (courseRankChart.data.labels = courseRank.map((i) => courseIdToName[i[0]])),
    (courseRankChart.data.datasets[0].backgroundColor = courseRank.map(
      ([courseId]) => rgbaFromString(courseId)
    )),
    courseRankChart.update());

  onMount(async () => {
    await delay(100);

    const courseRankCtx = document.getElementById("course-rank");
    courseRankChart = new Chart(courseRankCtx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "학과 비율",
            data: courseRank.map((i) => i[1]),
            backgroundColor: courseRank.map(([courseId]) =>
              rgbaFromString(courseId)
            ),
          },
        ],
        labels: courseRank.map((i) => courseIdToName[i[0]]),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });
</script>

<style>
  .course-rank {
    grid-area: course-rank;
  }

  #course-rank {
    max-height: 320px;
  }
</style>

<div class="card course-rank">
  <div class="card-title">많이 등록된 학과</div>
  <canvas id="course-rank" />
</div>
