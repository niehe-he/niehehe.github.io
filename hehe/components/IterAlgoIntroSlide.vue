<template>
  <div class="chapter-root">
    <!-- 背景层 -->
    <div class="bg-layer">
      <div class="bg-base"></div>
      <div class="tri-grid"></div>
      <!-- 大型旋转三角 -->
      <div class="tri-big"></div>
      <div class="tri-big tri-big-2"></div>
    </div>

    <!-- 光扫效果 -->
    <div class="sweep-beam"></div>

    <!-- 数字雨粒子 -->
    <div class="digit-rain">
      <span v-for="n in 18" :key="n" class="digit" :style="digitStyle(n)">{{ digitChar(n) }}</span>
    </div>

    <!-- 中心内容 -->
    <div class="center-content">
      <!-- 章节编号 - 大型数字 -->
      <div class="chapter-num">
        <span class="num-char" v-for="(c, i) in '4.1'" :key="i"
              :style="{ animationDelay: `${0.1 + i * 0.08}s` }">{{ c }}</span>
      </div>

      <!-- 激光切割线 + 标题 -->
      <div class="title-section">
        <div class="laser-cut"></div>
        <h1 class="main-title">
          <span class="title-cn">迭代算法</span>
        </h1>
        <div class="laser-cut laser-cut-bottom"></div>
      </div>

      <!-- 英文副标题 - 打字机 -->
      <p class="subtitle-en">
        <span class="typewriter" ref="twRef">Basic Iterative Strategy</span>
        <span class="cursor">|</span>
      </p>

      <!-- 关键词标签 -->
      <div class="keyword-tags">
        <span class="kw-tag" v-for="(kw, i) in keywords" :key="i"
              :style="{ animationDelay: `${1 + i * 0.15}s` }">{{ kw }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const keywords = ['递推', '倒推', '逼近', '迭代']

function digitChar(n: number) {
  const chars = '01∞∑∏∫√ΔΩαβλπ'
  return chars[n % chars.length]
}

function digitStyle(n: number) {
  const left = ((n * 79 + 17) % 94)
  const delay = (n * 0.6) % 7
  const dur = 5 + (n % 6)
  const size = 0.55 + (n % 4) * 0.15
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
    fontSize: `${size}rem`,
  }
}
</script>

<style scoped>
.chapter-root {
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
  background: radial-gradient(ellipse at 50% 50%, #0f0f2e 0%, #060610 60%, #020208 100%);
}

/* 三角形网格 */
.tri-grid {
  position: absolute;
  inset: 0;
  background-image:
    url("data:image/svg+xml,%3Csvg width='80' height='70' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l40 70H0z' fill='none' stroke='rgba(255,255,255,0.02)' stroke-width='0.5'/%3E%3C/svg%3E");
  background-size: 80px 70px;
  animation: triDrift 25s linear infinite;
}

@keyframes triDrift {
  0%   { background-position: 0 0; }
  100% { background-position: 160px 140px; }
}

/* 大型旋转三角 */
.tri-big {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 25vw solid transparent;
  border-right: 25vw solid transparent;
  border-bottom: 43vw solid rgba(99,102,241,0.03);
  transform-origin: center center;
  animation: triSpin 20s linear infinite;
}

.tri-big-2 {
  border-bottom-color: rgba(139,92,246,0.025);
  animation-duration: 26s;
  animation-direction: reverse;
  transform: translate(-50%, -50%) rotate(60deg);
}

@keyframes triSpin {
  0%   { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* ===== 光扫 ===== */
.sweep-beam {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255,255,255,0.03) 30%,
    rgba(255,255,255,0.12) 50%,
    rgba(255,255,255,0.03) 70%,
    transparent 100%);
  z-index: 1;
  pointer-events: none;
  animation: sweepDown 8s ease-in-out infinite;
  box-shadow: 0 0 40px rgba(99,102,241,0.15);
}

@keyframes sweepDown {
  0%,100% { top: -20%; opacity: 0; }
  20%     { opacity: 1; }
  80%     { opacity: 1; }
  100%    { top: 120%; opacity: 0; }
}

/* ===== 数字雨 ===== */
.digit-rain {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.digit {
  position: absolute;
  top: -20px;
  color: rgba(99,102,241,0.25);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-weight: 300;
  animation: digitFall linear infinite;
}

.digit:nth-child(odd)  { color: rgba(99,102,241,0.2); }
.digit:nth-child(even) { color: rgba(139,92,246,0.18); }

@keyframes digitFall {
  0%   { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
  5%   { opacity: 1; }
  90%  { opacity: 0.6; }
  100% { transform: translateY(110vh) rotate(180deg); opacity: 0; }
}

/* ===== 中心内容 ===== */
.center-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vh;
}

/* 章节编号 */
.chapter-num {
  display: flex;
  gap: 0.3vw;
}

.num-char {
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(255,255,255,0.08);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  text-shadow: 0 0 40px rgba(99,102,241,0.2);
  animation: numFadeUp 0.5s ease-out both;
}

@keyframes numFadeUp {
  0%   { transform: translateY(30px); opacity: 0; color: rgba(99,102,241,0.5); }
  100% { transform: translateY(0); opacity: 1; color: rgba(255,255,255,0.08); }
}

/* ===== 激光切割标题 ===== */
.title-section {
  position: relative;
}

.laser-cut {
  width: 0;
  height: 1px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent, #818cf8, #6366f1, #818cf8, transparent);
  animation: laserSlice 0.8s ease-out 0.3s forwards;
}

.laser-cut-bottom {
  animation-delay: 0.5s;
}

@keyframes laserSlice {
  0%   { width: 0; opacity: 0; }
  50%  { opacity: 1; box-shadow: 0 0 16px rgba(99,102,241,0.6); }
  100% { width: 70%; opacity: 0.5; box-shadow: 0 0 4px rgba(99,102,241,0.2); }
}

.main-title {
  margin: 0.5vh 0;
  overflow: hidden;
}

.title-cn {
  display: inline-block;
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  color: #fff;
  animation: titleReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
  text-shadow: 0 0 60px rgba(129,140,248,0.4), 0 0 120px rgba(99,102,241,0.2);
}

@keyframes titleReveal {
  0%   { transform: scaleX(0); opacity: 0; filter: blur(8px); }
  100% { transform: scaleX(1); opacity: 1; filter: blur(0); }
}

/* 打字机副标题 */
.subtitle-en {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0;
  animation: fadeIn 0.3s ease-out 1s both;
}

.typewriter {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.08em;
  font-style: italic;
}

.cursor {
  font-size: 0.9rem;
  color: #818cf8;
  font-weight: 300;
  animation: cursorBlink 0.8s step-end infinite;
}

@keyframes cursorBlink {
  0%,100% { opacity: 1; }
  50%     { opacity: 0; }
}

/* 关键词标签 */
.keyword-tags {
  display: flex;
  gap: 1vw;
}

.kw-tag {
  padding: 0.35vh 1.2vw;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.6);
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.15);
  animation: tagReveal 0.4s ease-out both;
  transition: all 0.3s ease;
}

.kw-tag:hover {
  background: rgba(99,102,241,0.18);
  border-color: rgba(129,140,248,0.4);
  color: #c7d2fe;
  box-shadow: 0 0 16px rgba(99,102,241,0.2);
}

@keyframes tagReveal {
  0%   { transform: translateY(10px) scale(0.9); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}

@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
</style>
