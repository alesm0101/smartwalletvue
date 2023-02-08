<template>
  <p>Edit the event here</p>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router'
import { ref } from 'vue'

defineProps({
  event: {
    type: Object,
    required: true,
  },
})

const unsavedChanges = ref(true)

onBeforeRouteLeave((routeTo, routeFrom, next) => {
  if (unsavedChanges.value) {
    const answer = window.confirm(
      'Do you really want to leave? You have unsaved changes!'
    )
    if (answer) {
      next() // <-- Confirms the navigation
    } else {
      next(false) // <-- Cancels the navigation
    }
  } else {
    next() // <-- Confirms the navigation
  }
})
</script>
