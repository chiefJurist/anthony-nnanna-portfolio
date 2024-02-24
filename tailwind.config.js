/** @type {import('tailwindcss').Config} */
module.exports ={
    darkMode: 'class',

    content: [
        "src/App.vue",
        "src/components/Header.vue",
        "src/components/Home.vue",
        "src/components/About.vue",
        "src/components/Skills.vue",

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
