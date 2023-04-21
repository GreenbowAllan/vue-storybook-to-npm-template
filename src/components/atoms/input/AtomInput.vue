<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<template>
    <div class="text-field-wrapper" :class="{ active: isActive, disabled: props.disabled }" @click="handleClickWrapper" @keydown="handleKeyDown">
        <input
            ref="input"
            class="text-field"
            :class="{ 'has-suggestions': hasSuggestions }"
            type="text"
            :value="inputValue"
            :disabled="props.disabled"
            :name="props.name"
            :autocomplete="props.autoComplete"
            :inputmode="props.inputMode || 'text'"
            @input="handleInput"
            @focus="isFocused = true"
            @blur="handleBlur"
            @keypress="handleKeypress"
        />
        <div class="placeholder">{{ placeholder }}</div>
        <div class="error-message">{{ errorMessage }}</div>
        <div
            v-if="props.infoMessage"
            class="info-icon"
            :class="{ active: showingInfoBox }"
            @mouseover="showingInfoBox = true"
            @mouseleave="showingInfoBox = false"
            @click.stop="showingInfoBox = !showingInfoBox"
        >
            ?
        </div>
        <div v-if="showingInfoBox" class="info">
            {{ props.infoMessage }}
        </div>
        <div v-if="isFocused && hasSuggestions" class="suggestions">
            <div class="arrow up-arrow" :class="{ disabled: startIndex <= 0 }" @mousedown="moveUp">&#9662;</div>
            <div
                v-for="(suggestion, index) in suggestions.slice(startIndex, startIndex + 5)"
                :key="index"
                class="suggestion"
                :class="{ focused: focusedSelectionIndex === index + startIndex }"
                @mousedown="handleClickSuggestion(suggestion)"
            >
                {{ suggestion.forslagstekst }}
            </div>
            <div
                class="arrow down-arrow"
                :class="{
                    disabled: focusedSelectionIndex >= suggestions.length - 1 || suggestions.length < 5,
                }"
                @mousedown="moveDown"
            >
                &#9662;
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue"
import type { Ref } from "vue"
import { AutoCompleteTypes } from "./AtomInput.types"
interface DawaData {
    adgangsadresseid: string
    adresseringsvejnavn: string
    darstatus: number
    dør: string
    etage: string
    href: string
    husnr: string
    id: string
    kommunekode: string
    postnr: string
    postnrnavn: string
    status: number
    stormodtagerpostnr: string
    stormodtagerpostnrnavn: string
    supplerendebynavn: string
    vejkode: string
    vejnavn: string
    x: number
    y: number
}
interface DawaSuggestion {
    forslagstekst: string
    type: string
    caretpos: number
    stormodtagerpostnr: boolean
    tekst: string
    data: DawaData
}
interface Props {
    placeholder?: string
    name?: string
    autoComplete?: AutoCompleteTypes
    inputMode?: "search" | "email" | "text" | "numeric" | "none" | "tel" | "url" | "decimal" | undefined
    dawaLookup?: boolean
    modelValue: string | null
    errorMessage?: string | null
    infoMessage?: string | null
    check?: "phoneNumber" | ((value: string) => boolean) | null
    disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    placeholder: "",
    name: "",
    autoComplete: "name",
    inputMode: "text",
    modelValue: "",
    errorMessage: null,
    infoMessage: null,
    check: null,
})

const showingInfoBox = ref(false)

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

const focusedSelectionIndex = ref(0)

const dawaStreetname = ref("")

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

const check: ((val: string) => boolean) | null = (() => {
    if (props.check === "phoneNumber") {
        return (val: string) => {
            if (val.length < 3) {
                return /^\d+$/.test(val) || ["+", "+4"].includes(val)
            }
            const allowedPrefixes = ["\\+45", "0045"]
            const regex = new RegExp(`^(?:${allowedPrefixes.join("|")})?\\d{0,8}$`)
            return regex.test(val)
        }
    } else if (props.check) {
        return props.check
    } else {
        return null
    }
})()

function handleKeypress(event: KeyboardEvent) {
    if (event.code === "Enter" || event.code === "NumpadEnter" || event.metaKey) {
        return
    }
    const target = event.target as HTMLInputElement
    // if a selection exists, it must be in the textfield as it has to have focus when onKeydown triggers
    const selection = window.getSelection()?.toString()
    let newValue
    if (selection && target.selectionStart !== null && target.selectionEnd !== null) {
        newValue = target.value.substring(0, target.selectionStart) + event.key + target.value.substring(target.selectionEnd)
    } else {
        newValue = target.value + event.key
    }
    if (check && !check(newValue)) {
        event.preventDefault()
    }
}

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    inputValue.value = target.value
    if (props.dawaLookup) {
        dawaLookup()
    } else {
        emit("update:modelValue", inputValue.value)
    }
}

