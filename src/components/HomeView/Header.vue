<script>
    export default{
        name: 'Header',

        props: [ 'mode' ],

        data() {
            return {
                activeLink: null
            };
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

            handleScroll() {
                const scrollPosition = window.scrollY;
                const sections = ['introduction', 'about', 'specialization', 'projects', 'expertise', 'achievements', 'testimonials', 'blog', 'contact']; //Add IDs of your sections here
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
    <div class=" hidden md:block">
        <div class=" px-8 flex justify-around items-center py-5 w-full h-16 z-20 bg-slate-50 drop-shadow-md fixed top-0 text-gray-700 dark:bg-slate-900 dark:text-white">
            <div class=" basis-1/3 text-center font-serif font-bold">ANTHONY NNANNA</div>

            <div class=" basis-2/3 flex justify-around font-bold text-sm">
                <div>
                    <a href="#introduction" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'introduction' }">Intro</a>
                </div>
                <div>
                    <a href="#about" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'about' }">About</a>
                </div>
                <div>
                    <a href="#specialization" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'specilization' }">Specialization</a>
                </div>
                <div>
                    <a href="#projects" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'projects' }">Projects</a>
                </div>
                <div>
                    <a href="#expertise" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'expertise' }">Expertise</a>
                </div>
                <div>
                    <a href="#achievemnts" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'achievements' }">Achievements</a>
                </div>
                <div>
                    <a href="#testimonials" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'testimonials' }">Testimonials</a>
                </div>
                <div>
                    <a href="#blog" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'blog' }">Blog</a>
                </div>
                <div>
                    <a href="#contact" class="nav-link" :class="{ 'text-indigo-700': activeLink === 'contact' }">Contact</a>
                </div>
                <div @click="changeMode" class="cursor-pointer">
                    <span v-if="mode">
                        <span class="text-xl icon-[ph--sun-bold]"></span>
                    </span>
                    <span v-else>
                        <span class="text-xl icon-[ph--moon]"></span>
                    </span>
                </div>         
            </div>
        </div>
    </div>
</template>