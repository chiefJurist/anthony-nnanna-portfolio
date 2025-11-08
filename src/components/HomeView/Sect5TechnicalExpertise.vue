<template>
    <div id="tech-stack" class="py-20 bg-gray-900 text-white">
        <div class="container mx-auto px-6">
        <!-- Section Title -->
        <div class="text-center mb-12">
            <div class="text-3xl font-bold mb-3">Core Technologies I Master</div>
            <div class="text-gray-400 max-w-2xl mx-auto">
            A strong command of modern frameworks and languages — powering efficient,
            scalable, and secure digital systems from backend to blockchain.
            </div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div v-for="(tech, index) in techStack" :key="index" class="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition">
            <div class="font-semibold text-lg mb-2">{{ tech.name }}</div>
            <div class="text-sm text-gray-400">{{ tech.description }}</div>
            </div>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12 text-center border-t border-gray-700 pt-8">
            <div v-for="(stat, index) in stats" :key="index">
            <div class="text-xl font-bold">{{ stat.value }}</div>
            <div class="text-gray-400 text-sm">{{ stat.label }}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
    const techStack = [
    { name: 'Laravel', description: 'Elegant backend architecture for high-performance web systems.' },
    { name: 'Vue.js', description: 'Reactive, component-driven interfaces built for speed and precision.' },
    { name: 'Tailwind CSS', description: 'Utility-first styling that guarantees consistency and scalability.' },
    { name: 'Node.js', description: 'Event-driven architecture for high-throughput backend services.' },
    { name: 'Rust', description: 'Memory-safe systems programming for next-gen performance.' },
    { name: 'Web3.js', description: 'Seamless blockchain interaction for decentralized applications.' },
    { name: 'Solidity', description: 'Smart contract development for EVM-compatible networks.' },
    { name: 'MySQL / PostgreSQL', description: 'Reliable relational databases optimized for scalability.' },
    { name: 'Docker', description: 'Containerized deployments for consistent environments.' },
    { name: 'Git & CI/CD', description: 'Version control and automation pipelines that ensure delivery velocity.' },
    ]

    const stats = [
    { label: 'Experience', value: '5+ years' },
    { label: 'Performance', value: '20% avg. boost' },
    { label: 'Leadership', value: 'Led cross-functional teams' },
    { label: 'Open Source', value: 'Active contributor' },
    { label: 'Location', value: 'Nigeria' },
    ]
</script>
