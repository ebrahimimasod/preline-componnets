<script setup>
import {defineProps, computed} from "vue";

const props = defineProps([
  "type",
  "variant",
  "size",
  "color",
  "outlined",
  "ghost",
  "soft",
  "link",
  "rounded",
  "block",
  "icon",
  "loading",
  "disabled",
]);

const btnClasses = computed(() => {
  const classes = ["btn"];

  classes.push(props.variant);

  classes.push(props.size);

  if (props.outlined) {
    classes.push("outlined");
  }

  if (props.link) {
    classes.push("link");
  }

  return classes;
});
</script>


<template>
  <button
      :type="type"
      :class="btnClasses"
  >
    <slot/>
  </button>
</template>

<style scoped>

.btn {
  @apply py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 ;
}

.btn.primary {
  @apply bg-blue-600 text-white hover:bg-blue-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.secondary {
  @apply bg-green-600 text-white hover:bg-green-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.info {
  @apply bg-sky-600 text-white hover:bg-sky-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.outlined {
  @apply py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.small {
  @apply py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.large {
  @apply p-4 sm:p-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.link {
  @apply py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}
</style>