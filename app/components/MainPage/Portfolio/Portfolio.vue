<template>
    <section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                    <Icon
                        name="ic:round-work"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    {{ $t('mainPage.portfolio.badgeTitle') }}
                </div>

                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    {{ $t('mainPage.portfolio.title') }}
                    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient block sm:inline">
                        {{ $t('mainPage.portfolio.titleHighlight') }}
                    </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {{ $t('mainPage.portfolio.descr') }}
                </p>
            </div>

            <!-- Filter Tabs -->
            <div class="flex flex-wrap justify-center gap-6 mb-12">
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

            <!-- Portfolio Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioCard
                    v-for="project in filteredProjects"
                    :key="project.id"
                    :project="project"
                    @click="selectedProject = project"
                    @view-details="selectedProject = project"
                    class="animate-fade-in-up"
                    :style="{ animationDelay: `${project.id * 0.1}s` }" />
            </div>

            <!-- Load More Button -->
            <div
                v-if="hasMoreProjects"
                class="text-center">
                <button
                    @click="loadMoreProjects"
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
                    {{ isLoading ? "Завантаження..." : "Показати більше" }}
                </button>
            </div>
        </div>

        <Teleport to="body">
            <div
                v-if="selectedProject"
                class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                @click="selectedProject = null">
                <div
                    class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
                    @click.stop>
                    <!-- Modal Header -->
                    <div class="relative">
                        <img
                            :src="selectedProject.image"
                            :alt="selectedProject.title"
                            class="w-full h-64 object-cover rounded-t-3xl" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-3xl"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h3 class="text-3xl font-bold mb-2">{{ selectedProject.title }}</h3>
                            <p class="text-lg opacity-90">{{ selectedProject.client }} • {{ selectedProject.year }}</p>
                        </div>
                        <button
                            @click="selectedProject = null"
                            class="absolute top-6 right-6 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-200">
                            <Icon
                                name="ic:round-close"
                                class="w-5 h-5" />
                        </button>
                    </div>

                    <!-- Modal Content -->
                    <div class="p-8">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <!-- Main Info -->
                            <div class="lg:col-span-2">
                                <h4 class="text-xl font-bold text-gray-900 mb-4">Про проект</h4>
                                <p class="text-gray-600 mb-6 leading-relaxed">
                                    {{ selectedProject.detailedDescription || selectedProject.description }}
                                </p>

                                <!-- Technologies -->
                                <h4 class="text-lg font-bold text-gray-900 mb-3">Технології</h4>
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <span
                                        v-for="tech in selectedProject.technologies"
                                        :key="tech"
                                        class="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                                        {{ tech }}
                                    </span>
                                </div>

                                <!-- Results -->
                                <div
                                    v-if="selectedProject.results"
                                    class="bg-green-50 rounded-xl p-6 mb-6">
                                    <h4 class="text-lg font-bold text-green-800 mb-2">Результати</h4>
                                    <p class="text-green-700">{{ selectedProject.results }}</p>
                                </div>
                            </div>

                            <!-- Project Stats -->
                            <div class="space-y-6">
                                <div class="bg-gray-50 rounded-xl p-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-4">Деталі проекту</h4>
                                    <div class="space-y-4">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Категорія:</span>
                                            <span class="font-medium">{{ selectedProject.category }}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Тривалість:</span>
                                            <span class="font-medium">{{ selectedProject.duration }}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Команда:</span>
                                            <span class="font-medium">{{ selectedProject.teamSize }} розробників</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Рейтинг:</span>
                                            <div class="flex items-center gap-1">
                                                <Icon
                                                    name="ic:round-star"
                                                    class="w-4 h-4 text-yellow-500" />
                                                <span class="font-medium">{{ selectedProject.rating }}/5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Actions -->
                                <div class="space-y-3">
                                    <button
                                        v-if="selectedProject.liveUrl"
                                        @click="openLink(selectedProject.liveUrl)"
                                        class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                        <Icon
                                            name="ic:round-launch"
                                            class="w-5 h-5" />
                                        Переглянути сайт
                                    </button>
                                    <button
                                        class="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                                        <Icon
                                            name="ic:round-chat"
                                            class="w-5 h-5" />
                                        Обговорити подібний проект
                                    </button>
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
import { ref, computed, onMounted } from "vue";
import PortfolioCard from "./PortfolioCard.vue";

interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    detailedDescription?: string;
    category: string;
    image: string;
    technologies: string[];
    client: string;
    year: string;
    duration: string;
    teamSize: number;
    rating: number;
    results?: string;
    liveUrl?: string;
    isLive: boolean;
}

const activeFilter = ref("all");
const selectedProject = ref<PortfolioProject | null>(null);
const isLoading = ref(false);
const currentPage = ref(1);
const projectsPerPage = 9;

