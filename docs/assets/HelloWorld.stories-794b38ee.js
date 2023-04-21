import{H as p}from"./HelloWorld-76822564.js";import"./vue.esm-bundler-c7deffa7.js";const g={title:"Example/HelloWorld",component:p,argTypes:{msg:"Basic message!"}},d=l=>({components:{HelloWorld:p},setup(){return{args:l}},template:'<HelloWorld v-bind="args" />'}),e=d.bind({});e.args={msg:"Default message!"};const t=d.bind({});t.args={...e.args,msg:"Other message?"};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    HelloWorld
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<HelloWorld v-bind="args" />'
})`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var s,a,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    HelloWorld
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<HelloWorld v-bind="args" />'
})`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const i=["Default","Other"];export{e as Default,t as Other,i as __namedExportsOrder,g as default};
//# sourceMappingURL=HelloWorld.stories-794b38ee.js.map
