<template>
  <q-page class="q-pa-xl">
    <q-select
      v-model="selection"
      label="Select option or type to search"
      use-input
      :options="options"
      input-debounce="0"
      @filter="queryOptions"
    />

    <ul>
      <li v-for="item in appStore.selections" :key="item.id">
        {{ item.selected }}
      </li>
    </ul>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useAppStore } from 'src/stores/app-store';

const appStore = useAppStore();

const selection = ref('');
const options = ref<string[]>([]);

function queryOptions(query: string, update: (fn: () => void) => void) {
  if (query === '') {
    update(() => {
      options.value = appStore.options;
    });
    return;
  }
  appStore.loadOptions(query).then((res) => {
    update(() => {
      options.value = res;
    });
  });
}
watch(
  () => appStore.options,
  (newVal: string[]) => {
    options.value = newVal;
  }
);
watch(
  () => selection.value,
  (newVal: string) => {
    appStore.setSelection(newVal);
  }
);
onMounted(() => {
  appStore.loadOptions();
});
</script>
