<template>
    <button :class="styles" :disabled="isDisabled">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface ButtonProps {
    appearance: "primary" | "secondary" | "tertiary" | "text"
    width: "full" | "content"
    rounded: "full" | "md" | "none"
    isDisabled: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
    appearance: "primary",
    width: "content",
    rounded: "full",
    isDisabled: false,
})

const styles = computed(() => {
    let s = "button"

    if (props.appearance == "primary") s += ` button-primary`
    else if (props.appearance == "secondary") s += ` button-secondary`
    else if (props.appearance == "tertiary") s += ` button-tertiary`
    else if (props.appearance == "text") s += ` button-unstyled`

    if (props.width == "full") s += ` w-full`

    if (props.rounded == "full") s += " rounded-full"
    else if (props.rounded == "md") s += " rounded"

    if (props.isDisabled) s += ` disabled`
    return s
})
</script>
