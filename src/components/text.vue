<template>
    <div>
      <header>
        <img src="./assets/logo.png" alt="Vue.js PWA">
        <span>Progressive Vue App</span>
      </header>
  
      <main>
        <div class="section" v-for="(section, index) in sections" :key="index">
          <h2>{{ section.headline }}</h2>
          <div class="card-carousel">
            <ArrowButton arrowType="left" @click.native="showPrevElement" :disabled="reachedMaxLeft"/>
  
            <component :is="currentElement.component"/>
  
            <ArrowButton arrowType="right" @click.native="showNextElement" :disabled="reachedMaxRight"/>
          </div>
  
          <Indicators :elements="cards" :currentElementIndex="currentElementIndex" :showElement="showElement"/>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import ArrowButton from "./ArrowButton.vue";
  import Indicators from "./Indicators.vue";
  import JOG from "@/components/project/JOG.vue";
  import DAO from "@/components/project/DAO.vue";
  import INVT from "@/components/project/INVT.vue";
  
  export default {
    name: "Carousel",
    components: { ArrowButton, Indicators, JOG, DAO, INVT },
  
    data() {
      return {
        cards: [
          { component: "JOG" },
          { component: "DAO" },
          { component: "INVT" }
        ],
        currentElementIndex: 0
      };
    },
  
    computed: {
      currentElement() {
        return this.cards[this.currentElementIndex];
      },
      reachedMaxLeft() {
        return this.currentElementIndex === 0;
      },
      reachedMaxRight() {
        return this.currentElementIndex === this.cards.length - 1;
      }
    },
  
    methods: {
      showNextElement() {
        this.currentElementIndex++;
      },
      showPrevElement() {
        this.currentElementIndex--;
      },
      showElement(elementIndex) {
        this.currentElementIndex = elementIndex;
      }
    }
  };
  </script>
  
  <style>
  /* Add your carousel styles here */
  </style>
  