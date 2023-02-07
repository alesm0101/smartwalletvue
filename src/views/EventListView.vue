<script>
import EventCard from '@/components/EventCard.vue'
import { useEventListStore } from '@/stores/modules/useEventListStore.js'
// import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      eventListStore: useEventListStore(),
    }
  },
  mounted() {
    this.getEvents()
  },
  watch: {
    page(value, oldValue) {
      console.log(value, oldValue)
      this.getEvents()
    },
  },
  computed: {
    events() {
      return this.eventListStore.events
    },
    hasNextPage() {
      // First, calculate total pages   // 2 is events per page
      const totalPages = Math.ceil(this.eventListStore.totalEvents / 2)
      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    },
  },
  methods: {
    getEvents() {
      this.eventListStore.fetchEvents(this.page).catch((error) => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error: error },
        })
      })
      console.log('page', typeof this.page)
    },
  },
}
</script>

<template>
  <h1>Events</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link
      :to="{ name: 'event-list', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >Prev Page</router-link
    >

    <router-link
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page</router-link
    >
    <p>Page {{ page }}</p>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
