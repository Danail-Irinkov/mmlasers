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
  <div class="height-fit bg-skin-50 img-overlay-wrap" style="width: 100%;height: 75vh; overflow: hidden">
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
    <div class="relative">
      <img
        class="justify-center hero-image"
        src="~assets/images/pretty-face-min.png"
        alt="pretty-face">
      <div class="face-shape-wrapper">
        <div class="face-shape">
          <img
            class="hex"
            src="~assets/svg/hexagonal_pattern2.svg">
          <div class="hex-border" />
        </div>
      </div>
    </div>
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
@media all and (max-width: 685px){
	.face-shape-wrapper {
		left: 0;
	}
}
@media all and (min-width: 686px){
	.face-shape-wrapper {
		right: 0;
	}
}
.face-shape-wrapper {
	position: absolute;
	top: 0;
	height: 100vh;
	width: 55vw;
	min-width: 690px;
	margin-left: auto;
}

.face-shape {
	position: absolute;
	left: 165px;
	top: 0;
	display: block;
	width: 60%;
	height: 100%;
	background-color: transparent;
	border-radius: 65% 77% 39% 44% / 98% 68% 65% 123%;
	overflow: hidden;
	background-blend-mode: lighten;
}
.hex {
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 250ms ease-in-out;
	opacity: 0.7;
	width: 156vw;
	min-width: 1100px;
	max-width: 300vh;
	height: auto;
	min-height: 80vh;
	max-height: 160vh;
	z-index: 4;
}
.hex-border {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	/*box-shadow: 0 0 23px 26px #f3e5d86b inset;*/
}

</style>
