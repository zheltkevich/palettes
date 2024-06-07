import { ref, onBeforeMount, watch } from 'vue'
import { getDefaultPalettes } from './default.palettes.js'
export const usePalette = () => {
    const hue = ref(150)
    const currentPalette = ref('default')
    const palettes = ref({})
    const shades = ref({})

    const setHue = value => (hue.value = Number(value))
    const chromaToPercent = value => Math.round((value * 100) / 0.37)
    const setLightness = (shadeCode, value) => {
        shades.value[shadeCode].lightness = Number(value) / 100
        localStorage.setItem('unsavedValues', JSON.stringify(shades.value))
    }
    const setChroma = (shadeCode, value) => {
        const ch = parseFloat(((0.37 / 100) * Number(value)).toFixed(4))
        shades.value[shadeCode].chroma = ch
        localStorage.setItem('unsavedValues', JSON.stringify(shades.value))
    }
    const clear = option => {
        Object.values(shades.value).forEach(shade => (shade[option] = 0))
        localStorage.setItem('unsavedValues', JSON.stringify(shades.value))
    }
    const reset = () => {
        hue.value = 150
        shades.value = getDefaultPalettes()[currentPalette.value]
        localStorage.removeItem('unsavedValues')
    }

    watch(currentPalette, paletteName => {
        shades.value = getDefaultPalettes()[paletteName]
        localStorage.removeItem('unsavedValues')
        localStorage.setItem('currentPaletteName', currentPalette.value)
    })

    onBeforeMount(() => {
        palettes.value = getDefaultPalettes()
        if (localStorage.getItem('currentPaletteName')) {
            currentPalette.value = localStorage.getItem('currentPaletteName')
        } else localStorage.setItem('currentPaletteName', currentPalette.value)

        if (localStorage.getItem('unsavedValues')) {
            shades.value = JSON.parse(localStorage.getItem('unsavedValues'))
        } else shades.value = palettes.value[currentPalette.value]
    })

    return {
        setChroma,
        setLightness,
        setHue,
        reset,
        clear,
        currentPalette,
        chromaToPercent,
        shades,
        hue,
        palettes,
    }
}
