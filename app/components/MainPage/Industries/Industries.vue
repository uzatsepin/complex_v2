<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Floating particles -->
      <div class="absolute inset-0">
        <div v-for="particle in backgroundParticles" :key="particle.id" 
             :class="particle.class"
             :style="particle.style"
             class="absolute pointer-events-none animate-float opacity-40">
          <Icon :name="particle.icon" class="w-5 h-5" />
        </div>
      </div>
      
      <!-- Decorative orbs -->
      <div class="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-green-400/15 to-cyan-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 60px 60px;"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
          <Icon name="ic:round-business-center" class="w-4 h-4 mr-2 text-blue-600" />
          Наші індустрії
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Експертиза у 
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            різних галузях
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Працюємо з компаніями різних сфер діяльності, розуміємо специфіку кожної індустрії 
          та створюємо рішення, які дійсно працюють для вашого бізнесу
        </p>
      </div>

      <!-- Industries Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        <div v-for="(industry, index) in industries" 
             :key="industry.id" 
             class="industry-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 border border-white/50"
             :class="`animation-delay-${(index + 1) * 100}`"
             @click="selectIndustry(industry)">
          
          <!-- Card background pattern -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
               :style="`background: ${industry.pattern}`"></div>
          
          <!-- Hover glow effect -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
               :class="industry.glowColor"></div>
          
          <!-- Icon -->
          <div class="relative mb-4">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                 :class="industry.iconBg">
              <Icon :name="industry.icon" class="w-7 h-7 transition-transform duration-500" :class="industry.iconColor" />
            </div>
            
            <!-- Success indicator -->
            <div v-if="industry.isTop" 
                 class="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <Icon name="ic:round-star" class="w-3 h-3 text-white" />
            </div>
          </div>
          
          <!-- Content -->
          <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
              :class="industry.titleGradient">
            {{ industry.title }}
          </h3>
          
          <p class="text-sm text-gray-600 mb-4 leading-relaxed">
            {{ industry.description }}
          </p>
          
          <!-- Stats -->
          <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div class="flex items-center gap-1">
              <Icon name="ic:round-work" class="w-3 h-3" />
              {{ industry.projectsCount }} проектів
            </div>
            <div class="flex items-center gap-1">
              <Icon name="ic:round-trending-up" class="w-3 h-3" />
              {{ industry.growthRate }}
            </div>
          </div>
          
          <!-- Technologies -->
          <div class="flex flex-wrap gap-1 mb-4">
            <span v-for="tech in industry.technologies.slice(0, 3)" 
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
              {{ tech }}
            </span>
            <span v-if="industry.technologies.length > 3" 
                  class="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
              +{{ industry.technologies.length - 3 }}
            </span>
          </div>
          
          <!-- Case study preview -->
          <div v-if="industry.caseStudy" 
               class="text-xs text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-1">
            <Icon name="ic:round-visibility" class="w-3 h-3" />
            {{ industry.caseStudy }}
          </div>
          
          <!-- Hover indicator -->
          <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Icon name="ic:round-arrow-forward" class="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      <!-- Selected Industry Details (if any) -->
      <div v-if="selectedIndustry" 
           class="mb-16 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 animate-fade-in">
        <div class="flex items-start gap-6">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center" :class="selectedIndustry.iconBg">
            <Icon :name="selectedIndustry.icon" class="w-8 h-8" :class="selectedIndustry.iconColor" />
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedIndustry.title }}</h3>
            <p class="text-gray-600 mb-4">{{ selectedIndustry.detailedDescription }}</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white rounded-xl p-4 shadow-sm">
                <div class="text-2xl font-bold text-blue-600 mb-1">{{ selectedIndustry.projectsCount }}+</div>
                <div class="text-sm text-gray-600">Реалізованих проектів</div>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm">
                <div class="text-2xl font-bold text-green-600 mb-1">{{ selectedIndustry.avgTimeline }}</div>
                <div class="text-sm text-gray-600">Середній термін</div>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm">
                <div class="text-2xl font-bold text-purple-600 mb-1">{{ selectedIndustry.successRate }}%</div>
                <div class="text-sm text-gray-600">Успішних запусків</div>
              </div>
            </div>
          </div>
          <button @click="selectedIndustry = null" 
                  class="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
            <Icon name="ic:round-close" class="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200">
        <div v-for="stat in overallStats" :key="stat.label" 
             class="text-center stat-item cursor-pointer transform hover:scale-110 transition-all duration-300">
          <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0">
          <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-blob"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full animate-blob animation-delay-2000"></div>
        </div>
        
        <div class="relative">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            Не знайшли свою галузь?
          </h3>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ми працюємо з різними індустріями і завжди готові зануритися у специфіку вашого бізнесу. 
            Розкажіть про свій проект!
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button class="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Icon name="ic:round-chat" class="w-5 h-5" />
              Обговорити проект
            </button>
            <button class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
              <Icon name="ic:round-folder" class="w-5 h-5" />
              Переглянути портфоліо
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Industry {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  titleGradient: string;
  glowColor: string;
  pattern: string;
  isTop: boolean;
  projectsCount: number;
  growthRate: string;
  avgTimeline: string;
  successRate: number;
  technologies: string[];
  caseStudy: string;
}

