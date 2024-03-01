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
        "src/components/Skills/ProgrammingLanguages.vue",
        "src/components/Skills/Frameworks.vue",
        "src/components/Skills/InfrastructuralTools.vue",
        "src/components/Skills/DevelopmentTools.vue",
        "src/components/Skills/TestingFrameworks.vue",
        "src/components/Skills/DesignTools.vue",
        "src/components/Skills/DeploymentPlatforms.vue",
        "src/components/Qualification/Sourcedware.vue",
        "src/components/Qualification/Gigabyte.vue",
        "src/components/Qualification/University.vue",
        "src/components/Qualification/Bootcamp.vue",
        "src/components/Qualification/Training.vue",
        "src/components/Projects/Koinpark.vue",
        "src/components/Projects/Gallery.vue",
        "src/components/Projects/Anagar.vue",
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
            }
        }
    },
    plugins: [
        // Iconify plugin
       addDynamicIconSelectors(),
    ],
}
