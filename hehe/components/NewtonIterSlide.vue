<template>
  <div class="newton-slide">
    <div class="header-row">
      <span class="badge">4.1.3</span>
      <h1>迭代法解方程</h1>
    </div>

    <div class="card">
      <div class="card-head teal">例二：牛顿迭代法求根</div>
      <div class="card-inner">
        <div class="formula-stack">
          <div class="formula-step">
            <span class="step-label">泰勒展开</span>
            <div class="formula-block" v-katex="f1" />
          </div>
          <div class="formula-step">
            <span class="step-label">令近似为零</span>
            <div class="formula-block" v-katex="f2" />
          </div>
          <div class="formula-step highlight">
            <span class="step-label">迭代公式</span>
            <div class="formula-block" v-katex="f3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const f1 = 'f(x) \\approx f(x_0) + f\'(x_0)(x - x_0)'
const f2 = 'f(x_0) + f\'(x_0)(x - x_0) \\approx 0'
const f3 = 'x = x_0 - \\frac{f(x_0)}{f\'(x_0)}'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;600;700&display=swap');

.newton-slide {
  width: 100%;
  height: 100%;
  padding: 2.2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 100%);
}

.header-row {
  text-align: center;
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
  font-family: 'Noto Serif SC', 'Merriweather', Georgia, serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  letter-spacing: 0.04em;
}

.card {
  flex: 1;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 16px rgba(0,0,0,0.1);
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.card-head {
  font-family: 'Noto Sans SC', 'PingFang SC', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  padding: 0.5rem 1.1rem;
  letter-spacing: 0.04em;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
}

.card-inner {
  flex: 1;
  padding: 1.2rem 1.5rem;
  background: rgba(255,255,255,0.95);
  display: flex;
  align-items: center;
}

.formula-stack {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.formula-step {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: #f8fafc;
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.formula-step.highlight {
  background: linear-gradient(135deg, #ecfdf5, #f0fdfa);
  border-color: #14b8a6;
  box-shadow: 0 0 0 3px rgba(20,184,166,0.1);
}

.step-label {
  flex-shrink: 0;
  font-family: 'Noto Sans SC', 'PingFang SC', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #334155;
  background: #e2e8f0;
  padding: 0.2em 0.8em;
  border-radius: 8px;
  letter-spacing: 0.03em;
}

.formula-step.highlight .step-label {
  background: #14b8a6;
  color: #fff;
}

.formula-block {
  flex: 1;
  display: flex;
  justify-content: center;
}

.formula-block :deep(.katex) {
  font-size: 1.15rem;
  color: #1a1a2e;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
