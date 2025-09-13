<template>
    <section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Section Header -->
            <div class="text-center mb-20">
                <div
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                    <Icon
                        name="ic:round-groups"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    {{ $t('mainPage.whyUs.badgeTitle') }}
                </div>

                <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {{ $t('mainPage.whyUs.title') }}
                    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient block sm:inline">
                        {{ $t('mainPage.whyUs.titleHighlight') }}
                    </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {{ $t('mainPage.whyUs.descr') }}
                </p>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
                <!-- Left: About Text & Stats -->
                <div class="space-y-8 animate-slide-in-left">
                    <div class="space-y-6">
                        <h3 class="text-3xl font-bold text-gray-900">
                            {{ $t('mainPage.whyUs.watchPortfolio') }}
                            <span class="text-blue-600">{{ $t('mainPage.whyUs.watchPortfolioHighlight') }}</span>
                        </h3>

                        <p class="text-lg text-gray-600 leading-relaxed">
                            {{ $t('mainPage.whyUs.watchPortfolioDescr') }}
                        </p>
                    </div>

                    <!-- Interactive Stats -->
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            v-for="stat in mainStats"
                            :key="stat.label"
                            class="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50">
                            <div class="flex items-center gap-4 mb-3">
                                <div
                                    class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                    :class="stat.iconBg">
                                    <Icon
                                        :name="stat.icon"
                                        class="w-6 h-6"
                                        :class="stat.iconColor"
                                        size="24" />
                                </div>
                            </div>
                            <div class="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {{ stat.value }}
                            </div>
                            <div class="text-sm text-gray-600">{{ stat.label }}</div>
                            <!-- Hover effect -->
                            <div
                                class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
                                :class="stat.glowColor"></div>
                        </div>
                    </div>
                </div>

                <!-- Right: Interactive Elements -->
                <div class="relative animate-slide-in-right space-y-10">
                    <!-- Header Card -->
                    <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border border-white/50 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                        <div class="relative z-10">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                    <Icon
                                        name="ic:round-auto-awesome"
                                        size="24"
                                        class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-gray-900">{{ $t('mainPage.whyUs.ourExpertise') }}</h4>
                                    <p class="text-sm text-gray-600">{{ $t('mainPage.whyUs.fullCircle') }}</p>
                                </div>
                            </div>

                            <!-- Quick Stats -->
                            <div class="grid grid-cols-3 gap-3">
                                <div class="text-center bg-white/60 rounded-lg p-2">
                                    <div class="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                                    <div class="text-xs text-gray-600">{{ $t('mainPage.whyUs.projects') }}</div>
                                </div>
                                <div class="text-center bg-white/60 rounded-lg p-2">
                                    <div class="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">98%</div>
                                    <div class="text-xs text-gray-600">{{ $t('mainPage.whyUs.success') }}</div>
                                </div>
                                <div class="text-center bg-white/60 rounded-lg p-2">
                                    <div class="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">24/7</div>
                                    <div class="text-xs text-gray-600">{{ $t('mainPage.whyUs.support') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Services Grid -->
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            v-for="service in showcaseServices"
                            :key="service.id"
                            class="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-white/50">
                            <div class="flex flex-col items-center text-center">
                                <div
                                    class="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                                    :class="service.iconBg">
                                    <Icon
                                        :name="service.icon"
                                        class="w-6 h-6"
                                        size="24"
                                        :class="service.iconColor" />
                                </div>
                                <h5 class="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {{ service.name }}
                                </h5>
                                <p class="text-xs text-gray-600 leading-relaxed">{{ service.description }}</p>

                                <!-- Service stats -->
                                <div class="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500">
                                    <Icon
                                        name="ic:round-check-circle"
                                        class="w-3 h-3 text-green-500" />
                                    <span>{{ service.projects }}+ {{ $t('mainPage.whyUs.projects') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Choose Us Features -->
            <div class="mb-20">
                <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">{{ $t('mainPage.whyUs.specialTitle') }} <span class="text-blue-600">{{ $t('mainPage.whyUs.specialHighlight') }}</span></h3>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        v-for="(feature, index) in whyChooseUs"
                        :key="feature.id"
                        class="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 border border-white/50"
                        :class="`animation-delay-${(index + 1) * 200}`">
                        <!-- Icon -->
                        <div class="relative mb-6">
                            <div
                                class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                :class="feature.iconBg">
                                <Icon
                                    :name="feature.icon"
                                    size="32"
                                    class="w-8 h-8 transition-transform duration-500"
                                    :class="feature.iconColor" />
                            </div>

                            <!-- Floating indicator -->
                            <div
                                v-if="feature.isTop"
                                class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                                <Icon
                                    name="ic:round-star"
                                    class="w-3 h-3 text-white" />
                            </div>
                        </div>

                        <!-- Content -->
                        <h4
                            class="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                            :class="feature.titleGradient">
                            {{ feature.title }}
                        </h4>

                        <p class="text-gray-600 mb-4 leading-relaxed">
                            {{ feature.description }}
                        </p>

                        <!-- Benefits list -->
                        <ul class="space-y-2">
                            <li
                                v-for="benefit in feature.benefits"
                                :key="benefit"
                                class="flex items-center text-sm text-gray-700">
                                <Icon
                                    name="ic:round-arrow-right"
                                    class="w-4 h-4 mr-2 text-blue-500 group-hover:text-purple-500 transition-colors" />
                                {{ benefit }}
                            </li>
                        </ul>

                        <!-- Hover indicator -->
                        <div
                            class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <Icon
                                    name="ic:round-trending-up"
                                    class="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Technology Stack -->
            <div class="mb-20">
                <h3 class="text-3xl font-bold text-center text-gray-900 mb-4">{{ $t('mainPage.whyUs.technologies') }} <span class="text-purple-600">{{ $t('mainPage.whyUs.technologiesHighlight') }}</span></h3>
                <p class="text-center text-gray-600 mb-12">{{ $t('mainPage.whyUs.technologiesDescr') }}</p>

                <div class="flex flex-wrap justify-center items-center gap-6">
                    <div
                        v-for="(tech, index) in technologies"
                        :key="tech.name"
                        class="group bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-110 border border-white/50"
                        :class="`tech-item animation-delay-${index * 100}`">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-10 h-10 rounded-xl flex items-center justify-center"
                                :class="tech.iconBg">
                                <Icon
                                    :name="tech.icon"
                                    class="w-5 h-5"
                                    :class="tech.iconColor" />
                            </div>
                            <span class="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{{ tech.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <CtaSection />
        </div>
    </section>
</template>

<script setup lang="ts">
import CtaSection from '~/components/UI/CtaSection/CtaSection.vue';
const mainStats = [
    {
        value: "200+",
        label: "Проектів реалізовано",
        icon: "ic:round-work",
        iconBg: "bg-blue-100 group-hover:bg-blue-200",
        iconColor: "text-blue-600",
        glowColor: "bg-blue-400"
    },
    {
        value: "98%",
        label: "Задоволених клієнтів",
        icon: "ic:round-thumb-up",
        iconBg: "bg-green-100 group-hover:bg-green-200",
        iconColor: "text-green-600",
        glowColor: "bg-green-400"
    },
    {
        value: "5★",
        label: "Середній рейтинг",
        icon: "ic:round-star",
        iconBg: "bg-yellow-100 group-hover:bg-yellow-200",
        iconColor: "text-yellow-600",
        glowColor: "bg-yellow-400"
    },
    {
        value: "24/7",
        label: "Підтримка проектів",
        icon: "ic:round-support",
        iconBg: "bg-purple-100 group-hover:bg-purple-200",
        iconColor: "text-purple-600",
        glowColor: "bg-purple-400"
    }
];

const showcaseServices = [
    {
        id: 1,
        name: "Веб-розробка",
        description: "Сучасні сайти та веб-додатки",
        icon: "ic:round-web",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        projects: 120
    },
    {
        id: 2,
        name: "Motion дизайн",
        description: "Анімації та відеоконтент",
        icon: "ic:round-movie-creation",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        projects: 85
    },
    {
        id: 3,
        name: "Брендинг",
        description: "Фірмовий стиль та айдентика",
        icon: "ic:round-palette",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        projects: 95
    },
    {
        id: 4,
        name: "UX/UI дизайн",
        description: "Інтерфейси та користувацький досвід",
        icon: "ic:round-design-services",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        projects: 110
    }
];

const whyChooseUs = [
    {
        id: 1,
        title: "Адаптуємось під потреби",
        description: "Кожен клієнт унікальний. Ми вивчаємо ваш бізнес та створюємо персоналізовані рішення.",
        icon: "ic:round-tune",
        iconBg: "bg-blue-100 group-hover:bg-blue-200",
        iconColor: "text-blue-600",
        titleGradient: "group-hover:from-blue-500 group-hover:to-cyan-600",
        glowColor: "bg-blue-400",
        isTop: true,
        benefits: ["Індивідуальний підхід", "Гнучкі умови співпраці", "Врахування специфіки бізнесу"]
    },
    {
        id: 2,
        title: "Контролюємо все",
        description: "Повний контроль процесів від початку до кінця. Ви завжди в курсі стану проекту.",
        icon: "ic:round-assignment-turned-in",
        iconBg: "bg-green-100 group-hover:bg-green-200",
        iconColor: "text-green-600",
        titleGradient: "group-hover:from-green-500 group-hover:to-emerald-600",
        glowColor: "bg-green-400",
        isTop: false,
        benefits: ["Прозорість процесів", "Регулярні звіти", "Контроль якості"]
    },
    {
        id: 3,
        title: "Команда спеціалістів",
        description: "Досвідчені професіонали з різних галузей працюють над вашим проектом.",
        icon: "ic:round-groups",
        iconBg: "bg-purple-100 group-hover:bg-purple-200",
        iconColor: "text-purple-600",
        titleGradient: "group-hover:from-purple-500 group-hover:to-pink-600",
        glowColor: "bg-purple-400",
        isTop: true,
        benefits: ["Експерти світового рівня", "Різнопланова експертиза", "Командна робота"]
    },
    {
        id: 4,
        title: "Професійний супровід",
        description: "Підтримка проекту не закінчується з його запуском — ми завжди на зв'язку.",
        icon: "ic:round-support-agent",
        iconBg: "bg-orange-100 group-hover:bg-orange-200",
        iconColor: "text-orange-600",
        titleGradient: "group-hover:from-orange-500 group-hover:to-red-600",
        glowColor: "bg-orange-400",
        isTop: false,
        benefits: ["Постійна підтримка", "Швидкий response час", "Технічне обслуговування"]
    },
    {
        id: 5,
        title: "Широкий стек технологій",
        description: "Володіємо сучасними технологіями та постійно розширюємо свою експертизу.",
        icon: "ic:round-code",
        iconBg: "bg-cyan-100 group-hover:bg-cyan-200",
        iconColor: "text-cyan-600",
        titleGradient: "group-hover:from-cyan-500 group-hover:to-blue-600",
        glowColor: "bg-cyan-400",
        isTop: true,
        benefits: ["Сучасні фреймворки", "Масштабовані рішення", "Кросплатформенність"]
    },
    {
        id: 6,
        title: "Комплексні рішення",
        description: "Від стратегії до реалізації — всі послуги в одному місці для вашої зручності.",
        icon: "ic:round-integration-instructions",
        iconBg: "bg-indigo-100 group-hover:bg-indigo-200",
        iconColor: "text-indigo-600",
        titleGradient: "group-hover:from-indigo-500 group-hover:to-purple-600",
        glowColor: "bg-indigo-400",
        isTop: false,
        benefits: ["Повний цикл розробки", "Єдина точка контакту", "Синергія послуг"]
    }
];

const technologies = [
    { name: "Vue.js", icon: "ic:round-web", iconBg: "bg-green-100", iconColor: "text-green-600" },
    { name: "React", icon: "ic:round-web", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    { name: "Node.js", icon: "ic:round-dns", iconBg: "bg-green-100", iconColor: "text-green-600" },
    { name: "Laravel", icon: "ic:round-code", iconBg: "bg-red-100", iconColor: "text-red-600" },
    { name: "WordPress", icon: "ic:round-web", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    { name: "Shopify", icon: "ic:round-shopping-cart", iconBg: "bg-green-100", iconColor: "text-green-600" },
    { name: "Figma", icon: "ic:round-design-services", iconBg: "bg-purple-100", iconColor: "text-purple-600" },
    { name: "After Effects", icon: "ic:round-movie-creation", iconBg: "bg-purple-100", iconColor: "text-purple-600" }
];

const backgroundParticles = [
    {
        id: 1,
        icon: "ic:round-auto-awesome",
        class: "text-blue-400",
        style: { top: "10%", left: "5%" }
    },
    {
        id: 2,
        icon: "ic:round-lightbulb",
        class: "text-yellow-400",
        style: { top: "15%", right: "8%" }
    },
    {
        id: 3,
        icon: "ic:round-emoji-events",
        class: "text-orange-400",
        style: { top: "35%", left: "3%" }
    },
    {
        id: 4,
        icon: "ic:round-trending-up",
        class: "text-green-400",
        style: { top: "55%", right: "5%" }
    },
    {
        id: 5,
        icon: "ic:round-psychology",
        class: "text-purple-400",
        style: { top: "75%", left: "8%" }
    },
    {
        id: 6,
        icon: "ic:round-rocket-launch",
        class: "text-pink-400",
        style: { top: "85%", right: "12%" }
    }
];
</script>

<style scoped>

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

@keyframes bounce-subtle {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

@keyframes bounce-gentle {
    0%,
    100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-5px) scale(1.05);
    }
}

@keyframes pulse-glow {
    0%,
    100% {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
    }
}

@keyframes orbit-1 {
    0% {
        transform: translateX(-50%) rotate(0deg) translateX(120px) rotate(0deg);
    }
    100% {
        transform: translateX(-50%) rotate(360deg) translateX(120px) rotate(-360deg);
    }
}

@keyframes orbit-2 {
    0% {
        transform: rotate(60deg) translateX(120px) rotate(-60deg);
    }
    100% {
        transform: rotate(420deg) translateX(120px) rotate(-420deg);
    }
}

@keyframes orbit-3 {
    0% {
        transform: rotate(120deg) translateX(120px) rotate(-120deg);
    }
    100% {
        transform: rotate(480deg) translateX(120px) rotate(-480deg);
    }
}

@keyframes orbit-4 {
    0% {
        transform: translateX(-50%) rotate(180deg) translateX(120px) rotate(-180deg);
    }
    100% {
        transform: translateX(-50%) rotate(540deg) translateX(120px) rotate(-540deg);
    }
}

@keyframes orbit-5 {
    0% {
        transform: rotate(240deg) translateX(120px) rotate(-240deg);
    }
    100% {
        transform: rotate(600deg) translateX(120px) rotate(-600deg);
    }
}

@keyframes orbit-6 {
    0% {
        transform: rotate(300deg) translateX(120px) rotate(-300deg);
    }
    100% {
        transform: rotate(660deg) translateX(120px) rotate(-660deg);
    }
}

.animate-blob {
    animation: blob 12s infinite;
}

.animate-float {
    animation: float 10s ease-in-out infinite;
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

.animate-bounce-gentle {
    animation: bounce-gentle 4s infinite;
}

.animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
}

.animate-orbit-1 {
    animation: orbit-1 20s linear infinite;
}
.animate-orbit-2 {
    animation: orbit-2 25s linear infinite;
}
.animate-orbit-3 {
    animation: orbit-3 30s linear infinite;
}
.animate-orbit-4 {
    animation: orbit-4 22s linear infinite;
}
.animate-orbit-5 {
    animation: orbit-5 27s linear infinite;
}
.animate-orbit-6 {
    animation: orbit-6 24s linear infinite;
}

.animation-delay-100 {
    animation-delay: 0.1s;
}
.animation-delay-200 {
    animation-delay: 0.2s;
}
.animation-delay-300 {
    animation-delay: 0.3s;
}
.animation-delay-400 {
    animation-delay: 0.4s;
}
.animation-delay-500 {
    animation-delay: 0.5s;
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
.animation-delay-4000 {
    animation-delay: 4s;
}

.tech-item {
    animation: fade-in 0.8s ease-out forwards;
    opacity: 0;
}

.tech-item:hover {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1));
}
</style>
