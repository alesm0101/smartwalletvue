<script setup>
import { useRouter } from 'vue-router'
import EventCard from '@/components/EventCard.vue'
import { useStore } from 'vuex'
import { watch, onMounted, computed } from 'vue'

const router = useRouter()
const store = useStore()

const props = defineProps({
  page: {
    // from routing
    type: Number,
    required: true,
  },
})

const events = computed(() => store.state.events)
const hasNextPage = computed(() => {
  // First, calculate total pages   // 2 is events per page
  const totalPages = Math.ceil(store.state.totalEvents / 2)
  // Then check to see if the current page is less than the total pages.
  return props.page < totalPages
})

onMounted(() => {
  getEvents()
})

const getEvents = () => {
  store.dispatch('fetchEvents', props.page).catch((error) => {
    router.push({
      name: 'ErrorDisplay',
      params: { error: error },
    })
  })
  console.log('page', typeof props.page)
}

watch(
  () => props.page,
  (value, oldValue) => {
    console.log(value, oldValue)
    getEvents()
  }
)
</script>

<template>
  <h1>Events For Good {{ page }}</h1>
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
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
