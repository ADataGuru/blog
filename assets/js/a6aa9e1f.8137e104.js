"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[89],{8665:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(6010),n=a(7422),i=a(9960);const s={sidebar:"sidebar_a9qW",sidebarItemTitle:"sidebarItemTitle_uKok",sidebarItemList:"sidebarItemList_Kvuv",sidebarItem:"sidebarItem_CF0Q",sidebarItemLink:"sidebarItemLink_miNk",sidebarItemLinkActive:"sidebarItemLinkActive_RRTD"};var m=a(5999);function o(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:s.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}function c(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(o,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7294),r=a(2263),n=a(8665),i=a(4424),s=a(5999),m=a(1750);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,{permalink:a,title:l.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(m.Z,{permalink:r,title:l.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}var c=a(650);function g(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:m}}=(0,r.Z)(),{blogDescription:g,blogTitle:d,permalink:u}=t,p="/"===u?m:d;return l.createElement(n.Z,{title:p,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((e=>{let{content:t}=e;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}},4424:(e,t,a)=>{a.d(t,{Z:()=>I});var l=a(7294),r=a(6010),n=a(3905),i=a(5999),s=a(9960),m=a(4996),o=a(650),c=a(8780),g=a(66),d=a(7462);const u={iconEdit:"iconEdit_dcUD"};function p(e){let{className:t,...a}=e;return l.createElement("svg",(0,d.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(u.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function b(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(p,null),l.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const h={blogPostTitle:"blogPostTitle_rzP5",blogPostData:"blogPostData_Zg1s",blogPostDetailsFull:"blogPostDetailsFull_h6_j"},E={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function v(e){const{permalink:t,name:a,count:n}=e;return l.createElement(s.Z,{href:t,className:(0,r.Z)(E.tag,{[E.tagRegular]:!n,[E.tagWithCount]:n})},a,n&&l.createElement("span",null,n))}const _={tags:"tags_XVD_",tag:"tag_JSN8"};function N(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(_.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:_.tag},l.createElement(v,{name:t,permalink:a}))}))))}const f={image:"image_o0gy"};function k(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function Z(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:i,email:s}=t,m=n||s&&`mailto:${s}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(k,{href:m},l.createElement("img",{className:f.image,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(k,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const P={authorCol:"authorCol_FlmR",imageOnlyAuthorRow:"imageOnlyAuthorRow_trpF",imageOnlyAuthorCol:"imageOnlyAuthorCol_S2np"};function T(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?P.imageOnlyAuthorRow:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?P.imageOnlyAuthorCol:P.authorCol),key:t},l.createElement(Z,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function I(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:d,frontMatter:u,assets:p,metadata:E,truncated:v,isBlogPostPage:_=!1}=e,{date:f,formattedDate:k,permalink:Z,tags:P,readingTime:I,title:w,editUrl:L,authors:C}=E,y=p.image??u.image,A=!_&&v,R=P.length>0,D=_?"h1":"h2";return l.createElement("article",{className:_?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(D,{className:h.blogPostTitle,itemProp:"headline"},_?w:l.createElement(s.Z,{itemProp:"url",to:Z},w)),l.createElement("div",{className:(0,r.Z)(h.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:f,itemProp:"datePublished"},k),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(T,{authors:C,assets:p})),y&&l.createElement("meta",{itemProp:"image",content:a(y,{absolute:!0})}),l.createElement("div",{id:_?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(n.Zo,{components:g.Z},d)),(R||v)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[h.blogPostDetailsFull]:_})},R&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":A})},l.createElement(N,{tags:P})),_&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(b,{editUrl:L})),A&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},l.createElement(s.Z,{to:E.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1750:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294),r=a(9960);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}}}]);