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

<script setup>
import { useEventListStore } from '@/stores/modules/useEventListStore.js'
import { onMounted } from 'vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: { required: true },
})
const eventListstore = useEventListStore()
const router = useRouter()

onMounted(() => {
  eventListstore.fetchEvent(props.id).catch((error) => {
    router.push({
      name: 'ErrorDisplay',
      params: { error: error },
    })
  })
})
const event = computed(() => eventListstore.event)
</script>
