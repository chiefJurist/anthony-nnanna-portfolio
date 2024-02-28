<template>
    <div id="message" class="body-con">
        <div class="body-subcon text-gray-500 dark:text-white pb-28">
            <!--Contact Header-->
            <div class="gen-header-con">
                <div class="gen-header-text">Contact Me</div>
                <div>Get in touch</div>
            </div>

            <!--Contact Body-->
            <div class="pt-12 md:flex justify-between">
                <!--First Part-->
                <div>
                    <div class="left-contact-con">
                        <div>
                            <span class="contact-icon icon-[uil--calling]"></span>
                        </div>
                        <div>
                            <div class="left-contact-title">Contact Me</div>
                            <div>+2347010028679</div>
                        </div>
                    </div>
                    <div class="left-contact-con">
                        <div>
                            <span class="contact-icon icon icon-[uil--envelope-minus]"></span>
                        </div>
                        <div>
                            <div class="left-contact-title">Email</div>
                            <div>nnnnnwosu@gmail.com</div>
                        </div>
                    </div>
                    <div class="left-contact-con">
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
                    <div class="contact-right-con">
                        <div>Name</div>
                        <input type="text" class="contact-right-input">
                    </div>

                    <div class="contact-right-con">
                        <div>Email</div>
                        <input type="email" class="contact-right-input">
                    </div>

                    <div class="contact-right-con">
                        <div>Message</div>
                        <textarea cols="30" rows="10" class="contact-right-input"></textarea>
                    </div>

                    <a href="mailto:anthonynnanna001@gmail.com">
                        <div class="text-white bg-indigo-700 w-40 text-center py-4 rounded-lg font-semibold flex justify-evenly items-center cursor-pointer">
                            <span>Send Message</span>
                            <span class="icon-[uil--message]"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>