<template>
  <div class="algo-root" :class="`theme-${theme}`">
    <!-- 沙漠主题背景 -->
    <template v-if="theme === 'desert'">
      <div class="bg-layer">
        <div class="sky"></div>
        <div class="sun"><div class="sun-glow"></div><div class="sun-core"></div></div>
        <div class="heat-wave hw-1"></div><div class="heat-wave hw-2"></div><div class="heat-wave hw-3"></div>
        <div class="dune dune-1"></div><div class="dune dune-2"></div><div class="dune dune-3"></div>
      </div>
      <div class="sand-particles">
        <span v-for="n in 14" :key="n" class="sand-grain" :style="grainStyle(n)"></span>
      </div>
    </template>

    <!-- 标准主题背景: 光球 + 网格 -->
    <template v-else>
      <div class="bg-layer">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4" v-if="theme === 'pink'"></div>
        <div class="grid-overlay" :class="{ 'hex-grid': theme === 'indigo' }"></div>
      </div>
      <div v-if="theme === 'indigo'" class="particles math-particles">
        <span v-for="n in 20" :key="n" class="particle math-p" :style="mathStyle(n)">{{ mathChar(n) }}</span>
      </div>
      <div v-if="theme === 'pink'" class="particles">
        <span v-for="n in 20" :key="n" class="particle dot-p" :style="dotStyle(n)"></span>
      </div>
    </template>

    <!-- 主内容 -->
    <div class="content">
      <div class="title-row">
        <span v-if="badge" class="badge">{{ badge }}</span>
        <h1 class="main-title">
          <span v-if="titleIcon" class="title-icon" v-html="titleIcon"></span>
          <span class="title-text">{{ title }}</span>
          <span v-if="titleSub" class="title-divider"></span>
          <span v-if="titleSub" class="title-sub">{{ titleSub }}</span>
        </h1>
        <div v-if="theme === 'indigo'" class="title-accent"></div>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      </div>

      <div class="main-grid">
        <div class="main-left">
          <slot name="left" :code="_code" :imageSrc="_imageSrc" :codeLabel="codeLabel" :imageLabel="imageLabel">
            <div class="card code-card">
              <div class="card-glow"></div>
              <div class="card-inner">
                <div class="card-label"><span class="label-dot code-dot"></span>{{ codeLabel }}</div>
                <div class="code-window">
                  <div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                  <pre><code>{{ _code }}</code></pre>
                </div>
              </div>
            </div>
          </slot>
        </div>
        <div class="main-right">
          <slot name="right" :code="_code" :imageSrc="_imageSrc" :codeLabel="codeLabel" :imageLabel="imageLabel">
            <div class="card image-card">
              <div class="card-glow"></div>
              <div class="card-inner">
                <div class="card-label"><span class="label-dot img-dot"></span>{{ imageLabel }}</div>
                <div class="img-wrap"><img :src="_imageSrc" alt="结果" /></div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  theme?: 'indigo' | 'desert' | 'orange' | 'teal' | 'purple' | 'pink'
  badge?: string
  title: string
  titleIcon?: string
  titleSub?: string
  subtitle?: string
  code?: string
  codeLabel?: string
  imageSrc?: string
  imageLabel?: string
}

const p = withDefaults(defineProps<Props>(), {
  theme: 'indigo',
  codeLabel: '核心算法',
  imageLabel: '运行结果',
})

const themeDefaults: Record<string, { code: string, imageSrc: string }> = {
  indigo: {
    code: `// 算法一
main()
{ int i, a = 1, b = 1;
  print(a, b);
  for (i = 1; i <= 10; i++)
  {  c = a + b;
     print(c);
     a = b;
     b = c;
  }
}`,
    imageSrc: '/img/ans1.png',
  },
  desert: {
    code: `main()
{ int dis, k, oil;
  dis = 500; k = 1; oil = 500;
  do
  {   print(k, 1000 - dis, oil);
      k = k + 1;
      dis = dis + 500 / (2 * k - 1);
      oil = 500 * k;
  } while(dis < 1000)
  oil = 500 * (k - 1) + (1000 - dis) * (2 * k - 1);
  print(k, 0, oil);
}`,
    imageSrc: '/img/ans5.png',
  },
  orange: {
    code: `main( )
{   int i, s;
    s = 1;
    for(i = 9; i >= 1; i = i - 1)
        s = (s + 1) * 2;
    print(s);
}`,
    imageSrc: '/img/ans3.png',
  },
  teal: {
    code: `main( )
{ float  a, b, c, d, fx;
  print("输入系数 a,b,c,d:");
  input(a,b,c,d);
  fx=f(a,b,c,d);
  printf("方程的根为：",fx);
}
float f(a,b,c,d)
 float a,b,c,d;
{ float x1=1, x0, f0, f1;
  do
   { x0=x1;
     f0=((a*x0+b)*x0+c)*x0+d;
     f1=(3*a*x0+2*b)*x0+c;
     x1=x0-f0/f1;
   } while(fabs(x1-x0)>=1e-4);
   return(x1);
}`,
    imageSrc: '/img/ans6.png',
  },
  purple: {
    code: `main()
{
  int n,i,j,a[100];
  input(n);
  print("1"); print("换行符");
  a[1] = a[2] = 1;
  print(a[1],a[2]); print("换行符");
  for(i = 3; i <= n; i = i + 1)
  {
    a[1] = a[i] = 1;
    for(j = i-1; j > 1; j--)
      a[j] = a[j] + a[j-1];
    for(j = 1; j <= i; j++)
      print(a[j]);
    print("换行符");
  }
}`,
    imageSrc: '/img/ans4.png',
  },
  pink: {
    code: `main() {
  float x, x1=0, x2=2, f1, f2, f;
  f1 = x1*x1*x1/2 + 2*x1*x1 - 8;
  f2 = x2*x2*x2/2 + 2*x2*x2 - 8;
  if (f1*f2 > 0) { printf("No root"); return; }
  do {
    x = (x1 + x2) / 2;
    f = x*x*x/2 + 2*x*x - 8;
    if (f == 0) break;
    if (f1*f > 0.0) { x1 = x; f1 = f; }
    else            { x2 = x; f2 = f; }
  } while (fabs(f) >= 1e-4);
  printf("root = %f", x);
}`,
    imageSrc: '/img/ans7.png',
  },
}

