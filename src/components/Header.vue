<script>
    export default{
        name: 'Header',
        props: [ 'mode' ],
        methods: {
            changeMode(){
                this.$emit('change')
            }
        }
    }
</script>

<template>
    <div class=" hidden sm:block">
        <div class=" px-8 flex justify-around items-center py-5 w-full h-16 z-20 bg-white fixed top-0 text-gray-700 dark:bg-slate-800 dark:text-white">
            <div class=" basis-1/4 text-center">ANTHONY NNANNA</div>

            <div class=" basis-3/4 flex justify-around font-semibold">
                <div>
                    <a href="#home" class="nav-link">Home</a>
                </div>
                <div>
                    <a href="#about" class="nav-link">About</a>
                </div>
                <div>
                    <a href="#skills" class="nav-link">Skills</a>
                </div>
                <div>
                    <a href="#qualication" class="nav-link">Qualification</a>
                </div>
                <div>
                    <a href="#projects" class="nav-link">Projects</a>
                </div>
                <div>
                    <a href="#seeMore" class="nav-link">Contact-Me</a>
                </div>
                <div @click="changeMode">
                    <span v-if="mode"><ion-icon name="sunny-outline"></ion-icon></span>
                    <span v-else><ion-icon name="moon-outline"></ion-icon></span>
                </div>         
            </div>
        </div>
    </div>
</template>