const filters = [
    { id: "all", name: "Всі проекти", icon: "ic:round-apps", count: 24 },
    { id: "e-commerce", name: "E-commerce", icon: "ic:round-shopping-cart", count: 8 },
    { id: "webapp", name: "Веб-додатки", icon: "ic:round-web", count: 6 },
    { id: "mobile", name: "Мобільні додатки", icon: "ic:round-smartphone", count: 4 },
    { id: "corporate", name: "Корпоративні", icon: "ic:round-business", count: 4 },
    { id: "startup", name: "Стартапи", icon: "ic:round-rocket-launch", count: 2 }
];

const portfolioProjects: PortfolioProject[] = [
    {
        id: 1,
        title: "TechShop - Інтернет-магазин електроніки",
        description: "Сучасний інтернет-магазин з повною інтеграцією платіжних систем та системою управління товарами.",
        detailedDescription:
            "Повнофункціональний інтернет-магазин електроніки з інтуїтивним інтерфейсом, швидким пошуком товарів, системою відгуків та рекомендацій. Інтегровані всі популярні платіжні системи України, реалізована система знижок та програма лояльності.",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "Redis"],
        client: "TechCorp",
        year: "2023",
        duration: "3 місяці",
        teamSize: 4,
        rating: 4.8,
        results: "Збільшення конверсії на 180%, зріст продажів у 2.5 рази",
        liveUrl: "https://example.com",
        isLive: true
    },
    {
        id: 2,
        title: "MedConnect - Платформа телемедицини",
        description: "Система онлайн-консультацій з лікарями з відеозв'язком, електронними рецептами та історією хвороб.",
        detailedDescription:
            "Комплексна телемедична платформа, що дозволяє пацієнтам отримувати консультації лікарів онлайн. Система включає відеозв'язок HD якості, електронні медичні картки, систему призначень та рецептів, інтеграцію з лабораторіями.",
        category: "Healthcare",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
        technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "Socket.io"],
        client: "HealthTech",
        year: "2023",
        duration: "6 місяців",
        teamSize: 6,
        rating: 4.9,
        results: "Обслуговує 10,000+ пацієнтів щомісячно, 95% задоволених користувачів",
        liveUrl: "https://medconnect.example.com",
        isLive: true
    },
    {
        id: 3,
        title: "EduPlatform - Система дистанційного навчання",
        description: "LMS платформа для онлайн-освіти з інтерактивними курсами, тестуванням та сертифікацією.",
        detailedDescription:
            "Потужна система управління навчанням (LMS) для освітніх закладів. Включає створення інтерактивних курсів, систему тестування з різними типами питань, відеолекції, форуми для обговорень, система оцінювання та сертифікації.",
        category: "Education",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
        technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "FFmpeg"],
        client: "EduTech Academy",
        year: "2023",
        duration: "4 місяці",
        teamSize: 5,
        rating: 4.7,
        results: "15,000+ студентів, 500+ курсів, 92% завершення курсів",
        liveUrl: "https://eduplatform.example.com",
        isLive: true
    },
    {
        id: 4,
        title: "LogiTrack - Система управління логістикою",
        description: "Комплексна система трекінгу вантажів, оптимізації маршрутів та управління автопарком.",
        detailedDescription:
            "Професійна логістична платформа для управління перевезеннями. Включає GPS-трекінг транспорту в реальному часі, оптимізацію маршрутів з урахуванням трафіку, управління документообігом, аналітику витрат палива та ефективності водіїв.",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
        technologies: ["React", "Python", "PostgreSQL", "Google Maps API", "Docker"],
        client: "TransLogistics",
        year: "2023",
        duration: "5 місяців",
        teamSize: 4,
        rating: 4.6,
        results: "Оптимізація маршрутів на 25%, економія палива 15%",
        isLive: false
    },
    {
        id: 5,
        title: "BeautyBook - Система записів для салонів краси",
        description: "Мобільний додаток та веб-платформа для онлайн-записів до салонів краси з програмою лояльності.",
        detailedDescription:
            "Комплексне рішення для салонів краси, що включає мобільний додаток для клієнтів та адмін-панель для персоналу. Онлайн-запис на процедури, управління розкладом майстрів, програма лояльності з бонусами, push-сповіщення та SMS.",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
        technologies: ["React Native", "Laravel", "MySQL", "Firebase", "Stripe"],
        client: "Beauty Chain",
        year: "2022",
        duration: "4 місяці",
        teamSize: 3,
        rating: 4.8,
        results: "Збільшення кількості записів на 200%, задоволеність клієнтів 96%",
        liveUrl: "https://beautybook.example.com",
        isLive: true
    },
    {
        id: 6,
        title: "FinanceBot - Telegram бот для фінансів",
        description: "Розумний бот для управління особистими фінансами з аналітикою витрат та планування бюджету.",
        detailedDescription:
            "Інтелектуальний Telegram бот для управління особистими фінансами. Автоматичне категоризування витрат, планування бюджету, аналітика трендів, нагадування про платежі, інтеграція з банківськими API для автоматичного імпорту транзакцій.",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
        technologies: ["Python", "MongoDB", "Telegram API", "Chart.js", "Redis"],
        client: "FinTech Startup",
        year: "2022",
        duration: "2 місяці",
        teamSize: 2,
        rating: 4.5,
        results: "25,000+ активних користувачів, середня економія 20%",
        liveUrl: "https://t.me/financebot",
        isLive: true
    },
    {
        id: 7,
        title: "CorporateHub - Корпоративний портал",
        description: "Внутрішній корпоративний портал для великої компанії з HR-модулями та документообігом.",
        detailedDescription:
            "Комплексний корпоративний портал для управління внутрішніми процесами великої компанії. Включає HR-модулі для управління персоналом, систему електронного документообігу, корпоративні новини, календар подій, систему заявок та багатомовність.",
        category: "Corporate",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
        technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure", "SignalR"],
        client: "Enterprise Corp",
        year: "2022",
        duration: "8 місяців",
        teamSize: 7,
        rating: 4.4,
        results: "Автоматизація 70% процесів, підвищення ефективності на 40%",
        isLive: false
    },
    {
        id: 8,
        title: "FoodDelivery - Сервіс доставки їжі",
        description: "Мультиплатформний додаток для замовлення та доставки їжі з геолокацією та онлайн-оплатою.",
        detailedDescription:
            "Повнофункціональна платформа доставки їжі, що включає мобільні додатки для клієнтів та кур'єрів, веб-панель для ресторанів та адміністрування. GPS-трекінг замовлень в реальному часі, інтеграція платіжних систем, система рейтингів.",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
        technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps", "Stripe"],
        client: "FoodTech",
        year: "2022",
        duration: "6 місяців",
        teamSize: 5,
        rating: 4.7,
        results: "50+ ресторанів-партнерів, 100,000+ замовлень щомісячно",
        liveUrl: "https://fooddelivery.example.com",
        isLive: true
    },
    {
        id: 9,
        title: "StartupLaunch - Платформа для стартапів",
        description: "MVP платформа для пошуку інвесторів та презентації стартап-проектів з інтерактивними презентаціями.",
        detailedDescription:
            "Інноваційна платформа для стартапів, яка допомагає підприємцям знаходити інвесторів та представляти свої ідеї. Включає конструктор презентацій, систему матчингу стартапів та інвесторів, відеопрезентації, систему оцінювання проектів.",
        category: "Startup",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
        technologies: ["React", "Firebase", "Stripe", "WebRTC", "Chart.js"],
        client: "Innovation Hub",
        year: "2021",
        duration: "3 місяці",
        teamSize: 3,
        rating: 4.3,
        results: "Залучено $2M інвестицій для стартапів-учасників",
        liveUrl: "https://startuplaunch.example.com",
        isLive: true
    }
];

