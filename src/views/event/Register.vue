<template>
  <p>Register for the event here (composition)</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

import { inject } from 'vue'

const props = defineProps(['event'])
const GStore = inject('GStore', '')
const router = useRouter()

const register = () => {
  // call to aPI
  // if register redirect to event details
  GStore.flashMessage = `Successfully for ${props.event.title}`
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({ name: 'EventDetails' })
}
</script>
