<template>
  <div>
    <p>This is life cycle page {{ name }}</p>
    <h1 ref="count">{{ counter }}</h1>
    <button v-on:click="counter += 1">Update count</button>
  </div>
</template>
  
  <script>
export default {
  name: "LifeCyclePage",
  data() {
    return {
      counter: 0,
      name: "Shanideval",
    };
  },
  beforeMount() {
    console.warn("beforeMount", this.$el);
  },

  beforeUpdate() {
    console.warn("beforeUpdate", this.$refs["count"].textContent);
  },
  updated() {
    console.warn("updated", this.$refs["count"].textContent);
  },

  mounted() {
    console.warn("mounted", this.$el);
  },

};
</script>
  