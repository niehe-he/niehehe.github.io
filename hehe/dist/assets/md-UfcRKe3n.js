import{C as e,D as t,Q as n,_ as r,_t as i,x as a,y as o,yt as s,z as c}from"./modules/shiki-6zKt31MM.js";import{et as l,mt as u,tt as d}from"./index-DcA2QAo4.js";import{t as f}from"./slidev/default--uA3WaJ5.js";var p={class:`iter-slide`},m=u({__name:`IterEquationSlide`,setup(e){let{$slidev:t,$nav:n,$clicksContext:r,$clicks:i,$page:s,$renderContext:l,$frontmatter:u}=d();return(e,t)=>(c(),o(`div`,p,[...t[0]||=[a(`<div class="header-row" data-v-1ac30b8c><span class="badge" data-v-1ac30b8c>4.1.3</span><h1 data-v-1ac30b8c>迭代法解方程</h1></div><div class="card" data-v-1ac30b8c><div class="card-head teal" data-v-1ac30b8c>例1迭代法求方程组根</div><div class="card-inner" data-v-1ac30b8c><p data-v-1ac30b8c>算法说明：方法组解的初值X = （X1,X2,...,Xn-1）<br data-v-1ac30b8c>迭代关系方程组为：xi=gi(X)(i=0,1,…,n-1),w为解的精度,</p></div></div><div class="card code-card" data-v-1ac30b8c><div class="card-head slate" data-v-1ac30b8c>算法实现</div><div class="card-inner" data-v-1ac30b8c><pre data-v-1ac30b8c><code data-v-1ac30b8c>for (i=0;i&lt;n;i++)  x[i]=初始近似根;
do
{   k=k+1;
    for(i=0;i&lt;n;i++)      y[i]=x[i];
     for(i=0;i&lt;n;i++)        x[i]=gi(X);
     for (i=0;i&lt;n;i++)   c=c+fabs(y[i]-x[i])；
 } while (c&gt;w  and k&lt;maxn )；
 for (i=0;i&lt;n;i++)
 print(i，&quot;变量的近似根是&quot;，x[i])；</code></pre></div></div>`,3)]]))}},[[`__scopeId`,`data-v-1ac30b8c`]]),h={__name:`slides.md__slidev_18`,setup(a){let{$slidev:o,$nav:u,$clicksContext:p,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=d();return p.setup(),(a,o)=>{let u=m;return c(),r(f,s(t(i(l)(i(v),17))),{default:n(()=>[e(u)]),_:1},16)}}};export{h as default};