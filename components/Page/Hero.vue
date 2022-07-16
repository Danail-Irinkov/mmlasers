<script lang="ts" setup>
const { t } = useLang()
// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
const leadingsText = computed(() => [
	{
		text: titlesText.value[0],
		startColor: '#007CF0',
		endColor: '#00DFD8',
		delay: 2,
	},
	{
		text: titlesText.value[1],
		startColor: '#7928CA',
		endColor: '#FF0080',
		delay: 4,
	},
])
</script>

<template>
  <div class="height-fit bg-skin-50" style="width: 100%;height: 75vh; overflow: hidden">
    <div class="flex flex-col z-10 px-20" style="position: absolute;margin-top: 20vh">
      <h1 class="text-left">
        <span
          v-for="(item, i) in leadingsText"
          :key="i"
          style="animation-duration: 2000ms"
          :style="`--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --delay: ${item.delay}s`"
          class="animated-text-bg drop-shadow-xl text-xs-xl text-sm-lg text-md-3xl text-lg-5xl block uppercase">
          <span class="animated-text-fg">{{ item.text }}</span>
        </span>
      </h1>
      <div class="flex space-x-4 justify-center mt-10">
        <Button
          size="lg"
          text="Wave 3.0"
          class="font-extrabold"
          href="#wave3" />
      </div>
    </div>

    <img
      class="justify-center hero-image"
      src="~assets/images/pretty-face-min.png"
      alt="pretty-face">
  </div>
</template>
<style>
.hero-image {
	height: 100vh;
	width: 55vw;
	min-width: 690px;
	margin-left: auto;
	object-fit: cover;
	object-position: 34% 0;
}
</style>
