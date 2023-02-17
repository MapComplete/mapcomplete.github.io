var p=Object.defineProperty;var m=(o,s,t)=>s in o?p(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t;var l=(o,s,t)=>(m(o,typeof s!="symbol"?s+"":s,t),t);import{B as d,F as h,a as f,T as E}from"./Translations-1444987e.js";const a=class extends d{constructor(t,e=3){var i,u,c;super();l(this,"title");l(this,"level");l(this,"id");if(t===void 0)throw"A title should have some content. Undefined is not allowed";typeof t=="string"?this.title=new h(t):this.title=t,this.level=e;let n;typeof t=="string"?n=t:t instanceof h?n=t.content:f.runningFromConsole||(n=(i=t.ConstructElement())==null?void 0:i.textContent),this.id=((c=(u=n==null?void 0:n.replace(/ /g,"-"))==null?void 0:u.replace(/[?#.;:/]/,""))==null?void 0:c.toLowerCase())??"",this.SetClass(a.defaultClassesPerLevel[e]??"")}AsMarkdown(){const t=" "+this.title.AsMarkdown()+" ";return this.level==1?`

`+t+`
`+"=".repeat(t.length)+`

`:this.level==2?`

`+t+`
`+"-".repeat(t.length)+`

`:`

`+"#".repeat(this.level)+t+`

`}InnerConstructElement(){const t=this.title.ConstructElement();if(t===void 0)return;const e=document.createElement("h"+this.level);return e.appendChild(t),t.id=this.id,e}};let r=a;l(r,"defaultClassesPerLevel",["","text-3xl font-bold","text-2xl font-bold","text-xl font-bold","text-lg font-bold"]);class x extends d{constructor(t,e=!1){super();l(this,"uiElements");l(this,"_ordered");this._ordered=e,this.uiElements=f.NoNull(t).map(n=>E.W(n))}AsMarkdown(){return this._ordered?`

`+this.uiElements.map((t,e)=>"  "+e+". "+t.AsMarkdown().replace(/\n/g,`  
`)).join(`
`)+`
`:`

`+this.uiElements.map(t=>"  - "+t.AsMarkdown().replace(/\n/g,`  
`)).join(`
`)+`
`}InnerConstructElement(){const t=document.createElement(this._ordered?"ol":"ul");for(const e of this.uiElements){if(e==null)continue;const n=e.ConstructElement();if(n!==void 0){const i=document.createElement("li");i.appendChild(n),t.appendChild(i)}}return t}}export{x as L,r as T};
