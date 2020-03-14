import axios from "axios";

const api = axios.create({
  baseURL: "https://api.lecture.hufs.app/",
});

const getAlarms = () => api.get("/admin/alarms").then(res => res.data);

const getUsers = () => api.get("/admin/users").then(res => res.data);

const getCompletedAlarms = () => api.get("/admin/finishedAlarms").then(res => res.data.replace(/^<pre>/, '').replace(/<\/pre>$/, '').split('\n'));


export default {
  api,
  getAlarms,
  getUsers,
  getCompletedAlarms
};
