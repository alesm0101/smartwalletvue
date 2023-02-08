<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink :to="{ name: 'EventDetails', params: { id: props.event.id } }">
    <div class="event-card">
      <h2>{{ props.event.title }}</h2>
      <span>@{{ props.event.time }} on {{ props.event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
