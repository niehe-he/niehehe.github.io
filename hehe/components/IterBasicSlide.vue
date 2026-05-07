<template>
  <div class="iter-root">
    <!-- 背景 -->
    <div class="bg-layer">
      <div class="bg-base"></div>
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="dot-grid"></div>
    </div>

    <!-- 上浮气泡 -->
    <div class="bubbles">
      <span v-for="n in 16" :key="n" class="bubble" :style="bubbleStyle(n)"></span>
    </div>

    <!-- 主内容 -->
    <div class="content">
      <!-- 标题行 -->
      <div class="title-row">
        <span class="badge">4.1.1</span>
        <h1 class="main-title">迭代算法基础</h1>
        <div class="title-accent"></div>
      </div>

      <!-- 三栏网格 -->
      <div class="main-grid">
        <!-- 栏1：基本思想 -->
        <div class="card idea-card">
          <div class="card-glow"></div>
          <div class="card-inner">
            <div class="card-icon-wrap">
              <span class="card-icon">&#9678;</span>
            </div>
            <h3 class="card-title">基本思想</h3>
            <p class="idea-text">
              用<strong>旧值</strong>算<strong>新值</strong>
            </p>
            <p class="idea-sub">一般用于数值计算</p>
          </div>
        </div>

        <!-- 栏2：常见策略 -->
        <div class="card strategy-card">
          <div class="card-glow"></div>
          <div class="card-inner">
            <div class="card-icon-wrap">
              <span class="card-icon">&#8711;</span>
            </div>
            <h3 class="card-title">常见策略</h3>
            <div class="formula-list">
              <div class="formula-item">
                <span class="fm-label">累加</span>
                <span class="fm-katex" v-katex="'S = S + a_i'"></span>
              </div>
              <div class="formula-item">
                <span class="fm-label">累乘</span>
                <span class="fm-katex" v-katex="'P = P \\times a_i'"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- 栏3：基本步骤 -->
        <div class="card steps-card">
          <div class="card-glow"></div>
          <div class="card-inner">
            <div class="card-icon-wrap">
              <span class="card-icon">&#9776;</span>
            </div>
            <h3 class="card-title">基本步骤</h3>
            <div class="step-list">
              <div class="step-item" v-for="(s, i) in steps" :key="i"
                   :style="{ animationDelay: `${0.6 + i * 0.2}s` }">
                <span class="step-dot">{{ i + 1 }}</span>
                <div class="step-body">
                  <span class="step-title">{{ s.title }}</span>
                  <span v-if="s.desc" class="step-desc">{{ s.desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const steps = [
  { title: '确定迭代模型', desc: '根据问题特征建立数学模型' },
  { title: '建立迭代关系式', desc: '如 xₙ₊₁ = f(xₙ)' },
  { title: '迭代过程控制', desc: '固定次数 / 达到精度 / 满足逻辑条件' },
]

function bubbleStyle(n: number) {
  const left = ((n * 83 + 41) % 90)
  const delay = (n * 0.55) % 5
  const size = 6 + (n % 5) * 3
  const dur = 6 + (n % 5)
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
    width: `${size}px`,
    height: `${size}px`,
  }
}
</script>

<style scoped>
.iter-root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif;
}

/* ===== 背景 ===== */
.bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-base {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #021210 0%, #051a18 35%, #01100f 70%, #021210 100%);
}

/* 柔和流动光斑 */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
}

