<script>
    export default {
        data() {
            return {
                phoneVisible: false,
                emailVisible: false,
                locationVisible: false,
                nameVisible: false,
                mailVisible: false,
                contactVisible: false,
                buttonVisible: false,
                phoneClassApplied: false,
                emailClassApplied: false,
                locationClassApplied: false,
                nameClassApplied: false,
                mailClassApplied: false,
                contactClassApplied: false,
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
                if (!this.phoneClassApplied) {
                    const phone = document.getElementById('phone');
                    const phoneRect = phone.getBoundingClientRect();
                    if (phoneRect.top < window.innerHeight && phoneRect.bottom >= 0) {
                        this.phoneVisible = true;
                    } else {
                        this.phoneVisible = false;
                    }
                    if (this.phoneVisible) {
                        this.phoneClassApplied = true;
                    }
                }

                if (!this.emailClassApplied) {
                    const email = document.getElementById('email');
                    const emailRect = email.getBoundingClientRect();
                    if (emailRect.top < window.innerHeight && emailRect.bottom >= 0) {
                        this.emailVisible = true;
                    } else {
                        this.emailVisible = false;
                    }
                    if (this.emailVisible) {
                        this.emailClassApplied = true;
                    }
                }

                if (!this.locationClassApplied) {
                    const location = document.getElementById('location');
                    const locationRect = location.getBoundingClientRect();
                    if (locationRect.top < window.innerHeight && locationRect.bottom >= 0) {
                        this.locationVisible = true;
                    } else {
                        this.locationVisible = false;
                    }
                    if (this.locationVisible) {
                        this.locationClassApplied = true;
                    }
                }

                if (!this.nameClassApplied) {
                    const name = document.getElementById('name');
                    const nameRect = name.getBoundingClientRect();
                    if (nameRect.top < window.innerHeight && nameRect.bottom >= 0) {
                        this.nameVisible = true;
                    } else {
                        this.nameVisible = false;
                    }
                    if (this.nameVisible) {
                        this.nameClassApplied = true;
                    }
                }

                if (!this.mailClassApplied) {
                    const mail = document.getElementById('mail');
                    const mailRect = mail.getBoundingClientRect();
                    if (mailRect.top < window.innerHeight && mailRect.bottom >= 0) {
                        this.mailVisible = true;
                    } else {
                        this.mailVisible = false;
                    }
                    if (this.mailVisible) {
                        this.mailClassApplied = true;
                    }
                }

                if (!this.contactClassApplied) {
                    const contact = document.getElementById('contact');
                    const contactRect = contact.getBoundingClientRect();
                    if (contactRect.top < window.innerHeight && contactRect.bottom >= 0) {
                        this.contactVisible = true;
                    } else {
                        this.contactVisible = false;
                    }
                    if (this.contactVisible) {
                        this.contactClassApplied = true;
                    }
                }

                if (!this.buttonClassApplied) {
                    const button = document.getElementById('contact-button');
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
    <div id="message" class="body-con">
        <div class="body-subcon text-gray-500 dark:text-white pb-28">
            <!--Contact Header-->
            <div class="gen-header-con">
                <div class="gen-header-text">Contact Me</div>
                <div>Get in touch</div>
            </div>

            <!--Contact Body-->
            <div class="pt-12 md:flex justify-between flex-wrap gap-5">
                <!--First Part-->
                <div>
                    <div class="left-contact-con" id="phone" :class="{ 'animate-grow': phoneVisible }">
                        <div>
                            <span class="contact-icon icon-[uil--calling]"></span>
                        </div>
                        <div>
                            <div class="left-contact-title">Time Zone</div>
                            <div>GMT + 1</div>
                        </div>
                    </div>
                    <div class="left-contact-con" id="email" :class="{ 'animate-grow': emailVisible }">
                        <div>
                            <span class="contact-icon icon icon-[uil--envelope-minus]"></span>
                        </div>
                        <div>
                            <div class="left-contact-title">Email</div>
                            <div>anthonynnannac@gmail.com</div>
                        </div>
                    </div>
                    <div class="left-contact-con" id="location" :class="{ 'animate-grow': locationVisible }">
                        <div>
                            <span class="contact-icon icon icon-[uil--map-marker]"></span>
                        </div>
                        <div>
                            <div class="left-contact-title">Location</div>
                            <div>Remote</div>
                        </div>
                    </div>
                </div>

                <!--Second Part-->
                <div>
                    <div class="contact-right-con" id="name" :class="{ 'animate-grow': nameVisible }">
                        <div>Name</div>
                        <input type="text" class="contact-right-input">
                    </div>

                    <div class="contact-right-con" id="mail" :class="{ 'animate-grow': mailVisible }">
                        <div>Email</div>
                        <input type="email" class="contact-right-input">
                    </div>

                    <div class="contact-right-con" id="contact" :class="{ 'animate-grow': contactVisible }">
                        <div>Message</div>
                        <textarea cols="30" rows="10" class="contact-right-input"></textarea>
                    </div>

                    <a href="mailto:anthonynnannac@gmail.com">
                        <div class="text-white bg-indigo-700 w-40 text-center py-4 rounded-lg font-semibold flex justify-evenly items-center cursor-pointer hover:translate-y-5 transform duration-1000 ease-in-out" id="contact-button" :class="{ 'animate-up': buttonVisible }">
                            <span>Send Message</span>
                            <span class="icon-[uil--message]"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>