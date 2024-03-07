<script>
    import All from './Projects/All.vue';

    export default {
        components: {  All },

        data(){
            return{
                //
            }
        }
    }

</script>
<template>
    <div id="projects" class="body-con">
        <div class="body-subcon">
            <!--Title-->
            <div class="gen-header-con">
                <div class="gen-header-text">Projects</div>
                <div class=" text-gray-600 dark:text-white">Some recent works</div>
            </div>
            
            
            <!--Body-->
            <div class="overflow-hidden">
                <All></All>
            </div>
            
        </div>
    </div>
</template>