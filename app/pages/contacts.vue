<template>
    <div>
        <!-- Page Head -->
        <Head>
            <Title>Контакти - Complex Studio | Зв'яжіться з нами</Title>
            <Meta name="description" content="Зв'яжіться з Complex Studio для обговорення вашого проекту. Телефон, email, адреса офісу та форма зворотного зв'язку." />
            <Meta property="og:title" content="Контакти - Complex Studio" />
            <Meta property="og:description" content="Зв'яжіться з Complex Studio для обговорення вашого проекту. Телефон, email, адреса офісу та форма зворотного зв'язку." />
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
                                        <span class="text-gray-900 font-medium">Контакти</span>
                                    </li>
                                </ol>
                            </nav>

                            <!-- Badge -->
                            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300 animate-bounce-subtle">
                                <Icon name="ic:round-contact-mail" class="w-4 h-4 mr-2 text-blue-600" />
                                Зв'яжіться з нами
                            </div>

                            <!-- Main Headline -->
                            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Готові почати
                                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> ваш проект? </span>
                            </h1>

                            <!-- Subtitle -->
                            <p class="text-xl text-gray-600 max-w-2xl leading-relaxed">
                                Розкажіть про свою ідею, і ми створимо для вас ідеальне цифрове рішення. Отримайте безкоштовну консультацію вже сьогодні
                            </p>

                            <!-- Quick Contact Info -->
                            <div class="flex flex-wrap justify-center lg:justify-start gap-6 py-4">
                                <div class="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/50">
                                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Icon name="ic:round-phone" class="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-600">Телефон</div>
                                        <div class="font-semibold text-gray-900">+38 (067) 123-45-67</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/50">
                                    <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <Icon name="ic:round-email" class="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-600">Email</div>
                                        <div class="font-semibold text-gray-900">hello@complex.studio</div>
                                    </div>
                                </div>
                            </div>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <PrimaryButton
                                    size="lg"
                                    icon="ic:round-call">
                                    Зателефонувати
                                </PrimaryButton>
                                <SecondaryButton
                                    size="lg"
                                    icon="ic:round-arrow-downward"
                                    variant="ghost">
                                    Залишити заявку
                                </SecondaryButton>
                            </div>
                        </div>

                        <!-- Right Content -->
                        <div class="lg:w-1/2 mt-12 lg:mt-0 relative animate-fade-in animation-delay-400">
                            <!-- Contact Methods Cards -->
                            <div class="relative max-w-md mx-auto">
                                <!-- Floating Contact Cards -->
                                <div class="absolute -top-8 -left-8 w-64 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-4 text-white shadow-2xl animate-float z-10">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <Icon name="ic:round-schedule" class="w-6 h-6" />
                                        <span class="font-medium">Графік роботи</span>
                                    </div>
                                    <p class="text-sm opacity-90">Пн-Пт: 9:00-18:00</p>
                                    <p class="text-sm opacity-90">Сб-Нд: За домовленістю</p>
                                </div>

                                <div class="absolute -top-4 -right-4 w-56 h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-4 text-white shadow-2xl animate-float animation-delay-1000 z-10">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <Icon name="ic:round-location-on" class="w-6 h-6" />
                                        <span class="font-medium">Наш офіс</span>
                                    </div>
                                    <p class="text-sm opacity-90">м. Київ, вул. Хрещатик, 22</p>
                                    <p class="text-sm opacity-90">БЦ "Plaza", 15 поверх</p>
                                </div>

                                <div class="absolute -bottom-6 -left-6 w-60 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-4 text-white shadow-2xl animate-float animation-delay-2000 z-10">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <Icon name="ic:round-support-agent" class="w-6 h-6" />
                                        <span class="font-medium">Підтримка 24/7</span>
                                    </div>
                                    <p class="text-sm opacity-90">Онлайн-чат та телефон</p>
                                </div>

                                <!-- Main illustration -->
                                <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                                    <div class="relative text-center py-16">
                                        <Icon name="ic:round-contact-support" class="w-24 h-24 text-gray-400 mx-auto mb-4" />
                                        <h3 class="text-xl font-bold text-gray-700 mb-2">Завжди на зв'язку</h3>
                                        <p class="text-gray-600 text-sm">Обираюте зручний спосіб зв'язку</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Information Section -->
            <section class="py-20 bg-white relative overflow-hidden">
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
                    <div class="absolute top-32 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div class="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

                    <!-- Grid pattern -->
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0); background-size: 40px 40px"></div>
                    </div>
                </div>

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <!-- Section Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-cyan-100 text-green-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                            <Icon name="ic:round-info" class="w-4 h-4 mr-2 text-green-600" />
                            Контактна інформація
                        </div>

                        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Способи
                            <span class="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient block sm:inline">
                                зв'язку з нами
                            </span>
                        </h2>

                        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Оберіть найзручніший для вас спосіб зв'язку. Ми завжди готові відповісти на ваші запитання та обговорити деталі проекту
                        </p>
                    </div>

                    <!-- Contact Methods Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <!-- Phone -->
                        <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50 animate-fade-in-up">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon name="ic:round-phone" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Телефон</h3>
                            <div class="space-y-2 text-gray-600">
                                <p class="font-medium">+38 (067) 123-45-67</p>
                                <p class="font-medium">+38 (095) 987-65-43</p>
                                <p class="text-sm">Пн-Пт: 9:00-18:00</p>
                            </div>
                            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl bg-gradient-to-br from-blue-500 to-blue-600"></div>
                        </div>

                        <!-- Email -->
                        <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50 animate-fade-in-up animation-delay-200">
                            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon name="ic:round-email" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Email</h3>
                            <div class="space-y-2 text-gray-600">
                                <p class="font-medium">hello@complex.studio</p>
                                <p class="font-medium">info@complex.studio</p>
                                <p class="text-sm">Відповідь протягом 2 годин</p>
                            </div>
                            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl bg-gradient-to-br from-green-500 to-green-600"></div>
                        </div>

                        <!-- Address -->
                        <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50 animate-fade-in-up animation-delay-400">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon name="ic:round-location-on" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Адреса офісу</h3>
                            <div class="space-y-2 text-gray-600">
                                <p class="font-medium">м. Київ, вул. Хрещатик, 22</p>
                                <p class="font-medium">БЦ "Plaza", 15 поверх</p>
                                <p class="text-sm">Офіс 1501</p>
                            </div>
                            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl bg-gradient-to-br from-purple-500 to-purple-600"></div>
                        </div>

                        <!-- Social Media -->
                        <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50 animate-fade-in-up animation-delay-600">
                            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon name="ic:round-share" class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Соціальні мережі</h3>
                            <div class="space-y-2">
                                <div class="flex items-center space-x-2 text-gray-600">
                                    <Icon name="ic:round-telegram" class="w-4 h-4 text-blue-500" />
                                    <span class="text-sm">@complex_studio</span>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-600">
                                    <Icon name="ic:round-facebook" class="w-4 h-4 text-blue-600" />
                                    <span class="text-sm">Complex Studio</span>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-600">
                                    <Icon name="ic:round-instagram" class="w-4 h-4 text-pink-500" />
                                    <span class="text-sm">@complex.studio</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl bg-gradient-to-br from-orange-500 to-orange-600"></div>
                        </div>
                    </div>

                    <!-- Map Section -->
                    <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg">
                        <div class="text-center mb-8">
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">Як нас знайти</h3>
                            <p class="text-gray-600">Наш офіс розташований в самому центрі Києва, поруч з метро "Хрещатик"</p>
                        </div>
                        
                        <!-- Map placeholder -->
                        <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                            <div class="relative text-center">
                                <Icon name="ic:round-map" class="w-16 h-16 text-blue-500 mx-auto mb-4" />
                                <h4 class="text-lg font-bold text-gray-700 mb-2">Інтерактивна карта</h4>
                                <p class="text-gray-600 text-sm mb-4">м. Київ, вул. Хрещатик, 22</p>
                                <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                    Відкрити в Google Maps
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <!-- Section Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                            <Icon name="ic:round-help" class="w-4 h-4 mr-2 text-orange-600" />
                            Часті питання
                        </div>

                        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Відповіді на
                            <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient block sm:inline">
                                популярні питання
                            </span>
                        </h2>

                        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Зібрали найчастіші запитання від наших клієнтів. Не знайшли відповідь? Зв'яжіться з нами!
                        </p>
                    </div>

                    <!-- FAQ Grid -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div
                            v-for="faq in faqs"
                            :key="faq.id"
                            class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-start space-x-4">
                                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Icon name="ic:round-help" class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 mb-3">{{ faq.question }}</h3>
                                    <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Form Section - используем готовый компонент -->
            <Contact />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Meta data
