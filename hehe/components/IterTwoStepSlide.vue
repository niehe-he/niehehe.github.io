<template>
  <div class="root">
    <!-- 背景 -->
    <div class="bg-layer">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- 主内容 -->
    <div class="content">
      <div class="title-row">
        <span class="badge">4.1.1</span>
        <h1 class="main-title">递推法</h1>
        <div class="title-accent"></div>
      </div>

      <div class="main-grid">
        <!-- 左侧：代码 -->
        <div class="left-col">
          <CodePanel :code="iterCode" title="C 实现" />
        </div>

        <!-- 右侧：信息卡片 -->
        <div class="right-col">
          <div class="info-card card-blue">
            <h3>递推迭代表达式</h3>
            <p class="table-row">1 &emsp; 2 &emsp; 3 &emsp; 4 &emsp; 5 &emsp; 6</p>
            <p class="table-row">a &emsp; b &emsp; a=a+b &emsp; b=a+b &emsp; a=a+b &emsp; b=a+b</p>
          </div>
          <div class="info-card card-amber">
            <h3>循环不变式</h3>
            <p class="invariant-text">a = a + b;&emsp; b = a + b;</p>
          </div>
        </div>
      </div>

      <!-- 底部图片 -->
      <div class="image-row">
        <img src="./img/ans1.png" alt="算法执行过程" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const iterCode = `main( )
{  int i,a=1,b=1;
   print(a,b);
   for(i=1; i<=5;i++)
   {    a=a+b;
        b=a+b;
        print(a,b);
    }
}`
</script>

<style scoped>
.root {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  overflow: hidden;
  font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif;
}

/* ===== 背景 ===== */
.bg-layer {
  position: absolute; inset: 0; z-index: 0;
  background: linear-gradient(155deg, #060617 0%, #0b0a26 30%, #09091e 55%, #050516 85%, #0a0920 100%);
}

.orb {
  position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.28;
}
.orb-1 {
  width: 42vw; height: 42vw;
  top: -12%; right: -6%;
  background: radial-gradient(circle, #6366f1 0%, #6366f130 45%, transparent 70%);
}
.orb-2 {
  width: 38vw; height: 38vw;
  bottom: -14%; left: -8%;
  background: radial-gradient(circle, #8b5cf6 0%, #8b5cf625 45%, transparent 70%);
}

.grid-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 3vw 3vw;
}

/* ===== 内容 ===== */
.content {
  position: relative; z-index: 2;
  height: 100%; width: 100%;
  display: flex; flex-direction: column;
  padding: 1.5vh 2.5vw;
  box-sizing: border-box;
  gap: 1vh;
}

/* ===== 标题 ===== */
.title-row {
  text-align: center; flex-shrink: 0;
  animation: titleIn 0.6s ease-out both;
}
@keyframes titleIn {
  0% { transform: translateY(-22px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  font-size: 0.55rem; font-weight: 800;
  padding: 0.08em 0.7em; border-radius: 12px;
  letter-spacing: 0.06em; margin-bottom: 0.3vh;
  box-shadow: 0 0 14px rgba(99,102,241,0.35);
}

.main-title {
  font-size: 1.8rem; font-weight: 900;
  color: #fff; margin: 0;
  letter-spacing: 0.1em;
  text-shadow: 0 0 40px rgba(139,92,246,0.3);
}

.title-accent {
  width: 20%; height: 2px;
  margin: 0.3vh auto 0;
  background: linear-gradient(90deg, transparent, #818cf8, #a78bfa, transparent);
  border-radius: 1px;
}

/* ===== 双栏 ===== */
.main-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8vw;
  min-height: 0;
}

.left-col {
  min-height: 0;
}

.right-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
}

/* ===== 信息卡片 ===== */
.info-card {
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
  border-left: 4px solid;
}

.info-card h3 {
  font-size: 0.95rem; font-weight: 700;
  margin: 0 0 0.4rem 0;
}

.info-card p {
  font-size: 0.78rem; margin: 0.2rem 0;
  line-height: 1.6;
}

.card-blue {
  border-left-color: #3b82f6;
  background: linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(255,255,255,0.04) 100%);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
}
.card-blue h3 { color: #60a5fa; }
.card-blue p  { color: #cbd5e1; }

.card-amber {
  border-left-color: #f59e0b;
  background: linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(255,255,255,0.04) 100%);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
}
.card-amber h3 { color: #fbbf24; }
.card-amber p  { color: #cbd5e1; }

.invariant-text {
  font-weight: 700;
}

/* ===== 底部图片 ===== */
.image-row {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 0.4vh 1vw;
  height: 13vh;
  box-sizing: border-box;
}

.image-row img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
