<template>
  <div>
    <h3>父组件</h3>
    <child :childData="realshow" @it='fatherBtn'></child>
    <h4>子传给父的值:</h4>
  </div>
</template>
<script>
  import Child from "./Child.vue";

  export default {
    name: "father",
    data() {
      return {
        realshow: "123"
      }
    },
    methods: {
      fatherBtn(mes) {
        console.log(mes)
      }
    },
    components: {
      Child
    }
  }
</script>
<style>

</style>
