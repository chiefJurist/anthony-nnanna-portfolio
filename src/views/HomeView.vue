<script>
    import Header from '../components/Header.vue';
    import Skills from '../components/Skills.vue';
    import Qualification from '../components/Qualification.vue';
    import Projects from '../components/Projects.vue';
    import Message from '../components/Message.vue';
    import Footer from '../components/Footer.vue';
    import PhoneHeader from '../components/PhoneHeader.vue';
    import Introduction from '../components/HomeView/Introduction.vue';
    import About from '../components/HomeView/About.vue';

    export default{
        components: { Header, Introduction, About, Skills, Qualification, Projects, Message, Footer, PhoneHeader },

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
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Qualification></Qualification>
        <Message></Message>
        <Footer></Footer>
        <PhoneHeader :mode="darkmode" @change="toggleDarkMode"></PhoneHeader>
    </div>
</template>