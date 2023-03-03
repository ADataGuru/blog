"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[103],{8665:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(6010),r=a(7422),i=a(9960);const s={sidebar:"sidebar_a9qW",sidebarItemTitle:"sidebarItemTitle_uKok",sidebarItemList:"sidebarItemList_Kvuv",sidebarItem:"sidebarItem_CF0Q",sidebarItemLink:"sidebarItemLink_miNk",sidebarItemLinkActive:"sidebarItemLinkActive_RRTD"};var o=a(5999);function m(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:s.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}function c(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(m,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},4424:(e,t,a)=>{a.d(t,{Z:()=>I});var l=a(7294),n=a(6010),r=a(3905),i=a(5999),s=a(9960),o=a(4996),m=a(650),c=a(8780),g=a(66),d=a(7462);const u={iconEdit:"iconEdit_dcUD"};function p(e){let{className:t,...a}=e;return l.createElement("svg",(0,d.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(u.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function b(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(p,null),l.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const h={blogPostTitle:"blogPostTitle_rzP5",blogPostData:"blogPostData_Zg1s",blogPostDetailsFull:"blogPostDetailsFull_h6_j"},E={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function v(e){const{permalink:t,name:a,count:r}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)(E.tag,{[E.tagRegular]:!r,[E.tagWithCount]:r})},a,r&&l.createElement("span",null,r))}const _={tags:"tags_XVD_",tag:"tag_JSN8"};function N(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(_.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:_.tag},l.createElement(v,{name:t,permalink:a}))}))))}const f={image:"image_o0gy"};function k(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function Z(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:i,email:s}=t,o=r||s&&`mailto:${s}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(k,{href:o},l.createElement("img",{className:f.image,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(k,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const P={authorCol:"authorCol_FlmR",imageOnlyAuthorRow:"imageOnlyAuthorRow_trpF",imageOnlyAuthorCol:"imageOnlyAuthorCol_S2np"};function C(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?P.imageOnlyAuthorRow:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?P.imageOnlyAuthorCol:P.authorCol),key:t},l.createElement(Z,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function I(e){const t=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:d,frontMatter:u,assets:p,metadata:E,truncated:v,isBlogPostPage:_=!1}=e,{date:f,formattedDate:k,permalink:Z,tags:P,readingTime:I,title:L,editUrl:T,authors:y}=E,w=p.image??u.image,A=!_&&v,x=P.length>0,R=_?"h1":"h2";return l.createElement("article",{className:_?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(R,{className:h.blogPostTitle,itemProp:"headline"},_?L:l.createElement(s.Z,{itemProp:"url",to:Z},L)),l.createElement("div",{className:(0,n.Z)(h.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:f,itemProp:"datePublished"},k),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(C,{authors:y,assets:p})),w&&l.createElement("meta",{itemProp:"image",content:a(w,{absolute:!0})}),l.createElement("div",{id:_?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:g.Z},d)),(x||v)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[h.blogPostDetailsFull]:_})},x&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":A})},l.createElement(N,{tags:P})),_&&T&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(b,{editUrl:T})),A&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":x})},l.createElement(s.Z,{to:E.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7294),n=a(1217),r=a(8665),i=a(4424),s=a(7462),o=a(5999),m=a(1750);function c(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,(0,s.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,(0,s.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var g=a(650),d=a(6043);function u(e){const{content:t,sidebar:a}=e,{assets:s,metadata:o}=t,{title:m,description:u,nextItem:p,prevItem:b,date:h,tags:E,authors:v,frontMatter:_}=o,{hide_table_of_contents:N,keywords:f,toc_min_heading_level:k,toc_max_heading_level:Z}=_,P=s.image??_.image;return l.createElement(r.Z,{wrapperClassName:g.kM.wrapper.blogPages,pageClassName:g.kM.page.blogPostPage,sidebar:a,toc:!N&&t.toc&&t.toc.length>0?l.createElement(d.Z,{toc:t.toc,minHeadingLevel:k,maxHeadingLevel:Z}):void 0},l.createElement(n.Z,{title:m,description:u,keywords:f,image:P},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:h}),v.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:v.map((e=>e.url)).filter(Boolean).join(",")}),E.length>0&&l.createElement("meta",{property:"article:tag",content:E.map((e=>e.label)).join(",")})),l.createElement(i.Z,{frontMatter:_,assets:s,metadata:o,isBlogPostPage:!0},l.createElement(t,null)),(p||b)&&l.createElement(c,{nextItem:p,prevItem:b}))}},1750:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(9960);function r(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},6043:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7462),n=a(7294),r=a(6010),i=a(650);function s(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function o(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:c,...g}=e;const d=(0,i.LU)(),u=m??d.tableOfContents.minHeadingLevel,p=c??d.tableOfContents.maxHeadingLevel,b=(0,i.b9)({toc:t,minHeadingLevel:u,maxHeadingLevel:p}),h=(0,n.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:p}}),[r,o,u,p]);return(0,i.Si)(h),n.createElement(s,(0,l.Z)({toc:b,className:a,linkClassName:r},g))}const m={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},c="table-of-contents__link toc-highlight",g="table-of-contents__link--active";function d(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.Z)(m.tableOfContents,"thin-scrollbar",t)},n.createElement(o,(0,l.Z)({},a,{linkClassName:c,linkActiveClassName:g})))}}}]);