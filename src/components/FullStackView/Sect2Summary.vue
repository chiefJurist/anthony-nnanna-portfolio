<template>
    <section id="stats" class="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
        <div class="max-w-6xl mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Professional Snapshot
            </h2>
            <p class="text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                A brief look at my experience and measurable impact across systems, teams, and open-source development.
            </p>

            <div ref="statsSection" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div v-for="(stat, index) in stats" :key="index" class="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 transform transition duration-700 hover:-translate-y-2" :class="{ 'opacity-100 translate-y-0': visible, 'opacity-0 translate-y-6': !visible }">
                    <div class="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
                        {{ stat.value }}
                    </div>
                    <div class="text-gray-900 dark:text-gray-100 font-semibold leading-snug">
                        {{ stat.label }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const stats = ref([
        { value: '5+ Years', label: 'of full-stack development experience' },
        { value: '20% Average', label: 'performance improvement delivered' },
        { value: '12+ Systems', label: 'built and deployed using Laravel + Vue' },
        { value: '3+ Teams', label: 'led successfully from architecture to launch' },
        { value: 'Open Source', label: 'active contributor to developer tools' },
    ])

    const visible = ref(false)
    const statsSection = ref(null)

    onMounted(() => {
    const observer = new IntersectionObserver(
        entries => {
        if (entries[0].isIntersecting) {
            visible.value = true
            observer.disconnect()
        }
        },
        { threshold: 0.2 }
    )
    if (statsSection.value) observer.observe(statsSection.value)
    })
    </script>

    <style scoped>
    .opacity-0 {
        opacity: 0;
    }
    .opacity-100 {
        opacity: 1;
    }
    .translate-y-6 {
        transform: translateY(1.5rem);
    }
    .translate-y-0 {
        transform: translateY(0);
    }
</style>
