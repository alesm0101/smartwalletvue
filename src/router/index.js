import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import EventCreate from '@/views/EventCreate.vue'
import ErrorDisplay from '@/views/ErrorDisplay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/event/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit,
        },
      ],
    },
    {
      path: '/event/create',
      name: 'EventCreate',
      component: EventCreate,
    },
    {
      path: '/about-us',
      redirect: { name: 'about' },
    },
    /*     {
      path: "/the-event/:id",
      // redirect: (to) => {
      //  return { name: "EventDetails", params: { id: to.params.id } };
      redirect: () => {
        return { name: "EventDetails" };
      },
    }, */
    {
      path: '/about',
      name: 'about',
      // alias: "/about-us",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError,
    },
    {
      path: '/error/:error',
      name: 'ErrorDisplay',
      props: true,
      component: ErrorDisplay,
    },
  ],
})

export default router
