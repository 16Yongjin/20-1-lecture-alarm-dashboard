<script>
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import chart from "chart.js";

  onMount(() => {
    const alarmsPerUserCtx = document.getElementById("alarms-per-user");
    const alarmsPerUserChart = new Chart(alarmsPerUserCtx, {
      type: "bar",
      data: {
        labels: ["0개", "1개", "2개", "3개", "4개", "5개", "6개", "7개"],
        datasets: [
          {
            label: "유저 당 알람개수",
            data: [12, 19, 3, 5, 2, 3, 4, 1],
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
            borderWidth: 1
          }
        ]
			},
			options: {
				maintainAspectRatio: false
			}
		});

		const courseRankCtx = document.getElementById("course-rank");
    const courseRankChart = new Chart(courseRankCtx, {
      type: "doughnut",
      data: {
        datasets: [{
					data: [10, 20, 30],
					backgroundColor: [
						'red',
						'yellow',
						'blue'
					],
				}],
				labels: [
						'Red',
						'Yellow',
						'Blue'
				],

			},
			options: {
				maintainAspectRatio: false
			}
		});
		
		
  });
</script>

<Header />

<main class="grid-container">
  <div class="card user-count">
    <div class="card-title">유저수</div>
    <div class="card-content">30</div>
  </div>
  <div class="card alarm-count">
    <div class="card-title">등록된 알람수</div>
    <div class="card-content">5</div>
  </div>
  <div class="card course-count">
    <div class="card-title">강의수</div>
    <div class="card-content">3</div>
  </div>
  <div class="card complete-alarm-count">
    <div class="card-title">완료된 알람수</div>
    <div class="card-content">132</div>
  </div>

  <div class="card checker-running">
    <div class="card-title">빈자리 확인기</div>
    <div class="card-content">
      <div style="color:#19ce60;">ON</div>
    </div>
  </div>
	
  <div class="card lecture-rank">
    <div class="card-title">많이 등록된 강의</div>
  </div>

  <div class="card alarms-per-user">
    <canvas id="alarms-per-user" />
  </div>

	<div class="card course-rank">
    <canvas id="course-rank" />
  </div>

  <div class="card logs">
    <div class="card-title">서버 로그</div>
  </div>
  <div class="card errors">
    <div class="card-title">서버 에러 로그</div>
  </div>
</main>

<Footer />


<style>
  :global(body) {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  }

  .grid-container {
    height: calc(100% - 105px - 2rem);
    padding: 1rem;
    display: grid;
    grid-template-areas:
      "user-count alarm-count course-count complete-alarm-count checker-running"
      "lecture-rank alarms-per-user alarms-per-user course-rank course-rank"
      "lecture-rank logs logs errors errors";
    grid-gap: 16px;
    grid-template-rows: 1fr 2fr 2fr;
    grid-template-columns: repeat(5, 1fr);
  }

  .user-count {
    grid-area: user-count;
  }
  .alarm-count {
    grid-area: alarm-count;
  }
  .course-count {
    grid-area: course-count;
  }
  .complete-alarm-count {
    grid-area: complete-alarm-count;
  }
  .checker-running {
    grid-area: checker-running;
  }
  .lecture-rank {
    grid-area: lecture-rank;
  }
  .alarms-per-user {
    grid-area: alarms-per-user;
  }
  .logs {
    grid-area: logs;
  }
  .errors {
    grid-area: errors;
  }
	.course-rank {
		grid-area: course-rank;
	}

  .grid-container .card {
    place-items: center;
    transition: 0.5s;
  }

  .grid-container .card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.23);
  }

  .card {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.19), 0 4px 4px rgba(0, 0, 0, 0.23);
    padding: 1rem;
  }

  .card-title {
    padding-bottom: 1rem;
    font-size: 1.3rem;
    text-align: center;
  }

  .card-content {
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    .grid-container {
      height: inherit;
      grid-template-areas:
        "user-count alarm-count"
        "course-count complete-alarm-count"
        "checker-running  checker-running"
        "lecture-rank lecture-rank"
        "alarms-per-user alarms-per-user"
        "logs logs"
        "errors errors";
      grid-template-rows: repeat(7, 1fr);
      grid-template-columns: 1fr 1fr;
    }

    .card-title {
      padding-bottom: 0.5rem;
      font-size: 1rem;
      text-align: center;
    }

    .card-content {
      text-align: center;
      font-size: 1.7rem;
    }
  }
</style>