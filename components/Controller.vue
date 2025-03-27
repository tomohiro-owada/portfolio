<template>
  <div class="controller" id="swipe-area" :class="{ isMobile: isMobile }">
    <button class="left" v-if="!isMobile" @click="$emit('changeHistory', -1)">
      Prev
    </button>
    <button class="right" v-if="!isMobile" @click="$emit('changeHistory', 1)">
      Next
    </button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["changeHistory"]);
const isMobile = ref(false);
const startX = ref(0);
const currentX = ref(0);

onMounted(() => {
  isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const target = document.getElementById("swipe-area");

  const handleTouchStart = (e: TouchEvent) => {
    startX.value = e.touches[0].screenX;
    currentX.value = startX.value;
  };

  const handleTouchMove = (e: TouchEvent) => {
    currentX.value = e.changedTouches[0].screenX;
    const diff = currentX.value - startX.value;

    if (Math.abs(diff) >= 30) {
      emit("changeHistory", diff > 0 ? -1 : 1);
      startX.value = currentX.value;
    }
  };

  const handleTouchEnd = () => {
    startX.value = 0;
    currentX.value = 0;
  };

  target?.addEventListener("touchstart", handleTouchStart);
  target?.addEventListener("touchmove", handleTouchMove);
  target?.addEventListener("touchend", handleTouchEnd);

  onUnmounted(() => {
    target?.removeEventListener("touchstart", handleTouchStart);
    target?.removeEventListener("touchmove", handleTouchMove);
    target?.removeEventListener("touchend", handleTouchEnd);
  });
});
</script>

<style scoped>
.controller {
  z-index: 888;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  display: flex;
  gap: 10px;
  color: white;
  height: 100svh;
}

.isMobile {
  height: 100svh !important;
}

button {
  border: none;
  outline: none;

  flex: 1;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: Gray;
  cursor: pointer;
  height: 100%;
}
.left {
  text-align: left;
  padding-left: 32px;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.75);
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
.right {
  text-align: right;
  padding-right: 32px;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.75);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
</style>
