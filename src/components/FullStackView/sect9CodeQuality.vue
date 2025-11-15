<template>
    <section id="architecture" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Code Quality & Architecture</h2>
                <p class="text-gray-600 dark:text-gray-400 mt-3 max-w-3xl mx-auto">
                    I build software that scales structurally, technically, and collaboratively. Every commit follows principles of clean architecture, predictable state, and future maintainability.
                </p>
            </div>

            <!-- Architecture Overview Cards -->
            <div class="grid md:grid-cols-3 gap-6 mb-16">
                <div class="rebrand-wrap-thirty-eight">
                    <div class="text-indigo-500 text-3xl mb-3">🏗️</div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-1">Clean Architecture</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm">
                        Domain-driven structure ensures each module has clear boundaries and responsibilities.
                    </p>
                </div>
                <div class="rebrand-wrap-thirty-eight">
                    <div class="text-indigo-500 text-3xl mb-3">🧩</div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-1">Separation of Concerns</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm">
                    Business logic, API integration, and UI states are modularized for easier scaling and testing.
                    </p>
                </div>
                <div class="rebrand-wrap-thirty-eight">
                    <div class="text-indigo-500 text-3xl mb-3">🔍</div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-1">Predictable State</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm">
                    Vue 3 Composition API + Pinia state management to ensure consistency across complex UIs.
                    </p>
                </div>
            </div>

            <!-- Folder Structure Example -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-sm duration-500">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Structure</h3>
                <pre class="bg-gray-900 text-gray-200 text-sm p-4 rounded-xl overflow-x-auto">
        📦 truvotrade-app/
        ├── 📁 app/
        │   ├── 📁 Http/
        │   │   ├── 📁 Controllers/
        │   │   │   └── UserController.php
        │   │   └── 📁 Middleware/
        │   ├── 📁 Models/
        │   └── 📁 Services/
        │       └── PaymentService.php
        ├── 📁 resources/
        │   └── 📁 js/
        │       ├── 📁 components/
        │       │   └── UserCard.vue
        │       ├── 📁 stores/
        │       │   └── user.js
        │       └── main.js
        ├── 📁 tests/
        │   ├── Feature/
        │   └── Unit/
        └── docker-compose.yml
                </pre>
                <p class="text-gray-700 dark:text-gray-300 mt-3">
                    Clear modular boundaries, service-driven Laravel backend and component-based Vue frontend. This structure enforces clarity and reduces cognitive load for new contributors.
                </p>
            </div>

            <!-- Sample Backend Snippet -->
            <div class="grid md:grid-cols-2 gap-10 mb-16">
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm duration-500">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend Example - Payment Service</h3>
                    <pre class="bg-gray-900 text-gray-200 text-sm p-4 rounded-xl overflow-x-auto">
            &lt;?php

            namespace App\Services;

            use App\Models\User;
            use Illuminate\Support\Facades\Http;

            class PaymentService
            {
                public function process(User $user, float $amount): bool
                {
                    $response = Http::post(env('PAYMENT_GATEWAY_URL').'/charge', [
                        'email' => $user->email,
                        'amount' => $amount * 100, // Convert to kobo
                    ]);

                    return $response->successful();
                }
            }
                    </pre>
                </div>

                <!-- Sample Frontend Snippet -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend Example - User Card</h3>
                    <pre v-pre class="bg-gray-900 text-gray-200 text-sm p-4 rounded-xl overflow-x-auto">
            &lt;template&gt;
            &lt;div class="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow"&gt;
                &lt;h3 class="text-lg font-semibold text-gray-900 dark:text-white"&gt;{{ user.name }}&lt;/h3&gt;
                &lt;p class="text-gray-600 dark:text-gray-300"&gt;{{ user.email }}&lt;/p&gt;
                &lt;button
                @click="handlePayment"
                class="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                &gt;
                Pay Now
                &lt;/button&gt;
            &lt;/div&gt;
            &lt;/template&gt;

            &lt;script setup&gt;
            import { ref } from 'vue'
            import axios from 'axios'

            const props = defineProps({ user: Object })

            const handlePayment = async () =&gt; {
            await axios.post('/api/pay', { user_id: props.user.id })
            }
            &lt;/script&gt;
                    </pre>
                </div>
            </div>

            <!-- Linting & Static Analysis -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-sm duration-500">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Linting & Static Analysis</h3>
                <ul class="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                    <li>
                        <strong>ESLint + Prettier:</strong> Code formatting and style consistency across Vue files.
                    </li>
                    <li>
                        <strong>Laravel Pint:</strong> Ensures PSR-12 standard and consistent PHP style.
                    </li>
                    <li>
                        <strong>PHPStan (Level 8):</strong> Static type safety checks for maintainable backend code.
                    </li>
                    <li>
                        <strong>Commit Hooks:</strong> Husky pre-commit hooks run lint & tests before any push.
                    </li>
                    <li>
                        <strong>CI Enforcement:</strong> Code quality verified automatically in GitHub Actions.
                    </li>
                </ul>
            </div>

            <!-- Closing Reflection -->
            <div class="text-center mt-10">
                <blockquote class="text-xl italic font-medium text-gray-800 dark:text-gray-200">
                    “Readable code is scalable code. Future teams should thank you, not curse you.”
                </blockquote>
            </div>

        </div>
    </section>
</template>