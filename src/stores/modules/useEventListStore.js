import { defineStore } from 'pinia'
import EventServices from '@/services/EventServices.js'

export const useEventListStore = defineStore('eventList', {
  state: () => ({
    events: [],
    totalEvents: 0,
    event: {},
  }),
  // getters
  // actions
  actions: {
    fetchEvent(id) {
      const existingEvent = this.events.find((event) => event.id == id) // string || number
      if (existingEvent) {
        this.event = existingEvent
        return Promise.resolve()
      } else {
        return EventServices.getEvent(id)
          .then((response) => {
            this.event = response.data
          })
          .catch((error) => {
            throw error // <--- throw error
          })
      }
    },
    fetchEvents(page) {
      return EventServices.getEvents(2, page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch((error) => {
          throw error // <--- throw error
        })
    },
    createEvent(event) {
      return EventServices.postEvent(event)
        .then(() => {
          this.events.push(event)
        })
        .catch((error) => {
          throw error // <--- throw error
        })
    },
    deleteEvent(eventId) {
      return EventServices.deleteEvent(eventId)
        .then(() => {
          this.events = this.events.filter((event) => event.id != eventId)
        })
        .catch((error) => {
          throw error // <--- throw error
        })
    },
  },
})
