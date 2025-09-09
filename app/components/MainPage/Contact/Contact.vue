<template>
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0">
            <!-- Floating particles -->
            <div class="absolute inset-0">
                <div
                    v-for="particle in backgroundParticles"
                    :key="particle.id"
                    :class="particle.class"
                    :style="particle.style"
                    class="absolute pointer-events-none animate-float opacity-30">
                    <Icon
                        :name="particle.icon"
                        class="w-5 h-5" />
                </div>
            </div>

            <!-- Decorative orbs -->
            <div
                class="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div
                class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

            <!-- Grid pattern -->
            <div class="absolute inset-0 opacity-20">
                <div
                    class="absolute inset-0"
                    style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 40px 40px"></div>
            </div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Section Header -->
            <div class="text-center mb-16 animate-fade-in">
                <div
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                    <Icon
                        name="ic:round-mail"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    Залишити заявку
                </div>

                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Готові почати
                    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"> ваш проект? </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Розкажіть про свою ідею, і ми створимо для вас ідеальне цифрове рішення. Отримайте безкоштовну консультацію вже сьогодні
                </p>
            </div>

            <!-- Contact Form Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                <!-- Contact Form -->
                <div class="animate-slide-in-left">
                    <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
                        <!-- Form decoration -->
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>

                        <!-- Success Message -->
                        <div
                            v-if="showSuccessMessage"
                            class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <Icon
                                        name="ic:round-check"
                                        class="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-green-800">Заявку успішно відправлено!</h4>
                                    <p class="text-sm text-green-600">Ми зв'яжемося з вами найближчим часом</p>
                                </div>
                            </div>
                        </div>

                        <div class="relative">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Розкажіть про свій проект</h3>

                            <form
                                @submit.prevent="submitForm"
                                class="space-y-6">
                                <!-- Name Field -->
                                <div>
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-gray-700 mb-2">
                                        Ім'я *
                                    </label>
                                    <div class="relative">
                                        <input
                                            id="name"
                                            v-model="form.name"
                                            type="text"
                                            required
                                            :class="[
                                                'w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 outline-none',
                                                form.name && !errors.name
                                                    ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50/50'
                                                    : errors.name
                                                    ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50/50'
                                                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                                            ]"
                                            placeholder="Введіть ваше ім'я" />
                                        <Icon
                                            name="ic:round-person"
											size="20"
                                            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Icon
                                            v-if="form.name && !errors.name"
                                            name="ic:round-check"
                                            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                                    </div>
                                    <p
                                        v-if="errors.name"
                                        class="mt-1 text-sm text-red-600">
                                        {{ errors.name }}
                                    </p>
                                </div>

                                <!-- Phone Field -->
                                <div>
                                    <label
                                        for="phone"
                                        class="block text-sm font-medium text-gray-700 mb-2">
                                        Телефон *
                                    </label>
                                    <div class="relative">
                                        <input
                                            id="phone"
                                            v-model="form.phone"
                                            @input="handlePhoneInput"
                                            @keydown="handlePhoneKeydown"
                                            type="tel"
                                            required
                                            :class="[
                                                'w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 outline-none',
                                                form.phone && !errors.phone
                                                    ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50/50'
                                                    : errors.phone
                                                    ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50/50'
                                                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                                            ]"
                                            placeholder="+38 (___) ___-__-__" />
                                        <Icon
                                            name="ic:round-phone"
											size="20"
                                            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Icon
                                            v-if="form.phone && !errors.phone"
                                            name="ic:round-check"
                                            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                                    </div>
                                    <p
                                        v-if="errors.phone"
                                        class="mt-1 text-sm text-red-600">
                                        {{ errors.phone }}
                                    </p>
                                    <p class="mt-1 text-xs text-gray-500">Формат: +38 (XXX) XXX-XX-XX</p>
                                </div>

                                <!-- Telegram Field -->
                                <div>
                                    <label
                                        for="telegram"
                                        class="block text-sm font-medium text-gray-700 mb-2">
                                        Telegram
                                    </label>
                                    <div class="relative">
                                        <input
                                            id="telegram"
                                            v-model="form.telegram"
                                            type="text"
                                            :class="[
                                                'w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 outline-none',
                                                form.telegram && !errors.telegram
                                                    ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50/50'
                                                    : errors.telegram
                                                    ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50/50'
                                                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                                            ]"
                                            placeholder="@username або t.me/username" />
                                        <Icon
                                            name="ic:round-telegram"
                                            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
											size="20"/>
                                        <Icon
                                            v-if="form.telegram && !errors.telegram"
                                            name="ic:round-check"
                                            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                                    </div>
                                    <p
                                        v-if="errors.telegram"
                                        class="mt-1 text-sm text-red-600">
                                        {{ errors.telegram }}
                                    </p>
                                </div>

                                <!-- Comment Field -->
                                <div>
                                    <label
                                        for="comment"
                                        class="block text-sm font-medium text-gray-700 mb-2">
                                        Коментар до проекту
                                    </label>
                                    <div class="relative">
                                        <textarea
                                            id="comment"
                                            v-model="form.comment"
                                            rows="4"
                                            class="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white resize-none"
                                            placeholder="Розкажіть детальніше про ваш проект, цілі та побажання..."></textarea>
                                        <Icon
                                            name="ic:round-comment"
											size="20"
                                            class="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                    </div>
                                    <div class="flex justify-between items-center mt-1">
                                        <p class="text-xs text-gray-500">Необов'язкове поле</p>
                                        <p class="text-xs text-gray-400">{{ form.comment.length }}/500</p>
                                    </div>
                                </div>

                                <!-- Submit Button -->
                                <button
                                    type="submit"
                                    :disabled="isSubmitting"
                                    :class="[
                                        'w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2',
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-105 hover:shadow-xl'
                                    ]"
                                    class="text-white">
                                    <Icon
                                        :name="isSubmitting ? 'ic:round-refresh' : 'ic:round-send'"
                                        :class="['w-5 h-5', isSubmitting ? 'animate-spin' : '']" />
                                    {{ isSubmitting ? "Відправляємо..." : "Відправити заявку" }}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="animate-slide-in-right space-y-8">
                    <!-- Contact Details -->
                    <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>

                        <div class="relative">
                            <h3 class="text-xl font-bold text-gray-900 mb-6">Як з нами зв'язатися</h3>

                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Icon
                                            name="ic:round-phone"
											size="24"
                                            class="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-900">Телефон</div>
                                        <div class="text-gray-600">+38 (067) 123-45-67</div>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                        <Icon
                                            name="ic:round-mail"
											size="24"
                                            class="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-900">Email</div>
                                        <div class="text-gray-600">hello@agency.ua</div>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <Icon
											size="24"
                                            name="ic:round-telegram"
                                            class="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-900">Telegram</div>
                                        <div class="text-gray-600">@agency_ukraine</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Working Hours -->
                    <div class="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>

                        <div class="relative">
                            <h3 class="text-xl font-bold text-gray-900 mb-6">Час роботи</h3>

                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-600">Понеділок - П'ятниця</span>
                                    <span class="font-medium text-gray-900">9:00 - 18:00</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-600">Субота</span>
                                    <span class="font-medium text-gray-900">10:00 - 16:00</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-600">Неділя</span>
                                    <span class="font-medium text-red-500">Вихідний</span>
                                </div>
                            </div>

                            <div class="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <div class="flex items-center gap-2 mb-2">
                                    <Icon
                                        name="ic:round-info"
                                        class="w-4 h-4 text-blue-600" />
                                    <span class="text-sm font-medium text-blue-800">Швидка відповідь</span>
                                </div>
                                <p class="text-sm text-blue-700">Відповідаємо на заявки протягом 30 хвилин у робочий час</p>
                            </div>
                        </div>
                    </div>

                    <!-- Benefits -->
                    <div class="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"></div>

                        <div class="relative">
                            <h3 class="text-xl font-bold text-gray-900 mb-6">Що ви отримуєте</h3>

                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <Icon
                                        name="ic:round-check-circle"
                                        class="w-5 h-5 text-green-500 mt-0.5" />
                                    <div>
                                        <div class="font-medium text-gray-900">Безкоштовна консультація</div>
                                        <div class="text-sm text-gray-600">Детальний аналіз вашого проекту</div>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <Icon
                                        name="ic:round-check-circle"
                                        class="w-5 h-5 text-green-500 mt-0.5" />
                                    <div>
                                        <div class="font-medium text-gray-900">Комерційну пропозицію</div>
                                        <div class="text-sm text-gray-600">Детальний план і вартість</div>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <Icon
                                        name="ic:round-check-circle"
                                        class="w-5 h-5 text-green-500 mt-0.5" />
                                    <div>
                                        <div class="font-medium text-gray-900">Індивідуальний підхід</div>
                                        <div class="text-sm text-gray-600">Рішення під ваші потреби</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="mb-16">
                <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Часті <span class="text-blue-600">питання</span></h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        v-for="(faq, index) in faqs"
                        :key="index"
                        class="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                        <h4 class="font-semibold text-gray-900 mb-3">{{ faq.question }}</h4>
                        <p class="text-gray-600 text-sm leading-relaxed">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from "vue";

