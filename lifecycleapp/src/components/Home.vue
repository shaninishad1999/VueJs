<template>
  <!-- <p>This is home page {{ name }}</p> -->
   <button v-on:click="show=!show">Toggle</button>
  <UserPage v-if="show"/>
</template>

<script>
import UserPage from "./User.vue"
export default {
  name: "HomePage",
  components:{
    UserPage
  },
  data() {
    // this method will excute in second time
    console.warn("created data");
    return {
    //   name: "Anil",
        show:true
    };
  },
  beforeCreate() {
    // sabse pahle this method will excute
      alert("Before Created");
      console.warn("created before");
    },
    created() {
        // sabse last me ye create method chalata hai
      this.name = "Shanideval";
    alert("Create ");
    console.warn("created");
  },
};
</script>