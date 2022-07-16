<script lang="ts" setup>
const { t, te } = useLang()

const bullets = []
for (const key of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
	if (te('offer.bullets.' + key))
		bullets.push(t('offer.bullets.' + key))
}

</script>

<template>
  <div id="offer" class="height-fit py-8" style="width: 100%;">
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
