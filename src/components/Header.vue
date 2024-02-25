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
    <div class=" hidden md:block">
        <div class=" px-8 flex justify-around items-center py-5 w-full h-16 z-20 bg-slate-50 drop-shadow-md fixed top-0 text-gray-700 dark:bg-slate-800 dark:text-white">
            <div class=" basis-1/3 text-center font-serif font-bold">ANTHONY NNANNA</div>

            <div class=" basis-2/3 flex justify-around font-semibold text-sm">
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
                    <span v-if="mode">
                        <svg class=" text-xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"/></svg>
                    </span>
                    <span v-else>
                        <svg class=" text-xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"/></svg>
                    </span>
                </div>         
            </div>
        </div>
    </div>
</template>