<template>
    <span
        class="nuxt-icon"
        :style="{ display: block ? 'block' : 'inline-block', width: size, height: size, verticalAlign: 'middle', shapeRendering: 'inherit', transform: 'translate3d(0,0, 0)', color: color }"
        :aria-hidden="isDecorativeOnly"
        v-html="icon"
    />
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue"

interface IconProps {
    icon: string
    block?: boolean
    isDecorativeOnly?: boolean
    color?: string
    iconSize: "sm" | "md" | "lg" | "xl" | "none"
}

const props = withDefaults(defineProps<IconProps>(), {
    icon: "mobile",
    block: true,
    isDecorativeOnly: false,
    color: "black",
    iconSize: "md",
})
const icon = ref("")

watchEffect(async () => {
    try {
        const iconsImport = import.meta.glob("../../../assets/icons/**/**.svg", {
            as: "raw",
            eager: false,
        })
        const rawIcon = await iconsImport[`../../../assets/icons/${props.icon}.svg`]()
        icon.value = rawIcon
    } catch {
        console.error(`[nuxt-icons] Icon '${props.icon}' doesn't exist in 'assets/icons'`)
    }
})

const size = computed(() => {
    if (props.iconSize === "sm") {
        return "16px"
    } else if (props.iconSize === "md") {
        return "32px"
    } else if (props.iconSize === "lg") {
        return "36px"
    } else if (props.iconSize === "xl") {
        return "150px"
    } else {
        return "inherit"
    }
})
</script>
<style scoped lang="scss">
/* svg {
    display: block;
    vertical-align: middle;
    shape-rendering: inherit;
    transform: translate3d(0, 0, 0);
} */

.nuxt-icon svg {
    path {
        fill: currentColor !important;
    }
    g {
        fill: currentColor !important;
    }
}
</style>
