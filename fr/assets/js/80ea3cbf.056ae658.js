"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5006],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return t?a.createElement(g,s(s({ref:n},d),{},{components:t})):a.createElement(g,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4976:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var a=t(3117),r=(t(7294),t(3905));const l={sidebar_label:"Commandes CLI utiles"},s="Commandes CLI utiles",o={unversionedId:"developers/celestia-app-commands",id:"developers/celestia-app-commands",title:"Commandes CLI utiles",description:"Voir les options:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/celestia-app-commands.md",sourceDirName:"developers",slug:"/developers/celestia-app-commands",permalink:"/fr/developers/celestia-app-commands",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app-commands.md",tags:[],version:"current",frontMatter:{sidebar_label:"Commandes CLI utiles"},sidebar:"developers",previous:{title:"Cr\xe9er un testnet Celestia",permalink:"/fr/developers/instantiate-testnet"},next:{title:"Celestia Node",permalink:"/fr/category/celestia-node"}},i={},p=[{value:"Cr\xe9er un wallet",id:"cr\xe9er-un-wallet",level:2},{value:"Gestion des cl\xe9s",id:"gestion-des-cl\xe9s",level:2},{value:"Importation et exportation des cl\xe9s",id:"importation-et-exportation-des-cl\xe9s",level:3},{value:"Interrogation des sous-commandes",id:"interrogation-des-sous-commandes",level:2},{value:"Gestion des tokens",id:"gestion-des-tokens",level:2},{value:"Gouvernance",id:"gouvernance",level:2},{value:"R\xe9clamer les r\xe9compenses de validateur",id:"r\xe9clamer-les-r\xe9compenses-de-validateur",level:2},{value:"D\xe9l\xe9guer et retirer la d\xe9l\xe9gation de ses jetons",id:"d\xe9l\xe9guer-et-retirer-la-d\xe9l\xe9gation-de-ses-jetons",level:2},{value:"Unjail le validateur",id:"unjail-le-validateur",level:2},{value:"Comment exporter les logs avec SystemD",id:"comment-exporter-les-logs-avec-systemd",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commandes-cli-utiles"},"Commandes CLI utiles"),(0,r.kt)("p",null,"Voir les options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia-appd --help\nStart celestia app\n\nUtilisation:\n  celestia-appd [command]\n\nCommandes disponibles:\n  add-genesis-account Ajoute un compte genesis \xe0 genesis.json\n  collect-gentxs      Collecte les transactions genesis et produit un fichier genesis.json\n  config              Cr\xe9e ou demande un fichier de configuration pour une application CLI\n  debug               Outil d'aide au d\xe9bogage de votre application\n  export              Exporte l'\xe9tat en JSON\n  gentx               G\xe9n\xe8re une transaction genesis portant une auto-d\xe9l\xe9gation \n  help                Aide pour toute commande \n  init                Initialise un validateur priv\xe9, pair-\xe0-pair, genesis, et les fichiers de configuration de l'application \n  keys                G\xe9rer les cl\xe9s de votre application\n  migrate             Migrer genesis vers une destination sp\xe9cifique\n  query               Requ\xeate de sous-commandes\n  rollback            Retourne l'\xe9tat Tendermint d'une grandeur en arri\xe8re \n  rollback            Retourne les \xe9tats cosmos-sdk etTendermint d'une grandeur en arri\xe8re \n  start               Ex\xe9cute le full node \n  status              Envoie une demande de statut au noeud \xe9loign\xe9\n  tendermint          Sous-commandes Tendermint \n  tx                  Sous-commandes de Transactions \n  validate-genesis    valide le fichier genesis \xe0 l'emplacement par d\xe9faut ou \xe0 l'emplacement sp\xe9cifi\xe9 en arg \n  version             Imprime la version de l'information binaire de l'application\n")),(0,r.kt)("h2",{id:"cr\xe9er-un-wallet"},"Cr\xe9er un wallet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"keyring-backend")," configure le backend du trousseau de cl\xe9s, o\xf9 les cl\xe9s sont stock\xe9es."),(0,r.kt)("p",null,"Les options sont: ",(0,r.kt)("inlineCode",{parentName:"p"},"os|file|kwallet|pass|test|memory"),"."),(0,r.kt)("h2",{id:"gestion-des-cl\xe9s"},"Gestion des cl\xe9s"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# liste des cl\xe9s\ncelestia-appd keys list\n\n# ajouter des cl\xe9s\ncelestia-appd keys add <KEY_NAME>\n\n# supprimer des cl\xe9s\ncelestia-appd keys delete <KEY_NAME>\n\n# renommer des cl\xe9s\ncelestia-appd keys rename <CURRENT_KEY_NAME> <NEW_KEY_NAME>\n")),(0,r.kt)("h3",{id:"importation-et-exportation-des-cl\xe9s"},"Importation et exportation des cl\xe9s"),(0,r.kt)("p",null,"Importez une cl\xe9 priv\xe9e chiffr\xe9e et ASCII-armored dans la base de cl\xe9s locale."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <KEY_NAME> <KEY_FILE>\n")),(0,r.kt)("p",null,"Exemple d'utilisation :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import amanda ./keyfile.txt\n")),(0,r.kt)("p",null,"Exporter une cl\xe9 priv\xe9e \xe0 partir du trousseau local au format crypt\xe9 et ASCII-armored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys export <KEY_NAME>\n\n# vous serez alors invit\xe9s \xe0 d\xe9finir un mot de passe pour la cl\xe9 priv\xe9e chiffr\xe9e :\nEntrez la passphrase pour chiffrer la cl\xe9 export\xe9e :\n")),(0,r.kt)("p",null,"Apr\xe8s avoir d\xe9fini un mot de passe, votre cl\xe9 chiffr\xe9e sera affich\xe9e."),(0,r.kt)("h2",{id:"interrogation-des-sous-commandes"},"Interrogation des sous-commandes"),(0,r.kt)("p",null,"Utilisation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd query <FLAGS> | <COMMAND>\n\n# alias q\ncelestia-appd q <FLAGS> | <COMMAND>\n")),(0,r.kt)("p",null,"Pour voir les options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q --help\n")),(0,r.kt)("h2",{id:"gestion-des-tokens"},"Gestion des tokens"),(0,r.kt)("p",null,"Obtenir le solde de tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances <ADDRESS> --node <NODE_URI>\n")),(0,r.kt)("p",null,"Exemple d'utilisation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances celestia1czpgn3hdh9sodm06d5qk23xzgpq2uyc8ggdqgw \\\n--node https://rpc-mamaki.pops.one\n")),(0,r.kt)("p",null,"Transf\xe9rer des tokens d'un wallet vers un autre:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n<amount> --node <NODE_URI> --chain-id <CHAIN_ID>\n")),(0,r.kt)("p",null,"Exemple d'utilisation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n19000000utia --node https://rpc-mamaki.pops.one/ --chain-id mamaki\n")),(0,r.kt)("p",null,"Pour voir les options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send --help\n")),(0,r.kt)("h2",{id:"gouvernance"},"Gouvernance"),(0,r.kt)("p",null,"Vous pouvez voter lors d'une proposition de gouvernance avec la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx gov vote <proposal id> <yes or no> --from <wallet> --chain-id <chain-id>\n")),(0,r.kt)("h2",{id:"r\xe9clamer-les-r\xe9compenses-de-validateur"},"R\xe9clamer les r\xe9compenses de validateur"),(0,r.kt)("p",null,"Vous pouvez r\xe9clamer vos r\xe9compenses de validateur avec la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx distribution withdraw-rewards <validator valoper>\\\n    --commission --from=<validator wallet> --chain-id <chain-id> --gas auto -y\n")),(0,r.kt)("h2",{id:"d\xe9l\xe9guer-et-retirer-la-d\xe9l\xe9gation-de-ses-jetons"},"D\xe9l\xe9guer et retirer la d\xe9l\xe9gation de ses jetons"),(0,r.kt)("p",null,"Vous pouvez ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," (d\xe9l\xe9guer) vos tokens \xe0 un validateur avec la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking delegate <validator valoper> <amount>\\\n    --from <wallet> --chain-id <chain-id>\n")),(0,r.kt)("p",null,"Vous pouvez d\xe9-d\xe9l\xe9guer des jetons \xe0 un validateur avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"unbond"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking unbond <validator valoper> <amount>\\\n    --from <wallet> --chain-id <chain-id>\n")),(0,r.kt)("h2",{id:"unjail-le-validateur"},"Unjail le validateur"),(0,r.kt)("p",null,'Vous pouvez "unjail" votre validateur avec la commande suivante :'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx slashing unjail --from <validator wallet>\\\n    --chain-id <chain-id> --gas auto -y\n")),(0,r.kt)("h2",{id:"comment-exporter-les-logs-avec-systemd"},"Comment exporter les logs avec SystemD"),(0,r.kt)("p",null,"Vous pouvez exporter vos logs si vous ex\xe9cutez un service SystemD avec la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -u <your systemd service> -S yesterday > node_logs.txt\nsudo journalctl -u <your systemd service> -S today > node_logs.txt\n# This command outputs the last 1 million lines!\nsudo journalctl -u <your systemd service> -n 1000000 > node_logs.txt\n")))}c.isMDXComponent=!0}}]);