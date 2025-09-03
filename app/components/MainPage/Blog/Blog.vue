<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Floating particles -->
      <div class="absolute inset-0">
        <div v-for="particle in backgroundParticles" :key="particle.id" 
             :class="particle.class"
             :style="particle.style"
             class="absolute pointer-events-none animate-float opacity-30">
          <Icon :name="particle.icon" class="w-5 h-5" />
        </div>
      </div>
      
      <!-- Decorative orbs -->
      <div class="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
          <Icon name="ic:round-article" class="w-4 h-4 mr-2 text-blue-600" />
          Наш блог
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Корисні статті про 
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            веб-розробку
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Діліися досвідом, трендами та практичними порадами з світу веб-розробки, 
          дизайну та цифрового маркетингу
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in">
        <button v-for="category in blogCategories" 
                :key="category.id"
                @click="activeCategory = category.id"
                :class="[
                  'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2',
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                    : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200'
                ]">
          <Icon :name="category.icon" class="w-4 h-4" />
          {{ category.name }}
          <span class="text-xs opacity-75">({{ category.count }})</span>
        </button>
      </div>

      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="(post, index) in filteredPosts" 
                 :key="post.id"
                 class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-up"
                 :style="{ animationDelay: `${index * 0.15}s` }">
          
          <!-- Article Image -->
          <div class="relative h-48 overflow-hidden">
            <img :src="post.image" 
                 :alt="post.title"
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Category badge -->
            <div class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105"
                 :class="post.categoryStyle">
              {{ post.category }}
            </div>
            
            <!-- Reading time -->
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Icon name="ic:round-access-time" class="w-3 h-3 inline mr-1" />
              {{ post.readTime }} хв
            </div>

            <!-- Popular badge -->
            <div v-if="post.isPopular" 
                 class="absolute bottom-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 animate-pulse">
              <Icon name="ic:round-local-fire-department" class="w-3 h-3" />
              Популярно
            </div>
          </div>
          
          <!-- Article Content -->
          <div class="p-6">
            <!-- Meta info -->
            <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
              <div class="flex items-center gap-2">
                <Icon name="ic:round-person" class="w-4 h-4" />
                {{ post.author }}
              </div>
              <div class="flex items-center gap-2">
                <Icon name="ic:round-calendar-today" class="w-4 h-4" />
                {{ post.date }}
              </div>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {{ post.title }}
            </h3>
            
            <!-- Excerpt -->
            <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag"
                    class="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
                #{{ tag }}
              </span>
              <span v-if="post.tags.length > 3" 
                    class="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                +{{ post.tags.length - 3 }}
              </span>
            </div>
            
            <!-- Article footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <div class="flex items-center gap-1">
                  <Icon name="ic:round-visibility" class="w-4 h-4" />
                  {{ post.views }}
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="ic:round-thumb-up" class="w-4 h-4" />
                  {{ post.likes }}
                </div>
              </div>
              
              <!-- Read more button -->
              <button class="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300 group-hover:gap-3">
                Читати
                <Icon name="ic:round-arrow-forward" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          <!-- Hover glow effect -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl pointer-events-none"
               :class="post.glowColor"></div>
        </article>
      </div>

      <!-- Load More Section -->
      <div v-if="hasMorePosts" class="text-center mb-16">
        <button @click="loadMorePosts"
                :disabled="isLoading"
                class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50">
          <Icon v-if="!isLoading" name="ic:round-expand-more" class="w-5 h-5" />
          <Icon v-else name="ic:round-refresh" class="w-5 h-5 animate-spin" />
          {{ isLoading ? 'Завантаження...' : 'Показати більше статей' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  categoryStyle: string;
  glowColor: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  views: string;
  likes: number;
  isPopular: boolean;
}

const activeCategory = ref('all');
const isLoading = ref(false);
const currentPage = ref(1);
const postsPerPage = 9;

const blogCategories = [
  { id: 'all', name: 'Всі статті', icon: 'ic:round-apps', count: 24 },
  { id: 'webdev', name: 'Веб-розробка', icon: 'ic:round-code', count: 8 },
  { id: 'design', name: 'Дизайн', icon: 'ic:round-palette', count: 6 },
  { id: 'seo', name: 'SEO', icon: 'ic:round-trending-up', count: 4 },
  { id: 'marketing', name: 'Маркетинг', icon: 'ic:round-campaign', count: 3 },
  { id: 'trends', name: 'Тренди', icon: 'ic:round-whatshot', count: 3 }
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 головних трендів веб-дизайну у 2024 році',
    excerpt: 'Дізнайтеся про найсучасніші тенденції у веб-дизайні, які будуть домінувати цього року. Від нейморфізму до темних тем.',
    category: 'Дизайн',
    categoryStyle: 'bg-purple-100 text-purple-700',
    glowColor: 'bg-purple-400',
    author: 'Олександр К.',
    date: '15 лют 2024',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    tags: ['дизайн', 'тренди', 'ui/ux'],
    views: '2.4k',
    likes: 89,
    isPopular: true
  },
  {
    id: 2,
    title: 'Vue.js 3: Повний гід для початківців',
    excerpt: 'Вивчіть основи Vue.js 3 з практичними прикладами. Composition API, реактивність та створення сучасних додатків.',
    category: 'Веб-розробка',
    categoryStyle: 'bg-green-100 text-green-700',
    glowColor: 'bg-green-400',
    author: 'Марія Т.',
    date: '12 лют 2024',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ['vue.js', 'javascript', 'frontend'],
    views: '1.8k',
    likes: 67,
    isPopular: false
  },
  {
    id: 3,
    title: 'SEO стратегія для сучасних сайтів',
    excerpt: 'Ефективні методи просування сайтів у 2024. Core Web Vitals, технічне SEO та контент-маркетинг.',
    category: 'SEO',
    categoryStyle: 'bg-blue-100 text-blue-700',
    glowColor: 'bg-blue-400',
    author: 'Ігор П.',
    date: '10 лют 2024',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop',
    tags: ['seo', 'маркетинг', 'аналітика'],
    views: '3.1k',
    likes: 124,
    isPopular: true
  },
  {
    id: 4,
    title: 'Доступність у веб-дизайні: практичний підхід',
    excerpt: 'Як зробити ваш сайт доступним для всіх користувачів. ARIA, семантичний HTML та тестування доступності.',
    category: 'Дизайн',
    categoryStyle: 'bg-purple-100 text-purple-700',
    glowColor: 'bg-purple-400',
    author: 'Анна М.',
    date: '8 лют 2024',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
    tags: ['accessibility', 'ux', 'web-standards'],
    views: '1.2k',
    likes: 45,
    isPopular: false
  },
  {
    id: 5,
    title: 'TypeScript для React розробників',
    excerpt: 'Переваги використання TypeScript у React проектах. Типізація компонентів, хуків та кастомних типів.',
    category: 'Веб-розробка',
    categoryStyle: 'bg-green-100 text-green-700',
    glowColor: 'bg-green-400',
    author: 'Дмитро Л.',
    date: '5 лют 2024',
    readTime: 14,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    tags: ['typescript', 'react', 'javascript'],
    views: '2.7k',
    likes: 98,
    isPopular: true
  },
  {
    id: 6,
    title: 'Психологія кольорів у веб-дизайні',
    excerpt: 'Як кольори впливають на поведінку користувачів та конверсію. Теорія кольорів та практичні поради.',
    category: 'Дизайн',
    categoryStyle: 'bg-purple-100 text-purple-700',
    glowColor: 'bg-purple-400',
    author: 'Софія В.',
    date: '3 лют 2024',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
    tags: ['кольори', 'психологія', 'ui'],
    views: '1.9k',
    likes: 73,
    isPopular: false
  },
  {
    id: 7,
    title: 'Оптимізація продуктивності веб-додатків',
    excerpt: 'Методи покращення швидкості завантаження та відгуку сайтів. Lazy loading, кешування та оптимізація зображень.',
    category: 'Веб-розробка',
    categoryStyle: 'bg-green-100 text-green-700',
    glowColor: 'bg-green-400',
    author: 'Максим Р.',
    date: '1 лют 2024',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ['performance', 'optimization', 'web-vitals'],
    views: '2.2k',
    likes: 85,
    isPopular: false
  },
  {
    id: 8,
    title: 'Контент-маркетинг для IT компаній',
    excerpt: 'Стратегії створення та просування контенту у сфері технологій. Від блогінгу до соціальних мереж.',
    category: 'Маркетинг',
    categoryStyle: 'bg-orange-100 text-orange-700',
    glowColor: 'bg-orange-400',
    author: 'Катерина С.',
    date: '29 січ 2024',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop',
    tags: ['маркетинг', 'контент', 'smm'],
    views: '1.5k',
    likes: 56,
    isPopular: false
  },
  {
    id: 9,
    title: 'Мобільний UX: найкращі практики',
    excerpt: 'Особливості проектування інтерфейсів для мобільних пристроїв. Touch-friendly дизайн та навігація.',
    category: 'Дизайн',
    categoryStyle: 'bg-purple-100 text-purple-700',
    glowColor: 'bg-purple-400',
    author: 'Віталій К.',
    date: '27 січ 2024',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    tags: ['mobile', 'ux', 'responsive'],
    views: '1.7k',
    likes: 64,
    isPopular: false
  }
];

