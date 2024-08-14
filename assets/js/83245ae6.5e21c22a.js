"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47679],{24900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(24246),s=t(71670),o=t(92975),a=t.n(o);const r={title:"Release Notes - Podman Desktop 0.11",description:"Podman Desktop 0.11 has been released!",slug:"podman-desktop-release-0.11",authors:["slemeur"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},l=void 0,d={permalink:"/blog/podman-desktop-release-0.11",source:"@site/blog/2023-01-18-release-0.11.md",title:"Release Notes - Podman Desktop 0.11",description:"Podman Desktop 0.11 has been released!",date:"2023-01-18T00:00:00.000Z",tags:[{inline:!0,label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{inline:!0,label:"release",permalink:"/blog/tags/release"},{inline:!0,label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:9.475,hasTruncateMarker:!0,authors:[{name:"Stevan Le Meur",title:"Product Manager",url:"https://github.com/slemeur",imageURL:"https://github.com/slemeur.png",key:"slemeur",page:null}],frontMatter:{title:"Release Notes - Podman Desktop 0.11",description:"Podman Desktop 0.11 has been released!",slug:"podman-desktop-release-0.11",authors:["slemeur"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Release Notes - Podman Desktop 0.12",permalink:"/blog/podman-desktop-release-0.12"},nextItem:{title:"Release Notes - Podman Desktop 0.10",permalink:"/blog/podman-desktop-release-0.10"}},h={authorsImageUrls:[void 0]},c=[{value:"Release Details",id:"release-details",level:2},{value:"Air-Gapped installation #1104 #1120",id:"air-gapped-installation-1104-1120",level:3},{value:"Feedback within Podman Desktop #1078",id:"feedback-within-podman-desktop-1078",level:3},{value:"Docker compatibility mode #1047",id:"docker-compatibility-mode-1047",level:3},{value:"Allow to toggle on/off the proxy setting #983",id:"allow-to-toggle-onoff-the-proxy-setting-983",level:3},{value:"Namespace selection for deploy to Kubernetes #1008",id:"namespace-selection-for-deploy-to-kubernetes-1008",level:3},{value:"Configure Podman binary path #941",id:"configure-podman-binary-path-941",level:3},{value:"Provide pre-defined registries #1201",id:"provide-pre-defined-registries-1201",level:3},{value:"UI/UX Improvements",id:"uiux-improvements",level:3},{value:"View Pods logs #1122",id:"view-pods-logs-1122",level:4},{value:"Improved feedback when clicking on container list action icons #1150 #1161",id:"improved-feedback-when-clicking-on-container-list-action-icons-1150-1161",level:4},{value:"Allows to change the default font size for the editor #1160",id:"allows-to-change-the-default-font-size-for-the-editor-1160",level:4},{value:"Keep expanded state of pods when refreshing containers #1042",id:"keep-expanded-state-of-pods-when-refreshing-containers-1042",level:4},{value:"Click on the Pod name redirects to the Pod details page #1159",id:"click-on-the-pod-name-redirects-to-the-pod-details-page-1159",level:4},{value:"Improved styles of buttons for actions #984",id:"improved-styles-of-buttons-for-actions-984",level:4},{value:"Improved alignments in pages with lists #1182",id:"improved-alignments-in-pages-with-lists-1182",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Notable bug fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final Notes",id:"final-notes",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This release note covers Podman Desktop 0.11 release changes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Air-Gapped Installation"}),": New all-in-one binaries for air-gapped installation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Feedback"}),": Submit feedback directly from Podman Desktop."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Docker Compatibility Mode"}),": Information about the Docker compatibility mode."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proxy Setting"}),": Toggle on/off the proxy setting."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deploy to Kubernetes"}),": Select the namespace to deploy to Kubernetes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registry Configuration"}),": Simplified registry configuration for well known registries."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UX/UI Improvements"}),": View pod's container logs, better visual feedback, configurable editor font size, and more."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 0.11 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,i.jsxs)(n.h3,{id:"air-gapped-installation-1104-1120",children:["Air-Gapped installation ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1104",children:"#1104"})," ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1120",children:"#1120"})]}),"\n",(0,i.jsx)(n.p,{children:"For users who are not able to connect to the internet, a new all-in-one (airgap) binary that includes the Podman Desktop application and the Podman binaries is now available for both Mac and Windows. When initializing a new Podman machine using all-in-one binaries, it'll use the embedded files and not grab them from internet:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"on Mac, it embeds the qemu FCOS binaries."}),"\n",(0,i.jsx)(n.li,{children:"on Windows, it embeds the WSL binary."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To differentiate the air-gapped binaries from the regular ones, you can check the artifactname, they're containing 'airgap' and are bigger.\nPlease note, that those binaries are available only on releases and not the pre-releases."}),"\n",(0,i.jsx)(n.p,{children:"There is also an optional way to provide a custom Podman machine image in the create machine form. By providing the path to the image you want, Podman Desktop will create a machine with that image. Leaving the field empty will use the default image (the one included in the binary)."}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/210508524-45005536-ac74-4074-92c1-2b3ca51d0073.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsxs)(n.h3,{id:"feedback-within-podman-desktop-1078",children:["Feedback within Podman Desktop ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1078",children:"#1078"})]}),"\n",(0,i.jsx)(n.p,{children:"Submitting feedback on Podman Desktop is getting easier as it is possible directly within the tool. This will help to get more information about the issues you are facing and will help us to improve the tool."}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/208938878-948a2764-d73b-4584-a80d-497c052482c1.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsx)(n.p,{children:"Please feel free to submit any feedback you have, we are looking forward to hearing from you!"}),"\n",(0,i.jsxs)(n.h3,{id:"docker-compatibility-mode-1047",children:["Docker compatibility mode ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1047",children:"#1047"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Docker compatibility mode is a feature that allows to use Podman as a drop-in replacement for Docker. It relies on the Docker socket helper provided with Podman and automatically handle the local setup of Podman path to the Docker socket. Tools like ",(0,i.jsx)(n.a,{href:"https://www.testcontainers.org/",children:"Testcontainers"})," or others are relying on this to communicate to the container engine."]}),"\n",(0,i.jsx)(n.p,{children:"In this new version of Podman Desktop, we are now providing information to the user about the status of this compatibility mode directly on the dashboard page. The way it works is the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When Docker is running: the socket is pointing to Docker."}),"\n",(0,i.jsx)(n.li,{children:"When Podman is starting and Docker is not running: the docker API socket will use Podman."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In case the compatibility mode is not activated, new documentation on how to activate it and how to easily switch between Docker and Podman is available here: ",(0,i.jsx)(n.a,{href:"https://podman-desktop.io/docs/migrating-from-docker",children:"https://podman-desktop.io/docs/migrating-from-docker"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is a warning displayed for Windows users:\n",(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/436777/209305744-9056addd-f122-4f75-9e03-ad27a0109375.png",alt:"windows-docker-compatibility"})]}),"\n",(0,i.jsxs)(n.p,{children:["This is the warning for Mac users:\n",(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6422176/207964861-a9c1f72c-89d6-4816-beab-397af4125620.png",alt:"mac-docker-compatibility"})]}),"\n",(0,i.jsxs)(n.h3,{id:"allow-to-toggle-onoff-the-proxy-setting-983",children:["Allow to toggle on/off the proxy setting ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/983",children:"#983"})]}),"\n",(0,i.jsx)(n.p,{children:"In some context, users need the ability to disable and re-enable the proxy configuration very quickly, without having to entirely reconfigure it. This is now possible from the Podman Desktop settings page, where a toggle to enable/disable the proxy configuration has been added."}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/205955418-670bc37c-a74f-40ef-bc60-8d9d013aa0dc.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsx)(n.p,{children:"Note: extensions can read this information and then update the proxy configuration."}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-selection-for-deploy-to-kubernetes-1008",children:["Namespace selection for deploy to Kubernetes ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1008",children:"#1008"})]}),"\n",(0,i.jsx)(n.p,{children:"A new dropdown menu has been added to the deploy to Kubernetes screen to allow selecting the namespace to deploy to. Defaults to defaultnamespace, if unable to get any from kube_client module."}),"\n",(0,i.jsxs)(n.p,{children:["If the user have set ",(0,i.jsx)(n.code,{children:"kubectl config set-context --current --namespace=NAMESPACE"})," it honors that as the chosen value."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/7339809/206688886-095e4f15-42ae-4a0a-b1c6-ae4b547fcdfb.gif",alt:"deploy-kubernetes-namespace"})}),"\n",(0,i.jsxs)(n.h3,{id:"configure-podman-binary-path-941",children:["Configure Podman binary path ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/941",children:"#941"})]}),"\n",(0,i.jsxs)(n.p,{children:["Users might use a custom path to the podman binary. An option within settings (Settings -> Preferences) to allow providing an additional path to Podman binary has been added.\nThis is useful for users who have installed Podman using a package manager and want to use the binary provided by the package manager.\nSee: ",(0,i.jsx)(n.a,{href:"/docs/troubleshooting/troubleshooting-podman-on-macos#unable-to-set-custom-binary-path-for-podman-on-macos",children:"Unable to set custom binary path for Podman on macOS"}),"\n",(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6422176/204832063-5858065a-2fc3-49de-8d23-3b99b7d10dbf.png",alt:"custom-path"})]}),"\n",(0,i.jsxs)(n.h3,{id:"provide-pre-defined-registries-1201",children:["Provide pre-defined registries ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1201",children:"#1201"})]}),"\n",(0,i.jsx)(n.p,{children:"The experience of configuring a registry is getting simplified for the most popular ones. The user will be able to select a registry from a pre-defined list and will only have to provide the username and password. The following registries will be pre-defined:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dockerhub"}),"\n",(0,i.jsx)(n.li,{children:"Red Hat Quay"}),"\n",(0,i.jsx)(n.li,{children:"GitHub"}),"\n",(0,i.jsx)(n.li,{children:"IBM Container Registry"}),"\n",(0,i.jsx)(n.li,{children:"Google Container Registry"}),"\n"]}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/214332937-eb1d9050-0d32-4bc4-8393-49b4583b1390.mov",width:"100%",height:"100%"}),"\n",(0,i.jsx)(n.h3,{id:"uiux-improvements",children:"UI/UX Improvements"}),"\n",(0,i.jsxs)(n.h4,{id:"view-pods-logs-1122",children:["View Pods logs ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1122",children:"#1122"})]}),"\n",(0,i.jsx)(n.p,{children:"The pods details view provides the ability to view the logs of each containers that might be running in a pod. Moreover, as it can also be hard to scan and identify which container is producing which output, we appended the container name at the beginning of each output and differentiate each container with a different color."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6422176/211024673-eee9bad8-1b0c-4446-b8d1-97a226282c4d.png",alt:"pods-logs"})}),"\n",(0,i.jsxs)(n.h4,{id:"improved-feedback-when-clicking-on-container-list-action-icons-1150-1161",children:["Improved feedback when clicking on container list action icons ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1150",children:"#1150"})," ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1161",children:"#1161"})]}),"\n",(0,i.jsx)(n.p,{children:"When starting/stopping or deleting a container, a spinner is now displayed. In case of error, a message indicating that the action failed will also be better indicated."}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211531610-2347d302-4918-46ae-a5a2-c80fac0314f5.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsxs)(n.p,{children:["For containers that exit immediately or short-lived containers, the feedback is also improved and include report of error now provide a better feedback to the user ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1161",children:"#1161"}),"."]}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211831905-ebf596d5-efc8-4f55-8cb8-3f31655388b9.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsxs)(n.h4,{id:"allows-to-change-the-default-font-size-for-the-editor-1160",children:["Allows to change the default font size for the editor ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1160",children:"#1160"})]}),"\n",(0,i.jsx)(n.p,{children:"An editor is used in several screens of Podman Desktop, from the inspect screen to container's outputs and Kubernetes YAML. The default font size is 10 pixels. It's now possible to adjust the font size to the one the one you prefer. This setting is persisted and will be used for all the editors of Podman Desktop and available from the preferences page (Settings -> Preferences)."}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211778161-130ff733-b2ca-4306-bea3-d031196c3b29.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsxs)(n.h4,{id:"keep-expanded-state-of-pods-when-refreshing-containers-1042",children:["Keep expanded state of pods when refreshing containers ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1042",children:"#1042"})]}),"\n",(0,i.jsx)(n.p,{children:"When switching from different screens of the application or simply refreshing the list of containers, the expanded state of each item in the list is now persisted and will be properly restored."}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/207864147-b68ea9bd-0ca9-42dc-882e-b8a705233749.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsxs)(n.h4,{id:"click-on-the-pod-name-redirects-to-the-pod-details-page-1159",children:["Click on the Pod name redirects to the Pod details page ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1159",children:"#1159"})]}),"\n",(0,i.jsx)(n.p,{children:"The list of containers also displays pods, now clicking on the pod name directly redirects to the Pod details page."}),"\n",(0,i.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211770946-2255f39f-7e2e-48ad-9ead-bcbfe6a115a7.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsxs)(n.h4,{id:"improved-styles-of-buttons-for-actions-984",children:["Improved styles of buttons for actions ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/984",children:"#984"})]}),"\n",(0,i.jsx)(n.p,{children:'The style of the buttons for actions on item in the list of in details pages have been improved. The background has been removed, but to make the hover state more visible, the "hover" circle is visible and the icon\'s color is also changing.'}),"\n",(0,i.jsxs)(n.p,{children:["On lists:\n",(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6422176/205979121-b49a0ddf-03bb-4a4d-8d12-bc8d0bd52387.png",alt:"list-actions"})]}),"\n",(0,i.jsxs)(n.p,{children:["On details pages:\n",(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6422176/205979123-ea420b17-e834-4029-82eb-22949889eee9.png",alt:"details-actions"})]}),"\n",(0,i.jsxs)(n.h4,{id:"improved-alignments-in-pages-with-lists-1182",children:["Improved alignments in pages with lists ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1182",children:"#1182"})]}),"\n",(0,i.jsx)(n.p,{children:"The alignment of the items in the list of containers and pods have been improved. The header of each columns are now aligned with the text. and the actions icons are now aligned with the top of the text."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/19958075/212712580-096fd090-0beb-40a4-8dc6-b3fdc5e81e35.png",alt:"list-actions"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Statistics area in container details are always shown. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1131",children:"#1131"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Add more descriptive wording and more information to extensions. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/985",children:"#985"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Allow to install on-the fly Podman Desktop extensions using an OCI image. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1187",children:"#1187"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Display correctly non-multiplexed stream in logs (when using non interactive mode). (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1197",children:"#1197"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Font changed from white to gray for non-name sections (creation date, size). (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1206",children:"#1206"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Add Help/about menu for macOS/Windows/Linux. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1207",children:"#1207"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(n.p,{children:"Coming with this new version of Podman Desktop, the documentation has been getting attention (with number of editorial reviews) and new content have been added."}),"\n",(0,i.jsx)(n.p,{children:"Content for helping users to migrate from Docker to Podman has been added:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1088",children:["Using the ",(0,i.jsx)(n.code,{children:"podman-mac-helper"})," tool to migrate from Docker to Podman on macOS"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1129",children:"better identify podman-mac-helper verification steps"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1143",children:"Emulating Docker CLI using Podman to migrate from Docker to Podman"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1146",children:"Migrating from Docker section"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1152",children:"Verifying that your tools are using Podman"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1144",children:"Importing saved containers"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Several of other improvements have been made to the documentation and the website:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/962",children:"Troubleshooting for Apple Silicon and brew x86_64 installs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/972",children:"Change text of custom binary location, add docs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/974",children:"Silent install option for windows"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1079",children:"Upgrade to vite v4 and rollup v3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1118",children:"Refreshing documentation on installing on Linux"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1130",children:"Identify the shell sessions in Installing on Linux"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1133",children:"Website: the linux binary is not a source, it should be promoted as a binary"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1162",children:"Introducing tabs for operatings systems and container engines"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1165",children:"website: In the landing page, update plugins and container engines lists"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1163",children:"Document where code is located within Podman Desktop"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1172",children:"(extension-api): Documentation on how to write an extension and use the api"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable bug fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Update to v0.3.2 Docker Desktop API for extensions - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1070",children:"#1070"})]}),"\n",(0,i.jsxs)(n.li,{children:["Updated link to the Matrix room - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1076",children:"#1076"})]}),"\n",(0,i.jsxs)(n.li,{children:["Report error when container name already exists - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1142",children:"#1142"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed connectivity to the Podman machine when the generated socket length is greater than 104 characters in MacOS - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1145",children:"#1145"})]}),"\n",(0,i.jsxs)(n.li,{children:["Do not use long calls for external clients - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1151",children:"#1151"})]}),"\n",(0,i.jsxs)(n.li,{children:["Invalid name/tag for images with registries using a different port - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1127",children:"#1127"})]}),"\n",(0,i.jsxs)(n.li,{children:["Invalid badge count for images when two images have the same tag - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1124",children:"#1124"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed detection of WSL2 - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/981",children:"#981"})]}),"\n",(0,i.jsxs)(n.li,{children:["Handle invalid kubeconfig files instead of crashing - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/953",children:"#953"})]}),"\n",(0,i.jsxs)(n.li,{children:["Removed redundant actions from details pages - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1200",children:"#1200"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed registry URL not aligned with header - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1205",children:"#1205"})]}),"\n",(0,i.jsxs)(n.li,{children:["Moved SVGs to reusable components - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1211",children:"#1211"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Extensions API has also been improved in this new release:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["(extension-api): Allows to register a factory for kubernetes connection objects (like for container connections) - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1040",children:"#1040"})]}),"\n",(0,i.jsxs)(n.li,{children:["(extension-api): List or inspect containers, be notified on events - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1041",children:"#1041"})]}),"\n",(0,i.jsxs)(n.li,{children:["(extension-api): Allows to get provider notification - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1045",children:"#1045"})]}),"\n",(0,i.jsxs)(n.li,{children:["(dd-extension-api): Implement toast API - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1154",children:"#1154"})]}),"\n",(0,i.jsxs)(n.li,{children:["(extension-api): Moved extension properties to preferences - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/948",children:"#948"})]}),"\n",(0,i.jsxs)(n.li,{children:["(dd-extension-api): Added open dev console on dd webview in development mode - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1071",children:"#1071"})]}),"\n",(0,i.jsxs)(n.li,{children:["(extension-api): Added notes on extension and frameworks/tooling of Podman Desktop - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1166",children:"#1166"})]}),"\n",(0,i.jsxs)(n.li,{children:["(extension-api): Documentation on how to write an extension and use the api - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1172",children:"#1172"})]}),"\n",(0,i.jsxs)(n.li,{children:["(dd-extension-api): DD extensions should see only minimal information on containers - ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1191",children:"#1191"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop 0.11 even better:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/emmanuelbernard",children:"Emmanuel Bernard"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/962",children:"#962 - Troubleshooting for Apple Silicon"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/eidottermihi",children:"Michael Prankl"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/974",children:"#974 - Silent install option for windows"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/elervik",children:"Endre Lervik"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1008",children:"#1008 - Namespace selection for deploy to kubernetes"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/evanfpearson",children:"Evan FP"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1145",children:"#1145 - fixed socket path length error"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lsm5",children:"Lokesh Mandvekar"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/956",children:"#956 - add repository key to package.json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jeffmaury",children:"Jean Fran\xe7ois Maury"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1194",children:"#1194 - Cannot create Kind cluster on Windows"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final Notes"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.11.0",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);