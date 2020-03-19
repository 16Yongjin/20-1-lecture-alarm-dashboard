<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { serverUrl } from './store'
  import { rank, groupBy, rankGroup } from './utils/helpers.js';
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import UserCount from "./components/cards/UserCount.svelte";
  import AlarmCount from "./components/cards/AlarmCount.svelte";
  import CourseCount from "./components/cards/CourseCount.svelte";
  import CompletedAlarmCount from "./components/cards/CompletedAlarmCount.svelte";
  import CheckRunning from "./components/cards/CheckRunning.svelte";
  import AlarmsPerUser from "./components/cards/AlarmsPerUser.svelte";
  import CourseRank from "./components/cards/CourseRank.svelte";
  import LectureRank from "./components/cards/LectureRank.svelte";
  import Logs from "./components/cards/Logs.svelte";
  import AlarmLogs from "./components/cards/AlarmLogs.svelte";
  import ServerStatus from "./components/cards/ServerStatus.svelte";
  import chart from "chart.js";

  let users = [];
  let alarms = [];
  let userCount = 0;
  let alarmCount = 0;
  let lectureRank = [];
  let courseRank = [];
  let courseCount = 0;
  let alarmsPerUser = [0,0,0,0,0,0,0];
  let completedAlarm = [];
  let completedAlarmCount = 0;

  $: $serverUrl, update();

  const getData = () =>
    axios.get(`${$serverUrl}/admin/dashboardData`).then(res => {
      const { users, alarms, completedAlarms } = res.data;
      return [users, alarms, completedAlarms.split("\n")];
    });

  const update = async () => {
    [users, alarms, completedAlarm] = await getData();

    userCount = users.length;
    alarmsPerUser = users.map(u => u.lectures.length).reduce((acc, v) => (acc[v]++, acc) , [0,0,0,0,0,0,0])
    alarmCount = alarms.length;
    lectureRank = rankGroup(alarms.map(a => a.name));
    courseRank = rank(alarms.map(a => a.courseId));
    courseCount = courseRank.length;
    completedAlarmCount = completedAlarm.length;
  }

  const updateLoop = async () => {
    await update();
    setTimeout(update, 3000);
  }

  onMount(updateLoop)
</script>

<Header />


<h2 class="title">Insight</h2>

<main class="grid-container first">
  <UserCount {userCount} />

  <AlarmCount {alarmCount} />

  <CourseCount {courseCount} />

  <CompletedAlarmCount {completedAlarmCount} />

  <CheckRunning />

  <AlarmsPerUser {alarmsPerUser} />

  <LectureRank {lectureRank} />

  <CourseRank {courseRank} />
</main>

<h2 class="title">Server</h2>

<main class="grid-container second">
  <Logs />
  <AlarmLogs />
  <ServerStatus />
</main>

<style>
  .title {
    margin: 0.5rem 2rem;
    font-size: 2rem;
  }
  .grid-container {
    padding: 1rem;
    display: grid;
    grid-gap: 16px;
  }

  .grid-container.first {
    grid-template-areas:
      "user-count alarm-count course-count completed-alarm-count checker-running"
      "lecture-rank course-rank course-rank alarms-per-user alarms-per-user";
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 3fr;
  }

  .grid-container.second {
    height: 900px;
    grid-template-areas:
      "logs server-status"
      "alarm-logs server-status";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    .grid-container.first {
      grid-template-areas:
        "user-count alarm-count"
        "course-count completed-alarm-count"
        "checker-running  checker-running"
        "lecture-rank lecture-rank"
        "course-rank course-rank"
        "alarms-per-user alarms-per-user";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 2fr 3fr 3fr;
    }

    .grid-container.second {
      height: 1600px;
      grid-template-areas:
        "server-status"
        "logs"
        "alarm-logs";
      grid-template-columns: 1fr;
      grid-template-rows: 2.7fr 1fr 1fr;
    }
  }
</style>