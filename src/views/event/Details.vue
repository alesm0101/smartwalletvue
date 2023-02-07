<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <button @click="deleteEvent">Delete</button>
</template>

<script>
import { useEventListStore } from '@/stores/modules/useEventListStore.js'

export default {
  name: 'event-details',
  props: ['event'],
  data() {
    return {
      eventListstore: useEventListStore(),
    }
  },
  methods: {
    deleteEvent() {
      console.log('delete', this.event.id)
      this.eventListstore
        .deleteEvent(this.event.id)
        .then(() => {
          // TODO REDIRECT TO HOME
        })
        .catch((error) => {
          console.log('catch error', error)
        })
    },
  },
}
</script>