interface ContactForm {
    name: string;
    phone: string;
    telegram: string;
    comment: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    telegram?: string;
}

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);

const form = reactive<ContactForm>({
    name: "",
    phone: "",
    telegram: "",
    comment: ""
});

const errors = reactive<FormErrors>({});

// Phone formatting function
const formatPhoneNumber = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // If no digits, return empty string
    if (digits.length === 0) {
        return "";
    }

    // Handle Ukrainian numbers
    let cleanDigits = digits;

    // If starts with 0, replace with 380
    if (digits.startsWith("0")) {
        cleanDigits = "38" + digits;
    }
    // If doesn't start with 38 and has digits, prepend 38
    else if (!digits.startsWith("38") && digits.length > 0) {
        cleanDigits = "38" + digits;
    }

    // Limit to maximum 12 digits (38 + 10 digits)
    cleanDigits = cleanDigits.substring(0, 12);

    // Don't format if we have less than 3 digits (just +38)
    if (cleanDigits.length <= 2) {
        return cleanDigits.length > 0 ? "+" + cleanDigits : "";
    }

    // Start building formatted number
    let formatted = "+38";

    // Add operator code (3 digits after 38)
    if (cleanDigits.length > 2) {
        const operatorPart = cleanDigits.substring(2, 5);
        if (operatorPart.length > 0) {
            formatted += ` (${operatorPart}`;
            if (operatorPart.length === 3) {
                formatted += ")";
            }
        }

        // Add first group (3 digits)
        if (cleanDigits.length > 5) {
            const firstPart = cleanDigits.substring(5, 8);
            formatted += ` ${firstPart}`;

            // Add second group (2 digits)
            if (cleanDigits.length > 8) {
                const secondPart = cleanDigits.substring(8, 10);
                formatted += `-${secondPart}`;

                // Add third group (2 digits)
                if (cleanDigits.length > 10) {
                    const thirdPart = cleanDigits.substring(10, 12);
                    formatted += `-${thirdPart}`;
                }
            }
        }
    }

    return formatted;
};

