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
                <div id="about-text" class="md:w-3/4 mx-auto">
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
                <div id="about-points" class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 text-center md:w-5/6 mx-auto">
                    <div class="rebrand-wrap-eight animate-grow">
                        <div class="rebrand-wrap-seven">Experience</div>
                        <div class="rebrand-warp-nine">5+ years</div>
                    </div>
                    <div class="rebrand-wrap-eight animate-grow">
                        <div class="rebrand-wrap-seven">Performance</div>
                        <div class="rebrand-warp-nine">20% average performance improvement delivered on projects</div>
                    </div>
                    <div class="rebrand-wrap-eight animate-grow">
                        <div class="rebrand-wrap-seven">Leadership</div>
                        <div class="rebrand-warp-nine">Led cross-functional teams from design to production</div>
                    </div>
                    <div class="rebrand-wrap-eight animate-grow">
                        <div class="rebrand-wrap-seven">Open Source</div>
                        <div class="rebrand-warp-nine">Active open-source contributor</div>
                    </div>
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