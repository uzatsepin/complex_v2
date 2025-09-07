<template>
    <div
        class="portfolio-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
        @click="$emit('click', project)">
        <!-- Main Image -->
        <div class="relative h-64 overflow-hidden">
            <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

            <!-- Subtle gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

            <!-- Category badge -->
            <div
                class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-110"
                :class="categoryStyles">
                {{ project.category }}
            </div>

            <!-- Status badge -->
            <div
                v-if="project.isLive"
                class="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600">
                <Icon
                    name="ic:round-visibility"
                    class="w-3 h-3 inline mr-1" />
                Live
            </div>

            <!-- Action buttons - always visible but small -->
            <div class="absolute bottom-4 right-4 flex gap-2">
                <button
                    v-if="project.liveUrl"
                    @click.stop="openLink(project.liveUrl)"
                    class="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:w-10 hover:h-10 hover:bg-white shadow-lg">
                    <Icon
                        name="ic:round-launch"
                        class="w-4 h-4 text-gray-700" />
                </button>
                <button
                    @click.stop="$emit('view-details', project)"
                    class="w-8 h-8 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:w-10 hover:h-10 hover:bg-blue-600 shadow-lg">
                    <Icon
                        name="ic:round-info"
                        class="w-4 h-4 text-white" />
                </button>
            </div>

            <!-- Results indicator - positioned outside main content -->
            <div
                v-if="project.results"
                class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                <div class="text-xs text-gray-600">Результат</div>
                <div class="text-sm font-bold text-green-600">{{ project.results.split(",")[0] }}</div>
            </div>
        </div>

        <!-- Content -->
        <div class="p-6">
            <!-- Title and Description -->
            <h3
                class="text-xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:text-blue-600 group-hover:transform group-hover:scale-105 group-hover:translate-x-1">
                {{ project.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-1 mb-4">
                <span
                    v-for="(tech, index) in project.technologies.slice(0, 4)"
                    :key="tech"
                    class="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-700 group-hover:transform group-hover:scale-105"
                    :style="{ transitionDelay: `${index * 50}ms` }">
                    {{ tech }}
                </span>
                <span
                    v-if="project.technologies.length > 4"
                    class="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs transition-all duration-300 group-hover:bg-orange-100 group-hover:text-orange-600">
                    +{{ project.technologies.length - 4 }}
                </span>
            </div>

            <!-- Project Info -->
            <div class="flex items-center justify-between text-xs text-gray-500 mb-4 transition-all duration-300 group-hover:text-gray-700">
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-1 transition-transform duration-300 group-hover:scale-105">
                        <Icon
                            name="ic:round-schedule"
                            class="w-3 h-3 transition-transform duration-300 group-hover:rotate-12" />
                        {{ project.duration }}
                    </div>
                    <div class="flex items-center gap-1 transition-transform duration-300 group-hover:scale-105">
                        <Icon
                            name="ic:round-people"
                            class="w-3 h-3 transition-transform duration-300 group-hover:rotate-12" />
                        {{ project.teamSize }} розробників
                    </div>
                </div>
                <div class="flex items-center gap-1 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-600">
                    <Icon
                        name="ic:round-star"
                        class="w-3 h-3 text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />
                    <span class="font-medium text-gray-700 group-hover:text-yellow-700">{{ project.rating }}/5</span>
                </div>
            </div>

            <!-- Client info -->
            <div class="flex items-center justify-between border-t border-gray-100 pt-4 group-hover:border-gray-200 transition-all duration-300">
                <div class="flex items-center gap-3">
                    <div
                        class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                        <span class="text-white text-xs font-bold">{{ project.client.charAt(0) }}</span>
                    </div>
                    <div class="transition-transform duration-300 group-hover:translate-x-1">
                        <div class="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-900">{{ project.client }}</div>
                        <div class="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{{ project.year }}</div>
                    </div>
                </div>

                <!-- Arrow indicator -->
                <div
                    class="w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
                    <Icon
                        name="ic:round-arrow-forward"
                        class="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-all duration-300 group-hover:-rotate-45" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    client: string;
    year: string;
    duration: string;
    teamSize: number;
    rating: number;
    results?: string;
    liveUrl?: string;
    isLive: boolean;
}

interface Props {
    project: PortfolioProject;
}

defineEmits<{
    click: [project: PortfolioProject];
    "view-details": [project: PortfolioProject];
}>();

const props = defineProps<Props>();

const categoryStyles = computed(() => {
    const styles = {
        "E-commerce": "bg-green-100 text-green-700",
        "Web App": "bg-blue-100 text-blue-700",
        "Mobile App": "bg-purple-100 text-purple-700",
        Corporate: "bg-orange-100 text-orange-700",
        Startup: "bg-pink-100 text-pink-700",
        Healthcare: "bg-red-100 text-red-700",
        Education: "bg-indigo-100 text-indigo-700",
        Fintech: "bg-yellow-100 text-yellow-700"
    };
    return styles[props.project.category as keyof typeof styles] || "bg-gray-100 text-gray-700";
});

const openLink = (url: string) => {
    window.open(url, "_blank");
};
</script>

<style scoped>
.portfolio-card {
    animation: fade-in 0.6s ease-out forwards;
    opacity: 0;
}

.portfolio-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>
