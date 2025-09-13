<template>
    <div
        
        class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50 animate-fade-in-up"
        :style="{ animationDelay: `${review.id * 0.1}s` }">
        <!-- Review Header -->
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {{ review.author.charAt(0) }}
                </div>
                <div>
                    <h3 class="font-bold text-gray-900">{{ review.author }}</h3>
                    <p class="text-sm text-gray-600">{{ review.position }}, {{ review.company }}</p>
                </div>
            </div>
            <Icon
                name="ic:round-format-quote"
                class="w-8 h-8 text-gray-300 group-hover:text-blue-500 transition-colors" />
        </div>

        <!-- Stars Rating -->
        <div class="flex items-center mb-4">
            <div class="flex text-yellow-500 mr-3">
                <Icon
                    v-for="star in 5"
                    :key="star"
                    name="ic:round-star"
                    class="w-5 h-5" />
            </div>
            <span class="text-sm text-gray-600">{{ review.rating }}/5</span>
        </div>

        <!-- Review Content -->
        <blockquote class="text-gray-700 leading-relaxed mb-6 italic line-clamp-4 min-h-[104px]">"{{ review.content }}"</blockquote>

        <!-- Project Info -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <div class="flex items-center space-x-2">
                <Icon
                    :name="review.projectIcon"
                    class="w-4 h-4 text-blue-600" />
                <span class="text-sm text-gray-600">{{ review.projectType }}</span>
            </div>
            <span class="text-xs text-gray-500">{{ review.date }}</span>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { IReview } from '~/interface';

defineProps<{
    review: IReview
}>();

</script>

<style scoped></style>
