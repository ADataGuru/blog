"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[670],{5247:(e,t,a)=>{a.d(t,{ZP:()=>c});const r={_origin:"https://api.emailjs.com"},l=(e,t,a)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class s{constructor(e){this.status=e.status,this.text=e.responseText}}const n=(e,t,a={})=>new Promise(((l,n)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:e})=>{const t=new s(e);200===t.status||"OK"===t.text?l(t):n(t)})),c.addEventListener("error",(({target:e})=>{n(new s(e))})),c.open("POST",r._origin+e,!0),Object.keys(a).forEach((e=>{c.setRequestHeader(e,a[e])})),c.send(t)})),c={init:(e,t="https://api.emailjs.com")=>{r._userID=e,r._origin=t},send:(e,t,a,s)=>{const c=s||r._userID;l(c,e,t);const o={lib_version:"3.6.2",user_id:c,service_id:e,template_id:t,template_params:a};return n("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},sendForm:(e,t,a,s)=>{const c=s||r._userID,o=(e=>{let t;if(t="string"==typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(a);l(c,e,t);const i=new FormData(o);return i.append("lib_version","3.6.2"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",c),n("/api/v1.0/email/send-form",i)}}},3713:(e,t,a)=>{a.d(t,{Z:()=>J});var r,l,s,n,c,o,i,m,d,f,u,p,E,h,v,k,g,b,N,w,y,M,_,W,q,S,T,x,C,P,L,j,D,O,Z,B,F,I,z,V,A,R=a(7294);function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},H.apply(this,arguments)}const J=e=>{let{title:t,titleId:a,...J}=e;return R.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 524.518 299.454",width:1049.035,height:598.907,"aria-labelledby":a},J),t?R.createElement("title",{id:a},t):null,r||(r=R.createElement("defs",null,R.createElement("style",null,'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}'))),l||(l=R.createElement("path",{fill:"transparent",d:"M0 0h524.518v299.454H0z"})),R.createElement("text",{x:69.117,y:33.821,fontFamily:"Virgil, Segoe UI Emoji",fontSize:37.432,fill:"#ffff",textAnchor:"middle",style:{whiteSpace:"pre"},transform:"translate(56.204 135.375)"},"Th\xe9orie"),R.createElement("text",{x:85.691,y:31.469,fontFamily:"Virgil, Segoe UI Emoji",fontSize:36.167,fill:"#ffff",textAnchor:"middle",style:{whiteSpace:"pre"},transform:"translate(304.805 132.982)"},"Pratique"),R.createElement("g",{id:"arrow1",strokeLinecap:"round",style:{"--order":1}},s||(s=R.createElement("path",{d:"M391.006 289.458c7.171-1.868 27.033-5.351 41.716-12.471 14.671-7.13 38.338-25.545 46.347-30.289m-89.412 42.472c7.016-2.193 26.97-7.064 41.715-13.98 14.745-6.915 38.423-22.707 46.758-27.496M462.934 268.377c2.538-5.02 4.735-7.137 17.075-21.448m-19.516 21.47c4.657-4.575 9.802-9.573 18.042-19.933",stroke:"#ffff",strokeWidth:2,fill:"none"})),n||(n=R.createElement("path",{d:"M453.094 252.347c4.737-1.404 9.166.121 26.915-5.418m-29.356 5.44c7.01-.654 14.557-1.737 27.882-3.903",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow8",style:{"--order":8},strokeLinecap:"round"},c||(c=R.createElement("path",{d:"M130.742 277.09c-6.847-2.074-25.888-4.866-40.431-11.508-14.533-6.652-38.77-23.791-46.806-28.367m88.612 42.054c-6.921-1.95-27.55-5.97-42.395-12.795-14.845-6.826-38.785-23.079-46.697-28.164",stroke:"#ffff",strokeWidth:2,fill:"none"})),o||(o=R.createElement("path",{d:"M67.765 245.808c-7.126-2.104-12.792-5.81-23.738-5.409m26.185 4.727c-5.937-1.373-12.245-3.137-27.14-7.062",stroke:"#ffff",strokeWidth:2,fill:"none"})),i||(i=R.createElement("path",{d:"M57.484 261.55c-4.337-6.25-7.245-14.187-13.457-21.15m15.904 20.467c-3.59-4.781-7.685-9.908-16.86-22.803",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow2",style:{"--order":2},strokeLinecap:"round"},m||(m=R.createElement("path",{d:"M495.188 218.972c2.375-7.165 11.586-27.477 14.807-43.538 3.226-16.07 4.005-43.954 4.525-52.86m-19.287 94.359c2.402-7.07 12.519-24.912 15.385-40.668 2.874-15.751 1.321-44.853 1.846-53.85",stroke:"#ffff",strokeWidth:2,fill:"none"})),d||(d=R.createElement("path",{d:"M523.265 148.88c-5.456-6.725-6.821-17.563-12.034-25.964m10.275 24.46c-3.708-6.386-4.815-14.601-9.033-23.854",stroke:"#ffff",strokeWidth:2,fill:"none"})),f||(f=R.createElement("path",{d:"M504.47 148.746c.244-6.7 4.5-17.5 6.76-25.83m-8.527 24.32c2.053-6.428 6.603-14.608 9.77-23.714",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow9",style:{"--order":9},strokeLinecap:"round"},u||(u=R.createElement("path",{d:"M29.53 221.76c-2.262-7.046-10.429-24.274-13.429-40.208-2.99-15.938-3.843-46.36-4.554-55.402m19.735 96.666c-2.393-7.178-12.804-24.969-16.354-41.086-3.55-16.117-3.995-46.242-4.932-55.626",stroke:"#ffff",strokeWidth:2,fill:"none"})),p||(p=R.createElement("path",{d:"M19.555 152.22c-3.303-12.104-8.584-19.85-8.514-26.072m11.086 25.464c-3.362-5.82-5.613-11.173-12.721-25.21",stroke:"#ffff",strokeWidth:2,fill:"none"})),E||(E=R.createElement("path",{d:"M.792 153.369c3.92-12.641 5.977-20.84 10.25-27.221M3.363 152.76c.824-5.923 2.769-11.547 6.042-26.36",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow3",style:{"--order":3},strokeLinecap:"round"},h||(h=R.createElement("path",{d:"M498.624 85.159c-4.232-6.114-13.673-23.624-24.912-35.34-11.243-11.726-35.146-29.296-42.535-34.985m67.518 71.517c-4.028-6.077-14.67-23.137-26.153-34.806-11.482-11.67-35.61-29.156-42.748-35.205",stroke:"#ffff",strokeWidth:2,fill:"none"})),v||(v=R.createElement("path",{d:"M454.727 23.42c-5.598-1.26-12.01-3.675-22.562-6.09m23.359 8.577c-4.543-2.405-12.456-4.936-25.297-8.687",stroke:"#ffff",strokeWidth:2,fill:"none"})),k||(k=R.createElement("path",{d:"M443.073 38.173c-2.906-4.901-6.53-10.847-10.908-20.843m11.708 23.338c-1.801-5.846-7.027-11.794-13.646-23.448",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow10",style:{"--order":10},strokeLinecap:"round"},g||(g=R.createElement("path",{d:"M13.699 105.04c4.047-6.024 13.66-24.966 24.803-37.07C49.64 55.855 73.41 38.334 80.55 32.374m-68.454 70.849c3.88-6.234 13.769-24.728 25.552-36.521 11.787-11.803 38.028-28.425 45.18-34.269M67.521 53.837c4.89-5.774 9.475-10.631 16.038-21.407M68.18 54.906c2.913-5.792 6.94-12.365 15.26-22.343",stroke:"#ffff",strokeWidth:2,fill:"none"})),b||(b=R.createElement("path",{d:"M56.48 38.62c8.11-1.226 15.896-1.664 27.079-6.19M57.14 39.69c6.113-1.44 13.314-3.63 26.301-7.127",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow4",style:{"--order":4},strokeLinecap:"round"},N||(N=R.createElement("path",{d:"M414.019 10.003c-7.243.22-27.868-.685-43.85 2.723-15.97 3.41-43.494 14.98-52.017 17.732m96.932-19.456c-7.014.006-27.929-2.467-43.963.633-16.022 3.092-43.492 14.638-52.205 17.94",stroke:"#ffff",strokeWidth:2,fill:"none"})),w||(w=R.createElement("path",{d:"M339.01 10.887c-6.101 6.942-13.744 14.861-21.046 17.512m21.165-16.53c-6.637 5.989-12.934 11.183-20.116 18.142",stroke:"#ffff",strokeWidth:2,fill:"none"})),y||(y=R.createElement("path",{d:"M345.888 28.387c-8.471.622-18.617 2.154-27.924.012m28.044.97c-9.088-.009-17.744-.82-26.995.642",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow11",style:{"--order":11},strokeLinecap:"round"},M||(M=R.createElement("path",{d:"M102.884 30.348c7.323.22 27.425-1.74 43.39 1.621 15.965 3.36 43.736 15.222 52.408 18.52M104.32 30.794c7.518.57 26.914-.335 42.688 2.706 15.786 3.05 42.976 12.667 51.99 15.56",stroke:"#ffff",strokeWidth:2,fill:"none"})),_||(_=R.createElement("path",{d:"M170.057 48.72c9.75.13 21.035-1.179 30.637-.859M171.35 49.89c6.844-.96 14.15-.637 27.382-1.351",stroke:"#ffff",strokeWidth:2,fill:"none"})),W||(W=R.createElement("path",{d:"M175.985 30.874c7.674 6.625 16.81 11.79 24.709 16.987M177.29 32.052c5.159 3.733 10.924 8.702 21.442 16.486",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow5",style:{"--order":5},strokeLinecap:"round"},q||(q=R.createElement("path",{d:"M303.513 43.94c-3.926 6.449-17.538 22.512-23.715 37.35-6.17 14.843-10.833 42.835-13.31 51.719m36.164-91.369c-3.983 6.318-16.981 23.06-23.356 38.496-6.375 15.437-12.737 45.437-14.887 54.103",stroke:"#ffff",strokeWidth:2,fill:"none"})),S||(S=R.createElement("path",{d:"M261.107 105.011c3.271 9.756 1.759 14.282 4.508 28.064m-4.552-27.381c1.926 10.821 1.958 21.367 3.1 29.381",stroke:"#ffff",strokeWidth:2,fill:"none"})),T||(T=R.createElement("path",{d:"M279.408 109.315c-1.712 8.625-8.226 11.978-13.793 23.76m13.75-23.077c-4.59 9.308-11.111 18.321-15.203 25.077",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow12",style:{"--order":12},strokeLinecap:"round"},x||(x=R.createElement("path",{d:"M213.884 58.53c4.164 6.144 17.154 21.958 23.525 36.983 6.371 15.026 12.506 44.467 14.702 53.17m-39.754-90.91c3.682 6.037 16.281 22.103 22.401 37.177 6.113 15.081 11.605 44.717 14.312 53.303",stroke:"#ffff",strokeWidth:2,fill:"none"})),C||(C=R.createElement("path",{d:"M231.55 125.657c3.682 6.158 10.368 10.775 17.159 22.596m-15.261-22.22c4.152 4.217 9.238 11.642 16.06 21.779",stroke:"#ffff",strokeWidth:2,fill:"none"})),P||(P=R.createElement("path",{d:"M249.785 121.066c-1.247 7.306.49 13.17-1.076 27.187m2.98-26.804c-.62 5.361-.332 13.992-2.182 26.363",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow14",style:{"--order":14},strokeLinecap:"round"},L||(L=R.createElement("path",{d:"M281.507 228.597c5.63 4.632 19.002 19.665 32.922 28.626 13.913 8.953 42.404 21.078 50.576 25.13m-83.56-55.585c5.363 5.342 19.841 23.674 33.633 33.005 13.793 9.331 41.196 19.254 49.111 23",stroke:"#ffff",strokeWidth:2,fill:"none"})),j||(j=R.createElement("path",{d:"M337.428 280.672c5.28.999 15.856-.134 26.81 1.921m-27.782-1.825c9.373.68 19.32 1.647 28.527 1.846",stroke:"#ffff",strokeWidth:2,fill:"none"})),D||(D=R.createElement("path",{d:"M344.74 263.349c3.125 6.446 11.453 10.63 19.498 19.244m-20.462-19.155c6.71 6.712 14.06 13.81 21.207 19.176",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow7",style:{"--order":7},strokeLinecap:"round"},O||(O=R.createElement("path",{d:"M226.727 230.102c-3.876 3.344-8.645 12.482-20.334 19.845-11.696 7.356-41.511 20.165-49.807 24.324m72.8-44.315c-3.917 3.605-10.21 13.92-22.25 21.579-12.041 7.644-41.272 20.65-49.984 24.337",stroke:"#ffff",strokeWidth:2,fill:"none"})),Z||(Z=R.createElement("path",{d:"M176.203 258.763c-7.48 5.19-15.772 12.01-17.844 16.637m17.981-19.25c-3.238 6.011-8.134 8.773-18.06 19.558",stroke:"#ffff",strokeWidth:2,fill:"none"})),B||(B=R.createElement("path",{d:"M183.773 275.972c-10.508-1.475-21.801-1.466-25.414-.572m25.559-2.035c-4.781 2.393-11.231 1.617-25.638 2.343",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow6",style:{"--order":6},strokeLinecap:"round"},F||(F=R.createElement("path",{d:"M268.249 150.966c-1.496 5.25-4.36 20.443-9.597 30.794-5.228 10.358-18.252 26.078-21.81 31.35m30.089-61.596c-1.907 5.205-5.477 19.324-10.404 29.769-4.927 10.444-16.16 27.512-19.15 32.904",stroke:"#ffff",strokeWidth:2,fill:"none"})),I||(I=R.createElement("path",{d:"M241.765 194.29c-1.016 7.665-2.935 15.327-5.765 18.609m5.16-16.855c-.054 3.729-2.254 8.355-3.412 18.016",stroke:"#ffff",strokeWidth:2,fill:"none"})),z||(z=R.createElement("path",{d:"M253.116 201.127c-4.947 5.252-10.83 10.538-17.116 11.772m16.505-10.009c-3.115 1.955-8.332 4.768-14.757 11.17",stroke:"#ffff",strokeWidth:2,fill:"none"}))),R.createElement("g",{id:"arrow13",style:{"--order":13},strokeLinecap:"round"},V||(V=R.createElement("path",{d:"M245.579 153.824c1.682 5.052 4.448 21.357 9.397 31.989 4.956 10.625 16.83 26.314 20.3 31.796M247.6 154.26c1.038 5.398.483 21.127 5.606 31.786 5.109 10.657 21.011 26.91 25.074 32.175",stroke:"#ffff",strokeWidth:2,fill:"none"})),A||(A=R.createElement("path",{d:"M260.807 208.152c6.42 2.252 10.353 6.969 17.974 11.677m-17.256-10.791c5.676 3.79 13.644 6.688 16.42 9.067M270.855 199.515c3.688 4.746 4.83 11.864 7.926 20.314m-7.208-19.428c1.754 7.294 5.74 13.618 6.372 17.704",stroke:"#ffff",strokeWidth:2,fill:"none"}))))}},9819:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var r=a(7294),l=a(6177),s=a(2263),n=a(5247),c=a(4184),o=a.n(c);const i="formContainer_A8RJ",m="titleContainer_B3KE",d="formTeaser_HkCf";var f=a(9960);const u=a.p+"assets/images/think-21718059807219e9d65f5d66b089442b.png";function p(){const[e,t]=(0,r.useState)(!1),[a,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!1),u=(0,r.useRef)();return r.createElement("div",null,r.createElement("div",{className:o()("container",m)},r.createElement("div",{className:"row  "},r.createElement("div",{className:"col"},r.createElement("h3",{className:o()(d)},r.createElement("span",null,"Posez nous toutes vos questions !"))))),r.createElement("div",{className:o()("container"),style:{paddingBottom:"200px"}},r.createElement("form",{className:o()(i,"shadow--lw"),ref:u,onSubmit:e=>{e.preventDefault(),t(!0),n.ZP.sendForm("service_kmjngyo","template_1t3e77o",u.current,"XelOog_ZvkGiZ60Ty").then((e=>{l(!0),t(!1)}),(e=>{c(!0),t(!1)}))}},r.createElement("div",{className:"row row--no-gutters "},r.createElement("div",{className:"col col--1"}),r.createElement("div",{className:"col col--2"},r.createElement("div",{className:"field"},r.createElement("label",null,"@ Email "),r.createElement("label",{style:{fontSize:"0.8rem",color:"red"}},"\u066d"))),r.createElement("div",{className:"col col--5"},r.createElement("input",{type:"email",name:"email",className:"button--block",style:{fontSize:"0.9rem"},required:!0}))),r.createElement("div",{className:"row row--no-gutters ",style:{paddingTop:"10px"}},r.createElement("div",{className:"col col--1"}),r.createElement("div",{className:"col col--2"},r.createElement("div",{className:"field"},r.createElement("label",null,"? Questions "),r.createElement("label",{style:{fontSize:"0.8rem",color:"red"}},"\u066d"))),r.createElement("div",{className:"col col--5"},r.createElement("textarea",{name:"message",rows:"10",className:"button--block",style:{rows:"40",cols:"50"},required:!0}))),r.createElement("div",{className:"row row--no-gutters ",style:{paddingTop:"10px"}},r.createElement("div",{className:"col col--3"}),r.createElement("div",{className:"col col--5"},r.createElement("input",{type:"checkbox",id:"inscription",name:"inscription",value:"true"}),r.createElement("label",null," Je souhaite m'inscrire \xe0 la formation"))),r.createElement("div",{className:"row row--no-gutters ",style:{paddingTop:"10px"}},r.createElement("div",{className:"col col--3"}),!a&&!s&&!e&&r.createElement("div",{className:"col col--5"},r.createElement("button",{className:"button button--block button--outline button--primary"},"Envoyer")),a&&!s&&!e&&r.createElement("div",{className:"col col--5"},r.createElement("div",{className:"alert alert--success",role:"alert"},r.createElement("button",{"aria-label":"Close",className:"clean-btn close",type:"button"},r.createElement("span",{"aria-hidden":"true"},"\xd7")),"Message ",r.createElement("strong",null," envoy\xe9")," !"),r.createElement("br",null),r.createElement(f.Z,{to:"/"},r.createElement("button",{className:"button button--block  button--outline button--primary"},"Revenir \xe0 l'accueil"))),s&&!a&&!e&&r.createElement("div",{className:"col col--5"},r.createElement("div",{className:"alert alert--danger",role:"alert"},r.createElement("button",{"aria-label":"Close",className:"clean-btn close",type:"button"},r.createElement("span",{"aria-hidden":"true"},"\xd7")),r.createElement("strong",null,"Erreur")," le message n'est pas envoy\xe9 !"),r.createElement("br",null),r.createElement(f.Z,{to:"/#"},r.createElement("button",{className:"button button--block  button--outline button--primary"},"Revenir \xe0 l'accueil")))))))}const E="moduleSvg_Njn0",h="pratiqueSvg_PJ0v",v="displayMobileHeader_JLns",k="teaserContainer_nPOZ",g="teaserMenuTitle_Be92",b="backgroundTitle_SUXb",N="tabContainer_uS2r",w="teaserMenuDescription__wFu",y="teaserTeaser_EeqW",M="teaserDescription_aX49",_="pointsDescription_q45d",W="rowPadding_NmHt";a(3713);const q=a.p+"assets/images/exercices-e98089c0c6857d011544e35ddf632499.png",S=a.p+"assets/images/lab-e62c448383632f7164ad2cc877fae159.png",T=a.p+"assets/images/atelier-dfbf7d31017cbe69787fe0e8be3a941d.png",x=a.p+"assets/images/build-cb84a598730e38f34a638768d395b159.png",C=a.p+"assets/images/design-fc8e824e488e99ed134e60c996b382e6.png",P=a.p+"assets/images/takeaway-bda6dfbbe1e2ea4cb35214f0665fcd6a.png",L=a.p+"assets/images/judo-1ddf6cdefc18c73045834cd8eb356073.png",j=a.p+"assets/images/education-8c9a4c016e8ac86f3e35e6121def509f.png";var D=a(5113);class O extends r.Component{constructor(e){super(e),this.openBeta=()=>{this.setState((e=>({...e,showPratique:!0,showTheorie:!1})))},this.openAlpha=()=>{this.setState((e=>({...e,showPratique:!1,showTheorie:!0})))},this.state={showTheorie:!0,showPratique:!1}}render(){const e="undefined"!=typeof window&&window.innerWidth<=800;return r.createElement("div",{className:o()(k)},r.createElement("div",{className:o()("container",v)},r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("h3",{className:o()(y)},r.createElement("span",null,"Vous h\xe9sitez sur votre choix de formation ",r.createElement("span",{style:{color:"#f1bb00"}},"?"))),r.createElement("p",{className:o()(M)},"Une formation qui allie ",r.createElement("b",null,"th\xe9orie")," et ",r.createElement("b",null,"pratique")," et un accompagnement personnalis\xe9 pour chaque candidat.")),r.createElement("div",{className:"col col--5"},r.createElement("img",{alt:"inscription",src:u,className:o()(D.Z.infinteSvg)})))),r.createElement("div",{className:o()("container")},r.createElement("div",{className:o()("container",b)},r.createElement("ul",{className:o()("tabs shadow--tl "+(e?"":"tabs--block"))},r.createElement("li",{className:o()("tabs__item "+(this.state.showTheorie?"tabs__item--active":"")),style:{color:this.state.showTheorie?"black":"grey"},onClick:this.openAlpha},r.createElement("h2",{style:{fontFamily:"CircularStd-Black"}},"1. Th\xe9orie")),r.createElement("li",{className:"tabs__item "+(this.state.showPratique?"tabs__item--active":""),style:{color:this.state.showPratique?"black":"grey"},onClick:this.openBeta},r.createElement("h2",{style:{fontFamily:"CircularStd-Black"}}," 2. Pratique")))),this.state.showTheorie&&r.createElement("div",{className:o()("container",N)},r.createElement("div",{className:o()(_)},r.createElement("p",null,r.createElement("span",null,"Notre objectif est de vous fournir les comp\xe9tences n\xe9cessaires pour votre prochain r\xf4le de Data Engineer. On vous partagera nos connaissances et nos retours d'exp\xe9riences sur les bonnes pratiques du",r.createElement("b",null," Software CraftsManship")," pour vous diff\xe9rencier des autres profils."))),r.createElement("div",{className:o()("row",W)},r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(E),style:{marginTop:"20%"},src:j,alt:"test"})),r.createElement("h3",{className:o()(g)},r.createElement("span",null," Cours")),r.createElement("p",{className:o()(w)},r.createElement("span",null,"Nos cours utilisent un format p\xe9dagogique qui vous permettra de ma\xeetriser rapidement l\u2019ensemble des concepts cl\xe9s n\xe9cessaires \xe0 votre prochain r\xf4le !"))),r.createElement("div",{className:"col col--2"}),r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(E),src:T,alt:"test"})),r.createElement("h3",{className:o()(g)},r.createElement("span",null,"\xc9tudes de cas")),r.createElement("p",{className:o()(w)},r.createElement("span",null," On travaillera sur plusieurs \xe9tudes de cas inspir\xe9s de la vie r\xe9elle qui vous permettront de vous projeter facilement dans vos futures missions ! ")))),r.createElement("div",{className:"row",style:{padding:"5% 10% 10% 10%"}},r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(E),src:P,alt:"test"})),r.createElement("h3",{className:o()(g)},r.createElement("span",null,"Take Away")),r.createElement("p",{className:o()(w)},r.createElement("span",null," \xc0 la fin de chaque le\xe7on, on reviendra sur les notions importantes \xe0 retenir pour \xeatre toujours op\xe9rationnel dans votre quotidien de d\xe9veloppeur."))),r.createElement("div",{className:"col col--2"}),r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(E),src:L,alt:"test"})),r.createElement("h3",{className:o()(g)},r.createElement("span",null,"Dojo")),r.createElement("p",{className:o()(w)},r.createElement("span",null," Inspir\xe9 des Katas en sport de combat, on travaillera en groupe sur des probl\xe8mes algorithmiques et d\u2019architectures pour cr\xe9er les automatismes indispensables du Data Engineer."))))),this.state.showPratique&&r.createElement("div",{className:o()("container",N)},r.createElement("div",{className:o()(_)},r.createElement("p",null,r.createElement("span",null,"Notre formation est \xe0 ",r.createElement("b",null,"6O% de travaux pratiques. "),"On vous propose differents formats pour pratiquer et ma\xeetriser les concepts th\xe9oriques :"))),r.createElement("div",{className:o()("row",W)},r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(h),src:S,alt:"test"})),r.createElement("h3",{className:o()(g),style:{marginTop:"15%"}},r.createElement("span",null,"Travaux pratiques")),r.createElement("p",{className:o()(w)},r.createElement("span",null," Des TPs sont donn\xe9s lors des cours afin de dynamiser et d'appliquer les concepts th\xe9oriques. Ils seront r\xe9alis\xe9s principalement sur des environnements Cloud."))),r.createElement("div",{className:"col col--2"}),r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(h),src:C,alt:"test"})),r.createElement("h3",{className:o()(g)},r.createElement("span",null,"Ateliers Architectures")),r.createElement("p",{className:o()(w)},r.createElement("span",null," Les ateliers d'architectures sont anim\xe9s durant les s\xe9ances live, il faudra proposer une architecture cible par rapport \xe0 un besoin.")))),r.createElement("div",{className:"row",style:{padding:"5% 10% 10% 10%"}},r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(h),src:q,alt:"test"})),r.createElement("h3",{className:o()(g)},r.createElement("span",null,"Exercices maison")),r.createElement("p",{className:o()(w)},r.createElement("span",null,"Pratiquer en dehors des s\xe9ances live avec des exercices maison et une correction personnalis\xe9e pour chaque apprenant."))),r.createElement("div",{className:"col col--2"}),r.createElement("div",{className:"col"},r.createElement("div",null,r.createElement("img",{className:o()(h),src:x,alt:"test"})),r.createElement("h3",{className:o()(g)},r.createElement("span",null,"Projet fil rouge")),r.createElement("p",{className:o()(w)},r.createElement("span",null," Un travail de cadrage suivi d'un ",r.createElement("b",null," Proof of concept (PoC) ")," vous sera demand\xe9 sur plusieurs semaines pour finaliser cette formation. Vous allez pr\xe9senter le r\xe9sultat sous format d\xe9monstration devant les autres apprenants.")))))))}}const Z=O;function B(){const e=(0,s.Z)(),{siteConfig:t={}}=e;return r.createElement(l.Z,{title:""+t.title,description:"Description will go into a meta tag in <head />"},r.createElement("main",null,r.createElement(Z,null),r.createElement(p,null)))}},5113:(e,t,a)=>{a.d(t,{Z:()=>r});const r={features:"features_B00s",featureSvg:"featureSvg_y51a",infinteSvg:"infinteSvg_OaL_",moduleContainer:"moduleContainer_bflM",modulesTitle:"modulesTitle_oRB3",modulesTeaser:"modulesTeaser_KysF",modulesDescription:"modulesDescription_yQuY",modulesSvg:"modulesSvg_aeZe"}}}]);