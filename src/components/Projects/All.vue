<script>
    import MixMob from './MixMob.vue';
    import Cadabra from  './Cadabra.vue';
    import Invt from  './Invt.vue';
    import DAO from  './DAO.vue';
    import DataLake from  './DataLake.vue';
    import ElHippo from  './ElHippo.vue';
    import Gallery from  './Gallery.vue';
    import GamePad from  './GamePad.vue';
    import Router from  './Router.vue';
    import Koinpark from './Koinpark.vue';
    import Spore from  './Spore.vue';

    export default {
        components: { MixMob, Cadabra, Invt, DAO, DataLake, ElHippo, Gallery, GamePad, Router, Koinpark, Spore },
        
        data() {
            return {
                currentIndex: 0,
                components: [ MixMob, Cadabra, Invt, DAO, DataLake, ElHippo, Gallery, GamePad, Router, Koinpark, Spore ]
            };
        },

        methods: {
            next() {
                if (this.currentIndex < this.components.length - 1) {
                    this.currentIndex++;
                } else {
                    this.currentIndex = 0;
                }
            },
            prev() {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                } else {
                    this.currentIndex = this.components.length - 1;
                }
            },
            handleMouseWheel(event) {
                // Call prev function on upward scroll, next function on downward scroll
                if (event.deltaY < 0) {
                    this.prev();
                } else {
                    this.next();
                }
            },
            handleTouchStart(event) {
                this.touchStartX = event.touches[0].clientX;
            },
            handleTouchMove(event) {
                if (!this.touchStartX) return;

                const touchEndX = event.touches[0].clientX;
                const touchDeltaX = touchEndX - this.touchStartX;

                if (Math.abs(touchDeltaX) > 50) {
                    // Call next function on swipe right, prev function on swipe left
                    if (touchDeltaX > 0) {
                        this.prev();
                    } else {
                        this.next();
                    }
                    this.touchStartX = null;
                }
            }
        }
    };
</script>

<template>
  <div class="relative" @wheel.prevent="handleMouseWheel" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
        <div class="flex transition-transform duration-1000 ease-out" :style="{ 'transform': 'translateX(-' + currentIndex * 100 + '%)' }">
            <div v-for="(component, index) in components" :key="index" class="flex-shrink-0 w-full">
                <component :is="component" class="w-full"></component>
            </div>
        </div>

        <button @click="prev" class="project-btn left-0">
            <span class="icon-[uil--angle-left-b]"></span>
        </button>
        <button @click="next" class="project-btn right-0">
            <span class="icon-[uil--angle-right-b]"></span>
        </button>
        <div class="flex justify-center">
            <div class="carousel-btn" @click="currentIndex = 0" :class="{ 'bg-indigo-700': currentIndex == 0 }"></div>
            <div class="carousel-btn" @click="currentIndex = 1" :class="{ 'bg-indigo-700': currentIndex == 1 }"></div>
            <div class="carousel-btn" @click="currentIndex = 2" :class="{ 'bg-indigo-700': currentIndex == 2 }"></div>
            <div class="carousel-btn" @click="currentIndex = 3" :class="{ 'bg-indigo-700': currentIndex == 3 }"></div>
            <div class="carousel-btn" @click="currentIndex = 4" :class="{ 'bg-indigo-700': currentIndex == 4 }"></div>
            <div class="carousel-btn" @click="currentIndex = 5" :class="{ 'bg-indigo-700': currentIndex == 5 }"></div>
            <div class="carousel-btn" @click="currentIndex = 6" :class="{ 'bg-indigo-700': currentIndex == 6 }"></div>
            <div class="carousel-btn" @click="currentIndex = 7" :class="{ 'bg-indigo-700': currentIndex == 7 }"></div>
            <div class="carousel-btn" @click="currentIndex = 8" :class="{ 'bg-indigo-700': currentIndex == 8 }"></div>
            <div class="carousel-btn" @click="currentIndex = 9" :class="{ 'bg-indigo-700': currentIndex == 9 }"></div>
            <div class="carousel-btn" @click="currentIndex = 10" :class="{ 'bg-indigo-700': currentIndex == 10 }"></div>
        </div>
  </div>
</template>
