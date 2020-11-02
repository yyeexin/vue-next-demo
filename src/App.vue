<template>
    <div class="container">
        <column-list :list="list"></column-list>
    </div>
    <!-- <router-view /> -->
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import { testData } from "./testData";
export default defineComponent({
    name: "App",
    components: {
        ColumnList
    },
    setup() {
        return {
            list: testData
        };
    }
});
</script>
