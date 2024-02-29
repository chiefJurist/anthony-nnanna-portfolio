<script>
    export default{
        props: [ 'mode' ],

        data(){
            return{
                apps: false,
                activeLink: null
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            changeMode(){
                this.$emit('change')
            },
            toggleApps(){
                this.apps = !this.apps
            },
            //
            handleScroll() {
                const scrollPosition = window.scrollY;
                const sections = ['home', 'about', 'skills', 'qualification', 'projects', 'message']; // Add IDs of your sections here
                const offset = 100; // Adjust the offset as needed

                sections.forEach(section => {
                    const target = document.getElementById(section);
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
    <div class="phone-header-con rounded-t-2xl" v-if="apps">
        <div class="flex justify-center w-full">
            <div class="grid grid-cols-3 gap-y-5 py-5 w-full">
                <!--nav one-->
                <a href="#home" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'home' }">
                    <div>
                        <span class="phone-icon icon-[uil--estate]"></span>
                        <div>Home</div>
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
                <a href="#skills" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'skills' }">
                    <div>
                        <span class="phone-icon icon-[uil--file-alt]"></span>
                        <div>Skills</div>
                    </div>
                </a>

                <!--nav four-->
                <a href="#qualification" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'qualification' }">
                    <div>
                        <span class="phone-icon icon-[uil--briefcase-alt]"></span>
                        <div>Qualification</div>
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
                <a href="#message" class="phone-nav-link" :class="{ 'text-indigo-700': activeLink === 'message' }">
                    <div>
                        <span class="phone-icon icon-[uil--message]"></span>
                        <div>Contact-Me</div>
                    </div>
                </a>
            </div>
        </div>


        <div class="text-right">
            <span class="icon icon-[quill--escape]" @click="toggleApps"></span>
        </div>
    </div>
</template>