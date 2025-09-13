<template>
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <Icon
                                name="ic:round-code"
                                class="w-6 h-6 text-white" />
                        </div>
                        <span class="text-xl font-bold">WebStudio</span>
                    </div>
                    <p class="text-gray-400 leading-relaxed">{{ $t("footer.descr") }}</p>
                    <div class="flex space-x-4">
                        <a
                            v-for="social in socialLinks"
                            :key="social.name"
                            :href="social.href"
                            class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                            <Icon
                                :name="social.icon"
                                class="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="text-lg font-semibold mb-6">{{ $t("footer.services") }}</h3>
                    <ul class="space-y-3">
                        <li
                            v-for="service in services"
                            :key="service.name">
                            <NuxtLink
                                :to="service.href"
                                class="text-gray-400 hover:text-white transition-colors duration-200">
                                {{ service.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Company -->
                <div>
                    <h3 class="text-lg font-semibold mb-6">{{ $t("footer.company") }}</h3>
                    <ul class="space-y-3">
                        <li
                            v-for="link in companyLinks"
                            :key="link.name">
                            <NuxtLink
                                :to="link.href"
                                class="text-gray-400 hover:text-white transition-colors duration-200">
                                {{ link.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h3 class="text-lg font-semibold mb-6">{{ $t("footer.contacts") }}</h3>
                    <div class="space-y-4">
                        <div
                            v-for="contact in contactInfo"
                            :key="contact.type"
                            class="flex items-start space-x-3">
                            <Icon
                                :name="contact.icon"
                                class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <p class="text-sm text-gray-500">{{ contact.label }}</p>
                                <p class="text-gray-300">{{ contact.value }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-gray-400 text-sm">© {{ currentYear }} ComplexAgency. {{ $t("footer.allRights") }}</p>
                    <div class="flex items-center space-x-6">
                        <NuxtLink
                            v-for="legal in legalLinks"
                            :key="legal.name"
                            :to="legal.href"
                            class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            {{ legal.name }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const socialLinks = [
    { name: "Facebook", href: "#", icon: "ic:baseline-facebook" },
    { name: "Instagram", href: "#", icon: "ic:baseline-instagram" },
    { name: "LinkedIn", href: "#", icon: "ic:baseline-linkedin" },
    { name: "Telegram", href: "#", icon: "ic:baseline-telegram" }
];

const services = [
    { name: "Розробка сайтів", href: "/services/development" },
    { name: "Інтернет-магазини", href: "/services/ecommerce" },
    { name: "Лендінги", href: "/services/landing" },
    { name: "Мобільні додатки", href: "/services/mobile" },
    { name: "SEO оптимізація", href: "/services/seo" }
];

const companyLinks = [
    { name: "Про нас", href: "/about" },
    { name: "Команда", href: "/team" },
    { name: "Кар'єра", href: "/careers" },
    { name: "Новини", href: "/news" }
];

const contactInfo = [
    {
        type: "phone",
        label: "Телефон",
        value: "+380 63 123 45 67",
        icon: "ic:round-phone"
    },
    {
        type: "email",
        label: "Email",
        value: "hello@webstudio.ua",
        icon: "ic:round-email"
    },
    {
        type: "address",
        label: "Адреса",
        value: "м. Київ, вул. Хрещатик, 1",
        icon: "ic:round-location-on"
    }
];

const legalLinks = [
    { name: "Політика конфіденційності", href: "/privacy" },
    { name: "Умови використання", href: "/terms" },
    { name: "Cookies", href: "/cookies" }
];
</script>
