<script setup>
import { onMounted, ref } from 'vue'
import { COLOR_SCHEMES, saveScheme, getSavedScheme } from './colorScheme.js'

const schemes = ref(COLOR_SCHEMES)
const pickedScheme = ref(null)

const changeScheme = value => {
    saveScheme(value)
    setSwitcher()
}

const setSwitcher = () => {
    pickedScheme.value = getSavedScheme()
}

onMounted(() => {
    setSwitcher()
})
</script>

<template>
    <fieldset class="scheme-switcher">
        <label
            v-for="(scheme, i) in schemes"
            :key="i"
            class="scheme-switcher__label"
            :for="scheme.id"
            :aria-label="scheme.name">
            <input
                :id="scheme.id"
                v-model="pickedScheme"
                class="scheme-switcher__input"
                checked
                type="radio"
                name="theme"
                :value="scheme.id"
                @change="changeScheme(scheme.id)" />
            <span>{{ scheme.name }}</span>
        </label>
    </fieldset>
</template>

<style lang="scss">
.scheme-switcher {
    display: flex;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;
    column-gap: 16px;

    label {
        position: relative;
        display: flex;
        align-items: center;
        color: var(--text-2);
        font-size: 14px;
        user-select: none;

        &:hover {
            cursor: pointer;
        }

        &:not(:last-child) {
            &::after {
                content: '';
                position: absolute;
                right: -8px;
                display: flex;
                width: 0;
                height: 50%;
                border-right: 1px solid hsla(var(--hue) 10% 50% / 0.15);
            }
        }
    }

    input {
        display: flex;
        width: 14px;
        height: 14px;
        margin: 0;
        margin-right: 4px;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
