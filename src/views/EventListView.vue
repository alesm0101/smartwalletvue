<script setup>
import EventCard from '@/components/EventCard.vue'
import { watchEffect, computed } from 'vue'
import { useEventListStore } from '@/stores/modules/useEventListStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()

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

watchEffect(() => {
  // watching page here:
  // NEW USING STORE AND PROPS
  store.fetchEvents(12).catch((error) => {
    router.push({
      name: 'ErrorDisplay',
      params: { error: error },
    })
  })
  console.log('props.page', typeof props.page)
})
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
