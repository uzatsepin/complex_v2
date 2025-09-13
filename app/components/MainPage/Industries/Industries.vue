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
                    class="absolute pointer-events-none animate-float opacity-40">
                    <Icon
                        :name="particle.icon"
                        class="w-5 h-5" />
                </div>
            </div>

            <!-- Decorative orbs -->
            <div
                class="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div
                class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-green-400/15 to-cyan-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>

            <!-- Grid pattern -->
            <div class="absolute inset-0 opacity-20">
                <div
                    class="absolute inset-0"
                    style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 60px 60px"></div>
            </div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <!-- Section Header -->
            <div class="text-center mb-16 animate-fade-in">
                <div
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce-subtle">
                    <Icon
                        name="ic:round-business-center"
                        class="w-4 h-4 mr-2 text-blue-600" />
                    Наші індустрії
                </div>

                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Експертиза у
                    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                        різних галузях
                    </span>
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Працюємо з компаніями різних сфер діяльності, розуміємо специфіку кожної індустрії та створюємо рішення, які дійсно працюють для вашого
                    бізнесу
                </p>
            </div>

            <!-- Industries Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                <IndustriesCard
                    v-for="(industry, index) in industries"
                    :key="industry.id"
					:index="index"
                    :industry="industry" />
            </div>

            <!-- CTA Section -->
            <CtaSection 
                :title="$t('ctaSection.didnotFind')"
                :descr="$t('ctaSection.weWorkWithDifferent')"
                :button1="$t('ctaSection.buttonTalk')"
                :button2="$t('ctaSection.buttonPortfolio')"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Iindustry } from "~/interface";
import IndustriesCard from "./IndustriesCard/IndustriesCard.vue";
import CtaSection from "~/components/UI/CtaSection/CtaSection.vue";

