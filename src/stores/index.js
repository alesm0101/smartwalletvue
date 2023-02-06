import { createStore } from 'vuex'
import EventServices from '@/services/EventServices.js'
import user from './modules/user.js'

export default createStore({
  state: {
    events: [],
    totalEvents: 0,
    event: {},
  },
  mutations: {
    ADD_EVENT(state, payload) {
      state.events.push(payload)
    },
    SET_EVENTS(state, payload) {
      state.events = payload
    },
    SET_EVENT(state, payload) {
      state.event = payload
    },
    SET_TOTAL_EVENTS(state, payload) {
      state.totalEvents = payload
    },
  },
  actions: {
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find((event) => event.id == id) // string || number
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        return EventServices.getEvent(id)
          .then((response) => {
            commit('SET_EVENT', response.data)
          })
          .catch((error) => {
            throw error // <--- throw error
          })
      }
    },
    fetchEvents({ commit }, page) {
      return EventServices.getEvents(2, page)
        .then((response) => {
          // NEW
          commit('SET_EVENTS', response.data)
          commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
        })
        .catch((error) => {
          throw error // <--- throw error
        })
    },
    createEvent({ commit }, event) {
      EventServices.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch((error) => {
          throw error // <--- throw error
        })
    },
  },
  getters: {
/*     doneEvents (state) {
      return state.events.filter(event => event.done)
    },
    doneEventssCount (state, getters) {
      return getters.doneEvents.length
    },
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id)
    } */
  },
  modules: { user }
})
