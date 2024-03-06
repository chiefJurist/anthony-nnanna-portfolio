<script>
    import Sourcedware from './Qualification/Sourcedware.vue';
    import Gigabyte from './Qualification/Gigabyte.vue';
    import University from './Qualification/University.vue';
    import Bootcamp from './Qualification/Bootcamp.vue';
    import Training from './Qualification/Training.vue';

    export default{
        components: { Sourcedware, Gigabyte, University, Bootcamp, Training },

        data(){
            return{
                sourcedware: false,
                gigabyte: false,
                university: false,
                bootcamp: false,
                training: false,
                //For the Animation
                sourcedwareVisible: false,
                gigabyteVisible: false,
                universityVisible: false,
                bootcampVisible: false,
                trainingVisible: false,
                //checking if the class is applied
                sourcedwareClassApplied: false,
                gigabyteClassApplied: false,
                universityClassApplied: false,
                bootcampClassApplied: false,
                trainingClassApplied: false,
            }
        },

        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll();
        },

        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            toggleSourcedware(){
                this.sourcedware = !this.sourcedware;
            },
            toggleGigabyte(){
                this.gigabyte = !this.gigabyte;
            },
            toggleUniversity(){
                this.university = !this.university;
            },
            toggleBootcamp(){
                this.bootcamp = !this.bootcamp;
            },
            toggleTraining(){
                this.training = !this.training;
            },
            //THIS FOR THE ANIMATION
            handleScroll() {
                if (!this.sourcedwareClassApplied) {
                    const sourcedware = document.getElementById('sourcedware');
                    const sourcedwareRect = sourcedware.getBoundingClientRect();
                    if (sourcedwareRect.top < window.innerHeight && sourcedwareRect.bottom >= 0) {
                        this.sourcedwareVisible = true;
                    } else {
                        this.sourcedwareVisible = false;
                    }
                    if (this.sourcedwareVisible) {
                        this.sourcedwareClassApplied = true;
                    }
                }

                if (!this.gigabyteClassApplied) {
                    const framework = document.getElementById('gigabyte');
                    const gigabyteRect = gigabyte.getBoundingClientRect();
                    if (gigabyteRect.top < window.innerHeight && gigabyteRect.bottom >= 0) {
                        this.gigabyteVisible = true;
                    } else {
                        this.gigabyteVisible = false;
                    }
                    if (this.gigabyteVisible) {
                        this.gigabyteClassApplied = true;
                    }
                }

                if (!this.universityClassApplied) {
                    const university = document.getElementById('university');
                    const universityRect = university.getBoundingClientRect();
                    if (universityRect.top < window.innerHeight && universityRect.bottom >= 0) {
                        this.universityVisible = true;
                    } else {
                        this.universityVisible = false;
                    }
                    if (this.universityVisible) {
                        this.universityClassApplied = true;
                    }
                }

                if (!this.bootcampClassApplied) {
                    const bootcamp = document.getElementById('bootcamp');
                    const bootcampRect = bootcamp.getBoundingClientRect();
                    if (bootcampRect.top < window.innerHeight && bootcampRect.bottom >= 0) {
                        this.bootcampVisible = true;
                    } else {
                        this.bootcampVisible = false;
                    }
                    if (this.bootcampVisible) {
                        this.bootcampClassApplied = true;
                    }
                }

                if (!this.trainingClassApplied) {
                    const training = document.getElementById('training');
                    const trainingRect = training.getBoundingClientRect();
                    if (trainingRect.top < window.innerHeight && trainingRect.bottom >= 0) {
                        this.trainingVisible = true;
                    } else {
                        this.trainingVisible = false;
                    }
                    if (this.trainingVisible) {
                        this.trainingClassApplied = true;
                    }
                }
            }
        }
    }
