<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <NuxtLink
                        :to="$localePath('/')"
                        class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <Icon
                                name="ic:round-code"
                                class="w-6 h-6 text-white" />
                        </div>
                        <span class="text-xl font-bold text-gray-900">TheComplexAgency</span>
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center space-x-8">
                    <NuxtLink
                        v-for="item in navigation"
                        :key="item.name"
                        :to="$localePath(item.href)"
                        class="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                        {{ item.name }}
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </NuxtLink>
                </nav>

                <!-- Desktop CTA -->
                <div class="hidden lg:flex items-center space-x-4">
                <PrimaryButton
                            size="sm"
                            icon="ic:round-rocket-launch">
                            Розпочати проект
                        </PrimaryButton>
                    <div class="relative" ref="languageSwitcher">
                        <button
                            @click="toggleLanguageMenu"
                            class="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                            :class="{ 'text-gray-900 bg-gray-100': isLanguageMenuOpen }">
                            <Icon :name="currentLanguage?.flag || 'emojione:flag-for-ukraine'" class="w-5 h-5" />
                            <span class="text-sm font-medium">{{ currentLanguage?.code.toUpperCase() || 'UA' }}</span>
                            <Icon 
                                name="ic:round-keyboard-arrow-down" 
                                class="w-4 h-4 transition-transform duration-200"
                                :class="{ 'rotate-180': isLanguageMenuOpen }" />
                        </button>
                        
                        <!-- Language Dropdown -->
                        <Transition
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="transform opacity-0 scale-95 translate-y-1"
                            enter-to-class="transform opacity-100 scale-100 translate-y-0"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="transform opacity-100 scale-100 translate-y-0"
                            leave-to-class="transform opacity-0 scale-95 translate-y-1">
                            <div
                                v-if="isLanguageMenuOpen"
                                class="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                                <button
                                    v-for="lang in availableLanguages"
                                    :key="lang.code"
                                    @click="switchLanguage(lang.code)"
                                    class="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    :class="{ 'bg-blue-50 text-blue-700': currentLanguage?.code === lang.code }">
                                    <Icon :name="lang.flag" class="w-5 h-5" />
                                    <span class="font-medium">{{ lang.name }}</span>
                                    <Icon 
                                        v-if="currentLanguage?.code === lang.code"
                                        name="ic:round-check" 
                                        class="w-4 h-4 ml-auto text-blue-600" />
                                </button>
                            </div>
                        </Transition>
                    </div>

                </div>

                <!-- Mobile menu button -->
                <div class="lg:hidden">
                    <button
                        @click="toggleMobileMenu"
                        class="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                        :class="{ 'text-gray-900': isMobileMenuOpen }">
                        <Icon
                            :name="isMobileMenuOpen ? 'ic:round-close' : 'ic:round-menu'"
                            class="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <div
                v-if="isMobileMenuOpen"
                class="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
                <div class="container mx-auto px-4 py-6">
                    <nav class="space-y-4">
                        <NuxtLink
                            v-for="item in navigation"
                            :key="item.name"
                            :to="item.href"
                            @click="closeMobileMenu"
                            class="block text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2">
                            {{ item.name }}
                        </NuxtLink>
                    </nav>

                    <!-- Mobile CTA -->
                    <div class="mt-6 space-y-3">
                        <!-- Mobile Language Switcher -->
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span class="text-sm font-medium text-gray-700">Мова</span>
                            <div class="flex items-center space-x-2">
                                <button
                                    v-for="lang in availableLanguages"
                                    :key="lang.code"
                                    @click="switchLanguage(lang.code)"
                                    class="flex items-center space-x-1 px-2 py-1 rounded-md transition-colors duration-200"
                                    :class="currentLanguage?.code === lang.code 
                                        ? 'bg-blue-100 text-blue-700' 
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'">
                                    <Icon :name="lang.flag" class="w-4 h-4" />
                                    <span class="text-xs font-medium">{{ lang.code.toUpperCase() }}</span>
                                </button>
                            </div>
                        </div>
                        
                        <SecondaryButton
                            variant="ghost"
                            class="w-full justify-center"
                            @click="closeMobileMenu">
                            Зв'язатись
                        </SecondaryButton>
                        <PrimaryButton
                            class="w-full justify-center"
                            @click="closeMobileMenu">
                            Розпочати проект
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import PrimaryButton from "../UI/PrimaryButton.vue";
import SecondaryButton from "../UI/SecondaryButton.vue";

const { locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const isMobileMenuOpen = ref(false);
const isLanguageMenuOpen = ref(false);
const languageSwitcher = ref(null);

interface Language {
    code: string;
    name: string;
    flag: string;
}

const availableLanguages: Language[] = [
    { code: 'ua', name: 'Українська', flag: 'emojione:flag-for-ukraine' },
    { code: 'ru', name: 'Русский', flag: 'emojione:flag-for-russia' },
    { code: 'en', name: 'English', flag: 'emojione:flag-for-united-states' }
];

const currentLanguage = computed(() => {
    return availableLanguages.find(lang => lang.code === locale.value) || availableLanguages[0];
});

const navigation = [
    { name: "Послуги", href: "/services" },
    { name: "Портфоліо", href: "/portfolio" },
    { name: "Відгуки", href: "/reviews" },
    { name: "Блог", href: "/blog" },
    { name: "Етапи", href: "/process" }
];

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    // Close language menu when opening mobile menu
    if (isMobileMenuOpen.value) {
        isLanguageMenuOpen.value = false;
    }
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};

const toggleLanguageMenu = () => {
    isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
};

const closeLanguageMenu = () => {
    isLanguageMenuOpen.value = false;
};

const switchLanguage = async (langCode: string) => {
    try {
        // Validate the language code
        const validLanguage = availableLanguages.find(lang => lang.code === langCode);
        if (!validLanguage) {
            console.error('Invalid language code:', langCode);
            return;
        }
        
        // Get the localized path for the current route
        const route = useRoute();
        const localizedPath = switchLocalePath(langCode as any);
        
        // Set the locale
        await setLocale(langCode as any);
        
        // Navigate to the localized version of the current page
        await navigateTo(localizedPath);
        
        // Close menus
        closeLanguageMenu();
        closeMobileMenu();
    } catch (error) {
        console.error('Error switching language:', error);
    }
};

// Close language menu on outside click
const handleClickOutside = (event: Event) => {
    const target = event.target as Element;
    const header = document.querySelector("header");
    const languageMenu = languageSwitcher.value as HTMLElement | null;
    
    // Close mobile menu if clicked outside header
    if (header && !header.contains(target)) {
        closeMobileMenu();
    }
    
    // Close language menu if clicked outside language switcher
    if (languageMenu && !languageMenu.contains(target)) {
        closeLanguageMenu();
    }
};

// Close menus on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
        closeMobileMenu();
        closeLanguageMenu();
    }
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleEscapeKey);
});
</script>
