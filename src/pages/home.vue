<script setup>
// tw 4 = 1rem = 16px
// tw 1 = 4px
</script>

<template>
  <div class="bg-white w-screen">
    <header class="w-[90%] bg-white/75 backdrop-blur h-[100px] rounded-lg mx-auto mt-6 fixed left-0 right-0">
      <ul class="flex items-center justify-center h-full">
        <li v-for="i in 5" class="mx-6 text-black font-bold">
          menu {{ i}}
        </li>
      </ul>
    </header>

    <div class="container mt-[135px]">
      <section class="mt-4 mb-4">
        <h1 class="font-extrabold text-6xl text-blue-900 text-center mb-16">
          امکانات پلتفرم معاملاتی اِتر اِکس
        </h1>

        <div class="grid grid-cols-3 gap-8">

          <div v-for="i in 6" class="shadow-2xl p-5 rounded-3xl flex items-center justify-center flex-col">
            <img src="https://eterex.com/assets/features/1.png" alt="">
              <span class="flex font-extrabold text-blue-900 text-2xl mb-3">
                بیش از 350 رمزارز
              </span>
            <p class="text-center px-12 text-gray-400">
              ما در اتراکس بیش از 350 رمزارز برای خرید و فروش در اختیار شما گذاشته ایم.
            </p>
          </div>

        </div>


        <h1 class="font-extrabold text-6xl text-blue-900 text-center mb-16">
        with flex
        </h1>


        <div class="flex  flex-wrap">

          <div  v-for="i in 6" class="basis-1/3 p-6">
            <div
                 class="shadow-2xl p-5 rounded-3xl  items-center justify-center flex-col ">
              <img src="https://eterex.com/assets/features/1.png" alt="">
              <span class="flex font-extrabold text-blue-900 text-2xl mb-3">
                بیش از 350 رمزارز
              </span>
              <p class="text-center px-12 text-gray-400">
                ما در اتراکس بیش از 350 رمزارز برای خرید و فروش در اختیار شما گذاشته ایم.
              </p>
            </div>
          </div>


        </div>

      </section>
    </div>
  </div>
</template>

<style scoped>

</style>