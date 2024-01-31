<script setup>
import {defineProps, computed} from "vue";

const props = defineProps([
  "type",
  "variant",
  "size",
  "outlined",
  "ghost",
  "link",
  "Pilled",
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
  if(props.size){
    classes.push("size")
  }
  if(props.ghost){
    classes.push("ghost")
  }
  if(props.link){
    classes.push("link")
  }
  if(props.Pilled){
    classes.push("Pilled")
  }
  if(props.block){
    classes.push("block")
  }
  if(props.icon){}
  classes.push("icon")

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
  @apply bg-primary-600 text-white hover:bg-primary-100  ml-3 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.secondary {
  @apply bg-secondary-600 text-white hover:bg-secondary-600  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}
.btn.warning{
  @apply bg-warning-600 text-white hover:bg-warning-400  ml-3 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}
.btn.danger{
  @apply bg-danger-600 text-white hover:bg-danger-500  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}
.btn.gray{
  @apply bg-gray-600 text-white hover:bg-gray-500  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ;
}
.btn.success{
  @apply bg-success-500 text-white hover:bg-success-300  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.outlined {
  @apply  border border-gray-100 text-gray-500 hover:border-gray-300 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}

.btn.outlined.primary {
  @apply  border bg-transparent border-primary-600 text-primary-600 hover:border-gray-300 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.outlined.success {
  @apply   border bg-transparent border-success-500 text-success-500 hover:border-gray-300 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.outlined.danger {
  @apply    border bg-transparent border-danger-500 text-danger-500 hover:border-gray-300 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.outlined.warning {
  @apply    border bg-transparent border-warning-500 text-warning-500 hover:border-gray-300 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.link {
  @apply !bg-transparent text-primary-600  disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}

.btn.ghost{
  @apply bg-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.Pilled{
  @apply  rounded-full border border-primary-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.ghost.primary{
  @apply  text-primary-600 hover:bg-primary-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.ghost.success{
  @apply  text-success-500 hover:bg-success-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.ghost.danger{
  @apply  text-danger-500 hover:bg-danger-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}
.btn.ghost.warning{
  @apply  text-warning-500 hover:bg-warning-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}



.btn.small {
  @apply py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.large {
  @apply p-4 sm:p-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}

.btn.link {
  @apply  inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
}
.btn.Pilled {
  @apply border rounded-full  border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ;
}
.btn.block{
  @apply w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-50 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
}

.btn.sm {
  @apply py-2 px-3 ;
}
.btn.md {
  @apply py-3 px-4 ;
}
.btn.lg {
  @apply py-4 px-5 ;
}
</style>