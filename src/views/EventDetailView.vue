<script setup>
import EventServices from "@/services/EventServices.js";
import { ref, onMounted } from "vue";

// NEW USING PROPS
const props = defineProps({
  id: {
    required: true,
  },
});

// NEW USING REF

const event = ref(null);
onMounted(() => { // NEW no mas created
  EventServices.getEvent(props.id)
    .then((response) => {
      // NEW use value
      event.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<!-- <script>
import EventService from '@/services/EventServices.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script> -->
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<style></style>
