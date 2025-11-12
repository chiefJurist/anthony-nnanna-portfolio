<template>
    <section class="body-con min-h-screen flex flex-col justify-center items-center">
        <div class="rebrand-wrap-one grid md:grid-cols-2 gap-10 items-center">
            <!-- Left Text Column -->
            <div>
                <h1 class="rebrand-wrap-twenty-one">
                    Anthony Nnanna
                </h1>
                <h2 class="rebrand-wrap-twenty-two">
                    Senior Full-Stack Engineer (Vue + Laravel + PHP)
                </h2>
                <p class="rebrand-wrap-twenty-three mb-3">
                    I design and build scalable, maintainable, and high-performing web systems that balance elegant front-end experiences with robust back-end architecture. My code powers products that stay fast under pressure — from startups shipping daily to enterprises serving millions.
                </p>
                <p class="rebrand-wrap-twenty-three mb-8">
                    With over 5 years of full-stack experience, I’ve led cross-functional teams, optimized app performance by 20%+, and delivered reliable systems using Vue.js, Laravel, and modern CI/CD pipelines.
                </p>

                <!-- CTA Buttons -->
                <div class="flex gap-4">
                    <a href="#projects" class="rebrand-wrap-twenty-four">
                        View Projects
                    </a>
                    <a href="#contact" class="rebrand-wrap-twenty-five">
                        Contact 
                    </a>
                </div>
            </div>

            <!-- Right Visual Column -->
            <div class="flex justify-center md:justify-end">
                <img src="/public/img/tony6-img.png" alt="Full-stack architecture illustration" class="rebrand-wrap-twenty-six"/>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, watchEffect } from 'vue'

    const isDark = ref(false)

    const toggleDarkMode = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    }

    // persist preference
    watchEffect(() => {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    })

    if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark')
    isDark.value = true
    }
    </script>

    <style scoped>
    section {
    font-family: 'Inter', sans-serif;
    }
</style>
