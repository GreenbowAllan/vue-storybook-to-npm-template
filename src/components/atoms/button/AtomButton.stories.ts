// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import Button from "./AtomButton.vue"

const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        appearance: {
            options: ["primary", "secondary", "tertiary", "unstyled"],
            control: "select",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        width: {
            options: ["full", "content"],
            control: "select",
            defaultValue: "content",
            table: {
                type: { summary: "select" },
            },
        },
        rounded: {
            options: ["full", "none", "md"],
            control: "select",
            defaultValue: "full",
            table: {
                type: { summary: "select" },
            },
        },
        isDisabled: {
            control: "boolean",
            defaultValue: false,
            table: {
                type: { summary: "select" },
            },
        },
        default: {
            control: "text",
            description: "Slot content",
            table: {
                type: { summary: "text" },
            },
        },
    },
}

export default meta

const Template: StoryFn = (args) => ({
    components: { Button },
    setup() {
        return { args }
    },
    template: `
            <Button v-bind="args" > {{args.default || 'button'}} </Button>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Button",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

export const Tertiary = Template.bind({})

Tertiary.args = {
    appearance: "tertiary",
}

export const Disabled = Template.bind({})

Disabled.args = {
    isDisabled: true,
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { Button },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Button width="full" > button </Button>  </div>
            <div style="margin:1rem 0.5rem"> <Button width="full" appearance="secondary" > button </Button>  </div>
            <div style="margin:1rem 0.5rem"> <Button width="full" appearance="tertiary" > button </Button>  </div>
            <div style="margin:1rem 0.5rem;">
                <Button style="margin:1rem 0.5rem;" appearance="primary" > button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="secondary" > button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="tertiary" > button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="text" > button </Button>
            </div>
            <div >
                <Button style="margin:1rem 0.5rem;" appearance="primary" rounded="md" > button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="secondary" rounded="md"> button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="tertiary" rounded="md"> button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="text" rounded="md"> button </Button>
            </div>
            <div style="margin:1rem 0.5rem;">
                <Button style="margin:1rem 0.5rem;" appearance="primary" rounded="none" > button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="secondary" rounded="none"> button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="tertiary" rounded="none"> button </Button>
                <Button style="margin:1rem 0.5rem;" appearance="text" rounded="none"> button </Button>
            </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
