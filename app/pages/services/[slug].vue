<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <Header />
        
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 overflow-hidden">
            <!-- Background Elements -->
            <div class="absolute inset-0">
                <!-- Animated gradient orbs -->
                <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                
                <!-- Grid pattern -->
                <div class="absolute inset-0 opacity-10">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0); background-size: 50px 50px"></div>
                </div>
                
                <!-- Floating icons -->
                <div class="absolute inset-0 pointer-events-none">
                    <Icon v-if="service?.icon" :name="service.icon" class="absolute top-1/4 left-1/4 w-8 h-8 text-blue-400/30 animate-float" />
                    <Icon name="ic:round-star" class="absolute top-1/3 right-1/4 w-6 h-6 text-yellow-400/30 animate-float animation-delay-2000" />
                    <Icon name="ic:round-trending-up" class="absolute bottom-1/3 left-1/3 w-7 h-7 text-green-400/30 animate-float animation-delay-4000" />
                </div>
            </div>
            
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <!-- Breadcrumb -->
                <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8 animate-fade-in">
                    <NuxtLink to="/" class="hover:text-blue-600 transition-colors">Головна</NuxtLink>
                    <Icon name="ic:round-chevron-right" class="w-4 h-4" />
                    <NuxtLink to="/#services" class="hover:text-blue-600 transition-colors">Послуги</NuxtLink>
                    <Icon name="ic:round-chevron-right" class="w-4 h-4" />
                    <span class="text-gray-900 font-medium">{{ service?.title }}</span>
                </nav>
                
                <!-- Service Header -->
                <div class="max-w-4xl animate-fade-in-up">
                    <div class="flex flex-wrap items-center gap-4 mb-6">
                        <!-- Service Icon -->
                        <div :class="[
                            'w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300',
                            service?.iconBg
                        ]">
                            <Icon v-if="service?.icon" :name="service.icon" :class="['w-8 h-8', service?.iconColor]" size="32" />
                        </div>
                        
                        <!-- Badge -->
                        <div v-if="service?.badge" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium text-sm animate-pulse">
                            {{ service.badge }}
                        </div>
                        
                        <!-- Price & Timeline -->
                        <div class="flex items-center gap-4 text-sm text-gray-600">
                            <div class="flex items-center gap-1">
                                <Icon name="ic:round-access-time" class="w-4 h-4" />
                                {{ service?.timeline }}
                            </div>
                            <div class="flex items-center gap-1">
                                <Icon name="ic:round-monetization-on" class="w-4 h-4" />
                                {{ service?.price }}
                            </div>
                        </div>
                    </div>

                    <!-- Title & Description -->
                    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        {{ service?.title }}
                    </h1>

                    <p class="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                        {{ service?.description }}
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-wrap items-center gap-4">
                        <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                            <Icon name="ic:round-rocket-launch" class="w-5 h-5" />
                            Замовити послугу
                        </button>
                        <button class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                            <Icon name="ic:round-chat" class="w-5 h-5" />
                            Безкоштовна консультація
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Що включено
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Повний список можливостей та функцій нашого сервісу
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div 
                        v-for="(feature, index) in service?.features" 
                        :key="index"
                        class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        :style="{ animationDelay: `${index * 0.1}s` }"
                    >
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                <Icon name="ic:round-check" class="w-5 h-5 text-white" />
                            </div>
                            <span class="font-medium text-gray-900">{{ feature }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits Section -->
        <section class="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Переваги роботи з нами
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Чому варто обрати саме наш сервіс для вашого проекту
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div 
                        v-for="(benefit, index) in benefits" 
                        :key="index"
                        class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                            <Icon :name="benefit.icon" class="w-6 h-6 text-white" size="24" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ benefit.title }}</h3>
                        <p class="text-gray-600 leading-relaxed">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Процес роботи
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Покрокове втілення вашого проекту від ідеї до запуску
                    </p>
                </div>
                
                <div class="max-w-4xl mx-auto">
                    <div class="relative">
                        <!-- Progress line -->
                        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                        
                        <div class="space-y-12">
                            <div 
                                v-for="(step, index) in process" 
                                :key="index"
                                class="relative flex items-start gap-6"
                            >
                                <!-- Step number -->
                                <div class="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {{ index + 1 }}
                                </div>
                                
                                <!-- Step content -->
                                <div class="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ step.step }}</h3>
                                    <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack Section -->
        <section v-if="techStack.length > 0" class="py-20 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Технології
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Сучасний стек технологій для реалізації проекту
                    </p>
                </div>
                
                <div class="flex flex-wrap justify-center gap-4">
                    <div 
                        v-for="(tech, index) in techStack" 
                        :key="index"
                        class="px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <span class="font-medium text-gray-900">{{ tech }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
       <FaqSection v-if="service?.faqs" :faqs="service.faqs" />

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
            <!-- Background elements -->
            <div class="absolute inset-0">
                <div class="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div class="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="text-center max-w-3xl mx-auto">
                    <h3 class="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Готові розпочати проект?
                    </h3>
                    <p class="text-blue-100 text-lg mb-8">
                        Зв'яжіться з нами прямо зараз і отримайте безкоштовну консультацію
                    </p>
                    
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button class="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                            <Icon name="ic:round-phone" class="w-5 h-5" />
                            Зателефонувати
                        </button>
                        <button class="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                            <Icon name="ic:round-email" class="w-5 h-5" />
                            Написати email
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import FaqSection from '~/components/UI/FaqSection/FaqSection.vue';
import type { IService } from '~/interface';

