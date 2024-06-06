<script setup>
import { ref, watch } from 'vue'
import PaletteExample from '@/components/PaletteExample.vue'
import MainPalette from '@/components/MainPalette.vue'
const hue = ref(0)
const shades = ref({})
const changeShades = newShades => {
    shades.value = newShades
}
const changeHue = newHue => {
    hue.value = newHue
}

watch(
    hue,
    newHue => {
        document.documentElement.style.setProperty('--hue', newHue)
    },
    { immediate: true }
)
watch(
    shades,
    newValue => {
        for (const [key, value] of Object.entries(newValue)) {
            document.documentElement.style.setProperty(`--swatch-${key}`, `oklch(${value.lightness} ${value.chroma} var(--hue))`)
        }
    },
    { deep: true, immediate: true }
)

// watch(
//     colors,
//     newValue => {
//         document.documentElement.style.setProperty('--hue', newValue.hue)
//         for (const [key, value] of Object.entries(newValue)) {
//             document.documentElement.style.setProperty(`--swatch-${key}`, value)
//         }
//     },
//     { deep: true, immediate: true }
// )
</script>

<template>
    <div class="palette-builder-view">
        <PaletteExample />
        <MainPalette
            @changeHue="changeHue"
            @changeShades="changeShades" />
    </div>
</template>

<style lang="scss">
:root,
[data-scheme='dark'] {
    --text-1: var(--swatch-100);
    --text-2: var(--swatch-200);
    --surface-1: var(--swatch-950);
    --surface-2: var(--swatch-900);
    --surface-3: var(--swatch-800);

    color-scheme: dark;
}

@media (prefers-color-scheme: light) {
    :root {
        --text-1: var(--swatch-950);
        --text-2: var(--swatch-900);
        --surface-1: var(--swatch-100);
        --surface-2: var(--swatch-200);
        --surface-3: var(--swatch-300);

        color-scheme: light;
    }
}

[data-scheme='light'] {
    --text-1: var(--swatch-950);
    --text-2: var(--swatch-900);
    --surface-1: var(--swatch-100);
    --surface-2: var(--swatch-200);
    --surface-3: var(--swatch-300);

    color-scheme: light;
}

body {
    background: var(--surface-1);
    color: var(--text-1);
    accent-color: var(--text-2);

    // color-scheme: light dark;
}

.palette-builder-view {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 24px;
}
</style>
