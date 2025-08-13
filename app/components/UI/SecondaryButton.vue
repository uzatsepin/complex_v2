<template>
  <button
    :class="[
      'px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform',
      'border-2 border-gray-300 text-gray-700 bg-white',
      'hover:border-gray-400 hover:bg-gray-50 hover:scale-105',
      'focus:outline-none focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50',
      'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
      'shadow-md hover:shadow-lg',
      size === 'sm' && 'px-6 py-3 text-sm',
      size === 'lg' && 'px-10 py-5 text-lg',
      variant === 'filled' && 'bg-gray-100 border-gray-100 hover:bg-gray-200 hover:border-gray-200',
      variant === 'ghost' && 'border-transparent hover:border-gray-300 shadow-none hover:shadow-md'
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <Icon v-if="icon" :name="icon" class="mr-2" />
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'filled' | 'ghost'
  icon?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'outline',
  disabled: false
})

defineEmits<{
  click: []
}>()
</script>