"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[85],{6416:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var n=t(7294),l=t(6010),i=t(7422),s=t(3905),c=t(66),m=t(6043),o=t(650);const r={mdxPageWrapper:"mdxPageWrapper_zHyg"};function d(e){const{content:a}=e,{metadata:{title:t,description:d,permalink:v,frontMatter:g}}=a,{wrapperClassName:N,hide_table_of_contents:_}=g;return n.createElement(i.Z,{title:t,description:d,permalink:v,wrapperClassName:N??o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,l.Z)("row",r.mdxPageWrapper)},n.createElement("div",{className:(0,l.Z)("col",!_&&"col--8")},n.createElement(s.Zo,{components:c.Z},n.createElement(a,null))),!_&&a.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:a.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})))))}},6043:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(7462),l=t(7294),i=t(6010),s=t(650);function c(e){let{toc:a,className:t,linkClassName:n,isChild:i}=e;return a.length?l.createElement("ul",{className:i?void 0:t},a.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(c,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}function m(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:o,maxHeadingLevel:r,...d}=e;const v=(0,s.LU)(),g=o??v.tableOfContents.minHeadingLevel,N=r??v.tableOfContents.maxHeadingLevel,_=(0,s.b9)({toc:a,minHeadingLevel:g,maxHeadingLevel:N}),f=(0,l.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:g,maxHeadingLevel:N}}),[i,m,g,N]);return(0,s.Si)(f),l.createElement(c,(0,n.Z)({toc:_,className:t,linkClassName:i},d))}const o={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},r="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function v(e){let{className:a,...t}=e;return l.createElement("div",{className:(0,i.Z)(o.tableOfContents,"thin-scrollbar",a)},l.createElement(m,(0,n.Z)({},t,{linkClassName:r,linkActiveClassName:d})))}}}]);