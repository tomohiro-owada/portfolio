<template>
  <div class="histories">
    <div class="relative flex justify-center items-center w-full h-[120px]">
      <div
        v-for="item in visibleItems"
        :key="item.index"
        class="history absolute"
        :style="getStyleByIndex(item.index)"
        @click="changeHistoryByIndex(Number(item.index))"
      >
        <div>{{ displayYear(item) }}</div>
        <div>{{ displayMonth(item) }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type History } from "~/data/histories";

const emit = defineEmits(["change-history-by-index"]);
const props = defineProps<{
  histories: History[];
  index: number;
}>();

const changeHistoryByIndex = (i: number) => {
  emit("change-history-by-index", i);
};

const maxVisible = 7;
const half = Math.floor(maxVisible / 2);

// 月と年を表示する
const displayMonth = (item: History) => {
  const num = Number(item.ym.split("-")[1]);
  return month[num - 1] || "";
};

const displayYear = (item: History) => {
  return item.ym.split("-")[0] || "";
};

// 表示する範囲を決める
const visibleItems = computed(() => {
  const total = props.histories.length;
  if (total === 0) return [];

  let start = props.index - half;
  let end = props.index + half + 1;

  if (start < 0) {
    start = 0;
    end = Math.min(maxVisible, total);
  }

  if (end > total) {
    end = total;
    start = Math.max(0, total - maxVisible);
  }

  return props.histories.slice(start, end);
});

const getStyleByIndex = (itemIndex = 0) => {
  const center = props.index;
  const offset = itemIndex - center;
  const distance = Math.abs(offset);

  const radius = 180;
  const angleStep = Math.PI / (maxVisible - 1);
  const angle = (offset + half) * angleStep;

  const translateX = Math.cos(angle - Math.PI) * radius;
  const translateY = Math.sin(angle - Math.PI) * radius * 0.5;

  const baseSize = 6;
  const sizeReduction = distance * Math.sqrt(4);
  const finalSize = Math.max(baseSize - sizeReduction, 3);

  const opacity = 1 - distance * 0.25;
  const zIndex = 100 - distance;

  return {
    transform: `translateX(${translateX}px) translateY(${translateY}px)`,
    opacity,
    zIndex,
    width: `${finalSize}rem`,
    height: `${finalSize}rem`,
    fontSize: `${finalSize * 0.3}rem`,
    lineHeight: `${finalSize * 0.25}rem`,
    backgroundColor: props.histories[itemIndex].color,
    border: `2px solid white`,
    dropShadow: `0 0 10px rgba(0, 0, 0, 0.5)`,
  };
};

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
</script>

<style scoped>
.history {
  border-radius: 50%;
  background-color: rgba(60, 60, 60, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  transition: transform 0.5s ease, opacity 0.5s ease, width 0.5s ease,
    height 0.5s ease, font-size 0.5s ease;
  cursor: pointer;
}

.history:hover {
  transform: scale(2);
}

.histories {
  z-index: 9999;
  position: fixed;
  bottom: -48px;
  left: 0;
  width: 100%;
  height: 10%;
  color: white;
  padding: 0.5rem;
  z-index: 500;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
