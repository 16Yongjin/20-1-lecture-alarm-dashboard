<script>
  import { onMount } from "svelte";
  import chart from "chart.js";
  import { delay } from "./../../utils/helpers.js";

  export let alarmsPerUser;

  let alarmsPerUserChart;

  $: alarmsPerUser &&
    alarmsPerUserChart &&
    ((alarmsPerUserChart.data.datasets[0].data = alarmsPerUser),
    alarmsPerUserChart.update());

  onMount(async () => {
    await delay(100);

    const alarmsPerUserCtx = document.getElementById("alarms-per-user");
    alarmsPerUserChart = new Chart(alarmsPerUserCtx, {
      type: "bar",
      data: {
        labels: ["0개", "1개", "2개", "3개", "4개", "5개", "6개", "7개"],
        datasets: [
          {
            label: "유저 당 알람개수",
            data: alarmsPerUser,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });
</script>

<style>
  .alarms-per-user {
    grid-area: alarms-per-user;
  }

  #alarms-per-user {
    max-height: 320px;
  }
</style>

<div class="card alarms-per-user">
  <div class="card-title">유저 당 알람수</div>
  <canvas id="alarms-per-user" />
</div>