useHead({
    title: 'Контакти - Complex Studio | Зв\'яжіться з нами',
    meta: [
        { name: 'description', content: 'Зв\'яжіться з Complex Studio для обговорення вашого проекту. Телефон, email, адреса офісу та форма зворотного зв\'язку.' },
        { property: 'og:title', content: 'Контакти - Complex Studio' },
        { property: 'og:description', content: 'Зв\'яжіться з Complex Studio для обговорення вашого проекту. Телефон, email, адреса офісу та форма зворотного зв\'язку.' }
    ]
})

// Floating particles for hero section
const particles = ref([
    {
        id: 1,
        icon: 'ic:round-phone',
        class: 'text-blue-400',
        style: { top: '20%', left: '10%', animationDelay: '0s' }
    },
    {
        id: 2,
        icon: 'ic:round-email',
        class: 'text-green-400',
        style: { top: '30%', right: '15%', animationDelay: '2s' }
    },
    {
        id: 3,
        icon: 'ic:round-location-on',
        class: 'text-purple-400',
        style: { bottom: '40%', left: '20%', animationDelay: '4s' }
    },
    {
        id: 4,
        icon: 'ic:round-chat',
        class: 'text-orange-400',
        style: { top: '50%', right: '10%', animationDelay: '1s' }
    },
    {
        id: 5,
        icon: 'ic:round-support-agent',
        class: 'text-pink-400',
        style: { bottom: '30%', right: '25%', animationDelay: '3s' }
    },
    {
        id: 6,
        icon: 'ic:round-contact-support',
        class: 'text-cyan-400',
        style: { top: '60%', left: '15%', animationDelay: '5s' }
    }
])

