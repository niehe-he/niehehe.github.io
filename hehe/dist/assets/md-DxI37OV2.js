import{C as e,D as t,Q as n,S as r,T as i,V as a,_ as o,_t as s,b as c,g as l,p as u,v as d,xt as f,y as p,yt as m,z as h}from"./modules/shiki-6zKt31MM.js";import{et as g,mt as _,tt as v}from"./index-DcA2QAo4.js";import{t as y}from"./slidev/image-C1PorhbW.js";import{t as b}from"./Card-DpL2n46O.js";import{t as x}from"./CodePanel-Ba5TZU7Z.js";var S={class:`glass-root`},C={class:`top-row`},w={class:`glass-header`},T={key:0},E={class:`bottom-row`},D=[`src`,`alt`],O=_(i({__name:`GlassSlide`,props:{title:{},subtitle:{},points:{default:()=>[]},code:{},codeTitle:{default:`C 实现`},imageSrc:{},imageAlt:{default:`示意图`}},setup(t){let{$slidev:i,$nav:s,$clicksContext:m,$clicks:g,$page:_,$renderContext:y,$frontmatter:O}=v();return(i,s)=>{let m=b,g=x;return h(),p(`div`,S,[l(`div`,C,[l(`div`,w,[l(`h1`,null,f(t.title),1),t.subtitle?(h(),p(`h2`,T,f(t.subtitle),1)):d(``,!0)]),t.points.length?(h(),o(m,{key:0,variant:`blue`,class:`key-card`},{default:n(()=>[l(`ul`,null,[(h(!0),p(u,null,a(t.points,e=>(h(),p(`li`,{key:e.label},[l(`b`,null,f(e.label),1),r(`：`+f(e.text),1)]))),128))])]),_:1})):d(``,!0)]),l(`div`,E,[e(g,{code:t.code,title:t.codeTitle},c({_:2},[t.imageSrc?{name:`image`,fn:n(()=>[l(`img`,{src:t.imageSrc,alt:t.imageAlt},null,8,D)]),key:`0`}:void 0]),1032,[`code`,`title`])])])}}}),[[`__scopeId`,`data-v-a3e86009`]]),k=`main()
{ int a, b;
  input(a,b);
  if(b=0)
  {   print("data error");
      return;
  }
  else
  {    c = a mod b;
       while c<>0
       {   a=b;b=c;
           c=a mod b;
       }
  }
  print(b);
}`,A={__name:`slides.md__slidev_9`,setup(r){let{$slidev:i,$nav:a,$clicksContext:c,$clicks:l,$page:u,$renderContext:d,$frontmatter:f}=v();c.setup();let p=[{label:`算法思路`,text:`短除法 / 辗转相除法`},{label:`数学模型`,text:`gcd(m,n) = gcd(n, m mod n)`},{label:`不变式`,text:`c = a mod b，a = b，b = c`}];return(r,i)=>{let a=O;return h(),o(y,m(t(s(g)(s(f),8))),{default:n(()=>[e(a,{title:`递推法`,subtitle:`例2：求两个整数的最大公约数`,points:p,code:k,codeTitle:`C 实现`,imageSrc:`./img/ans2.png`})]),_:1},16)}}};export{A as default};