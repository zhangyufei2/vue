<template>
  <div>
    <h3>子组件</h3>
    <h4>父传子的值:{{childData}}</h4>
    <button @click="childBtn">点我</button>
  </div>
</template>
<script>
  export default {
    name: "child",
    props: ["childData"],
    data() {
      return {
        message:1
      }
    },
    methods:{
      childBtn(){
        this.$emit('it',this.message)
      }
    }
  }
</script>
<style>

</style>
