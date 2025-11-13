<template>
    <section id="rekorr-case" class="py-20 body-con">
        <div class="max-w-5xl mx-auto px-6">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Deep Case Study — Truvo Trade</h2>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                   Hedge Fund Platform with Real-Time Asset Monitoring and Global Payouts
                </p>
            </div>

            <!-- Summary Table -->
            <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <table class="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
                    <tbody>
                        <tr v-for="(v, k) in snapshot" :key="k" class="border-b border-gray-200 dark:border-gray-700">
                            <th class="p-3 font-semibold w-1/3 text-gray-900 dark:text-gray-100">{{ k }}</th>
                            <td class="p-3">{{ v }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Architecture Diagram -->
            <div class="mt-10 text-center">
                <img src="/public/img/architecture.png" alt="Rekorr System Architecture" class="mx-auto w-1/3 max-w-3xl rounded-xl shadow-md dark:shadow-none"/>
                <p class="text-sm mt-2 text-gray-500 dark:text-gray-400">
                    High-level system architecture (Frontend ↔ Backend ↔ Services)
                </p>
            </div>

            <!-- Narrative -->
            <div class="mt-10 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                <section v-for="(item, i) in narrative" :key="i">
                    <h3 class="text-xl font-semibold text-emerald-400 mb-2">{{ item.title }}</h3>
                    <p v-for="(p, j) in item.paragraphs" :key="j" class="mb-3">{{ p }}</p>
                    <pre v-if="item.code" class="bg-gray-900 text-gray-100 rounded-xl p-4 text-sm overflow-x-auto">
                        <code>{{ item.code }}</code>
                    </pre>
                </section>
            </div>

            <!-- CTA -->
            <div class="mt-12 text-center">
                <a href="https://truvotrade.com" class="inline-flex items-center px-6 py-3 bg-emerald-400 text-gray-900 font-semibold rounded-xl hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-300 transition">
                    Read Full Case Study →
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
    const snapshot = {
        Role: 'Lead Architect & Full-Stack Engineer',
        Duration: '3 months (MVP → full rollout)',
        Team: '1 developer, 1 designer, 1 DevOps',
        Stack: 'Laravel, Vue.js, Tailwind, MySQL, Redis, WebSockets, Docker',
        Scope: 'API design, real-time systems, CI/CD, scaling, and technical leadership',
        Outcome: 'Transaction cycle time reduced by 40%, 20% efficiency gain, 300 ms API latency',
    }

    const narrative = [
        {
            title: 'Context & Challenge',
            paragraphs: [
                'TruvoTrade aimed to unify portfolio management and global payouts. Existing hedge-fund tools and finance dashboards were disconnected, leading to inefficiency.',
                'The challenge: build a cohesive, secure system handling thousands of real-time sessions and multi-currency payments.',
            ],
        },
        {
            title: 'Architecture Decisions',
            paragraphs: [
                'Laravel served as the API core with modular service boundaries.',
                'Vue 3 (Inertia.js) powered the unified SPA, minimizing over-fetching.',
                'Redis Pub/Sub and Laravel WebSockets enabled real-time updates for applicants and recruiters.',
                'Docker ensured parity between local, staging, and production environments.',
            ],
        },
        {
            title: 'Example API Endpoint (Laravel)',
            code: `public function payout(Request $request){
                            $validated = $request->validate([
                                'user_id' => 'required|exists:users,id',
                                'amount' => 'required|numeric|min:1',
                                'currency' => 'required|string|max:3',
                            ]);

                            dispatch(new ProcessPayout($validated));
                            return response()->json(['status' => 'processing']);
                    }`,
        },
        {
            title: 'Example Vue Component (Live Feed)',
            code: `<script setup>
                            import { ref, onMounted } from 'vue'
                            import { io } from 'socket.io-client'
                            const updates = ref([])
                            const socket = io(import.meta.env.VITE_WS_URL)
                            onMounted(() => {
                                socket.on('application:update', (data) => updates.value.unshift(data))
                            })
                        <\/script>

                        <template>
                            <div class='p-4 bg-gray-700 text-white rounded-lg shadow'>
                                <h3 class='font-semibold text-emerald-400 mb-2'>Live Application Feed</h3>
                                <ul>
                                    <li v-for='(u,i) in updates' :key='i'>{{ u.message }}</li>
                                </ul>
                            </div>
                        </template>`,
        },
        {
            title: 'Monitoring & Results',
            paragraphs: [
            'Prometheus and Grafana tracked queue lag, API latency, and error rate.',
            'Achieved 99.97% uptime, 40% faster hiring workflows, and 18-minute average incident resolution.',
            ],
        },
        {
            title: 'Lessons Learned',
            paragraphs: [
            'Explicit business events simplify debugging under load.',
            'CI/CD caching reduced deploy times by 35%.',
            'WebSocket backpressure management is essential for burst traffic.',
            ],
        },
    ]
</script>
