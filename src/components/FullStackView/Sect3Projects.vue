    <template>
    <section id="fullstack-projects" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Header -->
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Featured Full-Stack Projects</h2>
                <p class="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    A selection of complete production systems I’ve architected and shipped, from user-facing SPAs to resilient backend platforms.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid gap-8 md:grid-cols-2">
                <article v-for="(p, i) in projects" :key="p.id" ref="cards" class="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition transform duration-500 focus-within:ring-2 focus-within:ring-emerald-400 overflow-hidden">
                    <!-- image / visual -->
                    <div class="h-48 md:h-56 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                        <img :src="p.image" :alt="p.title + ' screenshot'" class="w-full h-full object-cover" loading="lazy"/>
                    </div>

                    <!-- content -->
                    <div class="p-6">
                        <header class="flex items-start justify-between">
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ p.title }}</h3>
                                <p class="text-indigo-600 dark:text-indigo-300 font-medium mt-1">{{ p.tagline }}</p>
                            </div>
                            <div class="ml-4 text-right text-sm text-gray-500 dark:text-gray-400">
                                <div class="font-semibold">{{ p.role }}</div>
                                <div class="mt-1">{{ p.tech.join(' · ') }}</div>
                            </div>
                        </header>

                        <div class="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p class="mb-2"><strong>Problem:</strong> {{ p.problem }}</p>
                            <p class="mb-2"><strong>Solution:</strong> {{ p.solution }}</p>
                            <p class="mb-2 text-indigo-400"><strong>Result:</strong> {{ p.result }}</p>
                        </div>

                        <div class="mt-4 flex items-center gap-3">
                            <a :href="p.link" class="inline-flex items-center px-4 py-2 bg-indigo-700 dark:bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-950 focus:outline-none focus:ring-2 focus:ring-emerald-300" :aria-label="`View case study for ${p.title}`" target="_blank" rel="noopener noreferrer">
                                {{ p.cta }}
                            </a>

                            <button @click="openModal(i)" class="px-3 py-2 border border-gray-300 dark:border-gray-700 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" :aria-label="`Open details for ${p.title}`">
                                Quick View
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <!-- section footer -->
            <div class="mt-8 text-center text-gray-600 dark:text-gray-400">
                Want a deeper dive? View full case studies or request an architecture review.
            </div>
        </div>

        <!-- Modal (simple) -->
        <transition name="fade">
            <div v-if="modal.open" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4" @keydown.escape.prevent="closeModal" tabindex="-1">
                <div class="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full p-6 overflow-auto focus:outline-none">
                    <div class="flex justify-between items-start">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ modal.project.title }}</h3>
                        <button @click="closeModal" class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" aria-label="Close modal">✕</button>
                    </div>

                    <div class="mt-4 text-gray-700 dark:text-gray-300">
                        <p class="mb-3"><strong>Problem:</strong> {{ modal.project.problem }}</p>
                        <p class="mb-3"><strong>Solution:</strong> {{ modal.project.solution }}</p>
                        <p class="mb-3 text-emerald-400"><strong>Result:</strong> {{ modal.project.result }}</p>

                        <div class="mt-4">
                            <h4 class="font-semibold mb-2">Tech & Role</h4>
                            <p>{{ modal.project.role }} — {{ modal.project.tech.join(' · ') }}</p>
                        </div>

                        <div class="mt-4">
                            <a :href="modal.project.link" target="_blank" rel="noopener noreferrer" class="text-emerald-400 font-semibold hover:underline">
                                Open full case study →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const projects = ref([
    {
        id: 'truvotrade',
        title: 'TruvoTrade',
        tagline: 'Hedge Fund Platform + International Payments',
        image: '/public/img/TruvoTrade.png',
        role: 'Lead Architect & Full-Stack Engineer',
        tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Redis', 'WebSockets', 'Docker'],
        problem: 'Hedge fund owners needed a single platform to manage trading virtual currencies, real-time investment status, and cross-border payouts. Existing tools fragmented the process.',
        solution: 'Created the full-stack architecture using Laravel for robust APIs, Vue.js for a real-time SPA, and WebSockets for live updates. Implemented a payment orchestration layer to route payouts to local banks.',
        result: 'Reduced transaction cycle time by 40% and improved operational efficiency by 20%. Sub-300ms API responses under typical load.',
        link: 'https://truvotrade.com',
        cta: 'View Case Study →',
    },
    {
        id: 'ruul',
        title: 'Ruul',
        tagline: 'Portfolio Platform',
        image: '/public/img/ruul.png',
        role: 'Senior Full-Stack Engineer (API + Performance)',
        tech: ['Laravel', 'Vue.js', 'Elasticsearch', 'Redis', 'MySQL', 'Docker', 'GitHub Actions'],
        problem: 'A growing portfolio marketplace required multi-tenant isolation, fast catalog queries, and seamless checkout at scale.',
        solution: 'Implemented multi-tenant architecture with DB partitioning, optimized product search with indexed queries and Redis caching, and resilient background workers for order processing.',
        result: 'Scaled throughput by 3x and reduced checkout failures to <0.5%. Average page load under 1.8s.',
        link: 'https://ruul.io',
        cta: 'View Case Study →',
    },
    {
        id: 'koinpark',
        title: 'Koinpark',
        tagline: 'Crypto Payment Gateway',
        image: '/public/img/koinpark.png',
        role: 'Full-Stack Lead (Frontend + Observability)',
        tech: ['Vue.js', 'Tailwind CSS', 'Laravel', 'Prometheus', 'Grafana', 'WebSockets'],
        problem: 'Operations teams lacked a unified, real-time dashboard to orderbooks, queues, and critical metrics.',
        solution: 'Built an SPA dashboard in Vue.js with WebSocket streams for live metrics, alert hooks, and role-based access controls backed by Laravel APIs.',
        result: 'Cut MTTD by 60% and incident resolution time by 45%, improving availability.',
        link: 'https://koinpark.com',
        cta: 'View Case Study →',
    },
    ])

    // modal state
    const modal = ref({ open: false, project: {} })

    function openModal(index) {
    modal.value.open = true
    modal.value.project = projects.value[index]
    // trap focus in modal if needed
    }

    function closeModal() {
    modal.value.open = false
    modal.value.project = {}
    }

    // simple reveal on scroll (IntersectionObserver)
    onMounted(() => {
        const cards = document.querySelectorAll('#fullstack-projects article')
        const io = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('opacity-100', 'translate-y-0')
                        observer.unobserve(e.target)
                    }
                })
            },
            { threshold: 0.15 }
        )
        cards.forEach((c) => {
            c.classList.add('opacity-0', 'translate-y-6')
            io.observe(c)
        })
    })
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
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