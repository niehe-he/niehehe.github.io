<template>
  <div class="iter-slide">
    <!-- 标题 -->
    <div class="header-row">
      <span class="badge">4.1.3</span>
      <h1>迭代法解方程</h1>
    </div>

    <!-- 例1 -->
    <div class="card">
      <div class="card-head teal">例1迭代法求方程组根</div>
      <div class="card-inner">
        <p>算法说明：方法组解的初值X = （X1,X2,...,Xn-1）<br>迭代关系方程组为：xi=gi(X)(i=0,1,…,n-1),w为解的精度,</p>
      </div>
    </div>

    <!-- 代码块 -->
    <div class="card code-card">
      <div class="card-head slate">算法实现</div>
      <div class="card-inner">
        <pre><code>for (i=0;i&lt;n;i++)  x[i]=初始近似根;
do
{   k=k+1;
    for(i=0;i&lt;n;i++)      y[i]=x[i];
     for(i=0;i&lt;n;i++)        x[i]=gi(X);
     for (i=0;i&lt;n;i++)   c=c+fabs(y[i]-x[i])；
 } while (c&gt;w  and k&lt;maxn )；
 for (i=0;i&lt;n;i++)
 print(i，"变量的近似根是"，x[i])；</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;600;700&display=swap');

.iter-slide {
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 100%);
}

/* ===== 标题 ===== */
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

/* ===== 卡片 ===== */
.card {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 16px rgba(0,0,0,0.1);
  animation: fadeInUp 0.6s ease-out both;
}

.card:nth-child(2) { animation-delay: 0.1s; }
.card:nth-child(3) { animation-delay: 0.2s; }

.card-head {
  font-family: 'Noto Sans SC', 'PingFang SC', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  padding: 0.45rem 1rem;
  letter-spacing: 0.04em;
}

.card-head.teal  { background: linear-gradient(135deg, #14b8a6, #0d9488); }
.card-head.slate { background: linear-gradient(135deg, #475569, #334155); }

.card-inner {
  padding: 0.8rem 1.1rem;
  background: rgba(255,255,255,0.95);
}

.card-inner p {
  margin: 0;
  font-family: 'Noto Serif SC', 'Noto Sans SC', Georgia, serif;
  font-size: 0.85rem;
  color: #1a1a2e;
  line-height: 1.8;
}

/* ===== 代码块 ===== */
.code-card {
  flex: 1;
  min-height: 0;
}

.code-card .card-inner {
  flex: 1;
  padding: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.code-card pre {
  margin: 0;
  padding: 0.6rem 1rem;
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: #1e1e2e;
}

.code-card code {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.78rem;
  line-height: 1.55;
  color: #cdd6f4;
  white-space: pre;
  tab-size: 2;
}

/* ===== 动画 ===== */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
