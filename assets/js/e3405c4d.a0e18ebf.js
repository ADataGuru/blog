"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[544],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={title:"Getting Started"},u=void 0,c={unversionedId:"starter/getting-started",id:"starter/getting-started",title:"Getting Started",description:"Step 1: Generate a new Docusaurus site",source:"@site/docs/starter/getting-started.md",sourceDirName:"starter",slug:"/starter/getting-started",permalink:"/docs/starter/getting-started",editUrl:"https://github.com/CraftDataEngineer/blog/docs/starter/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Postgresql, Miracles Queries",permalink:"/docs/tech_posts/postgres-miracles-queries"},next:{title:"Markdown Features",permalink:"/docs/starter/markdown-features"}},l={},p=[{value:"Step 1: Generate a new Docusaurus site",id:"step-1-generate-a-new-docusaurus-site",level:2},{value:"Step 2: Start your Docusaurus site",id:"step-2-start-your-docusaurus-site",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"step-1-generate-a-new-docusaurus-site"},"Step 1: Generate a new Docusaurus site"),(0,s.kt)("p",null,"If you haven't already, generate a new Docusaurus site using the classic template:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),(0,s.kt)("h2",{id:"step-2-start-your-docusaurus-site"},"Step 2: Start your Docusaurus site"),(0,s.kt)("p",null,"Run the development server in the newly created ",(0,s.kt)("inlineCode",{parentName:"p"},"my-website")," folder:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"docs/getting-started.md")," and edit some lines. The site reloads automatically and display your changes."),(0,s.kt)("h2",{id:"thats-it"},"That's it!"),(0,s.kt)("p",null,"Congratulations! You've successfully run and modified your Docusaurus project."))}f.isMDXComponent=!0}}]);