<template>
  <div class="cardgrid-root">
    <div class="header-row">
      <span class="badge">{{ badge }}</span>
      <h1>{{ title }}</h1>
    </div>
    <div class="main-body">
      <div class="col left-col">
        <slot name="left" />
      </div>
      <div class="col right-col">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  badge: string
  title: string
}

defineProps<Props>()
</script>

<!-- 全局：slot 可用的卡片/卡片头样式 -->
<style>
.cardgrid-root .card {
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.cardgrid-root .card-head {
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  padding: 0.4rem 1rem;
  letter-spacing: 0.03em;
}

.cardgrid-root .card-head.teal   { background: rgba(20,184,166,0.55); }
.cardgrid-root .card-head.blue   { background: rgba(59,130,246,0.55); }
.cardgrid-root .card-head.purple { background: rgba(139,92,246,0.55); }
.cardgrid-root .card-head.amber  { background: rgba(245,158,11,0.55); }

.cardgrid-root .card-inner {
  padding: 0.7rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  color: rgba(255,255,255,0.85);
  line-height: 1.65;
}

.cardgrid-root .card-inner p {
  margin: 0;
  font-size: 0.8rem;
}

/* 列表 */
.cardgrid-root .strategy-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.cardgrid-root .strategy-list li {
  font-size: 0.8rem;
  line-height: 1.5;
}
.cardgrid-root .strategy-list li::before {
  content: '▸';
  color: #f59e0b;
  margin-right: 0.4em;
}

/* 变量列表 */
.cardgrid-root .var-list {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin-bottom: 0.6rem;
}
.cardgrid-root .var-item {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.75);
}
.cardgrid-root .var-sym {
  font-family: 'JetBrains Mono','Fira Code',monospace;
  font-weight: 700;
  color: #fbbf24;
  font-size: 0.82rem;
}

/* 标签 */
.cardgrid-root .sec-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  margin: 0 0 0.3rem;
}

/* 公式框 */
.cardgrid-root .formula-box {
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(255,255,255,0.06);
}
.cardgrid-root .formula-line {
  font-family: 'JetBrains Mono','Fira Code',monospace;
  font-size: 0.8rem;
  color: #fff;
  padding: 0.12rem 0;
}

/* 算法步骤 */
.cardgrid-root .algo-steps {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-left: 2px solid rgba(139,92,246,0.55);
  padding-left: 0.7rem;
}
.cardgrid-root .algo-step {
  padding: 0.15rem 0;
}
.cardgrid-root .step-title {
  font-size: 0.74rem;
  color: rgba(255,255,255,0.8);
  margin: 0 0 0.08rem;
}
.cardgrid-root .step-formula {
  font-family: 'JetBrains Mono','Fira Code',monospace;
  font-size: 0.7rem;
  color: #c4b5fd;
  margin: 0;
}
</style>

<!-- 组件内部样式 -->
<style scoped>
.cardgrid-root {
  width: 100%;
  height: 100%;
  padding: 2rem 2.8rem;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif;
  background: radial-gradient(ellipse at 20% 15%, rgba(20,184,166,0.06) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.07) 0%, transparent 55%);
}

.header-row {
  text-align: center;
  margin-bottom: 1.2rem;
  animation: fadeInDown 0.6s ease-out;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.15em 0.8em;
  border-radius: 14px;
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

.header-row h1 {
  font-family: 'Merriweather','Noto Sans SC',Georgia,serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  letter-spacing: 0.04em;
}

.main-body {
  flex: 1;
  display: flex;
  gap: 1.5rem;
  min-height: 0;
}

.col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  min-height: 0;
}

.left-col  { animation: fadeInLeft 0.6s ease-out; }
.right-col { animation: fadeInRight 0.6s ease-out 0.1s both; }

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-22px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(22px); }
  to   { opacity: 1; transform: translateX(0); }
}
</style>
