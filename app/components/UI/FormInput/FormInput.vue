<template>
    <div>
        <label
            v-if="label"
            :for="id"
            class="block text-sm font-medium text-gray-700 mb-2">
            {{ label }}
            <span v-if="required" class="text-red-500 ml-1">*</span>
        </label>
        
        <div class="relative">
            <input
                :id="id"
                :value="modelValue"
                @input="handleInput"
                @blur="handleBlur"
                @focus="handleFocus"
                :type="type"
                :required="required"
                :disabled="disabled"
                :placeholder="placeholder"
                :maxlength="maxLength"
                :class="[
                    'w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 outline-none',
                    modelValue && !error
                        ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50/50'
                        : error
                        ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50/50'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                ]" />
            
            <!-- Left Icon -->
            <Icon
                :name="leftIcon"
                size="20"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            
            <!-- Success Check Icon -->
            <Icon
                v-if="modelValue && !error"
                name="ic:round-check"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
        </div>
        
        <!-- Error Message -->
        <p
            v-if="error"
            class="mt-1 text-sm text-red-600">
            {{ error }}
        </p>
        
        <!-- Helper Text -->
        <p
            v-else-if="helperText"
            class="mt-1 text-xs text-gray-500">
            {{ helperText }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    modelValue: string
    label?: string
    type?: 'text' | 'email'
    placeholder?: string
    required?: boolean
    disabled?: boolean
    error?: string
    helperText?: string
    leftIcon: string
    maxLength?: number
}

interface Emits {
    (e: 'update:modelValue', value: string): void
    (e: 'blur', event: FocusEvent): void
    (e: 'focus', event: FocusEvent): void
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: '',
    required: false,
    disabled: false,
    error: '',
    helperText: '',
    maxLength: undefined
})

const emit = defineEmits<Emits>()

// Generate unique ID for accessibility
const id = computed(() => {
    return `input-${Math.random().toString(36).substr(2, 9)}`
})

// Event handlers
const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    let value = target.value
    
    // Apply maxLength if specified
    if (props.maxLength && value.length > props.maxLength) {
        value = value.slice(0, props.maxLength)
        target.value = value
    }
    
    emit('update:modelValue', value)
}

const handleBlur = (event: FocusEvent) => {
    emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
    emit('focus', event)
}
</script>