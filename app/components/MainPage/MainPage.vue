<template>
    <div>
        <Header />
        <main>
            <HeroSection />
            <Services />
            <Industries />
            <Portfolio />
            <WhyUs />
            <Blog />
            <Steps />
            <Contact />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '../Header/Header.vue'
import HeroSection from './HeroSection/HeroSection.vue'
import Services from './Services/Services.vue'
import Industries from './Industries/Industries.vue'
import Portfolio from './Portfolio/Portfolio.vue'
import WhyUs from './WhyUs/WhyUs.vue'
import Blog from './Blog/Blog.vue'
import Steps from './Steps/Steps.vue'
import Contact from './Contact/Contact.vue'
import Footer from '../Footer/Footer.vue'
</script>