<script setup></script>

<template>
    <div class="palette-example">
        <header class="palette-example__header">
            <div class="palette-example__logo">BRAND</div>
            <div class="palette-example__links">
                <span
                    v-for="i in 3"
                    :key="i"
                    class="palette-example__link">
                    Link {{ i }}
                </span>
            </div>
        </header>
        <div class="palette-example__main-wrapper">
            <aside>
                <small>Navigation</small>
                <nav class="palette-example__nav">
                    <span
                        v-for="i in 8"
                        :key="i"
                        class="palette-example__nav-link">
                        Nav item {{ i }}
                    </span>
                </nav>
            </aside>
            <article>
                <div class="palette-example__text-content">
                    <h1>Text Usage</h1>
                    <small>Lorem ipsum dolor sit amet.</small>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, accusantium omnis laudantium dicta velit similique
                        distinctio beatae facilis, iste perspiciatis ipsam quibusdam voluptate exercitationem vero ad? Rem repellendus vero quasi!
                    </p>
                </div>
                <div class="palette-example__cards">
                    <div class="palette-example__card">
                        <h2>I'm a card</h2>
                        <small>Lorem ipsum dolor</small>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque doloremque modi veniam aspernatur voluptatum labore
                            dolores perspiciatis.
                        </p>
                        <button class="palette-example__button palette-example__button--filled">Filled</button>
                        <button class="palette-example__button palette-example__button--bordered">Bordered</button>
                    </div>
                    <div class="palette-example__card">
                        <h2>I'm a card</h2>
                        <small>Lorem ipsum dolor</small>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque doloremque modi veniam aspernatur voluptatum labore
                            dolores perspiciatis.
                        </p>
                        <button class="palette-example__button palette-example__button--filled">Filled</button>
                        <button class="palette-example__button palette-example__button--bordered">Bordered</button>
                    </div>
                </div>
            </article>
        </div>
        <footer class="palette-example__footer">
            <div class="palette-example__footer-logo">BRAND</div>
        </footer>
    </div>
</template>

<style lang="scss">
.palette-example {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__logo {
        color: var(--brand-1);
        font-weight: bold;
        font-size: 24px;
        letter-spacing: 8px;
    }

    &__footer-logo {
        color: var(--brand-1);
        font-weight: medium;
        font-size: 18px;
        letter-spacing: 8px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 56px;
        padding-inline: 16px;
        border-radius: 8px;
        background-color: var(--surface-2);
    }

    &__links {
        display: flex;
        gap: 8px;
    }

    &__link {
        display: flex;
        border: 1px solid transparent;
        cursor: pointer;
        user-select: none;

        &:hover {
            border-bottom-color: var(--surface-4);
            color: var(--text-2);
        }

        &:active {
            color: var(--text-1);
        }
    }

    &__main-wrapper {
        display: flex;
        gap: 16px;

        aside {
            display: flex;
            flex-shrink: 0;
            flex-basis: 30%;
            flex-direction: column;
            gap: 16px;
            padding: 8px 16px;
            border-radius: 8px;
            background-color: var(--surface-2);
        }

        article {
            display: flex;
            flex-basis: 70%;
            flex-direction: column;
            gap: 16px;
        }

        nav {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    &__nav-link {
        border-bottom: 1px solid transparent;
        cursor: pointer;
        user-select: none;

        &:hover {
            border-bottom-color: var(--surface-4);
            color: var(--text-2);
        }

        &:active {
            color: var(--text-1);
        }
    }

    &__text-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    footer {
        display: flex;
        align-items: center;
        min-height: 56px;
        padding-inline: 16px;
        border-radius: 8px;
        background-color: var(--surface-2);
    }

    &__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 16px;
    }

    &__card {
        display: grid;
        gap: 1ch;
        padding: 16px;
        border: 1px solid var(--surface-3);
        border-radius: 8px;
        background-color: var(--surface-2);
    }

    small {
        color: var(--text-2);
    }

    &__button {
        --button-color: var(--brand-1-invert);
        --button-bg: var(--brand-1);
        --button-border: var(--surface-3);

        padding: 8px;
        border: 1px solid;
        border-color: var(--button-border);
        border-radius: 8px;
        background-color: var(--button-bg);
        color: var(--button-color);
        cursor: pointer;

        &:hover {
            --button-bg: oklch(from var(--brand-1) calc(l + 0.05) c h);
        }

        &:active {
            --button-bg: var(--brand-1);
        }

        &--bordered {
            --button-color: var(--brand-1);
            --button-bg: var(--surface-1);
            --button-border: 1px solid var(--brand-1);

            &:hover {
                --button-color: oklch(from var(--brand-1) calc(l + 0.15) c h);
                --button-bg: var(--surface-1);
                --button-border: 1px solid oklch(from var(--brand-1) calc(l + 0.15) c h);
            }

            &:active {
                --button-color: var(--brand-1);
                --button-border: 1px solid oklch(from var(--brand-1) calc(l + 0.15) c h);
            }
        }
    }
}
</style>