function handleBlur() {
    emit("blur", input.value?.value)
    isFocused.value = false
}

const suggestions: Ref<DawaSuggestion[]> = ref([])

const startIndex = ref(0)

const hasSuggestions = computed<boolean>(() => suggestions.value.length > 0)

async function dawaLookup() {
    focusedSelectionIndex.value = 0
    startIndex.value = 0
    const searchQuery = input.value?.value
    if (!searchQuery?.length) {
        return (suggestions.value = [])
    }
    let query = `q=${searchQuery}&fuzzy=true`
    if (dawaStreetname.value && searchQuery.length >= dawaStreetname.value.length + 1) {
        query += "&startfra=adgangsadresse"
    }
    try {
        const response = await fetch(`https://api.dataforsyningen.dk/autocomplete?${query}`)
        if (response.status !== 200) {
            throw new Error(JSON.stringify(response))
        }
        const body = await response.json()
        suggestions.value = body
    } catch (err) {
        console.error("failed to fetch from dawa api", err)
    }
}

async function handleClickSuggestion(suggestion: DawaSuggestion) {
    emit("update:modelValue", suggestion)
    inputValue.value = suggestion.forslagstekst
    if (suggestion.type === "vejnavn") {
        dawaStreetname.value = suggestion.forslagstekst
        setTimeout(() => {
            inputValue.value = props.modelValue + " "
            input.value?.focus()
            dawaLookup()
        })
    } else {
        input.value?.blur()
    }
}

function moveDown(event: KeyboardEvent | MouseEvent) {
    event.preventDefault()
    if (focusedSelectionIndex.value >= suggestions.value.length - 1) {
        return
    }
    ++focusedSelectionIndex.value
    if (focusedSelectionIndex.value - startIndex.value > 4) {
        ++startIndex.value
    }
}

function moveUp(event: KeyboardEvent | MouseEvent) {
    event.preventDefault()
    if (focusedSelectionIndex.value === 0) {
        return
    }
    --focusedSelectionIndex.value
    if (focusedSelectionIndex.value < startIndex.value) {
        --startIndex.value
    }
}

function handleKeyDown(event: KeyboardEvent) {
    const code: string = event.code
    if (hasSuggestions.value) {
        if (code === "Enter") {
            handleClickSuggestion(suggestions.value[focusedSelectionIndex.value])
        } else if (code === "ArrowDown") {
            moveDown(event)
        } else if (code === "ArrowUp") {
            moveUp(event)
        }
    }
}

defineExpose({
    inputValue,
})
</script>

<style lang="scss" scoped>
.text-field-wrapper {
    position: relative;
}
@media (hover) {
    .text-field:hover {
        background: #eee;
    }
}
.text-field {
    padding: var(--global-input-field-padding-y) var(--global-input-field-padding-x);
    width: 100%;
    border: 1px solid #ccc;
    border-radius: var(--global-input-field-border-radius);
    font-size: var(--global-input-field-font-size);
    box-shadow: var(--global-box-shadow);
    font-weight: 600;
}
.text-field.has-suggestions:focus {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
}
.text-field:focus {
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
.text-field:-webkit-autofill,
.text-field:focus,
.text-field-wrapper.active .text-field {
    padding-top: calc(1.3 * var(--global-input-field-padding-y) + 0.05rem);
    padding-bottom: calc(0.7 * var(--global-input-field-padding-y) - 0.05rem);
}
.text-field:-webkit-autofill + .placeholder,
.text-field:focus + .placeholder,
.text-field-wrapper.active .placeholder {
    top: 0.45rem;
    font-size: 0.5rem;
}
.suggestions {
    top: 3.5rem;
    position: absolute;
    background: white;
    width: 100%;
    z-index: 150;
    border: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-radius: var(--global-input-field-border-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.suggestion {
    padding: 0.8rem 1.7rem;
    cursor: pointer;
}
.suggestion.focused {
    background: #ccc;
}
.suggestion:not(:last-child) {
    border-bottom: 0.5px solid #ccc;
}
.down-arrow,
.suggestion:last-child {
    border-radius: var(--global-input-field-border-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.suggestion:hover {
    background: #ccc;
    opacity: var(--global-hover-opacity);
}
.arrow {
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.arrow:hover {
    background: #ddd;
}
.arrow.disabled:hover {
    background: white;
}
.arrow.disabled {
    color: #eee;
    cursor: not-allowed;
}
.up-arrow {
    transform: rotate(180deg);
    border-top: 0.5px solid #ccc;
}
.text-field-wrapper.disabled * {
    // pointer-events: none;
    cursor: not-allowed !important;
}
input:disabled {
    background-color: white !important;
}
</style>
