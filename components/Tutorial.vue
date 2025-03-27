<template>
  <div class="tutorial" v-if="isMobile">
    <div class="flick-wrapper" @click="nextStep(1)" @touchstart="nextStep(-1)">
      <NuxtImg class="flick" src="/img/flick.png" />
      Flick
    </div>
  </div>
  <div class="tutorial" v-if="!isMobile">
    <div class="left" v-if="step === 0" @click="nextStep(-1)">
      <NuxtImg src="/img/click.png" width="200" height="200" />
    </div>
    <div class="right" v-if="step === 1" @click="nextStep(1)">
      <NuxtImg src="/img/click.png" width="200" height="200" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isMobile = ref(false);
const step = ref(0);
const emit = defineEmits(["change-history", "finish-tutorial"]);
const nextStep = (n: number) => {
  step.value++;
  emit("change-history", n);
  if (step.value > 1) {
    localStorage.setItem("tutorial", "true");
    emit("finish-tutorial");
  }
};

onMounted(() => {
  isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
});
</script>

<style scoped>
/* 画面全体に表示する */
.tutorial {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-shadow: 1px 1px 1px white;
  color: black;
}

.right {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-shadow: 1px 1px 1px white;
  color: black;
}

.left img {
  /* アニメーションで拡大縮小を繰り返す */
  animation: scale 1s infinite;
}
.right img {
  /* アニメーションで拡大縮小を繰り返す */
  animation: scale 1s infinite;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.flick-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(173, 216, 230, 0.5);
  font-size: 2rem;
  text-shadow: 1px 1px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.flick {
  animation: flick 1s infinite;
}

@keyframes flick {
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
}
</style>
