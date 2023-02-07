<script setup>
import { ref } from 'vue'
import { useEventListStore } from '@/stores/modules/useEventListStore.js'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
const store = useEventListStore()
const deleteEvent = () => {
  console.log('delete', props.event.id)
  store.deleteEvent(props.event.id)
}
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <button @click="deleteEvent">Delete</button>
</template>
