<template>
    <div class="min-h-screen bg-white">
        <Header />

        <!-- Article Header -->
        <article class="relative">
            <!-- Hero Section -->
            <section class="relative pt-32 pb-20 overflow-hidden">
                <!-- Background Image -->
                <div class="absolute inset-0">
                    <img 
                        :src="article.image" 
                        :alt="article.title"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>

                <!-- Floating elements -->
                <div class="absolute inset-0 pointer-events-none">
                    <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
                    <div class="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-float animation-delay-4000"></div>
                </div>

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <!-- Breadcrumb -->
                    <nav class="max-w-6xl mx-auto flex items-center space-x-2 text-sm text-white/80 mb-8 animate-fade-in">
                        <NuxtLink to="/" class="hover:text-white transition-colors">{{ $t('home') }}</NuxtLink>
                        <Icon name="ic:round-chevron-right" class="w-4 h-4" />
                        <NuxtLink to="/blog" class="hover:text-white transition-colors">{{ $t('blogPage.name') }}</NuxtLink>
                        <Icon name="ic:round-chevron-right" class="w-4 h-4" />
                        <span class="text-white">{{ article.title }}</span>
                    </nav>

                    <div class="mx-auto max-w-6xl animate-fade-in-up">
                        <!-- Category & Meta -->
                        <div class="flex flex-wrap items-center gap-4 mb-6">
                            <span 
                                class="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-sm"
                            >
                                {{ article.category }}
                            </span>
                            
                            <div class="flex items-center text-white/80 text-sm">
                                <Icon name="ic:round-access-time" class="w-4 h-4 mr-1" />
                                {{ article.readTime }} {{ $t('blogPage.time') }}
                            </div>
                            
                            <div class="flex items-center text-white/80 text-sm">
                                <Icon name="ic:round-visibility" class="w-4 h-4 mr-1" />
                                {{ article.views }} {{ $t('blogPage.watched') }}
                            </div>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {{ article.title }}
                        </h1>

                        <!-- Excerpt -->
                        <p class="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl">
                            {{ article.excerpt }}
                        </p>

                        <!-- Share & Date -->
                        <div class="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/20">
                            <div class="flex items-center gap-2 text-white/80">
                                <Icon name="ic:round-calendar-today" class="w-4 h-4" />
                                {{ article.date }}
                            </div>

                            <div class="flex items-center gap-3">
                                <span class="text-white/70 text-sm mr-2">{{ $t('blogPage.share') }}</span>
                                <button class="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Icon name="ic:round-share" class="w-5 h-5" />
                                </button>
                                <button class="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Icon name="ic:round-bookmark" class="w-5 h-5" />
                                </button>
                                <button class="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Icon name="ic:round-link" class="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Article Content -->
            <section class="py-16">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-6xl mx-auto">
                        <!-- Article Body -->
                        <div class="prose prose-lg max-w-none">
                            <div v-html="article.content || demoContent"></div>
                        </div>

                        <!-- Tags -->
                        <div class="mt-12 pt-8 border-t border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ $t('blogPage.tags') }}</h3>
                            <div class="flex flex-wrap gap-3">
                                <span
                                    v-for="tag in article.tags"
                                    :key="tag"
                                    class="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                                >
                                    #{{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Related Articles -->
            <section class="py-16 bg-gray-50">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            {{ $t('blogPage.similarArticles') }}
                        </h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            {{ $t('blogPage.similarArticlesDescr') }}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Article
                            v-for="(post, index) in relatedArticles"
                            :key="post.id"
                            :post="post"
                            :index="index"
                        />
                    </div>
                </div>
            </section>
        </article>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import type { IBlogPost } from '~/interface';
import Article from '~/components/MainPage/Blog/Article/Article.vue';

// Get the slug from route params
const route = useRoute();
const slug = route.params.slug as string;

// Sample article data (in real app this would come from API/CMS)
const article: IBlogPost = {
    id: 1,
    slug: slug,
    title: '10 головних трендів веб-дизайну у 2024 році',
    excerpt: 'Дізнайтеся про найсучасніші тенденції у веб-дизайні, які будуть домінувати цього року. Від нейморфізму до темних тем та імерсивних інтерфейсів.',
    category: 'Дизайн',
    author: 'Олександр К.',
    date: '15 лютого 2024',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
    tags: ['дизайн', 'тренди', 'ui/ux', 'веб-дизайн', '2024'],
    views: '2.4k',
    likes: 89,
    isPopular: true,
    content: `
        <h2>Вступ</h2>
        <p>Веб-дизайн постійно еволюціонує, і 2024 рік не є винятком. Цього року ми бачимо цікаві тенденції, які поєднують естетику з функціональністю, створюючи унікальні користувацькі досвіди.</p>
        
        <h2>1. Нейморфізм та м'який UI</h2>
        <p>Нейморфізм продовжує набирати популярності завдяки своєму м'якому, тактильному вигляду. Цей стиль створює ілюзію фізичних об'єктів на цифрових інтерфейсах.</p>
        
        <h2>2. Темні теми</h2>
        <p>Темні теми не тільки економлять заряд батареї, але й створюють елегантний, професійний вигляд. Багато брендів впроваджують темні версії своїх інтерфейсів.</p>
        
        <h2>3. Мікроанімації</h2>
        <p>Тонкі анімації покращують користувацький досвід, роблячи інтерфейси більш живими та відгукуючими на дії користувача.</p>
    `
};

