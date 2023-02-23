"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[358],{244:(e,t,l)=>{var a=l(4836);t.Z=void 0;var n=a(l(4938)),i=l(5893),r=(0,n.default)([(0,i.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,i.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=r},6874:(e,t,l)=>{var a=l(4836);t.Z=void 0;var n=a(l(4938)),i=l(5893),r=(0,n.default)((0,i.jsx)("path",{d:"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}),"Euro");t.Z=r},8215:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(7294);function n(e){let{children:t,hidden:l,className:n}=e;return a.createElement("div",{role:"tabpanel",hidden:l,className:n},t)}},9877:(e,t,l)=>{l.d(t,{Z:()=>d});var a=l(7462),n=l(7294),i=l(2389),r=l(650),o=l(6010);const s={tabItem:"tabItem_LplD"};function u(e){const{lazy:t,block:l,defaultValue:i,values:u,groupId:d,className:p}=e,c=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=u??c.map((e=>{let{props:{value:t,label:l,attributes:a}}=e;return{value:t,label:l,attributes:a}})),k=(0,r.lx)(m,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??c.find((e=>e.props.default))?.props.value??c[0]?.props.value;if(null!==v&&!m.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:h}=(0,r.UB)(),[N,f]=(0,n.useState)(v),g=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=d){const e=b[d];null!=e&&e!==N&&m.some((t=>t.value===e))&&f(e)}const D=e=>{const t=e.currentTarget,l=g.indexOf(t),a=m[l].value;a!==N&&(C(t),f(a),null!=d&&h(d,a))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const l=g.indexOf(e.currentTarget)+1;t=g[l]||g[0];break}case"ArrowLeft":{const l=g.indexOf(e.currentTarget)-1;t=g[l]||g[g.length-1];break}}t?.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},p)},m.map((e=>{let{value:t,label:l,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>g.push(e),onKeyDown:x,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",s.tabItem,i?.className,{"tabs__item--active":N===t})}),l??t)}))),t?(0,n.cloneElement)(c.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},c.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},848:(e,t,l)=>{l.r(t),l.d(t,{Highlight:()=>k,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var a=l(7462),n=(l(7294),l(3905)),i=l(9877),r=l(8215),o=l(244),s=l(6874),u=l(6473);const d={title:"DevOps Basics",slug:"/"},p=void 0,c={type:"mdx",permalink:"/catalogue/content/devops_basics",source:"@site/src/pages/catalogue/content/devops_basics.mdx",title:"DevOps Basics",description:"------------",frontMatter:{title:"DevOps Basics",slug:"/"}},m=[{value:"Description",id:"description",level:2},{value:"Objectifs",id:"objectifs",level:2},{value:"Public Cible",id:"public-cible",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Le programme",id:"le-programme",level:2},{value:"Module 1 : Origines de DevOps et Accelerate",id:"module-1--origines-de-devops-et-accelerate",level:4},{value:"Module 2 :  Culture, m\xe9thodes et organisation",id:"module-2---culture-m\xe9thodes-et-organisation",level:4},{value:"Module 3 : Architecture et patterns",id:"module-3--architecture-et-patterns",level:4},{value:"Module 4 : L\u2019infrastructure par le cloud",id:"module-4--linfrastructure-par-le-cloud",level:4},{value:"Module 5 : D\xe9ploiement continu",id:"module-5--d\xe9ploiement-continu",level:4},{value:"Besoin d&#39;aide pour trouver votre formation ?",id:"besoin-daide-pour-trouver-votre-formation-",level:4}],k=e=>{let{children:t,color:l}=e;return(0,n.kt)("span",{style:{backgroundColor:l,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},v=(b="CalendarMonthIcon",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var b;const h={toc:m,Highlight:k},N="wrapper";function f(e){let{components:t,...l}=e;return(0,n.kt)(N,(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:u.Z,style:{width:"300px",height:"auto"}}),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"devops-basics"},"DevOps Basics"),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Date et prix")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"standard",label:"STANDARD",default:!0,mdxType:"TabItem"},(0,n.kt)("b",null," Prochaines sessions :"),(0,n.kt)("br",null),(0,n.kt)("b",null," ",(0,n.kt)(v,{viewBox:"0 -14 36 36",mdxType:"CalendarMonthIcon"})," Le 16/11/2022 "),(0,n.kt)("br",null),(0,n.kt)("b",null," ",(0,n.kt)(s.Z,{viewBox:"0 -14 36 36",mdxType:"EuroIcon"})," 795 ")," ",(0,n.kt)("br",null),(0,n.kt)("b",null," ",(0,n.kt)(o.Z,{viewBox:"0 -14 36 36",mdxType:"AccessTimeIcon"})," 1 jour")," ( 7 heures ) ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("a",{className:"button button--sm button--primary button--outline",href:"/RendezVous"},"Nous contacter")),(0,n.kt)(r.Z,{value:"sur-mesure",label:"SUR-MESURE",mdxType:"TabItem"},(0,n.kt)("b",null,"FORMATION \xc0 LA DEMANDE")," ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Cette th\xe9matique vous int\xe9resse ?",(0,n.kt)("br",null),"Nos experts con\xe7oivent votre formation sur-mesure",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("a",{className:"button button--sm button--primary button--outline",href:"/RendezVous"},"Nous contacter"))))),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Le ",(0,n.kt)("inlineCode",{parentName:"p"},"mouvement DevOps")," consiste \xe0 supprimer les ",(0,n.kt)("strong",{parentName:"p"},"barri\xe8res entre les \xe9quipes")," traditionnellement cloisonn\xe9es : ",(0,n.kt)("inlineCode",{parentName:"p"},"Dev")," ",(0,n.kt)("strong",{parentName:"p"},"/")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Ops"),".\nUn mod\xe8le qui incite les \xe9quipes de d\xe9veloppement et d'exploitation \xe0 travailler ensemble tout au long du cycle de vie\ndes applications logicielles, du d\xe9veloppement au d\xe9ploiement et \xe0 l'exploitation."),(0,n.kt)("p",null,"Au cours de cette formation, nous allons vous pr\xe9senter les b\xe9n\xe9fices du DevOps \xe0 travers l\u2019\xe9tude Accelerate et ses quatre piliers :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Culture, m\xe9thodes et organisation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Architecture applicative exploitable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"L\u2019infrastructure par le code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Le d\xe9ploiement continu"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"objectifs"},"Objectifs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conna\xeetre les ",(0,n.kt)("strong",{parentName:"li"},"concepts")," et les ",(0,n.kt)("strong",{parentName:"li"},"b\xe9n\xe9fices")," de la d\xe9marche DevOps"),(0,n.kt)("li",{parentName:"ul"},"D\xe9couvrir les ",(0,n.kt)("strong",{parentName:"li"},"patterns")," de conception DevOps"),(0,n.kt)("li",{parentName:"ul"},"Identifier les ",(0,n.kt)("strong",{parentName:"li"},"enjeux de l'industrialisation")," des ",(0,n.kt)("strong",{parentName:"li"},"d\xe9ploiements")," applicatifs"),(0,n.kt)("li",{parentName:"ul"},"Savoir ",(0,n.kt)("strong",{parentName:"li"},"fiabiliser des cha\xeenes de production"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"public-cible"},"Public Cible"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Manager de la DSI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"D\xe9veloppeur")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Architecte")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Testeur")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Responsable de production")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Responsable d'exploitation"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Une exp\xe9rience dans la contribution ou la gestion d'un projet informatique")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"le-programme"},"Le programme"),(0,n.kt)("h4",{id:"module-1--origines-de-devops-et-accelerate"},"Module 1 : Origines de DevOps et Accelerate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les nouvelles exigences du march\xe9"),(0,n.kt)("li",{parentName:"ul"},"D\xe9finition de DevOps"),(0,n.kt)("li",{parentName:"ul"},"Les quatre objectifs des auteurs d\u2019Accelerate"),(0,n.kt)("li",{parentName:"ul"},"Les quatre indicateurs de mesure de performances"),(0,n.kt)("li",{parentName:"ul"},"Impact de la capacit\xe9 \xe0 d\xe9livrer")),(0,n.kt)("h4",{id:"module-2---culture-m\xe9thodes-et-organisation"},"Module 2 :  Culture, m\xe9thodes et organisation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Le mur de la confusion Dev / Ops"),(0,n.kt)("li",{parentName:"ul"},"Les valeurs fondatrices du Manifeste agile"),(0,n.kt)("li",{parentName:"ul"},"Les r\xf4les de l\u2019\xe9quipe agile"),(0,n.kt)("li",{parentName:"ul"},"Scrum : le processus et les rituels")),(0,n.kt)("h4",{id:"module-3--architecture-et-patterns"},"Module 3 : Architecture et patterns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les concepts de la disponibilit\xe9"),(0,n.kt)("li",{parentName:"ul"},"Patterns de scalabilit\xe9"),(0,n.kt)("li",{parentName:"ul"},"Strat\xe9gies de reprise apr\xe8s sinistre"),(0,n.kt)("li",{parentName:"ul"},"Patterns de d\xe9ploiement"),(0,n.kt)("li",{parentName:"ul"},"Introduction au cloud")),(0,n.kt)("h4",{id:"module-4--linfrastructure-par-le-cloud"},"Module 4 : L\u2019infrastructure par le cloud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"D\xe9finition de l\u2019infrastructure as code"),(0,n.kt)("li",{parentName:"ul"},"Les 3 grandes cat\xe9gories"),(0,n.kt)("li",{parentName:"ul"},"Les caract\xe9ristiques"),(0,n.kt)("li",{parentName:"ul"},"Responsabilit\xe9s des diff\xe9rents outils"),(0,n.kt)("li",{parentName:"ul"},"Cartographie des outils")),(0,n.kt)("h4",{id:"module-5--d\xe9ploiement-continu"},"Module 5 : D\xe9ploiement continu"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les 5 principes cl\xe9s"),(0,n.kt)("li",{parentName:"ul"},"D\xe9finition : d\xe9ploiement continu"),(0,n.kt)("li",{parentName:"ul"},"L\u2019importance des tests"),(0,n.kt)("li",{parentName:"ul"},"\xc9tape de construction d\u2019une pipeline"),(0,n.kt)("li",{parentName:"ul"},"Exemple de pipeline")),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"besoin-daide-pour-trouver-votre-formation-"},"Besoin d'aide pour trouver votre formation ?"),(0,n.kt)("a",{className:"button button--warning button--outline",href:"/contact"},"Contactez-nous "))}f.isMDXComponent=!0},6473:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/devops-37e84fb617eb1111b9b833a0d25041d6.png"}}]);