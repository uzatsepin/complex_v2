import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css", "~/assets/css/animations.css"],

    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n", "nuxt-aos"],
    vite: {
        plugins: [tailwindcss()]
    },
    i18n: {
        vueI18n: "~/localization/i18n.config.ts",
        locales: [
            { code: "ua", iso: "uk-UA", name: "Українська" },
            { code: "ru", iso: "ru-RU", name: "Русский" },
            { code: "en", iso: "en-US", name: "English" }
        ],
        defaultLocale: "ua",
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
            alwaysRedirect: true
        }
    }
});