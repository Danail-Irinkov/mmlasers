<script lang="ts" setup>

</script>

<template>
  <div id="about_us" class="height-fit py-8" style="width: 100%;">
    <div class="flex flex-col z-10 pl-6 sm:pl-10 md:pl-20">
      <h1 class="text-left text-2xl">
        {{ $t('about.title') }}
      </h1>
      <h2 class="flex space-x-4 justify-start mt-10 reading-width">
        {{ $t('about.text1') }}
      </h2>
      <h2 class="flex space-x-4 justify-start mt-10 reading-width">
        {{ $t('about.text2') }}
      </h2>
      <h2 class="flex space-x-4 justify-start mt-10 reading-width">
        {{ $t('about.text3') }}
      </h2>
    </div>
  </div>
</template>
