<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <Header />

        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 overflow-hidden">
            <!-- Background Elements -->
            <div class="absolute inset-0">
                <!-- Animated gradient orbs -->
                <div
                    class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div
                    class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

                <!-- Grid pattern -->
                <div class="absolute inset-0 opacity-10">
                    <div
                        class="absolute inset-0"
                        style="
                            background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0);
                            background-size: 50px 50px;
                        "></div>
                </div>

                <!-- Floating icons -->
                <div class="absolute inset-0 pointer-events-none">
                    <Icon
                        name="ic:round-build"
                        class="absolute top-1/4 left-1/4 w-8 h-8 text-blue-400/30 animate-float" />
                    <Icon
                        name="ic:round-code"
                        class="absolute top-1/3 right-1/4 w-6 h-6 text-purple-400/30 animate-float animation-delay-2000" />
                    <Icon
                        name="ic:round-rocket-launch"
                        class="absolute bottom-1/3 left-1/3 w-7 h-7 text-green-400/30 animate-float animation-delay-4000" />
                </div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <!-- Breadcrumb -->
                <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8 animate-fade-in">
                    <NuxtLink
                        to="/"
                        class="hover:text-blue-600 transition-colors"
                        >{{ $t("home") }}</NuxtLink
                    >
                    <Icon
                        name="ic:round-chevron-right"
                        class="w-4 h-4" />
                    <span class="text-gray-900 font-medium">{{ $t("servicesPage.services") }}</span>
                </nav>

                <!-- Page Header -->
                <div class="text-center max-w-4xl mx-auto animate-fade-in-up">
                    <div
                        class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        <Icon
                            name="ic:round-build"
                            class="w-4 h-4 mr-2" />
                        {{ $t("servicesPage.badgeTitle") }}
                    </div>

                    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        {{ $t("servicesPage.title") }}
                        <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">{{
                            $t("servicesPage.titleHighlight")
                        }}</span>
                    </h1>

                    <p class="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                        {{ $t("servicesPage.descr") }}
                    </p>
                </div>
            </div>
        </section>

        <!-- Services Grid -->
        <section class="py-20">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServicesItem
                        v-for="(service, index) in services"
                        :key="service.id"
                        :service="service"
                        :index="index" />
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {{ $t("servicesPage.whyChooseUs") }}
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        {{ $t("servicesPage.whyChooseUsDescr") }}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div
                        v-for="(advantage, index) in advantages"
                        :key="index"
                        class="text-center group p-4 bg-slate-100 rounded-2xl">
                        <div
                            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon
                                :name="advantage.icon"
                                class="w-8 h-8 text-white"
                                size="32" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ advantage.title }}</h3>
                        <p class="text-gray-600 leading-relaxed">{{ advantage.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {{ $t("servicesPage.howWeWork") }}
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        {{ $t("servicesPage.howWeWorkDescr") }}
                    </p>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div
                            v-for="(step, index) in workProcess"
                            :key="index"
                            class="text-center group">
                            <!-- Step number -->
                            <div class="relative mb-6">
                                <div
                                    class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                                    {{ index + 1 }}
                                </div>

                                <!-- Connector line (not for last item) -->
                                <div
                                    v-if="index < workProcess.length - 1"
                                    class="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-10"></div>
                            </div>

                            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
                            <p class="text-gray-600 text-sm">{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container mx-auto my-20">
            <CtaSection />
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import type { IService } from "~/interface";
import ServicesItem from "~/components/MainPage/Services/ServicesItem/ServicesItem.vue";
import CtaSection from "~/components/UI/CtaSection/CtaSection.vue";

// Services data
const services: IService[] = [
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

// Advantages
const advantages = [
    {
        icon: "ic:round-speed",
        title: "Швидкість",
        description: "Використовуємо agile методології для швидкого та якісного виконання проектів"
    },
    {
        icon: "ic:round-security",
        title: "Надійність",
        description: "Всі рішення розробляються з урахуванням найвищих стандартів безпеки"
    },
    {
        icon: "ic:round-support-agent",
        title: "Підтримка",
        description: "Надаємо повну технічну підтримку та консультації після запуску"
    },
    {
        icon: "ic:round-trending-up",
        title: "Масштабованість",
        description: "Проекти легко масштабуються разом з ростом вашого бізнесу"
    },
    {
        icon: "ic:round-palette",
        title: "Індивідуальний дизайн",
        description: "Створюємо унікальний дизайн, що відображає вашу бізнес-ідентичність"
    },
    {
        icon: "ic:round-analytics",
        title: "Аналітика",
        description: "Інтегруємо детальну аналітику для відстеження ефективності"
    }
];

// Work process
const workProcess = [
    {
        title: "Аналіз",
        description: "Вивчаємо ваші потреби та цілі"
    },
    {
        title: "Планування",
        description: "Розробляємо детальний план проекту"
    },
    {
        title: "Розробка",
        description: "Створюємо ваше рішення"
    },
    {
        title: "Запуск",
        description: "Тестуємо та запускаємо проект"
    }
];

// SEO
useHead({
    title: "Послуги веб-розробки | TheComplexAgency",
    meta: [
        {
            name: "description",
            content: "Професійні послуги веб-розробки: інтернет-магазини, веб-сервіси, корпоративні сайти, Telegram боти та автоматизація бізнесу."
        },
        { property: "og:title", content: "Послуги веб-розробки | TheComplexAgency" },
        {
            property: "og:description",
            content: "Професійні послуги веб-розробки: інтернет-магазини, веб-сервіси, корпоративні сайти, Telegram боти та автоматизація бізнесу."
        },
        { property: "og:type", content: "website" }
    ]
});
</script>

<style scoped>
</style>
