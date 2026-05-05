<template>
  <div class="code-panel" :class="{ 'has-image': $slots.image }">
    <div class="code-header">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span v-if="title" class="code-title">{{ title }}</span>
    </div>
    <div class="code-body">
      <pre><code>{{ code }}</code></pre>
      <div v-if="$slots.image" class="image-slot">
        <slot name="image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  code: string
  title?: string
}

defineProps<Props>()
</script>

<style scoped>
.code-panel {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.code-header {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0.35rem 1rem;
  background: #252525;
  flex-shrink: 0;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dot-red    { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green  { background: #27ca40; }

.code-title {
  margin-left: 0.6rem;
  color: #999;
  font-size: 0.7rem;
}

.code-body {
  flex: 1;
  display: flex;
  min-height: 0;
}

pre {
  flex: 1;
  margin: 0;
  padding: 0.5rem 1rem;
  overflow-x: auto;
  min-width: 0;
}

code {
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', Consolas, monospace;
  font-size: 0.78rem;
  line-height: 1.35;
  color: #d4d4d4;
  white-space: pre;
  tab-size: 2;
}

.image-slot {
  flex-shrink: 0;
  width: 26%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #252525;
  padding: 0.5rem;
}

.image-slot :deep(img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
}
</style>
