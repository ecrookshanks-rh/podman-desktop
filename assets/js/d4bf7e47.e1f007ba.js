"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58989],{67559:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var s=o(24246),i=o(71670);const l={sidebar_position:30,title:"Podman on MacOS",description:"How to investigate when Podman does not work as expected."},a="Troubleshooting Podman on macOS",r={id:"troubleshooting/troubleshooting-podman-on-macos",title:"Podman on MacOS",description:"How to investigate when Podman does not work as expected.",source:"@site/docs/troubleshooting/troubleshooting-podman-on-macos.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/troubleshooting-podman-on-macos",permalink:"/docs/troubleshooting/troubleshooting-podman-on-macos",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting/troubleshooting-podman-on-macos.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Podman on MacOS",description:"How to investigate when Podman does not work as expected."},sidebar:"mySidebar",previous:{title:"Podman on Windows",permalink:"/docs/troubleshooting/troubleshooting-podman-on-windows"},next:{title:"Podman on Linux",permalink:"/docs/troubleshooting/troubleshooting-podman-on-linux"}},d={},t=[{value:"Unable to set custom binary path for Podman on macOS",id:"unable-to-set-custom-binary-path-for-podman-on-macos",level:2},{value:"Issue",id:"issue",level:4},{value:"Solution",id:"solution",level:4},{value:"Unable to locate Podman Engine",id:"unable-to-locate-podman-engine",level:2},{value:"Issue",id:"issue-1",level:4},{value:"Explanation",id:"explanation",level:4},{value:"Solution",id:"solution-1",level:4},{value:"Podman machine on Apple Silicon",id:"podman-machine-on-apple-silicon",level:2},{value:"Issue",id:"issue-2",level:4},{value:"Explanation",id:"explanation-1",level:4},{value:"Solution",id:"solution-2",level:4},{value:"Recovering from a failed start",id:"recovering-from-a-failed-start",level:2},{value:"Workaround",id:"workaround",level:4},{value:"Solution",id:"solution-3",level:4},{value:"Podman machine not starting with QEMU 8.1.0 from brew",id:"podman-machine-not-starting-with-qemu-810-from-brew",level:2},{value:"Solution",id:"solution-4",level:4},{value:"Workaround",id:"workaround-1",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"On Apple Silicon, the Podman Machine does not start",id:"on-apple-silicon-the-podman-machine-does-not-start",level:2},{value:"Solution",id:"solution-5",level:4},{value:"Workaround",id:"workaround-2",level:4},{value:"Additional resources",id:"additional-resources-1",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"troubleshooting-podman-on-macos",children:"Troubleshooting Podman on macOS"})}),"\n",(0,s.jsx)(n.h2,{id:"unable-to-set-custom-binary-path-for-podman-on-macos",children:"Unable to set custom binary path for Podman on macOS"}),"\n",(0,s.jsx)(n.h4,{id:"issue",children:"Issue"}),"\n",(0,s.jsxs)(n.p,{children:["When setting a custom binary path (under Preferences -> Custom binary path), Podman is unable to find ",(0,s.jsx)(n.code,{children:"gvproxy"})," and ",(0,s.jsx)(n.code,{children:"podman-mac-helper"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'Error: unable to start host networking: "could not find \\"gvproxy\\" in one of [/usr/local/opt/podman/libexec /opt/homebrew/bin /opt/homebrew/opt/podman/libexec /usr/local/bin /usr/local/libexec/podman /usr/local/lib/podman /usr/libexec/podman /usr/lib/podman $BINDIR/../libexec/podman].  To resolve this error, set the helper_binaries_dir key in the `[engine]` section of containers.conf to the directory containing your helper binaries."\n'})}),"\n",(0,s.jsx)(n.h4,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download ",(0,s.jsx)(n.code,{children:"gvproxy"})," from the ",(0,s.jsx)(n.a,{href:"https://github.com/containers/gvisor-tap-vsock/releases",children:"gvisor-tap-vsock release page"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Build the ",(0,s.jsx)(n.code,{children:"podman-mac-helper"})," from the source code on the ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman/tree/main/cmd/podman-mac-helper",children:"Podman GitHub page"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Add the ",(0,s.jsx)(n.code,{children:"helpers_binaries_dir"})," entry to ",(0,s.jsx)(n.code,{children:"~/.config/containers/conf"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'[containers]\n\nhelper_binaries_dir=["/Users/user/example_directory"]\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE"}),": A pre-built binary will be added to the Podman release page so you do not have to build ",(0,s.jsx)(n.code,{children:"podman-mac-helper"}),". An ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman/issues/16746",children:"issue is open for this"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"unable-to-locate-podman-engine",children:"Unable to locate Podman Engine"}),"\n",(0,s.jsx)(n.h4,{id:"issue-1",children:"Issue"}),"\n",(0,s.jsxs)(n.p,{children:["Despite having Podman Engine installed, you might receive an error as follows -\n",(0,s.jsx)(n.code,{children:"Error: No such keg: /usr/local/Cellar/podman"}),"\nor any similar error denoting that Podman Engine does not exist."]}),"\n",(0,s.jsx)(n.h4,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(n.p,{children:["The Podman Installer and Homebrew use different locations to store the Podman Engine files in the file system. For example, Podman Installer installs Podman Engine in the path ",(0,s.jsx)(n.code,{children:"/opt/podman"})," whereas Homebrew uses the path ",(0,s.jsx)(n.code,{children:"/usr/local"})," for macOS Intel, ",(0,s.jsx)(n.code,{children:"/opt/homebrew"})," for Apple Silicon and ",(0,s.jsx)(n.code,{children:"/home/linuxbrew/.linuxbrew"})," for Linux."]}),"\n",(0,s.jsx)(n.h4,{id:"solution-1",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"To check where exactly is your Podman Engine installed, run the command-"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"which podman\n"})}),"\n",(0,s.jsx)(n.p,{children:"This returns the path where the Podman Engine would be installed. This would help determine further action."}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you\u2019re looking to completely uninstall Podman Engine from your system for a fresh installation, running ",(0,s.jsx)(n.code,{children:"which podman"})," returns the exact path where Podman still exists. This could be the path where Podman Installer stores Podman Engine, such as ",(0,s.jsx)(n.code,{children:"/opt/podman"}),". Once you know the path, run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo rm -rf /opt/podman\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo rm -rf path-where-podman-exists\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here, you would replace ",(0,s.jsx)(n.code,{children:"path-where-podman-exists"})," with the output of ",(0,s.jsx)(n.code,{children:"which podman"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can now proceed for a fresh installation of Podman Desktop"}),"\n",(0,s.jsx)(n.h2,{id:"podman-machine-on-apple-silicon",children:"Podman machine on Apple Silicon"}),"\n",(0,s.jsx)(n.h4,{id:"issue-2",children:"Issue"}),"\n",(0,s.jsx)(n.p,{children:"If you are using an Apple Silicon and brew, you might encounter the following error when starting Podman from Podman Desktop"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"Error: qemu exited unexpectedly with exit code 1, stderr: qemu-system-x86_64: invalid accelerator hvf\nqemu-system-x86_64: falling back to tcg\nqemu-system-x86_64: unable to find CPU model 'host'\n"})}),"\n",(0,s.jsx)(n.h4,{id:"explanation-1",children:"Explanation"}),"\n",(0,s.jsxs)(n.p,{children:["Podman machine is running as a ",(0,s.jsx)(n.code,{children:"x86_64"})," process and it could be due to a dual install of homebrew: one for ",(0,s.jsx)(n.code,{children:"x86_64"})," and one for ",(0,s.jsx)(n.code,{children:"arm64"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"solution-2",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"You can"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Uninstall Podman machine on your ",(0,s.jsx)(n.code,{children:"x86_64"})," brew install (for example from a terminal running under rosetta) ",(0,s.jsx)(n.code,{children:"brew uninstall podman"})]}),"\n",(0,s.jsxs)(n.li,{children:["or uninstall brew ",(0,s.jsx)(n.code,{children:"x86_64"})," as most brew receipe have now arm64 support: follow ",(0,s.jsx)(n.a,{href:"https://github.com/homebrew/install#uninstall-homebrew",children:"these instructions"})," from a terminal running under rosetta"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Then run a terminal in native mode (default) and install Podman machine ",(0,s.jsx)(n.code,{children:"brew install podman"})]}),"\n",(0,s.jsx)(n.p,{children:"Finally clean the Podman machine VMs that had been previously created, and create new ones."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine rm podman-machine-default\n$ podman machine init\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should be a happy camper from here."}),"\n",(0,s.jsx)(n.h2,{id:"recovering-from-a-failed-start",children:"Recovering from a failed start"}),"\n",(0,s.jsx)(n.p,{children:"After a failed start, the Podman machine might be unable to start because a QEMU process is still running and the PID file is in use."}),"\n",(0,s.jsx)(n.h4,{id:"workaround",children:"Workaround"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kill the remaining QEMU process and stop the Podman machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ ps -edf | grep qemu-system | grep -v grep | awk '{print $2}' | xargs -I{} kill -9 {}; podman machine stop\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the Podman machine."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"solution-3",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"Use Podman 4.6.1 or greater."}),"\n",(0,s.jsx)(n.h2,{id:"podman-machine-not-starting-with-qemu-810-from-brew",children:"Podman machine not starting with QEMU 8.1.0 from brew"}),"\n",(0,s.jsxs)(n.p,{children:["When you installed Podman and QEMU with brew, and QEMU version is 8.1.0, Podman machine might fail to start with an error such as:\n",(0,s.jsx)(n.code,{children:"Error: qemu exited unexpectedly with exit code -1, stderr: qemu-system-x86_64: Error: HV_DENIED"})]}),"\n",(0,s.jsx)(n.h4,{id:"solution-4",children:"Solution"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/installation/macos-install",children:"Install Podman Desktop and Podman using the .dmg installer"})," rather than brew.\nThe Podman installer has a QEMU binary that has been tested with Podman."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"workaround-1",children:"Workaround"}),"\n",(0,s.jsx)(n.p,{children:"Keep your brew-based installation and apply one of these workarounds:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Rollback the QEMU brew package to v8.0.3."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ brew uninstall qemu\n$ curl -OSL https://raw.githubusercontent.com/Homebrew/homebrew-core/dc0669eca9479e9eeb495397ba3a7480aaa45c2e/Formula/qemu.rb\n$ brew install ./qemu.rb\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Alternatively, sign the QEMU brew binary locally:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:'$ cat >entitlements.xml <<EOF\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n  <key>com.apple.security.hypervisor</key>\n  <true/>\n</dict>\n</plist>\nEOF\n$ codesign --sign - --entitlements entitlements.xml --force /usr/local/bin/qemu-system-$(uname -m | sed -e s/arm64/aarch64/)\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"additional-resources",children:"Additional resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/Homebrew/homebrew-core/issues/140244",children:"Homebrew issue #140244"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/containers/podman/issues/19708",children:"Podman issue #19708"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"on-apple-silicon-the-podman-machine-does-not-start",children:"On Apple Silicon, the Podman Machine does not start"}),"\n",(0,s.jsxs)(n.p,{children:["On Apple Silicon, when Podman Machine starts, it stays indefinitely blocked with a ",(0,s.jsx)(n.em,{children:"Waiting for VM"})," message."]}),"\n",(0,s.jsx)(n.h4,{id:"solution-5",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"For M1 and M2 processors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update to Podman 4.9."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"workaround-2",children:"Workaround"}),"\n",(0,s.jsx)(n.p,{children:"For M3 processors:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To get a clean environment, remove all Podman and qemu artifacts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Remove eventual installation from podman/podman desktop installer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ sudo rm -rf opt/podman\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Remove brew installations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ brew uninstall podman-desktop\n$ brew uninstall podman\n$ brew uninstall qemu\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Remove Podman files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ rm -rf ~/.ssh/podman-machine-default\n$ rm -rf ~/.ssh/podman-machine-default.pub\n$ rm -rf ~/.local/share/containers\n$ rm -rf ~/.config/containers\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reinstall Podman using brew:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ brew install podman\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install bunzip2:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ brew install bzip2\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install QEMU 8.2.0 to ",(0,s.jsx)(n.code,{children:"/opt/homebrew/Cellar/qemu/8.2.0"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ curl -sL https://github.com/AkihiroSuda/qemu/raw/704f7cad5105246822686f65765ab92045f71a3b/pc-bios/edk2-aarch64-code.fd.bz2 | bunzip2 > /opt/homebrew/Cellar/qemu/8.2.0/share/qemu/edk2-aarch64-code.fd\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install patched EDK2.\nDownload ",(0,s.jsx)(n.a,{href:"https://github.com/lima-vm/edk2-patched.tmp/releases/download/edk2-stable202311%2Blima.0/edk2-aarch64-code.fd.gz",children:"EDK2"})," from ",(0,s.jsx)(n.a,{href:"https://github.com/lima-vm/edk2-patched.tmp/releases",children:"lima-vm/edk2-patched.tmp/releases"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Init podman machine."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find QEMU configuration directory to define ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"qemu-config-directory"})})," in next step:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine info | grep MachineConfigDir\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update podman machine config json:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ sed -i 's@file=.\\*edk2-aarch64-code.fd@file=/path/to/downloaded/edk2-aarch64-code.fd@g' qemu-config-directory/podman-machine-default.json\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start Podman machine."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"additional-resources-1",children:"Additional resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman/issues/20776",children:"Issue #20776"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var s=o(27378);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);