<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ props.error }}</p>
</template>

<script setup>
const props = defineProps({
  error: {
    required: true,
  },
})
</script>
