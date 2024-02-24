<script setup>
 import {defineProps} from 'vue'



const props=defineProps({
  title:{
    type:String
  },
  description:{
    type:String

  },
  link:{
    type:String
  },
  image:{
    type:String
  }
})

</script>

<template>
    <div
        class=" cardContainer bg-[url('https://blog.eterex.com/wp-content/uploads/2023/12/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%A9%D8%AF-%DB%8C%D9%88-%D9%88%D9%88%DA%86%D8%B1-%D8%A8%D8%AF%D9%88%D9%86-%D8%A7%D8%AD%D8%B1%D8%A7%D8%B2-%D9%87%D9%88%DB%8C%D8%AA-%D9%88-%D8%AB%D8%A8%D8%AA-%D9%86%D8%A7%D9%85-%D9%88-%D8%A8%D8%AF%D9%88%D9%86-1%DA%A9%D8%A7%D8%B1%D9%85%D8%B2%D8%AF.jpg')]">
      <h1 class="titleStyle">{{ title }}</h1>
      <p class="descriptionStyle">
{{description}}      </p>
    </div>

</template>


<style>
.cardContainer{
  @apply w-3/6  h-56 flex flex-col  rounded-lg bg-gray-200  ;
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat

}
.titleStyle{
  @apply text-base text-white text-right;
position: absolute;
}
.descriptionStyle{
  @apply text-sm text-white font-normal opacity-75 mt-5
  p-5;
  position: absolute;


}

</style>
