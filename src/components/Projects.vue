<script>
    import Koinpark from './Projects/Koinpark.vue';
    import MixMob from './Projects/MixMob.vue';
    import Anagar from './Projects/Anagar.vue';
    import Cadabra from  './Projects/Cadabra.vue';
    import Cicca from  './Projects/Cicca.vue';
    import DAO from  './Projects/DAO.vue';
    import DataLake from  './Projects/DataLake.vue';
    import Determinant from  './Projects/Determinant.vue';
    import ElHippo from  './Projects/ElHippo.vue';
    import Gallery from  './Projects/Gallery.vue';
    import GamePad from  './Projects/Gamepad.vue';
    import Invt from  './Projects/Invt.vue';
    import JOG from  './Projects/JOG.vue';
    import Router from  './Projects/Router.vue';
    import Spore from  './Projects/Spore.vue';

    export default {
        data(){
            return{
                components: [ Anagar, Cadabra, Cicca, DAO, DataLake, Determinant, ElHippo, Gallery, GamePad, Invt, JOG, Koinpark, MixMob, Router, Spore ],
                currentComponentIndex: null
            }
        },

        computed: {
            currentComponent() {
            if (this.currentComponentIndex !== null) {
                return this.components[this.currentComponentIndex];
            }
            return null;
            }          
        },

        methods: {
            showComponent(index) {
            this.currentComponentIndex = index;
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
                <div class=" text-gray-600 dark:text-white">Most recent work</div>
            </div>
            
            <!--Body-->
            <div class="">
                <div>
                    <span></span>
                    <div>
                        <component :is="currentComponent" v-if="currentComponent !== null"></component>
                    </div>
                    <span></span>
                </div>
                <div class="flex justify-center">
                    <div class="carousel-btn" v-for="(component, index) in components" :key="index" @click="showComponent(index)"></div>
                </div>
            </div>
            
        </div>
    </div>
</template>