</script>
<template>
    <div id="qualification" class="body-con">
        <!--modal cards-->
        <div v-if="sourcedware">
            <Sourcedware @change="toggleSourcedware"></Sourcedware>
        </div>
        <div v-if="gigabyte">
            <Gigabyte @change="toggleGigabyte"></Gigabyte>
        </div>
        <div v-if="university">
            <University @change="toggleUniversity"></University>
        </div>
        <div v-if="bootcamp">
            <Bootcamp @change="toggleBootcamp"></Bootcamp>
        </div>
        <div v-if="training">
            <Training @change="toggleTraining"></Training>
        </div>



        <!--qualification-->
        <div class="body-subcon text-gray-500 dark:text-white">
            <!--Title-->
            <div class="gen-header-con">
                <div class="gen-header-text">Qualification</div>
                <div>My Personal Journey</div>
            </div>



            <!--Work Experience-->
            <div class="w-full mx-auto">
                <div class=" flex justify-between items-center gap-4 w-fit mx-auto my-8">
                    <span>
                        <span class="icon icon-[material-symbols--home-work-outline]"></span>
                    </span>
                    <span class=" text-indigo-700 text-2xl font-bold">Work Experience</span>
                </div>


                <!--work experience body-->
                <div class="general-qualification-con">
                    <!--experience one-->
                    <div class="qualification-con">
                        <div  id="sourcedware" :class="{ 'animate-grow': sourcedwareVisible }">
                            <div class="qualification-header">Sourcedware</div>
                            <div class="qualification-description">
                                Engaged in contract based full-stack and front-end web development projects.
                            </div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-xs">
                                    2020 - Present
                                </span>
                            </div>
                            <div class="view-more-con" @click="toggleSourcedware">
                                <span class="view-more">View More</span>
                                <span class="icon icon-[uil--arrow-right]"></span>
                            </div>
                        </div>
                        <div class="progress-circle -top-2"></div>
                        <div class="progress-circle bottom-0"></div>
                    </div>

                    <!--empty divs-->
                    <div></div>

                    <div class="border-r border-indigo-700 relative">
                        <div class="progress-circle bottom-0"></div>
                    </div>

                    <!--experience two-->
                    <div class="pl-5">
                        <div id="gigabyte" :class="{ 'animate-grow': gigabyteVisible }">
                            <div class="qualification-header">Gigabyte Developers</div>
                            <div class="qualification-description">                     
                                Engaged in contract-based back-end development and software engineering projects.
                            </div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-xs">
                                    2022 - Present
                                </span>
                            </div>
                            <div class="view-more-con" @click="toggleGigabyte">
                                <span class="view-more">View More</span>
                                <span class="icon icon-[uil--arrow-right]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <!--Education-->
            <div class="w-full mx-auto">
                <div class="flex justify-between gap-4 w-fit mx-auto my-8 pt-10">
                    <span class="icon icon-[fluent--hat-graduation-20-regular]"></span>
                    <span class="text-indigo-700 text-2xl font-bold">Education</span>
                </div>


                <!--Education Body-->
                <div class="general-qualification-con">
                    <!--education one-->
                    <div class="qualification-con">
                        <div id="university" :class="{ 'animate-grow': universityVisible }">
                            <div class="qualification-header">University</div>
                            <div class="qualification-description">Federal University of Technology Owerri</div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-xs">
                                    2016 - 2020
                                </span>
                            </div>
                            <div class="view-more-con">
                                <span class="view-more" @click="toggleUniversity">View More</span>
                                <span class="icon icon-[uil--arrow-right]"></span>
                            </div>
                        </div>
                        <div class="progress-circle -top-2"></div>
                        <div class="progress-circle bottom-0"></div>
                    </div>

                    <!--empty divs-->
                    <div></div>
                    <div class="qualification-con"></div>

                    <!--education two-->
                    <div class="pl-5">
                        <div id="bootcamp" :class="{ 'animate-grow': bootcampVisible }">
                            <div class="qualification-header">Bootcamp</div>
                            <div class="qualification-description">BLOC web developers bootcamp</div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-xs">
                                    2019
                                </span>
                            </div>
                            <div class="view-more-con" @click="toggleBootcamp">
                                <span class="view-more">View More</span>
                                <span class="icon icon-[uil--arrow-right]"></span>
                            </div>
                        </div>
                    </div>

                    <!--education three-->
                    <div class="qualification-con">
                        <div id="training" :class="{ 'animate-grow': trainingVisible }">
                            <div class="qualification-header">Training Camp</div>
                            <div class="qualification-description">Decagon Software Engineering Training Institute</div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-xs">
                                    2020
                                </span>
                            </div>
                            <div class="view-more-con" @click="toggleTraining">
                                <span class="view-more">View More</span>
                                <span class="icon icon-[uil--arrow-right]"></span>
                            </div>
                        </div>
                        <div class="progress-circle -top-2"></div>
                        <div class="progress-circle bottom-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>