const filteredProjects = computed(() => {
    const filtered =
        activeFilter.value === "all"
            ? portfolioProjects
            : portfolioProjects.filter((project) => {
                  const filterMap: { [key: string]: string[] } = {
                      "e-commerce": ["E-commerce"],
                      webapp: ["Web App", "Healthcare"],
                      mobile: ["Mobile App"],
                      corporate: ["Corporate"],
                      startup: ["Startup"]
                  };
                  return filterMap[activeFilter.value]?.includes(project.category);
              });

    return filtered.slice(0, currentPage.value * projectsPerPage);
});

const hasMoreProjects = computed(() => {
    const totalFiltered =
        activeFilter.value === "all"
            ? portfolioProjects.length
            : portfolioProjects.filter((project) => {
                  const filterMap: { [key: string]: string[] } = {
                      "e-commerce": ["E-commerce"],
                      webapp: ["Web App", "Healthcare"],
                      mobile: ["Mobile App"],
                      corporate: ["Corporate"],
                      startup: ["Startup"]
                  };
                  return filterMap[activeFilter.value]?.includes(project.category);
              }).length;

    return filteredProjects.value.length < totalFiltered;
});

const loadMoreProjects = async () => {
    isLoading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    currentPage.value++;
    isLoading.value = false;
};

const openLink = (url: string) => {
    window.open(url, "_blank");
};

onMounted(() => {
    currentPage.value = 1;
});
</script>

<style scoped>
</style>