.blob-1 {
  width: 40vw; height: 40vw;
  top: -10%; right: -5%;
  background: radial-gradient(circle, #14b8a6 0%, #0d948830 50%, transparent 70%);
  animation: blobDrift1 12s ease-in-out infinite;
}
.blob-2 {
  width: 35vw; height: 35vw;
  bottom: -15%; left: -5%;
  background: radial-gradient(circle, #06b6d4 0%, #0891b230 50%, transparent 70%);
  animation: blobDrift2 14s ease-in-out infinite;
}
.blob-3 {
  width: 25vw; height: 25vw;
  top: 30%; left: 40%;
  background: radial-gradient(circle, #10b981 0%, #05966930 50%, transparent 70%);
  animation: blobDrift3 10s ease-in-out infinite;
}

@keyframes blobDrift1 {
  0%,100%{transform:translate(0,0) scale(1)}
  33%{transform:translate(-5vw,5vh) scale(1.15)}
  66%{transform:translate(3vw,-3vh) scale(0.9)}
}
@keyframes blobDrift2 {
  0%,100%{transform:translate(0,0) scale(1)}
  50%{transform:translate(6vw,-6vh) scale(1.2)}
}
@keyframes blobDrift3 {
  0%,100%{transform:translate(0,0) scale(1)}
  33%{transform:translate(-3vw,-4vh) scale(1.1)}
  66%{transform:translate(4vw,3vh) scale(0.85)}
}

.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(20,184,166,0.08) 1px, transparent 1px);
  background-size: 2.5vw 2.5vw;
}

/* ===== 气泡 ===== */
.bubbles {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.bubble {
  position: absolute;
  bottom: -16px;
  border-radius: 50%;
  border: 1px solid rgba(20,184,166,0.2);
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 60%);
  animation: bubbleRise linear infinite;
}

.bubble:nth-child(3n)   { border-color: rgba(20,184,166,0.25); }
.bubble:nth-child(3n+1) { border-color: rgba(6,182,212,0.2); }
.bubble:nth-child(3n+2) { border-color: rgba(16,185,129,0.2); }

@keyframes bubbleRise {
  0%   { transform: translateY(0) scale(0.6); opacity: 0; }
  8%   { opacity: 0.7; }
  85%  { opacity: 0.3; }
  100% { transform: translateY(-108vh) scale(1.2); opacity: 0; }
}

/* ===== 主内容 ===== */
.content {
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vh 3vw;
  box-sizing: border-box;
}

/* ===== 标题行 ===== */
.title-row {
  text-align: center;
  flex-shrink: 0;
  padding-bottom: 0.5vh;
  animation: cascadeIn 0.5s ease-out both;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: #fff;
  font-size: 0.55rem;
  font-weight: 700;
  padding: 0.05em 0.6em;
  border-radius: 10px;
  letter-spacing: 0.04em;
  margin-bottom: 0.2vh;
  box-shadow: 0 0 10px rgba(20,184,166,0.3);
}

.main-title {
  font-size: 1.6rem;
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: 0.06em;
  text-shadow: 0 0 30px rgba(20,184,166,0.3);
}

.title-accent {
  width: 30%;
  height: 2px;
  margin: 0.3vh auto 0;
  background: linear-gradient(90deg, transparent, #14b8a6, #06b6d4, transparent);
  border-radius: 1px;
}

@keyframes cascadeIn {
  0%   { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

/* ===== 三栏网格 ===== */
.main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 1.2vw;
  flex: 1;
  min-height: 0;
}

/* ===== 卡片 ===== */
.card {
  position: relative;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
}

.idea-card     { animation: cascadeIn 0.5s ease-out 0.15s both; }
.strategy-card { animation: cascadeIn 0.5s ease-out 0.3s both; }
.steps-card    { animation: cascadeIn 0.5s ease-out 0.45s both; }

.card-glow {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  pointer-events: none;
  border: 1px solid transparent;
  background: linear-gradient(160deg, rgba(20,184,166,0.2), rgba(6,182,212,0.2), rgba(16,185,129,0.15)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.6;
}

.card-inner {
  position: relative;
  padding: 1.2vh 1.2vw;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-icon-wrap {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: rgba(20,184,166,0.1);
  border: 1px solid rgba(20,184,166,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5vh;
}

.card-icon {
  font-size: 0.9rem;
  color: #14b8a6;
}

.card-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
  margin: 0 0 1vh 0;
  letter-spacing: 0.04em;
}

/* ===== 基本思想卡片 ===== */
.idea-text {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  margin: 0;
  text-align: center;
  line-height: 1.5;
}

.idea-text strong {
  color: #2dd4bf;
  font-weight: 700;
}

.idea-sub {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.4);
  margin: 0.6vh 0 0 0;
  text-align: center;
}

/* ===== 策略卡片 ===== */
.formula-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8vh;
}

.formula-item {
  display: flex;
  align-items: center;
  gap: 0.5vw;
  padding: 0.6vh 0.8vw;
  border-radius: 8px;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.05);
}

.fm-label {
  flex-shrink: 0;
  font-size: 0.6rem;
  font-weight: 700;
  color: #2dd4bf;
  background: rgba(20,184,166,0.15);
  padding: 0.1em 0.5em;
  border-radius: 4px;
}

.fm-katex {
  flex: 1;
  text-align: center;
}

.fm-katex :deep(.katex) {
  font-size: 0.75rem;
  color: #ccfbf1;
}

/* ===== 步骤卡片 ===== */
.step-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6vw;
  padding: 0.6vh 0.6vw;
  border-radius: 10px;
  background: rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.04);
  animation: stepAppear 0.4s ease-out both;
  transition: all 0.3s ease;
}

.step-item:hover {
  background: rgba(20,184,166,0.08);
  border-color: rgba(20,184,166,0.2);
}

@keyframes stepAppear {
  0%   { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.step-dot {
  flex-shrink: 0;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.58rem;
  font-weight: 800;
  color: #fff;
  margin-top: 1px;
}

.step-body {
  display: flex;
  flex-direction: column;
  gap: 0.1vh;
}

.step-title {
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
}

.step-desc {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.35;
}
</style>
