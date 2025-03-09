const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports ={
    darkMode: 'class',

    content: [
        "src/App.vue",
        "src/components/Header.vue",
        "src/components/Home.vue",
        "src/components/About.vue",
        "src/components/Skills.vue",
        "src/components/Qualification.vue",
        "src/components/Projects.vue",
        "src/components/Message.vue",
        "src/components/Footer.vue",
        "src/components/PhoneHeader.vue",
        "src/components/Skills/Frontend.vue",
        "src/components/Skills/Backend.vue",
        "src/components/Skills/DevOps.vue",
        "src/components/Skills/Databases.vue",
        "src/components/Skills/TestingOptimization.vue",
        "src/components/Skills/DesignTools.vue",
        "src/components/Skills/DeploymentPlatforms.vue",
        "src/components/Qualification/Sourcedware.vue",
        "src/components/Qualification/Gigabyte.vue",
        "src/components/Qualification/University.vue",
        "src/components/Qualification/Bootcamp.vue",
        "src/components/Qualification/Training.vue",
        "src/components/Projects/All.vue",
        "src/components/Projects/Koinpark.vue",
        "src/components/Projects/Gallery.vue",
        "src/components/Projects/Cadabra.vue",
        "src/components/Projects/Cicca.vue",
        "src/components/Projects/DAO.vue",
        "src/components/Projects/DataLake.vue",
        "src/components/Projects/Determinant.vue",
        "src/components/Projects/ElHippo.vue",
        "src/components/Projects/GamePad.vue",
        "src/components/Projects/Invt.vue",
        "src/components/Projects/JOG.vue",
        "src/components/Projects/MixMob.vue",
        "src/components/Projects/Router.vue",
        "src/components/Projects/Spore.vue",
        "src/components/Projects/Spruce.vue",
    ],
    theme: {
        extend: {
            //Custom font
            fontFamily: {
                nunito: ['Nunito']
            },


            //Custom Keyframes
            keyframes: {
                grow: {
                    '0%' : { transform: 'scale(0.4)' },
                    '90%' : { transform: 'scale(1.1)' },
                    '100%' : { transform: 'scale(1) '},
                },
                up: {
                    '0%' : { transform: 'translateY(50%)' },
                    '100%' : { transform: 'translateY(0) '},
                },
                left: {
                    '0%' : { transform: 'translateX(-100%)' },
                    '90%' : { transform: 'translateX(15%)' },
                    '100%' : { transform: 'translateX(0) '},
                },
                right: {
                    '0%' : { transform: 'translateX(100%)' },
                    '90%' : { transform: 'translateX(-15%)' },
                    '100%' : { transform: 'translateX(0) '},
                },
                opacity: {
                    '0%' : { opacity: 0 },
                    '100%' : { opacity: 1},
                },
            },

            //Custom Animation
            animation: {
                grow : 'grow ease-out 1s',
                up : 'up ease-in-out 1s',
                left : 'left ease-out 1s',
                right : 'right ease-out 1s',
                opacity : 'opacity ease-out 1s',
            },

            //Custom Duration
            transitionDuration: {
                '1500' : '1500ms',
                '2000' : '2000ms'
            }
        }
    },
    plugins: [
        // Iconify plugin
       addDynamicIconSelectors(),
    ],
}
