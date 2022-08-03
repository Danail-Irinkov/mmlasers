<script lang="ts" setup>
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyCkmpWvNx2dXRpsbL3L8lr0FERU8DttroQ",
// 	authDomain: "mmlasers-7842c.firebaseapp.com",
// 	projectId: "mmlasers-7842c",
// 	storageBucket: "mmlasers-7842c.appspot.com",
// 	messagingSenderId: "251359442085",
// 	appId: "1:251359442085:web:9ab4edf42f08ad2aea094c",
// 	measurementId: "G-1CPVXE0VDN"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// composable
import Setting from '~/pages/setting.vue';

const { t } = useLang()

// meta
definePageMeta({
	layout: 'page',
})

</script>

<template>
  <PageWrapper class="flex flex-col justify-center items-center" style="height: fit-content; width: 100%">
    <PageHero />
    <img src="~assets/images/underconstruction.jpg">
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@keyframes anim-fg {
  0% {
    opacity: 1;
  }
  16% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  83% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  text-align: center;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: anim-fg 8s infinite;
  animation-delay: var(--delay);
}

html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
</style>
