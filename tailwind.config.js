/** @type {import('tailwindcss').Config} */
module.exports ={
    darkMode: 'class',

    content: [
        "src/App.vue",
        "src/components/Header.vue",
        "src/components/Home.vue",
        "src/components/About.vue",
        "src/components/Skills.vue",
        "src/components/Skills/ProgrammingLanguages.vue",
        "src/components/Skills/Frameworks.vue",
        "src/components/Skills/InfrastructuralTools.vue",
        "src/components/Skills/DevelopmentTools.vue",
        "src/components/Skills/TestingFrameworks.vue",
        "src/components/Skills/DesignTools.vue",
        "src/components/Skills/DeploymentPlatforms.vue",
    ],
    theme: {
        extend: {
            //Custom font
            fontFamily: {
                nunito: ['Nunito']
            }
        }
    },
    plugins: [],
}
