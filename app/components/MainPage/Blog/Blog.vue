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
                        name="ic:round-article"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    Наш блог
                </div>

                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Корисні статті про
                    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"> веб-розробку </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Діліися досвідом, трендами та практичними порадами з світу веб-розробки, дизайну та цифрового маркетингу
                </p>
            </div>

            <!-- Filter Tabs -->
            <div class="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in">
                <button
                    v-for="category in blogCategories"
                    :key="category.id"
                    @click="activeCategory = category.id"
                    :class="[
                        'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2',
                        activeCategory === category.id
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                            : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200'
                    ]">
                    <Icon
                        :name="category.icon"
                        class="w-4 h-4" />
                    {{ category.name }}
                    <span class="text-xs opacity-75">({{ category.count }})</span>
                </button>
            </div>

            <!-- Blog Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<Article
					v-for="(post, index) in filteredPosts"
					:key="post.id"
					:post="post"
					:index="index" />
			</div>

            <!-- Load More Section -->
            <div
                v-if="hasMorePosts"
                class="text-center mb-16">
                <button
                    @click="loadMorePosts"
                    :disabled="isLoading"
                    class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50">
                    <Icon
                        v-if="!isLoading"
                        name="ic:round-expand-more"
                        class="w-5 h-5" />
                    <Icon
                        v-else
                        name="ic:round-refresh"
                        class="w-5 h-5 animate-spin" />
                    {{ isLoading ? "Завантаження..." : "Показати більше статей" }}
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { IBlogPost } from "~/interface";
import Article from "./Article/Article.vue";

const activeCategory = ref("all");
const isLoading = ref(false);
const currentPage = ref(1);
const postsPerPage = 9;

const blogCategories = [
    { id: "all", name: "Всі статті", icon: "ic:round-apps", count: 24 },
    { id: "webdev", name: "Веб-розробка", icon: "ic:round-code", count: 8 },
    { id: "design", name: "Дизайн", icon: "ic:round-palette", count: 6 },
    { id: "seo", name: "SEO", icon: "ic:round-trending-up", count: 4 },
    { id: "marketing", name: "Маркетинг", icon: "ic:round-campaign", count: 3 },
    { id: "trends", name: "Тренди", icon: "ic:round-whatshot", count: 3 }
];

