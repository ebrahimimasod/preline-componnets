<script setup>
import {onMounted} from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet"


const links = [
  {
    name: "تلگرام",
    image: "https://cdn-icons-png.flaticon.com/128/2111/2111644.png",
    link: "3"
  },
  {
    name: "اینستاگرام",
    image: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    link: "https://instagram.com/eterexchange?utm_medium=copy_link",
  },
  {
    name: "لینکدین",
    image: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
    link: "https://eterex.com/contact-us#"
  },
  {
    name: "توییتر",
    image: "https://cdn-icons-png.flaticon.com/128/3128/3128310.png",
    link: "https://twitter.com/eterexchange"
  },
]


function createMap() {

  const map = L.map('map').setView([35.78953300395422, 51.36524672710953], 13);

  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const marker = L.marker([35.78953300395422, 51.36524672710953]).addTo(map)
      .bindPopup('<b>فاطمی</b>').openPopup();
}


onMounted(createMap);

</script>

<template>
  <div>
  </div>

  <header class=" h-[326px] bg-gray-50 ">
    <div id="map" class="map"></div>
  </header>

  <div class="bg-white !border-0 !shadow-none !mt-0 h-auto ">
    <div class="container !border-0 !shadow-none !mt-0 h-auto">

      <div class="translate-y-[-250px] ">
        <h1 class="text-[#12377b] font-black mb-[24px] text-right">تماس با ما </h1>
        <div class="p-[30px] rounded-lg bg-white  shadow-md">
          <div class="flex flex-start ">
            <img alt="clock" class="w-5 h-5 ml-2" src="https://cdn-icons-png.flaticon.com/128/833/833643.png"/>
            <p class="text-[#656565] font-medium">
              ساعت پاسخ‌گویی ما شنبه تا پنجشنبه ۱۰ صبح الی ۶ عصر
            </p>
          </div>
          <div class="flex flex-start mt-5 ">
            <img alt="clock" class="w-5 h-5 ml-2" src="https://cdn-icons-png.flaticon.com/128/833/833643.png"/>
            <p class="text-[#656565] font-medium">
              ساعت پاسخ‌گویی ما شنبه تا پنجشنبه ۱۰ صبح الی ۶ عصر
            </p>
          </div>
          <div class="flex flex-start mt-5 ">
            <img alt="clock" class="w-5 h-5 ml-2" src="https://cdn-icons-png.flaticon.com/128/833/833643.png"/>
            <p class="text-[#656565] font-medium">
              ساعت پاسخ‌گویی ما شنبه تا پنجشنبه ۱۰ صبح الی ۶ عصر
            </p>
          </div>
          <div class="flex flex-start mt-5 ">
            <img alt="clock" class="w-5 h-5 ml-2" src="https://cdn-icons-png.flaticon.com/128/833/833643.png"/>
            <p class="text-[#656565] font-medium">
              ساعت پاسخ‌گویی ما شنبه تا پنجشنبه ۱۰ صبح الی ۶ عصر
            </p>
          </div>
          <div class="mt-5">
            <h5>نقشه</h5>
          </div>
          <!--   icon telegram-->
          <div class="grid grid-cols-2">
            <div
                v-for="item in links"
                class="flex justify-around mt-5">
              <div
                  class=" flex flex-start  w-28 h-16 md:w-[250px]  rounded-md items-center border border-gray-100 shadow  ml-5">

                <img class="w-5 mr-2" alt="a" :src="item.image">
                <a :href=item.link><span
                    class="text-[#666464] font-bold font-sm text-center mr-3 ">{{ item.name }}</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class=" md:grid grid-cols-12 md:mt-20">
          <div id="Download-app " class="lg: col-span-4">
            <p class="text-base font-bold mt-20">
              با اپلیکیشن اِتراِکس، در لحظه خرید و فروش کنید!
            </p>
            <span class="text-[#898989] font-bold mt-4">
        دانلود اپلیکیشن اتراکس
      </span>
          </div>
          <!--boxes-social-->
          <div id="boxes-social"
               class="grid grid-cols-2 span-2 md:col-span-8 md:gap-2 md:mr-[150px] lg:col-span-8  lg:mr-20 lg:grid-cols-4  mt-10 items-center">

            <div class="flex flex-start">
              <div class="w-[145px] h-[40px] lg:w-[145px] lg:h-[40px] ml-2 lg:ml-5">
                <img alt="bazzar-icon" class=" lg:w-[145px] lg:h-[40px]"
                     src="https://eterex.com/assets/app-markets/coffe-bazzar.svg"/>
              </div>
            </div>
            <div class="w-[145px] h-[40px] lg:ml-5 ">
              <img alt="play" src="https://eterex.com/assets/app-markets/google-play.svg"/>
            </div>
            <div class="w-[145px] h-[40px] mt-2 ">
              <img class="w-[135px]" alt="play" src="https://eterex.com/assets/app-markets/myket.svg"/>
            </div>
            <div class="w-[145px] h-[40px] border border-gray-100 mt-2 ">
              <img class="w-[135px]" alt="play" src="https://eterex.com/assets/app-markets/apk.png"/>
            </div>
            <div class="w-[145px] h-[40px]  mt-2 ">
              <img class="w-[135px]" alt="play" src="https://eterex.com/assets/app-markets/sibche.svg"/>
            </div>
            <div class="w-[145px] h-[40px]  mt-2 ">
              <img class="w-[145px]" alt="play" src="https://eterex.com/assets/app-markets/sib-app.svg"/>
            </div>
            <div class="w-[145px] h-[40px]  mt-2 ">
              <img class="w-[135px]" alt="play" src="https://eterex.com/assets/app-markets/pwa.svg"/>
            </div>
            <div class="w-[145px] h-[45px]  border border-gray-100 mt-2 ">
              <img class="w-[135px]" alt="play" src="https://eterex.com/assets/app-markets/sibirani.png"/>
            </div>
          </div>
        </div>


      </div>


    </div>


  </div>


</template>

<style>

#map {
  height: 400px;
  width: 600px;
  max-width: 100%;
  max-height: 100%;
  direction: ltr;
}

#map *{
  direction: ltr;
}
</style>