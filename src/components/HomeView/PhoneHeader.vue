<script>
    export default{
        props: [ 'mode' ],
        emits: ['change'],

        data(){
            return{
                apps: false,
                activeLink: null,
                buttonVisible: true
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            changeMode(){
                this.$emit('change')
            },
            toggleApps(){
                this.apps = !this.apps
                console.log(this.apps)
            },
            //
            handleScroll() {
                const scrollPosition = window.scrollY;
                const sections = ['introduction', 'about', 'specialization', 'projects', 'tech-stack', 'experience', 'testimonials', 'blog', 'contact'];

                const offset = 100;

                sections.forEach(section => {
                    const target = document.getElementById(section);
                    if (!target) return; // ← prevent errors
                    if (target.offsetTop <= scrollPosition + offset && (target.offsetTop + target.offsetHeight) > scrollPosition + offset) {
                        this.activeLink = section;
                    }
                });
            }

        }
    }
</script>

<template>
    <!--MAIN HEADER-->
    <div class="phone-header-con">
        <div class="flex justify-between items-center">
            <div class="font-extrabold">
                Anthony Nnanna
            </div>

            <div>
                <span @click="changeMode">
                    <span v-if="mode">
                        <span class="phone-icon icon-[ph--sun-bold]"></span>
                    </span>
                    <span v-else>
                        <span class="phone-icon icon-[ph--moon]"></span>
                    </span>
                </span>
                <span class="phone-icon ml-2 icon-[uil--apps]" @click="toggleApps"></span>
            </div>
        </div>
    </div>




    <!------------------------------------HEADER NAV--------------------------------->
    <!-- <Transition name="nav" mode="in-out"> -->
        <div v-if="apps" class="phone-header-con rounded-t-2xl">
            <div class="flex justify-center w-full">
                <div class="grid grid-cols-3 gap-y-5 py-5 w-full">
                    <!--nav one-->
                    <a href="#introduction" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'introduction' }">
                        <div>
                            <span class="phone-icon icon-[uil--estate]"></span>
                            <div>Introduction</div>
                        </div>
                    </a>
                    
                    <!--nav two-->
                    <a href="#about" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'about' }">
                        <div>
                            <span class="phone-icon icon-[uil--user]"></span>
                            <div>About</div>
                        </div>
                    </a>

                    <!--nav three-->
                    <a href="#specialization" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'specialization' }">
                        <div>
                            <span class="phone-icon icon-[uil--file-alt]"></span>
                            <div>Specialization</div>
                        </div>
                    </a>

                    <!--nav four-->
                    <a href="#tech-stack" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'tech-stack' }">
                        <div>
                            <span class="phone-icon icon-[uil--briefcase-alt]"></span>
                            <div>Tech-Stack</div>
                        </div>
                    </a>

                    <!--nav five-->
                    <a href="#projects" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'projects' }">
                        <div>
                            <span class="phone-icon icon-[uil--scenery]"></span>
                            <div>Projects</div>
                        </div>
                    </a>

                    <!--nav six-->
                    <a href="#experience" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'experience' }">
                        <div>
                            <span class="phone-icon icon-[uil--message]"></span>
                            <div>Experience</div>
                        </div>
                    </a>

                    <!--nav seven-->
                    <a href="#testimonials" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'testimonials' }">
                        <div>
                            <span class="phone-icon icon-[uil--message]"></span>
                            <div>Testimonials</div>
                        </div>
                    </a>

                    <!--nav eight-->
                    <a href="#blog" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'blog' }">
                        <div>
                            <span class="phone-icon icon-[uil--message]"></span>
                            <div>Blog</div>
                        </div>
                    </a>

                    <!--nav nine-->
                    <a href="#contact" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'contact' }">
                        <div>
                            <span class="phone-icon icon-[uil--message]"></span>
                            <div>Conatact</div>
                        </div>
                    </a>
                </div>
            </div>


            <div class="text-right">
                <span class="icon icon-[quill--escape]" @click="toggleApps"></span>
            </div>
        </div>  
    <!-- </Transition> -->
</template>
<!-- 
<style>
    .nav-enter-active{
        transition: opacity 1s, transform 1s;
    }
    .nav-leave-active {
        transition: opacity 1s, transform 1s;
    }
    .nav-leave-to {
        opacity: 0;
        transform: translateY(100%);
    }
    .nav-enter-from{
        opacity: 0;
        transform: translateY(100%);
    }
</style> -->