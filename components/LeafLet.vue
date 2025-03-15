<template>
  <div class="leaflet">
    <LMap
      ref="map"
      :zoom="mapDetails.zoom"
      :center="mapDetails.center"
      :use-global-leaflet="false"
      :inertia-max-speed="5"
      :inertia-deceleration="1"
      :options="mapOptions"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <!-- 3本線を引く -->
      <LPolyline
        v-for="polyline in polylines"
        :key="polyline.key"
        :lat-lngs="polyline.latlngs"
        :color="polyline.color"
      />
      <LMarker v-for="line in lines" :lat-lng="line.center" name="OK" />
      <LMarker :lat-lng="mapDetails.center" class="marker">
        <LIcon :icon-url="iconUrl" />
      </LMarker>
    </LMap>
  </div>
</template>

<script setup lang="ts">
import { type Coordinate } from "~/data/histories";
const iconUrl = computed(
  () =>
    `https://abalol.com/wp-content/uploads/2021/10/cropped-Zl2R89_m_400x400-32x32.jpg`
);

const mapOptions = {
  dragging: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  touchZoom: false,
  zoomControl: false,
};

const props = defineProps({
  // 必須項目
  mapDetails: {
    type: Object as any,
    required: true,
  },
  lines: {
    type: Object as any,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const polylines = computed(() => {
  const results = [];
  for (let n = 1; n <= 3; n++) {
    const start = props.lines[n + props.index - 1];
    const end = props.lines[n + props.index];
    if (start && end) {
      results.push({
        latlngs: [start.center, end.center],
        color: end.color,
        key: n,
      });
    }
  }
  return results;
});
</script>

<style>
.leaflet {
  height: 100vh;
  width: 100vw;
}

.leaflet-marker-icon {
  background: steelblue;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 21px;
  margin-top: -32px;
  margin-left: -16px;
}
</style>
