(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return O})),a.d(t,"metadata",(function(){return g})),a.d(t,"toc",(function(){return v})),a.d(t,"default",(function(){return f}));var n=a(3),s=a(7),r=a(0),o=a.n(r),c=a(113),l=a(128),u=a(110),i=a(81),b=a.n(i);var p=37,d=39;var m=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,s=e.values,c=e.groupId,i=e.className,m=Object(l.a)(),h=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(r.useState)(n),g=O[0],v=O[1],N=r.Children.toArray(e.children),f=[];if(null!=c){var x=h[c];null!=x&&x!==g&&s.some((function(e){return e.value===x}))&&v(x)}var w=function(e){var t=e.target,a=f.indexOf(t),n=N[a].props.value;v(n),null!=c&&(j(c,n),setTimeout((function(){var e,a,n,s,r,o,c,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,s=e.bottom,r=e.right,o=window,c=o.innerHeight,l=o.innerWidth,a>=0&&r<=l&&s<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,a;switch(e.keyCode){case d:var n=f.indexOf(e.target)+1;a=f[n]||f[0];break;case p:var s=f.indexOf(e.target)-1;a=f[s]||f[f.length-1]}null===(t=a)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":a},i)},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(u.a)("tabs__item",b.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:k,onFocus:w,onClick:w},a)}))),t?Object(r.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},j=["components"],O={title:"Comparaison d'outils pour documentation + blogs"},g={unversionedId:"tech_posts/2021-03-16-comparaison-outils-documentation",id:"tech_posts/2021-03-16-comparaison-outils-documentation",isDocsHomePage:!1,title:"Comparaison d'outils pour documentation + blogs",description:"Table des mati\xe8res",source:"@site/docs/tech_posts/2021-03-16-comparaison-outils-documentation.mdx",slug:"/tech_posts/2021-03-16-comparaison-outils-documentation",permalink:"/blog/docs/tech_posts/2021-03-16-comparaison-outils-documentation",editUrl:"https://github.com/CraftDataEngineer/blog/docs/tech_posts/2021-03-16-comparaison-outils-documentation.mdx",version:"current",sidebar:"docs",previous:{title:"Video Apache Parquet",permalink:"/blog/docs/tech_posts/2021-03-12-apache-parquet"},next:{title:"Postgresql, Miracles Queries",permalink:"/blog/docs/tech_posts/postgres-miracles-queries"}},v=[{value:"Table des mati\xe8res",id:"table-des-mati\xe8res",children:[]},{value:"\ud83d\ude80 Objectif de ce post \ud83d\ude80",id:"-objectif-de-ce-post-",children:[]},{value:"Nos besoins",id:"nos-besoins",children:[]},{value:"\ud83d\udcbb Les candidats \ud83d\udcbb",id:"-les-candidats-",children:[]},{value:"Sphinx \ud83d\udc31",id:"sphinx-",children:[]},{value:"Hugo",id:"hugo",children:[]},{value:"Docusaurus \ud83e\udd96",id:"docusaurus-",children:[]},{value:"D&#39;autres solutions que nous n&#39;avons pas retenues",id:"dautres-solutions-que-nous-navons-pas-retenues",children:[]},{value:"R\xe9sultats:",id:"r\xe9sultats",children:[]}],N={toc:v};function f(e){var t=e.components,a=Object(s.a)(e,j);return Object(c.b)("wrapper",Object(n.a)({},N,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"table-des-mati\xe8res"},"Table des mati\xe8res"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#objectif-de-ce-post"},"Objectif de ce post")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#les-candidats"},"Les candidats")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#r%C3%A9sultats"},"r\xe9sultats"))),Object(c.b)("h2",{id:"-objectif-de-ce-post-"},"\ud83d\ude80 Objectif de ce post \ud83d\ude80"),Object(c.b)("p",null,"Comparer plusieurs outils en fonctions des besoins d\xe9finis ci-dessous !"),Object(c.b)("p",null," Il n'y aura qu'un seul gagnant \ud83e\udd47 !"),Object(c.b)("h2",{id:"nos-besoins"},"Nos besoins"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"On veut :")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Quelque chose de sexy, qui donne envie (et non un skyblog so 2009)"),Object(c.b)("li",{parentName:"ul"},"Une barre de recherche"),Object(c.b)("li",{parentName:"ul"},"Le d\xe9ployer sur un stockage objet (s3) ou sur du gitlab/github pages"),Object(c.b)("li",{parentName:"ul"},"Que \xe7a soit simple \xe0 mettre en place (max 1/2 journ\xe9e)"),Object(c.b)("li",{parentName:"ul"},"Que \xe7a soit juste un markdown \xe0 ajouter/modifier/supprimer")),Object(c.b)("p",null,"Pour ceux qui ne sont pas int\xe9ress\xe9s aux d\xe9tails vous pouvez directement aller \xe0 la rubrique ",Object(c.b)("a",{parentName:"p",href:"#r%C3%A9sultats"},"r\xe9sultats")),Object(c.b)("h2",{id:"-les-candidats-"},"\ud83d\udcbb Les candidats \ud83d\udcbb"),Object(c.b)("p",null,"Les outils que nous avons retenus sont des projets OpenSource."),Object(c.b)("h2",{id:"sphinx-"},Object(c.b)("a",{parentName:"h2",href:"https://github.com/sphinx-doc/sphinx"},"Sphinx")," \ud83d\udc31"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/sphinx-doc/sphinx/stargazers"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/github/stars/sphinx-doc/sphinx?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))),Object(c.b)("p",null,"On le retrouve beaucoup pour les documentations python, lui m\xeame \xe9crit en \ud83d\udc0d !"),Object(c.b)("p",null,"(",Object(c.b)("em",{parentName:"p"},"voir les templates: ",Object(c.b)("a",{parentName:"em",href:"https://sphinx-themes.org/"},"https://sphinx-themes.org/")," , ils vous sont surement familiers")," \ud83d\ude09)"),Object(c.b)("p",null,"Il g\xe9n\xe8re des fichiers statiques (css,js,html) \xe0 partir de sources ",Object(c.b)("inlineCode",{parentName:"p"},"reStructuredText"),"."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Qu'est-ce que le format .rst ?")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Le format ",Object(c.b)("inlineCode",{parentName:"p"},".rst")," est un ",Object(c.b)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html"},"langage de balisage l\xe9ger")),Object(c.b)("p",{parentName:"div"},"Pour comprendre les diff\xe9rences entre le markdown et le reStructuredText, nous vous invitons \xe0 consulter cet ",Object(c.b)("a",{parentName:"p",href:"https://www.zverovich.net/2016/06/16/rst-vs-markdown.html"},"article")))),Object(c.b)("h2",{id:"hugo"},Object(c.b)("a",{parentName:"h2",href:"https://themes.gohugo.io/"},"Hugo")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/gohugoio/hugo/stargazers"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/github/stars/gohugoio/hugo?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))),Object(c.b)("p",null,"Vendu comme : ",Object(c.b)("inlineCode",{parentName:"p"},"The world\u2019s fastest framework for building websites")),Object(c.b)("p",null,"Hugo est un g\xe9n\xe9rator de site web ecrit en ",Object(c.b)("a",{parentName:"p",href:"https://golang.org/"},"Go")," "),Object(c.b)("p",null,"Il g\xe9n\xe8re du contenu statiques \xe0 partir du contenu qu'on a \xe9crit en markdown \ud83e\udd13 ( comme un README.md avec des metadata ) "),Object(c.b)("h2",{id:"docusaurus-"},Object(c.b)("a",{parentName:"h2",href:"https://github.com/facebook/docusaurus"},"Docusaurus")," \ud83e\udd96"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/gohugoio/facebook/docusaurus"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/github/stars/facebook/docusaurus?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))),Object(c.b)("p",null,"D\xe9velopp\xe9 par Facebook, il est utilis\xe9 pour les documentations de React, React Native, Redux... "),Object(c.b)("p",null,"Docusaurus est \xe9crit en js/ts (react) et permet de g\xe9n\xe9rer un site avec du contenu \xe9crit en markdown. "),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Des examples r\xe9alis\xe9s avec docusaurus")," : ",Object(c.b)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"https://docusaurus.io/showcase")),Object(c.b)("h2",{id:"dautres-solutions-que-nous-navons-pas-retenues"},"D'autres solutions que nous n'avons pas retenues"),Object(c.b)("p",null,Object(c.b)("del",{parentName:"p"},Object(c.b)("a",{parentName:"del",href:"https://github.com/mkdocs/mkdocs"},"Mkdocs"))),Object(c.b)("p",null,Object(c.b)("del",{parentName:"p"},Object(c.b)("a",{parentName:"del",href:"https://www.gatsbyjs.com/docs/"},"Gatsby"))),Object(c.b)("p",null,Object(c.b)("del",{parentName:"p"},Object(c.b)("a",{parentName:"del",href:"https://docs.gitbook.com/"},"GitBook"))),Object(c.b)("p",null,Object(c.b)("del",{parentName:"p"},Object(c.b)("a",{parentName:"del",href:"https://jekyllrb.com/docs/"},"Jekyll"))),Object(c.b)("h2",{id:"r\xe9sultats"},"R\xe9sultats:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null}),Object(c.b)("th",{parentName:"tr",align:null},"searchbar"),Object(c.b)("th",{parentName:"tr",align:null},"style subjectif"),Object(c.b)("th",{parentName:"tr",align:null},"facile"),Object(c.b)("th",{parentName:"tr",align:null},"customisable"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Sphynx"),Object(c.b)("td",{parentName:"tr",align:null},"\u2705"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Hugo"),Object(c.b)("td",{parentName:"tr",align:null},"\u2705"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Docusaurus"),Object(c.b)("td",{parentName:"tr",align:null},"\u2705"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),Object(c.b)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")))),Object(c.b)(m,{className:"unique-tabs",defaultValue:"docusaurus",values:[{label:"\ud83e\udd47 Docusaurus",value:"docusaurus"},{label:"\ud83e\udd48 Sphynx",value:"sphynx"},{label:"\ud83e\udd49 Hugo",value:"hugo"}],mdxType:"Tabs"},Object(c.b)(h,{value:"docusaurus",mdxType:"TabItem"},Object(c.b)("p",null,"  On a retenu Docusaurus, car : "),Object(c.b)("p",null,"  Il propose des fonctionnalit\xe9s markdown qu'on ne retrouvait pas chez les autres, voir\nla doc ",Object(c.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features/tabs#!"},"Markdown Features")),Object(c.b)("p",null,"  Il propose un composant de barre de recherche ",Object(c.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/search"},"algolia DocSearch"),"\nqui marche tr\xe8s bien !"),Object(c.b)("p",null,"  Le th\xe8me du starter est tr\xe8s joli \ud83d\ude44")),Object(c.b)(h,{value:"sphynx",mdxType:"TabItem"},"Facile \xe0 prendre en main et top pour de la documentation de projet, mais compliqu\xe9 \xe0 customiser pour une utilisation plus orient\xe9 blog..."),Object(c.b)(h,{value:"hugo",mdxType:"TabItem"},"On a pas trouv\xe9 un th\xe8me qui correspondait vraiment \xe0 ce qu'on recherchait")))}f.isMDXComponent=!0}}]);