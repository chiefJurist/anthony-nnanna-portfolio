<template>
    <section id="architecture" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Section Title -->
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">
                Architecture & Patterns
            </h2>

            <!-- Intro -->
            <p class="text-center mb-12 max-w-3xl mx-auto">
                I design systems that balance clarity, resilience, and performance.
                My goal is to make complex architectures predictable, ensuring features scale cleanly without turning into technical debt.
            </p>

            <!-- Patterns Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Card -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
                    <h3 class="font-semibold text-xl mb-2">Hexagonal (Ports & Adapters)</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Isolates business logic from Laravel’s framework layer for clean, testable, and easily refactorable services.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
                    <h3 class="font-semibold text-xl mb-2">CQRS + Event-Driven</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Separates read/write models and uses Laravel Events, Jobs, and Redis Streams for responsive real-time systems.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
                    <h3 class="font-semibold text-xl mb-2">Modular Monolith → Microservices</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Builds domain-driven modular monoliths ready for smooth migration to microservices when scale demands.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
                    <h3 class="font-semibold text-xl mb-2">Versioned API Gateway</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Separates internal/external endpoints with versioned APIs for safe upgrades and backward compatibility.
                    </p>
                </div>
            </div>

            <!-- Closing Line -->
            <p class="text-center mt-12 italic text-gray-700 dark:text-gray-300">
                “Good architecture reduces developer friction. Every layer should make the next developer’s work easier.”
            </p>
        </div>
    </section>
</template>

<script setup>
// Static section – no script logic needed
</script>