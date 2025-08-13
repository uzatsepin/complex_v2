<template>
  <section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden pt-20">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Animated gradient orbs -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <!-- Floating particles -->
      <div class="absolute inset-0">
        <div v-for="particle in particles" :key="particle.id" 
             :class="particle.class"
             :style="particle.style"
             class="absolute pointer-events-none animate-float">
          <Icon :name="particle.icon" class="w-4 h-4 opacity-60" />
        </div>
      </div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(229, 231, 235, 0.6) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
        
        <!-- Left Content -->
        <div class="lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300 animate-bounce-subtle">
            <Icon name="ic:round-star" class="w-4 h-4 mr-2 text-blue-600" />
            #1 Веб-агентство України
          </div>

          <!-- Main Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Створюємо
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              веб-сайти
            </span>
            які продають
          </h1>

          <!-- Subtitle -->
          <p class="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Розробляємо сучасні, швидкі та конверсійні веб-сайти, які допомагають вашому бізнесу зростати. 
            Від ідеї до запуску за 14 днів.
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-8 py-4">
            <div v-for="stat in stats" :key="stat.label" 
                 class="text-center stat-item cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div class="text-2xl font-bold text-gray-900">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <PrimaryButton size="lg" icon="ic:round-rocket-launch" class="cta-primary transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-subtle">
              Розпочати проект
            </PrimaryButton>
            <SecondaryButton size="lg" icon="ic:round-play-arrow" variant="ghost" class="cta-secondary">
              Дивитися кейси
            </SecondaryButton>
          </div>

          <!-- Trust Indicators -->
          <div class="pt-8">
            <p class="text-sm text-gray-500 mb-4">Нам довіряють:</p>
            <div class="flex items-center justify-center lg:justify-start gap-6 opacity-60">
              <div v-for="company in trustedCompanies" :key="company" 
                   class="flex items-center gap-2 company-item cursor-pointer transform hover:opacity-100 hover:scale-105 transition-all duration-300">
                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <Icon name="ic:round-business" class="w-4 h-4 text-gray-600" />
                </div>
                <span class="text-sm font-medium text-gray-600">{{ company }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Mockup/Visual -->
        <div class="lg:w-1/2 mt-12 lg:mt-0 relative animate-float">
          <div class="relative">
            <!-- Main device mockup -->
            <div class="bg-gray-900 rounded-2xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div class="bg-white rounded-xl p-6 h-96 relative overflow-hidden">
                <!-- Browser chrome -->
                <div class="flex items-center space-x-2 mb-4">
                  <div class="w-3 h-3 bg-red-500 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
                  <div class="ml-4 bg-gray-100 rounded px-3 py-1 text-xs text-gray-600 flex-1">
                    https://the-complex.agency
                  </div>
                </div>
                
                <!-- Website preview -->
                <div class="space-y-4">
                  <div class="h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pt-4">
                    <div class="h-20 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer"></div>
                    <div class="h-20 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer"></div>
                  </div>
                </div>

                <!-- Floating elements -->
                <div class="absolute -top-4 -right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full cursor-pointer transform hover:scale-110 transition-all animate-bounce">
                  +127% ROI
                </div>
                <div class="absolute bottom-4 z-20 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full cursor-pointer transform hover:scale-110 transition-all animate-pulse">
                  Швидкість: A+
                </div>
              </div>
            </div>

            <!-- Floating icons -->
            <div class="absolute -top-8 left-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 hover:shadow-xl transition-all animate-bounce animation-delay-1000">
              <Icon name="ic:round-trending-up" class="w-6 h-6 text-green-600" />
            </div>
            <div class="absolute -bottom-4 right-12 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 hover:shadow-xl transition-all animate-bounce animation-delay-3000">
              <Icon name="ic:round-speed" class="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from '~/components/UI/PrimaryButton.vue';
import SecondaryButton from '~/components/UI/SecondaryButton.vue';

const stats = [
  { value: '200+', label: 'Проектів' },
  { value: '98%', label: 'Задоволених клієнтів' },
  { value: '14', label: 'Днів до запуску' },
  { value: '5★', label: 'Рейтинг' }
];

const trustedCompanies = [
  'TechCorp', 'StartupHub', 'BusinessPro'
];

const particles = [
  {
    id: 1,
    icon: 'ic:round-code',
    class: 'text-blue-400',
    style: { top: '10%', left: '5%' }
  },
  {
    id: 2,
    icon: 'ic:round-design-services',
    class: 'text-purple-400',
    style: { top: '20%', right: '5%' }
  },
  {
    id: 3,
    icon: 'ic:round-speed',
    class: 'text-green-400',
    style: { top: '70%', left: '10%' }
  },
  {
    id: 4,
    icon: 'ic:round-analytics',
    class: 'text-orange-400',
    style: { top: '80%', right: '15%' }
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
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
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
  50% { transform: scale(1.02); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s infinite;
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.stat-item:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
  border-radius: 12px;
  padding: 8px;
}

.company-item:hover {
  background: rgba(59, 130, 246, 0.05);
  border-radius: 8px;
  padding: 4px 8px;
}

.cta-primary:hover {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  box-shadow: 0 20px 40px -12px rgba(59, 130, 246, 0.4);
}

.cta-secondary:hover {
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