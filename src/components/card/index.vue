<script setup>
import {defineProps} from 'vue'


const props = defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  image: {
    type: String
  },
  compact: {
    type: Boolean,
    default: false,
  }
})

</script>

<template>
  <div
      :style="{background:`url(${image})`}"
      class="card-container">

    <div class="w-full z-2  px-6 py-4 absolute bottom-0">

      <h1 class="title-style mb-2 ">{{ title }}</h1>

      <p class="description-style">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style>
.card-container {
  @apply w-3/6  h-56 flex flex-col  rounded-lg bg-gray-200 relative ;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  overflow: hidden;
}


.card-container::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.title-style {
  @apply text-2xl text-white text-right font-bold;
}

.description-style {
  @apply text-sm text-white text-center;
}

</style>
