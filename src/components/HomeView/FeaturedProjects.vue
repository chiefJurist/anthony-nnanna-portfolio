<script>
export default {
    data() {
        return {
            projectsVisible: false,
            projectsClassApplied: false,
            projects: [
                {
                    title: "Rekorr",
                    subtitle: "Smart Job Board + International Payments",
                    description:
                        "A next-gen platform merging a job application tracker with a seamless global payment system. Applicants get real-time status updates while users receive payments directly into local banks.",
                    tech: ["Laravel", "Vue.js", "Tailwind", "MySQL", "Docker"],
                    link: "#",
                    image: "/images/projects/rekorr.png",
                },
                {
                    title: "Binance HFT Bot",
                    subtitle: "High-Frequency Market Maker for Binance Futures",
                    description:
                        "A lightning-fast Python trading bot using CCXT and asyncio to place, modify, and cancel futures orders in milliseconds with intelligent risk limits and inventory control.",
                    tech: ["Python", "CCXT", "Asyncio", "TA-Lib"],
                    link: "#",
                    image: "/images/projects/hftbot.png",
                },
                {
                    title: "Multisig Wallet Bridge",
                    subtitle: "Secure Web3 Integration for Mobile dApps",
                    description:
                        "A Rust and Web3.js-powered module enabling dApp developers to build native mobile apps with secure multisignature wallet access and transaction coordination.",
                    tech: ["Rust", "Web3.js", "Solidity", "Node.js"],
                    link: "#",
                    image: "/images/projects/multisig.png",
                },
                {
                    title: "Portfolio Platform",
                    subtitle: "Modern Developer Showcase System",
                    description:
                        "A fast and dynamic Vue + Laravel platform for developers to display live projects, skills, and metrics — optimized for recruiters and hiring managers.",
                    tech: ["Laravel", "Vue.js", "Tailwind", "Node.js"],
                    link: "#",
                    image: "/images/projects/portfolio.png",
                },
            ],
        };
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll(); // run immediately in case visible at load
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            if (!this.projectsClassApplied) {
                const section = document.getElementById("projects");
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    this.projectsVisible = true;
                    this.projectsClassApplied = true;
                }
            }
        },
    },
};
</script>

<template>
    <div id="projects" class="body-con py-20">
        <div class="body-subcon">
            <!-- Header -->
            <div class="gen-header-con mb-10">
                <div class="gen-header-text">Featured Projects</div>
                <div>
                    A selection of systems and tools I’ve built — spanning full-stack, Web3, Rust, and automation projects.
                </div>
            </div>

            <!-- Project Cards -->
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-10"
                :class="{ 'animate-fade-in': projectsVisible }"
            >
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    class="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
                >
                    <img
                        :src="project.image"
                        :alt="project.title"
                        class="w-full h-52 object-cover"
                    />
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-black dark:text-white mb-2">
                            {{ project.title }}
                        </h3>
                        <p class="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                            {{ project.subtitle }}
                        </p>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                            {{ project.description }}
                        </p>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span
                                v-for="(tech, i) in project.tech"
                                :key="i"
                                class="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
                            >
                                {{ tech }}
                            </span>
                        </div>

                        <a
                            :href="project.link"
                            target="_blank"
                            class="inline-block bg-indigo-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-indigo-800 transition"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeInUp 1s ease-in-out;
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>