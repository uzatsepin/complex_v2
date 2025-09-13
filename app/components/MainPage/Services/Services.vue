<template>
    <section class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
                        class="w-6 h-6" />
                </div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div
                class="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Section Header -->
            <div class="text-center mb-16 animate-fade-in">
                <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                    <Icon
                        name="ic:round-build"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    {{ $t('services.badgeTitle') }}
                </div>

                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    {{ $t('services.title') }}<br />
                    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> {{ $t('services.titleHighlight') }} </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {{ $t('services.subtitle') }}
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<ServicesItem v-for="(service, index) in services" :key="service.id" :service="service" :index="index" />
			</div>

            <!-- CTA Section -->
            <div class="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 relative overflow-hidden">
                <!-- Background decoration -->
                <div class="absolute inset-0">
                    <div class="absolute top-4 right-4 w-32 h-32 bg-blue-400/20 rounded-full animate-blob"></div>
                    <div class="absolute bottom-4 left-4 w-24 h-24 bg-purple-400/20 rounded-full animate-blob animation-delay-1000"></div>
                </div>

                <div class="relative">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('cta.title') }}</h3>
                    <p class="text-gray-600 mb-8 max-w-2xl mx-auto">{{ $t('cta.subtitle') }}</p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                            <Icon
                                name="ic:round-rocket-launch"
                                class="w-5 h-5" />
                            {{ $t('cta.button1') }}
                        </button>
                        <button
                            class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                            <Icon
                                name="ic:round-schedule"
                                class="w-5 h-5" />
                            {{ $t('cta.button2') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { IService } from '~/interface';
import ServicesItem from './ServicesItem/ServicesItem.vue';

const services:IService[] = [
    {
        id: 1,
        title: "Інтернет-магазини",
        description: "Повнофункціональні e-commerce рішення з інтеграцією платіжних систем, управлінням товарами та аналітикою продажів.",
        icon: "ic:round-shopping-cart",
        iconBg: "bg-green-100 group-hover:bg-green-200",
        iconColor: "text-green-600",
        gradient: "from-green-400 to-emerald-600",
        badge: "ТОП",
        features: ["Адаптивний дизайн", "Платіжні системи", "Управління товарами", "SEO оптимізація"],
        timeline: "від 3 тижнів",
        price: "від 15 000₴",
		slug: "internet-magazyny"
    },
    {
        id: 2,
        title: "Веб-сервіси",
        description: "Складні веб-додатки та SaaS платформи з користувацьким інтерфейсом, API та інтеграціями з третіми сервісами.",
        icon: "ic:round-cloud",
        iconBg: "bg-blue-100 group-hover:bg-blue-200",
        iconColor: "text-blue-600",
        gradient: "from-blue-400 to-indigo-600",
        features: ["REST API", "База даних", "Користувацькі ролі", "Інтеграції"],
        timeline: "від 4 тижнів",
        price: "від 25 000₴",
		slug: "veb-servisy"
    },
    {
        id: 3,
        title: "Для стартапів",
        description: "MVP та прототипи для стартапів. Швидкий вихід на ринок з мінімальними витратами та максимальним результатом.",
        icon: "ic:round-rocket-launch",
        iconBg: "bg-purple-100 group-hover:bg-purple-200",
        iconColor: "text-purple-600",
        gradient: "from-purple-400 to-pink-600",
        badge: "MVP",
        features: ["Швидкий розвиток", "MVP підхід", "Тестування гіпотез", "Масштабування"],
        timeline: "від 2 тижнів",
        price: "від 8 000₴",
		slug: "dlya-startapiv"
    },
    {
        id: 4,
        title: "Корпоративні сайти",
        description: "Представницькі сайти для великого бізнесу з корпоративним дизайном, CMS та інтеграцією з бізнес-процесами.",
        icon: "ic:round-business",
        iconBg: "bg-orange-100 group-hover:bg-orange-200",
        iconColor: "text-orange-600",
        gradient: "from-orange-400 to-red-600",
        features: ["Корпоративний дизайн", "CMS система", "Багатомовність", "Інтеграція з CRM"],
        timeline: "від 3 тижнів",
        price: "від 20 000₴",
		slug: "korporatyvni-sayty"
    },
    {
        id: 5,
        title: "Telegram боти",
        description: "Розумні боти для автоматизації бізнес-процесів, обробки замовлень та взаємодії з клієнтами в Telegram.",
        icon: "ic:round-smart-toy",
        iconBg: "bg-cyan-100 group-hover:bg-cyan-200",
        iconColor: "text-cyan-600",
        gradient: "from-cyan-400 to-teal-600",
        features: ["Обробка команд", "Інтеграція з API", "Автоматизація", "Аналітика"],
        timeline: "від 1 тижня",
        price: "від 3 000₴",
		slug: "telegram-boty"
    },
    {
        id: 6,
        title: "Автоматизація бізнесу",
        description: "Цифрові рішення для автоматизації бізнес-процесів, CRM системи та внутрішні корпоративні платформи.",
        icon: "ic:round-settings",
        iconBg: "bg-gray-100 group-hover:bg-gray-200",
        iconColor: "text-gray-600",
        gradient: "from-gray-400 to-slate-600",
        features: ["Бізнес-процеси", "CRM інтеграція", "Звітність", "Workflow"],
        timeline: "від 5 тижнів",
        price: "від 30 000₴",
		slug: "avtomatyzatsiya-biznesu"
    }
];

const backgroundParticles = [
    {
        id: 1,
        icon: "ic:round-code",
        class: "text-blue-400",
        style: { top: "15%", left: "8%" }
    },
    {
        id: 2,
        icon: "ic:round-palette",
        class: "text-purple-400",
        style: { top: "25%", right: "12%" }
    },
    {
        id: 3,
        icon: "ic:round-speed",
        class: "text-green-400",
        style: { top: "60%", left: "15%" }
    },
    {
        id: 4,
        icon: "ic:round-analytics",
        class: "text-orange-400",
        style: { top: "75%", right: "8%" }
    },
    {
        id: 5,
        icon: "ic:round-smartphone",
        class: "text-pink-400",
        style: { top: "45%", left: "5%" }
    }
];
</script>

<style scoped>

@keyframes bounce-subtle {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

@keyframes pulse-subtle {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.animate-blob {
    animation: blob 8s infinite;
}

.animate-float {
    animation: float 8s ease-in-out infinite;
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 4s ease infinite;
}

.animate-bounce-subtle {
    animation: bounce-subtle 3s infinite;
}

.animate-pulse-subtle {
    animation: pulse-subtle 2s infinite;
}

.animation-delay-200 {
    animation-delay: 0.2s;
}

.animation-delay-400 {
    animation-delay: 0.4s;
}

.animation-delay-600 {
    animation-delay: 0.6s;
}

.animation-delay-800 {
    animation-delay: 0.8s;
}

.animation-delay-1000 {
    animation-delay: 1s;
}

.animation-delay-1200 {
    animation-delay: 1.2s;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.service-card {
    animation: fade-in 0.6s ease-out forwards;
    opacity: 0;
}

.service-card:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

.stat-item:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
}
</style>
