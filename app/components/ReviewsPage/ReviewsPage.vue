<template>
    <div>
        <!-- Header -->
        <Header />

        <main>
            <!-- Hero Section -->
            <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden pt-20">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div class="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
                        <!-- Left Content -->
                        <div class="lg:w-1/2 text-center lg:text-left space-y-8">
                            <!-- Breadcrumb -->
                            <nav class="mb-6">
                                <ol class="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                                    <li>
                                        <NuxtLink
                                            to="/"
                                            class="hover:text-blue-600 transition-colors">
                                            {{ $t("home") }}
                                        </NuxtLink>
                                    </li>
                                    <li class="flex items-center">
                                        <Icon
                                            name="ic:round-chevron-right"
                                            class="w-4 h-4 mx-2" />
                                        <span class="text-gray-900 font-medium">{{ $t("reviewsPage.reviews") }}</span>
                                    </li>
                                </ol>
                            </nav>

                            <!-- Badge -->
                            <div
                                class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300">
                                <Icon
                                    name="ic:round-star"
                                    class="w-4 h-4 mr-2 text-blue-600"
                                    size="16" />
                                {{ $t("reviewsPage.badgeTitle") }}
                            </div>

                            <!-- Main Headline -->
                            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {{ $t("reviewsPage.title") }}
                                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {{ $t("reviewsPage.titleHighlight") }}
                                </span>
                                {{ $t("reviewsPage.titleHighlightPart") }}
                            </h1>

                            <!-- Subtitle -->
                            <p class="text-xl text-gray-600 max-w-2xl leading-relaxed">
                                {{ $t("reviewsPage.descr") }}
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
                                    size="sm"
                                    icon="ic:round-rate-review">
                                    Залишити відгук
                                </PrimaryButton>
                                <SecondaryButton
                                    size="sm"
                                    icon="ic:round-arrow-downward"
                                    variant="ghost">
                                    Читати відгуки
                                </SecondaryButton>
                            </div>
                        </div>

                        <!-- Right Content -->
                        <div class="lg:w-1/2 mt-12 lg:mt-0 relative animate-fade-in animation-delay-400">
                            <!-- Reviews Preview Cards -->
                            <div class="relative max-w-md mx-auto">
                                <!-- Floating Review Cards -->
                                <div
                                    class="absolute -top-8 -left-8 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-4 text-white shadow-2xl animate-float z-10">
                                    <div class="flex items-start justify-between mb-2">
                                        <div class="flex text-yellow-300">
                                            <Icon
                                                v-for="n in 5"
                                                :key="n"
                                                name="ic:round-star"
                                                class="w-4 h-4" />
                                        </div>
                                        <Icon
                                            name="ic:round-format-quote"
                                            class="w-6 h-6 opacity-50" />
                                    </div>
                                    <p class="text-xs font-medium mb-2">"Неймовірна якість та швидкість!"</p>
                                    <p class="text-xs opacity-80">— Олександр К.</p>
                                </div>

                                <div
                                    class="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-4 text-white shadow-2xl animate-float animation-delay-1000 z-10">
                                    <div class="flex items-start justify-between mb-2">
                                        <div class="flex text-yellow-300">
                                            <Icon
                                                v-for="n in 5"
                                                :key="n"
                                                name="ic:round-star"
                                                class="w-4 h-4" />
                                        </div>
                                        <Icon
                                            name="ic:round-format-quote"
                                            class="w-6 h-6 opacity-50" />
                                    </div>
                                    <p class="text-xs font-medium mb-2">"Професіонали своєї справи"</p>
                                    <p class="text-xs opacity-80">— Марія В.</p>
                                </div>

                                <div
                                    class="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-4 text-white shadow-2xl animate-float animation-delay-2000 z-10">
                                    <div class="flex items-start justify-between mb-2">
                                        <div class="flex text-yellow-300">
                                            <Icon
                                                v-for="n in 5"
                                                :key="n"
                                                name="ic:round-star"
                                                class="w-4 h-4" />
                                        </div>
                                        <Icon
                                            name="ic:round-format-quote"
                                            class="w-6 h-6 opacity-50" />
                                    </div>
                                    <p class="text-xs font-medium mb-2">"Результат перевершив очікування"</p>
                                    <p class="text-xs opacity-80">— Дмитро Л.</p>
                                </div>

                                <!-- Main illustration -->
                                <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                                    <div class="relative text-center py-16">
                                        <Icon
                                            name="ic:round-reviews"
                                            class="w-24 h-24 text-gray-400 mx-auto mb-4" />
                                        <h3 class="text-xl font-bold text-gray-700 mb-2">150+ відгуків</h3>
                                        <p class="text-gray-600 text-sm">4.9/5 середня оцінка</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Reviews Filter Section -->
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
                    <div
                        class="absolute top-32 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div
                        class="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

                    <!-- Grid pattern -->
                    <div class="absolute inset-0 opacity-10">
                        <div
                            class="absolute inset-0"
                            style="
                                background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0);
                                background-size: 40px 40px;
                            "></div>
                    </div>
                </div>

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <!-- Section Header -->
                    <div class="text-center mb-16 animate-fade-in">
                        <div
                            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-cyan-100 text-green-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                            <Icon
                                name="ic:round-thumb-up"
                                class="w-4 h-4 mr-2 text-green-600" />
                            Що кажуть клієнти
                        </div>

                        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Відгуки про нашу роботу
                            <span
                                class="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient block sm:inline">
                                від реальних клієнтів
                            </span>
                        </h2>

                        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Кожен відгук — це підтвердження нашої експертизи та професіоналізму. Читайте реальні історії успіху наших клієнтів
                        </p>
                    </div>

                    <!-- Filter Tabs -->
                    <div class="flex flex-wrap justify-center gap-2 mb-12">
                        <button
                            v-for="filter in filters"
                            :key="filter.id"
                            @click="activeFilter = filter.id"
                            :class="[
                                'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2',
                                activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200'
                            ]">
                            <Icon
                                :name="filter.icon"
                                class="w-4 h-4" />
                            {{ filter.name }}
                            <span class="text-xs opacity-75">({{ filter.count }})</span>
                        </button>
                    </div>

                    <!-- Reviews Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <ReviewsItem
                            v-for="review in filteredReviews"
                            :review="review"
                            :key="review.id" />
                    </div>

                    <!-- Load More Button -->
                    <div class="text-center">
                        <button
                            @click="loadMoreReviews"
                            :disabled="isLoading"
                            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50">
                            <Icon
                                v-if="!isLoading"
                                name="ic:round-expand-more"
                                class="w-5 h-5" />
                            <Icon
                                v-else
                                name="ic:round-hourglass-empty"
                                class="w-5 h-5 animate-spin" />
                            {{ isLoading ? "Завантаження..." : "Показати більше відгуків" }}
                        </button>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
                <!-- Background Elements -->
                <div class="absolute inset-0">
                    <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-blob"></div>
                    <div class="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-blob animation-delay-2000"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center text-white">
                    <div class="max-w-4xl mx-auto">
                        <h2 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                            Готові стати частиною наших
                            <span class="text-yellow-300"> історій успіху? </span>
                        </h2>

                        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                            Приєднайтесь до сотні задоволених клієнтів, які довірили нам свій бізнес і отримали результат, що перевершив очікування
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                class="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                                <Icon
                                    name="ic:round-rocket-launch"
                                    class="w-5 h-5" />
                                Розпочати проект
                            </button>
                            <button
                                class="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                                <Icon
                                    name="ic:round-rate-review"
                                    class="w-5 h-5" />
                                Залишити відгук
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <Contact />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header/Header.vue";
import Footer from "~/components/Footer/Footer.vue";
import Contact from "~/components/MainPage/Contact/Contact.vue";
import PrimaryButton from "~/components/UI/PrimaryButton.vue";
import SecondaryButton from "~/components/UI/SecondaryButton.vue";
import ReviewsItem from "~/components/ReviewsPage/ReviewsItem/ReviewsItem.vue";
import type { IReview } from "~/interface";

