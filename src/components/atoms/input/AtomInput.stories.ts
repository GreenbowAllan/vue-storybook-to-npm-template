// Import the required modules
import AtomInput from "./AtomInput.vue"
import { StoryFn } from "@storybook/vue3"

// Define the component in Storybook
export default {
    title: "Atoms/Input",
    component: AtomInput,
    argTypes: {
        placeholder: {
            control: "text",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        modelValue: {
            control: "text",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        inputMode: {
            options: ["search", "email", "text", "numeric", "none", "tel", "url", "decimal"],
            control: "select",
            defaultValue: "text",
            table: {
                type: { summary: "select" },
            },
        },
        autoComplete: {
            options: [
                "on",
                "off",
                "name",
                "honorific-prefix",
                "given-name",
                "additional-name",
                "family-name",
                "honorific-suffix",
                "nickname",
                "username",
                "current-password",
                "new-password",
                "organization-title",
                "organization",
                "street-address",
                "address-line1",
                "address-line2",
                "address-line3",
                "address-level4",
                "address-level3",
                "address-level2",
                "address-level1",
                "country",
                "country-name",
                "postal-code",
                "cc-name",
                "cc-given-name",
                "cc-additional-name",
                "cc-family-name",
                "cc-number",
                "cc-exp",
                "cc-exp-month",
                "cc-exp-year",
                "cc-csc",
                "cc-type",
                "transaction-currency",
                "transaction-amount",
                "language",
                "bday",
                "bday-day",
                "bday-month",
                "bday-year",
                "sex",
                "url",
                "photo",
                "tel",
                "tel-country-code",
                "tel-national",
                "tel-area-code",
                "tel-local",
                "tel-extension",
                "email",
                "impp",
                "firstName",
                "lastName",
            ],
            constrol: "select",
            defaultValue: "name",
            table: {
                type: { summary: "select" },
            },
        },
        errorMessage: {
            control: "text",
            description: "Slot content",
            table: {
                type: { summary: "text" },
            },
        },
        infoMessage: {
            control: "text",
            description: "Adding a info button when hovering",
            defaultValue: "",
            table: {
                type: { summary: "text" },
            },
        },
        check: {
            options: ["phoneNumber", "none"],
            control: "select",
            description: "Slot contentøpzskfjgnøpasfkbgøpsafkjbøæasfkjgbøpasfgjøpo",
            defaultValue: "none",
            table: {
                type: { summary: "text" },
            },
        },
    },
}

// Define a template for the component
const Template: StoryFn = (args) => ({
    // Set up the component with the provided arguments
    components: { AtomInput },
    setup() {
        return { args }
    },
    template: '<AtomInput v-bind="args" />',
})

// Define the different stories for the component
export const Default = Template.bind({})
Default.args = {
    placeholder: "Type something...",
    modelValue: "",
}

export const Disabled = Template.bind({})
Disabled.args = {
    placeholder: "Type something...",
    modelValue: "",
    disabled: true,
}

export const WithError = Template.bind({})
WithError.args = {
    placeholder: "Type something...",
    modelValue: "",
    errorMessage: "This field is required",
}

export const WithInfo = Template.bind({})
WithInfo.args = {
    placeholder: "Type something...",
    modelValue: "",
    infoMessage: "This is some information about the field",
}
