<script>
    export default{
        methods: {
            toggle(){
                this.$emit("change")
            }
        }
    }
</script>
<template>
    <div class="q-card-backdrop">
        <div class="q-card">
            <div class="q-card-header">
                <span class="q-card-header-text">Job Summary:</span>
                <span class="icon icon-[quill--escape]" @click="toggle"></span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Develop front-end websites using HTML, Tailwind, JavaScript, Typescript, Vue, Nuxt, Vuetify, Git and other development tools.
                </span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Develop full-stack web applications using front-end languages, Laravel, PHP, SQL, MySQL, Ajax, Json, API's, Docker and other development tools.
                </span>
            </div>
        </div>
    </div>
</template>