const industries: Iindustry[] = [
    {
        id: 1,
        title: "E-commerce",
        description: "Інтернет-магазини та Instagram-шопи з повною автоматизацією продажів",
        detailedDescription:
            "Створюємо повнофункціональні інтернет-магазини з інтеграцією платіжних систем, управлінням товарами, аналітикою та маркетинговими інструментами.",
        icon: "ic:round-shopping-cart",
        iconBg: "bg-green-100 group-hover:bg-green-200",
        iconColor: "text-green-600",
        titleGradient: "group-hover:from-green-500 group-hover:to-emerald-600",
        glowColor: "bg-green-400",
        pattern: "repeating-linear-gradient(45deg, rgba(34, 197, 94, 0.1) 0px, rgba(34, 197, 94, 0.1) 1px, transparent 1px, transparent 12px)",
        isTop: true,
        projectsCount: 45,
        growthRate: "+180%",
        avgTimeline: "3-4 тижні",
        successRate: 96,
        technologies: ["Shopify", "WooCommerce", "Next.js", "Stripe", "Analytics"],
        caseStudy: "Кейс: Зріст продажів на 180%"
    },
    {
        id: 2,
        title: "Telegram боти",
        description: "Розумні боти для автоматизації бізнес-процесів та обслуговування клієнтів",
        detailedDescription: "Розробляємо Telegram ботів для автоматизації замовлень, консультацій, управління контентом та інтеграції з бізнес-системами.",
        icon: "ic:round-smart-toy",
        iconBg: "bg-blue-100 group-hover:bg-blue-200",
        iconColor: "text-blue-600",
        titleGradient: "group-hover:from-blue-500 group-hover:to-cyan-600",
        glowColor: "bg-blue-400",
        pattern: "repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0px, rgba(59, 130, 246, 0.1) 1px, transparent 1px, transparent 10px)",
        isTop: false,
        projectsCount: 38,
        growthRate: "+120%",
        avgTimeline: "1-2 тижні",
        successRate: 98,
        technologies: ["Python", "Node.js", "Telegram API", "MongoDB", "Redis"],
        caseStudy: "Кейс: Автоматизація 80% запитів"
    },
    {
        id: 3,
        title: "Аграрний бізнес",
        description: "Цифрові рішення для сільського господарства та агротехнологій",
        detailedDescription: "Системи моніторингу врожаю, управління ресурсами, логістики та продажу сільськогосподарської продукції.",
        icon: "ic:round-agriculture",
        iconBg: "bg-emerald-100 group-hover:bg-emerald-200",
        iconColor: "text-emerald-600",
        titleGradient: "group-hover:from-emerald-500 group-hover:to-green-600",
        glowColor: "bg-emerald-400",
        pattern: "repeating-linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0px, rgba(16, 185, 129, 0.1) 1px, transparent 1px, transparent 15px)",
        isTop: false,
        projectsCount: 12,
        growthRate: "+95%",
        avgTimeline: "4-6 тижнів",
        successRate: 92,
        technologies: ["IoT", "React", "PostgreSQL", "Python", "GIS"],
        caseStudy: "Кейс: Оптимізація ресурсів на 30%"
    },
    {
        id: 4,
        title: "Краса та здоров'я",
        description: "Платформи для салонів краси, SPA та wellness індустрії",
        detailedDescription: "Системи онлайн-записів, управління клієнтами, програми лояльності та інтернет-магазини косметики.",
        icon: "ic:round-spa",
        iconBg: "bg-pink-100 group-hover:bg-pink-200",
        iconColor: "text-pink-600",
        titleGradient: "group-hover:from-pink-500 group-hover:to-rose-600",
        glowColor: "bg-pink-400",
        pattern: "repeating-linear-gradient(60deg, rgba(236, 72, 153, 0.1) 0px, rgba(236, 72, 153, 0.1) 1px, transparent 1px, transparent 8px)",
        isTop: true,
        projectsCount: 28,
        growthRate: "+150%",
        avgTimeline: "2-3 тижні",
        successRate: 94,
        technologies: ["Vue.js", "Laravel", "Stripe", "Calendar API", "SMS"],
        caseStudy: "Кейс: 3x збільшення записів"
    },
    {
        id: 5,
        title: "Медицина",
        description: "Цифрові рішення для медичних закладів та телемедицини",
        detailedDescription: "Системи електронного документообігу, телемедицина, управління пацієнтами та медичні портали.",
        icon: "ic:round-local-hospital",
        iconBg: "bg-red-100 group-hover:bg-red-200",
        iconColor: "text-red-600",
        titleGradient: "group-hover:from-red-500 group-hover:to-rose-600",
        glowColor: "bg-red-400",
        pattern: "repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0px, rgba(239, 68, 68, 0.1) 1px, transparent 1px, transparent 11px)",
        isTop: false,
        projectsCount: 15,
        growthRate: "+110%",
        avgTimeline: "5-8 тижнів",
        successRate: 89,
        technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "FHIR"],
        caseStudy: "Кейс: Телемедицина для клініки"
    },
    {
        id: 6,
        title: "Логістика",
        description: "Системи управління перевезеннями та складською логістикою",
        detailedDescription: "Платформи для управління вантажоперевезеннями, трекінгу, оптимізації маршрутів та автоматизації складських операцій.",
        icon: "ic:round-local-shipping",
        iconBg: "bg-orange-100 group-hover:bg-orange-200",
        iconColor: "text-orange-600",
        titleGradient: "group-hover:from-orange-500 group-hover:to-amber-600",
        glowColor: "bg-orange-400",
        pattern: "repeating-linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0px, rgba(249, 115, 22, 0.1) 1px, transparent 1px, transparent 14px)",
        isTop: false,
        projectsCount: 22,
        growthRate: "+85%",
        avgTimeline: "4-5 тижнів",
        successRate: 91,
        technologies: ["React", "Python", "PostgreSQL", "Maps API", "ML"],
        caseStudy: "Кейс: Оптимізація доставки"
    },
    {
        id: 7,
        title: "Фінтех",
        description: "Фінансові платформи та системи онлайн-платежів",
        detailedDescription: "Розробляємо фінансові додатки, платіжні системи, кредитні платформи та інструменти для управління фінансами.",
        icon: "ic:round-account-balance",
        iconBg: "bg-indigo-100 group-hover:bg-indigo-200",
        iconColor: "text-indigo-600",
        titleGradient: "group-hover:from-indigo-500 group-hover:to-purple-600",
        glowColor: "bg-indigo-400",
        pattern: "repeating-linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0px, rgba(99, 102, 241, 0.1) 1px, transparent 1px, transparent 12px)",
        isTop: false,
        projectsCount: 18,
        growthRate: "+200%",
        avgTimeline: "6-10 тижнів",
        successRate: 88,
        technologies: ["React", "Node.js", "Blockchain", "Security", "API"],
        caseStudy: "Кейс: P2P платіжна система"
    },
    {
        id: 8,
        title: "Освіта",
        description: "EdTech платформи та системи онлайн-навчання",
        detailedDescription: "LMS системи, онлайн-курси, системи тестування та платформи для дистанційного навчання.",
        icon: "ic:round-school",
        iconBg: "bg-purple-100 group-hover:bg-purple-200",
        iconColor: "text-purple-600",
        titleGradient: "group-hover:from-purple-500 group-hover:to-indigo-600",
        glowColor: "bg-purple-400",
        pattern: "repeating-linear-gradient(60deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 9px)",
        isTop: true,
        projectsCount: 31,
        growthRate: "+140%",
        avgTimeline: "3-5 тижнів",
        successRate: 95,
        technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AI"],
        caseStudy: "Кейс: Онлайн-академія з 10k+ студентів"
    }
];

const backgroundParticles = [
    {
        id: 1,
        icon: "ic:round-trending-up",
        class: "text-blue-400",
        style: { top: "12%", left: "8%" }
    },
    {
        id: 2,
        icon: "ic:round-lightbulb",
        class: "text-yellow-400",
        style: { top: "20%", right: "15%" }
    },
    {
        id: 3,
        icon: "ic:round-rocket-launch",
        class: "text-purple-400",
        style: { top: "35%", left: "5%" }
    },
    {
        id: 4,
        icon: "ic:round-auto-graph",
        class: "text-green-400",
        style: { top: "55%", right: "8%" }
    },
    {
        id: 5,
        icon: "ic:round-psychology",
        class: "text-pink-400",
        style: { top: "70%", left: "12%" }
    },
    {
        id: 6,
        icon: "ic:round-settings",
        class: "text-gray-400",
        style: { top: "80%", right: "20%" }
    }
];
</script>

<style scoped>

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

.animation-delay-100 {
    animation-delay: 0.1s;
}
.animation-delay-200 {
    animation-delay: 0.2s;
}
.animation-delay-300 {
    animation-delay: 0.3s;
}
.animation-delay-400 {
    animation-delay: 0.4s;
}
.animation-delay-500 {
    animation-delay: 0.5s;
}
.animation-delay-600 {
    animation-delay: 0.6s;
}
.animation-delay-700 {
    animation-delay: 0.7s;
}
.animation-delay-800 {
    animation-delay: 0.8s;
}
.animation-delay-2000 {
    animation-delay: 2s;
}
.animation-delay-3000 {
    animation-delay: 3s;
}

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
</style>
