<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from "@/services/EventServices.js";
export default {
  name: "event-layout",
  props: {
    id: { required: true },
  },
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log("error-----> ", error);
        if (error.response && error.response.status == 404) {
          // /404/event
          this.$router.push({
            name: "404Resource",
            params: { resource: "event" },
          });
        } else {
          // /network-error
          this.$router.push({ name: "NetworkError" });
        }
      });
  },
};
</script>
