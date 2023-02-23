"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[324],{8643:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={title:"Terraform - Concept & Workflow",date:new Date("2022-11-11T00:00:00.000Z")},l=void 0,i={permalink:"/blog/2022/11/01/terraform-concepts-et-workflow",source:"@site/blog/2022-11-01-terraform-concepts-et-workflow.md",title:"Terraform - Concept & Workflow",description:"Objectifs :",date:"2022-11-11T00:00:00.000Z",formattedDate:"11 novembre 2022",tags:[],readingTime:3.59,truncated:!0,authors:[],frontMatter:{title:"Terraform - Concept & Workflow",date:"2022-11-11T00:00:00.000Z"},prevItem:{title:"Loi de Conway",permalink:"/blog/2023/16/02/loi-de-conway"}},s={authorsImageUrls:[]},p=[{value:"Objectifs :",id:"objectifs-",level:2},{value:"Rappels : 101 Terraform",id:"rappels--101-terraform",level:2},{value:"Les concepts : Terraform Core &amp; Terraform Plugin",id:"les-concepts--terraform-core--terraform-plugin",level:2},{value:"Cin\xe9matique g\xe9n\xe9rale de Terraform",id:"cin\xe9matique-g\xe9n\xe9rale-de-terraform",level:2},{value:"Les workflows Terraform",id:"les-workflows-terraform",level:2},{value:"Workflow standard",id:"workflow-standard",level:3},{value:"Workflow lors d&#39;une cr\xe9ation d&#39;infrastructure",id:"workflow-lors-dune-cr\xe9ation-dinfrastructure",level:3},{value:"Workflow lors d&#39;une mise \xe0 jour d&#39;infrastructure",id:"workflow-lors-dune-mise-\xe0-jour-dinfrastructure",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},m="wrapper";function d(e){let{components:r,...o}=e;return(0,n.kt)(m,(0,a.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"objectifs-"},"Objectifs :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Comprendre les concepts : ",(0,n.kt)("inlineCode",{parentName:"li"},"Terraform core")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"Terraform plugin")),(0,n.kt)("li",{parentName:"ul"},"Connaitre les diff\xe9rents workflows de Terraform")),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"img.png",src:t(9861).Z,width:"1005",height:"516"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"rappels--101-terraform"},"Rappels : 101 Terraform"),(0,n.kt)("p",null,"Terraform est un ",(0,n.kt)("strong",{parentName:"p"},"projet open source")," cr\xe9\xe9 en ",(0,n.kt)("strong",{parentName:"p"},"2014")," par ",(0,n.kt)("a",{parentName:"p",href:"https://www.hashicorp.com/"},"Hashicorp"),"."),(0,n.kt)("p",null,"A l'\xe9criture de ce blog, Terraform a :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"35K")," \u2b50\ufe0f"),(0,n.kt)("li",{parentName:"ul"},"Plus de ",(0,n.kt)("inlineCode",{parentName:"li"},"30k commits")),(0,n.kt)("li",{parentName:"ul"},"Plus de ",(0,n.kt)("inlineCode",{parentName:"li"},"1600 contributeurs"))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"img.png",src:t(8568).Z,width:"1538",height:"755"}),"\n",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/hashicorp/terraform"},"https://github.com/hashicorp/terraform"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ce qu'on peut faire avec Terraform :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"G\xe9rer des ressources d'infrastructure de plusieurs ",(0,n.kt)("strong",{parentName:"li"},"fournisseurs cloud"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cr\xe9er une infrastructure r\xe9seau sur AWS"),(0,n.kt)("li",{parentName:"ul"},"D\xe9ployer un cluster Kubernetes sur GCP"))),(0,n.kt)("li",{parentName:"ul"},"Int\xe9ragir avec des ",(0,n.kt)("strong",{parentName:"li"},"produits d'infrastructure"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ins\xe9rer des secrets dans un Vault "),(0,n.kt)("li",{parentName:"ul"},"D\xe9ployer une application sur Heroku"))),(0,n.kt)("li",{parentName:"ul"},"Configurer des ",(0,n.kt)("strong",{parentName:"li"},"services d\u2019infrastructure"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cr\xe9er un projet/groupe/utilisateur sur GitLab"),(0,n.kt)("li",{parentName:"ul"},"Initialiser une base de donn\xe9es PostgreSQL (et ses utilisateurs)")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"les-concepts--terraform-core--terraform-plugin"},"Les concepts : Terraform Core & Terraform Plugin"),(0,n.kt)("p",null,"Terraform a la capacit\xe9 de se ",(0,n.kt)("strong",{parentName:"p"},"brancher")," avec de ",(0,n.kt)("strong",{parentName:"p"},"nombreux providers")," : ",(0,n.kt)("em",{parentName:"p"},"AWS, GCP, AZURE, ELASTIC...")," ",(0,n.kt)("em",{parentName:"p"},"Mais le fonctionnement interne de terraform ne change pas entre 2 providers.")),(0,n.kt)("p",null,"Pour cela, Terraform est compos\xe9 de ",(0,n.kt)("strong",{parentName:"p"},"2 parties")," ",(0,n.kt)("em",{parentName:"p"},"(s\xe9par\xe9es par un contrat d'interface)")," :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Terraform Core :")," Il s'agit du binaire Terraform qui communique avec les plugins pour g\xe9rer les ressources de l'infrastructure.\nIl fournit une interface commune qui vous permet de tirer parti de nombreux fournisseurs\nde Clouds, bases de donn\xe9es, services et solutions internes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Terraform Plugin :")," Il s'agit de binaires ex\xe9cutables \xe9crits en Go qui communiquent avec Terraform Core via une interface RPC. Chaque plugin expose une impl\xe9mentation pour un service sp\xe9cifique, tel que le fournisseur AWS ou le\nfournisseur cloud-init. "))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"img.png",src:t(5144).Z,width:"983",height:"182"})),(0,n.kt)("p",null,"Actuellement, Terraform ne supporte qu'un seul type de plugin appel\xe9 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://developer.hashicorp.com/terraform/language/providers"},"Providers")),".",(0,n.kt)("br",{parentName:"p"}),"\n","Vous pouvez retrouver la liste en suivant le lien : ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/browse/providers"},"https://registry.terraform.io/browse/providers")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Des plugins custom")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"On peut \xe9galement d\xe9velopper nos propres providers, Terraform propose un tutoriel : ",(0,n.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/providers-plugin-framework/providers-plugin-framework-provider"},"Implement a Provider with the Terraform Plugin Framework")))),(0,n.kt)("h2",{id:"cin\xe9matique-g\xe9n\xe9rale-de-terraform"},"Cin\xe9matique g\xe9n\xe9rale de Terraform"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Le d\xe9veloppeur(se) \ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb ",(0,n.kt)("strong",{parentName:"li"},"d\xe9veloppe")," le code Terraform"),(0,n.kt)("li",{parentName:"ol"},"Le d\xe9veloppeur(se) \ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb ",(0,n.kt)("strong",{parentName:"li"},"ex\xe9cute")," des commandes Terraform"),(0,n.kt)("li",{parentName:"ol"},"Terraform lit la ",(0,n.kt)("strong",{parentName:"li"},"configuration")," (code) ainsi que le ",(0,n.kt)("strong",{parentName:"li"},"fichier d'\xe9tat")," **"),(0,n.kt)("li",{parentName:"ol"},"Terraform cr\xe9e un ",(0,n.kt)("strong",{parentName:"li"},"plan d'ex\xe9cution")," : arbre de d\xe9pendances "),(0,n.kt)("li",{parentName:"ol"},"Terraform communique avec les APIs du provider pour ",(0,n.kt)("strong",{parentName:"li"},"appliquer les changements"))),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Fichier d'\xe9tat")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"}," ** ",(0,n.kt)("strong",{parentName:"p"},"Le fichier d'\xe9tat")," est utilis\xe9 par Terraform pour faire correspondre les ",(0,n.kt)("strong",{parentName:"p"},"ressources du monde r\xe9el")," \xe0 votre ",(0,n.kt)("strong",{parentName:"p"},"configuration")," et conserver la trace des m\xe9tadonn\xe9es."))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"img.png",src:t(1073).Z,width:"1609",height:"562"})),(0,n.kt)("h2",{id:"les-workflows-terraform"},"Les workflows Terraform"),(0,n.kt)("p",null,"Dans cette section nous allons voir les diff\xe9rents workflow Terraform : "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Workflow standard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Workflow lors d'une cr\xe9ation d'infrastructure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Workflow lors d'une mise \xe0 jour d'infrastructure"))),(0,n.kt)("h3",{id:"workflow-standard"},"Workflow standard"),(0,n.kt)("hr",null),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour mettre en place notre ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Working_directory"},"working directory"))," il faut lancer la commande suivante :"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"terraform init")," ")),(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f A chaque ajout de nouveau ",(0,n.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/modules/syntax"},"module")," ou de provider il faudra, re-lancer cette commande.")),(0,n.kt)("p",null,"Une fois l'initialisation faite, le worklow standard pour d\xe9velopper du Terraform peut se r\xe9sumer en ",(0,n.kt)("strong",{parentName:"p"},"3 \xe9tapes")," :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"terraform plan")," : ",(0,n.kt)("strong",{parentName:"li"},"Afficher")," les changements requis par la configuration actuelle ",(0,n.kt)("em",{parentName:"li"},"(plan d'ex\xe9cution)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"terraform apply")," : ",(0,n.kt)("strong",{parentName:"li"},"Appliquer")," le plan d'ex\xe9cution sur l'infrastructure r\xe9elle."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"terraform destroy")," : ",(0,n.kt)("strong",{parentName:"li"},"Supprimer")," toute l'infrastructure cr\xe9e avec Terraform ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Une fois qu'on a d\xe9velopp\xe9 notre code Terraform, on peut le ",(0,n.kt)("strong",{parentName:"p"},"v\xe9rifier")," avec la commande :\n",(0,n.kt)("inlineCode",{parentName:"p"},"terraform validate")," avant m\xeame de lancer la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform plan")," pour avoir un feedback plus rapide.")),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"img.png",src:t(275).Z,width:"1487",height:"574"})),(0,n.kt)("p",null,"Pour aller plus loin : ",(0,n.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/intro/core-workflow"},"The Core Terraform Workflow")),(0,n.kt)("h3",{id:"workflow-lors-dune-cr\xe9ation-dinfrastructure"},"Workflow lors d'une cr\xe9ation d'infrastructure"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Pour la premi\xe8re ex\xe9cution de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply")," : "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Terraform cr\xe9e ",(0,n.kt)("strong",{parentName:"li"},"l'infrastructure")," d\xe9finie dans votre configuration (code terraform)."),(0,n.kt)("li",{parentName:"ul"},"Terraform cr\xe9e le ",(0,n.kt)("strong",{parentName:"li"},"fichier d'\xe9tat")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"tfstate"),".  ")),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"img.png",src:t(3851).Z,width:"1560",height:"446"})),(0,n.kt)("h3",{id:"workflow-lors-dune-mise-\xe0-jour-dinfrastructure"},"Workflow lors d'une mise \xe0 jour d'infrastructure"),(0,n.kt)("hr",null),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"R\xe9cup\xe9ration du tfstate")," :  r\xe9cup\xe9rer le dernier \xe9tat mis \xe0 jour par Terraform."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"R\xe9cup\xe9ration des \xe9tats r\xe9els")," : r\xe9cup\xe9rer les \xe9ventuels changements d'infrastructure, externe \xe0 Terraform (modification \xe0 la main)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Application des diff\xe9rences")," : cr\xe9er un plan d'ex\xe9cution et appliquer ces changements sur l'infrastructure r\xe9elle."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Mise \xe0 jour du tfstate")," :  mettre \xe0 jour le tfstate avec l'infrastructure actuelle.")),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"img.png",src:t(5526).Z,width:"1392",height:"525"})),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Pour aller plus loin, dans le prochain article nous expliquerons en d\xe9tail le ",(0,n.kt)("strong",{parentName:"p"},"fichier d'\xe9tat"),".    "),(0,n.kt)("p",null,"Et pour ceux qui souhaitent creuser les notions ",(0,n.kt)("inlineCode",{parentName:"p"},"Terraform Core")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"Terraform Plugin")," on vous recommande la vid\xe9o :\n",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=oNHABU-8xfs&t=400s"},"Comment d\xe9velopper votre propre plugin Terraform ?")))}d.isMDXComponent=!0},1073:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/cin\xe9matique_terraform-9c69b0517494a55fb4cbbb7f3ebdea49.png"},275:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/standard_workflow-2756b41fb4686a55da2be880d9bf3b6f.png"},5144:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/terraform_core_plugin-82e1fa4e71a1a3b0541b55c32f2f0055.png"},8568:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/terraform_github-76aedb9cfc1b6c8bf686ab6db814208d.png"},9861:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/terraform_orchestrateur-ad503d8eb2b76416b03d39b1917fe329.png"},3851:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/workflow_creation-a8da6624918444e2c58e0710d9afb2f6.png"},5526:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/workflow_mise_a_jour-f6c8f96afda787a9bf4426ce7ac13ca6.png"}}]);