import { defineComponent } from "vue"
import AtomTextarea from "./AtomTextarea.vue"
import { StoryFn } from "@storybook/vue3"

export default {
    title: "Atoms/TextArea",
    component: AtomTextarea,
}

const Template: StoryFn = (args: any) => ({
    components: { AtomTextarea },
    setup() {
        return { args }
    },
    template: '<AtomTextarea v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
    modelValue: "",
    placeholder: "Enter text here...",
    name: "myTextArea",
    rows: 4,
}

export const Disabled = Template.bind({})
Disabled.args = {
    ...Default.args,
    disabled: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
    ...Default.args,
    errorMessage: "This field is required",
}
