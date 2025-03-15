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

// PC表示時のみボタンを表示する
const isMobile = ref(false);
const startX = ref(0); // 基準となるX位置
const currentX = ref(0); // 現在のX位置

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
      // 進んだ方向を判定して emit
      emit("changeHistory", diff > 0 ? -1 : 1);

      // 基準点を現在位置にリセットして、再度距離を測る
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
  z-index: 1000;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  display: flex;
  gap: 10px;
  background-color: rgba(60, 60, 60, 0.1);
  color: white;

  height: 82%;
}

.isMobile {
  height: 100svh !important;
}

/* buttonを左右に配置する */
button {
  flex: 1;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  /* 文字を透過する */
  color: rgba(255, 255, 255, 1);
}
.left {
  text-align: left;
  padding-left: 10px;
}
.right {
  text-align: right;
  padding-right: 10px;
}
button:hover {
  background-color: rgba(100, 100, 100, 0.1);
}
button:active {
  background-color: rgba(100, 100, 100, 0.2);
}
</style>
