<template>
  <p>Edit the event here</p>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>
