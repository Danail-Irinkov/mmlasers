<script lang="ts" setup>

</script>

<template>
  <div id="contacts" class="height-fit py-8" style="width: 100%;">
    <div class="flex flex-col z-10 pl-6 sm:pl-10 md:pl-20">
      <h1 class="text-left text-2xl">
        {{ $t('contacts.title') }}
      </h1>
      <h2 class="flex space-x-4 justify-start reading-width">
        {{ $t('contacts.description') }}:
      </h2>
      <h2 class="flex space-x-4 justify-start font-black reading-width mt-4">
        {{ $t('contacts.agent') }}
      </h2>
      <h2 class="flex space-x-4 justify-start reading-width">
        Tel:
        <a class="ml-4 link" :href="'tel:'+$t('contacts.tel')">{{ $t('contacts.tel') }}</a>
      </h2>
      <h2 class="flex space-x-4 justify-start reading-width">
        Email:
        <a class="ml-4 link" :href="'mailto:'+$t('contacts.email')+'@mmlasers.com'">{{ $t('contacts.email') }}@mmlasers.com</a>
      </h2>
    </div>
  </div>
</template>
