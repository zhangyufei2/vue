<template>
  <div>
    <p>{{msg}}</p>
    <h3>{{$store.state.count}}</h3>
    <p>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>

<script>
  import store from '../store/index.js'

  export default {
    data() {
      return {
        msg: 'hello'
      }
    },
    store
  }

</script>

<style>
</style>
