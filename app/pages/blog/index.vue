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
                
            </div>
            
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <!-- Breadcrumb -->
                <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8 animate-fade-in">
                    <NuxtLink to="/" class="hover:text-blue-600 transition-colors">{{ $t('blog.page.home') }}</NuxtLink>
                    <Icon name="ic:round-chevron-right" class="w-4 h-4" />
                    <span class="text-gray-900 font-medium">{{ $t('blog.page.blog') }}</span>
                </nav>
                
                <!-- Page Header -->
                <div class="text-center max-w-4xl mx-auto animate-fade-in-up">
                    <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        <Icon name="ic:round-article" class="w-4 h-4 mr-2" />
                        {{ $t('blog.page.expertBlog') }}
                    </div>
                    
                    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        Експертний 
                        <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">блог</span>
                    </h1>
                    
                    <p class="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                        Занурюйтеся у світ веб-розробки, дизайну та технологій разом з нашими експертами
                    </p>
                
                </div>
            </div>
        </section>

        <!-- Featured Articles -->
        <section class="py-20 relative">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Рекомендовані статті
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Найпопулярніші та найактуальніші матеріали від наших експертів
                    </p>
                </div>
                
                <!-- Featured Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <!-- Main Featured Article -->
                    <NuxtLink :to="`/blog/${featuredArticles[0]?.slug}`" class="group lg:row-span-2">
                        <article class="relative h-full min-h-[500px] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div class="relative h-full">
                                <img :src="featuredArticles[0]?.image" :alt="featuredArticles[0]?.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                
                                <!-- Gradient overlay -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                
                                <!-- Content -->
                                <div class="absolute bottom-0 left-0 right-0 p-8">
                                    <div class="flex items-center gap-3 mb-4">
                                        <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                                            {{ featuredArticles[0]?.category }}
                                        </span>
                                        <div class="flex items-center text-white/80 text-sm">
                                            <Icon name="ic:round-access-time" class="w-4 h-4 mr-1" />
                                            {{ featuredArticles[0]?.readTime }} {{ $t('blog.article.time') }}
                                        </div>
                                    </div>
                                    
                                    <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                                        {{ featuredArticles[0]?.title }}
                                    </h3>
                                    
                                    <p class="text-white/90 text-lg leading-relaxed line-clamp-3 mb-4">
                                        {{ featuredArticles[0]?.excerpt }}
                                    </p>
                                    
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center text-white/80 text-sm">
                                            <Icon name="ic:round-person" class="w-4 h-4 mr-1" />
                                            {{ featuredArticles[0]?.author }}
                                        </div>
                                        
                                        <div class="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                                            {{ $t('blog.article.read') }}
                                            <Icon name="ic:round-arrow-forward" class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </NuxtLink>
                    
                    <!-- Secondary Featured Articles -->
                    <div class="flex flex-col gap-8">
                        <NuxtLink 
                            v-for="article in featuredArticles.slice(1, 3)" 
                            :key="article.id"
                            :to="`/blog/${article.slug}`"
                            class="group"
                        >
                            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div class="flex h-48">
                                    <div class="w-2/3 p-6 flex flex-col justify-between">
                                        <div>
                                            <div class="flex items-center gap-2 mb-3">
                                                <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                                                    {{ article.category }}
                                                </span>
                                                <div class="flex items-center text-gray-500 text-xs">
                                                    <Icon name="ic:round-access-time" class="w-3 h-3 mr-1" />
                                                    {{ article.readTime }} {{ $t('blog.article.time') }}
                                                </div>
                                            </div>
                                            
                                            <h3 class="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {{ article.title }}
                                            </h3>
                                            
                                            <p class="text-gray-600 text-sm line-clamp-2">
                                                {{ article.excerpt }}
                                            </p>
                                        </div>
                                        
                                        <div class="flex items-center justify-between">
                                            <div class="text-xs text-gray-500">
                                                {{ article.author }}
                                            </div>
                                            <div class="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                                                {{ $t('blog.article.read') }}
                                                <Icon name="ic:round-arrow-forward" class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="w-1/3 relative">
                                        <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                </div>
                            </article>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Filter Section -->
        <section class="py-20 bg-white relative">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Всі статті
                    </h2>
                    <p class="text-gray-600">
                        Фільтруйте контент за категоріями
                    </p>
                </div>
                
                <!-- Filter Tabs -->
                <div class="flex flex-wrap justify-center gap-3 mb-16">
                    <button
                        v-for="category in categories"
                        :key="category.id"
                        @click="activeCategory = category.id"
                        :class="[
                            'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2',
                            activeCategory === category.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md'
                        ]"
                    >
                        <Icon :name="category.icon" class="w-4 h-4" />
                        {{ category.name }}
                        <span class="text-xs opacity-75">({{ category.count }})</span>
                    </button>
                </div>
                
                <!-- Articles Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Article
                        v-for="(post, index) in filteredPosts"
                        :key="post.id"
                        :post="post"
                        :index="index"
                    />
                </div>
                
                <!-- Load More -->
                <div v-if="hasMorePosts" class="text-center mt-16">
                    <button
                        @click="loadMorePosts"
                        :disabled="isLoading"
                        class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50"
                    >
                        <Icon
                            v-if="!isLoading"
                            name="ic:round-expand-more"
                            class="w-5 h-5"
                        />
                        <Icon
                            v-else
                            name="ic:round-refresh"
                            class="w-5 h-5 animate-spin"
                        />
                        {{ isLoading ? "Завантаження..." : "Показати більше статей" }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
            <div class="absolute inset-0">
                <div class="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div class="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
            </div>
            
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="text-center max-w-3xl mx-auto">
                    <h3 class="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Залишайтеся в курсі новинок
                    </h3>
                    <p class="text-blue-100 text-lg mb-8">
                        Підписуйтеся на нашу розсилку і отримуйте свіжі статті прямо на пошту
                    </p>
                    
                    <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            v-model="email"
                            type="email"
                            placeholder="Ваша електронна пошта"
                            class="flex-1 px-4 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                            required
                        />
                        <button
                            type="submit"
                            :disabled="isSubscribing"
                            class="px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <Icon
                                v-if="!isSubscribing"
                                name="ic:round-send"
                                class="w-4 h-4"
                            />
                            <Icon
                                v-else
                                name="ic:round-refresh"
                                class="w-4 h-4 animate-spin"
                            />
                            {{ isSubscribing ? "Підписуємо..." : "Підписатися" }}
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import type { IBlogPost } from '~/interface';
import Article from '~/components/MainPage/Blog/Article/Article.vue';

// SEO
useHead({
    title: 'Блог - Експертні статті про веб-розробку | TheComplexAgency',
    meta: [
        { name: 'description', content: 'Читайте експертні статті про веб-розробку, дизайн, SEO та цифровий маркетинг від команди TheComplexAgency. Практичні поради та останні тренди.' },
        { property: 'og:title', content: 'Блог - Експертні статті про веб-розробку | TheComplexAgency' },
        { property: 'og:description', content: 'Читайте експертні статті про веб-розробку, дизайн, SEO та цифровий маркетинг від команди TheComplexAgency.' },
        { property: 'og:type', content: 'website' },
    ]
});

// Reactive data
const activeCategory = ref('all');
const isLoading = ref(false);
const currentPage = ref(1);
const postsPerPage = 9;
const email = ref('');
const isSubscribing = ref(false);

// Categories
const categories = [
    { id: 'all', name: 'Всі статті', icon: 'ic:round-apps', count: 24 },
    { id: 'webdev', name: 'Веб-розробка', icon: 'ic:round-code', count: 8 },
    { id: 'design', name: 'Дизайн', icon: 'ic:round-palette', count: 6 },
    { id: 'seo', name: 'SEO', icon: 'ic:round-trending-up', count: 4 },
    { id: 'marketing', name: 'Маркетинг', icon: 'ic:round-campaign', count: 3 },
    { id: 'trends', name: 'Тренди', icon: 'ic:round-whatshot', count: 3 }
];

// Sample blog posts
const blogPosts: IBlogPost[] = [
    {
        id: 1,
        slug: '10-web-design-trends-2024',
        title: '10 головних трендів веб-дизайну у 2024 році',
        excerpt: 'Дізнайтеся про найсучасніші тенденції у веб-дизайні, які будуть домінувати цього року. Від нейморфізму до темних тем.',
        category: 'Дизайн',
        author: 'Олександр К.',
        date: '15 лют 2024',
        readTime: 8,
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
        tags: ['дизайн', 'тренди', 'ui/ux'],
        views: '2.4k',
        likes: 89,
        isPopular: true
    },
    {
        id: 2,
        slug: 'vue-js-3-complete-guide',
        title: 'Vue.js 3: Повний гід для початківців',
        excerpt: 'Вивчіть основи Vue.js 3 з практичними прикладами. Composition API, реактивність та створення сучасних додатків.',
        category: 'Веб-розробка',
        author: 'Марія Т.',
        date: '12 лют 2024',
        readTime: 12,
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
        tags: ['vue.js', 'javascript', 'frontend'],
        views: '1.8k',
        likes: 67,
        isPopular: true
    },
    {
        id: 3,
        slug: 'seo-strategy-modern-websites',
        title: 'SEO стратегія для сучасних сайтів',
        excerpt: 'Ефективні методи просування сайтів у 2024. Core Web Vitals, технічне SEO та контент-маркетинг.',
        category: 'SEO',
        author: 'Ігор П.',
        date: '10 лют 2024',
        readTime: 6,
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
        tags: ['seo', 'маркетинг', 'аналітика'],
        views: '3.1k',
        likes: 124,
        isPopular: true
    },
    {
        id: 4,
        slug: 'accessibility-web-design',
        title: 'Доступність у веб-дизайні: практичний підхід',
        excerpt: 'Як зробити ваш сайт доступним для всіх користувачів. ARIA, семантичний HTML та тестування доступності.',
        category: 'Дизайн',
        author: 'Анна М.',
        date: '8 лют 2024',
        readTime: 10,
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
        tags: ['accessibility', 'ux', 'web-standards'],
        views: '1.2k',
        likes: 45,
        isPopular: false
    },
    {
        id: 5,
        slug: 'typescript-react-developers',
        title: 'TypeScript для React розробників',
        excerpt: 'Переваги використання TypeScript у React проектах. Типізація компонентів, хуків та кастомних типів.',
        category: 'Веб-розробка',
        author: 'Дмитро Л.',
        date: '5 лют 2024',
        readTime: 14,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
        tags: ['typescript', 'react', 'javascript'],
        views: '2.7k',
        likes: 98,
        isPopular: false
    },
    {
        id: 6,
        slug: 'color-psychology-web-design',
        title: 'Психологія кольорів у веб-дизайні',
        excerpt: 'Як кольори впливають на поведінку користувачів та конверсію. Теорія кольорів та практичні поради.',
        category: 'Дизайн',
        author: 'Софія В.',
        date: '3 лют 2024',
        readTime: 7,
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop',
        tags: ['кольори', 'психологія', 'ui'],
        views: '1.9k',
        likes: 73,
        isPopular: false
    },
    {
        id: 7,
        slug: 'web-performance-optimization',
        title: 'Оптимізація продуктивності веб-додатків',
        excerpt: 'Методи покращення швидкості завантаження та відгуку сайтів. Lazy loading, кешування та оптимізація зображень.',
        category: 'Веб-розробка',
        author: 'Максим Р.',
        date: '1 лют 2024',
        readTime: 11,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        tags: ['performance', 'optimization', 'web-vitals'],
        views: '2.2k',
        likes: 85,
        isPopular: false
    },
    {
        id: 8,
        slug: 'content-marketing-it-companies',
        title: 'Контент-маркетинг для IT компаній',
        excerpt: 'Стратегії створення та просування контенту у сфері технологій. Від блогінгу до соціальних мереж.',
        category: 'Маркетинг',
        author: 'Катерина С.',
        date: '29 січ 2024',
        readTime: 9,
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=600&fit=crop',
        tags: ['маркетинг', 'контент', 'smm'],
        views: '1.5k',
        likes: 56,
        isPopular: false
    },
    {
        id: 9,
        slug: 'mobile-ux-best-practices',
        title: 'Мобільний UX: найкращі практики',
        excerpt: 'Особливості проектування інтерфейсів для мобільних пристроїв. Touch-friendly дизайн та навігація.',
        category: 'Дизайн',
        author: 'Віталій К.',
        date: '27 січ 2024',
        readTime: 8,
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        tags: ['mobile', 'ux', 'responsive'],
        views: '1.7k',
        likes: 64,
        isPopular: false
    }
];

// Computed
const featuredArticles = computed(() => blogPosts.filter(post => post.isPopular).slice(0, 3));

const filteredPosts = computed(() => {
    const categoryMap: { [key: string]: string[] } = {
        all: [],
        webdev: ['Веб-розробка'],
        design: ['Дизайн'],
        seo: ['SEO'],
        marketing: ['Маркетинг'],
        trends: ['Тренди']
    };

    let filtered = activeCategory.value === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => categoryMap[activeCategory.value]?.includes(post.category));

    return filtered.slice(0, currentPage.value * postsPerPage);
});

