"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[908],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>f,frontMatter:()=>m,metadata:()=>k,toc:()=>g});var n=a(7462),r=a(7294),s=a(3905),l=a(2389),o=a(650),u=a(6010);const i="tabItem_LplD";function p(e){var t,a,s;const{lazy:l,block:p,defaultValue:c,values:d,groupId:m,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.lx)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===c?c:null!=(t=null!=c?c:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:null==(s=k[0])?void 0:s.props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:N}=(0,o.UB)(),[y,w]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,o.o5)();if(null!=m){const e=f[m];null!=e&&e!==y&&b.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==y&&(O(t),w(n),null!=m&&N(m,n))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]||x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},h)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:j,onClick:j},s,{className:(0,u.Z)("tabs__item",i,null==s?void 0:s.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}function d(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}const m={title:"Comparaison d'outils pour documentation + blogs"},h=void 0,k={unversionedId:"tools/2021-03-16-comparaison-outils-documentation",id:"tools/2021-03-16-comparaison-outils-documentation",title:"Comparaison d'outils pour documentation + blogs",description:"Table des mati\xe8res",source:"@site/docs/tools/2021-03-16-comparaison-outils-documentation.mdx",sourceDirName:"tools",slug:"/tools/2021-03-16-comparaison-outils-documentation",permalink:"/docs/tools/2021-03-16-comparaison-outils-documentation",editUrl:"https://github.com/CraftDataEngineer/blog/docs/tools/2021-03-16-comparaison-outils-documentation.mdx",tags:[],version:"current",frontMatter:{title:"Comparaison d'outils pour documentation + blogs"},sidebar:"docs",previous:{title:"Postgresql, Miracles Queries",permalink:"/docs/stockage/postgres-miracles-queries"}},b={},g=[{value:"Table des mati\xe8res",id:"table-des-mati\xe8res",level:2},{value:"\ud83d\ude80 Objectif de ce post \ud83d\ude80",id:"-objectif-de-ce-post-",level:2},{value:"Nos besoins",id:"nos-besoins",level:2},{value:"\ud83d\udcbb Les candidats \ud83d\udcbb",id:"-les-candidats-",level:2},{value:"Sphinx \ud83d\udc31",id:"sphinx-",level:2},{value:"Hugo",id:"hugo",level:2},{value:"Docusaurus \ud83e\udd96",id:"docusaurus-",level:2},{value:"D&#39;autres solutions que nous n&#39;avons pas retenues",id:"dautres-solutions-que-nous-navons-pas-retenues",level:2},{value:"R\xe9sultats:",id:"r\xe9sultats",level:2}],v={toc:g};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"table-des-mati\xe8res"},"Table des mati\xe8res"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#objectif-de-ce-post"},"Objectif de ce post")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#les-candidats"},"Les candidats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#r%C3%A9sultats"},"r\xe9sultats"))),(0,s.kt)("h2",{id:"-objectif-de-ce-post-"},"\ud83d\ude80 Objectif de ce post \ud83d\ude80"),(0,s.kt)("p",null,"Comparer plusieurs outils en fonctions des besoins d\xe9finis ci-dessous !"),(0,s.kt)("p",null," Il n'y aura qu'un seul gagnant \ud83e\udd47 !"),(0,s.kt)("h2",{id:"nos-besoins"},"Nos besoins"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"On veut :")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Quelque chose de sexy, qui donne envie (et non un skyblog so 2009)"),(0,s.kt)("li",{parentName:"ul"},"Une barre de recherche"),(0,s.kt)("li",{parentName:"ul"},"Le d\xe9ployer sur un stockage objet (s3) ou sur du gitlab/github pages"),(0,s.kt)("li",{parentName:"ul"},"Que \xe7a soit simple \xe0 mettre en place (max 1/2 journ\xe9e)"),(0,s.kt)("li",{parentName:"ul"},"Que \xe7a soit juste un markdown \xe0 ajouter/modifier/supprimer")),(0,s.kt)("p",null,"Pour ceux qui ne sont pas int\xe9ress\xe9s aux d\xe9tails vous pouvez directement aller \xe0 la rubrique ",(0,s.kt)("a",{parentName:"p",href:"#r%C3%A9sultats"},"r\xe9sultats")),(0,s.kt)("h2",{id:"-les-candidats-"},"\ud83d\udcbb Les candidats \ud83d\udcbb"),(0,s.kt)("p",null,"Les outils que nous avons retenus sont des projets OpenSource."),(0,s.kt)("h2",{id:"sphinx-"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/sphinx-doc/sphinx"},"Sphinx")," \ud83d\udc31"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/sphinx-doc/sphinx/stargazers"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/sphinx-doc/sphinx?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))),(0,s.kt)("p",null,"On le retrouve beaucoup pour les documentations python, lui m\xeame \xe9crit en \ud83d\udc0d !"),(0,s.kt)("p",null,"(",(0,s.kt)("em",{parentName:"p"},"voir les templates: ",(0,s.kt)("a",{parentName:"em",href:"https://sphinx-themes.org/"},"https://sphinx-themes.org/")," , ils vous sont surement familiers")," \ud83d\ude09)"),(0,s.kt)("p",null,"Il g\xe9n\xe8re des fichiers statiques (css,js,html) \xe0 partir de sources ",(0,s.kt)("inlineCode",{parentName:"p"},"reStructuredText"),"."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Qu'est-ce que le format .rst ?")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Le format ",(0,s.kt)("inlineCode",{parentName:"p"},".rst")," est un ",(0,s.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html"},"langage de balisage l\xe9ger")),(0,s.kt)("p",{parentName:"div"},"Pour comprendre les diff\xe9rences entre le markdown et le reStructuredText, nous vous invitons \xe0 consulter cet ",(0,s.kt)("a",{parentName:"p",href:"https://www.zverovich.net/2016/06/16/rst-vs-markdown.html"},"article")))),(0,s.kt)("h2",{id:"hugo"},(0,s.kt)("a",{parentName:"h2",href:"https://themes.gohugo.io/"},"Hugo")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/gohugoio/hugo/stargazers"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/gohugoio/hugo?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))),(0,s.kt)("p",null,"Vendu comme : ",(0,s.kt)("inlineCode",{parentName:"p"},"The world\u2019s fastest framework for building websites")),(0,s.kt)("p",null,"Hugo est un g\xe9n\xe9rator de site web ecrit en ",(0,s.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go")," "),(0,s.kt)("p",null,"Il g\xe9n\xe8re du contenu statiques \xe0 partir du contenu qu'on a \xe9crit en markdown \ud83e\udd13 ( comme un README.md avec des metadata ) "),(0,s.kt)("h2",{id:"docusaurus-"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/facebook/docusaurus"},"Docusaurus")," \ud83e\udd96"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/gohugoio/facebook/docusaurus"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/facebook/docusaurus?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))),(0,s.kt)("p",null,"D\xe9velopp\xe9 par Facebook, il est utilis\xe9 pour les documentations de React, React Native, Redux... "),(0,s.kt)("p",null,"Docusaurus est \xe9crit en js/ts (react) et permet de g\xe9n\xe9rer un site avec du contenu \xe9crit en markdown. "),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Des examples r\xe9alis\xe9s avec docusaurus")," : ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"https://docusaurus.io/showcase")),(0,s.kt)("h2",{id:"dautres-solutions-que-nous-navons-pas-retenues"},"D'autres solutions que nous n'avons pas retenues"),(0,s.kt)("p",null,(0,s.kt)("del",{parentName:"p"},(0,s.kt)("a",{parentName:"del",href:"https://github.com/mkdocs/mkdocs"},"Mkdocs"))),(0,s.kt)("p",null,(0,s.kt)("del",{parentName:"p"},(0,s.kt)("a",{parentName:"del",href:"https://www.gatsbyjs.com/docs/"},"Gatsby"))),(0,s.kt)("p",null,(0,s.kt)("del",{parentName:"p"},(0,s.kt)("a",{parentName:"del",href:"https://docs.gitbook.com/"},"GitBook"))),(0,s.kt)("p",null,(0,s.kt)("del",{parentName:"p"},(0,s.kt)("a",{parentName:"del",href:"https://jekyllrb.com/docs/"},"Jekyll"))),(0,s.kt)("h2",{id:"r\xe9sultats"},"R\xe9sultats:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"searchbar"),(0,s.kt)("th",{parentName:"tr",align:null},"style subjectif"),(0,s.kt)("th",{parentName:"tr",align:null},"facile"),(0,s.kt)("th",{parentName:"tr",align:null},"customisable"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Sphynx"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Hugo"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Docusaurus"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")))),(0,s.kt)(c,{className:"unique-tabs",defaultValue:"docusaurus",values:[{label:"\ud83e\udd47 Docusaurus",value:"docusaurus"},{label:"\ud83e\udd48 Sphynx",value:"sphynx"},{label:"\ud83e\udd49 Hugo",value:"hugo"}],mdxType:"Tabs"},(0,s.kt)(d,{value:"docusaurus",mdxType:"TabItem"},(0,s.kt)("p",null,"  On a retenu Docusaurus, car : "),(0,s.kt)("p",null,"  Il propose des fonctionnalit\xe9s markdown qu'on ne retrouvait pas chez les autres, voir\nla doc ",(0,s.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features/tabs#!"},"Markdown Features")),(0,s.kt)("p",null,"  Il propose un composant de barre de recherche ",(0,s.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/search"},"algolia DocSearch"),"\nqui marche tr\xe8s bien !"),(0,s.kt)("p",null,"  Le th\xe8me du starter est tr\xe8s joli \ud83d\ude44")),(0,s.kt)(d,{value:"sphynx",mdxType:"TabItem"},"Facile \xe0 prendre en main et top pour de la documentation de projet, mais compliqu\xe9 \xe0 customiser pour une utilisation plus orient\xe9 blog..."),(0,s.kt)(d,{value:"hugo",mdxType:"TabItem"},"On a pas trouv\xe9 un th\xe8me qui correspondait vraiment \xe0 ce qu'on recherchait")))}f.isMDXComponent=!0}}]);