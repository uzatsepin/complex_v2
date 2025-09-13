<template>
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                    <Icon
                        name="ic:round-mail"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    {{ $t("contacts.leftRequest") }}
                </div>

                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    {{ $t("contacts.readyToStart") }}
                    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> {{ $t("contacts.readyToStartProject") }} </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {{ $t("contacts.tellUsMore") }}
                </p>
            </div>

            <!-- Contact Form Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                <!-- Contact Form -->
                <div class="animate-slide-in-left">
                    <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 relative overflow-hidden h-fit">
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
                                    <h4 class="font-semibold text-green-800">{{ $t("contacts.sendSuccessTitle") }}</h4>
                                    <p class="text-sm text-green-600">{{ $t("contacts.sendSuccessDescr") }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="relative">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ $t("contacts.tellAboutProject") }}</h3>

                            <form
                                @submit.prevent="submitForm"
                                class="space-y-6">
                                <!-- Name Field -->
                                <FormInput
                                    v-model="form.name"
                                    :label="$t('contacts.yourName')"
                                    :placeholder="$t('contacts.placeholderName')"
                                    left-icon="ic:round-person"
                                    :error="errors.name"
                                    required
                                />

                                <!-- Phone Field -->
                                <FormPhone
                                    v-model="form.phone"
                                    label="Телефон"
                                    :error="errors.phone"
                                    required
                                />

                                <!-- Telegram Field -->
                                <FormInput
                                    v-model="form.telegram"
                                    label="Telegram"
                                    placeholder="@username або t.me/username"
                                    left-icon="ic:round-telegram"
                                    :error="errors.telegram"
                                />

                                <!-- Comment Field -->
                                <div>
                                    <label
                                        for="comment"
                                        class="block text-sm font-medium text-gray-700 mb-2">
                                        {{ $t("contacts.commentProject") }}
                                    </label>
                                    <div class="relative">
                                        <textarea
                                            id="comment"
                                            v-model="form.comment"
                                            rows="4"
                                            class="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white resize-none"
                                            :placeholder="$t('contacts.placeholderComment')"></textarea>
                                        <Icon
                                            name="ic:round-comment"
											size="20"
                                            class="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                    </div>
                                    <div class="flex justify-between items-center mt-1">
                                        <p class="text-xs text-gray-500">{{ $t("contacts.unnecessaryField") }}</p>
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
                                            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-101 hover:shadow-xl'
                                    ]"
                                    class="text-white">
                                    <Icon
                                        :name="isSubmitting ? 'ic:round-refresh' : 'ic:round-send'"
                                        :class="['w-5 h-5', isSubmitting ? 'animate-spin' : '']" />
                                    {{ isSubmitting ? $t("contacts.sending") : $t("contacts.send") }}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="animate-slide-in-right flex flex-col h-full">
                    <!-- Contact Details -->
                    <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden flex-1 mb-8">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>

                        <div class="relative">
                            <h3 class="text-xl font-bold text-gray-900 mb-6">{{ $t("contacts.howToContactUs") }}</h3>

                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Icon
                                            name="ic:round-phone"
											size="24"
                                            class="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <div class="font-medium text-gray-900">{{ $t("contacts.phoneNumber") }}</div>
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
                            <h3 class="text-xl font-bold text-gray-900 mb-6">{{ $t("contacts.workTime") }}</h3>

                            <div class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-600">{{ $t("contacts.mondayFriday") }}</span>
                                    <span class="font-medium text-gray-900">9:00 - 18:00</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-600">{{ $t("contacts.saturday") }}</span>
                                    <span class="font-medium text-gray-900">10:00 - 16:00</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-600">{{ $t("contacts.sunday") }}</span>
                                    <span class="font-medium text-red-500">{{ $t("contacts.dayOff") }}</span>
                                </div>
                            </div>

                            <div class="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <div class="flex items-center gap-2 mb-2">
                                    <Icon
                                        name="ic:round-info"
                                        class="w-4 h-4 text-blue-600" />
                                    <span class="text-sm font-medium text-blue-800">{{ $t("contacts.fastAnswer") }}</span>
                                </div>
                                <p class="text-sm text-blue-700">{{ $t("contacts.fastAnswerDescr") }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FaqSection :faqs="faqs" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import FaqSection from "~/components/UI/FaqSection/FaqSection.vue";
import FormInput from "~/components/UI/FormInput/FormInput.vue";
import FormPhone from "~/components/UI/FormPhone/FormPhone.vue";

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

const faqs = [
    {
        id: 1,
        question: "Скільки коштує розробка сайту?",
        answer: "Вартість залежить від складності проекту. Базові сайти від 15,000₴, складні веб-додатки від 50,000₴. Точну вартість розрахуємо після консультації."
    },
    {
        id: 2,
        question: "Як довго триває розробка?",
        answer: "Термін залежить від типу проекту: лендінг — 1-2 тижні, корпоративний сайт — 3-4 тижні, інтернет-магазин — 4-6 тижнів, складний веб-додаток — від 8 тижнів."
    },
    {
        id: 3,
        question: "Чи надаєте ви підтримку після запуску?",
        answer: "Так, надаємо гарантійну підтримку 3 місяці безкоштовно, далі пропонуємо пакети технічної підтримки від 2,000₴/місяць."
    },
    {
        id: 4,
        question: "Чи можна внести зміни під час розробки?",
        answer: "Так, ми працюємо ітераційно. Незначні правки включені в вартість, суттєві зміни обговорюються окремо."
    }
];

// Validation functions
const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Ім'я обов'язкове";
    if (name.length < 2) return "Ім'я має містити мінімум 2 символи";
    if (name.length > 50) return "Ім'я має містити максимум 50 символів";
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
    errors.telegram = validateTelegram(form.telegram);

    return !errors.name && !errors.telegram;
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
</style>