// Hero stats data
const heroStats = [
    { value: "4.9/5", label: "Середня оцінка" },
    { value: "150+", label: "Відгуків" },
    { value: "98%", label: "Рекомендують" },
    { value: "100%", label: "Задоволених" }
];

// Background particles for reviews section
const backgroundParticles = [
    {
        id: 1,
        icon: "ic:round-star",
        class: "text-yellow-500",
        style: "top: 10%; left: 5%; animation-delay: 0s;"
    },
    {
        id: 2,
        icon: "ic:round-thumb-up",
        class: "text-green-500",
        style: "top: 20%; left: 90%; animation-delay: 1s;"
    },
    {
        id: 3,
        icon: "ic:round-favorite",
        class: "text-red-500",
        style: "top: 70%; left: 10%; animation-delay: 2s;"
    },
    {
        id: 4,
        icon: "ic:round-reviews",
        class: "text-blue-500",
        style: "top: 80%; left: 85%; animation-delay: 3s;"
    },
    {
        id: 5,
        icon: "ic:round-emoji-events",
        class: "text-orange-500",
        style: "top: 50%; left: 95%; animation-delay: 4s;"
    }
];

// Filter categories
const filters = [
    { id: "all", name: "Всі відгуки", icon: "ic:round-list", count: 47 },
    { id: "websites", name: "Веб-сайти", icon: "ic:round-web", count: 23 },
    { id: "ecommerce", name: "Інтернет-магазини", icon: "ic:round-shopping-cart", count: 12 },
    { id: "mobile", name: "Мобільні додатки", icon: "ic:round-phone-android", count: 8 },
    { id: "design", name: "Дизайн", icon: "ic:round-palette", count: 4 }
];