const hasMorePosts = computed(() => {
    const totalFiltered = activeCategory.value === 'all' 
        ? blogPosts.length 
        : blogPosts.filter(post => {
            const categoryMap: { [key: string]: string[] } = {
                webdev: ['Веб-розробка'],
                design: ['Дизайн'],
                seo: ['SEO'],
                marketing: ['Маркетинг'],
                trends: ['Тренди']
            };
            return categoryMap[activeCategory.value]?.includes(post.category);
        }).length;

    return filteredPosts.value.length < totalFiltered;
});

const totalArticles = computed(() => blogPosts.length);
const totalViews = computed(() => '50k+');

// Methods
const loadMorePosts = async () => {
    isLoading.value = true;
    await new Promise(resolve => setTimeout(resolve, 1000));
    currentPage.value++;
    isLoading.value = false;
};

const subscribeNewsletter = async () => {
    isSubscribing.value = true;
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Handle subscription logic here
    email.value = '';
    isSubscribing.value = false;
    // Show success message
};

// Watch for category changes
watch(activeCategory, () => {
    currentPage.value = 1;
});
</script>

<style scoped>
@keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(50px, -70px) scale(1.1); }
    66% { transform: translate(-40px, 40px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(3deg); }
}

@keyframes fade-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.animate-blob { animation: blob 15s infinite; }
.animate-float { animation: float 12s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 1s ease-out; }
.animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
.animate-gradient { 
    background-size: 200% 200%; 
    animation: gradient 6s ease infinite; 
}

.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 2;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>
