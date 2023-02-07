<template>
  <p>Register for the event here (composition)</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  event: {
    type: Object,
    require: true,
  },
})

const GStore = inject('GStore', '')

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
