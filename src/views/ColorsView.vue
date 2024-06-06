<script setup></script>

<template>
    <main class="main">
        <div class="bg-1">
            <div class="bg-2">
                <button class="button button__default">button</button>
                <button class="button button__succes">button</button>
                <button class="button button__info">button</button>
                <button class="button button__warning">button</button>
                <button class="button button__danger">button</button>
                <button class="button button__disabled">button</button>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
.main {
    --hue-brand: 137; // условно тут мы меняем на другое значение и все приложение пляшет от зеленого/какого хочется цвета
    // по сути цвет другой а lightness и chroma сохраняются
}

.bg-1 {
    width: 100%;
    height: 70vh;
    background-color: oklch(58.36% 0.141 var(--hue-brand));

    // oklch(58.36% 0.141 137.65) - это как в проекте точное значение, потому что hue разное немного (но для зеленого 137)
}

.bg-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 50vh;
    margin: auto;
    background-color: oklch(92.59% 0.045 var(--hue-brand));

    // oklch(92.59% 0.045 137)
}

.button {
    // было бы красиво для кнопок сделать одни значения chroma. А lightness например на ховере менять но у всех одно значение
    // чтобы менялось только hue (потому что отвечает именно за цвет)
    padding: 15px 30px;
    border-width: 0;
    color: oklch(100% 0 var(--hue-brand));
    font-size: 18px;

    &__default {
        background-color: oklch(71.69% 0.175 var(--hue-brand));

        // oklch(71.69% 0.175 137.74)
    }

    &__info {
        background-color: oklch(58.59% 0.117 239.86);

        &:active,
        &:hover {
            background-color: oklch(47.7% 0.092 239.24);
        }
    }

    &__succes {
        background-color: oklch(71.69% 0.175 137.74);

        &:active,
        &:hover {
            background-color: oklch(58.36% 0.141 137.65);
        }
    }

    &__warning {
        background-color: oklch(74.55% 0.174 53.04);

        &:active,
        &:hover {
            background-color: oklch(64.2% 0.177 47.21);
        }
    }

    &__danger {
        background-color: oklch(65.43% 0.233 20.641);

        &:active,
        &:hover {
            background-color: oklch(58.58% 0.238 26.55);
        }
    }

    &__disabled {
        background-color: oklch(95.9% 0.004 286.32);
        color: oklch(71.44% 0.017 278.39);
    }
}
</style>
