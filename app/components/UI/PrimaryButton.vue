<template>
    <button
        :class="[
            'rounded-xl font-semibold transition-all duration-300 transform',
            'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
            'hover:from-blue-700 hover:to-purple-700 hover:scale-105',
            'focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50',
            'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
            'shadow-lg hover:shadow-xl',
            size === 'sm' && 'px-6 py-3 text-sm',
            size === 'lg' && 'px-10 py-5 text-lg',
            variant === 'outline' && 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        ]"
        :disabled="disabled"
        @click="$emit('click')">
        <Icon
            v-if="icon"
            :name="icon"
            class="mr-2" />
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    size?: "sm" | "md" | "lg";
    variant?: "filled" | "outline";
    icon?: string;
    disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
    size: "md",
    variant: "filled",
    disabled: false
});

defineEmits<{
    click: [];
}>();
</script>
