<template>
    <section id="deployment" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Testing, CI/CD & Deployment</h2>
                <p class="text-gray-600 dark:text-gray-400 mt-3 max-w-3xl mx-auto">
                    Consistency beats heroics. My pipelines ensure that every commit ships safely, tested, validated,
                    and deployed with zero downtime across staging and production environments.
                </p>
            </div>

            <!-- 3-Step Pipeline Overview -->
            <div class="grid md:grid-cols-3 gap-6 mb-16">
                <div class="rebrand-wrap-thirty-six">
                    <div class="text-indigo-500 dark:text-indigo-400 text-3xl mb-3">🧪</div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Test</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                    Automated testing suite using Pest for Laravel, Vitest for Vue,
                    and Playwright for end-to-end flows.
                    </p>
                </div>

                <div class="rebrand-wrap-thirty-six">
                    <div class="text-indigo-500 dark:text-indigo-400 text-3xl mb-3">⚙️</div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Build</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                    Continuous integration on GitHub Actions. Runs linting, unit tests,
                    and production builds for both Laravel and Vue pipelines.
                    </p>
                </div>

                <div class="rebrand-wrap-thirty-six">
                    <div class="text-indigo-500 dark:text-indigo-400 text-3xl mb-3">🚀</div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deploy</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                    Docker-based deployments with zero downtime using blue-green strategy
                    and environment-based configurations.
                    </p>
                </div>
            </div>

            <!-- Testing Strategy -->
            <div class="grid md:grid-cols-2 gap-10 mb-16">
                <div class="rebrand-wrap-thirty-seven">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Testing Strategy</h3>
                    <ul class="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                        <li><strong>Unit Tests:</strong> Business logic validation using Pest for expressive syntax.</li>
                        <li><strong>Feature Tests:</strong> Laravel HTTP testing for routes, controllers, and middlewares.</li>
                        <li><strong>Integration Tests:</strong> Database + API layer interactions validated with SQLite memory DB.</li>
                        <li><strong>E2E Tests:</strong> Playwright + Vitest simulate real user flows across browser contexts.</li>
                        <li><strong>Code Quality:</strong> Static analysis via PHPStan and ESLint + Prettier checks.</li>
                    </ul>
                </div>

                <!-- CI/CD Snippet -->
                <div class="rebrand-wrap-thirty-seven">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">CI/CD Example</h3>
                    <pre v-pre class="bg-gray-900 text-gray-200 text-sm p-4 rounded-xl overflow-x-auto">
                        <code>
        name: Deploy Laravel + Vue App
        on:
        push:
            branches: [ "main" ]
        jobs:
        build-test-deploy:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v4
            - name: Setup PHP & Node
                uses: shivammathur/setup-php@v3
                with:
                php-version: 8.2
            - name: Install Dependencies
                run: |
                composer install --no-progress --prefer-dist
                npm ci
            - name: Run Tests
                run: |
                php artisan test --coverage
                npm run test
            - name: Build Frontend
                run: npm run build
            - name: Deploy via SSH
                uses: appleboy/ssh-action@v0.1.10
                with:
                host: ${{ secrets.SERVER_IP }}
                username: ubuntu
                key: ${{ secrets.SSH_KEY }}
                script: |
                    cd /var/www/rekorr
                    git pull origin main
                    php artisan migrate --force
                    php artisan optimize:clear
                    </code>
                </pre>
                </div>
            </div>

            <!-- Deployment Stack -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-sm duration-500">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deployment Stack</h3>
                <ul class="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                    <li>Production orchestration using <strong>Docker Compose</strong> (Laravel + Nginx + MySQL).</li>
                    <li><strong>PM2</strong> used for Node-based workers and WebSocket daemons.</li>
                    <li>Asset hosting on <strong>Cloudflare CDN</strong> with smart caching and fallback.</li>
                    <li>Automatic backups + rollbacks with <strong>GitHub Actions</strong> artifacts.</li>
                    <li>Monitoring through <strong>Uptime Kuma</strong> + <strong>Laravel Telescope</strong> in production mode.</li>
                </ul>
            </div>

            <!-- Closing Quote -->
            <div class="text-center mt-10">
                <blockquote class="text-xl italic font-medium text-gray-800 dark:text-gray-200">
                    “Ship fast, fail safely, recover instantly.”
                </blockquote>
            </div>
        </div>
    </section>
</template>