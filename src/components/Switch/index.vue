<script setup>
import { computed, defineProps } from "vue";
import Icon from "@/components/Icon/index.vue"

const props = defineProps({
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: "default",
  },
  size: {
    type: String,
    default: "sm",
  },
  variant: {
    type: String,
    default: "default",
  },
  onicon: {
    type: String,
  },
  offIcon: {
    type: String,
  },
});

const switchClasses = computed(() => {
  const classes = ["switch"];
  classes.push(props.size);
  classes.push(props.variant);
  return classes;
});
</script>
<template>
  <!--  <input
        :class="switchClasses"

        type="checkbox">-->
  <input type="checkbox" :class="switchClasses" id="switch"
  :onicon="onicon" />

  <label for="switch" class="sr-only">switch</label>
  </div>



</template>
<style>
.switch {
  @apply relative w-[3.25rem] h-7 p-px bg-gray-100 
  border-transparent text-transparent rounded-full
   cursor-pointer transition-colors ease-in-out
    duration-200 focus:ring-blue-600 disabled:opacity-50 
    disabled:pointer-events-none checked:bg-none checked:text-blue-600
     checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800
  before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:mt-[-4px] before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200;
}
.switch.extrasm {
  @apply w-[35px] h-[21px];
}
.switch.sm {
  @apply w-11 h-6;
}

.switch.md {
  @apply w-[3.25rem] h-7;
}

.switch.lg {
  @apply w-[4.25rem] h-9;
}
.switch.secondary {
  @apply checked:before:bg-secondary-500 focus:ring-secondary-500  
  checked:border-secondary-600
   checked:text-secondary-600;
}
.switch.warning {
  @apply checked:before:bg-warning-500 focus:ring-warning-500  checked:border-warning-600 checked:text-warning-600;
}
.switch.danger {
  @apply checked:before:bg-danger-500 focus:ring-danger-500  checked:border-danger-600 checked:text-danger-600;
}
</style>
