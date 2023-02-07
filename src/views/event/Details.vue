<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <button @click="deleteEvent">Delete</button>
</template>

<script setup>
import { useEventListStore } from '@/stores/modules/useEventListStore.js'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
const eventListStore = useEventListStore()

const deleteEvent = () => {
  console.log('delete', props.event.id)
  eventListStore
    .deleteEvent(props.event.id)
    .then(() => {
      // TODO REDIRECT TO HOME
    })
    .catch((error) => {
      console.log('catch error', error)
    })
}
</script>
