<template>
    <section id="testimonials" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Header -->
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Testimonials & References</h2>
                <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    A few short endorsements from people who worked closely with me on production systems. References available on request.
                </p>
            </div>

            <!-- Testimonials grid -->
            <div class="grid gap-8 md:grid-cols-3">
                <!-- Card 1 -->
                <figure class="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 duration-500">
                    <blockquote class="text-gray-800 dark:text-gray-100 text-sm leading-relaxed">
                        "Anthony led a complex migration that reduced downtime and improved system reliability. His technical leadership, clear communication, and pragmatic decision-making were key to delivering the project on time."
                    </blockquote>
                    <figcaption class="mt-4 flex items-center gap-3">
                        <img src="/public/img/user.png" alt="Ola Martins avatar" class="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <div class="text-sm font-semibold text-gray-900 dark:text-white">Ola Martins</div>
                            <div class="text-xs text-gray-600 dark:text-gray-400">Product Manager, Rekorr</div>
                            <div class="text-xs text-gray-500 dark:text-gray-500">Worked together on cross-border payouts and real-time application tracking</div>
                        </div>
                    </figcaption>
                </figure>

                <!-- Card 2 -->
                <figure class="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 duration-500">
                    <blockquote class="text-gray-800 dark:text-gray-100 text-sm leading-relaxed">
                        "Anthony consistently delivers production-ready systems and pushes the team toward better testing and deployment practices. His focus on maintainability and performance improved our release confidence."
                    </blockquote>
                    <figcaption class="mt-4 flex items-center gap-3">
                        <img src="/public/img/user.png" alt="Jane Okafor avatar" class="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <div class="text-sm font-semibold text-gray-900 dark:text-white">Jane Okafor</div>
                            <div class="text-xs text-gray-600 dark:text-gray-400">Engineering Manager, Marketplace Pro</div>
                            <div class="text-xs text-gray-500 dark:text-gray-500">Collaborated on API performance and scalability</div>
                        </div>
                    </figcaption>
                </figure>

                <!-- Card 3 -->
                <figure class="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 duration-500">
                    <blockquote class="text-gray-800 dark:text-gray-100 text-sm leading-relaxed">
                        "Anthony mentors engineers with patience and rigor. He improved our code review culture and introduced patterns that reduced bugs and ramp time for new hires."
                    </blockquote>
                    <figcaption class="mt-4 flex items-center gap-3">
                        <img src="/public/img/user.png" alt="Felix avatar" class="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <div class="text-sm font-semibold text-gray-900 dark:text-white">Felix N.</div>
                            <div class="text-xs text-gray-600 dark:text-gray-400">Senior Engineer, AdminOps Dashboard</div>
                            <div class="text-xs text-gray-500 dark:text-gray-500">Pair-programmed and led architecture reviews</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

            <!-- Verification microcopy -->
            <div class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                References and contact information available on request. I can provide direct contacts for each project once confidentiality permissions are cleared.
            </div>

            <!-- CTA -->
            <div class="mt-6 text-center">
                <a
                    href="mailto:anthonynnannac@gmail.com?subject=References%20Request&body=Hello%20Anthony%2C%0A%0AI%27d%20like%20to%20request%20your%20references%20for%20the%20[project]%20project.%20Please%20share%20availability.%0A%0AThanks."
                    class="inline-flex items-center px-6 py-3 bg-emerald-400 text-gray-900 font-semibold rounded-lg hover:bg-emerald-500 transition"
                >
                    Request full references →
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
// Static section - no runtime logic required
</script>

<style scoped>
blockquote {
    quotes: "“" "”" "‘" "’";
}
blockquote::before {
    content: open-quote;
}
blockquote::after {
    content: close-quote;
}
</style>