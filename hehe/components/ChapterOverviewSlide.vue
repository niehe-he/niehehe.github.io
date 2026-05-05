<template>
  <div class="root">
    <!-- ====== 宇宙背景 ====== -->
    <div class="bg-layer">
      <div class="bg-base"></div>
      <!-- 星云光斑 -->
      <div class="nebula nebula-1"></div>
      <div class="nebula nebula-2"></div>
      <div class="nebula nebula-3"></div>
      <div class="nebula nebula-4"></div>
      <!-- 星场 -->
      <div class="starfield">
        <span
          v-for="n in 60"
          :key="'s' + n"
          class="star"
          :style="starStyle(n)"
        ></span>
      </div>
    </div>

    <!-- ====== 光粒子 ====== -->
    <div class="light-particles">
      <span
        v-for="n in 16"
        :key="'p' + n"
        class="l-particle"
        :style="lparticleStyle(n)"
      ></span>
    </div>

    <!-- ====== 主内容 ====== -->
    <div class="content">
      <!-- 左栏：章节标识 -->
      <div class="left-panel">
        <div class="chapter-art">
          <!-- 装饰圆环 -->
          <div class="deco-ring ring-outer"></div>
          <div class="deco-ring ring-mid"></div>
          <div class="deco-ring ring-inner"></div>
          <!-- 巨型数字 -->
          <div class="chapter-num">
            <span class="num-char" v-for="(c, i) in chapterNum" :key="i"
                  :style="{ animationDelay: `${0.1 + i * 0.1}s` }">{{ c }}</span>
          </div>
        </div>
        <!-- 章节标题 -->
        <div class="chapter-info">
          <div class="chapter-label">
            <span class="label-line"></span>
            <span class="label-text">{{ chapterLabel }}</span>
            <span class="label-line"></span>
          </div>
          <h2 class="chapter-title">{{ chapterTitle }}</h2>
          <div class="chapter-underline"></div>
        </div>
      </div>

      <!-- 右栏：节次卡片矩阵 -->
      <div class="right-panel">
        <div class="card-grid">
          <div
            v-for="(sec, i) in sections"
            :key="sec.num"
            class="sec-card"
            :style="{
              '--accent': sec.color,
              animationDelay: `${0.25 + i * 0.1}s`
            }"
          >
            <div class="sec-card-bg"></div>
            <div class="sec-card-border"></div>
            <div class="sec-card-inner">
              <span class="sec-num" :style="{ background: sec.color }">{{ sec.num }}</span>
              <span class="sec-title">{{ sec.title }}</span>
            </div>
            <div class="sec-card-shimmer"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== 底部光晕 ====== -->
    <div class="bottom-glow"></div>
  </div>
</template>

<script setup lang="ts">
interface Section {
  num: string
  title: string
  color: string
}

interface Props {
  chapterNum?: string
  chapterLabel?: string
  chapterTitle?: string
  sections?: Section[]
}

withDefaults(defineProps<Props>(), {
  chapterNum: '04',
  chapterLabel: '第 四 章',
  chapterTitle: '算法的基本策略',
  sections: () => [
    { num: '4.1', title: '迭代算法',        color: '#6366f1' },
    { num: '4.2', title: '蛮力法',          color: '#f43f5e' },
    { num: '4.3', title: '分而治之算法',    color: '#10b981' },
    { num: '4.4', title: '贪婪算法',        color: '#f59e0b' },
    { num: '4.5', title: '动态规划',        color: '#8b5cf6' },
    { num: '4.6', title: '算法策略间的比较', color: '#06b6d4' },
  ]
})

