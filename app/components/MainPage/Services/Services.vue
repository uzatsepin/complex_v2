<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Floating particles -->
      <div class="absolute inset-0">
        <div v-for="particle in backgroundParticles" :key="particle.id" 
             :class="particle.class"
             :style="particle.style"
             class="absolute pointer-events-none animate-float opacity-30">
          <Icon :name="particle.icon" class="w-6 h-6" />
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div class="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
          <Icon name="ic:round-build" class="w-4 h-4 mr-2 text-blue-600" />
          Наші послуги
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Повний цикл розробки
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            веб-продуктів
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Від ідеї до готового рішення. Створюємо сучасні веб-додатки, 
          сайти та цифрові рішення для вашого бізнесу
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" 
             :key="service.id" 
             class="service-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
             :class="`animation-delay-${(index + 1) * 200}`">
          
          <!-- Card background gradient -->
          <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
               :class="service.gradient"></div>
          
          <!-- Icon -->
          <div class="relative mb-6">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                 :class="service.iconBg">
              <Icon :name="service.icon" class="w-8 h-8 transition-transform duration-500 group-hover:scale-110" :class="service.iconColor" />
            </div>
            
            <!-- Floating badge -->
            <div v-if="service.badge" 
                 class="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full animate-pulse-subtle">
              {{ service.badge }}
            </div>
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {{ service.title }}
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ service.description }}
          </p>
          
          <!-- Features -->
          <div class="space-y-2 mb-6">
            <div v-for="feature in service.features" :key="feature" 
                 class="flex items-center text-sm text-gray-700">
              <Icon name="ic:round-check-circle" class="w-4 h-4 mr-2 text-green-500" />
              {{ feature }}
            </div>
          </div>
          
          <!-- Price/Timeline -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <div class="text-sm text-gray-500">
              {{ service.timeline }}
            </div>
            <div class="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {{ service.price }}
            </div>
          </div>
          
          <!-- Hover arrow -->
          <div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <Icon name="ic:round-arrow-forward" class="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200">
        <div v-for="stat in stats" :key="stat.label" 
             class="text-center stat-item p-4 rounded-2xl cursor-pointer transform hover:scale-110 transition-all duration-300">
          <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0">
          <div class="absolute top-4 right-4 w-32 h-32 bg-blue-400/20 rounded-full animate-blob"></div>
          <div class="absolute bottom-4 left-4 w-24 h-24 bg-purple-400/20 rounded-full animate-blob animation-delay-1000"></div>
        </div>
        
        <div class="relative">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            Готові почати проект?
          </h3>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Отримайте безкоштовну консультацію та детальну оцінку вашого проекту від наших експертів
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Icon name="ic:round-rocket-launch" class="w-5 h-5" />
              Розпочати проект
            </button>
            <button class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
              <Icon name="ic:round-schedule" class="w-5 h-5" />
              Записатись на консультацію
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    id: 1,
    title: 'Інтернет-магазини',
    description: 'Повнофункціональні e-commerce рішення з інтеграцією платіжних систем, управлінням товарами та аналітикою продажів.',
    icon: 'ic:round-shopping-cart',
    iconBg: 'bg-green-100 group-hover:bg-green-200',
    iconColor: 'text-green-600',
    gradient: 'from-green-400 to-emerald-600',
    badge: 'ТОП',
    features: [
      'Адаптивний дизайн',
      'Платіжні системи',
      'Управління товарами',
      'SEO оптимізація'
    ],
    timeline: 'від 3 тижнів',
    price: 'від 15 000₴'
  },
  {
    id: 2,
    title: 'Веб-сервіси',
    description: 'Складні веб-додатки та SaaS платформи з користувацьким інтерфейсом, API та інтеграціями з третіми сервісами.',
    icon: 'ic:round-cloud',
    iconBg: 'bg-blue-100 group-hover:bg-blue-200',
    iconColor: 'text-blue-600',
    gradient: 'from-blue-400 to-indigo-600',
    features: [
      'REST API',
      'База даних',
      'Користувацькі ролі',
      'Інтеграції'
    ],
    timeline: 'від 4 тижнів',
    price: 'від 25 000₴'
  },
  {
    id: 3,
    title: 'Для стартапів',
    description: 'MVP та прототипи для стартапів. Швидкий вихід на ринок з мінімальними витратами та максимальним результатом.',
    icon: 'ic:round-rocket-launch',
    iconBg: 'bg-purple-100 group-hover:bg-purple-200',
    iconColor: 'text-purple-600',
    gradient: 'from-purple-400 to-pink-600',
    badge: 'MVP',
    features: [
      'Швидкий розвиток',
      'MVP підхід',
      'Тестування гіпотез',
      'Масштабування'
    ],
    timeline: 'від 2 тижнів',
    price: 'від 8 000₴'
  },
  {
    id: 4,
    title: 'Корпоративні сайти',
    description: 'Представницькі сайти для великого бізнесу з корпоративним дизайном, CMS та інтеграцією з бізнес-процесами.',
    icon: 'ic:round-business',
    iconBg: 'bg-orange-100 group-hover:bg-orange-200',
    iconColor: 'text-orange-600',
    gradient: 'from-orange-400 to-red-600',
    features: [
      'Корпоративний дизайн',
      'CMS система',
      'Багатомовність',
      'Інтеграція з CRM'
    ],
    timeline: 'від 3 тижнів',
    price: 'від 20 000₴'
  },
  {
    id: 5,
    title: 'Telegram боти',
    description: 'Розумні боти для автоматизації бізнес-процесів, обробки замовлень та взаємодії з клієнтами в Telegram.',
    icon: 'ic:round-smart-toy',
    iconBg: 'bg-cyan-100 group-hover:bg-cyan-200',
    iconColor: 'text-cyan-600',
    gradient: 'from-cyan-400 to-teal-600',
    features: [
      'Обробка команд',
      'Інтеграція з API',
      'Автоматизація',
      'Аналітика'
    ],
    timeline: 'від 1 тижня',
    price: 'від 3 000₴'
  },
  {
    id: 6,
    title: 'Автоматизація бізнесу',
    description: 'Цифрові рішення для автоматизації бізнес-процесів, CRM системи та внутрішні корпоративні платформи.',
    icon: 'ic:round-settings',
    iconBg: 'bg-gray-100 group-hover:bg-gray-200',
    iconColor: 'text-gray-600',
    gradient: 'from-gray-400 to-slate-600',
    features: [
      'Бізнес-процеси',
      'CRM інтеграція',
      'Звітність',
      'Workflow'
    ],
    timeline: 'від 5 тижнів',
    price: 'від 30 000₴'
  }
];

const stats = [
  { value: '50+', label: 'Проектів реалізовано' },
  { value: '12', label: 'Технологій освоєно' },
  { value: '24/7', label: 'Підтримка проектів' },
  { value: '98%', label: 'Задоволених клієнтів' }
];

const backgroundParticles = [
  {
    id: 1,
    icon: 'ic:round-code',
    class: 'text-blue-400',
    style: { top: '15%', left: '8%' }
  },
  {
    id: 2,
    icon: 'ic:round-palette',
    class: 'text-purple-400',
    style: { top: '25%', right: '12%' }
  },
  {
    id: 3,
    icon: 'ic:round-speed',
    class: 'text-green-400',
    style: { top: '60%', left: '15%' }
  },
  {
    id: 4,
    icon: 'ic:round-analytics',
    class: 'text-orange-400',
    style: { top: '75%', right: '8%' }
  },
  {
    id: 5,
    icon: 'ic:round-smartphone',
    class: 'text-pink-400',
    style: { top: '45%', left: '5%' }
  }
];
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
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

@keyframes pulse-subtle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-blob {
  animation: blob 8s infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 4s ease infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 3s infinite;
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s infinite;
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

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1200 {
  animation-delay: 1.2s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.service-card {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.service-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

.stat-item:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>