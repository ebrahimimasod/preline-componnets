<script setup>
import {ref, onMounted, computed} from "vue";
import axios from "axios"
import Buttons from "@/components/Button/index.vue"
import Icon from "@/components/Icon/index.vue"

const list = ref([]) // این ارایع پر میشه توسط api

const config = ref();

const pageNumber = ref(1)

const keyword = ref()

const type = ref("dollar"); //toman

const loading = ref(true)

async function fetchAssets() {

  const res = await axios.get("https://publicv2.stage.eterex.net/public/api/assets/price/list")

  list.value = res.data.map(item => {

    const icon = item.symbol.replace("USDT", "").toLowerCase();

    const usdtPrice = Number(item.price).toFixed(4);//usdt تتر

    const irtPrice = usdtPrice * config.value;//تومان

    return {
      icon: "https://static-dl.eterex.com/icons/png/" + icon + "_.png",
      title: icon.toUpperCase(),
      usdtPrice,//USDT//dollar
      irtPrice,
      titleButton: "خرید",
      link: `https://panel.eterex.com/exchange/irt/${icon}`,
      turnover: "1,333,395,941.62",
      marketSize: "-"
    }
  })
}

async function fetchConfig() {
  const res = await axios.get("https://api.stage.eterex.net/api/Configs/v2")
  config.value = res.data.assetPrices[0].toIrt

}

const listFiltered = computed(() => {

  if (keyword.value) {
    return list.value.filter(item => {
      return item.title.includes(String(keyword.value).toUpperCase())
    })
  }

  return list.value.slice(0, pageNumber.value * 20);
})

onMounted(async () => {
  loading.value = true;
  await fetchConfig()
  await fetchAssets()
  loading.value = false;
})

</script>

<template>
  <div id="container" class="container !bg-white !border-0 h-auto">

    <div>

      <div class="grid grid-cols-1 mb-6  md:grid-cols-12 gap-2 md:grid">

        <div class="md:col-span-6">
          <h3 class="text-sm font-bold  text-right md:text-3xl">ارز های دیجیتال</h3>
        </div>

        <div class="md:col-span-3 md:order-2 ">
          <div class="grid grid-cols-2 gap-2 ">
            <div
                @click="type = 'dollar'"
                class="text-black w-full h-[40px]   bg-gray-100  focus:bg-blue-200  rounded-3xl justify-center text-xs flex items-center"
                :class="type === 'dollar' && 'bg-primary  text-white'"
            >
              <span>دلار</span>
            </div>
            <div
                @click="type = 'toman'"
                class="w-full text-black h-[40px]   bg-gray-100  focus:bg-blue-200   rounded-3xl justify-center text-xs flex items-center"
                :class="type === 'toman' && 'bg-primary text-white'"
            >
              <span>تومان</span>
            </div>
          </div>
        </div>

        <div class="w-full md:col-span-3 md:order-1">
          <input
              v-model="keyword"
              class="py-3 w-full px-4 block   border border-[#0934f3] rounded-3xl text-sm !ring-0  focus:border-primary-600 disabled:opacity-50    "
              type="text"
              placeholder="جستجو...."/>
          {{ console.log(keyword) }}

        </div>
      </div>


      <!--   header-table-->
      <div class="lg:grid lg:grid-cols-5 hidden md:hidden  ">
        <div>
          <span class="flex text-right text-base text-[#9da1a9] mr-10">ارز</span>
        </div>
        <div>
          <span class="flex text-right text-base text-[#9da1a9] ">حجم معاملات دلاری</span>
        </div>
        <div>
          <span class="flex text-center text-base text-[#9da1a9]  ">حجم بازار دلاری</span>
        </div>
        <div>
          <span class=" text-right text-base text-[#9da1a9]  ">ارزش دلاری</span>
        </div>
      </div>

      <template v-if="loading">
        <div class="flex  justify-center mt-20">
          <svg class="animate-spin h-36 w-36 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </template>

      <template v-else>

        <div id="table"
             v-for="item in listFiltered"
             class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center bg-[#fff] relative py-3 px-4 border border-gray-100 rounded-lg mt-2 ">

          <div class="flex justify-start">
            <img class="w-5" alt="icon" :src="item.icon"/>
            <a href="https://eterex.com/markets"><h4 class="text-[#000] text-xs font-bold mr-2">{{ item.title }}</h4>
            </a>
          </div>

          <div class="justify-center hidden md:hidden lg:flex ">
            <span class="text-xs font-semibold text-center text-[#000]  cursor-pointer mr-20">{{ item.turnover }}</span>

          </div>
          <div class="lg:flex justify-center hidden md:hidden ">
            <span class="text-xs font-semibold text-center text-[#000]  cursor-pointer mr-20">{{
                item.marketSize
              }}</span>

          </div>
          <div>
          <span v-if="type === 'toman' "
                class="text-xs font-semibold text-center text-[#000]  cursor-pointer mr-20">{{ item.irtPrice }}</span>

            <span v-if="type === 'dollar' "
                  class="text-xs font-semibold text-center text-[#000]  cursor-pointer mr-20">{{
                item.usdtPrice
              }}</span>
          </div>


          <div class="justify-end hidden md:flex">
            <a :href="item.link"
               class="bg-[#233 240 252] rounded-lg bg-gray-100 text-[#0934f3] text-xs font-bold p-3">
              اطلاعات بیشتر
            </a>
          </div>


          <div class="flex justify-end">
            <a :href="item.link"
               class="bg-[#233 240 252] rounded-lg bg-gray-100 text-[#0934f3] text-xs font-bold p-3">{{
                item.titleButton
              }}
            </a>
          </div>


        </div>


        <div
             class="flex justify-center mt-5">
          <Buttons
              class="m-auto"
              @click="pageNumber++" outlined variant="primary">
            <Icon name="arrowDownFromLine"/>
            موارد بیشتر

          </Buttons>
        </div>

      </template>



    </div>

  </div>
</template>
<style>


</style>


