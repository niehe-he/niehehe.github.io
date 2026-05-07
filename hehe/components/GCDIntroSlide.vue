<template>
  <div class="gcd-root">
    <!-- 背景层 -->
    <div class="bg-layer">
      <div class="bg-gradient"></div>
      <div class="hex-grid"></div>
      <!-- 同心涟漪 -->
      <div class="ripple" v-for="r in 4" :key="r"
           :style="{ animationDelay: `${r * 1.2}s` }"></div>
    </div>

    <!-- 环绕光点 -->
    <div class="orbit-dots">
      <span v-for="d in 8" :key="d" class="orbit-dot"
            :style="{ '--i': d }"></span>
    </div>

    <!-- 中心内容 -->
    <div class="center-content">
      <!-- 章节标记 - 标签式 -->
      <div class="chapter-tag">
        <span class="tag-icon">&#9670;</span>
        <span class="tag-text">4.1.1 递推法</span>
        <span class="tag-icon">&#9670;</span>
      </div>

      <!-- 主标题 - 擦除揭示 -->
      <h1 class="main-title">
        <span class="title-reveal">最大公约数</span>
      </h1>

      <!-- 副标题 -->
      <p class="subtitle">辗转相除法 &amp; 短除法</p>

      <!-- 公式炫光卡 -->
      <div class="formula-glow-card">
        <div class="formula-inner">
          <span class="katex-style">gcd(m, n) = gcd(n, m mod n)</span>
        </div>
        <div class="formula-aura"></div>
      </div>

      <!-- 两种算法标签 -->
      <div class="algo-tags">
        <div class="algo-tag tag-short">
          <span class="algo-num">01</span>
          <span class="algo-name">短除法</span>
        </div>
        <div class="algo-tag tag-euclid">
          <span class="algo-num">02</span>
          <span class="algo-name">辗转相除法</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gcd-root {
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
  background: linear-gradient(160deg, #06060f 0%, #0a0a20 40%, #050a12 100%);
}

/* 六边形网格 */
.hex-grid {
  position: absolute;
  inset: 0;
  background-image:
    url("data:image/svg+xml,%3Csvg width='60' height='52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 15v22l-30 15L0 37V15z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='0.5'/%3E%3C/svg%3E");
  background-size: 60px 52px;
  animation: hexDrift 30s linear infinite;
}

@keyframes hexDrift {
  0%   { background-position: 0 0; }
  100% { background-position: 120px 104px; }
}

/* ===== 同心涟漪 ===== */
.ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5vw;
  height: 5vw;
  margin-left: -2.5vw;
  margin-top: -2.5vw;
  border-radius: 50%;
  border: 1px solid rgba(59,130,246,0.3);
  animation: rippleExpand 5s ease-out infinite;
}

.ripple:nth-child(2) { animation-duration: 5s; }
.ripple:nth-child(3) { animation-duration: 5.5s; }
.ripple:nth-child(4) { animation-duration: 6s; }

@keyframes rippleExpand {
  0%   { width: 5vw; height: 5vw; margin-left: -2.5vw; margin-top: -2.5vw; opacity: 0.8; border-width: 1px; }
  100% { width: 80vw; height: 80vw; margin-left: -40vw; margin-top: -40vw; opacity: 0; border-width: 0.3px; }
}

/* ===== 环绕光点 ===== */
.orbit-dots {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  pointer-events: none;
  animation: orbitSpin 12s linear infinite;
}

.orbit-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #3b82f6;
  box-shadow: 0 0 10px #3b82f6, 0 0 24px #3b82f680;
  animation: orbitGlow 2s ease-in-out infinite;
  --angle: calc(var(--i) * 45deg);
  transform:
    rotate(var(--angle))
    translateX(18vw)
    rotate(calc(-1 * var(--angle)));
}

@keyframes orbitSpin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes orbitGlow {
  0%,100% { opacity: 0.4; transform: rotate(var(--angle)) translateX(18vw) rotate(calc(-1 * var(--angle))) scale(1); }
  50%     { opacity: 1; transform: rotate(var(--angle)) translateX(18vw) rotate(calc(-1 * var(--angle))) scale(1.8); }
}

/* ===== 中心内容 ===== */
.center-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
}

/* 章节标记 */
.chapter-tag {
  display: flex;
  align-items: center;
  gap: 0.8vw;
  animation: fadeDown 0.5s ease-out both;
}

.tag-icon {
  font-size: 0.5rem;
  color: rgba(59,130,246,0.6);
}

.tag-text {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.5);
}

/* 主标题 - 擦除揭示 */
.main-title {
  margin: 0;
  overflow: hidden;
}

.title-reveal {
  display: inline-block;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: #fff;
  background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: wipeReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both,
             textShimmer 3s ease-in-out 1.2s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

@keyframes wipeReveal {
  0%   { clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%); opacity: 0; }
  100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; }
}

@keyframes textShimmer {
  0%,100% { background-position: 0% 50%; }
  50%     { background-position: 100% 50%; }
}

/* 副标题 */
.subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255,0.55);
  margin: 0;
  letter-spacing: 0.08em;
  animation: fadeUp 0.5s ease-out 0.6s both;
}

/* ===== 公式炫光卡 ===== */
.formula-glow-card {
  position: relative;
  padding: 0.2vh 0.4vw;
  animation: fadeScale 0.6s ease-out 0.8s both;
}

.formula-inner {
  position: relative;
  z-index: 1;
  padding: 1.2vh 2vw;
  border-radius: 12px;
  background: rgba(0,0,0,0.5);
  border: 1px solid rgba(59,130,246,0.3);
  backdrop-filter: blur(8px);
}

.katex-style {
  font-family: 'Latin Modern Math', 'Cambria Math', 'JetBrains Mono', monospace;
  font-size: 1.05rem;
  font-weight: 600;
  color: #93c5fd;
  letter-spacing: 0.03em;
  text-shadow: 0 0 12px rgba(59,130,246,0.4);
}

.formula-aura {
  position: absolute;
  inset: -4px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
  background-size: 300% 300%;
  filter: blur(8px);
  opacity: 0.4;
  z-index: 0;
  animation: auraFlow 4s ease-in-out infinite;
}

@keyframes auraFlow {
  0%,100% { background-position: 0% 50%; opacity: 0.3; }
  50%     { background-position: 100% 50%; opacity: 0.5; }
}

/* ===== 算法标签 ===== */
.algo-tags {
  display: flex;
  gap: 2vw;
}

.algo-tag {
  display: flex;
  align-items: center;
  gap: 0.5vw;
  padding: 0.6vh 1.5vw;
  border-radius: 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.tag-short {
  animation: flipIn 0.5s ease-out 1s both;
}

.tag-euclid {
  animation: flipIn 0.5s ease-out 1.15s both;
}

.algo-tag:hover {
  border-color: rgba(59,130,246,0.4);
  box-shadow: 0 0 20px rgba(59,130,246,0.15);
  transform: translateY(-2px);
}

@keyframes flipIn {
  0%   { transform: perspective(400px) rotateX(90deg); opacity: 0; }
  100% { transform: perspective(400px) rotateX(0); opacity: 1; }
}

.algo-num {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.algo-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.75);
  letter-spacing: 0.04em;
}

@keyframes fadeDown {
  0%   { transform: translateY(-15px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fadeUp {
  0%   { transform: translateY(15px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fadeScale {
  0%   { transform: scale(0.85); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