const _code = computed(() => p.code || themeDefaults[p.theme]?.code || '')
const _imageSrc = computed(() => p.imageSrc || themeDefaults[p.theme]?.imageSrc || '')

function mathChar(n: number): string {
  const chars = '∑∏∫√ΔΩ∞πλμαβγδ∈∀∃∇∂'
  return chars[n % chars.length]
}
function mathStyle(n: number) {
  return { left: `${((n * 97 + 31) % 94)}%`, animationDelay: `${(n * 0.65) % 8}s`, animationDuration: `${6 + (n % 7)}s`, fontSize: `${0.55 + (n % 5) * 0.18}rem` }
}
function grainStyle(n: number) {
  return { left: `${((n * 101 + 19) % 92)}%`, animationDelay: `${(n * 0.7) % 5}s`, animationDuration: `${3 + (n % 4)}s`, width: `${1.5 + (n % 3)}px`, height: `${1.5 + (n % 3)}px` }
}
function dotStyle(n: number) {
  return { left: `${((n * 137 + 53) % 100)}%`, animationDelay: `${(n * 0.37) % 6}s`, animationDuration: `${4 + (n % 5)}s`, width: `${2 + (n % 4)}px`, height: `${2 + (n % 4)}px` }
}
</script>

<!-- 全局样式：slot 内容可用的卡片/代码窗口/圆点类 -->
<style>
/* ===== 卡片 ===== */
.algo-root .card { position: relative; border-radius: 16px; overflow: hidden; }
.theme-desert .card { border-radius: 14px; background: rgba(30,15,5,0.4); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); }
.theme-orange .card, .theme-teal .card, .theme-purple .card { border-radius: 12px; background: rgba(255,255,255,0.04); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); }
.theme-pink .card { border-radius: 16px; background: rgba(255,255,255,0.04); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); transition: all 0.4s ease; }
.theme-pink .card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }

.algo-root .card-glow {
  position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 1;
  border: 1px solid transparent;
  background: linear-gradient(150deg, rgba(99,102,241,0.18), rgba(139,92,246,0.12), rgba(240,176,96,0.08)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
}
.theme-desert .card-glow { background: linear-gradient(160deg, rgba(251,191,36,0.2), rgba(245,158,11,0.15), rgba(217,119,6,0.1)) border-box; opacity: 0.6; }
.theme-orange .card-glow { background: linear-gradient(135deg, rgba(249,115,22,0.35), rgba(251,146,60,0.35), rgba(34,197,94,0.35)) border-box; opacity: 0.7; animation: algo-cardBorder 4s linear infinite; }
.theme-teal .card-glow { background: linear-gradient(135deg, rgba(20,184,166,0.35), rgba(34,211,238,0.35), rgba(99,102,241,0.35)) border-box; opacity: 0.7; animation: algo-cardBorder 4s linear infinite; }
.theme-purple .card-glow { background: linear-gradient(135deg, rgba(245,158,11,0.35), rgba(236,72,153,0.35), rgba(139,92,246,0.35)) border-box; opacity: 0.7; animation: algo-cardBorder 4s linear infinite; }
.theme-pink .card-glow { inset: -1px; padding: 1px; background: linear-gradient(135deg, rgba(255,45,149,0.3), rgba(0,212,255,0.3), rgba(168,85,247,0.3)); opacity: 0.6; animation: algo-cardBorder 4s linear infinite; }

@keyframes algo-cardBorder { 0%{filter:hue-rotate(0deg)} 100%{filter:hue-rotate(360deg)} }

.algo-root .card-inner { position: relative; z-index: 2; padding: 1vh 1.2vw; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; }
.theme-desert .card-inner { padding: 0.4vh 0.8vw; }
.theme-orange .card-inner, .theme-teal .card-inner, .theme-purple .card-inner { padding: 0.4vh 0.8vw; }
.theme-pink .card-inner { padding: 1.2vh 1.5vw; }

.algo-root .card-label { display: flex; align-items: center; gap: 0.3vw; font-size: 0.58rem; font-weight: 600; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.3vh; flex-shrink: 0; }
.theme-orange .card-label, .theme-teal .card-label, .theme-purple .card-label { font-size: 0.6rem; color: rgba(255,255,255,0.55); margin-bottom: 0.2vh; }
.theme-pink .card-label { gap: 0.5vw; font-size: 0.8rem; color: rgba(255,255,255,0.65); letter-spacing: 0.08em; margin-bottom: 0.8vh; }

.algo-root .label-dot { width: 5px; height: 5px; border-radius: 50%; }
.theme-pink .label-dot { width: 8px; height: 8px; animation: algo-dotPulse 2s ease-in-out infinite; }
@keyframes algo-dotPulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.8);opacity:0.5} }

