<script setup></script>

<template>
    <article class="palette-example">
        <div class="logo" />
        <header>
            <h2>Text Usage</h2>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        </header>
        <div class="palette-example__card">
            <h2>I'm a card</h2>
            <small>Lorem ipsum dolor</small>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque doloremque modi veniam aspernatur voluptatum labore dolores
                perspiciatis.
            </p>
            <button class="button">I am a button</button>
        </div>
    </article>
</template>

<style lang="scss">
.logo {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    background-color: #94304f;
}

.palette-example {
    display: grid;
    gap: 2ch;
    align-content: start;

    &__card {
        display: grid;
        gap: 1ch;
        padding: 1rem;
        border: 1px solid var(--surface-3);
        border-radius: 10px;
        background-color: var(--surface-2);
        transition: 0.2s ease-out background-color;
    }

    small {
        color: var(--text-2);
    }

    button {
        --button-bg: var(--swatch-500);

        padding: 8px;
        border: var(--button-border);
        border-radius: 8px;
        background-color: var(--button-bg);
        color: oklch(99% 0.05 var(--hue));
        cursor: pointer;
        transition: 0.1s ease-out;
        transition-property: background-color, border-color, color;

        &:hover {
            --button-bg: var(--swatch-400);
        }

        &:active {
            --button-bg: var(--swatch-500);
        }
    }
}
</style>
