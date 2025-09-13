<template>
    <div>
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
                                        <Icon name="ic:round-phone" class="w-5 h-5 text-white" size="20"/>
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-600">Телефон</div>
                                        <div class="font-semibold text-gray-900">+38 (067) 123-45-67</div>
                                    </div>
                                </div>

                                <div class="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/50">
                                    <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <Icon name="ic:round-email" class="w-5 h-5 text-white" size="20"/>
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
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Phone -->
                        <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50 animate-fade-in-up">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon name="ic:round-phone" class="w-8 h-8 text-white" size="32" />
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
                                <Icon name="ic:round-email" class="w-8 h-8 text-white" size="32"/>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Email</h3>
                            <div class="space-y-2 text-gray-600">
                                <p class="font-medium">hello@complex.studio</p>
                                <p class="font-medium">info@complex.studio</p>
                                <p class="text-sm">Відповідь протягом 2 годин</p>
                            </div>
                            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl bg-gradient-to-br from-green-500 to-green-600"></div>
                        </div>

                        <!-- Social Media -->
                        <div class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50 animate-fade-in-up animation-delay-600">
                            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon name="ic:round-share" class="w-8 h-8 text-white" size="32" />
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
                </div>
            </section>

            <!-- FAQ Section -->

            <FaqSection :faqs="faqs" />

            <!-- Contact Form Section - используем готовый компонент -->
            <Contact />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import FaqSection from '~/components/UI/FaqSection/FaqSection.vue'
import Contact from '~/components/MainPage/Contact/Contact.vue'
import PrimaryButton from '~/components/UI/PrimaryButton.vue'
import SecondaryButton from '~/components/UI/SecondaryButton.vue'

// Meta data
useHead({
    title: 'Контакти - Complex Studio | Зв\'яжіться з нами',
    meta: [
        { name: 'description', content: 'Зв\'яжіться з Complex Studio для обговорення вашого проекту. Телефон, email, адреса офісу та форма зворотного зв\'язку.' },
        { property: 'og:title', content: 'Контакти - Complex Studio' },
        { property: 'og:description', content: 'Зв\'яжіться з Complex Studio для обговорення вашого проекту. Телефон, email, адреса офісу та форма зворотного зв\'язку.' }
    ]
})
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
</style>
