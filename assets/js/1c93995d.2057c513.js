"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59818],{28748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var s=t(10843),i=t(62540),o=t(43023);const a={title:"Podman Desktop 1.11 Release",description:"Podman Desktop 1.11 has been released!",slug:"podman-desktop-release-1.11",authors:"cdrage",tags:["podman-desktop","release","podman"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.11/banner.png"},l=void 0,r={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Experimental Light Mode \ud83d\udca1",id:"experimental-light-mode-",level:3},{value:"macOS Rosetta Support for Apple Silicon",id:"macos-rosetta-support-for-apple-silicon",level:3},{value:"Kubernetes Enhancements",id:"kubernetes-enhancements",level:3},{value:"User Interface Improvements",id:"user-interface-improvements",level:3},{value:"Enhanced Manifest Support",id:"enhanced-manifest-support",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final Notes",id:"final-notes",level:2},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"Where to Download",id:"where-to-download",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Podman Desktop 1.11 Release! \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman-desktop-1-11-hero",src:t(15026).A+"",width:"800",height:"450"})}),"\n",(0,i.jsx)(n.p,{children:"This release introduces:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Experimental light mode!"}),": Our most-requested feature is here! Try out our new experimental light mode in the settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Rosetta support for Apple Silicon"}),": Build AMD64 binaries near the same speed as ARM64 binaries."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes improvements"}),": Check out our new Node and Volume pages for Kubernetes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Improved UI"}),": In addition to our light mode, you'll notice updates to our container listing page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Increased manifest support"}),": Images built as a manifest are now grouped together."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 1.11 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,i.jsx)(n.h3,{id:"experimental-light-mode-",children:"Experimental Light Mode \ud83d\udca1"}),"\n",(0,i.jsxs)(n.p,{children:["We're excited to announce the arrival of our most-requested feature: light mode! You can now enjoy a brighter interface by toggling the light mode option in the ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)("icon",{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Preferences"]})," section. Thank you for your patience as we continue to implement light mode for better accessibility! Please note, this feature is currently experimental as we continue to optimize the rest of Podman Desktop for this new mode."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman-desktop-1-11-hero",src:t(41462).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.h3,{id:"macos-rosetta-support-for-apple-silicon",children:"macOS Rosetta Support for Apple Silicon"}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 1.11 proudly introduces support for macOS Rosetta, facilitating seamless integration with Apple Silicon. This update, part of Podman 5.1, allows users to enable or disable Rosetta support directly through the Podman Settings. With this enhancement, running AMD64 image builds or containers achieves speeds that are nearly identical to those experienced on ARM64 architectures. For more details on the implementation, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/pull/21670",children:"GitHub podman pull request"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"kubernetes-enhancements",children:"Kubernetes Enhancements"}),"\n",(0,i.jsx)(n.p,{children:"In our latest release, we've enhanced Kubernetes functionality by adding node and volume listings. This update aims to improve your Kubernetes management experience within Podman Desktop."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubernetes enhancements",src:t(4081).A+"",width:"1118",height:"768"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubernetes enhancements",src:t(63911).A+"",width:"1118",height:"768"})}),"\n",(0,i.jsx)(n.h3,{id:"user-interface-improvements",children:"User Interface Improvements"}),"\n",(0,i.jsx)(n.p,{children:"Take a moment to appreciate the upgraded user interface of Podman Desktop. You'll find that the container listing section, among others, has received significant enhancements, elevating your overall user experience."}),"\n",(0,i.jsx)(n.h3,{id:"enhanced-manifest-support",children:"Enhanced Manifest Support"}),"\n",(0,i.jsx)(n.p,{children:"We've made strides in how we handle manifest images. Multi-arch images are now grouped under the manifest, simplifying the process and enhancing efficiency."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"manifests",src:t(76371).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,i.jsx)(n.p,{children:"We've added lots of features this release, here are some other highlights:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["feat(PreferenceResource): adding light theme support for some preferences page by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7107",children:"#7107"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: extensions should stay disabled after restart by @deboer-tim in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7085",children:"#7085"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: allow to select a folder using the fileComponent by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7135",children:"#7135"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: update to podman v5.0.3 by @benoitf in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7173",children:"#7173"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: migrate MessageBox to modal component by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7172",children:"#7172"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add tip slot to customize tip content by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7150",children:"#7150"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat(UI): migrate DropdownMenu component by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7233",children:"#7233"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add build arguments to build page by @cdrage in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7253",children:"#7253"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat(SettingsNavItem): adding icon property by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7307",children:"#7307"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: create task when updating Podman Desktop by @benoitf in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7286",children:"#7286"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add node listing to Kubernetes section by @cdrage in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7347",children:"#7347"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: container page table component by @deboer-tim in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7424",children:"#7424"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: handle dir creation during fs watch by @feloy in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7573",children:"#7573"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: uses TableColumnDuration for container list table by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7725",children:"#7725"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: request confirmation to allow sign in requested from extension by @dgolovin in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7443",children:"#7443"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add volumes (PVC) to kubernetes by @cdrage in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7640",children:"#7640"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add rosetta support by @cdrage in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7540",children:"#7540"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: adds images under manifest by @cdrage in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7552",children:"#7552"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: show manifests in image list by @cdrage in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7227",children:"#7227"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: show node and namespace information for k8s pods by @cdrage in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7684",children:"#7684"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: allow extensions to expose their own API by @benoitf in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7384",children:"#7384"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat(QuickPickInput): using modal component by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7180",children:"#7180"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: update podman 5.0.3 to 5.1.1 by @dgolovin in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7433",children:"#7433"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["fix(UI): resource page link to extension page by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6986",children:"#6986"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: update extension link and text on empty screen by @deboer-tim in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7005",children:"#7005"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: the Image.Id should contain sha256: prefix when listing image Id by @benoitf in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7009",children:"#7009"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: fix dashboard UI by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7006",children:"#7006"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: add suggestion when WSL seems to require a reboot by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7007",children:"#7007"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix(LoadingIconButton): consider failed state by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6997",children:"#6997"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: use podman machine inspect to know if machine is rootful by @benoitf in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7024",children:"#7024"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: make markdown TOC links clickable by @benoitf in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7010",children:"#7010"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: increasing default timeout for extension activation by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7053",children:"#7053"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: show description link on preflight checks on dashboard by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7056",children:"#7056"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: edit button should be visible during started and stopped by @benoitf in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7063",children:"#7063"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: add tests for PreflightChecks by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7069",children:"#7069"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix(Button): remove unused ",(0,i.jsx)(n.code,{children:"hidden"})," property by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7092",children:"#7092"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: flaky test port availability by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7110",children:"#7110"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: reset initialize and start mode after starting provider by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7115",children:"#7115"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: stop informer not more valid and handle similar contexts by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6934",children:"#6934"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: custom extension install modal buttons by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7067",children:"#7067"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix(tests): adding label to avoid duplicates by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7160",children:"#7160"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: provider card UI on dashboard by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7082",children:"#7082"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix(extension-loader): cleanup resource on extension error by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7228",children:"#7228"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: remove tinro from Tab and ui by @lstocchi in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7288",children:"#7288"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: remove tinro dependency from SettingsNavItem component by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7280",children:"#7280"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: button should have spinner when inProgress is enable by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7259",children:"#7259"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: table child selection by @deboer-tim in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7555",children:"#7555"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: close watcher when FileSystemWatcher is disposed by @feloy in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7503",children:"#7503"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: table properly support undefined value result from rendermapping by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7723",children:"#7723"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix(UI): formpage missing content shadow by @axel7083 in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7733",children:"#7733"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped make \ud83e\uddad Podman Desktop even better. In this release we received pull requests from the following new people:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jitseklomp",children:"Jitse"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7631",children:"chore: ignore /kind in .gitignore"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/adrianriobo",children:"Adri\xe1n Lorenzo"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7128",children:"chore: Manage EnableNodeCliInspectArguments Fuse Enablement based on ENV: ELECTRON_ENABLE_INSPECT"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final Notes"}),"\n",(0,i.jsx)(n.h3,{id:"fixed-issues",children:"Fixed Issues"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.11.0",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"where-to-download",children:"Where to Download"}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},15026:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/banner-bb0f1ccb389f6bff5debba4110d76b9e.png"},41462:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/light_mode-23a344a6a378922eb7a55ccaf2a4bdf7.png"},76371:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/manifest-083a1901e750f6a66bf3e873f8b1545a.png"},4081:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nodes-358a64863c12ec5314e2e3da1bdfc84f.png"},63911:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pvc-cb68e8f3d0299c332b42632256b223fa.png"},43023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(63696);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},10843:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-1.11","source":"@site/blog/2024-06-24-release-1.11.md","title":"Podman Desktop 1.11 Release","description":"Podman Desktop 1.11 has been released!","date":"2024-06-24T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"}],"readingTime":5.42,"hasTruncateMarker":true,"authors":[{"name":"Charlie Drage","title":"Software Engineer","url":"https://github.com/cdrage","imageURL":"https://github.com/cdrage.png","key":"cdrage","page":null}],"frontMatter":{"title":"Podman Desktop 1.11 Release","description":"Podman Desktop 1.11 has been released!","slug":"podman-desktop-release-1.11","authors":"cdrage","tags":["podman-desktop","release","podman"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-1.11/banner.png"},"unlisted":false,"prevItem":{"title":"Using RHEL as a WSL podman machine","permalink":"/blog/2024/08/01/using-rhel-wsl-podman-machine"},"nextItem":{"title":"Podman Desktop 1.10 Release","permalink":"/blog/podman-desktop-release-1.10"}}')}}]);