"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48610],{20013:(e,t,n)=>{n.d(t,{Z:()=>i});n(27378);var s=n(99213),a=n(14582),r=n(24246);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.Z,{permalink:n,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(a.Z,{permalink:i,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},54744:(e,t,n)=>{n.d(t,{Z:()=>B});n(27378);var s=n(40624),a=n(6298),r=n(24246);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(36641);const o={title:"title_Kdtz"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,a.nO)(),{permalink:c,title:d}=n,u=i?"h1":"h2";return(0,r.jsx)(u,{className:(0,s.Z)(o.title,t),children:i?d:(0,r.jsx)(l.Z,{to:c,children:d})})}var d=n(99213),u=n(40689),g=n(70925);const m={container:"container_iZB2"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.c)();return t=>{const n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,a.nO)(),{date:i,readingTime:l}=n,o=(0,g.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.Z)(m.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var b=n(32145);const f={authorCol:"authorCol_v1VX",imageOnlyAuthorRow:"imageOnlyAuthorRow_RxZ1",imageOnlyAuthorCol:"imageOnlyAuthorCol_iWtj"};function Z(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,a.nO)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,r.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.Z)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,r.jsx)(b.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(Z,{})]})}var T=n(51721),N=n(40450);function w(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,a.nO)();return(0,r.jsx)("div",{id:i?T.uR:void 0,className:(0,s.Z)("markdown",n),children:(0,r.jsx)(N.Z,{children:t})})}var y=n(75484),P=n(54709),k=n(28349);function A(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function O(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(A,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,a.nO)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=n.length>0;if(!(g||u||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.Z)("row","margin-top--sm",y.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.Z,{tags:n})})}),e&&(0,r.jsx)(P.Z,{className:(0,s.Z)("margin-top--sm",y.k.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.Z)("col",{"col--9":u}),children:(0,r.jsx)(k.Z,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":g}),children:(0,r.jsx)(O,{blogPostTitle:i,to:e.permalink})})]})}function B(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,s.Z)(l,n),children:[(0,r.jsx)(v,{}),(0,r.jsx)(w,{children:t}),(0,r.jsx)(U,{})]})}},2134:(e,t,n)=>{n.d(t,{Z:()=>i});n(27378);var s=n(6298),a=n(54744),r=n(24246);function i(e){let{items:t,component:n=a.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.n4,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},41071:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(27378);var s=n(40624),a=n(99213),r=n(88676),i=n(75484),l=n(41387),o=n(36641),c=n(5720),d=n(20013),u=n(60505),g=n(2134),m=n(27894),h=n(1999),p=n(24246);function x(e){let{tag:t}=e;const n=(0,l.Wi)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:n,description:t.description}),(0,p.jsx)(u.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:s,listMetadata:r}=e;const i=(0,l.Wi)(t);return(0,p.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,p.jsx)(m.Z,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.Z,{as:"h1",children:i}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.Z,{href:t.allTagsPath,children:(0,p.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.Z,{items:n}),(0,p.jsx)(d.Z,{metadata:r})]})}function b(e){return(0,p.jsxs)(r.FG,{className:(0,s.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},27894:(e,t,n)=>{n.d(t,{Z:()=>c});n(27378);var s=n(40624),a=n(71135),r=n(75484),i=n(458),l=n(24246);function o(e){let{className:t}=e;return(0,l.jsx)(i.Z,{type:"caution",title:(0,l.jsx)(a.cI,{}),className:(0,s.Z)(t,r.k.common.unlistedBanner),children:(0,l.jsx)(a.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.T$,{}),(0,l.jsx)(o,{...e})]})}},41387:(e,t,n)=>{n.d(t,{HV:()=>l,Wi:()=>i});n(27378);var s=n(99213),a=n(40689);n(24246);function r(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=r();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,s.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},71135:(e,t,n)=>{n.d(t,{T$:()=>o,cI:()=>i,eU:()=>l,ht:()=>c,xo:()=>d});n(27378);var s=n(99213),a=n(7092),r=n(24246);function i(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(a.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},85978:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(10610),a=(n(27378),n(24246));function r(e){const t={...e};return t?.code?.length>2&&("$ "===t.code.substring(0,2)||"# "===t.code.substring(0,2)||"> "===t.code.substring(0,2))&&(t.code=t.code.substring(2)),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.Z,{...t})})}},35654:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(30537),a=n(9928),r=n(19374),i=n(92739),l=n(13067);s.vI.add(a.vnX,r.mRB);const o={...l.Z,Icon:i.G}}}]);