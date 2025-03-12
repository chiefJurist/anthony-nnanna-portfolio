<script>
    import Sourcedware from './Qualification/Sourcedware.vue';
    import Gigabyte from './Qualification/Gigabyte.vue';
    import University from './Qualification/University.vue';
    import Internship from './Qualification/Internship.vue';
    import Training from './Qualification/Training.vue';

    export default{
        components: { Sourcedware, Gigabyte, University, Internship, Training },

        data(){
            return{
                sourcedware: false,
                gigabyte: false,
                university: false,
                internship: false,
                training: false,
                //For the Animation
                sourcedwareVisible: false,
                gigabyteVisible: false,
                universityVisible: false,
                internshipVisible: false,
                trainingVisible: false,
                //checking if the class is applied
                sourcedwareClassApplied: false,
                gigabyteClassApplied: false,
                universityClassApplied: false,
                internshipClassApplied: false,
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
            toggleInternship(){
                this.internship = !this.internship;
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

                if (!this.internshipClassApplied) {
                    const internship = document.getElementById('internship');
                    const internshipRect = internship.getBoundingClientRect();
                    if (internshipRect.top < window.innerHeight && internshipRect.bottom >= 0) {
                        this.internshipVisible = true;
                    } else {
                        this.internshipVisible = false;
                    }
                    if (this.internshipVisible) {
                        this.internshipClassApplied = true;
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
        <div v-if="internship">
            <Internship @change="toggleInternship"></Internship>
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
                                Full-Stack & Front-End Developer.
                            </div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-sm">
                                    2021 - PRESENT
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
                                Software Engineer & Full-Stack Specialist (Contract).
                            </div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-sm">
                                    2022 - 2024
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
                            <div class="qualification-header">BSc in Software Development</div>
                            <div class="qualification-description">Delft University of Technology, Delft, Netherlands</div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-sm">
                                    2017 – 2020
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
                        <div id="internship" :class="{ 'animate-grow': internshipVisible }">
                            <div class="qualification-header">Backend Developer Internship</div>
                            <div class="qualification-description">CodeFlow Solutions, Rotterdam, Netherlands</div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-sm">
                                    2019
                                </span>
                            </div>
                            <div class="view-more-con" @click="toggleInternship">
                                <span class="view-more">View More</span>
                                <span class="icon icon-[uil--arrow-right]"></span>
                            </div>
                        </div>
                    </div>

                    <!--education three-->
                    <div class="qualification-con">
                        <div id="training" :class="{ 'animate-grow': trainingVisible }">
                            <div class="qualification-header">Full-Stack Developer Industrial Training</div>
                            <div class="qualification-description">DevSphere Tech, Amsterdam, Netherlands</div>
                            <div class="qualification-date">
                                <span>
                                    <span class="icon-[solar--calendar-outline]"></span>
                                </span>
                                <span class="text-sm">
                                    2019
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