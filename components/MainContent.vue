<template>
  <main class="mask-container" :class="{ isMobile: isMobile }">
    <span class="title">{{ histories[index].description }}</span>
    <span class="ym">{{ histories[index].ym }}</span>
  </main>
</template>

<script lang="ts" setup>
defineProps<{
  histories: any[];
  index: number;
}>();
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
});
</script>

<style scoped>
.title {
  font: 700 2rem "Helvetica Neue", sans-serif;
  position: absolute;
  z-index: 555;
  width: 92vw;
  text-align: center;
  padding: 0 1rem;
  font-size: 2rem;
  color: black;
}
.ym {
  font: 700 1rem "Helvetica Neue", sans-serif;
  position: absolute;
  z-index: 555;
  width: 92vw;
  text-align: center;
  padding: 3rem 0 0 0;
  font-size: 1rem;
  color: black;
}

main {
  z-index: 444;
  position: absolute;
  top: 0;
  left: 4%;
  /* PCの時は50% */
  width: 92%;
  height: 100vh;
  color: black;

  background-color: rgba(255, 255, 255, 0.1);
}

.mask-container::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 620px;
  height: 620px;
  transform: translate(-50%, -50%);
  background: transparent;
  box-shadow: 0 0 0 9999px rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  pointer-events: none;
}

.isMobile {
  width: 92vw;
}

.isMobile::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  background: transparent;
  box-shadow: 0 0 0 9999px rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  pointer-events: none;
}
</style>
