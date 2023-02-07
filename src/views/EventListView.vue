<script setup>
import EventCard from '@/components/EventCard.vue'
import { onMounted, watchEffect, computed } from 'vue'
import { useEventListStore } from '@/stores/modules/useEventListStore.js'

const store = useEventListStore()

const props = defineProps({
  page: {
    // from routing
    type: Number,
    required: true,
  },
})

const events = computed(() => {
  // NEW USING STORE
  return store.events
})

const hasNextPage = computed(() => {
  // First, calculate total pages   // 2 is events per page
  const totalPages = Math.ceil(store.totalEvents / 2)
  // Then check to see if the current page is less than the total pages.
  return props.page < totalPages
})

onMounted(() => {
  // store.dispatch('fetchEvents', props.page)
  watchEffect(() => {
    // NEW USING STORE AND PROPS
    store.fetchEvents( props.page).catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
    console.log('props.page', typeof props.page)
  })
})
</script>

<!-- <script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventServices.js'
export default {
  name: 'EventList',
  props: [ 'page' ],
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script> -->

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
    <p>Page {{ props.page }}</p>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
