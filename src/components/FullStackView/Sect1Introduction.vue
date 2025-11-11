<template>
    <section class="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <!-- Left Text Column -->
            <div>
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Anthony Nnanna
                </h1>
                <h2 class="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    Senior Full-Stack Engineer (Vue + Laravel + PHP)
                </h2>
                <p class="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    I design and build scalable, maintainable, and high-performing web systems that balance elegant front-end experiences with robust back-end architecture. My code powers products that stay fast under pressure — from startups shipping daily to enterprises serving millions.
                </p>
                <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    With over 5 years of full-stack experience, I’ve led cross-functional teams, optimized app performance by 20%+, and delivered reliable systems using Vue.js, Laravel, and modern CI/CD pipelines.
                </p>

                <!-- CTA Buttons -->
                <div class="flex gap-4">
                    <a href="#projects" class="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                        View Projects
                    </a>
                    <a href="#contact" class="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-800 transition">
                        Contact 
                    </a>
                </div>
            </div>

            <!-- Right Visual Column -->
            <div class="flex justify-center md:justify-end">
                <img src="/public/img/tony6-img.png" alt="Full-stack architecture illustration" class="w-80 md:w-96 drop-shadow-lg"/>
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
