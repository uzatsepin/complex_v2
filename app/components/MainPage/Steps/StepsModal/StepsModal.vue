<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div
                v-if="isVisible"
                class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                @click="$emit('close')">
                <Transition
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 scale-95 translate-y-4"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="opacity-100 scale-100 translate-y-0"
                    leave-to-class="opacity-0 scale-95 translate-y-4">
                    <div
                        v-if="isVisible"
                        class="bg-white border border-gray-200 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        @click.stop>
                        <!-- Modal content -->
                        <div class="p-8">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-2xl font-bold text-gray-900">{{ stepData?.title }}</h3>
                                <button
                                    @click="$emit('close')"
                                    class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                                    <Icon
                                        name="ic:round-close"
                                        class="w-5 h-5 text-gray-600" />
                                </button>
                            </div>

                            <div class="space-y-6">
                                <div>
                                    <h4 class="font-semibold text-gray-900 mb-3">{{ $t('mainPage.steps.detailedDescription') }}</h4>
                                    <p class="text-gray-600 leading-relaxed">{{ stepData?.detailedDescription }}</p>
                                </div>

                                <div>
                                    <h4 class="font-semibold text-gray-900 mb-3">{{ $t('mainPage.steps.tasks') }}</h4>
                                    <ul class="space-y-2">
                                        <li
                                            v-for="task in stepData?.tasks"
                                            :key="task"
                                            class="flex items-start gap-3">
                                            <Icon
                                                name="ic:round-check-circle"
                                                class="w-5 h-5 text-green-500 mt-0.5" />
                                            <span class="text-gray-600">{{ task }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 class="font-semibold text-gray-900 mb-3">{{ $t('mainPage.steps.results') }}</h4>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div
                                            v-for="result in stepData?.results"
                                            :key="result"
                                            class="flex items-center gap-2 text-sm text-gray-700">
                                            <Icon
                                                name="ic:round-done"
                                                class="w-4 h-4 text-blue-500" />
                                            {{ result }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
interface WorkStep {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    duration: string;
    team: string;
    deliverables: string[];
    tools: string[];
    tasks: string[];
    results: string[];
    progress: number;
    icon: string;
    iconBg: string;
    iconColor: string;
    nodeBg: string;
    nodeInner: string;
    glowColor: string;
    isPopular: boolean;
}

defineProps<{
    isVisible: boolean;
    stepData?: WorkStep | null;
}>();

defineEmits<{
    close: [];
}>();
</script>

<style scoped>
</style>