<template>
    <div id="blog" class="body-con">
        <div class="body-subcon text-center">
            <!-- Title -->
            <div class="mb-12">
                <div class="text-3xl font-bold mb-3">Insights & Thought Leadership</div>
                <div class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Sharing ideas, lessons, and experiments from building high-performance systems
                and mentoring engineering teams.
                </div>
            </div>

            <!-- Blog Cards -->
            <div class="grid md:grid-cols-3 gap-8 text-left">
                <div
                v-for="(post, index) in posts"
                :key="index"
                class="shadow bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-400 transition hover:-translate-y-2 duration-500"
                >
                    <div class="text-emerald-600 dark:text-emerald-400 text-sm mb-2">{{ post.tags }}</div>
                    <div class="text-xl font-bold mb-3">{{ post.title }}</div>
                    <div class="text-gray-600 dark:text-gray-400 mb-6">{{ post.excerpt }}</div>
                    <a
                        href="#"
                        class="inline-block text-emerald-400 font-semibold hover:underline"
                    >
                        Read Article →
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const posts = [
        {
            title: 'Beyond the Stack: Building for Performance and Longevity',
            excerpt:
            'Technologies evolve fast — but architecture and clarity outlast trends. Here’s how I design systems that remain flexible five years later.',
            tags: 'Architecture · Laravel · System Design',
        },
        {
            title: 'Rust & Web3: Where Security Meets Decentralization',
            excerpt:
            'Writing secure smart contracts isn’t enough — the runtime must be memory-safe too. Here’s how I leverage Rust for predictable reliability.',
            tags: 'Rust · Web3 · Security',
        },
        {
            title: 'The Art of Code Reviews in Senior Teams',
            excerpt:
            'Code reviews should elevate developers, not intimidate them. These are the review principles that improved team quality, trust, and delivery speed.',
            tags: 'Leadership · Collaboration · Best Practices',
        },
    ]
</script>