.theme-indigo .label-dot { background: #6366f1; box-shadow: 0 0 6px rgba(99,102,241,0.5); }
.theme-indigo .code-dot { background: #8b5cf6; }
.theme-indigo .img-dot { background: #f0b060; }
.theme-desert .label-dot, .theme-desert .img-dot { background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.5); }
.theme-desert .code-dot { background: #f59e0b; box-shadow: 0 0 6px rgba(245,158,11,0.5); }
.theme-orange .label-dot, .theme-orange .img-dot { background: #f97316; box-shadow: 0 0 6px #f97316, 0 0 12px #f9731680; }
.theme-orange .code-dot { background: #fb923c; box-shadow: 0 0 6px #fb923c, 0 0 12px #fb923c80; }
.theme-teal .label-dot { background: #14b8a6; box-shadow: 0 0 6px #14b8a6, 0 0 12px #14b8a680; }
.theme-teal .code-dot { background: #22d3ee; box-shadow: 0 0 6px #22d3ee, 0 0 12px #22d3ee80; }
.theme-teal .img-dot { background: #6366f1; box-shadow: 0 0 6px #6366f1, 0 0 12px #6366f180; }
.theme-purple .label-dot, .theme-purple .img-dot { background: #f59e0b; box-shadow: 0 0 6px #f59e0b, 0 0 12px #f59e0b80; }
.theme-purple .code-dot { background: #ec4899; box-shadow: 0 0 6px #ec4899, 0 0 12px #ec489980; }
.theme-pink .label-dot { background: #ff2d95; box-shadow: 0 0 10px #ff2d95, 0 0 20px #ff2d9580; }
.theme-pink .code-dot { background: #00d4ff; box-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff80; }

.algo-root .algo-dot { background: #22c55e; box-shadow: 0 0 6px #22c55e, 0 0 12px #22c55e80; }
.algo-root .out-dot { background: #8b5cf6; box-shadow: 0 0 6px #8b5cf6, 0 0 12px #8b5cf680; }

/* ===== 代码窗口 ===== */
.algo-root .code-window {
  flex: 1; min-height: 0;
  display: flex; flex-direction: column;
  background: rgba(6,6,22,0.65); border-radius: 10px;
  overflow: hidden; border: 1px solid rgba(255,255,255,0.05);
}
.theme-desert .code-window { background: rgba(20,8,2,0.55); border-radius: 8px; }
.theme-orange .code-window, .theme-teal .code-window, .theme-purple .code-window { background: rgba(0,0,0,0.5); border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); }
.theme-pink .code-window { background: rgba(0,0,0,0.5); border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); }

.algo-root .code-dots {
  display: flex; gap: 6px; padding: 5px 12px;
  background: rgba(255,255,255,0.018); border-bottom: 1px solid rgba(255,255,255,0.04); flex-shrink: 0;
}
.theme-desert .code-dots { gap: 5px; padding: 3px 10px; background: rgba(255,255,255,0.02); border-bottom: 1px solid rgba(255,255,255,0.03); }
.theme-orange .code-dots, .theme-teal .code-dots, .theme-purple .code-dots { gap: 5px; padding: 4px 10px; background: rgba(255,255,255,0.03); }
.theme-pink .code-dots { gap: 8px; padding: 10px 14px; background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.05); }

.algo-root .dot { border-radius: 50%; flex-shrink: 0; }
.theme-indigo .dot { width: 7px; height: 7px; }
.theme-desert .dot { width: 6px; height: 6px; }
.theme-orange .dot, .theme-teal .dot, .theme-purple .dot { width: 7px; height: 7px; }
.theme-pink .dot { width: 10px; height: 10px; }

.algo-root .dot.red    { background: #ff5f57; box-shadow: 0 0 3px rgba(255,95,87,0.4); }
.algo-root .dot.yellow { background: #febc2e; box-shadow: 0 0 3px rgba(254,188,46,0.4); }
.algo-root .dot.green  { background: #28c840; box-shadow: 0 0 3px rgba(40,200,64,0.4); }
.theme-desert .dot { box-shadow: none; }

.algo-root .code-window pre { flex: 1; margin: 0; padding: 0.6vh 1vw; overflow: auto; min-height: 0; }
.theme-desert .code-window pre { padding: 0.3vh 0.8vw; }
.theme-orange .code-window pre, .theme-teal .code-window pre, .theme-purple .code-window pre { padding: 0.3vh 0.8vw; }
.theme-pink .code-window pre { padding: 0.8vh 1.2vw; }

.algo-root .code-window pre::-webkit-scrollbar { width: 3px; height: 3px; }
.theme-desert .code-window pre::-webkit-scrollbar { width: 4px; height: 4px; }
.theme-orange .code-window pre::-webkit-scrollbar, .theme-teal .code-window pre::-webkit-scrollbar, .theme-purple .code-window pre::-webkit-scrollbar { width: 5px; height: 5px; }
.algo-root .code-window pre::-webkit-scrollbar-track { background: transparent; }
.theme-desert .code-window pre::-webkit-scrollbar-track, .theme-orange .code-window pre::-webkit-scrollbar-track, .theme-teal .code-window pre::-webkit-scrollbar-track, .theme-purple .code-window pre::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 2px; }
.algo-root .code-window pre::-webkit-scrollbar-thumb { border-radius: 2px; }
.theme-indigo .code-window pre::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #6366f1, #8b5cf6); }
.theme-desert .code-window pre::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #f59e0b, #d97706); }
.theme-orange .code-window pre::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #f97316, #22c55e); }
.theme-teal .code-window pre::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #14b8a6, #6366f1); }
.theme-purple .code-window pre::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #ec4899, #8b5cf6); }
.algo-root .code-window pre::-webkit-scrollbar-corner { background: transparent; }

.algo-root .code-window code {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.62rem; line-height: 1.5; color: #c9d1d9; white-space: pre; tab-size: 2;
}
.theme-desert .code-window code { font-size: 0.52rem; line-height: 1.4; color: #e2d8c8; }
.theme-orange .code-window code, .theme-teal .code-window code, .theme-purple .code-window code { font-size: 0.55rem; line-height: 1.45; }
.theme-pink .code-window code { font-size: 0.68rem; line-height: 1.6; }

/* ===== 图片 ===== */
.algo-root .img-wrap { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; }
.theme-pink .img-wrap { align-items: flex-start; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.2vh; }
.algo-root .img-wrap img { max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 6px; }
.theme-pink .img-wrap img { max-height: 70%; max-width: 70%; border-radius: 8px; box-shadow: 0 0 20px rgba(168,85,247,0.2); filter: drop-shadow(0 0 8px rgba(168,85,247,0.3)); }

/* ===== 内容工具类 (slot 可用) ===== */
.algo-root .problem-text { margin: 0; font-size: 0.72rem; color: rgba(255,255,255,0.85); line-height: 1.55; text-align: center; }
.algo-root .problem-text strong { color: #fb923c; font-weight: 700; }

.algo-root .formula-row { display: flex; align-items: center; gap: 0.5vw; margin-bottom: 0.25vh; }
.algo-root .formula-tag { flex-shrink: 0; font-size: 0.55rem; font-weight: 700; color: #fb923c; background: rgba(249,115,22,0.15); padding: 0.1em 0.5em; border-radius: 6px; letter-spacing: 0.03em; }
.algo-root .formula-katex { flex: 1; text-align: center; }

.algo-root .step-flow { display: flex; gap: 0.3vw; margin-top: 0.3vh; flex-wrap: wrap; justify-content: center; }
.algo-root .step-flow .step { display: flex; flex-direction: column; align-items: center; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25); border-radius: 8px; padding: 0.15vh 0.4vw; min-width: 2.8vw; }
.algo-root .step-flow .step-num { font-size: 0.5rem; font-weight: 700; color: #22c55e; }
.algo-root .step-flow .step-desc { font-size: 0.48rem; color: rgba(255,255,255,0.65); white-space: nowrap; }

.algo-root .equation-box { text-align: center; padding: 0; }
.algo-root .eq-term { font-size: 1rem; font-weight: 900; color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.4); }
.algo-root .eq-sup { font-size: 0.6rem; font-weight: 700; color: #22d3ee; text-shadow: 0 0 6px rgba(34,211,238,0.5); vertical-align: super; }
.algo-root .eq-op { font-size: 0.85rem; font-weight: 300; color: rgba(255,255,255,0.45); }
.algo-root .eq-desc { font-size: 0.6rem; color: rgba(255,255,255,0.35); text-align: center; margin-top: 0.2vh; }

.algo-root .output-text { margin: 0; font-family: 'JetBrains Mono','Fira Code',monospace; font-size: 0.62rem; color: #e2e8f0; line-height: 1.35; text-align: center; }

.theme-pink .eq-term { font-size: 1.6rem; }
.theme-pink .eq-sup { font-size: 0.9rem; color: #ff6bcb; text-shadow: 0 0 10px rgba(255,107,203,0.6); }
.theme-pink .eq-op { font-size: 1.3rem; }
.theme-pink .eq-desc { font-size: 0.78rem; color: rgba(255,255,255,0.4); letter-spacing: 0.04em; margin-top: 0.5vh; margin-bottom: 1vh; }

/* ===== 入场动画 ===== */
.theme-indigo .code-card  { animation: algo-cardReveal 0.55s ease-out 0.1s both; }
.theme-indigo .image-card { animation: algo-cardReveal 0.55s ease-out 0.25s both; }
.theme-desert .code-card  { animation: algo-cardIn 0.5s ease-out 0.15s both; }
.theme-desert .image-card { animation: algo-cardIn 0.5s ease-out 0.3s both; }
@keyframes algo-cardReveal { 0%{transform:translateY(18px);opacity:0} 100%{transform:translateY(0);opacity:1} }
@keyframes algo-cardIn { 0%{transform:translateY(15px);opacity:0} 100%{transform:translateY(0);opacity:1} }
</style>

<!-- 组件内部结构样式 -->
<style scoped>
.algo-root {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;
  font-family: 'Inter', 'Noto Sans SC', system-ui, -apple-system, sans-serif;
}

/* ===== 背景层 ===== */
.bg-layer { position: absolute; inset: 0; z-index: 0; }
.theme-indigo  .bg-layer { background: linear-gradient(155deg, #060617 0%, #0b0a26 30%, #09091e 55%, #050516 85%, #0a0920 100%); }
.theme-orange  .bg-layer { background: linear-gradient(135deg, #1a0a08 0%, #1a120e 30%, #0d1a10 60%, #1a0a08 100%); }
.theme-teal    .bg-layer { background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 30%, #0f0020 60%, #0a0a1a 100%); }
.theme-purple  .bg-layer { background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 30%, #0f0020 60%, #0a0a1a 100%); }
.theme-pink    .bg-layer { background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 30%, #0f0020 60%, #0a0a1a 100%); }

.orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; }
.orb-1 { width: 45vw; height: 45vw; top: -15%; left: -10%; animation: orbFloat1 8s ease-in-out infinite; }
.orb-2 { width: 35vw; height: 35vw; top: 40%; right: -8%; animation: orbFloat2 10s ease-in-out infinite; }
.orb-3 { width: 30vw; height: 30vw; bottom: -12%; left: 25%; animation: orbFloat3 9s ease-in-out infinite; }

.theme-indigo .orb-1 { width: 42vw; height: 42vw; top: -12%; right: -6%; left: auto; background: radial-gradient(circle, #6366f1 0%, #6366f130 45%, transparent 70%); opacity: 0.28; }
.theme-indigo .orb-2 { width: 38vw; height: 38vw; bottom: -14%; left: -8%; top: auto; right: auto; background: radial-gradient(circle, #8b5cf6 0%, #8b5cf625 45%, transparent 70%); opacity: 0.28; }
.theme-indigo .orb-3 { width: 28vw; height: 28vw; top: 35%; left: 38%; background: radial-gradient(circle, #f0b060 0%, #f0b06018 45%, transparent 70%); opacity: 0.14; }
.theme-orange .orb-1 { background: radial-gradient(circle, #f97316 0%, #ea580c50 40%, transparent 70%); }
.theme-orange .orb-2 { background: radial-gradient(circle, #fb923c 0%, #f9731660 40%, transparent 70%); }
.theme-orange .orb-3 { background: radial-gradient(circle, #22c55e 0%, #16a34a40 40%, transparent 70%); }
.theme-teal .orb-1 { background: radial-gradient(circle, #ff2d95 0%, #ff005580 40%, transparent 70%); }
.theme-teal .orb-2 { background: radial-gradient(circle, #00d4ff 0%, #0066ff60 40%, transparent 70%); }
.theme-teal .orb-3 { background: radial-gradient(circle, #a855f7 0%, #7c3aed50 40%, transparent 70%); }
.theme-purple .orb-1 { background: radial-gradient(circle, #f59e0b 0%, #d9770640 40%, transparent 70%); }
.theme-purple .orb-2 { background: radial-gradient(circle, #8b5cf6 0%, #7c3aed50 40%, transparent 70%); }
.theme-purple .orb-3 { background: radial-gradient(circle, #ec4899 0%, #db277750 40%, transparent 70%); }
.theme-pink .orb-1 { background: radial-gradient(circle, #ff2d95 0%, #ff005580 40%, transparent 70%); opacity: 0.55; }
.theme-pink .orb-2 { background: radial-gradient(circle, #00d4ff 0%, #0066ff60 40%, transparent 70%); opacity: 0.55; }
.theme-pink .orb-3 { background: radial-gradient(circle, #a855f7 0%, #7c3aed50 40%, transparent 70%); opacity: 0.55; }
.theme-pink .orb-4 { width: 25vw; height: 25vw; top: 10%; right: 30%; border-radius: 50%; filter: blur(80px); position: absolute; background: radial-gradient(circle, #f59e0b 0%, #d9770640 40%, transparent 70%); animation: orbFloat4 7s ease-in-out infinite; opacity: 0.55; }

@keyframes orbFloat1 { 0%,100%{transform:translate(0,0) scale(1)} 25%{transform:translate(5vw,8vh) scale(1.1)} 50%{transform:translate(-3vw,12vh) scale(0.9)} 75%{transform:translate(6vw,-4vh) scale(1.05)} }
@keyframes orbFloat2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-8vw,-6vh) scale(1.15)} 66%{transform:translate(-3vw,10vh) scale(0.85)} }
@keyframes orbFloat3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(5vw,-10vh) scale(1.2)} }
@keyframes orbFloat4 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-6vw,-8vh) scale(1.1)} }

.theme-indigo .orb-1 { animation: orbFloat1i 13s ease-in-out infinite; }
.theme-indigo .orb-2 { animation: orbFloat2i 15s ease-in-out infinite; }
.theme-indigo .orb-3 { animation: orbFloat3i 11s ease-in-out infinite; }
@keyframes orbFloat1i { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-4vw,5vh) scale(1.12)} 66%{transform:translate(3vw,-3vh) scale(0.92)} }
@keyframes orbFloat2i { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(5vw,-5vh) scale(1.15)} }
@keyframes orbFloat3i { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-2vw,-3vh) scale(1.08)} 66%{transform:translate(3vw,2vh) scale(0.9)} }

.grid-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 3vw 3vw;
}
.grid-overlay.hex-grid {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 15v22l-30 15-30-15V15z' fill='none' stroke='rgba(99,102,241,0.045)' stroke-width='0.6'/%3E%3C/svg%3E");
  background-size: 60px 52px; animation: hexDrift 28s linear infinite;
}
@keyframes hexDrift { 0%{background-position:0 0} 100%{background-position:120px 104px} }

/* ===== 沙漠背景 ===== */
.sky { position: absolute; inset: 0; background: linear-gradient(180deg, #1a0f06 0%, #2d1810 20%, #4a2520 40%, #7a4a2e 60%, #b8753e 80%, #d4995a 100%); }
.sun { position: absolute; top: 8%; left: 50%; transform: translateX(-50%); }
.sun-glow { width: 18vw; height: 18vw; margin-left: -9vw; border-radius: 50%; background: radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(251,146,60,0.15) 30%, rgba(249,115,22,0.05) 60%, transparent 70%); animation: sunPulse 3s ease-in-out infinite; }
.sun-core { position: absolute; top: 50%; left: 50%; width: 6vw; height: 6vw; margin: -3vw 0 0 -3vw; border-radius: 50%; background: radial-gradient(circle, #fef3c7 0%, #fbbf24 40%, #f59e0b 80%, transparent 100%); box-shadow: 0 0 40px rgba(251,191,36,0.5), 0 0 80px rgba(245,158,11,0.25); animation: sunCore 3s ease-in-out infinite; }
@keyframes sunPulse { 0%,100%{transform:scale(1);opacity:0.7} 50%{transform:scale(1.08);opacity:1} }
@keyframes sunCore { 0%,100%{box-shadow:0 0 40px rgba(251,191,36,0.5),0 0 80px rgba(245,158,11,0.25)} 50%{box-shadow:0 0 55px rgba(251,191,36,0.7),0 0 100px rgba(245,158,11,0.4)} }

.heat-wave { position: absolute; top: 12%; width: 100%; height: 60px; background: repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.015) 30px, rgba(255,255,255,0.015) 31px); animation: heatShimmer 4s ease-in-out infinite; opacity: 0.5; }
.hw-1 { top: 14%; animation-delay: 0s; } .hw-2 { top: 18%; animation-delay: -1.3s; height: 40px; } .hw-3 { top: 22%; animation-delay: -2.7s; height: 50px; }
@keyframes heatShimmer { 0%,100%{transform:translateX(0);opacity:0.3} 50%{transform:translateX(15px);opacity:0.6} }

.dune { position: absolute; bottom: 0; width: 100%; border-radius: 100% 100% 0 0; }
.dune-1 { height: 18vh; bottom: 0; left: -10%; width: 60%; background: linear-gradient(180deg, #c88a4a 0%, #8b5e34 40%, #5c3a20 100%); animation: duneShift 12s ease-in-out infinite; }
.dune-2 { height: 12vh; bottom: 0; right: -15%; width: 50%; background: linear-gradient(180deg, #d49a58 0%, #a0703c 40%, #6b4425 100%); animation: duneShift 14s ease-in-out infinite reverse; }
.dune-3 { height: 8vh; bottom: 0; left: 30%; width: 40%; background: linear-gradient(180deg, #b8803e 0%, #7a4e2a 40%, #4a2818 100%); animation: duneShift 10s ease-in-out infinite; }
@keyframes duneShift { 0%,100%{transform:translateX(0)} 50%{transform:translateX(15px)} }

/* ===== 粒子 ===== */
.particles { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.particle { position: absolute; top: -16px; animation: particleFall linear infinite; }
.math-p { color: rgba(129,140,248,0.22); font-family: 'JetBrains Mono','Fira Code','Noto Serif SC',serif; font-weight: 300; text-shadow: 0 0 6px rgba(99,102,241,0.15); }
.math-p:nth-child(odd)  { color: rgba(139,92,246,0.2); }
.math-p:nth-child(even) { color: rgba(99,102,241,0.18); }
.math-p:nth-child(3n)   { color: rgba(240,176,96,0.16); }
.dot-p { bottom: -10px; top: auto; border-radius: 50%; animation: particleRise linear infinite; background: rgba(255,255,255,0.5); }
.dot-p:nth-child(odd)  { background: rgba(180,200,255,0.5); box-shadow: 0 0 4px rgba(100,150,255,0.6); }
.dot-p:nth-child(even) { background: rgba(255,180,220,0.5); box-shadow: 0 0 4px rgba(255,100,180,0.6); }
.sand-particles { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.sand-grain { position: absolute; bottom: -5px; border-radius: 50%; background: rgba(245,200,130,0.5); animation: sandFloat linear infinite; box-shadow: 0 0 3px rgba(245,180,100,0.3); }

@keyframes particleFall { 0%{transform:translateY(-8vh) rotate(0deg);opacity:0} 6%{opacity:1} 88%{opacity:0.5} 100%{transform:translateY(112vh) rotate(200deg);opacity:0} }
@keyframes particleRise { 0%{transform:translateY(0) scale(1);opacity:0} 5%{opacity:1} 90%{opacity:0.6} 100%{transform:translateY(-105vh) scale(0.3);opacity:0} }
@keyframes sandFloat { 0%{transform:translateY(0) translateX(0);opacity:0} 8%{opacity:0.6} 85%{opacity:0.2} 100%{transform:translateY(-100vh) translateX(8px);opacity:0} }

/* ===== 主内容 ===== */
.content { position: relative; z-index: 2; height: 100%; width: 100%; display: flex; flex-direction: column; padding: 1.8vh 2.5vw; box-sizing: border-box; }
.theme-desert .content { padding: 0.8vh 2.5vw; }
.theme-pink .content { padding: 2vh 3.5vw; gap: 1vh; }

/* ===== 标题行 ===== */
.title-row { text-align: center; flex-shrink: 0; padding-bottom: 1vh; animation: titleIn 0.6s ease-out both; }
.theme-desert .title-row { padding-bottom: 0; }
.theme-orange .title-row, .theme-teal .title-row, .theme-purple .title-row { padding-bottom: 0.2vh; }
.theme-pink .title-row { padding-bottom: 0; }

@keyframes titleIn { 0%{transform:translateY(-22px);opacity:0} 100%{transform:translateY(0);opacity:1} }
.theme-desert .title-row { animation-name: titleInDesert; }
@keyframes titleInDesert { 0%{transform:translateY(-20px);opacity:0} 100%{transform:translateY(0);opacity:1} }

.badge { display: inline-block; color: #fff; font-size: 0.55rem; font-weight: 800; padding: 0.08em 0.7em; border-radius: 12px; letter-spacing: 0.06em; margin-bottom: 0.4vh; }
.theme-indigo .badge { background: linear-gradient(135deg, #6366f1, #8b5cf6); box-shadow: 0 0 14px rgba(99,102,241,0.35); }
.theme-desert .badge { background: linear-gradient(135deg, #f59e0b, #d97706); color: #1a0f06; font-size: 0.5rem; padding: 0.05em 0.6em; border-radius: 10px; letter-spacing: 0.04em; margin-bottom: 0.2vh; box-shadow: 0 0 10px rgba(245,158,11,0.4); }
.theme-orange .badge { background: linear-gradient(135deg, #f97316, #ea580c); font-size: 0.55rem; font-weight: 700; padding: 0.05em 0.6em; border-radius: 10px; letter-spacing: 0.04em; margin-bottom: 0.1vh; box-shadow: 0 0 10px rgba(249,115,22,0.4); }
.theme-teal .badge { background: linear-gradient(135deg, #14b8a6, #0d9488); font-size: 0.55rem; font-weight: 700; padding: 0.05em 0.6em; border-radius: 10px; letter-spacing: 0.04em; margin-bottom: 0.1vh; box-shadow: 0 0 10px rgba(20,184,166,0.4); }
.theme-purple .badge { background: linear-gradient(135deg, #8b5cf6, #7c3aed); font-size: 0.55rem; font-weight: 700; padding: 0.05em 0.6em; border-radius: 10px; letter-spacing: 0.04em; margin-bottom: 0.1vh; box-shadow: 0 0 10px rgba(139,92,246,0.4); }
.theme-pink .badge { display: none; }

.main-title { display: flex; align-items: center; justify-content: center; gap: 0.8vw; margin: 0; }
.theme-indigo .main-title { display: block; }
.theme-desert .main-title { gap: 0.5vw; }
.title-icon { font-size: 1.2rem; }

.title-text { font-size: 2rem; font-weight: 900; color: #fff; letter-spacing: 0.1em; text-shadow: 0 0 40px rgba(139,92,246,0.3); }
.theme-desert .title-text { font-size: 1.5rem; letter-spacing: 0.08em; background: linear-gradient(180deg, #fef3c7 0%, #fbbf24 40%, #f59e0b 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; text-shadow: none; filter: drop-shadow(0 0 10px rgba(251,191,36,0.3)); }
.theme-orange .title-text { font-size: 1.35rem; background: linear-gradient(135deg, #fb923c, #f97316, #22c55e); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 12px rgba(249,115,22,0.5)); animation: titlePulse 3s ease-in-out infinite; }
.theme-teal .title-text { font-size: 1.35rem; background: linear-gradient(135deg, #14b8a6, #22d3ee, #6366f1); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 12px rgba(20,184,166,0.5)); animation: titlePulse 3s ease-in-out infinite; }
.theme-purple .title-text { font-size: 1.35rem; background: linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 12px rgba(245,158,11,0.5)); animation: titlePulse 3s ease-in-out infinite; }
.theme-pink .title-text { font-size: 2.2rem; background: linear-gradient(135deg, #ff6bcb, #ff2d95, #f97316); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 18px rgba(255,45,149,0.5)); animation: titlePulse 3s ease-in-out infinite; }
@keyframes titlePulse { 0%,100%{filter:drop-shadow(0 0 12px currentColor)} 50%{filter:drop-shadow(0 0 22px currentColor)} }

.title-sub { font-size: 0.9rem; font-weight: 700; color: rgba(255,255,255,0.85); }
.theme-orange .title-sub { text-shadow: 0 0 14px rgba(34,197,94,0.3); }
.theme-teal .title-sub { text-shadow: 0 0 14px rgba(34,211,238,0.4); }
.theme-purple .title-sub { text-shadow: 0 0 14px rgba(139,92,246,0.4); }
.theme-pink .title-sub { font-size: 1.4rem; color: rgba(255,255,255,0.9); text-shadow: 0 0 20px rgba(0,212,255,0.4); animation: subGlow 2.5s ease-in-out infinite alternate; }
@keyframes subGlow { 0%{text-shadow:0 0 20px rgba(0,212,255,0.3)} 100%{text-shadow:0 0 35px rgba(0,212,255,0.7)} }

.title-divider { width: 2px; height: 1rem; border-radius: 1px; }
.theme-orange .title-divider { background: linear-gradient(180deg, #f97316, #22c55e); }
.theme-teal .title-divider { background: linear-gradient(180deg, #14b8a6, #6366f1); }
.theme-purple .title-divider { background: linear-gradient(180deg, #f59e0b, #8b5cf6); }
.theme-pink .title-divider { width: 3px; height: 2rem; background: linear-gradient(180deg, #ff2d95, #00d4ff); animation: dividerSpin 4s linear infinite; }
@keyframes dividerSpin { 0%{filter:hue-rotate(0deg)} 100%{filter:hue-rotate(360deg)} }

.title-accent { width: 28%; height: 2px; margin: 0.4vh auto 0; background: linear-gradient(90deg, transparent, #818cf8, #a78bfa, #f0b060, transparent); border-radius: 1px; animation: accentExpand 0.7s ease-out 0.2s both; }
@keyframes accentExpand { 0%{width:0;opacity:0} 100%{width:28%;opacity:1} }

.subtitle { margin: 0.4vh 0 0; font-size: 0.65rem; font-weight: 400; color: rgba(255,255,255,0.45); letter-spacing: 0.08em; }
.theme-desert .subtitle { margin: 0.2vh 0 0; color: rgba(245,200,140,0.55); }

/* ===== 双栏 ===== */
.main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.8vw; flex: 1; min-height: 0; }
.theme-desert .main-grid { gap: 1vw; padding-top: 0.3vh; }
.theme-orange .main-grid, .theme-teal .main-grid, .theme-purple .main-grid { gap: 1vw; }
.theme-pink .main-grid { gap: 1.5vw; }

.main-left, .main-right { display: flex; flex-direction: column; gap: 0.6vh; min-height: 0; }
.theme-indigo .main-left, .theme-indigo .main-right { gap: 0; }
.theme-desert .main-left, .theme-desert .main-right { gap: 0; }
.theme-orange .main-left, .theme-orange .main-right, .theme-purple .main-left, .theme-purple .main-right { gap: 0.5vh; }
</style>