// Get the slug from route params
const route = useRoute();
const slug = route.params.slug as string;

// Extended services data with detailed information
const servicesData: IService[] = [
    {
        id: 1,
        title: "Інтернет-магазини",
        description: "Повнофункціональні e-commerce рішення з інтеграцією платіжних систем, управлінням товарами та аналітикою продажів.",
        icon: "ic:round-shopping-cart",
        iconBg: "bg-green-100 group-hover:bg-green-200",
        iconColor: "text-green-600",
        gradient: "from-green-400 to-emerald-600",
        badge: "ТОП",
        features: ["Адаптивний дизайн", "Платіжні системи", "Управління товарами", "SEO оптимізація", "Система знижок", "Мультимовність", "Аналітика продажів", "Мобільна версія"],
        timeline: "від 3 тижнів",
        price: "від 15 000₴",
        slug: "internet-magazyny",
        detailedDescription: "Створюємо професійні інтернет-магазини, які перетворюють відвідувачів на покупців. Наші e-commerce рішення включають сучасний дизайн, зручну навігацію, швидку оплату та ефективне управління товарами.",
        benefits: [
            "Збільшення онлайн продажів",
            "Автоматизація бізнес-процесів",
            "Покращення користувацького досвіду",
            "Інтеграція з CRM системами",
            "Мобільна оптимізація",
            "SEO просування"
        ],
        techStack: ["Vue.js", "Nuxt.js", "Node.js", "MongoDB", "Stripe", "PayPal", "Docker"],
        process: [
            {
                step: "Аналіз вимог",
                description: "Детально вивчаємо ваш бізнес, цільову аудиторію та конкурентів для створення оптимального рішення."
            },
            {
                step: "UI/UX дизайн",
                description: "Створюємо привабливий та інтуїтивно зрозумілий дизайн, який мотивує до покупок."
            },
            {
                step: "Розробка функціоналу",
                description: "Програмуємо всі необхідні функції: каталог товарів, кошик, оплата, особистий кабінет."
            },
            {
                step: "Тестування",
                description: "Ретельно тестуємо всі функції на різних пристроях та браузерах."
            },
            {
                step: "Запуск та підтримка",
                description: "Запускаємо магазин та надаємо подальшу технічну підтримку."
            }
        ],
        faqs: [
            {
                id: 1,
                question: "Скільки часу займає розробка інтернет-магазину?",
                answer: "Типовий інтернет-магазин розробляється за 3-6 тижнів в залежності від складності функціоналу та кількості товарів."
            },
            {
                id: 2,
                question: "Які платіжні системи можна інтегрувати?",
                answer: "Ми інтегруємо всі популярні платіжні системи: LiqPay, Fondy, WayForPay, Stripe, PayPal та інші."
            },
            {
                id: 3,
                question: "Чи надаєте ви подальшу підтримку?",
                answer: "Так, ми надаємо технічну підтримку, оновлення та розвиток функціоналу після запуску."
            }
        ]
    },
    {
        id: 2,
        title: "Веб-сервіси",
        description: "Складні веб-додатки та SaaS платформи з користувацьким інтерфейсом, API та інтеграціями з третіми сервісами.",
        icon: "ic:round-cloud",
        iconBg: "bg-blue-100 group-hover:bg-blue-200",
        iconColor: "text-blue-600",
        gradient: "from-blue-400 to-indigo-600",
        features: ["REST API", "База даних", "Користувацькі ролі", "Інтеграції", "Хмарне розгортання", "Масштабування", "Безпека", "Моніторинг"],
        timeline: "від 4 тижнів",
        price: "від 25 000₴",
        slug: "veb-servisy",
        techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL"],
        process: [
            {
                step: "Планування архітектури",
                description: "Проектуємо архітектуру системи з урахуванням масштабування та продуктивності."
            },
            {
                step: "Розробка API",
                description: "Створюємо надійний та безпечний API для взаємодії з фронтендом та третіми сервісами."
            },
            {
                step: "Фронтенд розробка",
                description: "Програмуємо користувацький інтерфейс з акцентом на UX та продуктивність."
            },
            {
                step: "Тестування та оптимізація",
                description: "Проводимо навантажувальні тести та оптимізуємо продуктивність системи."
            },
            {
                step: "Деплой та моніторинг",
                description: "Розгортаємо сервіс в хмарі та налаштовуємо системи моніторингу."
            }
        ]
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
        features: ["Швидкий розвиток", "MVP підхід", "Тестування гіпотез", "Масштабування", "Lean методологія", "Користувацьке тестування", "Аналітика", "Ітеративний розвиток"],
        timeline: "від 2 тижнів",
        price: "від 8 000₴",
        slug: "dlya-startapiv",
        techStack: ["Vue.js", "Firebase", "Vercel", "Analytics", "Figma"]
    },
    {
        id: 4,
        title: "Корпоративні сайти",
        description: "Представницькі сайти для великого бізнесу з корпоративним дизайном, CMS та інтеграцією з бізнес-процесами.",
        icon: "ic:round-business",
        iconBg: "bg-orange-100 group-hover:bg-orange-200",
        iconColor: "text-orange-600",
        gradient: "from-orange-400 to-red-600",
        features: ["Корпоративний дизайн", "CMS система", "Багатомовність", "Інтеграція з CRM", "SEO оптимізація", "Безпека", "Швидкодія", "Аналітика"],
        timeline: "від 3 тижнів",
        price: "від 20 000₴",
        slug: "korporatyvni-sayty",
        techStack: ["Nuxt.js", "Strapi", "PostgreSQL", "Cloudflare", "Google Analytics"]
    },
    {
        id: 5,
        title: "Telegram боти",
        description: "Розумні боти для автоматизації бізнес-процесів, обробки замовлень та взаємодії з клієнтами в Telegram.",
        icon: "ic:round-smart-toy",
        iconBg: "bg-cyan-100 group-hover:bg-cyan-200",
        iconColor: "text-cyan-600",
        gradient: "from-cyan-400 to-teal-600",
        features: ["Обробка команд", "Інтеграція з API", "Автоматизація", "Аналітика", "Платежі", "Уведомлення", "Чат-бот AI", "Webhook"],
        timeline: "від 1 тижня",
        price: "від 3 000₴",
        slug: "telegram-boty",
        techStack: ["Node.js", "Telegraf", "MongoDB", "OpenAI", "Redis"]
    },
    {
        id: 6,
        title: "Автоматизація бізнесу",
        description: "Цифрові рішення для автоматизації бізнес-процесів, CRM системи та внутрішні корпоративні платформи.",
        icon: "ic:round-settings",
        iconBg: "bg-gray-100 group-hover:bg-gray-200",
        iconColor: "text-gray-600",
        gradient: "from-gray-400 to-slate-600",
        features: ["Бізнес-процеси", "CRM інтеграція", "Звітність", "Workflow", "Автоматизація задач", "Інтеграції", "Безпека", "Масштабування"],
        timeline: "від 5 тижнів",
        price: "від 30 000₴",
        slug: "avtomatyzatsiya-biznesu",
        techStack: ["React", "Node.js", "PostgreSQL", "Redis", "RabbitMQ", "Docker"]
    }
];

