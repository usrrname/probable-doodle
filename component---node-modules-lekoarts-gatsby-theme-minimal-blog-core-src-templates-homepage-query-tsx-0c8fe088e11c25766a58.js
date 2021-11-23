"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{24410:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(67294),o=n(70977),a=n(25444),i=n(93760),l=n(35441),c=n(21180),s=function(e){var t=e.children;return(0,o.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3},a:{variant:"links.listItem"}}},t)},g=n(71299),p=n(1435),u=n(80126),d=n(31439),m=n(63366),b=n(64983),f=["components"],h={_frontmatter:{}};function x(e){var t=e.components,n=(0,m.Z)(e,f);return(0,b.mdx)("wrapper",Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,b.mdx)("a",{href:"https://usrrname.github.io/understanding-nfts/essays",target:"_self"},(0,b.mdx)("img",{src:"orly_1.png",width:"50%",alt:"Parody ORLY book cover with lizard"})))}x.isMDXComponent=!0;var y=["components"],v={_frontmatter:{}};function k(e){var t=e.components,n=(0,m.Z)(e,y);return(0,b.mdx)("wrapper",Object.assign({},v,n,{components:t,mdxType:"MDXLayout"}))}k.isMDXComponent=!0;var w=function(e){var t=e.posts,n=(0,g.Z)(),r=n.basePath,m=n.blogPath,b=(0,p.Z)().siteTitle;return(0,o.tZ)(i.Z,null,(0,o.tZ)("h1",{sx:d.j},b),(0,o.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,o.tZ)(x,null)),(0,o.tZ)(l.Z,{text:"Latest Posts"},(0,o.tZ)(a.Link,{to:(0,u.Z)("/"+r+"/"+m)},"Read all posts")),(0,o.tZ)(c.Z,{posts:t,showTags:!1}),(0,o.tZ)(s,{sx:{variant:"section_bottom"}},(0,o.tZ)(k,null)))};var Z=function(e){var t=Object.assign({},e),n=t.data.allPost;return r.createElement(w,Object.assign({posts:n.nodes},t))}},61930:function(e,t,n){var r=n(67294),o=n(9983),a=n(25444),i=n(71299),l=n(80126);t.Z=function(e){var t=e.tags,n=(0,i.Z)(),c=n.tagsPath,s=n.basePath;return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(r.Fragment,{key:e.slug},!!t&&", ",r.createElement(o.rU,{as:a.Link,to:(0,l.Z)("/"+s+"/"+c+"/"+e.slug)},e.name))})))}},93760:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(4942),o=n(67294),a=n(23431),i=n(70977),l=n(9983),c=n(77710),s=n(92403),g=n(71299),p=function(e){var t=e.isDark,n=e.toggle;return(0,i.tZ)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,i.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},u=n(25444),d=n(80126);function m(e){return(0,i.tZ)(u.Link,Object.assign({activeClassName:"active"},e))}var b=function(e){var t=e.nav,n=(0,g.Z)().basePath;return(0,i.tZ)(o.Fragment,null,t&&t.length>0&&(0,i.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return(0,i.tZ)(l.rU,{key:e.slug,as:m,to:(0,d.Z)("/"+n+"/"+e.slug)},e.title)}))))},f=n(1435),h=function(){var e=(0,f.Z)().siteTitle,t=(0,g.Z)().basePath;return(0,i.tZ)(u.Link,{to:(0,d.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,i.tZ)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},x=function(){var e=(0,g.Z)().externalLinks;return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return(0,i.tZ)(l.rU,{key:e.url,href:e.url},e.name)}))))},y=function(){var e=(0,g.Z)().navigation,t=(0,s.If)(),n=t[0],r=t[1],o="dark"===n;return(0,i.tZ)("header",{sx:{mb:[5,6]}},(0,i.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,i.tZ)(h,null),(0,i.tZ)(p,{isDark:o,toggle:function(e){e.preventDefault(),r(o?"light":"dark")}})),(0,i.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,i.tZ)(b,{nav:e}),(0,i.tZ)(x,null)))},v=function(){return(0,i.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,i.tZ)("div",null,(0,i.tZ)(l.rU,{"aria-label":"github repository",href:"https://github.com/usrrname/understanding-nfts"},(0,i.tZ)("img",{src:"octocat.png",width:"25",alt:"github repository for Understanding NFTs"}))),(0,i.tZ)("div",null,"Commissioned by ",(0,i.tZ)(l.rU,{"aria-label":"Link to the KW Berlins' Open Secret Festival website",href:"https://www.kw-berlin.de/en/open-secret/"},"Open Secret Festival and KW Berlin")," ",(0,i.tZ)("img",{src:"kw_grau.png",width:"30"})))},k=n(66795),w={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:(0,k.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,k.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},Z=n(63366),O=["children"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},P=function(e){var t=e.children,n=(0,Z.Z)(e,O);return(0,i.tZ)("a",Object.assign({},n,{sx:S({},E),href:"#skip-nav","data-skip-link":"true"}),t)};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(a.xB,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:e.colors.text,color:e.colors.background},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),(0,i.tZ)(c.Z,null),(0,i.tZ)(P,null,"Skip to content"),(0,i.tZ)(l.W2,null,(0,i.tZ)(y,null),(0,i.tZ)(l.xu,{id:"skip-nav",sx:D({},w),className:r},t),(0,i.tZ)(v,null)))}},77710:function(e,t,n){var r=n(67294),o=n(35414),a=n(25444),i=n(1435);t.Z=function(e){var t=e.title,n=void 0===t?"":t,l=e.description,c=void 0===l?"":l,s=e.pathname,g=void 0===s?"":s,p=e.image,u=void 0===p?"":p,d=e.children,m=void 0===d?null:d,b=e.canonicalUrl,f=void 0===b?"":b,h=(0,i.Z)(),x=h.siteTitle,y=h.siteTitleAlt,v=h.siteUrl,k=h.siteDescription,w=h.siteLanguage,Z=h.siteImage,O=h.author,j={title:n||y,description:c||k,url:""+v+(g||""),image:""+v+(u||Z)};return r.createElement(o.q,{title:n,defaultTitle:y,titleTemplate:"%s | "+x},r.createElement("html",{lang:w}),r.createElement("meta",{name:"description",content:j.description}),r.createElement("meta",{name:"image",content:j.image}),r.createElement("meta",{property:"og:title",content:j.title}),r.createElement("meta",{property:"og:url",content:j.url}),r.createElement("meta",{property:"og:description",content:j.description}),r.createElement("meta",{property:"og:image",content:j.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:j.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:j.title}),r.createElement("meta",{name:"twitter:url",content:j.url}),r.createElement("meta",{name:"twitter:description",content:j.description}),r.createElement("meta",{name:"twitter:image",content:j.image}),r.createElement("meta",{name:"twitter:image:alt",content:j.description}),r.createElement("meta",{name:"twitter:creator",content:O}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),f?r.createElement("link",{rel:"canonical",href:f}):null,m)}},1435:function(e,t,n){var r=n(25444);t.Z=function(){return(0,r.useStaticQuery)("318001574").site.siteMetadata}},80126:function(e,t){t.Z=function(e){return e.replace(/\/\/+/g,"/")}},21180:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(70977),o=n(67294),a=n(9983),i=n(25444),l=n(61930),c=function(e){var t=e.post,n=e.showTags,c=void 0===n||n;return(0,r.tZ)(a.xu,{mb:4},(0,r.tZ)(a.rU,{as:i.Link,to:t.slug,sx:{fontSize:[1,2,3],color:"text"}},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&c&&(0,r.tZ)(o.Fragment,null," — ",(0,r.tZ)(l.Z,{tags:t.tags}))))},s=function(e){var t=e.posts,n=e.className,o=void 0===n?"":n,a=e.showTags,i=void 0===a||a,l=t.slice(0).reverse().map((function(e){return e}));return(0,r.tZ)("section",{sx:{mb:[5,6,7]},className:o},l.map((function(e){return(0,r.tZ)(c,{key:e.slug,post:e,showTags:i})})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-0c8fe088e11c25766a58.js.map