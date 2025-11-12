<template>
    <section id="stats" class="body-con">
        <div class="rebrand-wrap-one text-center">
            <h2 class="rebrand-wrap-twenty-eight">
                Professional Snapshot
            </h2>
            <p class="rebrand-wrap-twenty-nine">
                A brief look at my experience and measurable impact across systems, teams, and open-source development.
            </p>

            <div ref="statsSection" class="rebrand-wrap-thirty">
                <div v-for="(stat, index) in stats" :key="index" class="rebrand-wrap-thirty-one" :class="{ 'opacity-100 translate-y-0': visible, 'opacity-0 translate-y-6': !visible }">
                    <div class="rebrand-wrap-thirty-two">
                        {{ stat.value }}
                    </div>
                    <div class="rebrand-wrap-thirty-three">
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
