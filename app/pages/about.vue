<template>
    <div>
        <!-- Page Head -->
        <Head>
            <Title>Про нас - Complex Studio | Веб-студія повного циклу</Title>
            <Meta name="description" content="Дізнайтеся більше про нашу команду, місію та цінності. Complex Studio - ваш надійний партнер у створенні сучасних веб-рішень." />
            <Meta property="og:title" content="Про нас - Complex Studio" />
            <Meta property="og:description" content="Дізнайтеся більше про нашу команду, місію та цінності. Complex Studio - ваш надійний партнер у створенні сучасних веб-рішень." />
        </Head>

        <!-- Header -->
        <Header />

        <main>
            <!-- Hero Section -->
            <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden pt-20">
                <!-- Background Elements -->
                <div class="absolute inset-0">
                    <!-- Animated gradient orbs -->
                    <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div class="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                    <!-- Floating particles -->
                    <div class="absolute inset-0">
                        <div
                            v-for="particle in particles"
                            :key="particle.id"
                            :class="particle.class"
                            :style="particle.style"
                            class="absolute pointer-events-none animate-float">
                            <Icon
                                :name="particle.icon"
                                class="w-4 h-4 opacity-60" />
                        </div>
                    </div>

                    <!-- Grid pattern -->
                    <div class="absolute inset-0 opacity-30">
                        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(229, 231, 235, 0.6) 1px, transparent 0); background-size: 40px 40px"></div>
                    </div>
                </div>

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div class="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
                        <!-- Left Content -->
                        <div class="lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in">
                            <!-- Breadcrumb -->
                            <nav class="mb-6">
                                <ol class="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                                    <li>
                                        <NuxtLink to="/" class="hover:text-blue-600 transition-colors">
                                            Головна
                                        </NuxtLink>
                                    </li>
                                    <li class="flex items-center">
                                        <Icon name="ic:round-chevron-right" class="w-4 h-4 mx-2" />
                                        <span class="text-gray-900 font-medium">Про нас</span>
                                    </li>
                                </ol>
                            </nav>

                            <!-- Badge -->
                            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300 animate-bounce-subtle">
                                <Icon name="ic:round-groups" class="w-4 h-4 mr-2 text-blue-600" />
                                #1 Веб-агентство України
                            </div>

                            <!-- Main Headline -->
                            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Ми створюємо
                                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> цифрове майбутнє </span>
                                вашого бізнесу
                            </h1>

                            <!-- Subtitle -->
                            <p class="text-xl text-gray-600 max-w-2xl leading-relaxed">
                                Complex Studio — команда досвідчених фахівців, що поєднує креативність, технічну експертизу та глибоке розуміння бізнесу для створення унікальних цифрових рішень
                            </p>

                            <!-- Stats -->
                            <div class="flex flex-wrap justify-center lg:justify-start gap-8 py-4">
                                <div
                                    v-for="stat in heroStats"
                                    :key="stat.label"
                                    class="text-center p-4 rounded-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                                    <div class="text-2xl font-bold text-gray-900">{{ stat.value }}</div>
                                    <div class="text-sm text-gray-600">{{ stat.label }}</div>
                                </div>
                            </div>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <PrimaryButton
                                    size="lg"
                                    icon="ic:round-rocket-launch">
                                    Розпочати проект
                                </PrimaryButton>
                                <SecondaryButton
                                    size="lg"
                                    icon="ic:round-groups"
                                    variant="ghost">
                                    Дізнатися більше
                                </SecondaryButton>
                            </div>
                        </div>

                        <!-- Right Content -->
                        <div class="lg:w-1/2 mt-12 lg:mt-0 relative animate-fade-in animation-delay-400">
                            <!-- Main Card -->
                            <div class="relative max-w-md mx-auto">
                                <!-- Floating Cards -->
                                <div class="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-4 text-white shadow-2xl animate-float z-10">
                                    <Icon name="ic:round-star" class="w-8 h-8 mb-2" />
                                    <div class="text-xs font-medium">150+ проектів</div>
                                </div>

                                <div class="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-4 text-white shadow-2xl animate-float animation-delay-1000 z-10">
                                    <Icon name="ic:round-verified" class="w-6 h-6 mb-2" />
                                    <div class="text-xs font-medium">5 років досвіду</div>
                                </div>

                                <div class="absolute -bottom-6 -left-6 w-36 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-4 text-white shadow-2xl animate-float animation-delay-2000 z-10">
                                    <Icon name="ic:round-trending-up" class="w-6 h-6 mb-1" />
                                    <div class="text-xs font-medium">98% задоволених клієнтів</div>
                                </div>

                                <!-- Main illustration -->
                                <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                                    <div class="relative text-center py-16">
                                        <Icon name="ic:round-business-center" class="w-24 h-24 text-gray-400 mx-auto mb-4" />
                                        <h3 class="text-xl font-bold text-gray-700 mb-2">Complex Studio</h3>
                                        <p class="text-gray-600 text-sm">Веб-студія повного циклу</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us Section - используем готовый компонент WhyUs -->
            <WhyUs />

            <!-- Our Story Section -->
            <section class="py-20 bg-white relative overflow-hidden">
                <!-- Background Elements -->
                <div class="absolute inset-0">
                    <!-- Floating particles -->
                    <div class="absolute inset-0">
                        <div
                            v-for="particle in storyParticles"
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
                    <div class="absolute top-10 right-10 w-64 h-64 bg-green-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div class="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                </div>

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <!-- Section Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-cyan-100 text-green-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                            <Icon name="ic:round-history" class="w-4 h-4 mr-2 text-green-600" />
                            Наша історія
                        </div>

                        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Від <span class="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">стартапу</span> до лідера ринку
                        </h2>

                        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Заснована у 2020 році, Complex Studio почала як амбітна ідея групи розробників, які мріяли змінити підхід до створення веб-продуктів в Україні
                        </p>
                    </div>

                    <!-- Story Content -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <!-- Left: Timeline -->
                        <div class="space-y-8 animate-slide-in-left">
                            <div class="space-y-6">
                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        2020
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900 mb-2">Заснування</h3>
                                        <p class="text-gray-600">
                                            Команда з 3 розробників вирішила створити студію, яка буде фокусуватися на якості та інноваціях
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        2021
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900 mb-2">Перші 50 проектів</h3>
                                        <p class="text-gray-600">
                                            Успішно реалізували проекти для стартапів та малого бізнесу, отримали перші позитивні відгуки
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        2023
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900 mb-2">Розширення команди</h3>
                                        <p class="text-gray-600">
                                            Команда виросла до 17 спеціалістів, відкрили напрямки дизайну та маркетингу
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        2024
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900 mb-2">Лідери ринку</h3>
                                        <p class="text-gray-600">
                                            Потрапили в топ-10 веб-студій України, реалізували понад 150 проектів
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right: Achievement Cards -->
                        <div class="space-y-6 animate-slide-in-right">
                            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                                <div class="absolute top-4 right-4 w-16 h-16 bg-blue-400/20 rounded-full animate-blob"></div>
                                <Icon name="ic:round-emoji-events" class="w-12 h-12 text-blue-600 mb-4" />
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Нагороди та визнання</h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li>• Топ-10 веб-студій України 2024</li>
                                    <li>• Awwwards Site of the Day (3 рази)</li>
                                    <li>• CSS Design Awards</li>
                                </ul>
                            </div>

                            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 relative overflow-hidden">
                                <div class="absolute top-4 right-4 w-16 h-16 bg-green-400/20 rounded-full animate-blob animation-delay-1000"></div>
                                <Icon name="ic:round-trending-up" class="w-12 h-12 text-green-600 mb-4" />
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Зростання та розвиток</h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li>• 400% зростання за останні 2 роки</li>
                                    <li>• Клієнти в 5+ країнах</li>
                                    <li>• 98% задоволених клієнтів</li>
                                </ul>
                            </div>

                            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                                <div class="absolute top-4 right-4 w-16 h-16 bg-purple-400/20 rounded-full animate-blob animation-delay-2000"></div>
                                <Icon name="ic:round-rocket-launch" class="w-12 h-12 text-purple-600 mb-4" />
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Технології майбутнього</h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li>• AI-інтеграції в проекти</li>
                                    <li>• Progressive Web Apps</li>
                                    <li>• Cloud-native рішення</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Stats Section -->
                    <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 relative overflow-hidden">
                        <!-- Background decoration -->
                        <div class="absolute inset-0">
                            <div class="absolute top-4 right-4 w-32 h-32 bg-blue-400/20 rounded-full animate-blob"></div>
                            <div class="absolute bottom-4 left-4 w-24 h-24 bg-purple-400/20 rounded-full animate-blob animation-delay-1000"></div>
                        </div>

                        <div class="relative">
                            <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">Наші досягнення в цифрах</h3>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-blue-600 mb-2">150+</div>
                                    <div class="text-sm text-gray-600">Реалізованих проектів</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-green-600 mb-2">17</div>
                                    <div class="text-sm text-gray-600">Спеціалістів в команді</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-purple-600 mb-2">5+</div>
                                    <div class="text-sm text-gray-600">Країн присутності</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                                    <div class="text-sm text-gray-600">Підтримка клієнтів</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Preview Section -->
            <Services />

            <!-- Steps Section - используем готовый компонент -->
            <Steps />

            <!-- Contact Section -->
            <Contact />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'
