"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3584],{80551:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=o(24246),s=o(71670);const i={sidebar_position:3,title:"Using `podman-mac-helper` on macOS",description:"Using the `podman-mac-helper` tool can make it easier to migrate from Docker to Podman on macOS, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",keywords:["podman desktop","podman","containers","migrating","docker","macos"],tags:["migrating-from-docker","mac0S"]},a="Using the podman-mac-helper tool to migrate from Docker to Podman on macOS",t={id:"migrating-from-docker/using-podman-mac-helper",title:"Using `podman-mac-helper` on macOS",description:"Using the `podman-mac-helper` tool can make it easier to migrate from Docker to Podman on macOS, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",source:"@site/docs/migrating-from-docker/using-podman-mac-helper.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/using-podman-mac-helper",permalink:"/docs/migrating-from-docker/using-podman-mac-helper",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/using-podman-mac-helper.md",tags:[{inline:!0,label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"},{inline:!0,label:"mac0S",permalink:"/docs/tags/mac-0-s"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Using `podman-mac-helper` on macOS",description:"Using the `podman-mac-helper` tool can make it easier to migrate from Docker to Podman on macOS, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",keywords:["podman desktop","podman","containers","migrating","docker","macos"],tags:["migrating-from-docker","mac0S"]},sidebar:"mySidebar",previous:{title:"Using the `DOCKER_HOST` environment variable",permalink:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"},next:{title:"Emulating Docker CLI with Podman",permalink:"/docs/migrating-from-docker/emulating-docker-cli-with-podman"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Icon:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"using-the-podman-mac-helper-tool-to-migrate-from-docker-to-podman-on-macos",children:["Using the ",(0,r.jsx)(n.code,{children:"podman-mac-helper"})," tool to migrate from Docker to Podman on macOS"]})}),"\n",(0,r.jsxs)(n.p,{children:["Consider using ",(0,r.jsx)(n.code,{children:"podman-mac-helper"})," to migrate transparently to Podman on macOS."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Continue using familiar Docker commands."}),"\n",(0,r.jsx)(n.li,{children:"Take advantage of the benefits of Podman on macOS."}),"\n",(0,r.jsxs)(n.li,{children:["Your tools, such as ",(0,r.jsx)(n.a,{href:"https://maven.apache.org/",children:"Maven"})," or ",(0,r.jsx)(n.a,{href:"https://www.testcontainers.org/",children:"Testcontainers"}),", communicate with Podman without reconfiguration."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"podman-mac-helper"})," tool provides a compatibility layer that allows you to use most Docker commands with Podman on macOS.\nThe service redirects ",(0,r.jsx)(n.code,{children:"/var/run/docker"})," to the fixed user-assigned UNIX socket location."]}),"\n",(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"macOS"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/installation/macos-install",children:"Podman"})}),"\n",(0,r.jsxs)(n.li,{children:["Docker service is ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/desktop/use-desktop/pause/",children:"paused"})," and ",(0,r.jsxs)(n.a,{href:"https://docs.docker.com/desktop/settings/mac/",children:[(0,r.jsx)(n.em,{children:"Start Docker Desktop when you log in"})," is disabled"]}),", or Docker is ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/desktop/uninstall/",children:"uninstalled"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set up the ",(0,r.jsx)(n.code,{children:"podman-mac-helper"})," service: run the command in a terminal:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"sudo podman-mac-helper install\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Restart your Podman machine: go to ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),", and in the Podman tile, click ",(0,r.jsx)(o,{icon:"fa-solid fa-repeat",size:"lg"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The Docker socket is a symbolic link for the Podman socket:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ ls -la /var/run/docker.sock\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The output points to a ",(0,r.jsx)(n.code,{children:"podman.sock"})," file such as:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"/var/run/docker.sock -> /Users/username/.local/share/containers/podman/machine/podman.sock\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When you query the Docker socket, you receive replies from Podman rather than Docker."}),"\n",(0,r.jsx)(n.p,{children:"For instance, this command outputs Podman version rather that Docker version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:'$ curl -s --unix-socket /var/run/docker.sock "http://v1.41/info"  | jq -r .ServerVersion\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Your tools communicating to the Docker socket, such as ",(0,r.jsx)(n.a,{href:"https://maven.apache.org/",children:"Maven"})," or ",(0,r.jsx)(n.a,{href:"https://www.testcontainers.org/",children:"Testcontainers"}),", communicate with Podman without reconfiguration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(Optionally, if the ",(0,r.jsx)(n.code,{children:"docker"})," CLI is installed) The docker CLI context is set to the default value ",(0,r.jsx)(n.code,{children:"unix:///var/run/docker.sock"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ docker context list\nNAME       TYPE  DESCRIPTION                              DOCKER ENDPOINT             KUBERNETES ENDPOINT  ORCHESTRATOR\ndefault *  moby  Current DOCKER_HOST based configuration  unix:///var/run/docker.sock\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(Optionally, if the ",(0,r.jsx)(n.code,{children:"docker"})," CLI is installed) The ",(0,r.jsx)(n.code,{children:"docker"})," CLI communicates with the Podman socket."]}),"\n",(0,r.jsx)(n.p,{children:"Therefore this command outputs Podman version rather that Docker version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"$ docker info --format=json | jq -r .ServerVersion\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"additional-resources",children:"Additional resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://github.com/containers/podman/tree/main/cmd/podman-mac-helper",children:[(0,r.jsx)(n.code,{children:"podman-mac-helper"})," source"]})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>t,a:()=>a});var r=o(27378);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);