const handlePhoneKeydown = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    const cursorPosition = target.selectionStart || 0;
    const currentValue = target.value;

    // Handle backspace and delete keys
    if (event.key === "Backspace" || event.key === "Delete") {
        // If cursor is at the beginning or trying to delete +38, clear the field
        if (cursorPosition <= 3 || currentValue.length <= 3) {
            event.preventDefault();
            form.phone = "";
            return;
        }

        // If cursor is on a formatting character, move it to the previous digit
        const charAtCursor = currentValue[cursorPosition - 1];
        if (event.key === "Backspace" && (charAtCursor === " " || charAtCursor === "(" || charAtCursor === ")" || charAtCursor === "-")) {
            event.preventDefault();
            // Find the previous digit and remove it
            const digits = currentValue.replace(/\D/g, "");
            if (digits.length > 2) {
                const newDigits = digits.substring(0, digits.length - 1);
                form.phone = formatPhoneNumber(newDigits);

                nextTick(() => {
                    const newFormattedValue = form.phone;
                    let newPosition = newFormattedValue.length;

                    // Try to position cursor after the last digit
                    for (let i = newFormattedValue.length - 1; i >= 0; i--) {
                        const char = newFormattedValue[i];
                        if (char && /\d/.test(char)) {
                            newPosition = i + 1;
                            break;
                        }
                    }

                    target.setSelectionRange(newPosition, newPosition);
                });
            }
            return;
        }
    }
};

const handlePhoneInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const cursorPosition = target.selectionStart || 0;
    const inputValue = target.value;

    // Check if user is trying to delete from the beginning
    const isDeleting = inputValue.length < form.phone.length;

    // If user deletes everything or tries to delete +38, clear the field
    if (inputValue === "" || inputValue === "+" || inputValue === "+3" || inputValue === "+38") {
        form.phone = "";
        return;
    }

    // Format the phone number
    const formattedValue = formatPhoneNumber(inputValue);

    // Update form value
    form.phone = formattedValue;

    // Handle cursor position
    nextTick(() => {
        if (target) {
            let newPosition = cursorPosition;

            // If we're formatting and adding characters, adjust cursor
            if (!isDeleting && formattedValue.length > inputValue.length) {
                // Count how many formatting characters were added before cursor
                const beforeCursor = inputValue.substring(0, cursorPosition);
                const formattedBeforeCursor = formatPhoneNumber(beforeCursor);
                newPosition = formattedBeforeCursor.length;
            }
            // If deleting, try to maintain reasonable cursor position
            else if (isDeleting) {
                newPosition = Math.min(cursorPosition, formattedValue.length);
            }

            // Ensure cursor doesn't go beyond string length
            newPosition = Math.min(newPosition, formattedValue.length);

            target.setSelectionRange(newPosition, newPosition);
        }
    });
};

const faqs = [
    {
        question: "Скільки коштує розробка сайту?",
        answer: "Вартість залежить від складності проекту. Базові сайти від 15,000₴, складні веб-додатки від 50,000₴. Точну вартість розрахуємо після консультації."
    },
    {
        question: "Як довго триває розробка?",
        answer: "Термін залежить від типу проекту: лендінг — 1-2 тижні, корпоративний сайт — 3-4 тижні, інтернет-магазин — 4-6 тижнів, складний веб-додаток — від 8 тижнів."
    },
    {
        question: "Чи надаєте ви підтримку після запуску?",
        answer: "Так, надаємо гарантійну підтримку 3 місяці безкоштовно, далі пропонуємо пакети технічної підтримки від 2,000₴/місяць."
    },
    {
        question: "Чи можна внести зміни під час розробки?",
        answer: "Так, ми працюємо ітераційно. Незначні правки включені в вартість, суттєві зміни обговорюються окремо."
    }
];

const backgroundParticles = [
    {
        id: 1,
        icon: "ic:round-mail",
        class: "text-blue-400",
        style: { top: "15%", left: "8%" }
    },
    {
        id: 2,
        icon: "ic:round-phone",
        class: "text-green-400",
        style: { top: "25%", right: "12%" }
    },
    {
        id: 3,
        icon: "ic:round-telegram",
        class: "text-purple-400",
        style: { top: "45%", left: "5%" }
    },
    {
        id: 4,
        icon: "ic:round-chat",
        class: "text-orange-400",
        style: { top: "65%", right: "8%" }
    },
    {
        id: 5,
        icon: "ic:round-support",
        class: "text-pink-400",
        style: { top: "80%", left: "15%" }
    }
];

