<template>
  <div class="glass-root">
    <div class="top-row">
      <div class="glass-header">
        <h1>{{ title }}</h1>
        <h2 v-if="subtitle">{{ subtitle }}</h2>
      </div>
      <Card v-if="points.length" variant="blue" class="key-card">
        <ul>
          <li v-for="p in points" :key="p.label">
            <b>{{ p.label }}</b>：{{ p.text }}
          </li>
        </ul>
      </Card>
    </div>
    <div class="bottom-row">
      <CodePanel :code="code" :title="codeTitle">
        <template v-if="imageSrc" #image>
          <img :src="imageSrc" :alt="imageAlt" />
        </template>
      </CodePanel>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Point {
  label: string
  text: string
}

interface Props {
  title: string
  subtitle?: string
  points?: Point[]
  code: string
  codeTitle?: string
  imageSrc?: string
  imageAlt?: string
}

withDefaults(defineProps<Props>(), {
  points: () => [],
  codeTitle: 'C 实现',
  imageAlt: '示意图'
})
</script>

<style scoped>
.glass-root {
  width: 100%;
  height: 100%;
  padding: 3.5vh 4vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  color: #fff;
}

.top-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2vw;
}

.glass-header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.glass-header h2 {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0.2rem 0 0 0;
  color: rgba(255,255,255,0.85);
  text-shadow: 0 1px 4px rgba(0,0,0,0.4);
}

.key-card {
  flex-shrink: 0;
  padding: 0.5rem 1rem !important;
  border-radius: 10px !important;
  background: rgba(255,255,255,0.9) !important;
}

.key-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.key-card li {
  font-size: 0.78rem;
  color: #334155;
  line-height: 1.5;
  padding: 0.06rem 0;
}

.key-card li b {
  color: #1e293b;
}

.bottom-row {
  flex: 1;
  min-height: 0;
}
</style>
