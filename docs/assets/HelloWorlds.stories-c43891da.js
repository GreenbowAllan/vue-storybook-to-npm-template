import{d as c,a as u,o as i,b as g,e as o,f as t,u as r}from"./vue.esm-bundler-c7deffa7.js";import{_,H as n}from"./HelloWorld-76822564.js";/* empty css               */const f={class:"worlds"},h={class:"world"},H={class:"world"},m=c({__name:"HelloWorlds",props:{msg:null},setup(s){return u(0),(b,v)=>(i(),g("div",f,[o("div",h,[t(r(n),{msg:`${s.msg} message 1`},null,8,["msg"])]),o("div",H,[t(r(n),{msg:`${s.msg} message 2`},null,8,["msg"])])]))}}),p=_(m,[["__scopeId","data-v-3e7be535"]]);m.__docgenInfo={exportName:"default",displayName:"HelloWorlds",description:"",tags:{},props:[{name:"msg",required:!0,type:{name:"string"}}],sourceFiles:["/Users/greenbow/repos/vue-storybook-to-npm-template/src/components/HelloWorlds.vue"]};const N={title:"Example/HelloWorlds",component:p,argTypes:{msg:"Inner:"}},W=s=>({components:{HelloWorlds:p},setup(){return{args:s}},template:'<HelloWorlds v-bind="args" />'}),e=W.bind({});e.args={msg:"Wrapping"};var a,l,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    HelloWorlds
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<HelloWorlds v-bind="args" />'
})`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,N as default};
//# sourceMappingURL=HelloWorlds.stories-c43891da.js.map
