<template>
  <div class="backtrack-root">
    <!-- 背景层 -->
    <div class="bg-layer">
      <div class="bg-gradient"></div>
      <!-- 旋转几何装饰 -->
      <div class="geo-square sq-1"></div>
      <div class="geo-square sq-2"></div>
      <div class="geo-square sq-3"></div>
      <div class="geo-diamond dm-1"></div>
      <div class="geo-diamond dm-2"></div>
    </div>

    <!-- 螺旋粒子 -->
    <div class="spiral-particles">
      <span v-for="n in 12" :key="n" class="spiral" :style="spiralStyle(n)"></span>
    </div>

    <!-- 中心内容 -->
    <div class="center-content">
      <!-- 章节标记 -->
      <div class="chapter-tag">
        <span class="tag-bracket">[</span>
        <span class="tag-text">SECTION 4.1.2</span>
        <span class="tag-bracket">]</span>
      </div>

      <!-- 主标题 - 缩放弹入 -->
      <h1 class="main-title">
        <span class="title-word">倒推法</span>
        <div class="title-underline-bar"></div>
      </h1>

      <!-- 两个概念卡片 -->
      <div class="concept-row">
        <div class="concept-card forward">
          <span class="concept-arrow">&rarr;</span>
          <div class="concept-body">
            <span class="concept-label">迭代法</span>
            <span class="concept-desc">正推，由前向后解问题</span>
          </div>
        </div>

        <div class="concept-divider">
          <span class="vs-badge">VS</span>
        </div>

        <div class="concept-card backward">
          <span class="concept-arrow">&larr;</span>
          <div class="concept-body">
            <span class="concept-label">倒推法</span>
            <span class="concept-desc">从后向前推解问题</span>
          </div>
        </div>
      </div>

      <!-- 底部光条 -->
      <div class="bottom-bar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
function spiralStyle(n: number) {
  const angle = (n / 12) * 360
  const radius = 15 + Math.random() * 30
  const delay = n * 0.3
  const dur = 3 + (n % 4)
  return {
    '--angle': `${angle}deg`,
    '--radius': `${radius}vw`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
  }
}
</script>

<style scoped>
.backtrack-root {
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

/* ===== 背景层 ===== */
.bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      -30deg,
      transparent,
      transparent 40px,
      rgba(255,255,255,0.008) 40px,
      rgba(255,255,255,0.008) 41px
    ),
    linear-gradient(160deg, #0c0c1d 0%, #13132b 50%, #0a0f18 100%);
  animation: bgShift 20s linear infinite;
}

@keyframes bgShift {
  0%   { background-position: 0 0, 0 0; }
  100% { background-position: 100px 100px, 0 0; }
}

/* 旋转几何 */
.geo-square {
  position: absolute;
  border: 1px solid rgba(255,255,255,0.06);
  animation: geoRotate linear infinite;
}

.sq-1 {
  width: 12vw; height: 12vw;
  top: 12%; left: 8%;
  animation-duration: 18s;
}
.sq-2 {
  width: 8vw; height: 8vw;
  bottom: 15%; right: 10%;
  animation-duration: 14s;
  animation-direction: reverse;
}
.sq-3 {
  width: 15vw; height: 15vw;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 22s;
  border-color: rgba(255,255,255,0.04);
}

