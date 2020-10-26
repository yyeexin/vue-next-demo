<template>
  <HelloWorld msg="你好" />
</template>
<script>
import { reactive, computed } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  setup() {
    console.log(111);

    const state = reactive({
      a: 0,
    });

    function increment() {
      state.a++;
    }
    return {
      state,
      increment,
    };
  },
};
</script>