// Background particles for contact section
const backgroundParticles = ref([
    {
        id: 1,
        icon: 'ic:round-phone',
        class: 'text-blue-300',
        style: { top: '10%', left: '15%', animationDelay: '0s' }
    },
    {
        id: 2,
        icon: 'ic:round-email',
        class: 'text-green-300',
        style: { top: '20%', right: '20%', animationDelay: '2s' }
    },
    {
        id: 3,
        icon: 'ic:round-location-on',
        class: 'text-purple-300',
        style: { bottom: '30%', left: '10%', animationDelay: '4s' }
    },
    {
        id: 4,
        icon: 'ic:round-schedule',
        class: 'text-orange-300',
        style: { top: '40%', right: '10%', animationDelay: '1s' }
    },
    {
        id: 5,
        icon: 'ic:round-business',
        class: 'text-red-300',
        style: { bottom: '20%', right: '15%', animationDelay: '3s' }
    },
    {
        id: 6,
        icon: 'ic:round-map',
        class: 'text-indigo-300',
        style: { top: '70%', left: '25%', animationDelay: '6s' }
    },
    {
        id: 7,
        icon: 'ic:round-share',
        class: 'text-teal-300',
        style: { bottom: '50%', right: '30%', animationDelay: '8s' }
    },
    {
        id: 8,
        icon: 'ic:round-connect-without-contact',
        class: 'text-yellow-300',
        style: { top: '30%', left: '5%', animationDelay: '10s' }
    }
])

// FAQ data
const faqs = ref([
    {
        id: 1,
        question: 'Скільки коштує розробка веб-сайту?',
        answer: 'Вартість залежить від складності проекту, функціоналу та дизайну. Мінімальна вартість лендингу від 15 000 грн, корпоративного сайту - від 30 000 грн. Надаємо детальну оцінку після технічного завдання.'
    },
    {
        id: 2,
        question: 'Скільки часу займає розробка?',
        answer: 'Терміни розробки залежать від складності: лендинг - 1-2 тижні, корпоративний сайт - 3-6 тижнів, інтернет-магазин - 6-12 тижнів. Точні терміни обговорюємо індивідуально.'
    },
    {
        id: 3,
        question: 'Чи надаєте підтримку після запуску?',
        answer: 'Так, надаємо техпідтримку та супровід сайтів. Перший місяць підтримки безкоштовно, далі - від 2000 грн/місяць залежно від обсягу робіт.'
    },
    {
        id: 4,
        question: 'Які технології використовуєте?',
        answer: 'Використовуємо сучасні технології: Vue.js, Nuxt.js, React, Next.js для фронтенду; Node.js, Laravel, Django для бекенду. Підбираємо стек під конкретні потреби проекту.'
    },
    {
        id: 5,
        question: 'Чи робите мобільну версію?',
        answer: 'Усі наші проекти адаптивні та оптимізовані для мобільних пристроїв. Тестуємо на різних екранах та браузерах для забезпечення найкращого користувацького досвіду.'
    },
    {
        id: 6,
        question: 'Як відбувається процес роботи?',
        answer: 'Робота включає: аналіз вимог, створення технічного завдання, дизайн макетів, розробку, тестування та запуск. Тримаємо постійний зв\'язок та надаємо звіти на кожному етапі.'
    }
])
</script>

<style scoped>
@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }
    33% {
        transform: translate(30px, -50px) scale(1.1);
    }
    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes gradient {
    0%, 100% {
        background-size: 200% 200%;
        background-position: left center;
    }
    50% {
        background-size: 200% 200%;
        background-position: right center;
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

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce-subtle {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
}

.animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
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

.animation-delay-1000 {
    animation-delay: 1s;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

/* Gradient text animation */
.bg-clip-text {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Backdrop blur fallback */
@supports not (backdrop-filter: blur(10px)) {
    .backdrop-blur-sm {
        background-color: rgba(255, 255, 255, 0.9);
    }
}

/* Hover effects */
.group:hover .absolute {
    transition: all 0.3s ease;
}

/* Responsive animations */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>