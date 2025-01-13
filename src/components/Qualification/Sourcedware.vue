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
                    Developed front-end websites using HTML, Tailwind, JavaScript, Typescript, Vue, Git and other development tools.
                </span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Developed full-stack web applications using Laravel, PHP, SQL, MySQL, Ajax, Json, API's, Docker, front-end languages and other development tools.
                </span>
            </div>
        </div>
    </div>
</template>