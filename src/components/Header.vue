<script>
    export default{
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
        <div class=" px-8 flex justify-around items-center border-b-2 border-gray-300 py-5 w-full fixed top-0 text-gray-700 dark:bg-slate-800 dark:text-white">
            <div class=" basis-1/4 text-center">ANTHONY NNANNA</div>

            <div class=" basis-3/4 flex justify-around font-semibold">
                <div>
                    <a href="#home">Home</a>
                </div>
                <div>
                    <a href="#about">About</a>
                </div>
                <div>
                    <a href="#skills">Skills</a>
                </div>
                <div>
                    <a href="#qualication">Qualification</a>
                </div>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#seeMore">Contact-Me</a>
                </div>
                <div @click="changeMode">
                    <span v-if="mode"><ion-icon name="sunny-outline"></ion-icon></span>
                    <span v-else><ion-icon name="moon-outline"></ion-icon></span>
                </div>         
            </div>
        </div>
    </div>
</template>