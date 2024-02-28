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
                training: false
            }
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
            <div class=" text-center">
                <div class=" text-4xl font-bold text-black dark:text-white">Qualification</div>
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
                        <div class="qualification-header">Sourcedware</div>
                        <div class="qualification-description">On contract full-stack and front-end web development</div>
                        <div class="qualification-date">
                            <span>
                                <span class="icon-[solar--calendar-outline]"></span>
                            </span>
                            <span class="text-xs">
                                2023 - Present
                            </span>
                        </div>
                        <div class="view-more-con" @click="toggleSourcedware">
                            <span class="view-more">View More</span>
                            <span class="icon icon-[uil--arrow-right]"></span>
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
                        <div class="qualification-header">Gigabyte Developers</div>
                        <div class="qualification-description">On contract back-end development and engineering</div>
                        <div class="qualification-date">
                            <span>
                                <span class="icon-[solar--calendar-outline]"></span>
                            </span>
                            <span class="text-xs">
                                2020 - Present
                            </span>
                        </div>
                        <div class="view-more-con" @click="toggleGigabyte">
                            <span class="view-more">View More</span>
                            <span class="icon icon-[uil--arrow-right]"></span>
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
                        <div class="progress-circle -top-2"></div>
                        <div class="progress-circle bottom-0"></div>
                    </div>

                    <!--empty divs-->
                    <div></div>
                    <div class="qualification-con"></div>

                    <!--education two-->
                    <div class="pl-5">
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

                    <!--education three-->
                    <div class="qualification-con">
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
                        <div class="progress-circle -top-2"></div>
                        <div class="progress-circle bottom-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>