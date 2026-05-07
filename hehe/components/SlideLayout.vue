<template>
  <div class="slide-root">
    <header v-if="title || $slots.header" class="slide-header">
      <slot name="header">
        <h1 v-if="title" class="slide-title">{{ title }}</h1>
        <p v-if="subtitle" class="slide-subtitle">{{ subtitle }}</p>
      </slot>
    </header>
    <div class="slide-body" :class="{ 'has-side': image || $slots.sidebar }">
      <div class="slide-main">
        <slot />
      </div>
      <aside v-if="image || $slots.sidebar" class="slide-sidebar">
        <slot name="sidebar">
          <img :src="image" :alt="imageAlt" class="side-image" />
        </slot>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  image?: string
  imageAlt?: string
  background?: string
}

withDefaults(defineProps<Props>(), {
  imageAlt: '示意图'
})
</script>

<style scoped>
.slide-root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3.5vh 5vw;
  box-sizing: border-box;
  gap: 2.5vh;
  background: #f8fafc;
}

.slide-header {
  flex-shrink: 0;
}

.slide-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3b82f6;
  display: inline-block;
}

.slide-subtitle {
  font-size: 1.3rem;
  color: #64748b;
  margin: 0.6rem 0 0 0;
  font-weight: 500;
}

.slide-body {
  flex: 1;
  display: flex;
  gap: 3vw;
  min-height: 0;
}

.slide-body.has-side {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.slide-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow-y: auto;
}

.slide-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  padding: 2vh;
  overflow: hidden;
}

.side-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
