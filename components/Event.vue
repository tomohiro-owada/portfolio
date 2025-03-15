<template>
  <div class="event">
    <transition name="fade">
      <NuxtImg class="image" :src="details.image" width="200" height="200" />
    </transition>

    <span class="description">{{ details.description }}</span>
  </div>
</template>

<script lang="ts" setup>
import { type History } from "~/data/histories";

defineProps({
  details: {
    type: Object as PropType<History>,
    required: true,
  },
});
</script>

<style scoped>
.image {
  position: fixed;
  top: 10%;
  border-radius: 10%;
}

.description {
  position: fixed;
  bottom: 30%;
  /* 陰をおとす */
  text-shadow: 1px 1px 1px black;
}
.event {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(60, 60, 60, 0.5);
  color: white;
  padding: 0.5rem;
  z-index: 500;
  /* 中心に */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
