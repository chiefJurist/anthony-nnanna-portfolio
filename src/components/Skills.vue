<script>
    import Program from './Skills/ProgrammingLanguages.vue';
    import Frameworks from './Skills/Frameworks.vue';
    import Insfrastructure from './Skills/InfrastructuralTools.vue';
    import Development from './Skills/DevelopmentTools.vue';
    import Testing from './Skills/TestingFrameworks.vue';
    import Design from './Skills/DesignTools.vue';
    import Deployment from './Skills/DeploymentPlatforms.vue';
    export default{
        components: { Program, Frameworks, Insfrastructure, Development,Testing, Design, Deployment },
        data(){
            return{
                program: false,
                frameworks: false,
                infrastructure: false,
                development: false,
                testing: false,
                design: false,
                deployment: false
            }
        }
    }
</script>
<template>
    <div class="body-con" id="skills">
        <div class="body-subcon text-black dark:text-white">
            <!--Title-->
            <div class="text-center mb-10">
                <div class=" text-4xl font-extrabold">Skills</div>
                <div class=" font-semibold text-gray-600 dark:text-white">My Technical Level</div>
            </div>

            <!--Details-->
            <div class="block sm:grid md:grid-cols-2 gap-12 mx-auto w-full">
                <!--Programming Languages-->
                <div class="skills">
                    <!--Programming Languages Header-->
                    <div class="skills-header" @click="program = !program">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.79 11.79 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"/></svg>
                        </div>
                        <div class="skills-text">Programming Languages</div>
                        <div class="skills-display">
                            <div v-if="!program">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="program">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Programming Languages Body-->
                    <div v-if="program" class="skills-body">
                        <Program></Program>
                    </div>
                </div>

                <!--Frameworks-->
                <div class="skills">
                    <!--Frameworks Header-->
                    <div class="skills-header" @click="frameworks = !frameworks">
                        <div class="skills-icon">
                            <span class="icon icon-[mingcute--pencil-ruler-line]"></span>
                        </div>
                        <div class="skills-text">Frameworks</div>
                        <div class="skills-display">
                            <div v-if="!frameworks">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="frameworks">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Frameworks Body-->
                    <div v-if="frameworks" class="skills-body">
                        <Frameworks></Frameworks>
                    </div>
                </div>

                <!--Infrastructural Tools-->
                <div class="skills">
                    <!--Infrastructural Tools header-->
                    <div class="skills-header" @click="infrastructure = !infrastructure">
                        <div class="skills-icon">
                            <span class="icon icon-[streamline--industry-innovation-and-infrastructure-solid]"></span>
                        </div>
                        <div class="skills-text">Infrastructural Tools</div>
                        <div class="skills-display">
                            <div v-if="!Infrastructure">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="Infrastructure">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Infrasructural Tools Body-->
                    <div v-if="infrastructure" class="skills-body">
                        <Insfrastructure></Insfrastructure>
                    </div>
                </div>

                <!--Development Tools-->
                <div class="skills">
                    <!--Development Tools Header-->
                    <div class="skills-header" @click="development = !development">
                        <div class="skills-icon">
                            <span class="icon icon-[fluent--developer-board-16-regular]"></span>
                        </div>
                        <div class="skills-text">Development Tools</div>
                        <div class="skills-display">
                            <div v-if="!development">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="development">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Development Tools Body-->
                    <div class="skills-body" v-if="development">
                        <Development></Development>
                    </div>
                </div>

                <!--Testing Frameworks-->
                <div class="skills">
                    <!--Testing Frameworks Header-->
                    <div class="skills-header" @click="testing = !testing">
                        <div class="skills-icon">
                            <span class="icon icon-[ant-design--deployment-unit-outlined]"></span>
                        </div>
                        <div class="skills-text">Testing Frameworks</div>
                        <div class="skills-display">
                            <div v-if="!testing">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="testing">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Testing Frameworks Body-->
                    <div class="skills-body" v-if="testing">
                        <Testing></Testing>
                    </div>
                </div>

                <!--Design Tools-->
                <div class="skills">
                    <!--Design Tools header-->
                    <div class="skills-header" @click="design = !design">
                        <div class="skills-icon">
                            <span class="icon icon-[carbon--deployment-pattern]"></span>
                        </div>
                        <div class="skills-text">Design Tools</div>
                        <div class="skills-display">
                            <div v-if="!design">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="design">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Design Tools Body-->
                    <div class="skills-body" v-if="design">
                        <Design></Design>
                    </div>
                </div>
                <div>

                </div>

                <!--Deployment Platforms-->
                <div class="skills">
                    <!--Deployment Platforms Header-->
                    <div class="skills-header" @click="deployment =!deployment">
                        <div class="skills-icon">
                            <span class="icon icon-[eos-icons--code-deploy-outlined]"></span>
                        </div>
                        <div class="skills-text">Deployment Platforms</div>
                        <div class="skills-display">
                            <div v-if="!deployment">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="deployment">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Deployment Platforms Body-->
                    <div class="skills-body" v-if="deployment">
                        <Deployment></Deployment>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>