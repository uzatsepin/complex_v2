<template>
    <!-- CTA Section -->
    <div class="text-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0">
            <div class="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-blob"></div>
            <div
                class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full animate-blob animation-delay-2000"></div>
        </div>

        <div class="relative">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ title || $t("ctaSection.title") }}</h3>
            <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
                {{ descr || $t("ctaSection.descr") }}
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                    class="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                    <Icon
                        name="ic:round-rocket-launch"
                        class="w-5 h-5" />
                    {{ button1 || $t("ctaSection.buttonStart") }}
                </button>
                <button
                    class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                    <Icon
                        name="ic:round-visibility"
                        class="w-5 h-5" />
                    {{ button2 || $t("ctaSection.buttonWatch") }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: "",
    },
    descr: {
        type: String,
        default: "",
    },
    button1: {
        type: String,
        default: "",
    },
    button2: {
        type: String,
        default: "",
    },
});
</script>

<style scoped></style>
