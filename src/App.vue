<script>
    import Header from './components/Header.vue';
    import Home from './components/Home.vue';
    import About from './components/About.vue';
    import Skills from './components/Skills.vue';
    import Qualification from './components/Qualification.vue';
    import Projects from './components/Projects.vue';
    import Message from './components/Message.vue';
    import Footer from './components/Footer.vue';
    import PhoneHeader from './components/PhoneHeader.vue';

    export default{
        components: { Header, Home, About, Skills, Qualification, Projects, Message, Footer, PhoneHeader },

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
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Qualification></Qualification>
        <Message></Message>
        <Footer></Footer>
        <PhoneHeader :mode="darkmode" @change="toggleDarkMode"></PhoneHeader>
    </div>
</template>