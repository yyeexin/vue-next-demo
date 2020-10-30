<template>
  <h1 v-if="loading">loading...</h1>
  <img v-if="loaded" :src="result.message" />
</template>
<script>
import { reactive, computed } from "vue";
import useURLLoader from "../hooks/useURLLoader";
export default {
  name: "Home",
  setup() {
    const { result, loading, loaded, error } = useURLLoader(
      "https://dog.ceo/api/breeds/image/random"
    );
    return {
      result,
      loading,
      loaded,
    };
  },
};
</script>
