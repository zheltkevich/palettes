<script setup>
import { ref, reactive, watch } from 'vue'

const syncHue = ref(true)
const currentHue = ref(1)
const hue = reactive({
    1: 27,
    2: 27,
    3: 27,
    4: 27,
})
watch(
    hue,
    newValue => {
        document.documentElement.style.setProperty('--hue', newValue[currentHue.value])
    },
    { deep: true, immediate: true }
)
const getHues = number => {
    const numberHue = syncHue.value ? Number(hue[1]) : Number(hue[number])
    return {
        1: numberHue,
        2: numberHue + 30,
        3: numberHue + 60,
        4: numberHue + 120,
        5: numberHue + 150,
        6: numberHue + 180,
        7: numberHue + 210,
        8: numberHue + 240,
        9: numberHue + 270,
        10: numberHue + 300,
        11: numberHue + 330,
    }
}

const setHue = (event, number) => (hue[number] = Number(event.target.value))

const shades = {
    50: {
        code: 50,
        lightness: 0.9778,
        chroma: 0.0108,
    },
    100: {
        code: 100,
        lightness: 0.9356,
        chroma: 0.0321,
    },
    200: {
        code: 200,
        lightness: 0.8811,
        chroma: 0.0609,
    },
    300: {
        code: 300,
        lightness: 0.8267,
        chroma: 0.0908,
    },
    400: {
        code: 400,
        lightness: 0.7422,
        chroma: 0.1398,
    },
    500: {
        code: 500,
        lightness: 0.6478,
        chroma: 0.1472,
    },
    600: {
        code: 600,
        lightness: 0.5733,
        chroma: 0.1299,
    },
    700: {
        code: 700,
        lightness: 0.4689,
        chroma: 0.1067,
    },
    800: {
        code: 800,
        lightness: 0.3944,
        chroma: 0.0898,
    },
    900: {
        code: 900,
        lightness: 0.32,
        chroma: 0.0726,
    },
    950: {
        code: 950,
        lightness: 0.2378,
        chroma: 0.054,
    },
}

const getBgColor = (hue, shadeCode, chromaMultiplier = 1) => {
    const chroma = shades[shadeCode].chroma * chromaMultiplier
    const lightness = shades[shadeCode].lightness
    return {
        '--l': Number(lightness.toFixed(2)),
        '--c': Number(chroma.toFixed(4)),
        '--h': hue,
    }
    // return `--bg: oklch(${shades[shadeCode].lightness}% ${shades[shadeCode].chroma * chromaMultiplier} ${hue})`
}
</script>

