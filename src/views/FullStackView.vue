<script>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import PhoneHeader from '../components/PhoneHeader.vue';
    import Introduction from '../components/FullStackView/Sect1Introduction.vue';
    import Summary from '../components/FullStackView/Sect2Summary.vue';
    import Projects from '../components/FullStackView/Sect3Projects.vue';
    import CaseStudy from '../components/FullStackView/Sect4CaseStudy.vue';
    import Architecture from '../components/FullStackView/Sect5Architecture.vue';
    import Apis from '../components/FullStackView/Sect6Apis.vue';
    import Performance from '../components/FullStackView/Sect7Performance.vue';
    import Testing from '../components/FullStackView/Sect8Testing.vue';

    export default{
        components: { Header, Introduction, Summary, Projects, CaseStudy, Architecture, Apis, Performance, Testing, Footer, PhoneHeader },

        data () {
            return {
                darkmode: false
            }
        },

        methods: {
            toggleDarkMode(){
                this.darkmode = !this.darkmode

                const myElement = this.$refs.container;

                if (this.darkmode == true) {
                    myElement.classList.add('dark')
                } else {
                    myElement.classList.remove('dark')
                }
            }
        }
    }
</script>

<template>
    <div ref="container">
        <Header :mode="darkmode" @change="toggleDarkMode"></Header>
        <Introduction></Introduction>
        <Summary></Summary>
        <Projects></Projects>
        <CaseStudy></CaseStudy>
        <Architecture></Architecture>
        <Apis></Apis>
        <Performance></Performance>
        <Testing></Testing>
        <Footer></Footer>
        <PhoneHeader :mode="darkmode" @change="toggleDarkMode"></PhoneHeader>
    </div>
</template>