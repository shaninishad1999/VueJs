
<template>
    <div>
        <h1 ref="user">user components</h1>
    </div>
  
</template>

<script>
export default {
    name:"UserPage",
    beforeUnmount(){
        console.log("befor mount",this.$refs['user'])
    },
    unmounted(){
        console.log("un mount",this.$refs['user'])
    }

}
</script>

<style>

</style>