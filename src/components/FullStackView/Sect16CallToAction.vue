<template>
    <section
        id="cta"
        class="rebrand-wrap-one"
    >
        <div class="max-w-4xl mx-auto px-6 text-center">

            <h2
                class="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
                Let us build something exceptional
            </h2>

            <p
                class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
            >
                If you are looking for an engineer who blends strong full stack execution with architecture-level thinking,
                I am open to new opportunities, senior engineering challenges, consulting engagements, and technical
                leadership roles. Whether you need hands-on development, system design, or cross-functional guidance,
                I can help you build scalable, clean, reliable products.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">

                <!-- Primary CTA -->
                <RouterLink
                    to="/contact"
                    class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm transition"
                >
                    Contact Me
                </RouterLink>

                <!-- Secondary CTA -->
                <a
                    href="https://calendly.com/your-link"
                    target="_blank"
                    class="px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 font-semibold shadow-sm transition"
                >
                    Schedule a Technical Discussion
                </a>

            </div>

            <!-- Link -->
            <div class="mt-6">
                <RouterLink
                    to="/notes"
                    class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                    Explore my Engineering Notes
                </RouterLink>
            </div>

        </div>
    </section>
</template>

<script setup>
</script>
