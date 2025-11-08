<template>
    <section id="testimonials" class="py-20 bg-gray-950 text-white">
        <div class="container mx-auto px-6 text-center">
            <!-- Title -->
            <div class="mb-12">
                <div class="text-3xl font-bold mb-3">Testimonials & Endorsements</div>
                <div class="text-gray-400 max-w-2xl mx-auto">
                I’ve had the privilege of collaborating with exceptional teams and clients across the globe. Here’s what some of them have shared about our work together.
                </div>
            </div>

            <!-- Testimonials Grid -->
            <div class="grid md:grid-cols-3 gap-8">
                <div
                v-for="(t, index) in testimonials"
                :key="index"
                class="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-emerald-400 transition"
                >
                    <div class="mb-4 text-emerald-400 text-6xl leading-none">“</div>
                    <div class="text-gray-300 italic mb-6">{{ t.quote }}</div>
                    <div class="flex flex-col items-center">
                        <div
                        class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold text-emerald-400 mb-2"
                        >
                        {{ t.initials }}
                        </div>
                        <div class="font-semibold">{{ t.name }}</div>
                        <div class="text-gray-400 text-sm">{{ t.role }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const testimonials = [
        {
            name: 'Felix O.',
            role: 'Founder, FinEdge Tech',
            quote:
            'Anthony brought our cross-border payment platform to life with clean architecture and scalable design. He consistently delivered on time and solved complex problems before they reached production.',
            initials: 'F',
        },
        {
            name: 'Maria V.',
            role: 'Senior UX Engineer, Open Source Collaborator',
            quote:
            'Anthony is the kind of developer you want leading a project — pragmatic, calm under pressure, and laser-focused on quality. His code reviews are mentorship sessions.',
            initials: 'M',
        },
        {
            name: 'David K.',
            role: 'CTO, Web3 Collective',
            quote:
            'Anthony understands blockchain infrastructure better than most senior engineers I’ve worked with. He bridges the gap between traditional web development and decentralized ecosystems effortlessly.',
            initials: 'D',
        },
    ]
</script>