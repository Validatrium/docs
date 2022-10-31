"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1764],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),g=a,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||l;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2249:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={sidebar_label:"Setup"},s="\ud83d\udcbb\xa0Setup",u={unversionedId:"developers/gm-setup",id:"developers/gm-setup",title:"\ud83d\udcbb\xa0Setup",description:"- Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).",source:"@site/docs/developers/gm-setup.md",sourceDirName:"developers",slug:"/developers/gm-setup",permalink:"/pr-preview/pr-277/fr/developers/gm-setup",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-setup.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup"},sidebar:"developers",previous:{title:"gm world Overview",permalink:"/pr-preview/pr-277/fr/developers/gm-world"},next:{title:"Run a Light Node",permalink:"/pr-preview/pr-277/fr/developers/gm-node"}},p={},c=[{value:"\ud83c\udfc3\xa0Install Golang",id:"install-golang",level:2},{value:"\ud83d\udd25\xa0Install Ignite CLI",id:"install-ignite-cli",level:2},{value:"\ud83c\udf7a\xa0Install Homebrew",id:"install-homebrew",level:2},{value:"\ud83c\udfc3\xa0Install wget and jq",id:"install-wget-and-jq",level:2}],m={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setup"},"\ud83d\udcbb\xa0Setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).\nRecommended GNU/Linux or macOS.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This tutorial was made on an M2 Mac with macOS Monterey Version 12.6.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://go.dev/"},"Golang v1.18.2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ignite/cli/releases/tag/v0.24.0"},"Ignite CLI v0.24.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/wget/"},"wget")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/light-node/"},"A Celestia Light Node"))),(0,l.kt)("h2",{id:"install-golang"},"\ud83c\udfc3\xa0Install Golang"),(0,l.kt)("p",null,"Celestia-App, Celestia-Node, and Cosmos-SDK are written in the Golang\nprogramming language. We\u2019ll need Golang to build and run them.\n",(0,l.kt)("strong",{parentName:"p"},"Be sure to use the same testnet installation instructions through this\nentire tutorial.")),(0,l.kt)("p",null,"You can ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-277/fr/developers/environment#install-golang"},"install Golang here"),"."),(0,l.kt)("h2",{id:"install-ignite-cli"},"\ud83d\udd25\xa0Install Ignite CLI"),(0,l.kt)("p",null,"First, you will need to create ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," if you have not already:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 775 /usr/local/bin\n")),(0,l.kt)("p",null,"The most stable version of Ignite CLI is v0.24.0. You can install Ignite\nVersion v0.24.0 from source by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ignite/cli/archive/refs/tags/v0.24.0.zip\nunzip v0.24.0.zip\ncd cli-0.24.0\nmake install\nwhich ignite\nignite version\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u270b On some machines, you may run into permissions errors.\nYou can resolve this error by following the guidance\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/install#write-permission"},"here"),".")),(0,l.kt)("p",null,"A successful installation will return something similar the response below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~/cli-0.24.0 % make install\nInstalling Ignite CLI...\nIgnite CLI version: development\nIgnite CLI build date:  2022-10-26T18:27:49\nIgnite CLI source hash:\nYour OS:        darwin\nYour arch:      arm64\nYour Node.js version:   v18.10.0\nYour go version:    go version go1.19.2 darwin/arm64\nYour uname -a:      Darwin Joshs-MacBook-Air.local 21.6.0 Darwin Kernel Version 21.6.0: Mon Aug 22 20:20:07 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T8110 arm64\nYour cwd:       /Users/joshstein/cli-0.24.0\nIs on Gitpod:       false\n")),(0,l.kt)("p",null,"To remove ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.24.0.zip")," and the directory used for installation, run the\nfollowing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd && rm -rf v0.24.0.zip && rm -rf cli-0.24.0\n")),(0,l.kt)("p",null,"Verify you\u2019ve installed Ignite CLI by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ignite version\n")),(0,l.kt)("p",null,"The response that you receive should look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite version\nIgnite CLI version: v0.24.0\nIgnite CLI build date:  2022-09-12T14:14:32Z\nIgnite CLI source hash: 21c6430cfcc17c69885524990c448d4a3f56461c\nYour OS:        darwin\nYour arch:      arm64\nYour go version:    go version go1.18.2 darwin/arm64\nYour uname -a:      Darwin Joshs-MacBook-Air.local 21.6.0 Darwin Kernel Version 21.6.0: Sat Jun 18 17:07:28 PDT 2022; root:xnu-8020.140.41~1/RELEASE_ARM64_T8110 arm64\nYour cwd:       /Users/joshcs\nIs on Gitpod:       false\n")),(0,l.kt)("h2",{id:"install-homebrew"},"\ud83c\udf7a\xa0Install Homebrew"),(0,l.kt)("p",null,"Homebrew will allow us to install dependencies for your Mac:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"Be sure to run the commands similar to the output below from the successful installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,l.kt)("h2",{id:"install-wget-and-jq"},"\ud83c\udfc3\xa0Install wget and jq"),(0,l.kt)("p",null,"wget is an Internet file retriever and jq is a lightweight and flexible\ncommand-line JSON processor."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget && brew install jq\n")))}g.isMDXComponent=!0}}]);