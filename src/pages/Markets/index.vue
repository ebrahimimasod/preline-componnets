<script setup>
import {ref} from "vue";

const lists = [{
  icon: "https://static-dl.eterex.com/icons/png/usdt_.png",
  title: "USDT",
  price: "56,200",
  titleButton: "خرید",
  link: "https://panel.eterex.com/exchange/irt/usdt",
  turnover: "1,333,395,941.62",
  marketSize: "-"
  ,
},
  {
    icon: "https://static-dl.eterex.com/icons/png/btc_.png",
    title: "BTC",
    price: "56,200",
    titleButton: "خرید",
    link: "https://panel.eterex.com/exchange/irt/eth",
    turnover: "1,333,395,941.62",
    marketSize: "25,545.58"
  },
  {
    icon: "https://static-dl.eterex.com/icons/png/eth_.png",
    title: "ETH",
    price: "56,200",
    titleButton: "خرید",
    link: "https://panel.eterex.com/exchange/irt/bnb",
    turnover: "1,333,395,941.62",
    marketSize: "25,545.58"
  },
  {
    icon: "https://static-dl.eterex.com/icons/png/btc_.png",
    title: "BTC",
    price: "56,200",
    titleButton: "خرید",
    link: "https://panel.eterex.com/exchange/irt/xrp",
    turnover: "1,333,395,941.62",
    marketSize: "25,545.58"
  },
  {
    icon: "https://static-dl.eterex.com/icons/png/eth_.png",
    title: "ETH",
    price: "56,200",
    titleButton: "خرید",
    link: "https://panel.eterex.com/exchange/irt/xrp",
    turnover: "1,333,395,941.62",
    marketSize: "25,545.58"
  },


]


const type = ref("dollar"); //toman


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
                 class="py-3 w-full px-4 block   border border-[#0934f3] rounded-3xl text-sm !ring-0  focus:border-primary-600 disabled:opacity-50    "
                 type="text"
                 placeholder="جستجو...."/>
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

      <div id="table" v-for="item in lists"
           class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center bg-[#fff] relative py-3 px-4 border border-gray-100 rounded-lg mt-2 ">

        <div class="flex justify-start">
          <img class="w-5" alt="icon" :src="item.icon"/>
          <a href="https://eterex.com/markets"><h4 class="text-[#000] text-xs font-bold mr-2">{{ item.title }}</h4></a>
        </div>

        <div class="justify-center hidden md:hidden lg:flex ">
          <span class="text-xs font-semibold text-center text-[#000]  cursor-pointer mr-20">{{ item.turnover }}</span>

        </div>
        <div class="lg:flex justify-center hidden md:hidden ">
          <span class="text-xs font-semibold text-center text-[#000]  cursor-pointer mr-20">{{ item.marketSize }}</span>

        </div>

        <div>
          <span class="text-xs font-semibold text-center text-[#000]  cursor-pointer mr-20">{{ item.price }}</span>

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
    </div>


  </div>
</template>


