<script setup>
import {onMounted, ref} from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet"

const map = ref(null);



function setCenter(center = [35.734219886238236, 51.33253640045613],title="تهران") {
  if(map.value === null){
    map.value = L.map('map').setView(center, 13)
  }
   const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map.value);
  const marker = L.marker(center).addTo(map.value).bindPopup(`<b>${title} </b>`).openPopup();

  map.value.flyTo(center);
 }

onMounted(setCenter)

</script>
<template>
  <h1>Map</h1>
<div class="container">
  <div class="grid grid-cols-3">
    <h2>موقعیت جغرافیایی</h2>
    <div class="flex justify-center">
      <button @click="setCenter([35.699824, 51.337752],'ازادی')" class="ml-5" >آزادی</button>
      <button @click="setCenter([35.771842, 51.307536],'سعادت آباد' )">سعادت آباد</button>
    </div>

    <div  class="map-style bg-amber-600">
        <div id="map"></div>
    </div>
  </div>
</div>

</template>
<style>
.map-style{
  height: 400px;
  width: 600px;
  max-width: 100%;
  max-height: 100%;
  direction: ltr;
}
.map-style *{
  direction: ltr;
}

</style>