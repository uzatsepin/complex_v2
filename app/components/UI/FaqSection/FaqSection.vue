<template>
    <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Section Header -->
            <div class="text-center mb-16 animate-fade-in">
                <div
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                    <Icon
                        name="ic:round-help"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    {{ $t("faqSection.badgeTitle") }}
                </div>

                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    {{ $t("faqSection.title") }}
                    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                        {{ $t("faqSection.titleHighlight") }}
                    </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {{ $t("faqSection.descr") }}
                </p>
            </div>

            <!-- FAQ Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div
                    v-for="faq in faqs"
                    :key="faq.id"
                    class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                    <div class="flex items-start space-x-4">
                        <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Icon
                                name="ic:round-help"
                                class="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 mb-3">{{ faq.question }}</h3>
                            <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    faqs: {
        id: number | string;
        question: string;
        answer: string;
    }[];
}>();
</script>

<style scoped></style>
