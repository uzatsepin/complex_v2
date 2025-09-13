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
                v-model="phoneValue"
                v-maska="phoneMask"
                type="tel"
                :required="required"
                :disabled="disabled"
                :placeholder="placeholder"
                @blur="handleBlur"
                @focus="handleFocus"
                :class="[
                    'w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 outline-none',
                    phoneValue && !error
                        ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50/50'
                        : error
                        ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50/50'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                ]" />
            
            <!-- Left Icon -->
            <Icon
                name="ic:round-phone"
                size="20"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            
            <!-- Success Check Icon -->
            <Icon
                v-if="phoneValue && !error"
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
import { computed, ref, watch } from 'vue'
import { vMaska } from 'maska/vue'

interface Props {
    modelValue: string
    label?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    error?: string
    helperText?: string
}

interface Emits {
    (e: 'update:modelValue', value: string): void
    (e: 'blur', event: FocusEvent): void
    (e: 'focus', event: FocusEvent): void
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: '+38 (###) ###-##-##',
    required: false,
    disabled: false,
    error: '',
    helperText: 'Формат: +38 (XXX) XXX-XX-XX'
})

const emit = defineEmits<Emits>()

// Generate unique ID for accessibility
const id = computed(() => {
    return `phone-${Math.random().toString(36).substr(2, 9)}`
})

// Phone mask configuration
const phoneMask = {
    mask: '+38 (###) ###-##-##',
    tokens: {
        '#': { pattern: /[0-9]/, multiple: false }
    },
    eager: true
}

const phoneValue = ref('')

// Watch for changes in modelValue from parent
watch(() => props.modelValue, (newValue) => {
    phoneValue.value = newValue || ''
}, { immediate: true })

// Watch for changes in phoneValue and emit to parent
watch(phoneValue, (newValue) => {
    emit('update:modelValue', newValue)
})

// Event handlers
const handleBlur = (event: FocusEvent) => {
    emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
    emit('focus', event)
}
</script>