/* ---- 星星 ---- */
function starStyle(n: number) {
  const left = ((n * 137 + 53) % 100)
  const top  = ((n * 89 + 29) % 100)
  const delay = (n * 0.37) % 4
  const dur = 2 + (n % 4)
  const size = 1 + (n % 3) * 0.5
  const opacity = 0.18 + (n % 5) * 0.12
  return {
    left: `${left}%`,
    top: `${top}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
    width: `${size}px`,
    height: `${size}px`,
    opacity,
  }
}

/* ---- 光粒子 ---- */
function lparticleStyle(n: number) {
  const left = ((n * 113 + 19) % 94)
  const delay = (n * 0.55) % 7
  const dur = 5 + (n % 7)
  const size = 2 + (n % 4)
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
/* ================================================
   根容器
   ================================================ */
.root {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  overflow: hidden;
  font-family: 'Inter', 'Noto Sans SC', system-ui, -apple-system, sans-serif;
}

/* ================================================
   宇宙背景
   ================================================ */
.bg-layer {
  position: absolute; inset: 0; z-index: 0;
}

.bg-base {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 50%, #0c0a24 0%, #070612 45%, #04040e 100%);
}

/* 星云 */
.nebula {
  position: absolute;
  border-radius: 50%;
  filter: blur(130px);
}

.nebula-1 {
  width: 50vw; height: 50vw;
  top: -15%; left: -10%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 70%);
  animation: nebulaBreath 10s ease-in-out infinite;
}

.nebula-2 {
  width: 44vw; height: 44vw;
  bottom: -18%; right: -8%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%);
  animation: nebulaBreath 12s ease-in-out infinite reverse;
}

.nebula-3 {
  width: 30vw; height: 30vw;
  top: 40%; left: 50%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.02) 40%, transparent 70%);
  animation: nebulaBreath 14s ease-in-out infinite 3s;
}

.nebula-4 {
  width: 22vw; height: 22vw;
  top: 10%; right: 20%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, rgba(245, 158, 11, 0.01) 40%, transparent 70%);
  animation: nebulaBreath 8s ease-in-out infinite 1.5s;
}

@keyframes nebulaBreath {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50%      { transform: scale(1.15); opacity: 1; }
}

/* 星场 */
.starfield {
  position: absolute; inset: 0;
}

.star {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  animation: starTwinkle ease-in-out infinite;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.4);
}

@keyframes starTwinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50%      { opacity: 0.9; transform: scale(1.8); }
}

/* ================================================
   光粒子
   ================================================ */
.light-particles {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
}

.l-particle {
  position: absolute;
  bottom: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 210, 255, 0.7), transparent 60%);
  animation: lightRise linear infinite;
  box-shadow: 0 0 6px rgba(180, 190, 255, 0.4);
}

@keyframes lightRise {
  0%   { transform: translateY(0) scale(0.5); opacity: 0; }
  8%   { opacity: 0.8; }
  88%  { opacity: 0.2; }
  100% { transform: translateY(-110vh) scale(1.4); opacity: 0; }
}

/* ================================================
   主内容布局
   ================================================ */
.content {
  position: relative; z-index: 2;
  height: 100%; width: 100%;
  display: flex;
  padding: 3vh 4vw;
  box-sizing: border-box;
  gap: 3vw;
}

/* ================================================
   左栏 - 章节标识
   ================================================ */
.left-panel {
  flex: 0 0 34%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}

/* 装饰圆环 + 数字 */
.chapter-art {
  position: relative;
  width: 14vw;
  height: 14vw;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: artReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes artReveal {
  0%   { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.deco-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid transparent;
}

.ring-outer {
  width: 100%; height: 100%;
  background: conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1), transparent) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ringSpin 20s linear infinite;
}

.ring-mid {
  width: 78%; height: 78%;
  background: conic-gradient(from 180deg, transparent, rgba(139, 92, 246, 0.18), rgba(6, 182, 212, 0.1), transparent) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ringSpin 16s linear infinite reverse;
}

.ring-inner {
  width: 56%; height: 56%;
  border-color: rgba(99, 102, 241, 0.1);
  border-style: dashed;
  border-width: 1.5px;
  animation: ringSpin 12s linear infinite;
}

@keyframes ringSpin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 巨型章节数字 */
.chapter-num {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.2vw;
}

.num-char {
  font-size: 6rem;
  font-weight: 900;
  font-family: 'Inter', 'JetBrains Mono', system-ui, sans-serif;
  background: linear-gradient(180deg, #e0e7ff 0%, #a5b4fc 25%, #6366f1 55%, #4f46e5 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.4));
  animation: numRise 0.6s ease-out both;
  letter-spacing: 0.02em;
}

@keyframes numRise {
  0%   { transform: translateY(30px); opacity: 0; filter: blur(6px) drop-shadow(0 0 30px rgba(99, 102, 241, 0.4)); }
  100% { transform: translateY(0); opacity: 1; filter: blur(0) drop-shadow(0 0 30px rgba(99, 102, 241, 0.4)); }
}

/* 章节文字信息 */
.chapter-info {
  text-align: center;
  animation: infoReveal 0.6s ease-out 0.4s both;
}

@keyframes infoReveal {
  0%   { transform: translateY(15px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.chapter-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8vw;
  margin-bottom: 0.6vh;
}

.label-line {
  width: 2vw;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(165, 180, 252, 0.5));
}

.label-line:last-child {
  background: linear-gradient(90deg, rgba(165, 180, 252, 0.5), transparent);
}

.label-text {
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(165, 180, 252, 0.7);
  letter-spacing: 0.15em;
}

.chapter-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  letter-spacing: 0.08em;
  text-shadow: 0 0 24px rgba(139, 92, 246, 0.25);
}

.chapter-underline {
  width: 50%;
  height: 2px;
  margin: 0.5vh auto 0;
  background: linear-gradient(90deg, transparent, #818cf8, #a78bfa, transparent);
  border-radius: 1px;
}

/* ================================================
   右栏 - 节次卡片矩阵
   ================================================ */
.right-panel {
  flex: 1;
  display: flex;
  align-items: center;
}

.card-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1.2vh 1.5vw;
}

/* ====== 单张卡片 ====== */
.sec-card {
  --accent: #6366f1;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: default;
  animation: cardEnter 0.5s ease-out both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sec-card:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

@keyframes cardEnter {
  0%   { transform: translateX(30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.sec-card-bg {
  position: absolute; inset: 0; z-index: 0;
  background: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.sec-card-border {
  position: absolute; inset: 0; z-index: 1;
  border-radius: 12px; pointer-events: none;
  border: 1px solid transparent;
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--accent) 25%, transparent),
    color-mix(in srgb, var(--accent) 8%, transparent),
    transparent 60%) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.sec-card-inner {
  position: relative; z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5vw;
  padding: 0.4vh 0.6vw;
  height: 100%;
  box-sizing: border-box;
}

.sec-num {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.2rem;
  height: 1.5rem;
  border-radius: 6px;
  color: #fff;
  font-size: 0.58rem;
  font-weight: 800;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  letter-spacing: 0.04em;
  box-shadow: 0 0 12px color-mix(in srgb, var(--accent) 40%, transparent);
}

.sec-title {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
  letter-spacing: 0.04em;
  white-space: nowrap;
}

/* 卡片光泽扫过 */
.sec-card-shimmer {
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  z-index: 3;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.03),
    transparent);
  animation: shimmerSweep 4s ease-in-out infinite;
  pointer-events: none;
}

.sec-card:nth-child(2) .sec-card-shimmer  { animation-delay: -1.2s; }
.sec-card:nth-child(3) .sec-card-shimmer  { animation-delay: -2.5s; }
.sec-card:nth-child(4) .sec-card-shimmer  { animation-delay: -3.7s; }
.sec-card:nth-child(5) .sec-card-shimmer  { animation-delay: -0.6s; }
.sec-card:nth-child(6) .sec-card-shimmer  { animation-delay: -1.9s; }

@keyframes shimmerSweep {
  0%   { left: -100%; }
  40%  { left: 140%; }
  100% { left: 140%; }
}

/* ================================================
   底部光晕
   ================================================ */
.bottom-glow {
  position: absolute;
  bottom: 0; left: 10%;
  width: 80%; height: 2px;
  z-index: 3;
  background: linear-gradient(90deg,
    transparent,
    rgba(99, 102, 241, 0.3),
    rgba(139, 92, 246, 0.25),
    rgba(6, 182, 212, 0.15),
    transparent);
  border-radius: 1px;
  animation: bottomGlowPulse 3s ease-in-out infinite;
}

@keyframes bottomGlowPulse {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
}
</style>
