const html = document.firstElementChild

export const COLOR_SCHEMES = [
    {
        id: 'auto',
        name: 'Auto',
    },
    {
        id: 'light',
        name: 'Light',
    },
    {
        id: 'dark',
        name: 'Dark',
    },
]

export const saveScheme = scheme => {
    html.setAttribute('data-scheme', scheme)
    localStorage.setItem('data-scheme', scheme)
}

export const getSavedScheme = () => localStorage.getItem('data-scheme')
export const initColorScheme = () => {
    const savedScheme = getSavedScheme()

    if (savedScheme === null) saveScheme('auto')
    else saveScheme(savedScheme)
}

export default initColorScheme()
