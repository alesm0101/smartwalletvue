<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <button @click="deleteEvent">Delete</button>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})

const deleteEvent = () => {
  this.$store
    .dispatch('deleteEvent', this.event.id)
    .then(() => {
      console.log('deleted event')
      // TODO REDIRECT TO HOME
    })
    .catch((error) => {
      console.log('catch error', error)
    })
}
</script>
