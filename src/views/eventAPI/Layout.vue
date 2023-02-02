<template>
  <div>
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
  </div>
</template>
<script setup>
import EventService from "@/services/EventServices.js";
import { ref, onMounted } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const event = ref(null);
onMounted(() => {
  // NEW no mas created
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.log("error-----> ", error);
    });
});
</script>