const blogStats = [
  { value: '50+', label: 'Статей опубліковано' },
  { value: '15k+', label: 'Щомісячних читачів' },
  { value: '4.8★', label: 'Рейтинг блогу' },
  { value: '2k+', label: 'Підписників' }
];

const backgroundParticles = [
  {
    id: 1,
    icon: 'ic:round-article',
    class: 'text-blue-400',
    style: { top: '15%', left: '8%' }
  },
  {
    id: 2,
    icon: 'ic:round-lightbulb',
    class: 'text-yellow-400',
    style: { top: '25%', right: '12%' }
  },
  {
    id: 3,
    icon: 'ic:round-trending-up',
    class: 'text-green-400',
    style: { top: '45%', left: '5%' }
  },
  {
    id: 4,
    icon: 'ic:round-palette',
    class: 'text-purple-400',
    style: { top: '65%', right: '8%' }
  },
  {
    id: 5,
    icon: 'ic:round-code',
    class: 'text-orange-400',
    style: { top: '80%', left: '15%' }
  }
];

const filteredPosts = computed(() => {
  const categoryMap: { [key: string]: string[] } = {
    'all': [],
    'webdev': ['Веб-розробка'],
    'design': ['Дизайн'],
    'seo': ['SEO'],
    'marketing': ['Маркетинг'],
    'trends': ['Тренди']
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
          'webdev': ['Веб-розробка'],
          'design': ['Дизайн'],
          'seo': ['SEO'],
          'marketing': ['Маркетинг'],
          'trends': ['Тренди']
        };
        return categoryMap[activeCategory.value]?.includes(post.category);
      }).length;
  
  return filteredPosts.value.length < totalFiltered;
});

const loadMorePosts = async () => {
  isLoading.value = true;
  await new Promise(resolve => setTimeout(resolve, 1000));
  currentPage.value++;
  isLoading.value = false;
};
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

@keyframes slide-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
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
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>