const selectedIndustry = ref<Industry | null>(null);

const selectIndustry = (industry: Industry) => {
  selectedIndustry.value = selectedIndustry.value?.id === industry.id ? null : industry;
};

const industries: Industry[] = [
  {
    id: 1,
    title: 'E-commerce',
    description: 'Інтернет-магазини та Instagram-шопи з повною автоматизацією продажів',
    detailedDescription: 'Створюємо повнофункціональні інтернет-магазини з інтеграцією платіжних систем, управлінням товарами, аналітикою та маркетинговими інструментами.',
    icon: 'ic:round-shopping-cart',
    iconBg: 'bg-green-100 group-hover:bg-green-200',
    iconColor: 'text-green-600',
    titleGradient: 'group-hover:from-green-500 group-hover:to-emerald-600',
    glowColor: 'bg-green-400',
    pattern: 'repeating-linear-gradient(45deg, rgba(34, 197, 94, 0.1) 0px, rgba(34, 197, 94, 0.1) 1px, transparent 1px, transparent 12px)',
    isTop: true,
    projectsCount: 45,
    growthRate: '+180%',
    avgTimeline: '3-4 тижні',
    successRate: 96,
    technologies: ['Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'Analytics'],
    caseStudy: 'Кейс: Зріст продажів на 180%'
  },
  {
    id: 2,
    title: 'Telegram боти',
    description: 'Розумні боти для автоматизації бізнес-процесів та обслуговування клієнтів',
    detailedDescription: 'Розробляємо Telegram ботів для автоматизації замовлень, консультацій, управління контентом та інтеграції з бізнес-системами.',
    icon: 'ic:round-smart-toy',
    iconBg: 'bg-blue-100 group-hover:bg-blue-200',
    iconColor: 'text-blue-600',
    titleGradient: 'group-hover:from-blue-500 group-hover:to-cyan-600',
    glowColor: 'bg-blue-400',
    pattern: 'repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0px, rgba(59, 130, 246, 0.1) 1px, transparent 1px, transparent 10px)',
    isTop: false,
    projectsCount: 38,
    growthRate: '+120%',
    avgTimeline: '1-2 тижні',
    successRate: 98,
    technologies: ['Python', 'Node.js', 'Telegram API', 'MongoDB', 'Redis'],
    caseStudy: 'Кейс: Автоматизація 80% запитів'
  },
  {
    id: 3,
    title: 'Аграрний бізнес',
    description: 'Цифрові рішення для сільського господарства та агротехнологій',
    detailedDescription: 'Системи моніторингу врожаю, управління ресурсами, логістики та продажу сільськогосподарської продукції.',
    icon: 'ic:round-agriculture',
    iconBg: 'bg-emerald-100 group-hover:bg-emerald-200',
    iconColor: 'text-emerald-600',
    titleGradient: 'group-hover:from-emerald-500 group-hover:to-green-600',
    glowColor: 'bg-emerald-400',
    pattern: 'repeating-linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0px, rgba(16, 185, 129, 0.1) 1px, transparent 1px, transparent 15px)',
    isTop: false,
    projectsCount: 12,
    growthRate: '+95%',
    avgTimeline: '4-6 тижнів',
    successRate: 92,
    technologies: ['IoT', 'React', 'PostgreSQL', 'Python', 'GIS'],
    caseStudy: 'Кейс: Оптимізація ресурсів на 30%'
  },
  {
    id: 4,
    title: 'Краса та здоров\'я',
    description: 'Платформи для салонів краси, SPA та wellness індустрії',
    detailedDescription: 'Системи онлайн-записів, управління клієнтами, програми лояльності та інтернет-магазини косметики.',
    icon: 'ic:round-spa',
    iconBg: 'bg-pink-100 group-hover:bg-pink-200',
    iconColor: 'text-pink-600',
    titleGradient: 'group-hover:from-pink-500 group-hover:to-rose-600',
    glowColor: 'bg-pink-400',
    pattern: 'repeating-linear-gradient(60deg, rgba(236, 72, 153, 0.1) 0px, rgba(236, 72, 153, 0.1) 1px, transparent 1px, transparent 8px)',
    isTop: true,
    projectsCount: 28,
    growthRate: '+150%',
    avgTimeline: '2-3 тижні',
    successRate: 94,
    technologies: ['Vue.js', 'Laravel', 'Stripe', 'Calendar API', 'SMS'],
    caseStudy: 'Кейс: 3x збільшення записів'
  },
  {
    id: 5,
    title: 'Медицина',
    description: 'Цифрові рішення для медичних закладів та телемедицини',
    detailedDescription: 'Системи електронного документообігу, телемедицина, управління пацієнтами та медичні портали.',
    icon: 'ic:round-local-hospital',
    iconBg: 'bg-red-100 group-hover:bg-red-200',
    iconColor: 'text-red-600',
    titleGradient: 'group-hover:from-red-500 group-hover:to-rose-600',
    glowColor: 'bg-red-400',
    pattern: 'repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0px, rgba(239, 68, 68, 0.1) 1px, transparent 1px, transparent 11px)',
    isTop: false,
    projectsCount: 15,
    growthRate: '+110%',
    avgTimeline: '5-8 тижнів',
    successRate: 89,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'FHIR'],
    caseStudy: 'Кейс: Телемедицина для клініки'
  },
  {
    id: 6,
    title: 'Логістика',
    description: 'Системи управління перевезеннями та складською логістикою',
    detailedDescription: 'Платформи для управління вантажоперевезеннями, трекінгу, оптимізації маршрутів та автоматизації складських операцій.',
    icon: 'ic:round-local-shipping',
    iconBg: 'bg-orange-100 group-hover:bg-orange-200',
    iconColor: 'text-orange-600',
    titleGradient: 'group-hover:from-orange-500 group-hover:to-amber-600',
    glowColor: 'bg-orange-400',
    pattern: 'repeating-linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0px, rgba(249, 115, 22, 0.1) 1px, transparent 1px, transparent 14px)',
    isTop: false,
    projectsCount: 22,
    growthRate: '+85%',
    avgTimeline: '4-5 тижнів',
    successRate: 91,
    technologies: ['React', 'Python', 'PostgreSQL', 'Maps API', 'ML'],
    caseStudy: 'Кейс: Оптимізація доставки'
  },
  {
    id: 7,
    title: 'Фінтех',
    description: 'Фінансові платформи та системи онлайн-платежів',
    detailedDescription: 'Розробляємо фінансові додатки, платіжні системи, кредитні платформи та інструменти для управління фінансами.',
    icon: 'ic:round-account-balance',
    iconBg: 'bg-indigo-100 group-hover:bg-indigo-200',
    iconColor: 'text-indigo-600',
    titleGradient: 'group-hover:from-indigo-500 group-hover:to-purple-600',
    glowColor: 'bg-indigo-400',
    pattern: 'repeating-linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0px, rgba(99, 102, 241, 0.1) 1px, transparent 1px, transparent 12px)',
    isTop: false,
    projectsCount: 18,
    growthRate: '+200%',
    avgTimeline: '6-10 тижнів',
    successRate: 88,
    technologies: ['React', 'Node.js', 'Blockchain', 'Security', 'API'],
    caseStudy: 'Кейс: P2P платіжна система'
  },
  {
    id: 8,
    title: 'Освіта',
    description: 'EdTech платформи та системи онлайн-навчання',
    detailedDescription: 'LMS системи, онлайн-курси, системи тестування та платформи для дистанційного навчання.',
    icon: 'ic:round-school',
    iconBg: 'bg-purple-100 group-hover:bg-purple-200',
    iconColor: 'text-purple-600',
    titleGradient: 'group-hover:from-purple-500 group-hover:to-indigo-600',
    glowColor: 'bg-purple-400',
    pattern: 'repeating-linear-gradient(60deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 9px)',
    isTop: true,
    projectsCount: 31,
    growthRate: '+140%',
    avgTimeline: '3-5 тижнів',
    successRate: 95,
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'AI'],
    caseStudy: 'Кейс: Онлайн-академія з 10k+ студентів'
  }
];

