<script>
    export default {
        data() {
            return {
                textVisible: false, // Add a new property to track image visibility
                textClassApplied: false, // Add a flag to track whether the class has been applied or not
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
                if (!this.textClassApplied) {
                    // Check for image visibility
                    const text = document.getElementById('about-text');
                    const textRect = text.getBoundingClientRect();
                    if (textRect.top < window.innerHeight && textRect.bottom >= 0) {
                        this.textVisible = true;
                    } else {
                        this.textVisible = false;
                    }

                    // If image is visible, apply the class and update the flag
                    if (this.titleVisible) {
                        this.titleClassApplied = true;
                    }
                }

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
                <div>My Introduction</div>
            </div>

            <!--Body-->
            <div class=" block lg:flex justify-evenly pt-10 items-center">
                <!--Image-->
                <div class=" flex justify-center">
                    <img id="about-img" src="/img/tony2-img.jpg" alt="tony" class="rounded-full w-48 h-48 sm:w-64 sm:h-64" :class="{ 'animate-left': imageVisible }">
                </div>
                
                <!--Details-->
                <div class="pt-4 w-fit mx-auto">
                    <div class="text-lg max-w-96" id="about-text" :class="{ 'animate-opacity': textVisible }">
                        I possess a self-motivated attitude, thriving in dynamic environments, and am also deeply passionate about learning new skills that facilitate my growth and development. Additionally, my proficiency in leadership and collaboration within teams enables me to excel collectively. Currently, I am actively seeking a competitive position to further enhance my skills
                    </div>
                    <div id="about-points" class=" max-w-96 flex justify-around gap-5 font-semibold pt-8 text-center">
                        <div :class="{ 'animate-right': pointVisible }">
                            <div class=" text-2xl text-black dark:text-white font-extrabold">4.75</div>
                            <div class=" text-wrap">Aggregrate CGPA</div>
                        </div>
                        <div :class="{ 'animate-grow': pointVisible }">
                            <div class=" text-2xl text-black dark:text-white font-extrabold">30+</div>
                            <div>Web Development Projects</div>
                        </div>
                        <div :class="{ 'animate-left': pointVisible }">
                            <div class=" text-2xl text-black dark:text-white font-extrabold">4+</div>
                            <div>Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>