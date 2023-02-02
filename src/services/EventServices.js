import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, page) {
    return apiClient.get(`/events?_page=${page}&_limit=${perPage}`);
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};

// axios.get('http://localhost:3000/events')
// .then(response => {
//   // NEW
//   events.value = response.data
// })
// .catch((error)=>{
//   console.log(error)
// })
