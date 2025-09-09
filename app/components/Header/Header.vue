<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <NuxtLink
                        to="/"
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
                        :to="item.href"
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

const isMobileMenuOpen = ref(false);

const navigation = [
    { name: "Послуги", href: "/services" },
    { name: "Портфоліо", href: "/portfolio" },
    { name: "Відгуки", href: "/reviews" },
    { name: "Блог", href: "/blog" },
    { name: "Етапи", href: "/process" }
];

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};

// Close mobile menu on outside click
const handleClickOutside = (event: Event) => {
    const target = event.target as Element;
    const header = document.querySelector("header");
    if (header && !header.contains(target)) {
        closeMobileMenu();
    }
};

// Close mobile menu on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
        closeMobileMenu();
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
