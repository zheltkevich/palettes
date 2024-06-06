<script setup>
import { ref, computed, watch } from 'vue'
import { usePalette } from './usePalette.js'
import SchemeSwitcher from './SchemeSwitcher.vue'

const { palettes, shades, setHue, hue, setLightness, setChroma, reset, clear, currentPalette } = usePalette()

const reactivePalettes = computed(() => {
    return Object.keys(palettes.value)
})
const reactiveShades = computed(() => {
    return Object.values(shades.value)
})
const rowsCount = ref(12)
const getVisibleHue = index => {
    let computedValue = Number(Number(hue.value) + (index - 1) * 30)
    if (computedValue >= 360) computedValue -= 360
    return computedValue
}

const $emit = defineEmits(['changeHue', 'changeShades'])
watch(
    hue,
    newHue => {
        $emit('changeHue', newHue)
    },
    { immediate: true }
)
watch(
    shades,
    newValue => {
        $emit('changeShades', newValue)
    },
    { deep: true }
)
</script>

<template>
    <div class="main-palette">
        <div class="main-palette__controls main-palette__controls--top">
            <div class="main-palette__select">
                <label for="rows-count">Rows count:</label>
                <select
                    id="rows-count"
                    v-model="rowsCount">
                    <option
                        v-for="index in 12"
                        :key="index">
                        {{ index }}
                    </option>
                </select>
            </div>
            <div class="main-palette__select">
                <label for="saved-palettes">Palettes:</label>
                <select
                    id="saved-palettes"
                    v-model="currentPalette">
                    <option
                        selected
                        disabled
                        hidden>
                        unsaved
                    </option>
                    <option
                        v-for="(palette, index) in reactivePalettes"
                        :key="index">
                        {{ palette }}
                    </option>
                </select>
            </div>
        </div>
        <div class="main-palette__colors-table">
            <div class="main-palette__table-row">
                <div class="main-palette__service-cell">Lightness:</div>
                <input
                    v-for="chromaInput in reactiveShades"
                    :id="`c-${chromaInput.code}`"
                    :key="chromaInput.code"
                    class="main-palette__input main-palette__input--lightness"
                    type="number"
                    step="0.01"
                    max="1"
                    min="0"
                    :value="chromaInput.lightness"
                    @input="setLightness(chromaInput.code, $event.target.value)" />
            </div>
            <div class="main-palette__table-row">
                <div class="main-palette__service-cell">Chroma:</div>
                <input
                    v-for="chromaInput in reactiveShades"
                    :id="`l-${chromaInput.code}`"
                    :key="chromaInput.code"
                    class="main-palette__input main-palette__input--chroma"
                    type="number"
                    step="0.01"
                    max="0.37"
                    min="0"
                    :value="chromaInput.chroma"
                    @input="setChroma(chromaInput.code, $event.target.value)" />
            </div>
            <div
                v-for="index in 1 * rowsCount"
                :key="index"
                class="main-palette__table-row">
                <div class="main-palette__service-cell">{{ getVisibleHue(index) }}</div>
                <div
                    v-for="shade in reactiveShades"
                    :key="shade"
                    class="main-palette__color-cell"
                    :style="{
                        '--l': shade.lightness,
                        '--c': shade.chroma,
                        '--h': getVisibleHue(index),
                    }">
                    {{ shade.code }}
                </div>
            </div>
        </div>
        <div class="main-palette__controls main-palette__controls--bottom">
            <input
                type="range"
                min="0"
                max="360"
                step="1"
                :value="hue"
                @input="setHue($event.target.value)" />
            <div class="main-palette__actions">
                <div class="main-palette__actions-section">
                    <button
                        type="button"
                        @click="reset">
                        Reset all
                    </button>
                    <button
                        type="button"
                        @click="clear('lightness')">
                        Clear lightness
                    </button>
                    <button
                        type="button"
                        @click="clear('chroma')">
                        Clear chroma
                    </button>
                </div>
                <div class="main-palette__actions-section">
                    <SchemeSwitcher />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.main-palette {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__table {
        display: grid;
        grid-template-rows: repeat(12, 1fr);
    }

    &__table-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    }

    &__service-cell {
        display: flex;
        align-items: center;
    }

    &__color-cell {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        background-color: oklch(var(--l) var(--c) var(--h));
    }

    &__controls {
        display: flex;
        gap: 8px;
        justify-content: space-between;

        &--bottom {
            flex-direction: column;
        }
    }

    &__actions {
        display: flex;
        gap: 8px;
        justify-content: space-between;
    }

    &__actions-section {
        display: flex;
        gap: 8px;
    }

    &__select {
        display: flex;
        gap: 8px;
        align-items: center;
    }
}
</style>
