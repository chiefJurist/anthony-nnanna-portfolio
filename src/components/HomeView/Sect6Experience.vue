<template>
    <div id="experience" class="body-con">
        <div class="body-subcon">
            <!-- Title -->
            <div class="text-center mb-12">
                <div class="text-3xl font-bold mb-3">Experience & Achievements</div>
                <div class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Building reliable, high-performing systems while mentoring teams and driving measurable growth across web and blockchain ecosystems.
                </div>
            </div>

            <!-- Achievements Grid -->
            <div class="grid md:grid-cols-2 gap-10">
                <div v-for="(item, index) in achievements" :key="index" class="shadow bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-400 transition duration-500">
                    <div class="text-xl font-semibold mb-2">{{ item.title }}</div>
                    <div class="text-emerald-400 text-sm mb-3">{{ item.company }}</div>
                    <div class="text-gray-500 dark:text-gray-300 mb-2">{{ item.description }}</div>
                    <div class="text-gray-600 dark:text-gray-400 text-sm italic">{{ item.result }}</div>
                </div>
            </div>

            <!-- Highlights Row -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-16 text-center border-t border-gray-800 pt-8">
                <div v-for="(highlight, index) in highlights" :key="index">
                    <div class="text-lg font-semibold">{{ highlight.value }}</div>
                    <div class="text-gray-400 text-sm">{{ highlight.label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const achievements = [
    {
        title: 'Senior Full-Stack Developer',
        company: 'Rekorr (2023–Present)',
        description:
        'Led development of a cross-border job and payment platform combining job board functionality with real-time applicant insights and international payment systems.',
        result: '→ Boosted user engagement by 25% and reduced system latency by 40%.',
    },
    {
        title: 'Lead Frontend Engineer',
        company: 'Freelance / Open Source (2019–2023)',
        description:
        'Architected modular, scalable frontend systems using Vue, Tailwind, and Laravel integrations.',
        result: '→ Delivered 20+ projects with consistent sub-2s load times and modern UX standards.',
    },
    {
        title: 'Rust Systems Developer',
        company: 'Independent (2021–Present)',
        description:
        'Built and optimized backend microservices using Rust for secure, high-performance systems.',
        result: '→ Reduced runtime overhead by 30% in performance-critical workloads.',
    },
    {
        title: 'Web3 Engineer',
        company: 'Blockchain Projects (2022–Present)',
        description:
        'Integrated smart contracts and decentralized wallet systems into web applications using Solidity and Web3.js.',
        result: '→ Developed secure wallet connectors that improved transaction reliability by 50%.',
    },
    ]

    const highlights = [
    { label: 'Leadership', value: 'Led multi-disciplinary dev teams' },
    { label: 'Performance', value: '20% avg. performance gain per project' },
    { label: 'Innovation', value: 'Created multi-wallet integration system' },
    { label: 'Collaboration', value: 'Active open-source contributor' },
    { label: 'Recognition', value: 'Featured in developer communities' },
    ]
</script>
