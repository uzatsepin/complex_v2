<template>
    <div
        class="industry-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 border border-white/50"
        :class="`animation-delay-${(index + 1) * 100}`">
        <!-- Card background pattern -->
        <div
            class="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
            :style="`background: ${industry.pattern}`"></div>

        <!-- Hover glow effect -->
        <div
            class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
            :class="industry.glowColor"></div>

        <!-- Icon -->
        <div class="relative mb-4">
            <div
                class="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                :class="industry.iconBg">
                <Icon
                    :name="industry.icon"
                    class="w-7 h-7 transition-transform duration-500"
                    size="28"
                    :class="industry.iconColor" />
            </div>

            <!-- Success indicator -->
            <div
                v-if="industry.isTop"
                class="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Icon
                    name="ic:round-star"
                    class="w-3 h-3 text-white" />
            </div>
        </div>

        <!-- Content -->
        <h3
            class="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
            :class="industry.titleGradient">
            {{ industry.title }}
        </h3>

        <p class="text-sm text-gray-600 mb-4 leading-relaxed">
            {{ industry.description }}
        </p>

        <!-- Stats -->
        <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div class="flex items-center gap-1">
                <Icon
                    name="ic:round-work"
                    class="w-3 h-3" />
                {{ industry.projectsCount }} проектів
            </div>
            <div class="flex items-center gap-1">
                <Icon
                    name="ic:round-trending-up"
                    class="w-3 h-3" />
                {{ industry.growthRate }}
            </div>
        </div>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-1 mb-4">
            <span
                v-for="tech in industry.technologies.slice(0, 3)"
                :key="tech"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
                {{ tech }}
            </span>
            <span
                v-if="industry.technologies.length > 3"
                class="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                +{{ industry.technologies.length - 3 }}
            </span>
        </div>

        <!-- Case study preview -->
        <div
            v-if="industry.caseStudy"
            class="text-xs text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-1">
            <Icon
                name="ic:round-visibility"
                class="w-3 h-3" />
            {{ industry.caseStudy }}
        </div>

        <!-- Hover indicator -->
        <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Icon
                    name="ic:round-arrow-forward"
                    class="w-4 h-4 text-white" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Iindustry } from "~/interface";

defineProps<{
    industry: Iindustry;
    index: number;
}>();
</script>

<style scoped></style>
