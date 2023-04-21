<template>
    <div class="textarea-wrapper" :class="{ active: isActive, disabled: props.disabled }" @click="handleClickWrapper">
        <textarea ref="input" class="textarea" :value="inputValue" :disabled="props.disabled" :name="props.name" :rows="props.rows" @input="handleInput" @focus="isFocused = true" @blur="handleBlur" />
        <div class="placeholder">{{ placeholder }}</div>
        <div class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue"
import type { Ref } from "vue"

const props = defineProps<{
    placeholder?: string
    name?: string
    modelValue: string | null
    errorMessage?: string | null
    infoMessage?: string | null
    disabled?: boolean
    rows?: number
}>()

const inputValue = ref(props.modelValue || "")

watch(
    () => props.modelValue,
    (val) => {
        if (val) {
            inputValue.value = val
        }
    }
)

const emit = defineEmits(["update:modelValue", "blur"])

const isFocused = ref(false)

const isActive = computed<boolean>(() => !!inputValue.value.length)

const input = ref<HTMLInputElement | null>(null)

function handleClickWrapper(event: Event) {
    if (props.disabled) {
        event.stopPropagation()
        return
    }
    input.value?.focus()
}

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    inputValue.value = target.value
    emit("update:modelValue", inputValue.value)
}

function handleBlur() {
    emit("blur", input.value?.value)
    isFocused.value = false
}

defineExpose({
    inputValue,
})
</script>

<style lang="scss" scoped>
.textarea-wrapper {
    position: relative;
}
@media (hover) {
    .textarea:hover {
        background: #eee;
    }
}
.textarea {
    padding: var(--global-textarea-padding-y) var(--global-textarea-padding-x);
    width: 100%;
    border: 1px solid #ccc;
    border-radius: var(--global-input-field-border-radius);
    font-size: var(--global-input-field-font-size);
    box-shadow: var(--global-box-shadow);
    font-weight: 600;
}
.textarea:focus {
    outline: none;
}
.info-icon {
    position: absolute;
    top: 0.8rem;
    right: 1.3rem;
    color: var(--global-primary-color);
    cursor: help;
    width: 3ch;
    height: 3ch;
    background: #d6d1d1;
    padding: 1ch;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info-icon.active {
    color: white;
    background: var(--global-primary-color);
}
.info {
    color: var(--global-primary-color);
    text-align: center;
    position: absolute;
    z-index: 900;
    right: 0;
    bottom: 0;
    transform: translateY(110%);
    background: #d6d1d1;
    border-radius: var(--global-input-field-border-radius);
    padding: 2ch;
}
.error-message {
    position: relative;
    z-index: 50;
    color: red;
    margin-top: 0.4rem;
    margin-left: 1.7rem;
    font-size: 0.7rem;
}
.placeholder {
    position: absolute;
    z-index: 100;
    top: 1.1rem;
    left: 1.7rem;
    transition: top, font-size 0.1s ease-out;
    color: var(--global-input-field-placeholder-color);
    font-weight: 600;
}
.textarea:focus,
.textarea-wrapper.active .textarea {
    padding-top: calc(1.3 * var(--global-textarea-padding-y) + 0.05rem);
    padding-bottom: calc(0.7 * var(--global-textarea-padding-y) - 0.05rem);
}
.textarea:-webkit-autofill + .placeholder,
.textarea:focus + .placeholder,
.textarea-wrapper.active .placeholder {
    top: 0.45rem;
    font-size: 0.5rem;
}
.textarea-wrapper.disabled * {
    cursor: not-allowed !important;
}
input:disabled {
    background-color: white !important;
}
</style>
