<template>
    <NuxtLink :to="`/blog/${post.slug || post.id}`">
        <article
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.15}s` }">
        <!-- Article Image -->
        <div class="relative h-48 overflow-hidden">
            <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

            <!-- Overlay gradient -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- Reading time -->
            <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Icon
                    name="ic:round-access-time"
                    size="12"
                    class="w-3 h-3 inline mr-1" />
                {{ post.readTime }} {{ $t('blog.article.time') }}
            </div>

            <!-- Popular badge -->
            <div
                v-if="post.isPopular"
                class="absolute bottom-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 animate-pulse">
                <Icon
                    name="ic:round-local-fire-department"
                    class="w-3 h-3" />
                {{ $t('blog.article.popular') }}
            </div>
        </div>

        <!-- Article Content -->
        <div class="p-6">
            <!-- Meta info -->
            <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div class="flex items-center gap-2">
                    <Icon
                        name="ic:round-person"
                        class="w-4 h-4"
                        size="16" />
                    {{ post.author }}
                </div>
                <div class="flex items-center gap-2">
                    <Icon
                        name="ic:round-calendar-today"
                        class="w-4 h-4" 
                        size="16"/>
                    {{ post.date }}
                </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2 min-h-[50px]">
                {{ post.title }}
            </h3>

            <!-- Excerpt -->
            <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3 min-h-[78px]">
                {{ post.excerpt }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                <span
                    v-for="tag in post.tags.slice(0, 3)"
                    :key="tag"
                    class="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
                    #{{ tag }}
                </span>
                <span
                    v-if="post.tags.length > 3"
                    class="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                    +{{ post.tags.length - 3 }}
                </span>
            </div>

            <!-- Article footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center gap-4 text-sm text-gray-500">
                    <div class="flex items-center gap-1">
                        <Icon
                            name="ic:round-visibility"
                            class="w-4 h-4" />
                        {{ post.views }}
                    </div>
                    <div class="flex items-center gap-1">
                        <Icon
                            name="ic:round-thumb-up"
                            class="w-4 h-4" />
                        {{ post.likes }}
                    </div>
                </div>

                <!-- Read more button -->
                <button class="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300 group-hover:gap-3">
                    {{ $t('blog.article.read') }}
                    <Icon
                        name="ic:round-arrow-forward"
                        class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    </article>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { IBlogPost } from '~/interface';

defineProps<{
    post: IBlogPost;
    index: number;
}>();
</script>

<style scoped></style>
