"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[970],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9344:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],s={title:"GIT + Mysql = Dolt",slug:"/"},u=void 0,i={unversionedId:"tech_posts/2021-03-10-dolt-db",id:"tech_posts/2021-03-10-dolt-db",title:"GIT + Mysql = Dolt",description:"dolt logo",source:"@site/docs/tech_posts/2021-03-10-dolt-db.md",sourceDirName:"tech_posts",slug:"/",permalink:"/docs/",editUrl:"https://github.com/CraftDataEngineer/blog/docs/tech_posts/2021-03-10-dolt-db.md",tags:[],version:"current",frontMatter:{title:"GIT + Mysql = Dolt",slug:"/"},sidebar:"docs",next:{title:"Video Apache Parquet",permalink:"/docs/tech_posts/2021-03-12-apache-parquet"}},c={},p=[{value:"Table des mati\xe8res",id:"table-des-mati\xe8res",level:2},{value:"101",id:"101",level:2},{value:"Usecases",id:"usecases",level:2},{value:"Les usescases qu&#39;on a retenu :",id:"les-usescases-quon-a-retenu-",level:2},{value:"Pour les curieux :",id:"pour-les-curieux-",level:2},{value:"DoltHub",id:"dolthub",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2},{value:"\u2705 Pros:",id:"-pros",level:2},{value:"\u274c Cons:",id:"-cons",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"dolt logo",src:r(442).Z,width:"283",height:"283"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/dolthub/dolt"},"https://github.com/dolthub/dolt")),(0,l.kt)("h2",{id:"table-des-mati\xe8res"},"Table des mati\xe8res"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#101"},"101")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usecases"},"Usecases")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dolthub"},"DoltHub")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pros-cons"},"Pros & Cons"))),(0,l.kt)("p",null,"On se demande souvent est-ce qu'il existe une fa\xe7on simple de versionner les sch\xe9mas/data de nos bases de donn\xe9es ? "),(0,l.kt)("p",null,"Dolt apporte une r\xe9ponse en combinant \xe0 la fois git et mysql."),(0,l.kt)("h2",{id:"101"},"101"),(0,l.kt)("p",null,"Dolt est une base de donn\xe9e open source o\xf9 il est possible de faire des fork, clone, branch, merge, push et pull avec de la data... Un peu comme un git repository !"),(0,l.kt)("p",null,"Depuis la documentation, Dolt c'est : "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"The Dolt database provides a command line interface and a MySQL compatible Server for reading and writing data")),(0,l.kt)("p",null,"Si vous \xeates int\xe9ress\xe9 pour tester la solution, on vous recommande leur quick start : ",(0,l.kt)("a",{parentName:"p",href:"https://docs.dolthub.com/getting-started/installation"},"https://docs.dolthub.com/getting-started/installation")),(0,l.kt)("h2",{id:"usecases"},"Usecases"),(0,l.kt)("h2",{id:"les-usescases-quon-a-retenu-"},"Les usescases qu'on a retenu :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Data release:")," Avoir les m\xeames pratiques dev avec la data, branch, revue puis merge.")),(0,l.kt)("p",null,"Ca permet d'am\xe9liorer la qualit\xe9 de nos donn\xe9es, le partage, facilite le versionning de nos schemas/datas et donc le restore \xe0 n'importe quel \xe9tat."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Giving branch & merge to customers"))),(0,l.kt)("p",null,"Isoler la data sur des branches pour faire tester de nouvelles feature sans impacter les donn\xe9es de prods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Data provenance & audit:"))),(0,l.kt)("p",null,"Tracker les changements, savoir qui a fait un changement/une modification, quel \xe9tait le message du commit, quelle \xe9tait la valeur pr\xe9c\xe9dente."),(0,l.kt)("h2",{id:"pour-les-curieux-"},"Pour les curieux :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.dolthub.com/blog/2021-03-09-dolt-use-cases-in-the-wild/"},"https://www.dolthub.com/blog/2021-03-09-dolt-use-cases-in-the-wild/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.dolthub.com/blog/2020-03-30-dolt-use-cases/"},"https://www.dolthub.com/blog/2020-03-30-dolt-use-cases/"))),(0,l.kt)("h2",{id:"dolthub"},"DoltHub"),(0,l.kt)("p",null,"C'est un syst\xe8me de contr\xf4le de version (cad : github, gitlab...)  pour la data."),(0,l.kt)("p",null,"On va y retrouver des previews, on peut y cr\xe9er des catalogues de requ\xeates pr\xe9-g\xe9n\xe9r\xe9e pour faciliter la visibilit\xe9 et le partage de la data."),(0,l.kt)("p",null,"Voir exemple : ",(0,l.kt)("a",{parentName:"p",href:"https://www.dolthub.com/repositories/dolthub/corona-virus/query/master?q=select+*+from+current&active=Query+Catalog"},"https://www.dolthub.com/repositories/dolthub/corona-virus/query/master?q=select+*+from+current&active=Query+Catalog")),(0,l.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,l.kt)("h2",{id:"-pros"},"\u2705 Pros:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcf8 Snapshots: tous les commits sont un snapshot de la base "),(0,l.kt)("li",{parentName:"ul"},"Time travel: requ\xeater une ancienne version"),(0,l.kt)("li",{parentName:"ul"},"Rollbacks: ",(0,l.kt)("inlineCode",{parentName:"li"},"dolt reset --hard HEAD~3")," pour undone les 3 derniers commits."),(0,l.kt)("li",{parentName:"ul"},"Une documentation claire, avec des blogs int\xe9ressants"),(0,l.kt)("li",{parentName:"ul"},"Avoir les pratiques de dev sur sa base")),(0,l.kt)("h2",{id:"-cons"},"\u274c Cons:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No Sharding "),(0,l.kt)("li",{parentName:"ul"},"Performances "),(0,l.kt)("li",{parentName:"ul"},"Solution jeune")),(0,l.kt)("p",null,"Performances : ",(0,l.kt)("a",{parentName:"p",href:"https://docs.dolthub.com/reference/characteristics#benchmark-data"},"https://docs.dolthub.com/reference/characteristics#benchmark-data")),(0,l.kt)("h1",{id:"roadmap"},"Roadmap:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Premi\xe8re release stable 1.0 pr\xe9vue mi ann\xe9e 2021."),(0,l.kt)("li",{parentName:"ul"},"Sharding (long term)"),(0,l.kt)("li",{parentName:"ul"},"Read-Only replicas"),(0,l.kt)("li",{parentName:"ul"},"Am\xe9liorer les performances, pour arriver \xe0 2|3 fois inf\xe9rieur \xe0 celle de Mysql")),(0,l.kt)("h1",{id:"l\xe9quipe"},"L'\xe9quipe:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Un gros background technique :  ",(0,l.kt)("a",{parentName:"li",href:"https://www.dolthub.com/team"},"https://www.dolthub.com/team"))))}m.isMDXComponent=!0},442:function(e,t,r){t.Z=r.p+"assets/images/dolt_hi-74b713eb394d8a10a3553791007178f3.svg"}}]);