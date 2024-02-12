<script setup>
import {computed, defineProps, defineEmits} from "vue";
import Icon from "@/components/Icon/index.vue";

const props = defineProps({
  modelValue: {
    type: [String, Number]
  },
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default'
  },
  rounded: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: () => {
      return []
    }
    // if props type (array Or object) , default must : ()=>{return [] Or {}}
  }
});
const emits = defineEmits(["update:modelValue"])
const selectValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits("update:modelValue", value)
  }
})
//class in style
const selectClasses = computed(() => {
  const classes = ["select"];

  classes.push(props.size);
  classes.push(props.variant);

  if (props.rounded) {
    classes.push("rounded");
  }
  if (props.disabled) {
    classes.push("disebled");
  }
  if (props.icon) {
    classes.push("icon");
  }

  return classes;
});
</script>

<template>
  <div class="select-wrapper">
    <div class="relative w-full">
      <select
          v-model="selectValue"
          :disabled="disabled"
          :class="selectClasses">
        <option
            v-for="option in options"
            :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <div v-if="variant === 'danger'" class="absolute right-4 top-3 ">
        <Icon name="AlertCircle" color="red"/>
      </div>
      <div v-if="variant==='success'" class="absolute right-4 top-3">
        <Icon name="check" color="green"/>
      </div>
    </div>

  </div>
</template>
<style>
.select-wrapper {
  @apply w-full;
}

.select {
  @apply py-3 px-2 pt-2  w-full text-sm border border-gray-300 rounded-md items-start self-center focus:outline-primary-500;
}

.select.gary {
  @apply bg-gray-100  rounded-lg;
}

.select.danger {
  @apply border border-danger-300 focus:outline-danger-500;
}

.select.success {
  @apply border border-success-300 focus:outline-success-500
}

.select.sm {
  @apply py-2 px-3;
}

.select.md {
  @apply py-3 px-4 mt-[10px];
}

.select.lg {
  @apply py-4 px-5 mt-[10px];
}

.select.rounded {
  @apply rounded-full;
}

.select.disebled {
  @apply cursor-not-allowed mt-[10px];
}

.select.label {
  @apply text-red-500;
}
</style>
