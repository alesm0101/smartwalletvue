<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  // props: [ 'page' ],
  props: {
    page: {
      // from routing
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // events: null
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    hasNextPage() {
      // First, calculate total pages   // 2 is events per page
      const totalPages = Math.ceil(this.$store.state.totalEvents / 2)
      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    },
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    getEvents() {
      this.$store.dispatch('fetchEvents', this.page).catch((error) => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error: error },
        })
      })
      console.log('page', typeof this.page)
    },
  },
  watch: {
    page(value, oldValue) {
      console.log(value, oldValue)
      this.getEvents()
    },
  },
}
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