// Active filter
const activeFilter = ref("all");

// Loading state
const isLoading = ref(false);

// Reviews data
const allReviews: IReview[] = [
    {
        id: 1,
        author: "Олександр Коваленко",
        position: "CEO",
        company: "TechStart",
        rating: 5,
        content:
            "Команда Complex Studio створила для нас неймовірний сайт. Якість виконання на найвищому рівні, всі дедлайни дотримані. Продажі через сайт виросли на 300%!",
        projectType: "Корпоративний сайт",
        projectIcon: "ic:round-web",
        date: "2 місяці тому",
        category: "websites"
    },
    {
        id: 2,
        author: "Марія Василенко",
        position: "Маркетинг-директор",
        company: "BeautyShop",
        rating: 5,
        content: "Професіонали своєї справи! Створили сучасний інтернет-магазин з усіма необхідними функціями. Дуже задоволена співпрацею та результатом.",
        projectType: "Інтернет-магазин",
        projectIcon: "ic:round-shopping-cart",
        date: "1 місяць тому",
        category: "ecommerce"
    },
    {
        id: 3,
        author: "Дмитро Лисенко",
        position: "Засновник",
        company: "FitLife",
        rating: 5,
        content: "Результат перевершив усі наші очікування. Мобільний додаток працює бездоганно, користувачі залишають відмінні відгуки. Рекомендую!",
        projectType: "Мобільний додаток",
        projectIcon: "ic:round-phone-android",
        date: "3 тижні тому",
        category: "mobile"
    },
    {
        id: 4,
        author: "Анна Петренко",
        position: "Власник",
        company: "CaféAroma",
        rating: 5,
        content: "Дизайн просто вражає! Сайт виглядає стильно та сучасно. Клієнти часто хвалять зручність та красу нашого сайту.",
        projectType: "Ресторанний сайт",
        projectIcon: "ic:round-restaurant",
        date: "1 тиждень тому",
        category: "websites"
    },
    {
        id: 5,
        author: "Сергій Мельник",
        position: "IT-директор",
        company: "LogiCorp",
        rating: 5,
        content: "Технічно складний проект був реалізований на найвищому рівні. Інтеграції працюють ідеально, продуктивність сайту вражає.",
        projectType: "Корпоративна платформа",
        projectIcon: "ic:round-business",
        date: "2 тижні тому",
        category: "websites"
    },
    {
        id: 6,
        author: "Олена Шевченко",
        position: "Директор",
        company: "EcoStore",
        rating: 5,
        content: "Неймовірна команда! Створили екологічний інтернет-магазин, який повністю відображає наші цінності. Продажі зросли в рази!",
        projectType: "Інтернет-магазин",
        projectIcon: "ic:round-shopping-cart",
        date: "1 місяць тому",
        category: "ecommerce"
    },
    {
        id: 7,
        author: "Андрій Іваненко",
        position: "Засновник",
        company: "SportClub",
        rating: 5,
        content: "Мобільний додаток для фітнес-клубу працює бездоганно. Члени клубу активно користуються всіма функціями. Дякую за якісну роботу!",
        projectType: "Фітнес додаток",
        projectIcon: "ic:round-fitness-center",
        date: "2 місяці тому",
        category: "mobile"
    },
    {
        id: 8,
        author: "Тетяна Коваль",
        position: "Власник",
        company: "ArtStudio",
        rating: 5,
        content: "Дизайн портфоліо просто захоплює! Кожна деталь продумана до дрібниць. Отримую набагато більше замовлень завдяки новому сайту.",
        projectType: "Портфоліо дизайнера",
        projectIcon: "ic:round-palette",
        date: "3 тижні тому",
        category: "design"
    },
    {
        id: 9,
        author: "Віктор Григоренко",
        position: "CEO",
        company: "MedCenter",
        rating: 5,
        content: "Сайт медичного центру виконаний на найвищому рівні. Зручна система запису, інформативність, швидкість завантаження - все ідеально!",
        projectType: "Медичний сайт",
        projectIcon: "ic:round-local-hospital",
        date: "1 місяць тому",
        category: "websites"
    }
];

// Computed property for filtered reviews
const filteredReviews = computed(() => {
    if (activeFilter.value === "all") {
        return allReviews;
    }
    return allReviews.filter((review) => review.category === activeFilter.value);
});

// Load more reviews function
const loadMoreReviews = () => {
    isLoading.value = true;

    // Simulate loading delay
    setTimeout(() => {
        isLoading.value = false;
        // Here you would typically load more reviews from API
    }, 1500);
};
</script>
