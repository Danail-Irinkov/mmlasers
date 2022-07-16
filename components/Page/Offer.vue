<script lang="ts" setup>
const { getLocaleMessage } = useLang()
const translations = getLocaleMessage('bg').offer.bullets

const bullets = []
for (const key in translations)
	bullets.push(translations[key].source)

</script>

<template>
  <div id="about_us" class="height-fit py-8" style="width: 100%;">
    <div class="flex flex-col z-10 pl-6 sm:pl-10 md:pl-20">
      <h1 class="text-left text-2xl">
        {{ $t('offer.title') }}
      </h1>
      <li v-for="(item, key) in bullets" :key="key">
        {{ item }}
      </li>
    </div>
  </div>
</template>
