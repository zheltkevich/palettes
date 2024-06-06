<script setup>
import { ref, watch } from 'vue'
import PaletteExample from '@/components/PaletteExample.vue'
import MainPalette from '@/components/MainPalette.vue'

const hue = ref(0)
const shades = ref({})

const changeShades = newShades => (shades.value = newShades)
const changeHue = newHue => (hue.value = newHue)

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
    { deep: true }
)
</script>

<template>
    <div class="home-view">
        <PaletteExample class="home-view__palette-example" />
        <MainPalette
            class="home-view__main-palette"
            @changeHue="changeHue"
            @changeShades="changeShades" />
    </div>
</template>

<style lang="scss">
:root,
[data-scheme='dark'] {
    --brand-1: var(--swatch-500);
    --brand-1-invert: var(--swatch-100);
    --text-1: var(--swatch-100);
    --text-2: var(--swatch-200);
    --surface-1: var(--swatch-950);
    --surface-2: var(--swatch-900);
    --surface-3: var(--swatch-800);
    --surface-4: var(--swatch-700);

    color-scheme: dark;
}

@media (prefers-color-scheme: light) {
    :root {
        --brand-1: var(--swatch-700);
        --brand-1-invert: var(--swatch-200);
        --text-1: var(--swatch-950);
        --text-2: var(--swatch-900);
        --surface-1: var(--swatch-100);
        --surface-2: var(--swatch-200);
        --surface-3: var(--swatch-300);
        --surface-4: var(--swatch-400);

        color-scheme: light;
    }
}

[data-scheme='light'] {
    --brand-1: var(--swatch-700);
    --brand-1-invert: var(--swatch-200);
    --text-1: var(--swatch-950);
    --text-2: var(--swatch-900);
    --surface-1: var(--swatch-100);
    --surface-2: var(--swatch-200);
    --surface-3: var(--swatch-300);
    --surface-4: var(--swatch-400);

    color-scheme: light;
}

body {
    background-color: var(--surface-1);
    color: var(--text-1);
    accent-color: var(--text-2);

    // color-scheme: light dark;
}

.home-view {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    max-width: 100%;

    @media (width >= 1024px) {
        flex-direction: row;
    }

    &__palette-example {
        flex-grow: 1;
        flex-basis: 50%;
    }

    &__main-palette {
        flex-grow: 1;
        flex-basis: 50%;
    }
}
</style>
