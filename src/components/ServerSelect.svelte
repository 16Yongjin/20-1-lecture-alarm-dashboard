<script>
  import { serverUrl } from "../store";
</script>

<style>
  .select {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  select {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 0.3rem;
  }
</style>

<span class="select mh-2">
  <select bind:value={$serverUrl} name="serverUrl" id="serverSelect">
    <option value="https://api.lecture.hufs.app">앱 서버</option>
    <option value="https://premium.api.lecture.hufs.app">웹 서버</option>
    <option value="https://sms.api.lecture.hufs.app">문자 서버</option>
  </select>
</span>
