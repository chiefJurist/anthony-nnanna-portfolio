<script>
import MixMob from './MixMob.vue';
import Cadabra from './Cadabra.vue';
import Invt from './Invt.vue';
import DAO from './DAO.vue';
import DataLake from './DataLake.vue';
import ElHippo from './ElHippo.vue';
import Gallery from './Gallery.vue';
import GamePad from './GamePad.vue';
import Router from './Router.vue';
import Koinpark from './Koinpark.vue';
import Spore from './Spore.vue';

export default {
    components: { MixMob, Cadabra, Invt, DAO, DataLake, ElHippo, Gallery, GamePad, Router, Koinpark, Spore },

    data() {
        return {
            currentIndex: 1,
            components: [],
            transitionEnabled: true,
            isActive: false, // Determines if carousel behavior is active
            activationTimeout: null, // Delays activation when scrolling fast
        };
    },

    computed: {
        realSlides() {
            return [
                this.components[this.components.length - 1],
                ...this.components,
                this.components[0]
            ];
        },
        activeIndex() {
            if (this.currentIndex === 0) {
                return this.components.length - 1;
            } else if (this.currentIndex === this.components.length + 1) {
                return 0;
            } else {
                return this.currentIndex - 1;
            }
        }
    },

    mounted() {
        this.components = [MixMob, Cadabra, Invt, DAO, DataLake, ElHippo, Gallery, GamePad, Router, Koinpark, Spore];
    },

    methods: {
        next() {
            if (this.currentIndex >= this.components.length) {
                this.transitionEnabled = true;
                this.currentIndex++;

                setTimeout(() => {
                    this.transitionEnabled = false;
                    this.currentIndex = 1;
                    requestAnimationFrame(() => { this.transitionEnabled = true; });
                }, 600);
            } else {
                this.transitionEnabled = true;
                this.currentIndex++;
            }
        },

        prev() {
            if (this.currentIndex <= 0) {
                this.transitionEnabled = true;
                this.currentIndex--;

                setTimeout(() => {
                    this.transitionEnabled = false;
                    this.currentIndex = this.components.length;
                    requestAnimationFrame(() => { this.transitionEnabled = true; });
                }, 600);
            } else {
                this.transitionEnabled = true;
                this.currentIndex--;
            }
        },

        handleMouseEnter() {
            // Activate carousel behavior only if user pauses for 500ms
            this.activationTimeout = setTimeout(() => {
                this.isActive = true;
            }, 500);
        },

        handleMouseLeave() {
            // Deactivate if user scrolls past quickly
            clearTimeout(this.activationTimeout);
            this.isActive = false;
        },

        handleMouseWheel(event) {
            if (!this.isActive) return; // Allow normal scrolling if not active

            event.preventDefault();
            if (event.deltaY > 0) {
                this.next();
            } else {
                this.prev();
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
  <div 
    class="relative overflow-hidden" 
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @wheel="handleMouseWheel"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
  >
    <div 
      class="flex transition-transform duration-700 ease-in-out"
      :class="{ 'transition-none': !transitionEnabled }"
      :style="{ 'transform': `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(component, index) in realSlides" :key="index" class="shrink-0 w-full">
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
      <div v-for="(component, index) in components" :key="index" 
           @click="currentIndex = index + 1" 
           class="carousel-btn" 
           :class="{ 'bg-indigo-700': activeIndex === index }">
      </div>
    </div>
  </div>
</template>
