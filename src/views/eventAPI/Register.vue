<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
// import { watch } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
//const route = useRoute();

defineProps({
  event: {
    type: Object,
    required: true,
  },
})

const register = () => {
  // call to aPI
  // if register redirect to event details

  router.push({ name: 'EventDetails' })
}

/* watch(
  () => route.params.id,
  async (newId) => {
    console.log(newId);
   //userData.value = await fetchUser(newId);
  }
); */
</script>
