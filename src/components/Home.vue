<script>
    export default{
        name: 'Home',
    }
</script>

<template>
    <div class="body-con" id="home">
        <div class="body-subcon flex flex-wrap justify-center lg:justify-around items-center">
            <!--Links-->
            <div class=" order-1 pr-4 lg:pr-0">
                <div>
                    <svg class="icon mb-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
                </div>
                <div>
                    <svg class="icon mb-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65c-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></g></svg>
                </div>
                <div>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.792 7.792 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.31 6.31 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z" clip-rule="evenodd"/></svg>
                </div>
            </div>

            <!--Image-->
            <div class=" order-2 lg:order-3">
                <img src="../../public/img/tony-img.jpg" alt="tony" class="rounded-full w-48 sm:w-64">
            </div>

            <!--Summary-->
            <div class=" order-3 lg:order-2 pt-10">
                <div class="text-4xl font-bold dark:text-white">Hi, I'm Anthony Nnanna</div>
                <div class="font-bold text-xl text-gray-600 dark:text-white mt-8 max-w-80">Full-Stack Web Developer</div>
                <div class=" text-gray-600 dark:text-white text-lg mt-4 mb-8 max-w-80">
                    A full-stack web developer with 4+ years of experience and a B.Tech in software development
                </div>

                <a href="#message">
                    <div class=" text-white bg-indigo-700 w-40 text-center py-4 rounded-lg font-semibold flex justify-evenly items-center cursor-pointer">
                        <span>Contact Me</span>
                        <span>
                            <ion-icon name="paper-plane-outline" class=" text-2xl"></ion-icon>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template> 