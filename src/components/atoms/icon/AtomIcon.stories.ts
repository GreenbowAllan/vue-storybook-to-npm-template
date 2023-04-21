import { Meta, StoryFn } from "@storybook/vue3"
import icons from "../../../assets/icons/icons.json"
import AtomIcon from "./AtomIcon.vue"

const meta: Meta<typeof AtomIcon> = {
    title: "Atoms/Icons",
    component: AtomIcon,
    argTypes: {
        icon: {
            control: "select",
            options: icons,
            defaultValue: "alert",
            table: {
                type: { summary: "select" },
            },
        },
        block: {
            control: "boolean",
            defaultValue: false,
        },
        isDecorativeOnly: {
            control: "boolean",
            defaultValue: false,
        },
        color: {
            control: "color",
            defaultValue: "black",
        },
        iconSize: {
            options: ["sm", "md", "lg", "xl", "none"],
            control: "select",
            defaultValue: "md",
            table: {
                type: { summary: "select" },
            },
        },
    },
}
export default meta

const Template: StoryFn = (args) => ({
    components: { AtomIcon },
    setup() {
        return { args }
    },
    template: `

    <AtomIcon v-bind="args" > {{args.default || 'i'}} </AtomIcon>

    `,
})
Template.storyName = "Configure Icon"
export const Primary = Template.bind({})

Template.args = {
    icon: "mobile",
    block: true,
    isDecorativeOnly: true,
    color: "black",
    iconSize: "md",
}

let template = `
  <div>
  <div style="
  padding:1rem 2rem;
  display: flex;
  flex-flow: row wrap;">
  `

icons.forEach((icon) => {
    template += `
      <div style="display: flex; flex-flow: column; align-items: center; justify-content:center; margin:2rem 0.5rem">
      <div style="margin:1rem 0.5rem">
      <AtomIcon icon="${icon}" block color="white">{{args.default || 'i'}} </AtomIcon>
      <AtomIcon v-bind="args" > {{args.default || 'i'}} </AtomIcon></div>
      <div style="margin:1rem 0.5rem">${icon}</div>
      </div>
    `
})

template += `
    </div>
  </div>
`

const ConfigureAllIcon: StoryFn = (args) => ({
    components: { AtomIcon },
    setup() {
        return { args }
    },
    template: template,
})
ConfigureAllIcon.args = {
    icon: "mobile",
    block: true,
    isDecorativeOnly: true,
    color: "black",
    iconSize: "md",
}

ConfigureAllIcon.storyName = "All Icons"
export const AllIcons = ConfigureAllIcon.bind({})