@keyframes geoRotate {
  0%   { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.geo-diamond {
  position: absolute;
  width: 4vw; height: 4vw;
  border: 1px solid rgba(255,255,255,0.1);
  transform: rotate(45deg);
  animation: diamondFloat ease-in-out infinite;
}

.dm-1 {
  top: 20%; right: 20%;
  animation-duration: 5s;
}
.dm-2 {
  bottom: 25%; left: 15%;
  animation-duration: 6s;
  animation-delay: -3s;
}

@keyframes diamondFloat {
  0%,100% { transform: rotate(45deg) translateY(0); opacity: 0.4; }
  50%     { transform: rotate(45deg) translateY(-15px); opacity: 0.8; }
}

/* ===== 螺旋粒子 ===== */
.spiral-particles {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.spiral {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(200,180,255,0.7);
  box-shadow: 0 0 6px rgba(180,150,255,0.5);
  animation: spiralOut linear infinite;
}

@keyframes spiralOut {
  0% {
    transform: translate(-50%, -50%) rotate(calc(var(--angle))) translateX(0) scale(1);
    opacity: 0;
  }
  10% { opacity: 1; }
  80% { opacity: 0.6; }
  100% {
    transform: translate(-50%, -50%) rotate(calc(var(--angle))) translateX(var(--radius)) scale(0.3);
    opacity: 0;
  }
}

/* ===== 中心内容 ===== */
.center-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5vh;
}

/* 章节标记 - 括号风格 */
.chapter-tag {
  animation: fadeScale 0.5s ease-out both;
}

.tag-bracket {
  font-size: 1rem;
  color: rgba(255,255,255,0.3);
  font-weight: 300;
}

.tag-text {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: rgba(255,255,255,0.45);
  margin: 0 0.8vw;
}

/* 主标题 */
.main-title {
  margin: 0;
  animation: scaleBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

.title-word {
  display: inline-block;
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, #e2e8f0 0%, #fff 40%, #a78bfa 70%, #7c3aed 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s ease-in-out infinite;
  text-shadow: none;
}

@keyframes shimmer {
  0%,100% { background-position: 0% 50%; }
  50%     { background-position: 100% 50%; }
}

.title-underline-bar {
  width: 60%;
  height: 3px;
  margin: 0.5vh auto 0;
  background: linear-gradient(90deg, transparent, #7c3aed, #a78bfa, #7c3aed, transparent);
  border-radius: 2px;
  animation: barExpand 1s ease-out 0.5s both,
             barPulse 2s ease-in-out 1.5s infinite;
}

@keyframes barExpand {
  0%   { width: 0; opacity: 0; }
  100% { width: 60%; opacity: 1; }
}

@keyframes barPulse {
  0%,100% { box-shadow: 0 0 8px rgba(124,58,237,0.3); }
  50%     { box-shadow: 0 0 20px rgba(124,58,237,0.6); }
}

/* 概念行 */
.concept-row {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}

.concept-card {
  display: flex;
  align-items: center;
  gap: 0.8vw;
  padding: 1.2vh 1.8vw;
  border-radius: 16px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s ease;
}

.concept-card.forward {
  animation: slideRight 0.6s ease-out 0.6s both;
}

.concept-card.backward {
  animation: slideLeft 0.6s ease-out 0.6s both;
}

.concept-card:hover {
  border-color: rgba(124,58,237,0.4);
  box-shadow: 0 0 24px rgba(124,58,237,0.15);
  transform: translateY(-2px);
}

@keyframes slideRight {
  0%   { transform: translateX(-40px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideLeft {
  0%   { transform: translateX(40px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.concept-arrow {
  font-size: 1.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

.concept-card.forward .concept-arrow {
  color: #22d3ee;
  text-shadow: 0 0 12px rgba(34,211,238,0.5);
}

.concept-card.backward .concept-arrow {
  color: #a78bfa;
  text-shadow: 0 0 12px rgba(167,139,250,0.5);
}

.concept-body {
  text-align: left;
}

.concept-label {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  margin-bottom: 0.2vh;
}

.concept-desc {
  display: block;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.03em;
}

/* VS 分隔 */
.concept-divider {
  display: flex;
  align-items: center;
  animation: fadeScale 0.5s ease-out 0.9s both;
}

.vs-badge {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.4);
  padding: 0.3em 0.6em;
  border-radius: 6px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
}

/* 底部光条 */
.bottom-bar {
  width: 30vw;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent);
  animation: bottomBarIn 0.8s ease-out 1s both;
}

@keyframes bottomBarIn {
  0%   { width: 0; opacity: 0; }
  100% { width: 30vw; opacity: 1; }
}

@keyframes fadeScale {
  0%   { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes scaleBounce {
  0%   { transform: scale(0.3); opacity: 0; }
  50%  { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
