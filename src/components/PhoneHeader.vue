<script>
    export default{
        props: [ 'mode' ],

        data(){
            return{
                apps: false
            }
        },

        methods: {
            changeMode(){
                this.$emit('change')
            },
            toggleApps(){
                this.apps = !this.apps
            }
        }
    }
</script>

<template>
    <!--MAIN HEADER-->
    <div class="phone-header-con">
        <div class="flex justify-between items-center">
            <div class="font-semibold">
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
    <div class="phone-header-con rounded-3xl" v-if="apps">
        <div class="flex justify-center w-full">
            <div class="grid grid-cols-3 gap-y-5 py-8 w-full">
                <!--nav one-->
                <a href="#home" class="nav-link text-center" :class="{ 'text-indigo-700': activeLink === 'home' }">
                    <div>
                        <span class="phone-icon icon-[uil--estate]"></span>
                        <div>Home</div>
                    </div>
                </a>
                
                <!--nav two-->
                <a href="#about" class="nav-link text-center" :class="{ 'text-indigo-700': activeLink === 'about' }">
                    <div>
                        <span class="phone-icon icon-[uil--user]"></span>
                        <div>About</div>
                    </div>
                </a>

                <!--nav three-->
                <a href="#skills" class="nav-link text-center" :class="{ 'text-indigo-700': activeLink === 'skills' }">
                    <div>
                        <span class="phone-icon icon-[uil--file-alt]"></span>
                        <div>Skills</div>
                    </div>
                </a>

                <!--nav four-->
                <a href="#qualification" class="nav-link text-center" :class="{ 'text-indigo-700': activeLink === 'qualification' }">
                    <div>
                        <span class="phone-icon icon-[uil--briefcase-alt]"></span>
                        <div>Qualification</div>
                    </div>
                </a>

                <!--nav five-->
                <a href="#projects" class="nav-link text-center" :class="{ 'text-indigo-700': activeLink === 'projects' }">
                    <div>
                        <span class="phone-icon icon-[uil--scenery]"></span>
                        <div>Projects</div>
                    </div>
                </a>

                <!--nav six-->
                <a href="#message" class="nav-link text-center" :class="{ 'text-indigo-700': activeLink === 'message' }">
                    <div>
                        <span class="phone-icon icon-[uil--message]"></span>
                        <div>Contact-Me</div>
                    </div>
                </a>
            </div>
        </div>


        <div class="text-right">
            <span class="phone-icon icon-[quill--escape]" @click="toggleApps"></span>
        </div>
    </div>
</template>