"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[721],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1730:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),u=["components"],i={title:"Video Apache Parquet"},p=void 0,c={unversionedId:"tech_posts/2021-03-12-apache-parquet",id:"tech_posts/2021-03-12-apache-parquet",title:"Video Apache Parquet",description:"Vous voulez changer votre Parquet et vous ne savez pas comment faire ?",source:"@site/docs/tech_posts/2021-03-12-apache-parquet.md",sourceDirName:"tech_posts",slug:"/tech_posts/2021-03-12-apache-parquet",permalink:"/docs/tech_posts/2021-03-12-apache-parquet",editUrl:"https://github.com/CraftDataEngineer/blog/docs/tech_posts/2021-03-12-apache-parquet.md",tags:[],version:"current",frontMatter:{title:"Video Apache Parquet"},sidebar:"docs",previous:{title:"GIT + Mysql = Dolt",permalink:"/docs/"},next:{title:"Comparaison d'outils pour documentation + blogs",permalink:"/docs/tech_posts/2021-03-16-comparaison-outils-documentation"}},s={},l=[],m={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Vous voulez changer votre Parquet et vous ne savez pas comment faire ?"),(0,a.kt)("p",null,"On se pose tous des questions du genre :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mais pourquoi mon parquet de tr\xe8s petite taille n'est pas optimal ?!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pourquoi, \xe0 partir d'une certaine taille, mon parquet n'est plus optimal ?!"))),(0,a.kt)("p",null,"Vous l'avez compris, on parle ici de ",(0,a.kt)("a",{parentName:"p",href:"http://parquet.apache.org"},"Apache Parquet"),"."),(0,a.kt)("p",null,"Format colonne d\xe9mocratis\xe9 par Hadoop, il figure parmi les classiques d'aujourd'hui pour le stockage de gros volumes de donn\xe9es."),(0,a.kt)("p",null,"Pour mieux comprendre ses subtilit\xe9s, je vous propose cette vid\xe9o du Spark summit 2019 o\xf9 Boudewijn Braams d\xe9taille les internals de ce format et explique ses avantages et limitations :"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1j8SdS7s_NY"},"https://www.youtube.com/watch?v=1j8SdS7s_NY")))}d.isMDXComponent=!0}}]);