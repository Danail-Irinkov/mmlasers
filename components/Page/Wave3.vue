<script lang="ts" setup>
const { t, te } = useLang()

const bullets = []
for (const key of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
	if (te('wave3.bullets.' + key))
		bullets.push(t('wave3.bullets.' + key))
}

</script>

<template>
  <div id="wave3" class="height-fit py-8" style="width: 100%;">
    <div class="flex flex-col z-10 pl-6 sm:pl-10 md:pl-20">
      <h1 class="text-left text-2xl">
        {{ $t('wave3.title') }}
      </h1>
      <h2 class="flex space-x-4 justify-start mt-10 reading-width">
        {{ $t('wave3.spec') }}
      </h2>
      <li v-for="(item, key) in bullets" :key="key">
        {{ item }}
      </li>
    </div>
  </div>
</template>
