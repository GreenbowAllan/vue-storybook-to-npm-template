import{r as g,M as x}from"./chunk-PCJTTTQV-0979d30b.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as d}from"./index-da48b69d.js";import"./iframe-b8ffea42.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-53a30047.js";import"./index-356e4a49.js";const f=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,u=""+new URL("colors-ac9401f3.svg",import.meta.url).href,j=""+new URL("comments-f15a6837.svg",import.meta.url).href,b=""+new URL("direction-94a9917f.svg",import.meta.url).href,k=""+new URL("flow-275142c6.svg",import.meta.url).href,y=""+new URL("plugin-57148314.svg",import.meta.url).href,w=""+new URL("repo-fb4ece47.svg",import.meta.url).href,_=""+new URL("stackalt-2ad81543.svg",import.meta.url).href;var e={},v={get exports(){return e},set exports(s){e=s}},n={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=g,m=60103;n.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;m=p("react.element"),n.Fragment=p("react.fragment")}var E=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function h(s,t,o){var r,i={},l=null,c=null;o!==void 0&&(l=""+o),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)N.call(t,r)&&!R.hasOwnProperty(r)&&(i[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m,type:s,key:l,ref:c,props:i,_owner:E.current}}n.jsx=h;n.jsxs=h;(function(s){s.exports=n})(v);function C(s={}){const{wrapper:t}=Object.assign({},d(),s.components);return t?e.jsx(t,{...s,children:e.jsx(o,{})}):o();function o(){const r=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},d(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Example/Introduction"}),`
`,e.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(r.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),`
`,e.jsxs(r.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e.jsx(r.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,e.jsxs(r.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e.jsx(r.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,e.jsx(r.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(r.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,e.jsx("div",{className:"subheading",children:"Configure"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e.jsx("img",{src:y,alt:"plugin"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[e.jsx("img",{src:_,alt:"Build"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[e.jsx("img",{src:u,alt:"colors"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e.jsx("img",{src:k,alt:"flow"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,e.jsx("div",{className:"subheading",children:"Learn"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e.jsx("img",{src:w,alt:"repo"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e.jsx("img",{src:b,alt:"direction"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),e.jsxs("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e.jsx("img",{src:f,alt:"code"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),e.jsxs("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e.jsx("img",{src:j,alt:"comments"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,e.jsx("div",{className:"tip-wrapper",children:e.jsxs(r.p,{children:[e.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e.jsx("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}const D=()=>{throw new Error("Docs-only story")};D.parameters={docsOnly:!0};const a={title:"Example/Introduction",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:C};const A=["__page"];export{A as __namedExportsOrder,D as __page,a as default};
//# sourceMappingURL=Introduction.stories-c05d7255.js.map
