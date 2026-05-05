<template>
  <div class="yanghui-slide">
    <div class="slide-header">
      <span class="badge">例 2</span>
      <h1>杨辉三角形输出</h1>
      <p class="header-sub">用一维数组完成 · 反推法</p>
    </div>

    <div class="slide-body">
      <div class="left-panel">
        <div class="triangle-card">
          <h3>杨辉三角示例</h3>
          <div class="triangle-grid">
            <div class="t-row"><span>1</span></div>
            <div class="t-row"><span>1</span><span>1</span></div>
            <div class="t-row"><span>1</span><span>2</span><span>1</span></div>
            <div class="t-row"><span>1</span><span>3</span><span>3</span><span>1</span></div>
            <div class="t-row"><span>1</span><span>4</span><span>6</span><span>4</span><span>1</span></div>
          </div>
        </div>
      </div>

      <div class="right-panel">
        <div class="think-card">
          <h3>算法设计思路</h3>
          <ul>
            <li>一维数组 <code>A[1..i]</code> 存储第 <em>i</em> 行</li>
            <li>正推法会覆盖上一行对应值</li>
            <li class="highlight">反推法可避免覆盖问题</li>
          </ul>
        </div>

        <div class="formula-card">
          <h3>反推法递推模型</h3>
          <div class="formula-group">
            <div class="formula-item">
              <span class="formula-label">边界</span>
              <span class="formula-expr">A[1] = A[i] = 1</span>
            </div>
            <div class="formula-item">
              <span class="formula-label">反推</span>
              <span class="formula-expr">A[j] = A[j-1] + A[j]</span>
              <span class="formula-range">j = i-1,i-2,...2</span>
            </div>
            <div class="formula-item">
              <span class="formula-label">参考</span>
              <span class="formula-expr">a[i][j] = a[i-1][j-1] + a[i-1][j]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yanghui-slide {
  width: 100%;
  height: 100%;
  padding: 2.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: radial-gradient(ellipse at 30% 20%, rgba(251,191,36,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.08) 0%, transparent 60%);
}

.slide-header {
  text-align: center;
  margin-bottom: 2rem;
  animation: fadeInDown 0.6s ease-out;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.25em 1em;
  border-radius: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 2px 12px rgba(245, 158, 11, 0.35);
  margin-bottom: 0.5rem;
}

.slide-header h1 {
  font-family: 'Merriweather', 'Noto Sans SC', Georgia, serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: #fff;
  margin: 0.2em 0 0;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  letter-spacing: 0.04em;
}

.header-sub {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.65);
  margin: 0.3rem 0 0;
  letter-spacing: 0.05em;
}

.slide-body {
  flex: 1;
  display: flex;
  gap: 2rem;
  align-items: stretch;
  min-height: 0;
}

.left-panel {
  flex: 0 0 38%;
  display: flex;
  animation: fadeInLeft 0.7s ease-out;
}

.triangle-card {
  flex: 1;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
}

.triangle-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  margin: 0 0 1.2rem;
  letter-spacing: 0.05em;
}

.triangle-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.t-row {
  display: flex;
  gap: 0.6rem;
}

.t-row span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 8px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.12);
  transition: all 0.3s;
}

.t-row:nth-child(1) span { color: #fbbf24; background: rgba(251,191,36,0.18); border-color: rgba(251,191,36,0.3); }
.t-row:nth-child(2) span { color: #fcd34d; }
.t-row:nth-child(3) span:nth-child(2) { color: #fbbf24; background: rgba(251,191,36,0.22); border-color: rgba(251,191,36,0.35); }
.t-row:nth-child(4) span:nth-child(2),
.t-row:nth-child(4) span:nth-child(3) { color: #fbbf24; background: rgba(251,191,36,0.22); border-color: rgba(251,191,36,0.35); }
.t-row:nth-child(5) span:nth-child(2),
.t-row:nth-child(5) span:nth-child(4) { color: #fcd34d; }
.t-row:nth-child(5) span:nth-child(3) { color: #fbbf24; background: rgba(251,191,36,0.28); border-color: rgba(251,191,36,0.45); font-size: 1.3rem; }

.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  animation: fadeInRight 0.7s ease-out 0.15s both;
}

.think-card, .formula-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 18px;
  padding: 1.4rem 1.8rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.think-card h3, .formula-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #fbbf24;
  margin: 0 0 0.8rem;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.think-card h3::before { content: '💡'; font-size: 0.9rem; }
.formula-card h3::before { content: '📐'; font-size: 0.9rem; }

.think-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255,255,255,0.85);
  line-height: 2;
}

.think-card li::before {
  content: '▸';
  color: #f59e0b;
  margin-right: 0.5em;
}

.think-card li.highlight {
  color: #fcd34d;
  font-weight: 600;
}

.think-card li.highlight::before {
  content: '✦';
  color: #fbbf24;
}

.think-card code {
  background: rgba(251,191,36,0.15);
  color: #fcd34d;
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

.formula-group {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.formula-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  background: rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 0.5rem 0.9rem;
}

.formula-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #1e293b;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  padding: 0.15em 0.7em;
  border-radius: 12px;
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

.formula-expr {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0.02em;
}

.formula-range {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.55);
  margin-left: auto;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-25px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(25px); }
  to   { opacity: 1; transform: translateX(0); }
}
</style>
