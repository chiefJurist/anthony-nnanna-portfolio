<script>
    import Header from '../components/Header.vue';
    import Qualification from '../components/Qualification.vue';
    import Message from '../components/Message.vue';
    import Footer from '../components/Footer.vue';
    import PhoneHeader from '../components/PhoneHeader.vue';
    import Introduction from '../components/HomeView/Sect1Introduction.vue';
    import About from '../components/HomeView/Sect2About.vue';
    import Specialization from '../components/HomeView/Sect3Specialization.vue';
    import FeaturedProjects from '../components/HomeView/Sect4FeaturedProjects.vue';

    export default{
        components: { Header, Introduction, About, Specialization, FeaturedProjects, Qualification, Message, Footer, PhoneHeader },

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
        <Specialization></Specialization>
        <FeaturedProjects></FeaturedProjects>
        <Qualification></Qualification>
        <Message></Message>
        <Footer></Footer>
        <PhoneHeader :mode="darkmode" @change="toggleDarkMode"></PhoneHeader>
    </div>
</template>