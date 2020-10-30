import { ref } from "vue";
import axios from "axios";

function useURLLoader(url) {
    const result = ref(null);
    const loading = ref(true);
    const loaded = ref(false);
    const error = ref(null);
    axios
        .get(url)
        .then((rawData) => {
            loading.value = false;
            loaded.value = true;
            result.value = rawData.data;
        })
        .catch((e) => {
            error.value = e;
            loadding.value = false;
        });

    return {
        result,
        loading,
        error,
        loaded,
    };
}

export default useURLLoader;
