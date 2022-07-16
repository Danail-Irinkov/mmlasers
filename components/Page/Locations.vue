<script lang="ts" setup>
import { GoogleMap, Marker } from 'vue3-google-map';
const center = { lat: 43.20145852056169, lng: 27.908772414636307 }
const markerOptions = { position: center, label: 'M', title: 'Meimann Varna' };

</script>

<template>
  <div id="locations" class="height-fit py-8" style="width: 100%;">
    <div class="flex flex-col z-10 pl-6 sm:pl-10 md:pl-20 pb-8">
      <h1 class="text-left text-2xl">
        {{ $t('locations.title') }}
      </h1>
    </div>
    <GoogleMap api-key="AIzaSyAUGROgT3maDmhzZOgVzfIqGxl8_qvbYLw" style="width: 100%; height: 500px" :center="center" :zoom="15">
      <Marker :options="markerOptions" />
    </GoogleMap>
  </div>
</template>
