<template>
  <div class="newton-root">
    <!-- 背景 -->
    <div class="bg-layer">
      <div class="bg-base"></div>
      <div class="converge-ring cr-1"></div>
      <div class="converge-ring cr-2"></div>
      <div class="converge-ring cr-3"></div>
      <div class="radial-line" v-for="r in 6" :key="r"
           :style="{ transform: `rotate(${r * 60}deg)` }"></div>
    </div>

    <!-- 主内容 -->
    <div class="content">
      <!-- 标题 -->
      <div class="title-section">
        <span class="badge">4.1.3</span>
        <h1 class="main-title">
          <span class="title-main">迭代法解方程</span>
          <span class="title-divider">·</span>
          <span class="title-sub">牛顿迭代法</span>
        </h1>
        <div class="title-bar"></div>
      </div>

      <!-- 两栏布局 -->
      <div class="main-grid">
        <!-- 左栏：概念 + 几何意义 + 步骤 -->
        <div class="left-col">
          <!-- 问题描述 -->
          <div class="card concept-card">
            <div class="card-glow"></div>
            <div class="card-inner">
              <div class="card-head">
                <span class="head-dot"></span>
                基本思想
              </div>
              <p class="concept-text">
                求解非线性方程 <span class="hl">f(x) = 0</span> 的近似根
              </p>
            </div>
          </div>

          <!-- 几何意义 -->
          <div class="card geo-card">
            <div class="card-glow"></div>
            <div class="card-inner">
              <div class="card-head">
                <span class="head-dot"></span>
                几何意义
              </div>
              <p class="geo-text">
                过点 <span class="hl">(x_n, f(x_n))</span> 作切线，切线与 <span class="hl">x</span> 轴的交点即为下一次迭代值 <span class="hl">x_n+1</span>
              </p>
              <div class="geo-visual">
                <span class="geo-step">xₙ</span>
                <span class="geo-arrow">&rarr;</span>
                <span class="geo-step">切线</span>
                <span class="geo-arrow">&rarr;</span>
                <span class="geo-step">xₙ₊₁</span>
              </div>
            </div>
          </div>

          <!-- 算法步骤 -->
          <div class="card steps-card">
            <div class="card-glow"></div>
            <div class="card-inner">
              <div class="card-head">
                <span class="head-dot"></span>
                算法步骤
              </div>
              <div class="algo-steps">
                <div class="algo-step" v-for="(s, i) in algoSteps" :key="i"
                     :style="{ animationDelay: `${0.5 + i * 0.2}s` }">
                  <span class="as-num">{{ i + 1 }}</span>
                  <span class="as-text">{{ s }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右栏：公式推导 -->
        <div class="right-col">
          <div class="card formula-card">
            <div class="card-glow"></div>
            <div class="card-inner">
              <div class="card-head">
                <span class="head-dot final-dot"></span>
                公式推导
              </div>

              <div class="formula-chain">
                <div class="fm-step" style="--i: 1">
                  <div class="fm-item">
                    <span class="fm-label">泰勒展开</span>
                    <div class="fm-katex" v-katex="f1"></div>
                  </div>
                  <span class="fm-arrow">&#9660;</span>
                </div>

                <div class="fm-step" style="--i: 2">
                  <div class="fm-item highlighted">
                    <span class="fm-label">令 f(x0)+▽f(x0)(x-x0) ≈ 0</span>
                    <div class="fm-katex" v-katex="f2"></div>
                  </div>
                  <span class="fm-arrow">&#9660;</span>
                </div>

                <div class="fm-step" style="--i: 3">
                  <div class="fm-item final">
                    <span class="fm-label">迭代公式x=x0 --f(x0)/ ▽f(x0)</span>
                    <div class="fm-katex" v-katex="f3"></div>
                  </div>
                </div>
              </div>

              <div class="formula-note">
                <div class="note-row">
                  <span class="note-bullet"></span>
                  收敛条件：|x_{n+1} - x_n| < 设定精度
                </div>
                <div class="note-row">
                  <span class="note-bullet"></span>
                  初值选取需在根附近，否则可能发散
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
const algoSteps = [
  '选取初始近似值 x_0，设定精度 e',
  '计算 x_{n+1} = x_n - rac{f(x_n)}{f(x_n)}',
  '若 |x_{n+1} - x_n| < e，输出 x_{n+1}作为近似根',
  '否则令 n = n+1，返回步骤 2 继续迭代',
]

const f1 = String.raw`f(x) \approx f(x_0) + f'(x_0)(x - x_0)`
const f2 = String.raw`f(x_0) + f'(x_0)(x - x_0) \approx 0`
const f3 = String.raw`x = x_0 - \frac{f(x_0)}{f'(x_0)}`
</script>

<style scoped>
.newton-root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif;
}

/* ===== 背景 ===== */
.bg-layer { position: absolute; inset: 0; z-index: 0; }

.bg-base {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 50%, #1a0810 0%, #0a0408 50%, #050208 100%);
}

