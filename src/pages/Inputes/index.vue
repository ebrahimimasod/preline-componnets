<script setup>

import Input from "@/components/Input/index.vue"
import Icon from "@/components/Icon/index.vue"

import {ref} from "vue";
import Button from "@/components/Button/index.vue";

const inputValue = ref()

</script>

<template>
  <div class="w-full">
<label>عنوان </label>
<input basic/>
    <!-- size -->
    <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Size</h2>
      <div class="flex items-center  justify-start">
        <Input
               placeholder="small size"
               v-model="inputValue"
               type="text" size="sm"/>
        {{ inputValue }}

      </div>
      <div class="flex items-center  justify-start mt-5">
        <Input  placeholder="Defult size"
               v-model="inputValue" type="text" size="md"/>
        {{ inputValue }}

      </div>
      <div class="flex items-center  justify-start mt-5">
        <Input
            placeholder="Large size"
            v-model="inputValue"
            type="text"
            size="lg"/>
        {{ inputValue }}

      </div>

    </div>

    <!-- label -->
    <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
      <h2 class="mb-4 font-semibold text-2xl">Label</h2>

      <div class="flex items-center justify-start">
        <Input
            type="email"
            placeholder="you@site.com"
            label="email"/>
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
             basic>
        <template #icon>
            <Icon name="user"/>
        </template>

      </Input>
      <div class="flex items-center justify-start">
        <Input type="password"
               icon
               variant="gray"
               basic>

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

      <Input  variant="gray" floating>
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
          floating>
        <template #label >
          <p>
            password
          </p>
        </template>
      </Input>
    </div>
  </div>
  <!--Disabled-->

  <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
    <h2 class="mb-4 font-semibold text-2xl">Disabled</h2>

    <div class="flex  items-center justify-start flex-col gap-3">
      <Input
          rounded
          disabled
          variantDisabled="disabledInput"
          v-model="inputValue"
          type="text"
          placeholder="Input Disabled">
      </Input>
      <Input
          rounded
          disabled
          variantDisabled="disabledInput"
          v-model="inputValue"
          type="text"
          placeholder=" Disabled Read only input">
      </Input>

      <Input
          variant="gray-fill"
          disabled
          type="text"
          placeholder="Enter name"
          >
        <template #icon>
          <Icon class="pl-0 opacity-50" name="user"/>
        </template>
      </Input>
      <Input
          variant="gray-fill"
          disabled
          type="password"
          placeholder="Enter password"
      >
        <template #icon>
          <Icon class="pl-0 opacity-50" name="keyRound"/>
        </template>
      </Input>




    </div>

  </div>

  <!--rounded input-->
  <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
    <h2 class="mb-4 font-semibold text-2xl">rounded input</h2>

    <div class="flex items-center  justify-start">
      <Input
             rounded
             v-model="inputValue"
             type="text"
             placeholder="Input Text ">

      </Input>
    </div>


    </div>
  <!--Validation status-->
  <div class="p-10 w-1/2  border-[1px] border-gray-100 rounded-lg   m-auto mt-[15px] bg-white shadow-md">
    <h2 class="mb-4 font-semibold text-2xl">Validation Status</h2>
    <input type="tel" />

    <div class="flex items-center  justify-center flex-col ">
      <Input
          type="email"
          variant="danger">
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

      <Input variant="primary" >
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
      <Input
          variant="success" >
        <template #label >
          <p>
            Email
          </p>
        </template>
        <template #icon>
          <Icon  name="user" class="ml-5"/>
        </template>
        <template #message>
          <small class="ext-sm text-green-600">Please enter a valid email address. </small>
        </template>
      </Input>


    </div>

    <div class="flex items-center  justify-start">
<div></div>
    </div>
  </div>


</template>