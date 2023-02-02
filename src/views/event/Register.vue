<template>
  <p>Register for the event here (composition)</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  name: "event-registrer",
  props: ["event"],
  inject: ["GStore"],
  methods: {
    register() {
      // call to aPI
      // if register redirect to event details
      this.GStore.flashMessage = `Successfully for ${this.event.title}`;
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({ name: "EventDetails" });
    },
  },
};
</script>