.converge-ring {
  position: absolute; top: 50%; left: 50%; border-radius: 50%;
  border: 1px solid rgba(244,63,94,0.22); pointer-events: none;
  animation: converge 6s ease-out infinite;
}
.cr-1 { animation-delay: 0s; }
.cr-2 { animation-delay: -2s; border-color: rgba(251,113,133,0.18); }
.cr-3 { animation-delay: -4s; border-color: rgba(225,29,72,0.13); }

@keyframes converge {
  0%   { width: 90vw; height: 90vw; margin: -45vw 0 0 -45vw; opacity: 0.6; }
  80%  { opacity: 0.15; }
  100% { width: 8vw; height: 8vw; margin: -4vw 0 0 -4vw; opacity: 0; }
}

.radial-line {
  position: absolute; top: 50%; left: 50%;
  width: 1px; height: 100vh; margin-top: -50vh;
  background: linear-gradient(180deg,
    transparent 10%, rgba(244,63,94,0.05) 30%, rgba(244,63,94,0.1) 50%,
    rgba(244,63,94,0.05) 70%, transparent 90%);
  pointer-events: none;
  animation: radialFade 4s ease-in-out infinite;
}
.radial-line:nth-child(odd)  { animation-delay: 0s; }
.radial-line:nth-child(even) { animation-delay: -2s; }

@keyframes radialFade {
  0%,100% { opacity: 0.3; }
  50%     { opacity: 0.7; }
}

/* ===== 主内容 ===== */
.content {
  position: relative; z-index: 2;
  height: 100%; width: 100%;
  display: flex; flex-direction: column;
  padding: 0.8vh 2.5vw; box-sizing: border-box;
}

/* ===== 标题 ===== */
.title-section {
  text-align: center; flex-shrink: 0;
  animation: fadeDown 0.5s ease-out both;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #f43f5e, #e11d48);
  color: #fff; font-size: 0.5rem; font-weight: 700;
  padding: 0.05em 0.6em; border-radius: 10px;
  letter-spacing: 0.06em; margin-bottom: 0.2vh;
  box-shadow: 0 0 10px rgba(244,63,94,0.3);
}

.main-title {
  display: flex; align-items: center; justify-content: center;
  gap: 0.6vw; margin: 0;
}

.title-main {
  font-size: 1.5rem; font-weight: 900; letter-spacing: 0.05em;
  background: linear-gradient(135deg, #fff 0%, #fecdd3 50%, #f43f5e 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGradient 4s ease-in-out infinite;
}

.title-divider {
  font-size: 1rem; color: rgba(244,63,94,0.4); font-weight: 300;
}

.title-sub {
  font-size: 1rem; font-weight: 700;
  color: rgba(255,255,255,0.7);
  text-shadow: 0 0 12px rgba(244,63,94,0.3);
}

.title-bar {
  width: 40%; height: 2px; margin: 0.3vh auto 0;
  background: linear-gradient(90deg, transparent, #f43f5e, #fb7185, transparent);
  border-radius: 1px;
}

@keyframes titleGradient {
  0%,100% { background-position: 0% 50%; }
  50%     { background-position: 100% 50%; }
}

/* ===== 主网格 ===== */
.main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1vw;
  flex: 1;
  min-height: 0;
  padding-top: 0.4vh;
}

.left-col {
  display: flex; flex-direction: column; gap: 0.5vh;
}

.right-col {
  min-height: 0;
}

/* ===== 卡片 ===== */
.card {
  position: relative; border-radius: 12px;
  background: rgba(0,0,0,0.3); backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}

.card-glow {
  position: absolute; inset: 0; border-radius: 12px; pointer-events: none;
  border: 1px solid transparent;
  background: linear-gradient(160deg, rgba(244,63,94,0.2), rgba(251,113,133,0.15), rgba(225,29,72,0.1)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  opacity: 0.6;
}

.card-inner {
  position: relative; padding: 0.5vh 1vw;
  height: 100%; box-sizing: border-box;
  display: flex; flex-direction: column;
}

.card-head {
  display: flex; align-items: center; gap: 0.4vw;
  font-size: 0.65rem; font-weight: 700; color: rgba(255,255,255,0.7);
  letter-spacing: 0.04em; margin-bottom: 0.4vh; flex-shrink: 0;
}

.head-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: #f43f5e;
  box-shadow: 0 0 8px #f43f5e80;
}

/* ===== 概念卡片 ===== */
.concept-card {
  animation: fadeDown 0.5s ease-out 0.15s both;
}

.concept-text {
  margin: 0; font-size: 0.7rem; color: rgba(255,255,255,0.7); text-align: center;
}

.hl {
  color: #fda4af; font-weight: 600;
}

.hl :deep(.katex) {
  font-size: 0.72rem; color: #fda4af;
}

/* ===== 几何卡片 ===== */
.geo-card {
  animation: fadeDown 0.5s ease-out 0.3s both;
}

.geo-text {
  margin: 0 0 0.4vh 0; font-size: 0.65rem; color: rgba(255,255,255,0.6);
  text-align: center; line-height: 1.5;
}

.geo-visual {
  display: flex; align-items: center; justify-content: center; gap: 0.5vw;
  padding: 0.4vh 0.8vw; border-radius: 8px;
  background: rgba(244,63,94,0.06); border: 1px solid rgba(244,63,94,0.1);
}

.geo-step {
  font-size: 0.6rem; font-weight: 700; color: #fda4af;
  font-family: 'JetBrains Mono', monospace;
}

.geo-arrow {
  font-size: 0.65rem; color: rgba(244,63,94,0.4);
}

/* ===== 算法步骤卡片 ===== */
.steps-card {
  flex: 1; min-height: 0;
  animation: fadeDown 0.5s ease-out 0.45s both;
}

.steps-card .card-inner {
  height: 100%;
}

.algo-steps {
  display: flex; flex-direction: column; gap: 0.35vh;
}

.algo-step {
  display: flex; align-items: flex-start; gap: 0.5vw;
  padding: 0.3vh 0.5vw; border-radius: 8px;
  background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.03);
  animation: stepSlide 0.4s ease-out both;
}

