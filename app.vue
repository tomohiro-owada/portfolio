<template>
  <NuxtPage />
</template>
<script lang="ts" setup>
const preventDefault = (e: { preventDefault: () => void }) => {
  e.preventDefault();
};
const disableScroll = () => {
  document.body.style.overflow = "hidden";
  document.addEventListener("touchmove", preventDefault, { passive: false });
};
disableScroll();

useHead({
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  ],
});
</script>
<style lang="css">
html,
body {
  height: 100svh;
  background-color: black;
  color: #ddd;
  overflow-y: hidden;
}
</style>