const overallStats = [
  { value: '8+', label: 'Індустрій' },
  { value: '200+', label: 'Проектів' },
  { value: '95%', label: 'Успішних запусків' },
  { value: '24/7', label: 'Підтримка' }
];

const backgroundParticles = [
  {
    id: 1,
    icon: 'ic:round-trending-up',
    class: 'text-blue-400',
    style: { top: '12%', left: '8%' }
  },
  {
    id: 2,
    icon: 'ic:round-lightbulb',
    class: 'text-yellow-400',
    style: { top: '20%', right: '15%' }
  },
  {
    id: 3,
    icon: 'ic:round-rocket-launch',
    class: 'text-purple-400',
    style: { top: '35%', left: '5%' }
  },
  {
    id: 4,
    icon: 'ic:round-auto-graph',
    class: 'text-green-400',
    style: { top: '55%', right: '8%' }
  },
  {
    id: 5,
    icon: 'ic:round-psychology',
    class: 'text-pink-400',
    style: { top: '70%', left: '12%' }
  },
  {
    id: 6,
    icon: 'ic:round-settings',
    class: 'text-gray-400',
    style: { top: '80%', right: '20%' }
  }
];
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(40px, -60px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
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
  animation: blob 10s infinite;
}

.animate-float {
  animation: float 9s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 3s infinite;
}

.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-700 { animation-delay: 0.7s; }
.animation-delay-800 { animation-delay: 0.8s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-3000 { animation-delay: 3s; }

.industry-card {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
  backdrop-filter: blur(8px);
}

.industry-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
  transform: translateY(-12px) scale(1.02);
}

.stat-item:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
  border-radius: 16px;
  padding: 16px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>