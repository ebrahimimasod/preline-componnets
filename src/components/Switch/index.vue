<script setup>
import {computed, defineProps} from "vue";
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
  onIcon: {
    type: String,
  },
  offIcon: {
    type: String,
  },
});

const switchClasses = computed(() => {
  const classes = ["switch"];

  if (props.onIcon || props.offIcon) {
    classes.push('peer');
  }

  // classes.push(props.size);

  classes.push(props.variant);


  return classes;
});
</script>
<template>
  <div class="inline-flex items-center relative">


    <input type="checkbox" :class="switchClasses" id="switch"/>

    <label for="switch" class="sr-only">switch</label>

    <span
            v-if="offIcon"
            class="peer-checked:text-white text-gray-500 size-4 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
            <Icon class="flex-shrink-0" size="16" :name="offIcon"/>
      </span>


        <span v-if="onIcon"
              class="peer-checked:text-blue-600 text-gray-500 size-4 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
      <Icon class="flex-shrink-0" size="16" :name="onIcon"/>
      </span>


  </div>
</template>
<style>
.switch {
  @apply relative w-[35px] h-[21px] bg-gray-100 border-transparent text-transparent rounded-full
  cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50
  disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600
  focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500
  dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-4
  before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full
  before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out
  before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200;
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
