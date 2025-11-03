<script>
    export default {
        data() {
            return {
                imageVisible: false, // Add a new property to track image visibility
                imageClassApplied: false, // Add a flag to track whether the class has been applied or not
                pointVisible: false,
                pointClassApplied: false
            };
        },

        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            //Calling the function in case this is the first part of the code to load
            this.handleScroll();
        },

        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            //THIS FOR THE ANIMATION
            handleScroll() {
                // Check if the class has been applied already
                if (!this.imageClassApplied) {
                    // Check for image visibility
                    const image = document.getElementById('about-img');
                    const imageRect = image.getBoundingClientRect();
                    if (imageRect.top < window.innerHeight && imageRect.bottom >= 0) {
                        this.imageVisible = true;
                    } else {
                        this.imageVisible = false;
                    }

                    // If image is visible, apply the class and update the flag
                    if (this.imageVisible) {
                        this.imageClassApplied = true;
                    }
                }

                // Check if the class has been applied already
                if (!this.pointClassApplied) {
                    // Check for point visibility
                    const points = document.getElementById('about-points');
                    const pointRect = points.getBoundingClientRect();
                    if (pointRect.top < window.innerHeight && pointRect.bottom >= 0) {
                        this.pointVisible = true;
                    } else {
                        this.pointVisible = false;
                    }

                    // If point is visible, apply the class and update the flag
                    if (this.pointVisible) {
                        this.pointClassApplied = true;
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="body-con" id="about">
        <div class="body-subcon">
            <!--Header-->
            <div class="gen-header-con">
                <div class="gen-header-text">More About Me</div>
                <div>Turning complex problems into elegant digital solutions.</div>
            </div>

            <!--Body-->
            <div class="mt-10">
                <!--Details-->
                <div id="about-text">
                    <span>
                        I'm Anthony Nnanna, a Senior Software Engineer with over 5 years of professional experience building full-stack, frontend, and blockchain-driven systems.
                    </span>
                    <br><br>
                    <span>
                        I specialize in crafting fast, scalable, and secure digital platforms using Laravel, Vue.js, Rust, and Web3 technologies, balancing solid backend architecture with clean, intuitive user interfaces.
                    </span>
                    <br><br>
                    <span>
                        I've led cross-functional teams that delivered projects on time while optimizing performance by an average of 20%. I'm deeply focused on writing maintainable code, designing resilient systems, and pushing the web forward through open-source collaboration.
                    </span>
                    <br><br>
                    <span>
                        I believe software should not only work, it should inspire confidence through precision, performance, and purpose.
                    </span>
                </div>
                <div id="about-points" class="flex flex-wrap justify-around gap-5 font-semibold mt-8 text-center">
                    <div :class="{ 'animate-grow': pointVisible }">
                        <div class=" text-xl text-black dark:text-white font-extrabold">Experience</div>
                        <div class=" text-wrap">5+ years</div>
                    </div>
                    <div :class="{ 'animate-grow': pointVisible }">
                        <div class=" text-xl text-black dark:text-white font-extrabold">Performance</div>
                        <div>20% average performance improvement delivered on projects</div>
                    </div>
                    <div :class="{ 'animate-grow': pointVisible }">
                        <div class=" text-xl text-black dark:text-white font-extrabold">Leadership</div>
                        <div>Led cross-functional teams from design to production</div>
                    </div>
                    <div :class="{ 'animate-grow': pointVisible }">
                        <div class=" text-xl text-black dark:text-white font-extrabold">Open Source</div>
                        <div>Active open-source contributor</div>
                    </div>
                </div>
            </div>

            <!--Technologies-->
            <div class="gen-header-con mt-20">
                <div class="font-bold text-black dark:text-white text-2xl">Core Technologies I Master</div>
                <div>
                    I work with a focused set of technologies I use daily to build reliable, high-performance systems and delightful UIs.
                </div>
            </div>
            <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div class="rebrand-wrap-one">
                    <span class="icon-[material-icon-theme--laravel]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Laravel</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[logos--vue]" style="width: 27.81px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Vue.js</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[mdi--tailwind]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Tailwind CSS</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[devicon--nodejs]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Node.js</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[devicon--rust]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Rust</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[devicon--web3js]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Web3.js</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[devicon--solidity]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Solidity</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[devicon--mysql]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">MySQL</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[material-icon-theme--docker]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Docker</span>
                </div>
                <div class="rebrand-wrap-one">
                    <span class="icon-[material-icon-theme--git]" style="width: 24px; height: 24px;"></span>
                    <span class="rebrand-wrap-two">Git</span>
                </div>
            </div>

            <div class="flex justify-center">
                <a href="#projects">
                    <button class="p-3 mt-10 bg-indigo-700 text-white font-bold rounded cursor-pointer hover:translate-y-3 transform duration-1000 ease-out" id="button" :class="{ 'animate-up': buttonVisible }">
                        <span>Explore My Work</span>
                        <span class="icon-[uil--message]"></span>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>