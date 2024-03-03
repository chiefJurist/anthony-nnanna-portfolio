<script>
    export default {
        data() {
            return {
                imageVisible: false, // Add a new property to track image visibility
                classApplied: false, // Add a flag to track whether the class has been applied or not
                divVisible: false,
                divClassApplied: false 
            };
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            handleScroll() {
                // Check if the class has been applied already
                if (!this.classApplied) {
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
                        this.classApplied = true;
                    }
                }

                // Check if the class has been applied already
                if (!this.divClassApplied) {
                    // Check for image visibility
                    const div = document.getElementById('about-div');
                    const divRect = div.getBoundingClientRect();
                    if (divRect.top < window.innerHeight && divRect.bottom >= 0) {
                        this.divVisible = true;
                    } else {
                        this.divVisible = false;
                    }

                    // If image is visible, apply the class and update the flag
                    if (this.divVisible) {
                        this.divClassApplied = true;
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
            <div class="text-center">
                <div class="text-4xl font-bold dark:text-white">More About Me</div>
                <div class="text-gray-600 dark:text-white">My Introductiom</div>
            </div>

            <!--Body-->
            <div class=" block lg:flex justify-evenly pt-10 items-center">
                <!--Image-->
                <div class=" flex justify-center">
                    <img id="about-img" src="/img/tony2-img.jpg" alt="tony" class="rounded-full w-48 h-48 sm:w-64 sm:h-64" :class="{ 'animate-grow': imageVisible }">
                </div>
                
                <!--Details-->
                <div class="pt-4 w-fit mx-auto" id="about-div" :class="{ 'animate-left': divVisible }">
                    <div class="text-gray-500 dark:text-white text-lg max-w-96 font-semibold">
                        I possess a self-motivated attitude, thriving in dynamic environments, and am also deeply passionate about learning new skills that facilitate my growth and development. Additionally, my proficiency in leadership and collaboration within teams enables me to excel collectively. Currently, I am actively seeking a competitive position to further enhance my skills
                    </div>
                    <div class=" max-w-96 flex justify-around gap-5 text-gray-500 dark:text-white font-semibold pt-8 text-center">
                        <div>
                            <div class=" text-2xl text-black dark:text-white font-extrabold">4.75</div>
                            <div class=" text-wrap">Aggregrate CGPA</div>
                        </div>
                        <div>
                            <div class=" text-2xl text-black dark:text-white font-extrabold">30+</div>
                            <div>Web Development Projects</div>
                        </div>
                        <div>
                            <div class=" text-2xl text-black dark:text-white font-extrabold">4+</div>
                            <div>Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>