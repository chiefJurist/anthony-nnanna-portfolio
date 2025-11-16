<template>
    <section id="downloads-links" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Downloads and Links
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mt-3">
                    Access my resume, project summaries, system architecture documents, and important profiles in one place.
                </p>
            </div>

            <!-- Downloads Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    v-for="item in downloads"
                    :key="item.title"
                    class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
                >
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {{ item.title }}
                    </h3>

                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {{ item.description }}
                    </p>

                    <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">
                        {{ item.type }} • {{ item.size }}
                    </p>

                    <a
                        :href="item.link"
                        class="inline-block w-full text-center py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Download
                    </a>
                </div>
            </div>

            <!-- External Links -->
            <div class="mt-16">
                <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                    Important Links
                </h3>

                <div class="flex flex-wrap justify-center gap-4">
                    <a
                        v-for="ext in externalLinks"
                        :key="ext.label"
                        :href="ext.link"
                        class="px-5 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    >
                        {{ ext.label }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "DownloadsLinksSection",
    data() {
        return {
            downloads: [
                {
                    title: "Senior Resume",
                    description: "Latest version of my senior full-stack resume.",
                    type: "PDF",
                    size: "350 KB",
                    link: "/downloads/senior-resume.pdf"
                },
                {
                    title: "Rekorr System Architecture Summary",
                    description: "High-level architecture breakdown of the Rekorr platform.",
                    type: "PDF",
                    size: "600 KB",
                    link: "/downloads/rekorr-architecture-summary.pdf"
                },
                {
                    title: "Rekorr API Reference Overview",
                    description: "Developer-facing documentation summary covering endpoints and usage patterns.",
                    type: "PDF",
                    size: "420 KB",
                    link: "/downloads/rekorr-api-reference.pdf"
                },
                {
                    title: "Portfolio Project Pack",
                    description: "A zipped folder with selected project summaries.",
                    type: "ZIP",
                    size: "1.2 MB",
                    link: "/downloads/portfolio-pack.zip"
                }
            ],

            externalLinks: [
                { label: "GitHub Profile", link: "https://github.com/your-profile" },
                { label: "LinkedIn Profile", link: "https://linkedin.com/in/your-profile" },
                { label: "Contact Me", link: "/contact" },
                { label: "Full Professional Timeline", link: "/timeline" }
            ]
        };
    }
};
</script>