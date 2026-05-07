<template>
  <div class="intro-root">
    <!-- 背景图 + 动态蒙层 -->
    <div class="bg-layer">
      <img src="/img/01.jpg" class="bg-image" />
      <div class="bg-overlay"></div>
      <div class="light-ray ray-1"></div>
      <div class="light-ray ray-2"></div>
    </div>

    <!-- 浮动光环 -->
    <div class="ring ring-1"></div>
    <div class="ring ring-2"></div>

    <!-- 粒子 -->
    <div class="particles">
      <span v-for="n in 15" :key="n" class="particle" :style="particleStyle(n)"></span>
    </div>

    <!-- 中心内容 -->
    <div class="center-content">
      <!-- 章节标记 -->
      <div class="chapter-tag">
        <span class="tag-line"></span>
        <span class="tag-text">CHAPTER 4.1.3</span>
        <span class="tag-line"></span>
      </div>

      <!-- 主标题 -->
      <h1 class="main-title">
        <span class="title-char" v-for="(c, i) in '迭代法解方程'" :key="i"
              :style="{ animationDelay: `${0.3 + i * 0.06}s` }">{{ c }}</span>
      </h1>

      <!-- 副标题 -->
      <p class="subtitle">基本思想：逐步逼近</p>

      <!-- 分隔装饰 -->
      <div class="divider">
        <span class="divider-dot"></span>
        <span class="divider-line"></span>
        <span class="divider-diamond"></span>
        <span class="divider-line"></span>
        <span class="divider-dot"></span>
      </div>

      <!-- 步骤列表 -->
      <ul class="step-list">
        <li v-for="(step, i) in steps" :key="i"
            :style="{ animationDelay: `${0.8 + i * 0.15}s` }">
          <span class="step-index">{{ step.idx }}</span>
          <span class="step-text">{{ step.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const steps = [
  { idx: '01', text: '确定初值 x₀' },
  { idx: '02', text: '建立迭代关系 f(x) = 0 → x = φ(x)' },
  { idx: '03', text: '构造数列 xₙ = φ(xₙ₋₁)' },
  { idx: '04', text: '迭代至满足精度条件' },
]

function particleStyle(n: number) {
  const left = ((n * 97 + 31) % 100)
  const delay = (n * 0.5) % 8
  const size = 2 + (n % 3)
  const dur = 5 + (n % 6)
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
    width: `${size}px`,
    height: `${size}px`
  }
}
</script>

<style scoped>
.intro-root {
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

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(0,0,0,0.65) 0%,
    rgba(10,10,30,0.55) 40%,
    rgba(0,0,0,0.7) 100%);
}

.light-ray {
  position: absolute;
  width: 1px;
  height: 200%;
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(255,255,255,0.08) 40%,
    rgba(255,255,255,0.15) 50%,
    rgba(255,255,255,0.08) 60%,
    transparent 100%);
  animation: raySweep 12s linear infinite;
  transform-origin: top center;
}

.ray-1 {
  left: 30%;
  animation-delay: 0s;
}
.ray-2 {
  left: 70%;
  animation-delay: -6s;
}

@keyframes raySweep {
  0%   { transform: translateX(-30vw) rotate(15deg); opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translateX(30vw) rotate(15deg); opacity: 0; }
}

/* ===== 浮动光环 ===== */
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  pointer-events: none;
  animation: ringPulse 4s ease-in-out infinite;
}

.ring-1 {
  width: 50vw;
  height: 50vw;
  animation-delay: 0s;
}
.ring-2 {
  width: 60vw;
  height: 60vw;
  animation-delay: -2s;
}

@keyframes ringPulse {
  0%,100% { transform: scale(0.9); opacity: 0.3; }
  50%     { transform: scale(1.05); opacity: 0.7; }
}

/* ===== 粒子 ===== */
.particles {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.particle {
  position: absolute;
  bottom: -10px;
  background: rgba(255,255,255,0.6);
  border-radius: 50%;
  animation: particleRise linear infinite;
}

.particle:nth-child(3n) {
  background: rgba(180,200,255,0.6);
  box-shadow: 0 0 6px rgba(100,150,255,0.4);
}
.particle:nth-child(3n+1) {
  background: rgba(255,200,180,0.6);
  box-shadow: 0 0 6px rgba(255,150,100,0.4);
}
.particle:nth-child(3n+2) {
  background: rgba(180,255,210,0.6);
  box-shadow: 0 0 6px rgba(100,255,150,0.4);
}

@keyframes particleRise {
  0%   { transform: translateY(0) scale(1); opacity: 0; }
  10%  { opacity: 1; }
  85%  { opacity: 0.5; }
  100% { transform: translateY(-105vh) scale(0.2); opacity: 0; }
}

/* ===== 中心内容 ===== */
.center-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
}

/* 章节标记 */
.chapter-tag {
  display: flex;
  align-items: center;
  gap: 1vw;
  animation: fadeInDown 0.6s ease-out both;
}

.tag-line {
  width: 2.5vw;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
}

.tag-text {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: rgba(255,255,255,0.55);
}

/* 主标题 - 逐字动画 */
.main-title {
  margin: 0;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-shadow: 0 0 40px rgba(255,255,255,0.3);
}

.title-char {
  display: inline-block;
  color: #fff;
  animation: charPop 0.5s ease-out both;
}

@keyframes charPop {
  0%   { transform: translateY(-30px) scale(0.5); opacity: 0; filter: blur(4px); }
  60%  { transform: translateY(4px) scale(1.05); opacity: 1; filter: blur(0); }
  100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
}

/* 副标题 */
.subtitle {
  font-size: 1.15rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  margin: 0;
  letter-spacing: 0.06em;
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

/* 分隔装饰 */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6vw;
  animation: fadeIn 0.5s ease-out 0.7s both;
}

.divider-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
}

.divider-diamond {
  width: 8px;
  height: 8px;
  background: rgba(255,255,255,0.7);
  transform: rotate(45deg);
  box-shadow: 0 0 12px rgba(255,255,255,0.3);
}

.divider-line {
  width: 3vw;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
}

/* 步骤列表 */
.step-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8vh;
}

.step-list li {
  display: flex;
  align-items: center;
  gap: 1vw;
  animation: slideInLeft 0.5s ease-out both;
}

@keyframes slideInLeft {
  0%   { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.step-index {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(255,255,255,0.8);
  letter-spacing: 0.04em;
  transition: all 0.3s ease;
}

.step-list li:hover .step-index {
  background: linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.3));
  border-color: rgba(139,92,246,0.5);
  box-shadow: 0 0 16px rgba(139,92,246,0.4);
  transform: scale(1.1);
}

.step-text {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  font-weight: 500;
  letter-spacing: 0.03em;
}

@keyframes fadeInDown {
  0%   { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fadeInUp {
  0%   { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
</style>