const blogPosts: IBlogPost[] = [
    {
        id: 1,
        slug: '10-web-design-trends-2024',
        title: "10 головних трендів веб-дизайну у 2024 році",
        excerpt: "Дізнайтеся про найсучасніші тенденції у веб-дизайні, які будуть домінувати цього року. Від нейморфізму до темних тем.",
        category: "Дизайн",
        author: "Олександр К.",
        date: "15 лют 2024",
        readTime: 8,
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
        tags: ["дизайн", "тренди", "ui/ux"],
        views: "2.4k",
        likes: 89,
        isPopular: true
    },
    {
        id: 2,
        slug: 'vue-js-3-complete-guide',
        title: "Vue.js 3: Повний гід для початківців",
        excerpt: "Вивчіть основи Vue.js 3 з практичними прикладами. Composition API, реактивність та створення сучасних додатків.",
        category: "Веб-розробка",
        author: "Марія Т.",
        date: "12 лют 2024",
        readTime: 12,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        tags: ["vue.js", "javascript", "frontend"],
        views: "1.8k",
        likes: 67,
        isPopular: false
    },
    {
        id: 3,
        slug: 'seo-strategy-modern-websites',
        title: "SEO стратегія для сучасних сайтів",
        excerpt: "Ефективні методи просування сайтів у 2024. Core Web Vitals, технічне SEO та контент-маркетинг.",
        category: "SEO",
        author: "Ігор П.",
        date: "10 лют 2024",
        readTime: 6,
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop",
        tags: ["seo", "маркетинг", "аналітика"],
        views: "3.1k",
        likes: 124,
        isPopular: true
    },
    {
        id: 4,
        slug: 'accessibility-web-design',
        title: "Доступність у веб-дизайні: практичний підхід",
        excerpt: "Як зробити ваш сайт доступним для всіх користувачів. ARIA, семантичний HTML та тестування доступності.",
        category: "Дизайн",
        author: "Анна М.",
        date: "8 лют 2024",
        readTime: 10,
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
        tags: ["accessibility", "ux", "web-standards"],
        views: "1.2k",
        likes: 45,
        isPopular: false
    },
    {
        id: 5,
        slug: 'typescript-react-developers',
        title: "TypeScript для React розробників",
        excerpt: "Переваги використання TypeScript у React проектах. Типізація компонентів, хуків та кастомних типів.",
        category: "Веб-розробка",
        author: "Дмитро Л.",
        date: "5 лют 2024",
        readTime: 14,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        tags: ["typescript", "react", "javascript"],
        views: "2.7k",
        likes: 98,
        isPopular: true
    },
    {
        id: 6,
        slug: 'color-psychology-web-design',
        title: "Психологія кольорів у веб-дизайні",
        excerpt: "Як кольори впливають на поведінку користувачів та конверсію. Теорія кольорів та практичні поради.",
        category: "Дизайн",
        author: "Софія В.",
        date: "3 лют 2024",
        readTime: 7,
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop",
        tags: ["кольори", "психологія", "ui"],
        views: "1.9k",
        likes: 73,
        isPopular: false
    },
    {
        id: 7,
        slug: 'web-performance-optimization',
        title: "Оптимізація продуктивності веб-додатків",
        excerpt: "Методи покращення швидкості завантаження та відгуку сайтів. Lazy loading, кешування та оптимізація зображень.",
        category: "Веб-розробка",
        author: "Максим Р.",
        date: "1 лют 2024",
        readTime: 11,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        tags: ["performance", "optimization", "web-vitals"],
        views: "2.2k",
        likes: 85,
        isPopular: false
    },
    {
        id: 8,
        slug: 'content-marketing-it-companies',
        title: "Контент-маркетинг для IT компаній",
        excerpt: "Стратегії створення та просування контенту у сфері технологій. Від блогінгу до соціальних мереж.",
        category: "Маркетинг",
        author: "Катерина С.",
        date: "29 січ 2024",
        readTime: 9,
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop",
        tags: ["маркетинг", "контент", "smm"],
        views: "1.5k",
        likes: 56,
        isPopular: false
    },
    {
        id: 9,
        slug: 'mobile-ux-best-practices',
        title: "Мобільний UX: найкращі практики",
        excerpt: "Особливості проектування інтерфейсів для мобільних пристроїв. Touch-friendly дизайн та навігація.",
        category: "Дизайн",
        author: "Віталій К.",
        date: "27 січ 2024",
        readTime: 8,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        tags: ["mobile", "ux", "responsive"],
        views: "1.7k",
        likes: 64,
        isPopular: false
    }
];

const backgroundParticles = [
    {
        id: 1,
        icon: "ic:round-article",
        class: "text-blue-400",
        style: { top: "15%", left: "8%" }
    },
    {
        id: 2,
        icon: "ic:round-lightbulb",
        class: "text-yellow-400",
        style: { top: "25%", right: "12%" }
    },
    {
        id: 3,
        icon: "ic:round-trending-up",
        class: "text-green-400",
        style: { top: "45%", left: "5%" }
    },
    {
        id: 4,
        icon: "ic:round-palette",
        class: "text-purple-400",
        style: { top: "65%", right: "8%" }
    },
    {
        id: 5,
        icon: "ic:round-code",
        class: "text-orange-400",
        style: { top: "80%", left: "15%" }
    }
];

const filteredPosts = computed(() => {
    const categoryMap: { [key: string]: string[] } = {
        all: [],
        webdev: ["Веб-розробка"],
        design: ["Дизайн"],
        seo: ["SEO"],
        marketing: ["Маркетинг"],
        trends: ["Тренди"]
    };

    let filtered = activeCategory.value === "all" ? blogPosts : blogPosts.filter((post) => categoryMap[activeCategory.value]?.includes(post.category));

    return filtered.slice(0, currentPage.value * postsPerPage);
});

const hasMorePosts = computed(() => {
    const totalFiltered =
        activeCategory.value === "all"
            ? blogPosts.length
            : blogPosts.filter((post) => {
                  const categoryMap: { [key: string]: string[] } = {
                      webdev: ["Веб-розробка"],
                      design: ["Дизайн"],
                      seo: ["SEO"],
                      marketing: ["Маркетинг"],
                      trends: ["Тренди"]
                  };
                  return categoryMap[activeCategory.value]?.includes(post.category);
              }).length;

    return filteredPosts.value.length < totalFiltered;
});

const loadMorePosts = async () => {
    isLoading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    currentPage.value++;
    isLoading.value = false;
};
</script>

<style scoped>

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
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

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
}

.animate-slide-in {
    animation: slide-in 0.8s ease-out;
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 6s ease infinite;
}

.animate-bounce-subtle {
    animation: bounce-subtle 3s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

.stat-item:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    border-radius: 16px;
    padding: 16px;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
}
</style>
