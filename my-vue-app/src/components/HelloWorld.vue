<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.hello {
  font-size: 1.5em;
  color: #35495e;
}
</style>
