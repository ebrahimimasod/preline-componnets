<script setup>

import Input from "@/components/Input/index.vue"
import Icon from "@/components/Icon/index.vue"

import {ref} from "vue";
import Button from "@/components/Button/index.vue";

const inputValue = ref()

</script>

<template>
  <div class="w-full">


    <!-- Basic -->
    <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Basic</h2>

      <div class="flex items-center  justify-start">
        <Input variant="gray" basic="true" v-model="inputValue" type="text"/>
        {{ inputValue }}

      </div>
    </div>

    <!-- size -->
    <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Size</h2>
      <div class="flex items-center  justify-start">
        <Input variant="gray" placeholder="small size" basic="true" v-model="inputValue" type="text" size="sm"/>
        {{ inputValue }}

      </div>
      <div class="flex items-center  justify-start mt-5">
        <Input variant="gray" placeholder="Defult size" basic="true" v-model="inputValue" type="text" size="md"/>
        {{ inputValue }}

      </div>
      <div class="flex items-center  justify-start mt-5">
        <Input variant="gray" placeholder="Large size" basic="true" v-model="inputValue" type="text" size="lg"/>
        {{ inputValue }}

      </div>

    </div>

    <!-- label -->
    <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Label</h2>

      <div class="flex items-center  justify-start">
        <Input label="test" variant="gray" basic="true"/>
      </div>

      <div class="flex items-center  justify-start">
        <Input variant="gray" basic="true">
          <template #label>
            <span>
              test label
            </span>
          </template>
        </Input>
      </div>

    </div>
  </div>
  <!--  gray-input-->
  <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
    <h2 class="mb-4 font-semibold text-2xl">gray-input</h2>

    <div class="flex items-center  justify-start">
      <Input type="email"
             :icon="true"
             variant="gray"
             basic="true">
        <template #icon>
            <Icon name="user"/>
        </template>

      </Input>
      <div class="flex items-center justify-start">
        <Input type="password"
               :icon="true"
               variant="gray"
               basic="true">

          <template #icon>
            <Icon name="key"/>
          </template>

        </Input>

      </div>

    </div>
  </div>
  <!--floating-label-->
  <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
    <h2 class="mb-4 font-semibold text-2xl">floating-label</h2>

    <div class="flex items-center  justify-start">

      <Input  variant="gray" floating="true">
        <template #label >
          <p>
            email
          </p>
        </template>
      </Input>
    </div>

    <div class="flex items-center  justify-start">
      <Input  type="password"
          variant="gray"
          floating="true">
        <template #label >
          <p>
            password
          </p>
        </template>
      </Input>
    </div>
  </div>
  <!--Pilled input-->
  <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
    <h2 class="mb-4 font-semibold text-2xl">Pilled input</h2>

    <div class="flex items-center  justify-start">
      <Input variant="gray"
             pilled="true"
             v-model="inputValue"
             type="text"
      placeholder="Input Text ">

      </Input>
    </div>


    </div>
  <!--Validation states-->
  <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
    <h2 class="mb-4 font-semibold text-2xl">Validation states</h2>

    <div class="flex items-center  justify-start">
      <Input variant="danger"  >
        <template #label >
          <p>
            Email
          </p>
        </template>
        <template #icon>
          <Icon  name="user"/>
        </template>
        <template #message>
          <small class="ext-sm text-red-600">Please enter a valid email address. </small>
        </template>
      </Input>

    </div>

    <div class="flex items-center  justify-start">
<div></div>
    </div>
  </div>


</template>