// Find the service by slug
const service = computed(() => servicesData.find(s => s.slug === slug));

// Default benefits for all services
const benefits = [
    {
        icon: "ic:round-speed",
        title: "Швидка розробка",
        description: "Використовуємо agile методології та сучасні інструменти для максимально швидкого результату."
    },
    {
        icon: "ic:round-security",
        title: "Надійність та безпека",
        description: "Всі проекти розробляються з урахуванням найвищих стандартів безпеки та стабільності."
    },
    {
        icon: "ic:round-support-agent",
        title: "Підтримка 24/7",
        description: "Надаємо цілодобову технічну підтримку та консультації після запуску проекту."
    },
    {
        icon: "ic:round-trending-up",
        title: "Масштабованість",
        description: "Проекти розробляються з можливістю легкого масштабування та розширення функціоналу."
    },
    {
        icon: "ic:round-devices",
        title: "Кросплатформеність",
        description: "Всі рішення адаптовані для роботи на будь-яких пристроях та операційних системах."
    },
    {
        icon: "ic:round-analytics",
        title: "Аналітика та звіти",
        description: "Інтеграція детальної аналітики для відстеження ефективності та оптимізації."
    }
];

// Default process for all services
const process = computed(() => {
    return service.value?.process || [
        {
            step: "Аналіз вимог",
            description: "Детально вивчаємо ваші потреби, цілі та специфіку бізнесу для створення оптимального рішення."
        },
        {
            step: "Планування та дизайн",
            description: "Створюємо архітектуру проекту, wireframes та дизайн-макети з урахуванням UX/UI принципів."
        },
        {
            step: "Розробка",
            description: "Програмуємо функціонал використовуючи сучасні технології та найкращі практики розробки."
        },
        {
            step: "Тестування",
            description: "Проводимо всебічне тестування функціоналу, продуктивності та безпеки на різних пристроях."
        },
        {
            step: "Запуск та підтримка",
            description: "Запускаємо проект в production та надаємо подальшу технічну підтримку й розвиток."
        }
    ];
});

