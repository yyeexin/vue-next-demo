<template>
  <div>{{ x }}</div>
  <div>{{ y }}</div>
  <!-- <div>
    {{ count }}
  </div>
  <div>{{ double }}</div>
  <button @click="increase">+1</button> -->
</template>
<script>
import useMousePosition from "../hooks/useMousePosition.js";
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
  onUpdated,
  watch,
} from "vue";
export default {
  name: "Index",
  setup() {
    const { x, y } = useMousePosition();
    const data = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
    });
    watch(
      () => data.count,
      (newVal, oldVal) => (document.title = newVal)
    );
    return {
      ...toRefs(data),
      x,
      y,
    };
  },
};
</script>
<style>
</style>