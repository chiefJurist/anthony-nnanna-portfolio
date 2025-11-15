<template>
    <section id="performance" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Performance & Scalability</h2>
                <p class="text-gray-600 dark:text-gray-400 mt-3 max-w-3xl mx-auto">
                    Every optimization starts with measurement. I’ve improved load times, database query speeds,
                    and API throughput across multiple production environments by focusing on bottlenecks, not guesses.
                </p>
            </div>

            <!-- Key Metrics -->
            <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-12">
                <div class="rebrand-wrap-thirty-five">
                    <h3 class="text-2xl font-bold text-indigo-950 dark:text-indigo-400">40%</h3>
                    <p class="text-gray-700 dark:text-gray-300">Reduction in API latency</p>
                </div>
                <div class="rebrand-wrap-thirty-five">
                    <h3 class="text-2xl font-bold text-indigo-950 dark:text-indigo-400">3×</h3>
                    <p class="text-gray-700 dark:text-gray-300">Increase in concurrent requests</p>
                </div>
                <div class="rebrand-wrap-thirty-five">
                    <h3 class="text-2xl font-bold text-indigo-950 dark:text-indigo-400">25%</h3>
                    <p class="text-gray-700 dark:text-gray-300">Frontend bundle size reduction</p>
                </div>
                <div class="rebrand-wrap-thirty-five">
                    <h3 class="text-2xl font-bold text-indigo-950 dark:text-indigo-400">99.98%</h3>
                    <p class="text-gray-700 dark:text-gray-300">Uptime maintained post scaling</p>
                </div>
            </div>

            <!-- Backend & Frontend Optimizations -->
            <div class="grid md:grid-cols-2 gap-10">
                <!-- Backend -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm duration-500">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Backend Optimizations
                    </h3>
                    <ul class="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                        <li>Database indexing & query optimization using <strong>Laravel Telescope</strong> insights.</li>
                        <li>Introduced <strong>Redis caching</strong> for hot endpoints, reducing response time from 450ms to 270ms.</li>
                        <li>Queued non-critical jobs with <strong>Laravel Horizon</strong>, freeing main threads.</li>
                        <li>Optimized Nginx config + PHP-FPM workers for 3× request throughput.</li>
                        <li>Implemented horizontal scaling via load-balanced containers on <strong>Docker + Nginx</strong>.</li>
                    </ul>
                </div>

                <!-- Frontend -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm duration-500">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Frontend Optimizations
                    </h3>
                    <ul class="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                        <li>Code-splitting and lazy-loading Vue routes to reduce initial payload.</li>
                        <li>Tailwind CSS purge & minification reduced bundle size by 25%.</li>
                        <li>Integrated <strong>Vite</strong> for faster hot module replacement during dev.</li>
                        <li>Preloaded critical assets with proper caching headers for long-term speed.</li>
                        <li>Measured with <strong>Lighthouse. </strong>Improved performance score from 78 to 96.</li>
                    </ul>
                </div>
            </div>

            <!-- Closing Quote -->
            <div class="text-center mt-16">
                <blockquote class="text-xl italic font-medium text-gray-800 dark:text-gray-200">
                    “Every millisecond counts. Scale begins with design clarity.”
                </blockquote>
            </div>
        </div>
    </section>
</template>