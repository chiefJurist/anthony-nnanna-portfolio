<script>
    export default {
        data() {
            return {
                twitterVisible: false,
                githubVisible: false,
                linkedinVisible: false,
                titleVisible: false,
                imageVisible: false,
                buttonVisible: false,
                twitterClassApplied: false,
                githubClassApplied: false,
                linkedinClassApplied: false,
                titleClassApplied: false,
                imageClassApplied: false,
                buttonClassApplied: false,
            };
        },

        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll();
        },

        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            //THIS FOR THE ANIMATION
            handleScroll() {
                if (!this.twitterClassApplied) {
                    const twitter = document.getElementById('twitter');
                    const twitterRect = twitter.getBoundingClientRect();
                    if (twitterRect.top < window.innerHeight && twitterRect.bottom >= 0) {
                        this.twitterVisible = true;
                    } else {
                        this.twitterVisible = false;
                    }
                    if (this.twitterVisible) {
                        this.twitterClassApplied = true;
                    }
                }

                if (!this.githubClassApplied) {
                    const github = document.getElementById('github');
                    const githubRect = github.getBoundingClientRect();
                    if (githubRect.top < window.innerHeight && githubRect.bottom >= 0) {
                        this.githubVisible = true;
                    } else {
                        this.githubVisible = false;
                    }
                    if (this.githubVisible) {
                        this.githubClassApplied = true;
                    }
                }

                if (!this.linkedinClassApplied) {
                    const linkedin = document.getElementById('linkedin');
                    const linkedinRect = linkedin.getBoundingClientRect();
                    if (linkedinRect.top < window.innerHeight && linkedinRect.bottom >= 0) {
                        this.linkedinVisible = true;
                    } else {
                        this.linkedinVisible = false;
                    }
                    if (this.linkedinVisible) {
                        this.linkedinClassApplied = true;
                    }
                }

                if (!this.titleClassApplied) {
                    const title = document.getElementById('title');
                    const titleRect = title.getBoundingClientRect();
                    if (titleRect.top < window.innerHeight && titleRect.bottom >= 0) {
                        this.titleVisible = true;
                    } else {
                        this.titleVisible = false;
                    }
                    if (this.titleVisible) {
                        this.titleClassApplied = true;
                    }
                }

                if (!this.imageClassApplied) {
                    const image = document.getElementById('image');
                    const imageRect = image.getBoundingClientRect();
                    if (imageRect.top < window.innerHeight && imageRect.bottom >= 0) {
                        this.imageVisible = true;
                    } else {
                        this.imageVisible = false;
                    }
                    if (this.imageVisible) {
                        this.imageClassApplied = true;
                    }
                }

                if (!this.buttonClassApplied) {
                    const button = document.getElementById('button');
                    const buttonRect = button.getBoundingClientRect();
                    if (buttonRect.top < window.innerHeight && buttonRect.bottom >= 0) {
                        this.buttonVisible = true;
                    } else {
                        this.buttonVisible = false;
                    }
                    if (this.buttonVisible) {
                        this.buttonClassApplied = true;
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="body-con" id="home">
        <div class="body-subcon flex flex-wrap justify-center lg:justify-around items-center">
            <!--Links-->
            <div class=" order-1 pr-4 lg:pr-0">
                <div>
                    <a href="https://github.com/chiefJurist" target="_blank" id="github" :class="{ 'animate-left': githubVisible }">
                        <span class="home-icon icon-[uil--github-alt]"></span>
                    </a>
                </div>
                <div>
                    <a href="mailto:anthonynnannac@gmail.com?subject=Job%20Inquiry&body=Hello%20Anthony%2C%20I%20am%20interested%20in%20working%20with%20you." target="_blank" id="twitter" :class="{ 'animate-left': titleVisible }">
                        <span class="home-icon icon-[streamline--gmail]"></span>
                    </a>
                </div>
                <div>
                    <a href="https://t.me/chief_jurist" target="_blank" id="linkedin" :class="{ 'animate-left': linkedinVisible }">
                        <span class="home-icon icon-[uil--telegram-alt]"></span>
                    </a>
                </div>
            </div>

            <!--Image-->
            <div class=" order-2 lg:order-3">
                <img src="/img/tony3-img.jpg" alt="tony" class="rounded-full w-48 sm:w-64"  id="image" :class="{ 'animate-right': imageVisible }">
            </div>

            <!--Summary-->
            <div class=" order-3 lg:order-2 pt-10">
                <div id="title" :class="{ 'animate-left': titleVisible }">
                    <div class="gen-header-text">Hi, I'm Anthony Nnanna</div>
                    <div class="font-bold text-xl mt-8 max-w-80">Full-Stack Web Developer</div>
                </div>

                <div class=" text-gray-600 dark:text-white text-lg mt-4 mb-8 max-w-80">
                    I am a full-stack web developer with a BSc in Software Development from the Netherlands and 4+ years of experience.
                </div>

                <a href="#message">
                    <div class="section-btn" id="button" :class="{ 'animate-up': buttonVisible }">
                        <span>Contact Me</span>
                        <span class="icon-[uil--message]"></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template> 