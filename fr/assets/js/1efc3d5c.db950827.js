"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9717],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3802:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const i={sidebar_label:"Config.toml Guide"},a="D\xe9composition de Config.toml",l={unversionedId:"nodes/config-toml",id:"nodes/config-toml",title:"D\xe9composition de Config.toml",description:"- D\xe9composition de Config.toml",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/nodes/config-toml.md",sourceDirName:"nodes",slug:"/nodes/config-toml",permalink:"/fr/nodes/config-toml",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/config-toml.md",tags:[],version:"current",frontMatter:{sidebar_label:"Config.toml Guide"},sidebar:"nodes",previous:{title:"Devops Resources",permalink:"/fr/nodes/devops-resources"}},s={},u=[{value:"Pr\xe9-requis",id:"pr\xe9-requis",level:2},{value:"Comprendre config.toml",id:"comprendre-configtoml",level:2},{value:"Core",id:"core",level:3},{value:"P2P",id:"p2p",level:3},{value:"Bootstrap",id:"bootstrap",level:4},{value:"Pairs mutuels",id:"pairs-mutuels",level:4},{value:"Services",id:"services",level:3},{value:"TrustedHash et TrustedPeer",id:"trustedhash-et-trustedpeer",level:4}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"d\xe9composition-de-configtoml"},"D\xe9composition de Config.toml"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configtoml-breakdown"},"D\xe9composition de Config.toml"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pre-requisites"},"Pr\xe9-requis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#understanding-configtoml"},"Comprendre config.toml"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#core"},"[Core]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#p2p"},"[P2P]"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#bootstrap"},"Bootstrap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mutual-peers"},"Peers mutuels")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#services"},"[Services]"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#trustedhash-and-trustedpeer"},"TrustedHash et TrustedPeer"))))))))),(0,o.kt)("h2",{id:"pr\xe9-requis"},"Pr\xe9-requis"),(0,o.kt)("p",null,"Veuillez vous assurer que vous avez install\xe9 et initialis\xe9 Celestia Node"),(0,o.kt)("h2",{id:"comprendre-configtoml"},"Comprendre config.toml"),(0,o.kt)("p",null,"Apr\xe8s l'initialisation, pour n'importe quel type de node, vous trouverez un ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," dans le chemin suivant (emplacement par d\xe9faut):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.celestia-bridge/config.toml")," pour un Bridge node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.celestia-light/config.toml")," pour un light node")),(0,o.kt)("p",null,"Nous allons d\xe9composer certaines des sections les plus utilis\xe9es."),(0,o.kt)("h3",{id:"core"},"[Core]"),(0,o.kt)("p",null,"Cette section est n\xe9cessaire pour le Bridge Node Celestia. Par d\xe9faut, ",(0,o.kt)("inlineCode",{parentName:"p"},"Remote = false"),". Toujours pour un devnet, nous allons utiliser l'option remote core, cela peut \xe9galement \xeatre d\xe9fini avec la ligne de commande ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.remote"),"."),(0,o.kt)("h3",{id:"p2p"},"[P2P]"),(0,o.kt)("h4",{id:"bootstrap"},"Bootstrap"),(0,o.kt)("p",null,"Les bootstrappers aident les nouveaux n\u0153uds \xe0 trouver des pairs plus rapidement dans le r\xe9seau. Par d\xe9faut, le ",(0,o.kt)("inlineCode",{parentName:"p"},"Bootstrapper = false")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"BootstrapPeers"),' est vide. Si vous voulez que votre node soit un "bootstrapper", activez ',(0,o.kt)("inlineCode",{parentName:"p"},"Bootstrapper = true"),". Les ",(0,o.kt)("inlineCode",{parentName:"p"},"BootstrapPeers")," sont d\xe9j\xe0 fournies par d\xe9faut lors de l'initialisation. Si vous souhaitez ajouter les v\xf4tres manuellement, vous devez fournir le multiadresse des pairs."),(0,o.kt)("h4",{id:"pairs-mutuels"},"Pairs mutuels"),(0,o.kt)("p",null,"Le but de cette configuration est de mettre en place une communication bidirectionnelle. C'est g\xe9n\xe9ralement le cas pour les Bridge Node Celestia. De plus, vous aurez besoin de changer le champ ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerExchange")," de faux \xe0 vrai."),(0,o.kt)("h3",{id:"services"},"[Services]"),(0,o.kt)("h4",{id:"trustedhash-et-trustedpeer"},"TrustedHash et TrustedPeer"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TrustedHash")," est n\xe9cessaire pour initialiser correctement un Bridge node Celestia avec un Node Celestia Core ",(0,o.kt)("inlineCode",{parentName:"p"},"Remote")," d\xe9j\xe0 en cours d'ex\xe9cution. Le Light Node Celestia prendra un hash Genesis comme celui de confiance, s'il n'y a pas de hash fourni manuellement lors de la phase d'initialisation."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Les TrustedPeers")," sont la table des pairs de Bridge Nodes auxquels les lights nodes Celestia font confiance. Par d\xe9faut les pairs \xe0 bootstrap deviennent des pairs de confiance pour les Light Nodes Celestia si un utilisateur ne d\xe9finit pas les param\xe8tres des pairs de confiance dans le fichier de configuration."),(0,o.kt)("p",null,"Tout Bridge Node Celestia peut \xeatre un pair de confiance pour un Light. Toutefois, par son architecture, un Light Node ne peut pas \xeatre un trusted peer pour un autre Light Node."))}d.isMDXComponent=!0}}]);