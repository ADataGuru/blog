"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[146],{244:(e,t,r)=>{var a=r(4836);t.Z=void 0;var l=a(r(4938)),o=r(5893),n=(0,l.default)([(0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,o.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=n},3147:(e,t,r)=>{var a=r(4836);t.Z=void 0;var l=a(r(4938)),o=r(5893),n=(0,l.default)((0,o.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");t.Z=n},6874:(e,t,r)=>{var a=r(4836);t.Z=void 0;var l=a(r(4938)),o=r(5893),n=(0,l.default)((0,o.jsx)("path",{d:"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}),"Euro");t.Z=n},8215:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294);function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",hidden:r,className:l},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7462),l=r(7294),o=r(2389),n=r(650),u=r(6010);const i={tabItem:"tabItem_LplD"};function s(e){const{lazy:t,block:r,defaultValue:o,values:s,groupId:d,className:m}=e,p=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),c=s??p.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),k=(0,n.lx)(c,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??p.find((e=>e.props.default))?.props.value??p[0]?.props.value;if(null!==v&&!c.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${c.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,n.UB)(),[b,h]=(0,l.useState)(v),g=[],{blockElementScrollPositionUntilNextRender:T}=(0,n.o5)();if(null!=d){const e=f[d];null!=e&&e!==b&&c.some((t=>t.value===e))&&h(e)}const C=e=>{const t=e.currentTarget,r=g.indexOf(t),a=c[r].value;a!==b&&(T(t),h(a),null!=d&&N(d,a))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=g.indexOf(e.currentTarget)+1;t=g[r]||g[0];break}case"ArrowLeft":{const r=g.indexOf(e.currentTarget)-1;t=g[r]||g[g.length-1];break}}t?.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},m)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>g.push(e),onKeyDown:M,onFocus:C,onClick:C},o,{className:(0,u.Z)("tabs__item",i.tabItem,o?.className,{"tabs__item--active":b===t})}),r??t)}))),t?(0,l.cloneElement)(p.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,o.Z)();return l.createElement(s,(0,a.Z)({key:String(t)},e))}},1014:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var a=r(7462),l=(r(7294),r(3905)),o=r(9877),n=r(8215),u=r(244),i=r(6874),s=r(3147);const d={title:"Terraform - Automatiser les d\xe9ploiements de vos infrastructures",slug:"/"},m=void 0,p={type:"mdx",permalink:"/catalogue/content/terraform",source:"@site/src/pages/catalogue/content/terraform.mdx",title:"Terraform - Automatiser les d\xe9ploiements de vos infrastructures",description:"terraform",frontMatter:{title:"Terraform - Automatiser les d\xe9ploiements de vos infrastructures",slug:"/"}},c=[{value:"Description",id:"description",level:2},{value:"Objectifs",id:"objectifs",level:2},{value:"Public Cible",id:"public-cible",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Le programme",id:"le-programme",level:2},{value:"Module 1: Pourquoi Terraform ?",id:"module-1-pourquoi-terraform-",level:4},{value:"Module 2 : ARCHITECTURE ET PRINCIPE DE FONCTIONNEMENT",id:"module-2--architecture-et-principe-de-fonctionnement",level:4},{value:"Module 3: Premier pas avec Terraform",id:"module-3-premier-pas-avec-terraform",level:4},{value:"Module 4: Gestion des \xe9tats terraform",id:"module-4-gestion-des-\xe9tats-terraform",level:4},{value:"Module 5: Cr\xe9er une infrastructure r\xe9utilisable en utilisant les modules terraform",id:"module-5-cr\xe9er-une-infrastructure-r\xe9utilisable-en-utilisant-les-modules-terraform",level:4},{value:"Module 6: Terraform Tips &amp;Tricks",id:"module-6-terraform-tips-tricks",level:4},{value:"Module 7: Production-Grade Terraform Code",id:"module-7-production-grade-terraform-code",level:4},{value:"Module 8: Tester du code terraform",id:"module-8-tester-du-code-terraform",level:4},{value:"Besoin d&#39;aide pour trouver votre formation ?",id:"besoin-daide-pour-trouver-votre-formation-",level:4}],k=e=>{let{children:t,color:r}=e;return(0,l.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},v={toc:c,Highlight:k},f="wrapper";function N(e){let{components:t,...d}=e;return(0,l.kt)(f,(0,a.Z)({},v,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"terraform",src:r(1696).Z,width:"760",height:"225"})),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"terraform---automatiser-les-d\xe9ploiements-de-vos-infrastructures"},"Terraform - Automatiser les d\xe9ploiements de vos infrastructures"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Date et prix")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(n.Z,{value:"standard",label:"STANDARD",default:!0,mdxType:"TabItem"},(0,l.kt)("b",null," Prochaines sessions :"),(0,l.kt)("br",null),(0,l.kt)("b",null," ",(0,l.kt)(s.Z,{viewBox:"0 -14 36 36",mdxType:"CalendarMonthIcon"})," Le 17/01/2023"),(0,l.kt)("br",null),(0,l.kt)("b",null," ",(0,l.kt)(i.Z,{viewBox:"0 -14 36 36",mdxType:"EuroIcon"})," 1 495 "),(0,l.kt)("br",null),(0,l.kt)("b",null," ",(0,l.kt)(u.Z,{viewBox:"0 -14 36 36",mdxType:"AccessTimeIcon"})," 2 jours")," ( 14 heures ) ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{className:"button button--sm button--primary button--outline",style:{textDecoration:"none"},href:"/RendezVous"},"Nous contacter")),(0,l.kt)(n.Z,{value:"sur-mesure",label:"SUR-MESURE",mdxType:"TabItem"},(0,l.kt)("b",null,"FORMATION \xc0 LA DEMANDE")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Cette th\xe9matique vous int\xe9resse ?",(0,l.kt)("br",null),"Nos experts con\xe7oivent votre formation sur-mesure",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{className:"button button--sm button--primary button--outline",style:{textDecoration:"none"},href:"/RendezVous"},"Nous contacter"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"La mont\xe9e du cloud a vu l'\xe9mergence de nouvelle probl\xe9matique :"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Comment ",(0,l.kt)("strong",{parentName:"li"},"automatiser le d\xe9ploiement")," et la ",(0,l.kt)("strong",{parentName:"li"},"gestion d\u2019une infrastructure")," cloud complexe ?"),(0,l.kt)("li",{parentName:"ul"},"Est-il possible d\u2019appliquer les ",(0,l.kt)("strong",{parentName:"li"},"bonnes pratiques")," de d\xe9veloppements sur du code d'infrastructure ?"),(0,l.kt)("li",{parentName:"ul"},"De quelle mani\xe8re peut-on ",(0,l.kt)("strong",{parentName:"li"},"auditer")," les ressources cr\xe9\xe9es par les \xe9quipes ?")),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"Terraform")," est un ",(0,l.kt)("strong",{parentName:"p"},"outil open")," source \xe9dit\xe9 par Hashicorp qui s\u2019inscrit \xe0 100% dans la d\xe9marche ",(0,l.kt)("inlineCode",{parentName:"p"},"DevOps"),".\nIl permet de ",(0,l.kt)("strong",{parentName:"p"},"cr\xe9er"),", ",(0,l.kt)("strong",{parentName:"p"},"d\xe9ployer"),", ",(0,l.kt)("strong",{parentName:"p"},"modifier")," et ",(0,l.kt)("strong",{parentName:"p"},"versioner")," une infrastructure en production de fa\xe7on fiable et ma\xeetris\xe9e."),(0,l.kt)("p",{parentName:"blockquote"},"L\u2019outil est utilis\xe9 pour g\xe9rer les ressources des infrastructures et peut fonctionner aussi bien avec les providers les plus populaires (AWS, Google Cloud Platform, Azure, Github, Gitlab, etc.), qu\u2019avec des solutions personnalis\xe9es."),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Cette formation vous propose de vous initier \xe0 l'utilisation de Terraform dans un contexte cloud sur AWS"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"objectifs"},"Objectifs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Apprendre l'utilisation de Terraform pour la conception et la mise en place d'une infrastructure pour le cloud computing."),(0,l.kt)("li",{parentName:"ul"},"Comprendre l'utilisation des modules pour \xe9crire un code r\xe9utilisable, maintenable et testable."),(0,l.kt)("li",{parentName:"ul"},"Conna\xeetre des astuces Terraform comme la syntaxe Terraform, les boucles et les d\xe9clarations.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"public-cible"},"Public Cible"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ing\xe9nieur d'infrastructure")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Consultant")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Responsable de production")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Responsable d'exploitation"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Poss\xe9der des comp\xe9tences ",(0,l.kt)("strong",{parentName:"li"},"Linux de base")," (dossier, variables d'environnements, ex\xe9cution de binaire)"),(0,l.kt)("li",{parentName:"ul"},"Connaissance de ",(0,l.kt)("strong",{parentName:"li"},"GIT")),(0,l.kt)("li",{parentName:"ul"},"Poss\xe9der des comp\xe9tences de base sur le provider ",(0,l.kt)("strong",{parentName:"li"},"AWS")," est un plus")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"le-programme"},"Le programme"),(0,l.kt)("h4",{id:"module-1-pourquoi-terraform-"},"Module 1: Pourquoi Terraform ?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"La mont\xe9e du DevOps"),(0,l.kt)("li",{parentName:"ul"},"Infrastructure as Code"),(0,l.kt)("li",{parentName:"ul"},"Les b\xe9n\xe9fices de l\u2019Infrastructure as Code"),(0,l.kt)("li",{parentName:"ul"},"Comment fonctionne terraform ?"),(0,l.kt)("li",{parentName:"ul"},"Terraform Vs d\u2019autres outils d\u2019IAC")),(0,l.kt)("h4",{id:"module-2--architecture-et-principe-de-fonctionnement"},"Module 2 : ARCHITECTURE ET PRINCIPE DE FONCTIONNEMENT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Workflow standard"),(0,l.kt)("li",{parentName:"ul"},"Cr\xe9ation d\u2019une infrastructure"),(0,l.kt)("li",{parentName:"ul"},"Mise \xe0 jour de l\u2019infrastructure"),(0,l.kt)("li",{parentName:"ul"},"Un orchestrateur pour le d\xe9ploiement"),(0,l.kt)("li",{parentName:"ul"},"Les outputs")),(0,l.kt)("h4",{id:"module-3-premier-pas-avec-terraform"},"Module 3: Premier pas avec Terraform"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configuration d\u2019un AWS account"),(0,l.kt)("li",{parentName:"ul"},"Installation de terraform"),(0,l.kt)("li",{parentName:"ul"},"CLI terraform"),(0,l.kt)("li",{parentName:"ul"},"\xab RESOURCES \xbbTERRAFORM APPLIQU\xc9ES \xc0 AWS"),(0,l.kt)("li",{parentName:"ul"},"D\xe9ployer un serveur"),(0,l.kt)("li",{parentName:"ul"},"D\xe9ployer un serveur Web"),(0,l.kt)("li",{parentName:"ul"},"D\xe9ployer un serveur Web configurable"),(0,l.kt)("li",{parentName:"ul"},"D\xe9ployer un cluster de serveurs Web"),(0,l.kt)("li",{parentName:"ul"},"D\xe9ployer un Load Balancer"),(0,l.kt)("li",{parentName:"ul"},"Suppression des ressources cr\xe9\xe9es")),(0,l.kt)("h4",{id:"module-4-gestion-des-\xe9tats-terraform"},"Module 4: Gestion des \xe9tats terraform"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Qu\u2019est-ce qu\u2019un \xe9tat terraform"),(0,l.kt)("li",{parentName:"ul"},"Limitation des backends terraform"),(0,l.kt)("li",{parentName:"ul"},"Isoler son fichier d\u2019\xe9tat"),(0,l.kt)("li",{parentName:"ul"},"Via workspace"),(0,l.kt)("li",{parentName:"ul"},"Via file layout"),(0,l.kt)("li",{parentName:"ul"},"Mettre en place un \xe9tat distant"),(0,l.kt)("li",{parentName:"ul"},"Ajouter une gestion de verrouillage")),(0,l.kt)("h4",{id:"module-5-cr\xe9er-une-infrastructure-r\xe9utilisable-en-utilisant-les-modules-terraform"},"Module 5: Cr\xe9er une infrastructure r\xe9utilisable en utilisant les modules terraform"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Module Basics"),(0,l.kt)("li",{parentName:"ul"},"Module Inputs"),(0,l.kt)("li",{parentName:"ul"},"Module Locals"),(0,l.kt)("li",{parentName:"ul"},"Module Outputs"),(0,l.kt)("li",{parentName:"ul"},"Module Gotchas"),(0,l.kt)("li",{parentName:"ul"},"Module Versioning")),(0,l.kt)("h4",{id:"module-6-terraform-tips-tricks"},"Module 6: Terraform Tips &Tricks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Boucles"),(0,l.kt)("li",{parentName:"ul"},"Conditions"),(0,l.kt)("li",{parentName:"ul"},"Terraform gotchas"),(0,l.kt)("li",{parentName:"ul"},"Zero-Downtime D\xe9ploiement")),(0,l.kt)("h4",{id:"module-7-production-grade-terraform-code"},"Module 7: Production-Grade Terraform Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pourquoi \xe7a prend du temps \xe0 d\xe9velopper une infrastructure de production ?"),(0,l.kt)("li",{parentName:"ul"},"Production-Grade Infrastructure Checklist"),(0,l.kt)("li",{parentName:"ul"},"Production-Grade Infrastructure Modules"),(0,l.kt)("li",{parentName:"ul"},"Micro Modules"),(0,l.kt)("li",{parentName:"ul"},"Macro Modules"),(0,l.kt)("li",{parentName:"ul"},"Testable Modules"),(0,l.kt)("li",{parentName:"ul"},"Releasable Modules")),(0,l.kt)("h4",{id:"module-8-tester-du-code-terraform"},"Module 8: Tester du code terraform"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tests \xe0 traver la console terraform"),(0,l.kt)("li",{parentName:"ul"},"Tests manuels"),(0,l.kt)("li",{parentName:"ul"},"Tests automatis\xe9s"),(0,l.kt)("li",{parentName:"ul"},"Module 9: Utiliser Terraform en \xe9quipe"),(0,l.kt)("li",{parentName:"ul"},"Adopter l\u2019IAC dans votre \xe9quipe"),(0,l.kt)("li",{parentName:"ul"},"Workflow pour d\xe9ployer le code applicatif"),(0,l.kt)("li",{parentName:"ul"},"Workflow pour d\xe9ployer le code d\u2019infrastructure"),(0,l.kt)("li",{parentName:"ul"},"Workflow global")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"besoin-daide-pour-trouver-votre-formation-"},"Besoin d'aide pour trouver votre formation ?"),(0,l.kt)("a",{className:"button button--warning button--outline",href:"/contact"},"Contactez-nous "))}N.isMDXComponent=!0},1696:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/terraform-a0db1b411f314e54636b2dacd5c2b976.png"}}]);