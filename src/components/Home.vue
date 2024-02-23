<script>
    export default{
        name: 'Home',
    }
</script>

<template>
    <div class="body-con">
        <div class="body-subcon flex flex-wrap justify-center lg:justify-around items-center">
            <!--Links-->
            <div class=" order-1 pr-4 lg:pr-0">
                <div>
                    <ion-icon name="logo-github" class="text-indigo-700 text-2xl cursor-pointer"></ion-icon>
                </div>
                <div>
                    <ion-icon name="logo-twitter" class="text-indigo-700 text-2xl cursor-pointer"></ion-icon>
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe repellat facere blanditiis sit asperiores culpa aut atque sed, perspiciatis dolores?
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