import Contact from '~/components/MainPage/Contact/Contact.vue'
import WhyUs from '~/components/MainPage/WhyUs/WhyUs.vue'
import Services from '~/components/MainPage/Services/Services.vue'
import Steps from '~/components/MainPage/Steps/Steps.vue'
import PrimaryButton from '~/components/UI/PrimaryButton.vue'
import SecondaryButton from '~/components/UI/SecondaryButton.vue'

// Hero stats data
const heroStats = [
    { value: '150+', label: 'Проектів' },
    { value: '5 років', label: 'Досвіду' },
    { value: '98%', label: 'Задоволених клієнтів' },
    { value: '17', label: 'Спеціалістів' }
]

// Floating particles for hero section
const particles = [
    {
        id: 1,
        icon: 'ic:round-code',
        class: 'text-blue-500',
        style: 'top: 20%; left: 15%; animation-delay: 0s;'
    },
    {
        id: 2,
        icon: 'ic:round-design-services',
        class: 'text-purple-500',
        style: 'top: 60%; left: 80%; animation-delay: 2s;'
    },
    {
        id: 3,
        icon: 'ic:round-trending-up',
        class: 'text-green-500',
        style: 'top: 40%; left: 70%; animation-delay: 4s;'
    },
    {
        id: 4,
        icon: 'ic:round-lightbulb',
        class: 'text-yellow-500',
        style: 'top: 70%; left: 25%; animation-delay: 1s;'
    },
    {
        id: 5,
        icon: 'ic:round-rocket-launch',
        class: 'text-orange-500',
        style: 'top: 30%; left: 60%; animation-delay: 3s;'
    }
]

// Story section particles
const storyParticles = [
    {
        id: 1,
        icon: 'ic:round-history',
        class: 'text-green-500',
        style: 'top: 15%; left: 10%; animation-delay: 0s;'
    },
    {
        id: 2,
        icon: 'ic:round-timeline',
        class: 'text-blue-500',
        style: 'top: 50%; left: 85%; animation-delay: 2s;'
    },
    {
        id: 3,
        icon: 'ic:round-star',
        class: 'text-purple-500',
        style: 'top: 80%; left: 20%; animation-delay: 4s;'
    },
    {
        id: 4,
        icon: 'ic:round-emoji-events',
        class: 'text-orange-500',
        style: 'top: 25%; left: 75%; animation-delay: 1s;'
    }
]
</script>

<style scoped>

@keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes bounce-subtle {
    0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
    40%, 43% { transform: translate3d(0, -8px, 0); }
    70% { transform: translate3d(0, -4px, 0); }
    90% { transform: translate3d(0, -2px, 0); }
}

/* Animation classes */
.animate-blob {
    animation: blob 7s infinite;
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out forwards;
}

.animate-bounce-subtle {
    animation: bounce-subtle 2s infinite;
}

/* Animation delays */
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

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>