// Default tech stack
const techStack = computed(() => {
    return service.value?.techStack || ["Vue.js", "Nuxt.js", "Node.js", "MongoDB", "Docker", "AWS"];
});

// Default FAQs
const faqs = computed(() => {
    return service.value?.faqs || [
        {
            id: 1,
            question: "Скільки часу займає розробка?",
            answer: "Час розробки залежить від складності проекту. Простий проект може бути готовий за тиждень, складні системи розробляються до 2-3 місяців."
        },
        {
            id: 2,
            question: "Чи надаєте ви гарантію на роботу?",
            answer: "Так, ми надаємо гарантію на всі виконані роботи терміном 6 місяців з моменту здачі проекту."
        },
        {
            id: 3,
            question: "Які технології ви використовуєте?",
            answer: "Ми працюємо з сучасними технологіями: Vue.js, React, Node.js, Python, MongoDB, PostgreSQL та іншими."
        },
        {
            id: 4,
            question: "Чи можна внести зміни в процесі розробки?",
            answer: "Так, ми використовуємо гнучку методологію розробки, що дозволяє вносити корективи на будь-якому етапі."
        }
    ];
});

// SEO
useHead({
    title: `${service.value?.title} | TheComplexAgency`,
    meta: [
        { name: 'description', content: service.value?.description || 'Професійні IT послуги від TheComplexAgency' },
        { property: 'og:title', content: `${service.value?.title} | TheComplexAgency` },
        { property: 'og:description', content: service.value?.description || 'Професійні IT послуги від TheComplexAgency' },
        { property: 'og:type', content: 'website' },
    ]
});

// Redirect if service not found
if (!service.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Сервіс не знайдено'
    });
}
</script>

<style scoped>
</style>