@keyframes stepSlide {
  0%   { transform: translateX(-15px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.as-num {
  flex-shrink: 0;
  width: 1.1rem; height: 1.1rem; border-radius: 50%;
  background: linear-gradient(135deg, #f43f5e, #e11d48);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.5rem; font-weight: 800; color: #fff;
}

.as-text {
  font-size: 0.58rem; color: rgba(255,255,255,0.65); line-height: 1.4;
}

.as-text :deep(.katex) {
  font-size: 0.58rem; color: #fda4af;
}

/* ===== 公式卡片 ===== */
.formula-card {
  height: 100%;
  animation: fadeDown 0.5s ease-out 0.3s both;
}

.formula-card .card-inner {
  height: 100%;
}

.formula-chain {
  flex: 1;
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 0;
}

.fm-step {
  display: flex; flex-direction: column; align-items: center;
  animation: formulaReveal 0.5s ease-out calc(var(--i) * 0.25s) both;
}

@keyframes formulaReveal {
  0%   { transform: translateY(15px) scale(0.93); opacity: 0; filter: blur(3px); }
  100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
}

.fm-item {
  display: flex; align-items: center; gap: 0.8vw;
  padding: 0.5vh 1.2vw; border-radius: 10px;
  background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05);
}

.fm-item.highlighted {
  border-color: rgba(244,63,94,0.2); background: rgba(244,63,94,0.04);
}

.fm-item.final {
  border-color: rgba(244,63,94,0.35); background: rgba(244,63,94,0.08);
  box-shadow: 0 0 20px rgba(244,63,94,0.15), inset 0 0 16px rgba(244,63,94,0.02);
  animation: finalPulse 2s ease-in-out 1s infinite;
}

@keyframes finalPulse {
  0%,100% { box-shadow: 0 0 20px rgba(244,63,94,0.15), inset 0 0 16px rgba(244,63,94,0.02); }
  50%     { box-shadow: 0 0 32px rgba(244,63,94,0.28), inset 0 0 24px rgba(244,63,94,0.05); }
}

.fm-label {
  flex-shrink: 0; font-size: 0.55rem; font-weight: 700;
  color: #fda4af; background: rgba(244,63,94,0.12);
  padding: 0.12em 0.5em; border-radius: 5px; letter-spacing: 0.03em;
}

.fm-item.final .fm-label {
  background: linear-gradient(135deg, #f43f5e, #e11d48); color: #fff;
  box-shadow: 0 0 10px rgba(244,63,94,0.3);
}

.fm-katex { text-align: center; }

.fm-katex :deep(.katex) {
  font-size: 0.72rem; color: #e2e8f0;
}

.fm-item.final .fm-katex :deep(.katex) {
  color: #fff; font-size: 0.78rem;
}

.fm-arrow {
  font-size: 0.45rem; color: rgba(244,63,94,0.3);
  height: 1.2vh; line-height: 1.2vh;
  animation: arrowBounce 1.5s ease-in-out infinite;
}

@keyframes arrowBounce {
  0%,100% { transform: translateY(0); opacity: 0.3; }
  50%     { transform: translateY(2px); opacity: 0.6; }
}

/* 公式备注 */
.formula-note {
  margin-top: 0.5vh; padding: 0.4vh 0.6vw;
  border-radius: 8px; background: rgba(244,63,94,0.04);
  border: 1px solid rgba(244,63,94,0.08);
}

.note-row {
  display: flex; align-items: center; gap: 0.4vw;
  font-size: 0.55rem; color: rgba(255,255,255,0.45);
  line-height: 1.5;
}

.note-row :deep(.katex) {
  font-size: 0.55rem; color: rgba(255,255,255,0.5);
}

.note-bullet {
  width: 4px; height: 4px; border-radius: 50%;
  background: rgba(244,63,94,0.4); flex-shrink: 0;
}

/* ===== 通用动画 ===== */
@keyframes fadeDown {
  0%   { transform: translateY(-12px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>
