import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Byroncoughlinsr/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "appliication/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
