<script>
    import Header from '../components/HomeView/Header.vue';
    import Introduction from '../components/HomeView/Sect1Introduction.vue';
    import About from '../components/HomeView/Sect2About.vue';
    import Specialization from '../components/HomeView/Sect3Specialization.vue';
    import FeaturedProjects from '../components/HomeView/Sect4FeaturedProjects.vue';
    import TechnicalExpertise from '../components/HomeView/Sect5TechnicalExpertise.vue';
    import Experience from '../components/HomeView/Sect6Experience.vue';
    import Testimonials from '../components/HomeView/Sect7Testimonials.vue';
    import Blog from '../components/HomeView/Sect8Blog.vue';
    import Contact from '../components/HomeView/Sect9Contact.vue';
    import Footer from '../components/HomeView/Footer.vue';
    import PhoneHeader from '../components/HomeView/PhoneHeader.vue';

    export default{
        components: { Header, Introduction, About, Specialization, FeaturedProjects, TechnicalExpertise, Experience, Testimonials, Blog, Contact, Footer, PhoneHeader },

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
        <TechnicalExpertise></TechnicalExpertise>
        <Experience></Experience>
        <Testimonials></Testimonials>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
        <PhoneHeader :mode="darkmode" @change="toggleDarkMode"></PhoneHeader>
    </div>
</template>