import{H as e,S as t,T as n,V as r,bt as i,g as a,h as o,p as s,v as c,vt as l,x as u,xt as d,y as f,z as p}from"./modules/shiki-6zKt31MM.js";import{mt as m,tt as h}from"./index-DcA2QAo4.js";var g={class:`sand-particles`},_={class:`bg-layer`},v={key:0,class:`orb orb-4`},y={key:0,class:`particles math-particles`},b={key:1,class:`particles`},x={class:`content`},S={class:`title-row`},C={key:0,class:`badge`},w={class:`main-title`},T=[`innerHTML`],E={class:`title-text`},D={key:1,class:`title-divider`},O={key:2,class:`title-sub`},k={key:1,class:`title-accent`},A={key:2,class:`subtitle`},j={class:`main-grid`},M={class:`main-left`},N={class:`card code-card`},P={class:`card-inner`},F={class:`card-label`},I={class:`code-window`},L={class:`main-right`},R={class:`card image-card`},z={class:`card-inner`},B={class:`card-label`},V={class:`img-wrap`},H=[`src`],U=m(n({__name:`AlgorithmSlide`,props:{theme:{default:`indigo`},badge:{},title:{},titleIcon:{},titleSub:{},subtitle:{},code:{},codeLabel:{default:`核心算法`},imageSrc:{},imageLabel:{default:`运行结果`}},setup(n){let{$slidev:m,$nav:U,$clicksContext:ee,$clicks:te,$page:ne,$renderContext:W,$frontmatter:G}=h(),K=n,q={indigo:{code:`// 算法一
main()
{ int i, a = 1, b = 1;
  print(a, b);
  for (i = 1; i <= 10; i++)
  {  c = a + b;
     print(c);
     a = b;
     b = c;
  }
}`,imageSrc:`/img/ans1.png`},desert:{code:`main()
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
}`,imageSrc:`/img/ans5.png`},orange:{code:`main( )
{   int i, s;
    s = 1;
    for(i = 9; i >= 1; i = i - 1)
        s = (s + 1) * 2;
    print(s);
}`,imageSrc:`/img/ans3.png`},teal:{code:`main( )
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
}`,imageSrc:`/img/ans6.png`},purple:{code:`main()
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
}`,imageSrc:`/img/ans4.png`},pink:{code:`main() {
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
}`,imageSrc:`/img/ans7.png`}},J=o(()=>K.code||q[K.theme]?.code||``),Y=o(()=>K.imageSrc||q[K.theme]?.imageSrc||``);function X(e){return`∑∏∫√ΔΩ∞πλμαβγδ∈∀∃∇∂`[e%19]}function Z(e){return{left:`${(e*97+31)%94}%`,animationDelay:`${e*.65%8}s`,animationDuration:`${6+e%7}s`,fontSize:`${.55+e%5*.18}rem`}}function Q(e){return{left:`${(e*101+19)%92}%`,animationDelay:`${e*.7%5}s`,animationDuration:`${3+e%4}s`,width:`${1.5+e%3}px`,height:`${1.5+e%3}px`}}function $(e){return{left:`${(e*137+53)%100}%`,animationDelay:`${e*.37%6}s`,animationDuration:`${4+e%5}s`,width:`${2+e%4}px`,height:`${2+e%4}px`}}return(o,m)=>(p(),f(`div`,{class:l([`algo-root`,`theme-${n.theme}`])},[n.theme===`desert`?(p(),f(s,{key:0},[m[0]||=u(`<div class="bg-layer" data-v-8c5ebc47><div class="sky" data-v-8c5ebc47></div><div class="sun" data-v-8c5ebc47><div class="sun-glow" data-v-8c5ebc47></div><div class="sun-core" data-v-8c5ebc47></div></div><div class="heat-wave hw-1" data-v-8c5ebc47></div><div class="heat-wave hw-2" data-v-8c5ebc47></div><div class="heat-wave hw-3" data-v-8c5ebc47></div><div class="dune dune-1" data-v-8c5ebc47></div><div class="dune dune-2" data-v-8c5ebc47></div><div class="dune dune-3" data-v-8c5ebc47></div></div>`,1),a(`div`,g,[(p(),f(s,null,r(14,e=>a(`span`,{key:e,class:`sand-grain`,style:i(Q(e))},null,4)),64))])],64)):(p(),f(s,{key:1},[a(`div`,_,[m[1]||=a(`div`,{class:`orb orb-1`},null,-1),m[2]||=a(`div`,{class:`orb orb-2`},null,-1),m[3]||=a(`div`,{class:`orb orb-3`},null,-1),n.theme===`pink`?(p(),f(`div`,v)):c(``,!0),a(`div`,{class:l([`grid-overlay`,{"hex-grid":n.theme===`indigo`}])},null,2)]),n.theme===`indigo`?(p(),f(`div`,y,[(p(),f(s,null,r(20,e=>a(`span`,{key:e,class:`particle math-p`,style:i(Z(e))},d(X(e)),5)),64))])):c(``,!0),n.theme===`pink`?(p(),f(`div`,b,[(p(),f(s,null,r(20,e=>a(`span`,{key:e,class:`particle dot-p`,style:i($(e))},null,4)),64))])):c(``,!0)],64)),a(`div`,x,[a(`div`,S,[n.badge?(p(),f(`span`,C,d(n.badge),1)):c(``,!0),a(`h1`,w,[n.titleIcon?(p(),f(`span`,{key:0,class:`title-icon`,innerHTML:n.titleIcon},null,8,T)):c(``,!0),a(`span`,E,d(n.title),1),n.titleSub?(p(),f(`span`,D)):c(``,!0),n.titleSub?(p(),f(`span`,O,d(n.titleSub),1)):c(``,!0)]),n.theme===`indigo`?(p(),f(`div`,k)):c(``,!0),n.subtitle?(p(),f(`p`,A,d(n.subtitle),1)):c(``,!0)]),a(`div`,j,[a(`div`,M,[e(o.$slots,`left`,{code:J.value,imageSrc:Y.value,codeLabel:n.codeLabel,imageLabel:n.imageLabel},()=>[a(`div`,N,[m[6]||=a(`div`,{class:`card-glow`},null,-1),a(`div`,P,[a(`div`,F,[m[4]||=a(`span`,{class:`label-dot code-dot`},null,-1),t(d(n.codeLabel),1)]),a(`div`,I,[m[5]||=a(`div`,{class:`code-dots`},[a(`span`,{class:`dot red`}),a(`span`,{class:`dot yellow`}),a(`span`,{class:`dot green`})],-1),a(`pre`,null,[a(`code`,null,d(J.value),1)])])])])],!0)]),a(`div`,L,[e(o.$slots,`right`,{code:J.value,imageSrc:Y.value,codeLabel:n.codeLabel,imageLabel:n.imageLabel},()=>[a(`div`,R,[m[8]||=a(`div`,{class:`card-glow`},null,-1),a(`div`,z,[a(`div`,B,[m[7]||=a(`span`,{class:`label-dot img-dot`},null,-1),t(d(n.imageLabel),1)]),a(`div`,V,[a(`img`,{src:Y.value,alt:`结果`},null,8,H)])])])],!0)])])])],2))}}),[[`__scopeId`,`data-v-8c5ebc47`]]);export{U as t};