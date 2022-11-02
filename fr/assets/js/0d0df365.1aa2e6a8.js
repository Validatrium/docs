"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8522],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6415:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=r(3117),n=(r(7294),r(3905));const o={},i="Celestia Hardfork Process",l={unversionedId:"nodes/hardfork-process",id:"nodes/hardfork-process",title:"Celestia Hardfork Process",description:"Blockchain networks often times need to upgrade with new features which require coordination work among the validators prior to activating the upgrades.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/nodes/hardfork-process.md",sourceDirName:"nodes",slug:"/nodes/hardfork-process",permalink:"/fr/nodes/hardfork-process",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/hardfork-process.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Resources",permalink:"/fr/category/resources"},next:{title:"SystemD",permalink:"/fr/nodes/systemd"}},s={},p=[{value:"General Process",id:"general-process",level:2},{value:"Cosmovisor",id:"cosmovisor",level:3},{value:"Mocha Hardfork",id:"mocha-hardfork",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"celestia-hardfork-process"},"Celestia Hardfork Process"),(0,n.kt)("p",null,"Blockchain networks often times need to upgrade with new features which require coordination work among the validators prior to activating the upgrades."),(0,n.kt)("p",null,"This process is called a hardfork or a network upgrade. In those events, the Celestia Labs team will be coordinating with the validators on what they need to do in order to be ready for an upcoming hardfork."),(0,n.kt)("p",null,"Hardforks are not backward-compatible with older versions of the network software which is why it is important that validators upgrade their software to continue validating on the network after the network upgrades."),(0,n.kt)("h2",{id:"general-process"},"General Process"),(0,n.kt)("p",null,"The general process can be broken down into several components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardfork specifications and features (defined by description of features and code implementation of those features)."),(0,n.kt)("li",{parentName:"ul"},"Binary used to add those features (a new binary release with those features will be provided by Celestia team in order for validators to upgrade their nodes to the new binary)."),(0,n.kt)("li",{parentName:"ul"},"A block number for when the network upgrades (even if validators upgrade their binary to be hardfork ready, the network upgrade does not happen right away, but some short time in the future at a specific block number)."),(0,n.kt)("li",{parentName:"ul"},"Testing of the features (happens on testnets first prior to activating on mainnet in order to ensure the network can upgrade securely).")),(0,n.kt)("p",null,"The two testnets were hardforks are deployed on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/nodes/arabica-devnet"},"Arabica")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/nodes/mamaki-testnet"},"Mamaki"))),(0,n.kt)("h3",{id:"cosmovisor"},"Cosmovisor"),(0,n.kt)("p",null,"We will be using Cosmovisor for upgrading our network for upcoming hardforks."),(0,n.kt)("p",null,"Cosmovisor is a process management tool that allows switching of binaries when a certain block is reached. You can learn more about Cosmovisor ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/cosmovisor"},"here"),"."),(0,n.kt)("p",null,"Install Cosmovisor by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest\n")),(0,n.kt)("p",null,"Set the environment variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"export DAEMON_NAME=celestia-appd\nexport DAEMON_HOME=$HOME/.celestia-app\n")),(0,n.kt)("p",null,"Now, we will go over an example hardfork scenario with two example binaries."),(0,n.kt)("p",null,"The following table shows the binaries and their properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Hardfork-Binary"),(0,n.kt)("th",{parentName:"tr",align:null},"Release Status"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.X.1"),(0,n.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,n.kt)("td",{parentName:"tr",align:null},"Current Release")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.X.2"),(0,n.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,n.kt)("td",{parentName:"tr",align:null},"New Release")))),(0,n.kt)("p",null,"Above, you can see that the example ",(0,n.kt)("inlineCode",{parentName:"p"},"celestia-app")," Version 0.X.1 is the current release version a validator would run and it is not the hardfork-ready binary while the Version 0.X.2 Binary will be a new release that is hardfork-ready."),(0,n.kt)("p",null,"Create the directory for the current binary Version 0.X.1 and copy ",(0,n.kt)("inlineCode",{parentName:"p"},"celestia-appd"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin\ncp ./build/celestia-appd $DAEMON_HOME/cosmovisor/genesis/bin\n")),(0,n.kt)("p",null,"Now you can run Cosmovisor with the current release Version 0.X.1:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cosmovisor run start\n")),(0,n.kt)("p",null,"Now, pull in the New Release which is version 0.X.2 of celestia-app separately and build the binary for it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make build\n")),(0,n.kt)("p",null,"Create the new folder for the version 0.X.2 and copy it over:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $DAEMON_HOME/cosmovisor/upgrades/test1/bin\ncp ./build/celestia-appd $DAEMON_HOME/cosmovisor/upgrades/test1/bin\n")),(0,n.kt)("p",null,"Now, open a new terminal window and run the commands for submitting a governance proposal to upgrade the chain and vote on it."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NOTE: In normal hardfork operations as a validator, you do not need to submit a governance proposal but rather just vote on an existing one submitted by Celestia Labs team.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"./build/celestia-appd tx gov submit-proposal software-upgrade test1 --title upgrade --description upgrade --upgrade-height 200 --from validator --yes\n./build/celestia-appd tx gov deposit 1 10000000stake --from validator --yes\n./build/celestia-appd tx gov vote 1 yes --from validator --yes\n")),(0,n.kt)("p",null,"This will cause the upgrade to happen automatically on block ",(0,n.kt)("inlineCode",{parentName:"p"},"200"),", where Cosmovisor will switch the binaries from 0.X.1 (Current Release) to 0.X.2 (New Release)."),(0,n.kt)("h3",{id:"mocha-hardfork"},"Mocha Hardfork"),(0,n.kt)("p",null,"Celestia is planning the Mocha Hardfork upgrade on the Mamaki Testnet. This hardfork is unique as it will reset the Mamaki network to block 0 while maintaining the existing state and also will rename Mamaki to Mocha."),(0,n.kt)("p",null,"The new chain-id will be ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,n.kt)("p",null,"The release logs for ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha")," can be found here (TBD)."),(0,n.kt)("p",null,"The most exciting feature included is setting the stage for QGB on Mocha."),(0,n.kt)("p",null,"Validators will need to generate 2 new keys in order to be QGB-ready. Note that for the Mocha Hardfork, QGB will not launch yet so you can swap those keys after for new ones if needed. The keys needed are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 EVM key"),(0,n.kt)("li",{parentName:"ul"},"1 Celestia key")),(0,n.kt)("p",null,"So, in order for this to happen, validators will need to maintain two new keys in order to have a successful upgrade."),(0,n.kt)("p",null,"Those two keys will need to be added to 2 new flags on ",(0,n.kt)("inlineCode",{parentName:"p"},"celestia-app"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--evm-address"),": This flag should contain a ",(0,n.kt)("inlineCode",{parentName:"li"},"0x")," EVM address."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--orchesrator-address"),": This flag should contain a newly-generated ",(0,n.kt)("inlineCode",{parentName:"li"},"celestia1")," Celestia address. Validators certainly can use their existing Celestia addresses here but it is recommended to create a new one.")))}u.isMDXComponent=!0}}]);