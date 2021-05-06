<template>
  <div class="home">
    <p @click="onCreate">{{ a }}</p>
  </div>
</template>

<script>
// import {foxSingleMixin} from './../fox/index'

export default {
  name: 'Home',
  data() {
    return {
      a: '2'
    }
  },

  created() {
  },

  methods: {
    onCreate() {
      console.log("onCreate");
    },
    onStart() {
      console.log("onStart");
    },
    onResume() {

    },
    onStop() {
      console.log("onStop");
    },
    onDestroy() {
      console.log("onDestroy");
    }
  },
  // mixins: [foxSingleMixin]
}
</script>