// Sample related articles
const relatedArticles: IBlogPost[] = [
    {
        id: 2,
        slug: 'vue-js-3-guide',
        title: 'Vue.js 3: Повний гід для початківців',
        excerpt: 'Вивчіть основи Vue.js 3 з практичними прикладами.',
        category: 'Веб-розробка',
        author: 'Марія Т.',
        date: '12 лют 2024',
        readTime: 12,
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
        tags: ['vue.js', 'javascript', 'frontend'],
        views: '1.8k',
        likes: 67,
        isPopular: false
    },
    {
        id: 3,
        slug: 'seo-strategy-2024',
        title: 'SEO стратегія для сучасних сайтів',
        excerpt: 'Ефективні методи просування сайтів у 2024.',
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
        title: 'Доступність у веб-дизайні',
        excerpt: 'Практичний підхід до створення доступних інтерфейсів.',
        category: 'Дизайн',
        author: 'Анна М.',
        date: '8 лют 2024',
        readTime: 10,
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
        tags: ['accessibility', 'ux', 'web-standards'],
        views: '1.2k',
        likes: 45,
        isPopular: false
    }
];

// Reactive data
const email = ref('');
const isSubscribing = ref(false);

// Demo content for the article
const demoContent = `
    <h2>Вступ</h2>
    <p>Веб-дизайн постійно еволюціонує, і 2024 рік не є винятком. Цього року ми бачимо цікаві тенденції, які поєднують естетику з функціональністю, створюючи унікальні користувацькі досвіди.</p>
    
    <h2>1. Нейморфізм та м'який UI</h2>
    <p>Нейморфізм продовжує набирати популярності завдяки своєму м'якому, тактильному вигляду. Цей стиль створює ілюзію фізичних об'єктів на цифрових інтерфейсах.</p>
    <blockquote>
        <p>"Нейморфізм - це не просто тренд, це спосіб зробити цифрові інтерфейси більш людськими та інтуїтивними."</p>
    </blockquote>
    
    <h2>2. Темні теми</h2>
    <p>Темні теми не тільки економлять заряд батареї, але й створюють елегантний, професійний вигляд. Багато брендів впроваджують темні версії своїх інтерфейсів.</p>
    
    <h2>3. Мікроанімації</h2>
    <p>Тонкі анімації покращують користувацький досвід, роблячи інтерфейси більш живими та відгукуючими на дії користувача. Вони можуть:</p>
    <ul>
        <li>Направляти увагу користувача</li>
        <li>Надавати зворотний зв'язок про дії</li>
        <li>Створювати приємні моменти взаємодії</li>
    </ul>
    
    <h2>4. Градієнти та яскраві кольори</h2>
    <p>Повернення яскравих градієнтів та насичених кольорів допомагає брендам виділятися в морі мінімалістичних дизайнів.</p>
    
    <h2>Висновок</h2>
    <p>Тренди веб-дизайну 2024 року спрямовані на створення більш людяних, доступних та візуально привабливих інтерфейсів. Важливо пам'ятати, що тренди - це інструменти, а не правила, і кожен проект вимагає індивідуального підходу.</p>
`;

// SEO
useHead({
    title: `${article.title} | TheComplexAgency Blog`,
    meta: [
        { name: 'description', content: article.excerpt },
        { property: 'og:title', content: article.title },
        { property: 'og:description', content: article.excerpt },
        { property: 'og:image', content: article.image },
        { property: 'og:type', content: 'article' },
        { name: 'article:author', content: article.author },
        { name: 'article:published_time', content: article.date },
        { name: 'article:tag', content: article.tags.join(', ') },
    ]
});

// Methods
const subscribeNewsletter = async () => {
    isSubscribing.value = true;
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    email.value = '';
    isSubscribing.value = false;
    // Show success message
};
</script>

<style scoped>

.animate-blob { animation: blob 15s infinite; }
.animate-float { animation: float 12s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 1s ease-out; }
.animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }

.animation-delay-4000 { animation-delay: 4s; }

/* Prose styles for article content */
.prose {
    color: #374151;
    line-height: 1.75;
}

.prose h2 {
    color: #111827;
    font-weight: 700;
    font-size: 1.875rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.prose h3 {
    color: #111827;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
}

.prose p {
    margin-bottom: 1.25rem;
}

.prose ul {
    margin: 1.25rem 0;
    padding-left: 1.25rem;
}

.prose li {
    margin-bottom: 0.5rem;
    padding-left: 0.25rem;
}

.prose blockquote {
    border-left: 4px solid #e5e7eb;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #6b7280;
    background: #f9fafb;
    padding: 1rem;
    border-radius: 0.5rem;
}

.prose blockquote p {
    margin: 0;
}

.prose strong {
    font-weight: 600;
    color: #111827;
}
</style>