// Validation functions
const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Ім'я обов'язкове";
    if (name.length < 2) return "Ім'я має містити мінімум 2 символи";
    if (name.length > 50) return "Ім'я має містити максимум 50 символів";
    return undefined;
};

const validatePhone = (phone: string): string | undefined => {
    const phoneDigits = phone.replace(/\D/g, "");

    if (!phoneDigits) return "Номер телефону обов'язковий";

    // Check if it's a Ukrainian number (should start with 38)
    if (!phoneDigits.startsWith("38")) {
        return "Введіть український номер телефону";
    }

    // Check if it has the correct length (38 + 10 digits = 12 total)
    if (phoneDigits.length < 12) {
        return "Введіть повний номер телефону";
    }

    if (phoneDigits.length > 12) {
        return "Номер телефону занадто довгий";
    }

    // Ukrainian mobile operators validation (codes after 38)
    const operatorCode = phoneDigits.substring(2, 5);
    const validOperators = ["050", "066", "095", "099", "063", "073", "093", "067", "068", "096", "097", "098", "091", "092", "094"];

    if (!validOperators.includes(operatorCode)) {
        return "Введіть дійсний код українського оператора";
    }

    return undefined;
};

const validateTelegram = (telegram: string): string | undefined => {
    if (!telegram) return undefined; // Optional field

    // Remove spaces and convert to lowercase for validation
    const cleanTelegram = telegram.trim().toLowerCase();

    // Check if it starts with @ or contains t.me/
    if (!cleanTelegram.startsWith("@") && !cleanTelegram.includes("t.me/")) {
        return "Формат: @username або t.me/username";
    }

    // Extract username
    let username = "";
    if (cleanTelegram.startsWith("@")) {
        username = cleanTelegram.substring(1);
    } else if (cleanTelegram.includes("t.me/")) {
        const parts = cleanTelegram.split("t.me/");
        username = parts[1] || "";
    }

    // Validate username format
    if (username.length < 5) return "Username має містити мінімум 5 символів";
    if (username.length > 32) return "Username має містити максимум 32 символи";
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return "Username може містити лише літери, цифри та підкреслення";
    }

    return undefined;
};

const validateForm = (): boolean => {
    errors.name = validateName(form.name);
    errors.phone = validatePhone(form.phone);
    errors.telegram = validateTelegram(form.telegram);

    return !errors.name && !errors.phone && !errors.telegram;
};

const submitForm = async () => {
    if (!validateForm()) return;

    isSubmitting.value = true;

    try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Reset form
        form.name = "";
        form.phone = "";
        form.telegram = "";
        form.comment = "";

        // Show success message
        showSuccessMessage.value = true;

        // Hide success message after 5 seconds
        setTimeout(() => {
            showSuccessMessage.value = false;
        }, 5000);
    } catch (error) {
        console.error("Error submitting form:", error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }
    33% {
        transform: translate(50px, -70px) scale(1.1);
    }
    66% {
        transform: translate(-40px, 40px) scale(0.9);
    }
    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-15px) rotate(3deg);
    }
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

@keyframes slide-in-left {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-in-right {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes gradient {
    0%,
    100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes bounce-subtle {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

.animate-blob {
    animation: blob 15s infinite;
}

.animate-float {
    animation: float 12s ease-in-out infinite;
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-slide-in-left {
    animation: slide-in-left 1s ease-out;
}

.animate-slide-in-right {
    animation: slide-in-right 1s ease-out;
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 6s ease infinite;
}

.animate-bounce-subtle {
    animation: bounce-subtle 3s infinite;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>
