<script>
    import Frontend from './Skills/Frontend.vue';
    import Backend from './Skills/Backend.vue';
    import DevOpsTools from './Skills/DevOpsTools.vue';
    import Databases from './Skills/Databases.vue';
    import Testing from './Skills/TestingOptimization.vue';
    import Blockchain from './Skills/Blockchain.vue'
    export default{
        components: { Frontend, Backend, DevOpsTools, Databases,Testing, Blockchain },

        data(){
            return{
                frontend: false,
                backend: false,
                devops: false,
                databases: false,
                testing: false,
                blockchain: false,
            }
        }
    }
</script>
<template>
    <div class="body-con" id="skills">
        <div class="body-subcon text-black dark:text-white">
            <!--Title-->
            <div class="gen-header-con mb-10">
                <div class="gen-header-text">Skills</div>
                <div class=" font-semibold text-gray-600 dark:text-white">My Technical Level</div>
            </div>

            <!--Details-->
            <div class="block sm:grid md:grid-cols-2 gap-12 lg:gap-x-40 mx-auto w-fit">
                <!--Frontend Development-->
                <div class="skills">
                    <!--Frontend Development Header-->
                    <div class="skills-header" @click="frontend = !frontend">
                        <div class="skills-icon">
                            <span class="icon icon-[fa--code]"></span>
                        </div>
                        <div class="skills-text">Frontend Development</div>
                        <div class="skills-display">
                            <div v-if="!frontend">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="frontend">
                                <span class="icon icon-[uil--angle-up]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Frontend Development Body-->
                    <Transition name="skill" mode="in-out">
                        <div v-if="frontend" class="skills-body">
                            <Frontend></Frontend>
                        </div>
                    </Transition>
                </div>

                <!--Backend Development-->
                <div class="skills">
                    <!--Backend Development Header-->
                    <div class="skills-header" @click="backend = !backend">
                        <div class="skills-icon">
                            <span class="icon icon-[carbon--deployment-pattern]"></span>
                        </div>
                        <div class="skills-text">Backend Development</div>
                        <div class="skills-display">
                            <div v-if="!backend">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="backend">
                                <span class="icon icon-[uil--angle-up]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Backend Development Body-->
                    <Transition name="skill" mode="in-out">
                        <div v-if="backend" class="skills-body">
                            <Backend></Backend>
                        </div>
                    </Transition>
                </div>

                <!--DevOps & Tools-->
                <div class="skills">
                    <!--DevOps & Tools header-->
                    <div class="skills-header" @click="devops = !devops">
                        <div class="skills-icon">
                            <span class="icon icon-[ant-design--deployment-unit-outlined]"></span>
                        </div>
                        <div class="skills-text">DevOps & Tools</div>
                        <div class="skills-display">
                            <div v-if="!devops">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="devops">
                                <span class="icon icon-[uil--angle-up]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Infrasructural Tools Body-->
                    <Transition name="skill" mode="in-out">
                        <div v-if="devops" class="skills-body">
                            <DevOpsTools></DevOpsTools>
                        </div>
                    </Transition>
                </div>

                <!--Databases-->
                <div class="skills">
                    <!--Databases Header-->
                    <div class="skills-header" @click="databases = !databases">
                        <div class="skills-icon">
                            <span class="icon icon-[streamline--industry-innovation-and-infrastructure-solid]"></span>
                        </div>
                        <div class="skills-text">Databases</div>
                        <div class="skills-display">
                            <div v-if="!databases">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="databases">
                                <span class="icon icon-[uil--angle-up]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Databases Body-->
                    <Transition name="skill" mode="in-out">
                        <div class="skills-body" v-if="databases">
                            <Databases></Databases>
                        </div>
                    </Transition>
                </div>

                <!--Testing & Optimization-->
                <div class="skills">
                    <!--Testing & Optimization Header-->
                    <div class="skills-header" @click="testing = !testing">
                        <div class="skills-icon">
                            <span class="icon icon-[fluent--developer-board-16-regular]"></span>
                        </div>
                        <div class="skills-text">Testing & Optimization</div>
                        <div class="skills-display">
                            <div v-if="!testing">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="testing">
                                <span class="icon icon-[uil--angle-up]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Testing & Optimization Body-->
                    <Transition name="skill" mode="in-out">
                        <div class="skills-body" v-if="testing">
                            <Testing></Testing>
                        </div>
                    </Transition>
                </div>

                <!--Blockchain & Smart Contracts-->
                <div class="skills">
                    <!--Blockchain & Smart Contracts Header-->
                    <div class="skills-header" @click="blockchain = !blockchain">
                        <div class="skills-icon">
                            <span class="icon icon-[eos-icons--blockchain]"></span>
                        </div>
                        <div class="skills-text">Blockchain & Smart Contracts</div>
                        <div class="skills-display">
                            <div v-if="!blockchain">
                                <span class="icon icon-[uil--angle-down]"></span>
                            </div>
                            <div v-if="blockchain">
                                <span class="icon icon-[uil--angle-up]"></span>
                            </div>
                        </div>
                    </div>
                    <!--Blockchain & Smart Contracts Body-->
                    <Transition name="skill" mode="in-out">
                        <div class="skills-body" v-if="blockchain">
                            <Blockchain></Blockchain>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .skill-enter-active{
    transition: opacity 0.5s, transform 0.5s;
    }
    .skill-leave-active {
    transition: opacity 0.5s, transform 0.5s;
    }
    .skill-leave-to {
    opacity: 0;
    transform: translateY(-10%);
    }
    .skill-enter-from{
        opacity: 0;
        transform: translateY(-10%);
    }
</style>