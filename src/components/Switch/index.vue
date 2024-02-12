<script setup>
import {computed, defineProps} from "vue"

const props = defineProps({
  label: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: "default"
  },
  size: {
    type: String,
    default: "sm"
  },
  variant: {
    type: String,
    default: "default"
  },
  icon: {
    type: String
  }

})


const switchClasses = computed(() => {
  const classes = ['switch']
  classes.push(props.size);
  return classes;
})

</script>
<template>
  <!--  <input
        :class="switchClasses"

        type="checkbox">-->
  <input type="checkbox"
         :class="switchClasses"
         id="switch">

  <label for="switch" class="sr-only">switch</label>

</template>
<style>

.switch {
  @apply relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800
  before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200
}

.switch.sm {
  @apply w-11 h-6;
}

.switch.md {
  @apply w-[3.25rem] h-7;
}

.switch.lg {
  @apply w-[4.25rem] h-9 ;
}
</style>