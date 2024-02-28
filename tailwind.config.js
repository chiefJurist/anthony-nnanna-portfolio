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