<template>
    <main class="scheme">
        <h1>Scheme</h1>
        <p>
            Color palette using
            <code>oklch</code>
        </p>
        <label for="sync">
            <input
                id="sync"
                v-model="syncHue"
                type="checkbox" />
            Sync hue
        </label>
        <div class="scheme__wrapper">
            <div class="scheme__container">
                <div class="scheme__shades">
                    <div
                        v-for="(customHue, index) in getHues(1)"
                        :key="index"
                        class="scheme__color-container">
                        <div
                            v-for="(shade, i) in shades"
                            :key="i"
                            class="scheme__color-shade"
                            :style="getBgColor(customHue, shade.code)">
                            {{ shade.code }}
                        </div>
                    </div>
                </div>
                <div class="scheme__controls">
                    <p>Hue: {{ hue[1] }}</p>
                    <input
                        v-model="hue[1]"
                        type="range"
                        min="0"
                        max="360" />
                    <button
                        type="button"
                        :style="getBgColor(hue[1], 500)"
                        @click="hue[1] = 27">
                        Reset {{ syncHue ? 'all' : '' }}
                    </button>
                </div>
            </div>
            <div class="scheme__container">
                <div class="scheme__shades">
                    <div
                        v-for="(customHue, index) in getHues(2)"
                        :key="index"
                        class="scheme__color-container">
                        <div
                            v-for="(shade, i) in shades"
                            :key="i"
                            class="scheme__color-shade"
                            :style="getBgColor(customHue, shade.code, 1.5)">
                            {{ shade.code }}
                        </div>
                    </div>
                </div>
                <div class="scheme__controls">
                    <p>Hue: {{ syncHue ? hue[1] : hue[2] }}</p>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        :value="syncHue ? hue[1] : hue[2]"
                        @input="setHue($event, syncHue ? 1 : 2)" />
                    <button
                        type="button"
                        :style="getBgColor(syncHue ? hue[1] : hue[2], 500)"
                        @click="syncHue ? (hue[1] = 27) : (hue[2] = 27)">
                        Reset {{ syncHue ? 'all' : '' }}
                    </button>
                </div>
            </div>
            <div class="scheme__container">
                <div class="scheme__shades">
                    <div
                        v-for="(customHue, index) in getHues(3)"
                        :key="index"
                        class="scheme__color-container">
                        <div
                            v-for="(shade, i) in shades"
                            :key="i"
                            class="scheme__color-shade"
                            :style="getBgColor(customHue, shade.code, 2)">
                            {{ shade.code }}
                        </div>
                    </div>
                </div>
                <div class="scheme__controls">
                    <p>Hue: {{ syncHue ? hue[1] : hue[3] }}</p>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        :value="syncHue ? hue[1] : hue[3]"
                        @input="setHue($event, syncHue ? 1 : 3)" />
                    <button
                        type="button"
                        :style="getBgColor(syncHue ? hue[1] : hue[3], 500)"
                        @click="syncHue ? (hue[1] = 27) : (hue[3] = 27)">
                        Reset {{ syncHue ? 'all' : '' }}
                    </button>
                </div>
            </div>
            <div class="scheme__container">
                <div class="scheme__shades">
                    <article class="scheme__example">
                        <header>
                            <h2>Text Usage</h2>
                            <small>Lorem ipsum dolor</small>
                        </header>
                        <div class="scheme__example-card">
                            <h2>I'm a card</h2>
                            <small>Lorem ipsum dolor</small>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque doloremque modi veniam aspernatur voluptatum labore
                                dolores perspiciatis.
                            </p>
                        </div>
                    </article>
                </div>
                <div class="scheme__controls">
                    <p>Hue: {{ syncHue ? hue[1] : hue[3] }}</p>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        :value="syncHue ? hue[1] : hue[3]"
                        @input="setHue($event, syncHue ? 1 : 3)" />
                    <button
                        type="button"
                        :style="getBgColor(syncHue ? hue[1] : hue[3], 500)"
                        @click="syncHue ? (hue[1] = 27) : (hue[3] = 27)">
                        Reset {{ syncHue ? 'all' : '' }}
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
html {
    --swatch-1: oklch(99% 0.05 var(--hue));
    --swatch-2: oklch(90% 0.1 var(--hue));
    --swatch-3: oklch(80% 0.2 var(--hue));
    --swatch-4: oklch(72% 0.25 var(--hue));
    --swatch-5: oklch(67% 0.31 var(--hue));
    --swatch-6: oklch(50% 0.27 var(--hue));
    --swatch-7: oklch(35% 0.25 var(--hue));
    --swatch-8: oklch(25% 0.2 var(--hue));
    --swatch-9: oklch(13% 0.2 var(--hue));
    --swatch-10: oklch(5% 0.1 var(--hue));
    --text-1: var(--swatch-1);
    --text-2: var(--swatch-2);
    --surface-1: var(--swatch-10);
    --surface-2: var(--swatch-9);
    --surface-3: var(--swatch-8);
}

body {
    background: var(--surface-1);
    color: var(--text-1);
}

@media (prefers-color-scheme: light) {
    html {
        --text-1: var(--swatch-10);
        --text-2: var(--swatch-9);
        --surface-1: var(--swatch-1);
        --surface-2: var(--swatch-2);
        --surface-3: var(--swatch-3);
    }
}

.scheme {
    --contrast-h: calc(var(--h) + 180);
    --bg: oklch(var(--l) var(--c) var(--h));
    --l-100: 97%;
    --l-200: 89%;
    --l-300: 80%;
    --l-400: 71%;
    --l-500: 60%;
    --l-600: 49%;
    --l-700: 38%;
    --l-800: 25%;
    --l-900: 13%;
    --c-100: 0.02;
    --c-200: 0.05;
    --c-300: 0.12;
    --c-400: 0.19;
    --c-500: 0.27;
    --c-600: 0.19;
    --c-700: 0.12;
    --c-800: 0.05;
    --c-900: 0.02;

    // color: oklch(10% 0.01 var(--h));
    --main-color: oklch(10% 0.01 var(--h));

    display: flex;
    flex-direction: column;
    gap: 16px;
    accent-color: lch(45% 0.2 var(--h));

    &__wrapper {
        display: grid;

        // grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
        gap: 16px;
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px;
        border: 1px solid var(--main-color);
    }

    &__shades {
        display: flex;
        flex-direction: column;
    }

    &__controls {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__color-container {
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(40px, 1fr));
        grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    }

    &__color-shade {
        --bg: oklch(var(--l) var(--c) var(--h));

        display: flex;
        align-items: center;
        justify-content: center;

        // width: 40px;
        // height: 40px;
        background-color: var(--bg);
    }

    &__example {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;

        small {
            color: var(--text-2);
        }
    }

    &__example-card {
        display: grid;
        gap: 1ch;
        padding: 1rem;
        border: 1px solid var(--surface-3);
        border-radius: 10px;
        background: var(--surface-2);
    }
}

button {
    --bg: oklch(var(--l) var(--c) var(--h));

    background-color: var(--bg);
    color: #ffffff;
}
</style>
