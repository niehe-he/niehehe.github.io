<template>
  <div class="layout-wrapper">
    <div class="top-section">
      <slot name="top" />
    </div>
    <div class="bottom-section">
      <div class="left-section">
        <slot name="left" />
      </div>
      <div class="right-section">
        <div class="right-top">
          <slot name="rightTop" />
        </div>
        <div class="right-bottom">
          <img :src="imageSrc" :alt="imageAlt" class="section-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc?: string;
  imageAlt?: string;
}

withDefaults(defineProps<Props>(), {
  imageSrc: 'img/ans1.png',
  imageAlt: '算法演示'
});
</script>

<style scoped>
.layout-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4vh 6vw;
  box-sizing: border-box;
  gap: 2vh;
}

.top-section {
  flex: 0 0 auto;
  text-align: center;
  color: #000000;
}

.top-section h3 {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.top-section p {
  font-size: 1.3rem;
  margin: 0;
}

.bottom-section {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3vw;
  min-height: 0;
}

.left-section {
  color: #000000;
  overflow-y: auto;
  min-height: 0;
}

.left-section pre {
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0;
  overflow: auto;
  min-height: 0;
}

.right-section {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.right-top {
  flex: 0 0 auto;
  color: #000000;
  text-align: left;
}

.right-top h3 {
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1rem;
}

.right-top p {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.right-bottom {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
}

.section-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
