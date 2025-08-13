<template>
  <section class="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
      <div class="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 60px 60px;"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-20 animate-fade-in">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
          <Icon name="ic:round-timeline" class="w-4 h-4 mr-2 text-blue-600" />
          Як ми працюємо
        </div>
        
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Наші етапи роботи —
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient block sm:inline">
            від ідеї до запуску
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Прозорий та структурований процес роботи. Ви завжди знаєте, на якому етапі знаходиться ваш проект 
          та що відбувається далі
        </p>
      </div>

      <!-- Interactive Timeline -->
      <div class="relative mb-20">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full hidden lg:block">
          <div class="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse-slow"></div>
        </div>

        <!-- Steps -->
        <div class="space-y-16 lg:space-y-24 relative">
          <div v-for="(step, index) in workSteps" :key="step.id"
               :class="[
                 'flex flex-col lg:flex-row items-center gap-8',
                 index % 2 === 1 ? 'lg:flex-row-reverse' : ''
               ]"
               class="animate-fade-in-up step-container"
               :style="{ animationDelay: `${index * 0.2}s` }">
            
            <!-- Step Content -->
            <div class="flex-1 max-w-lg">
              <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 step-card group cursor-pointer"
                   @click="selectStep(step.id)">
                
                <!-- Step Header -->
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                       :class="step.iconBg">
                    <Icon :name="step.icon" class="w-8 h-8" :class="step.iconColor" />
                  </div>
                  <div>
                    <div class="text-sm text-gray-500 mb-1">Етап {{ step.id }}</div>
                    <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {{ step.title }}
                    </h3>
                  </div>
                </div>

                <!-- Duration and Team -->
                <div class="flex items-center gap-6 mb-4 text-sm text-gray-600">
                  <div class="flex items-center gap-2">
                    <Icon name="ic:round-access-time" class="w-4 h-4 text-blue-500" />
                    {{ step.duration }}
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ic:round-people" class="w-4 h-4 text-green-500" />
                    {{ step.team }}
                  </div>
                </div>

                <!-- Description -->
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ step.description }}
                </p>

                <!-- Deliverables -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-gray-900 mb-3">Що ви отримаєте:</h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div v-for="deliverable in step.deliverables" :key="deliverable"
                         class="flex items-center gap-2 text-sm text-gray-700">
                      <Icon name="ic:round-check-circle" class="w-4 h-4 text-green-500" />
                      {{ deliverable }}
                    </div>
                  </div>
                </div>

                <!-- Tools used -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="tool in step.tools" :key="tool"
                        class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
                    {{ tool }}
                  </span>
                </div>

                <!-- Progress indicator -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="text-sm text-gray-500">
                    Прогрес: {{ step.progress }}%
                  </div>
                  <div class="flex items-center gap-2 text-sm text-blue-600 font-medium group-hover:gap-3 transition-all duration-300">
                    Детальніше
                    <Icon name="ic:round-arrow-forward" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                <!-- Hover glow effect -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl pointer-events-none"
                     :class="step.glowColor"></div>
              </div>
            </div>

            <!-- Timeline Node -->
            <div class="relative z-10 hidden lg:block">
              <div class="w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-110"
                   :class="step.nodeBg">
                <div class="w-12 h-12 rounded-full flex items-center justify-center"
                     :class="step.nodeInner">
                  <span class="text-xl font-bold text-white">{{ step.id }}</span>
                </div>
                
                <!-- Node pulse effect -->
                <div class="absolute inset-0 rounded-full animate-ping opacity-30"
                     :class="step.nodeInner"></div>
              </div>
            </div>

            <!-- Step Visual/Mockup -->
            <div class="flex-1 max-w-lg">
              <div class="relative group">
                <!-- Main visual -->
                <div class="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  
                  <!-- Visual content based on step type -->
                  <div v-if="step.id === 1" class="space-y-4">
                    <!-- Discovery phase mockup -->
                    <div class="bg-white rounded-xl p-4 shadow-sm">
                      <div class="flex items-center gap-3 mb-3">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div class="space-y-2">
                        <div class="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div class="h-3 bg-blue-200 rounded w-1/2"></div>
                        <div class="h-3 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                    <div class="text-center text-sm text-gray-600">Аналіз вимог</div>
                  </div>

                  <div v-else-if="step.id === 2" class="space-y-4">
                    <!-- Design phase mockup -->
                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-16"></div>
                      <div class="bg-gradient-to-br from-green-100 to-cyan-100 rounded-lg h-16"></div>
                    </div>
                    <div class="bg-white rounded-xl p-3 shadow-sm">
                      <div class="flex justify-center">
                        <Icon name="ic:round-palette" class="w-8 h-8 text-purple-500" />
                      </div>
                    </div>
                    <div class="text-center text-sm text-gray-600">UI/UX дизайн</div>
                  </div>

                  <div v-else-if="step.id === 3" class="space-y-4">
                    <!-- Development phase mockup -->
                    <div class="bg-gray-900 rounded-xl p-4 text-green-400 font-mono text-xs">
                      <div>&lt;div class="component"&gt;</div>
                      <div class="ml-4">&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                      <div>&lt;/div&gt;</div>
                    </div>
                    <div class="text-center text-sm text-gray-600">Розробка</div>
                  </div>

                  <div v-else-if="step.id === 4" class="space-y-4">
                    <!-- Testing phase mockup -->
                    <div class="space-y-2">
                      <div class="flex items-center gap-2">
                        <Icon name="ic:round-check-circle" class="w-4 h-4 text-green-500" />
                        <div class="h-2 bg-green-200 rounded flex-1"></div>
                        <span class="text-xs text-green-600">✓</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <Icon name="ic:round-check-circle" class="w-4 h-4 text-green-500" />
                        <div class="h-2 bg-green-200 rounded flex-1"></div>
                        <span class="text-xs text-green-600">✓</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <Icon name="ic:round-schedule" class="w-4 h-4 text-yellow-500" />
                        <div class="h-2 bg-yellow-200 rounded flex-1"></div>
                        <span class="text-xs text-yellow-600">●</span>
                      </div>
                    </div>
                    <div class="text-center text-sm text-gray-600">Тестування</div>
                  </div>

                  <div v-else class="space-y-4">
                    <!-- Launch phase mockup -->
                    <div class="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-6 text-white text-center">
                      <Icon name="ic:round-rocket-launch" class="w-12 h-12 mx-auto mb-2" />
                      <div class="text-lg font-bold">LIVE</div>
                    </div>
                    <div class="text-center text-sm text-gray-600">Запуск проекту</div>
                  </div>
                </div>

                <!-- Floating indicators -->
                <div v-if="step.isPopular" 
                     class="absolute -top-3 -right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce shadow-lg">
                  Важливо!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Process Benefits -->
      <div class="mb-20">
        <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Переваги нашого <span class="text-blue-600">процесу</span>
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="benefit in processBenefits" :key="benefit.id"
               class="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                 :class="benefit.iconBg">
              <Icon :name="benefit.icon" class="w-8 h-8" :class="benefit.iconColor" />
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {{ benefit.title }}
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Timeline Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200 mb-16">
        <div v-for="stat in timelineStats" :key="stat.label" 
             class="text-center stat-item cursor-pointer transform hover:scale-110 transition-all duration-300">
          <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-blob"></div>
          <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full animate-blob animation-delay-2000"></div>
        </div>
        
        <div class="relative">
          <div class="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Icon name="ic:round-schedule-send" class="w-10 h-10 text-white" />
          </div>
          
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            Готові почати ваш проект?
          </h3>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Давайте обговоримо ваші ідеї та розпочнемо роботу вже сьогодні. 
            Перший етап — безкоштовна консультація
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button class="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Icon name="ic:round-play-arrow" class="w-5 h-5" />
              Розпочати проект
            </button>
            <button class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
              <Icon name="ic:round-phone" class="w-5 h-5" />
              Безкоштовна консультація
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Step Detail Modal -->
    <Teleport to="body">
      <div v-if="selectedStep" 
           class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
           @click="selectedStep = null">
        <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
             @click.stop>
          <!-- Modal content -->
          <div class="p-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-gray-900">{{ selectedStepData?.title }}</h3>
              <button @click="selectedStep = null"
                      class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                <Icon name="ic:round-close" class="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Детальний опис:</h4>
                <p class="text-gray-600 leading-relaxed">{{ selectedStepData?.detailedDescription }}</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Основні завдання:</h4>
                <ul class="space-y-2">
                  <li v-for="task in selectedStepData?.tasks" :key="task"
                      class="flex items-start gap-3">
                    <Icon name="ic:round-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <span class="text-gray-600">{{ task }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Результати етапу:</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div v-for="result in selectedStepData?.results" :key="result"
                       class="flex items-center gap-2 text-sm text-gray-700">
                    <Icon name="ic:round-done" class="w-4 h-4 text-blue-500" />
                    {{ result }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface WorkStep {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  duration: string;
  team: string;
  deliverables: string[];
  tools: string[];
  tasks: string[];
  results: string[];
  progress: number;
  icon: string;
  iconBg: string;
  iconColor: string;
  nodeBg: string;
  nodeInner: string;
  glowColor: string;
  isPopular: boolean;
}

const selectedStep = ref<number | null>(null);

const workSteps: WorkStep[] = [
  {
    id: 1,
    title: 'Дослідження та аналіз',
    description: 'Детально вивчаємо ваш бізнес, цільову аудиторію та конкурентів. Визначаємо технічні вимоги та створюємо план проекту.',
    detailedDescription: 'На цьому етапі ми проводимо глибоке дослідження вашого бізнесу, аналізуємо ринок та конкурентів. Визначаємо цільову аудиторію, її потреби та поведінку. Створюємо технічні вимоги, архітектуру проекту та детальний план реалізації.',
    duration: '3-5 днів',
    team: '2-3 спеціалісти',
    deliverables: ['Бриф проекту', 'Аналіз конкурентів', 'Технічні вимоги', 'План проекту'],
    tools: ['Miro', 'Figma', 'Google Analytics', 'Notion'],
    tasks: [
      'Інтерв\'ю з замовником та стейкхолдерами',
      'Аналіз поточного стану бізнесу',
      'Дослідження цільової аудиторії',
      'Аналіз конкурентів та ринку',
      'Визначення технічних вимог',
      'Створення архітектури проекту'
    ],
    results: ['Чіткий план проекту', 'Технічне завдання', 'Зрозуміла мета', 'Оцінка ризиків'],
    progress: 15,
    icon: 'ic:round-search',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    nodeBg: 'bg-gradient-to-r from-blue-500 to-blue-600',
    nodeInner: 'bg-blue-600',
    glowColor: 'bg-blue-400',
    isPopular: true
  },
  {
    id: 2,
    title: 'Дизайн та прототипування',
    description: 'Створюємо wireframes, UI/UX дизайн та інтерактивні прототипи. Тестуємо користувацький досвід та вносимо корективи.',
    detailedDescription: 'Розробляємо повний дизайн системи, від wireframes до фінального UI. Створюємо інтерактивні прототипи для тестування користувацького досвіду. Проводимо UX дослідження та A/B тестування ключових елементів.',
    duration: '1-2 тижні',
    team: '2-3 дизайнери',
    deliverables: ['Wireframes', 'UI/UX дизайн', 'Прототип', 'Design System'],
    tools: ['Figma', 'Adobe XD', 'Principle', 'Zeplin'],
    tasks: [
      'Створення user journey maps',
      'Розробка wireframes та mockups',
      'Дизайн користувацького інтерфейсу',
      'Створення інтерактивних прототипів',
      'UX тестування з реальними користувачами',
      'Розробка design system'
    ],
    results: ['Готовий дизайн', 'Інтерактивний прототип', 'Гайдлайни', 'Тестування UX'],
    progress: 35,
    icon: 'ic:round-palette',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    nodeBg: 'bg-gradient-to-r from-purple-500 to-purple-600',
    nodeInner: 'bg-purple-600',
    glowColor: 'bg-purple-400',
    isPopular: false
  },
  {
    id: 3,
    title: 'Розробка та інтеграція',
    description: 'Програмуємо frontend та backend частини, інтегруємо з третіми сервісами та API. Слідкуємо за якістю коду.',
    detailedDescription: 'Розробляємо повнофункціональний додаток використовуючи сучасні технології. Інтегруємо з необхідними API та сервісами. Забезпечуємо високу якість коду через code review та автоматизоване тестування.',
    duration: '2-6 тижнів',
    team: '3-5 розробників',
    deliverables: ['Frontend', 'Backend', 'Інтеграції', 'Документація'],
    tools: ['Vue.js', 'Laravel', 'Docker', 'Git'],
    tasks: [
      'Налаштування середовища розробки',
      'Створення backend API',
      'Розробка frontend інтерфейсу',
      'Інтеграція з зовнішніми сервісами',
      'Впровадження системи аутентифікації',
      'Оптимізація продуктивності'
    ],
    results: ['Робочий додаток', 'Чистий код', 'API документація', 'Інтеграції'],
    progress: 70,
    icon: 'ic:round-code',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    nodeBg: 'bg-gradient-to-r from-green-500 to-green-600',
    nodeInner: 'bg-green-600',
    glowColor: 'bg-green-400',
    isPopular: false
  },
  {
    id: 4,
    title: 'Тестування та оптимізація',
    description: 'Проводимо всестороннє тестування: функціональне, юзабіліті, безпеки та продуктивності. Виправляємо помилки.',
    detailedDescription: 'Виконуємо комплексне тестування проекту на всіх рівнях. Тестуємо функціональність, безпеку, продуктивність та сумісність. Проводимо навантажувальні тести та оптимізуємо швидкодію.',
    duration: '1-2 тижні',
    team: '2-3 тестери',
    deliverables: ['Звіт тестування', 'Виправлені баги', 'Оптимізація', 'Документація'],
    tools: ['Cypress', 'Jest', 'Lighthouse', 'Postman'],
    tasks: [
      'Функціональне тестування',
      'Тестування безпеки',
      'Перевірка продуктивності',
      'Кросбраузерне тестування',
      'Мобільне тестування',
      'Навантажувальні тести'
    ],
    results: ['Стабільна робота', 'Високу швидкодію', 'Безпека', 'Кросплатформенність'],
    progress: 90,
    icon: 'ic:round-bug-report',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    nodeBg: 'bg-gradient-to-r from-orange-500 to-orange-600',
    nodeInner: 'bg-orange-600',
    glowColor: 'bg-orange-400',
    isPopular: true
  },
  {
    id: 5,
    title: 'Запуск та супровід',
    description: 'Розгортаємо проект на production сервері, налаштовуємо моніторинг та забезпечуємо технічну підтримку.',
    detailedDescription: 'Здійснюємо плавний запуск проекту в production середовище. Налаштовуємо системи моніторингу, резервного копіювання та безпеки. Забезпечуємо навчання команди та постійну технічну підтримку.',
    duration: '1 тиждень + ongoing',
    team: '2-3 DevOps',
    deliverables: ['Production deploy', 'Моніторинг', 'Навчання', '24/7 підтримка'],
    tools: ['AWS', 'Docker', 'Nginx', 'Cloudflare'],
    tasks: [
      'Налаштування production середовища',
      'Конфігурація серверів та CDN',
      'Впровадження систем моніторингу',
      'Навчання команди замовника',
      'Створення документації',
      'Налаштування автоматичних backup\'ів'
    ],
    results: ['Стабільна робота', 'Моніторинг 24/7', 'Навчена команда', 'Документація'],
    progress: 100,
    icon: 'ic:round-rocket-launch',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    nodeBg: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
    nodeInner: 'bg-indigo-600',
    glowColor: 'bg-indigo-400',
    isPopular: false
  }
];

const processBenefits = [
  {
    id: 1,
    title: 'Прозорість',
    description: 'Ви завжди знаєте, на якому етапі проект та що відбувається далі',
    icon: 'ic:round-visibility',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Контроль якості',
    description: 'Кожен етап проходить ретельну перевірку перед переходом до наступного',
    icon: 'ic:round-verified',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    title: 'Гнучкість',
    description: 'Можемо вносити зміни та адаптуватися під ваші потреби на будь-якому етапі',
    icon: 'ic:round-tune',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    title: 'Результат',
    description: 'Гарантуємо якісний результат завдяки структурованому підходу',
    icon: 'ic:round-emoji-events',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
];

const timelineStats = [
  { value: '5', label: 'Етапів роботи' },
  { value: '14', label: 'Днів до запуску' },
  { value: '98%', label: 'Проектів в термін' },
  { value: '24/7', label: 'Підтримка після запуску' }
];

const backgroundParticles = [
  {
    id: 1,
    icon: 'ic:round-timeline',
    class: 'text-blue-400',
    style: { top: '12%', left: '8%' }
  },
  {
    id: 2,
    icon: 'ic:round-task-alt',
    class: 'text-green-400',
    style: { top: '20%', right: '10%' }
  },
  {
    id: 3,
    icon: 'ic:round-build',
    class: 'text-purple-400',
    style: { top: '45%', left: '5%' }
  },
  {
    id: 4,
    icon: 'ic:round-rocket-launch',
    class: 'text-orange-400',
    style: { top: '65%', right: '8%' }
  },
  {
    id: 5,
    icon: 'ic:round-done-all',
    class: 'text-pink-400',
    style: { top: '85%', left: '12%' }
  }
];

const selectedStepData = computed(() => {
  return workSteps.find(step => step.id === selectedStep.value);
});

const selectStep = (stepId: number) => {
  selectedStep.value = stepId;
};
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
  50% { transform: translateY(-15px) rotate(3deg); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.animate-blob {
  animation: blob 12s infinite;
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 6s ease infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 3s infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.step-card {
  position: relative;
}

.step-container:nth-child(even) .step-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.8));
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