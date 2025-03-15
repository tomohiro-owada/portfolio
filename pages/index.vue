<template>
  <Controller @change-history="changeHistory" />
  <ClientOnly>
    <LeafLet :map-details="mapDetails" :lines="lines" :index="index" />
  </ClientOnly>
  <!-- <Event :details="mapDetails" /> -->
  <HistoryList
    :histories="histories"
    :index="index"
    @change-history-by-index="changeHistoryByIndex"
  />
</template>

<script lang="ts" setup>
import histories, { type History } from "~/data/histories";

useSeoMeta({
  title: "Tomo Owada | Software Engineer & System Architect",
  description:
    "I'm Tomo, a software engineer specializing in designing and building scalable web systems. From architecture to development, I create solutions that power modern businesses.",
});

const index = ref(30);
const mapDetails = ref<History>(histories[index.value]);
const lines = histories.map((history) => {
  return {
    center: history.center,
    color: history.color,
  };
});
const changeHistory = (value: number) => {
  if (index.value + value < 0 || index.value + value >= histories.length) {
    return;
  } else if (index.value + value === histories.length - 1) {
    index.value = histories.length - 1;
  } else {
    index.value += value;
  }
  mapDetails.value = histories[index.value];
};

const changeHistoryByIndex = (i: number) => {
  index.value = i;
  mapDetails.value = histories[i];
};

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      changeHistory(-1);
    } else if (e.key === "ArrowRight") {
      changeHistory(1);
    }
  });
});
</script>

<style scoped></style>
