<template>
    <NuxtLink :to="`/services/${service.slug}`">
        <div
            class="service-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
            :class="`animation-delay-${(index + 1) * 200}`">
            <!-- Card background gradient -->
            <div
                class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                :class="service.gradient"></div>

            <!-- Icon -->
            <div class="relative mb-6">
                <div
                    class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    :class="service.iconBg">
                    <Icon
                        :name="service.icon"
                        class="w-8 h-8 transition-transform duration-500 group-hover:scale-110"
                        :class="service.iconColor" 
                        size="32"
                        />
                </div>

                <!-- Floating badge -->
                <div
                    v-if="service.badge"
                    class="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full animate-pulse-subtle">
                    {{ service.badge }}
                </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {{ service.title }}
            </h3>

            <p class="text-gray-600 mb-6 leading-relaxed line-clamp-3 min-h-[78px]">
                {{ service.description }}
            </p>

            <!-- Features -->
            <div class="space-y-2 mb-6">
                <div
                    v-for="feature in service.features.slice(0, 4)"
                    :key="feature"
                    class="flex items-center text-sm text-gray-700">
                    <Icon
                        name="ic:round-check-circle"
                        class="w-4 h-4 mr-2 text-green-500" />
                    {{ feature }}
                </div>
            </div>

            <!-- Price/Timeline -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="text-sm text-gray-500">
                    {{ service.timeline }}
                </div>
                <div class="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {{ service.price }}
                </div>
            </div>

            <!-- Hover arrow -->
            <div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <Icon
                    name="ic:round-arrow-forward"
                    class="w-5 h-5 text-blue-600" />
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { IService } from '~/interface';

    defineProps<{
        service: IService;
        index: number;
    }>()
</script>

<style scoped></style>
