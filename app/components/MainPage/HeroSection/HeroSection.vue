<template>
    <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden pt-20">
        <!-- Background Elements -->
        <div class="absolute inset-0">
            <!-- Animated gradient orbs -->
            <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div
                class="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div
                class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
                <!-- Left Content -->
                <div class="lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in">
                    <!-- Badge -->
                    <div
                        class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300 animate-bounce-subtle">
                        <ClientOnly>
                            <Icon
                            name="ic:round-star"
                            class="w-4 h-4 mr-2 text-blue-600" />
                        </ClientOnly>
                        {{$t("mainPage.hero.badgeTitle") }}
                    </div>

                    <!-- Main Headline -->
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        {{$t('mainPage.hero.title') }}
                        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> {{$t('mainPage.hero.titleHighlight') }} </span>
                        {{$t('mainPage.hero.titleHighlightPart') }}
                    </h1>

                    <!-- Subtitle -->
                    <p class="text-xl text-gray-600 max-w-2xl leading-relaxed">
                        {{ $t("mainPage.hero.subtitle") }}
                    </p>

                    <!-- Stats -->
                    <div class="flex flex-wrap justify-center lg:justify-start gap-8 py-4">
                        <div
                            v-for="stat in stats"
                            :key="stat.label"
                            class="text-center p-4 rounded-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                            <div class="text-2xl font-bold text-gray-900">{{ stat.value }}</div>
                            <div class="text-sm text-gray-600">{{ stat.label }}</div>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <PrimaryButton
                            size="lg"
                            icon="ic:round-rocket-launch">
                            {{ $t("startProject") }}
                        </PrimaryButton>
                        <SecondaryButton
                            size="lg"
                            icon="ic:round-play-arrow"
                            variant="ghost"
                            class="cta-secondary">
                            {{ $t("sawCases") }}
                        </SecondaryButton>
                    </div>

                    <!-- Trust Indicators -->
                    <div class="pt-8">
                        <p class="text-sm text-gray-500 mb-4">{{ $t("mainPage.hero.trusted") }}</p>
                        <div class="flex items-center justify-center lg:justify-start gap-6 opacity-60">
                            <div
                                v-for="company in trustedCompanies"
                                :key="company"
                                class="flex items-center gap-2 company-item cursor-pointer transform hover:opacity-100 hover:scale-105 transition-all duration-300">
                                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                                    <Icon
                                        name="ic:round-business"
                                        class="w-4 h-4 text-gray-600" />
                                </div>
                                <span class="text-sm font-medium text-gray-600">{{ company }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Content - Mockup/Visual -->
                <div class="lg:w-1/2 mt-12 lg:mt-0 relative animate-float">
                    <div class="relative">
                        <!-- Main device mockup -->
                        <div
                            class="bg-gray-900 rounded-2xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer">
                            <div class="bg-white rounded-xl p-6 h-96 relative overflow-hidden">
                                <!-- Browser chrome -->
                                <div class="flex items-center space-x-2 mb-4">
                                    <div class="w-3 h-3 bg-red-500 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
                                    <div class="ml-4 bg-gray-100 rounded px-3 py-1 text-xs text-gray-600 flex-1">https://the-complex.agency</div>
                                </div>

                                <!-- Website preview -->
                                <div class="space-y-4">
                                    <div class="h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                                        <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4 pt-4">
                                        <div class="h-20 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer"></div>
                                        <div class="h-20 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer"></div>
                                    </div>
                                </div>
                                <div
                                    class="absolute bottom-4 z-20 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full cursor-pointer transform hover:scale-110 transition-all animate-pulse">
                                    {{ $t('mainPage.hero.speed') }} 90+
                                </div>
                            </div>
                        </div>

                        <!-- Floating icons -->
                        <div
                            class="absolute -top-8 left-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 hover:shadow-xl transition-all animate-bounce animation-delay-1000">
                            <Icon
                                name="ic:round-trending-up"
                                class="w-6 h-6 text-green-600" />
                        </div>
                        <div
                            class="absolute -bottom-4 right-12 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 hover:shadow-xl transition-all animate-bounce animation-delay-3000">
                            <Icon
                                name="ic:round-speed"
                                class="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import PrimaryButton from "~/components/UI/PrimaryButton.vue";
import SecondaryButton from "~/components/UI/SecondaryButton.vue";

const stats = [
    { value: "200+", label: "Проектів" },
    { value: "98%", label: "Задоволених клієнтів" },
    { value: "14", label: "Днів до запуску" },
    { value: "5★", label: "Рейтинг" }
];

const trustedCompanies = ["TechCorp", "StartupHub", "BusinessPro"];

</script>

<style scoped>

@keyframes bounce-subtle {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

@keyframes pulse-subtle {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.02);
    }
}
</style>
